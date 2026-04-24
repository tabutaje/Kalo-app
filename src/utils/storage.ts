import { AppState, UserProfile, ProfilesState } from '@/types';

const STORAGE_KEY = 'calorapp_state';
const PROFILES_KEY = 'calorapp_profiles';
const VERSION_KEY = 'calorapp_version';
const CURRENT_VERSION = 4;

export const DEFAULT_STATE: AppState = {
  dailyLogs: {},
  customProducts: [],
  recipes: [],
  settings: {
    dailyKcalGoal: 2000,
    dailyProteinGoalG: 120,
    dailyCarbsGoalG: 250,
    dailyFatsGoalG: 65,
    name: '',
    dietType: 'flexible',
    waterGoalMl: 2000,
    weightUnit: 'kg',
  },
  favoriteProductIds: [],
  badges: [],
  currentStreak: 0,
  longestStreak: 0,
};

function createDefaultProfile(name: string = 'Yo', emoji: string = '👤'): UserProfile {
  return {
    id: crypto.randomUUID(),
    name,
    emoji,
    createdAt: new Date().toISOString(),
    state: {
      ...DEFAULT_STATE,
      settings: { ...DEFAULT_STATE.settings, name },
    },
  };
}

/**
 * Migrate legacy single-state storage to new profile-based storage.
 * If old calorapp_state exists and no profiles yet, create a "Yo" profile with that data.
 */
function migrateToProfiles(): ProfilesState {
  // Already have profiles
  const profilesRaw = localStorage.getItem(PROFILES_KEY);
  if (profilesRaw) {
    try {
      const parsed = JSON.parse(profilesRaw) as ProfilesState;
      if (parsed.profiles && parsed.profiles.length > 0) {
        return parsed;
      }
    } catch {
      // fall through and recreate
    }
  }

  // Legacy state exists — use it for the first profile
  let legacyStateRaw = localStorage.getItem(STORAGE_KEY);
  if (!legacyStateRaw) {
    legacyStateRaw = localStorage.getItem('calorapp-state');
  }

  let initialState: AppState;
  if (legacyStateRaw) {
    try {
      initialState = normalizeLegacyState(JSON.parse(legacyStateRaw));
    } catch {
      initialState = { ...DEFAULT_STATE };
    }
  } else {
    initialState = { ...DEFAULT_STATE };
  }

  const profile: UserProfile = {
    id: crypto.randomUUID(),
    name: initialState.settings.name || 'Yo',
    emoji: '👤',
    createdAt: new Date().toISOString(),
    state: initialState,
  };

  const profilesState: ProfilesState = {
    profiles: [profile],
    activeProfileId: profile.id,
  };

  localStorage.setItem(PROFILES_KEY, JSON.stringify(profilesState));
  localStorage.setItem(VERSION_KEY, String(CURRENT_VERSION));
  // Keep old STORAGE_KEY for backwards compat but don't rely on it
  return profilesState;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function normalizeLegacyState(parsed: any): AppState {
  // Migrate dailyLogs: ensure all logs have new fields with defaults
  const migratedLogs: Record<string, any> = {};
  if (parsed.dailyLogs) {
    for (const [date, log] of Object.entries(parsed.dailyLogs) as [string, any][]) {
      migratedLogs[date] = {
        date: log.date ?? date,
        meals: log.meals ?? { desayuno: [], almuerzo: [], comida: [], merienda: [], cena: [] },
        weight: log.weight,
        waterMl: log.waterMl,
        burnedKcal: log.burnedKcal,
        notes: log.notes,
      };
    }
  }

  // Migrate old Recipe format
  const recipes = (parsed.recipes ?? []).map((r: any) => ({
    ...r,
    ingredients: (r.ingredients ?? []).map((ing: any) => ({
      productId: ing.productId ?? '',
      productName: ing.productName ?? '',
      productEmoji: ing.productEmoji ?? '🍽️',
      quantityG: ing.quantityG ?? 0,
      nutrition: ing.nutrition ?? { kcal: 0, proteins: 0, carbs: 0, fats: 0 },
    })),
    nutritionPerServing: r.nutritionPerServing ?? r.totalNutrition ?? { kcal: 0, proteins: 0, carbs: 0, fats: 0 },
  }));

  return {
    ...DEFAULT_STATE,
    ...parsed,
    dailyLogs: migratedLogs,
    settings: { ...DEFAULT_STATE.settings, ...parsed.settings },
    recipes,
    badges: parsed.badges ?? [],
    currentStreak: parsed.currentStreak ?? 0,
    longestStreak: parsed.longestStreak ?? 0,
    customProducts: parsed.customProducts ?? [],
    favoriteProductIds: parsed.favoriteProductIds ?? [],
  };
}

export function loadProfilesState(): ProfilesState {
  try {
    const raw = localStorage.getItem(PROFILES_KEY);
    if (!raw) {
      return migrateToProfiles();
    }
    const parsed = JSON.parse(raw) as ProfilesState;

    // Normalize each profile's state
    const normalized: UserProfile[] = (parsed.profiles ?? []).map((p) => ({
      ...p,
      state: normalizeLegacyState(p.state),
    }));

    if (normalized.length === 0) {
      return migrateToProfiles();
    }

    const activeId = parsed.activeProfileId && normalized.some((p) => p.id === parsed.activeProfileId)
      ? parsed.activeProfileId
      : normalized[0].id;

    return { profiles: normalized, activeProfileId: activeId };
  } catch {
    return migrateToProfiles();
  }
}

export function saveProfilesState(ps: ProfilesState): void {
  try {
    localStorage.setItem(PROFILES_KEY, JSON.stringify(ps));
    localStorage.setItem(VERSION_KEY, String(CURRENT_VERSION));
  } catch (e) {
    console.error('Error saving profiles state:', e);
  }
}

// Keep these for backwards compatibility — redirect to active profile
export function loadState(): AppState {
  const ps = loadProfilesState();
  const active = ps.profiles.find((p) => p.id === ps.activeProfileId);
  return active ? active.state : { ...DEFAULT_STATE };
}

export function saveState(_state: AppState): void {
  // No-op — saving is now handled by saveProfilesState via AppContext
}

export function exportToCSV(state: AppState): string {
  const lines = ['Fecha,Comida,Producto,Marca,Cantidad(g),Kcal,Proteinas(g),Carbos(g),Grasas(g)'];
  for (const [date, log] of Object.entries(state.dailyLogs)) {
    for (const [mealType, entries] of Object.entries(log.meals)) {
      for (const entry of entries) {
        lines.push(
          `${date},${mealType},${entry.productName},${entry.productBrand},${entry.quantityG},${entry.calculatedNutrition.kcal},${entry.calculatedNutrition.proteins},${entry.calculatedNutrition.carbs},${entry.calculatedNutrition.fats}`
        );
      }
    }
  }
  return lines.join('\n');
}

export function downloadCSV(state: AppState, profileName?: string): void {
  const csv = exportToCSV(state);
  const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  const suffix = profileName ? `-${profileName.replace(/\s+/g, '_')}` : '';
  a.download = `kalo-datos${suffix}-${new Date().toISOString().split('T')[0]}.csv`;
  a.click();
  URL.revokeObjectURL(url);
}

export function exportToJSON(state: AppState, profileName?: string): void {
  const json = JSON.stringify(state, null, 2);
  const blob = new Blob([json], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  const suffix = profileName ? `-${profileName.replace(/\s+/g, '_')}` : '';
  a.download = `kalo-backup${suffix}-${new Date().toISOString().split('T')[0]}.json`;
  a.click();
  URL.revokeObjectURL(url);
}

export { createDefaultProfile };
