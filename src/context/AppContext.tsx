import { createContext, useContext, useState, useCallback, useEffect, useMemo, ReactNode } from 'react';
import { AppState, DailyLog, MealType, MealEntry, UserSettings, Product, Recipe, UserProfile, ProfilesState } from '@/types';
import { loadProfilesState, saveProfilesState, DEFAULT_STATE, createDefaultProfile } from '@/utils/storage';
import { calculateNutrition, calculateDayTotal } from '@/utils/nutrition';
import { today } from '@/utils/dates';
import { products as seedProducts } from '@/data/products';
import { checkBadges } from '@/data/badges';

interface AppContextValue {
  state: AppState;
  allProducts: Product[];
  getDailyLog: (date: string) => DailyLog;
  addMealEntry: (date: string, mealType: MealType, product: Product, quantityG: number) => void;
  removeMealEntry: (date: string, mealType: MealType, entryId: string) => void;
  copyDayMeals: (fromDate: string, toDate: string) => void;
  updateDayWeight: (date: string, weight: number | undefined) => void;
  updateDayWater: (date: string, waterMl: number) => void;
  updateSettings: (settings: Partial<UserSettings>) => void;
  toggleFavorite: (productId: string) => void;
  addCustomProduct: (product: Product) => void;
  updateCustomProduct: (product: Product) => void;
  removeCustomProduct: (productId: string) => void;
  resetProductOverride: (productId: string) => void;
  isSeedProduct: (productId: string) => boolean;
  addRecipe: (recipe: Recipe) => void;
  updateRecipe: (recipe: Recipe) => void;
  removeRecipe: (recipeId: string) => void;
  addRecipeToMeal: (date: string, mealType: MealType, recipe: Recipe, servings?: number) => void;
  updateDayBurnedKcal: (date: string, kcal: number | undefined) => void;
  addBadge: (badgeId: string) => void;
  selectedDate: string;
  setSelectedDate: (date: string) => void;
  // Profiles
  profiles: UserProfile[];
  activeProfileId: string;
  activeProfile: UserProfile | undefined;
  switchProfile: (profileId: string) => void;
  addProfile: (name: string, emoji: string) => string;
  renameProfile: (profileId: string, name: string, emoji: string) => void;
  removeProfile: (profileId: string) => void;
  updateProfilePhoto: (profileId: string, photoDataUrl: string | undefined) => void;
}

const AppContext = createContext<AppContextValue | null>(null);

function createEmptyLog(date: string): DailyLog {
  return {
    date,
    meals: {
      desayuno: [],
      almuerzo: [],
      comida: [],
      merienda: [],
      cena: [],
    },
  };
}

export function AppProvider({ children }: { children: ReactNode }) {
  const [profilesState, setProfilesState] = useState<ProfilesState>(() => loadProfilesState());
  const [selectedDate, setSelectedDate] = useState(today());

  const activeProfile = profilesState.profiles.find((p) => p.id === profilesState.activeProfileId);
  const state: AppState = activeProfile ? activeProfile.state : { ...DEFAULT_STATE };

  // Persist profile state on any change
  useEffect(() => {
    saveProfilesState(profilesState);
  }, [profilesState]);

  // Helper: update state of active profile
  const setState = useCallback((updater: (prev: AppState) => AppState) => {
    setProfilesState((ps) => {
      const idx = ps.profiles.findIndex((p) => p.id === ps.activeProfileId);
      if (idx < 0) return ps;
      const updated = { ...ps.profiles[idx], state: updater(ps.profiles[idx].state) };
      const newProfiles = [...ps.profiles];
      newProfiles[idx] = updated;
      return { ...ps, profiles: newProfiles };
    });
  }, []);

  // --- Recalculate streak and badges whenever dailyLogs change ---
  useEffect(() => {
    const logs = state.dailyLogs;
    const todayKey = today();

    // Calculate streak: count consecutive days backwards from today that have entries
    let streak = 0;
    let d = new Date(todayKey);
    while (true) {
      const key = d.toISOString().slice(0, 10);
      const log = logs[key];
      const hasEntries = log && Object.values(log.meals).some((entries) => entries.length > 0);
      if (hasEntries) {
        streak++;
        d.setDate(d.getDate() - 1);
      } else {
        break;
      }
    }

    const longestStreak = Math.max(streak, state.longestStreak);

    const totalDaysLogged = Object.values(logs).filter((log) =>
      Object.values(log.meals).some((entries) => entries.length > 0)
    ).length;

    const todayLog = logs[todayKey];
    const todayTotal = todayLog ? calculateDayTotal(todayLog.meals) : { kcal: 0, proteins: 0, carbs: 0, fats: 0 };

    let goalsHitStreak = 0;
    const gd = new Date(todayKey);
    while (true) {
      const key = gd.toISOString().slice(0, 10);
      const log = logs[key];
      if (!log) break;
      const total = calculateDayTotal(log.meals);
      if (total.kcal === 0) break;
      const ratio = total.kcal / state.settings.dailyKcalGoal;
      if (ratio >= 0.9 && ratio <= 1.1) {
        goalsHitStreak++;
        gd.setDate(gd.getDate() - 1);
      } else {
        break;
      }
    }

    let proteinGoalDays = 0;
    for (const log of Object.values(logs)) {
      const total = calculateDayTotal(log.meals);
      if (total.proteins >= state.settings.dailyProteinGoalG) proteinGoalDays++;
    }

    const waterHit = (todayLog?.waterMl ?? 0) >= 2000;

    const supermarketsUsed = new Set<string>();
    for (const log of Object.values(logs)) {
      for (const entries of Object.values(log.meals)) {
        for (const entry of entries) {
          const product = seedProducts.find((p) => p.id === entry.productId);
          if (product) supermarketsUsed.add(product.supermarket);
        }
      }
    }

    const uniqueProductsToday = todayLog
      ? new Set(Object.values(todayLog.meals).flat().map((e) => e.productId)).size
      : 0;

    const fiveMealsToday = todayLog
      ? Object.values(todayLog.meals).every((entries) => entries.length > 0)
      : false;

    const weightEntries = Object.values(logs).filter((log) => log.weight != null).length;

    const earnedBadges = checkBadges({
      totalDaysLogged,
      currentStreak: streak,
      goalsHitStreak,
      proteinGoalDays,
      waterHit,
      supermarketsUsed: supermarketsUsed.size,
      hasRecipe: state.recipes.length > 0,
      uniqueProductsToday,
      todayKcal: todayTotal.kcal,
      fiveMealsToday,
      weightEntries,
    });

    const newBadges = Array.from(new Set([...state.badges, ...earnedBadges]));
    const badgesChanged = newBadges.length !== state.badges.length;
    const streakChanged = streak !== state.currentStreak || longestStreak !== state.longestStreak;

    if (badgesChanged || streakChanged) {
      setState((prev) => ({
        ...prev,
        currentStreak: streak,
        longestStreak: Math.max(streak, prev.longestStreak),
        badges: Array.from(new Set([...prev.badges, ...earnedBadges])),
      }));
    }
  }, [state.dailyLogs, state.settings, state.recipes.length, profilesState.activeProfileId]); // eslint-disable-line react-hooks/exhaustive-deps

  // Custom products override seed products with the same ID
  const allProducts = useMemo(() => {
    const map = new Map<string, Product>(seedProducts.map((p) => [p.id, p]));
    for (const p of state.customProducts) map.set(p.id, p);
    return Array.from(map.values());
  }, [state.customProducts]);

  const getDailyLog = useCallback(
    (date: string): DailyLog => {
      return state.dailyLogs[date] ?? createEmptyLog(date);
    },
    [state.dailyLogs]
  );

  const addMealEntry = useCallback(
    (date: string, mealType: MealType, product: Product, quantityG: number) => {
      const nutrition = calculateNutrition(product, quantityG);
      const entry: MealEntry = {
        id: crypto.randomUUID(),
        productId: product.id,
        productName: product.name,
        productBrand: product.brand,
        productEmoji: product.emoji,
        quantityG,
        calculatedNutrition: nutrition,
      };

      setState((prev) => {
        const log = prev.dailyLogs[date] ?? createEmptyLog(date);
        return {
          ...prev,
          dailyLogs: {
            ...prev.dailyLogs,
            [date]: {
              ...log,
              meals: {
                ...log.meals,
                [mealType]: [...log.meals[mealType], entry],
              },
            },
          },
        };
      });
    },
    [setState]
  );

  const removeMealEntry = useCallback(
    (date: string, mealType: MealType, entryId: string) => {
      setState((prev) => {
        const log = prev.dailyLogs[date];
        if (!log) return prev;
        return {
          ...prev,
          dailyLogs: {
            ...prev.dailyLogs,
            [date]: {
              ...log,
              meals: {
                ...log.meals,
                [mealType]: log.meals[mealType].filter((e) => e.id !== entryId),
              },
            },
          },
        };
      });
    },
    [setState]
  );

  const copyDayMeals = useCallback((fromDate: string, toDate: string) => {
    setState((prev) => {
      const fromLog = prev.dailyLogs[fromDate];
      if (!fromLog) return prev;
      const newMeals = Object.fromEntries(
        Object.entries(fromLog.meals).map(([k, entries]) => [
          k,
          entries.map((e) => ({ ...e, id: crypto.randomUUID() })),
        ])
      ) as Record<MealType, MealEntry[]>;
      const toLog = prev.dailyLogs[toDate] ?? createEmptyLog(toDate);
      return {
        ...prev,
        dailyLogs: {
          ...prev.dailyLogs,
          [toDate]: { ...toLog, meals: newMeals },
        },
      };
    });
  }, [setState]);

  const updateDayWeight = useCallback((date: string, weight: number | undefined) => {
    setState((prev) => {
      const log = prev.dailyLogs[date] ?? createEmptyLog(date);
      return {
        ...prev,
        dailyLogs: {
          ...prev.dailyLogs,
          [date]: { ...log, weight },
        },
      };
    });
  }, [setState]);

  const updateDayWater = useCallback((date: string, waterMl: number) => {
    setState((prev) => {
      const log = prev.dailyLogs[date] ?? createEmptyLog(date);
      return {
        ...prev,
        dailyLogs: {
          ...prev.dailyLogs,
          [date]: { ...log, waterMl },
        },
      };
    });
  }, [setState]);

  const updateSettings = useCallback((partial: Partial<UserSettings>) => {
    setState((prev) => ({
      ...prev,
      settings: { ...prev.settings, ...partial },
    }));
  }, [setState]);

  const toggleFavorite = useCallback((productId: string) => {
    setState((prev) => ({
      ...prev,
      favoriteProductIds: prev.favoriteProductIds.includes(productId)
        ? prev.favoriteProductIds.filter((id) => id !== productId)
        : [...prev.favoriteProductIds, productId],
    }));
  }, [setState]);

  const addCustomProduct = useCallback((product: Product) => {
    setState((prev) => ({
      ...prev,
      customProducts: [...prev.customProducts, { ...product, isCustom: true }],
    }));
  }, [setState]);

  const updateCustomProduct = useCallback((product: Product) => {
    setState((prev) => {
      const exists = prev.customProducts.some((p) => p.id === product.id);
      return {
        ...prev,
        customProducts: exists
          ? prev.customProducts.map((p) => (p.id === product.id ? { ...product, isCustom: true } : p))
          : [...prev.customProducts, { ...product, isCustom: true }],
      };
    });
  }, [setState]);

  const removeCustomProduct = useCallback((productId: string) => {
    setState((prev) => ({
      ...prev,
      customProducts: prev.customProducts.filter((p) => p.id !== productId),
    }));
  }, [setState]);

  const resetProductOverride = useCallback((productId: string) => {
    setState((prev) => ({
      ...prev,
      customProducts: prev.customProducts.filter((p) => p.id !== productId),
    }));
  }, [setState]);

  const seedProductIds = useMemo(() => new Set(seedProducts.map((p) => p.id)), []);
  const isSeedProduct = useCallback((productId: string) => seedProductIds.has(productId), [seedProductIds]);

  const addRecipe = useCallback((recipe: Recipe) => {
    setState((prev) => ({
      ...prev,
      recipes: [...prev.recipes, recipe],
    }));
  }, [setState]);

  const updateRecipe = useCallback((recipe: Recipe) => {
    setState((prev) => ({
      ...prev,
      recipes: prev.recipes.map((r) => (r.id === recipe.id ? recipe : r)),
    }));
  }, [setState]);

  const removeRecipe = useCallback((recipeId: string) => {
    setState((prev) => ({
      ...prev,
      recipes: prev.recipes.filter((r) => r.id !== recipeId),
    }));
  }, [setState]);

  const addRecipeToMeal = useCallback((date: string, mealType: MealType, recipe: Recipe, servings: number = 1) => {
    const totalWeight = recipe.ingredients.reduce((s, i) => s + i.quantityG, 0);
    const weightPerServing = recipe.servings > 0 ? totalWeight / recipe.servings : totalWeight;
    const entry: MealEntry = {
      id: crypto.randomUUID(),
      productId: `recipe:${recipe.id}`,
      productName: servings === 1 ? recipe.name : `${recipe.name} (x${servings})`,
      productBrand: `Receta (${recipe.ingredients.length} ingredientes)`,
      productEmoji: recipe.emoji,
      quantityG: Math.round(weightPerServing * servings),
      calculatedNutrition: {
        kcal: Math.round(recipe.nutritionPerServing.kcal * servings),
        proteins: Math.round(recipe.nutritionPerServing.proteins * servings * 10) / 10,
        carbs: Math.round(recipe.nutritionPerServing.carbs * servings * 10) / 10,
        fats: Math.round(recipe.nutritionPerServing.fats * servings * 10) / 10,
      },
    };

    setState((prev) => {
      const log = prev.dailyLogs[date] ?? createEmptyLog(date);
      return {
        ...prev,
        dailyLogs: {
          ...prev.dailyLogs,
          [date]: {
            ...log,
            meals: {
              ...log.meals,
              [mealType]: [...log.meals[mealType], entry],
            },
          },
        },
      };
    });
  }, [setState]);

  const updateDayBurnedKcal = useCallback((date: string, kcal: number | undefined) => {
    setState((prev) => {
      const log = prev.dailyLogs[date] ?? createEmptyLog(date);
      return {
        ...prev,
        dailyLogs: {
          ...prev.dailyLogs,
          [date]: { ...log, burnedKcal: kcal },
        },
      };
    });
  }, [setState]);

  const addBadge = useCallback((badgeId: string) => {
    setState((prev) => {
      if (prev.badges.includes(badgeId)) return prev;
      return { ...prev, badges: [...prev.badges, badgeId] };
    });
  }, [setState]);

  // ---- Profile management ----
  const switchProfile = useCallback((profileId: string) => {
    setProfilesState((ps) => {
      if (!ps.profiles.some((p) => p.id === profileId)) return ps;
      return { ...ps, activeProfileId: profileId };
    });
  }, []);

  const addProfile = useCallback((name: string, emoji: string): string => {
    const profile = createDefaultProfile(name.trim() || 'Sin nombre', emoji || '👤');
    setProfilesState((ps) => ({
      profiles: [...ps.profiles, profile],
      activeProfileId: profile.id,
    }));
    return profile.id;
  }, []);

  const renameProfile = useCallback((profileId: string, name: string, emoji: string) => {
    setProfilesState((ps) => ({
      ...ps,
      profiles: ps.profiles.map((p) =>
        p.id === profileId
          ? {
              ...p,
              name: name.trim() || p.name,
              emoji: emoji || p.emoji,
              state: { ...p.state, settings: { ...p.state.settings, name: name.trim() || p.state.settings.name } },
            }
          : p
      ),
    }));
  }, []);

  const removeProfile = useCallback((profileId: string) => {
    setProfilesState((ps) => {
      if (ps.profiles.length <= 1) return ps;
      const newProfiles = ps.profiles.filter((p) => p.id !== profileId);
      const newActive = ps.activeProfileId === profileId ? newProfiles[0].id : ps.activeProfileId;
      return { profiles: newProfiles, activeProfileId: newActive };
    });
  }, []);

  const updateProfilePhoto = useCallback((profileId: string, photoDataUrl: string | undefined) => {
    setProfilesState((ps) => ({
      ...ps,
      profiles: ps.profiles.map((p) =>
        p.id === profileId ? { ...p, photoDataUrl } : p
      ),
    }));
  }, []);

  return (
    <AppContext.Provider
      value={{
        state,
        allProducts,
        getDailyLog,
        addMealEntry,
        removeMealEntry,
        copyDayMeals,
        updateDayWeight,
        updateDayWater,
        updateSettings,
        toggleFavorite,
        addCustomProduct,
        updateCustomProduct,
        removeCustomProduct,
        resetProductOverride,
        isSeedProduct,
        addRecipe,
        updateRecipe,
        removeRecipe,
        addRecipeToMeal,
        updateDayBurnedKcal,
        addBadge,
        selectedDate,
        setSelectedDate,
        profiles: profilesState.profiles,
        activeProfileId: profilesState.activeProfileId,
        activeProfile,
        switchProfile,
        addProfile,
        renameProfile,
        removeProfile,
        updateProfilePhoto,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export function useApp(): AppContextValue {
  const ctx = useContext(AppContext);
  if (!ctx) throw new Error('useApp must be used within AppProvider');
  return ctx;
}

export { DEFAULT_STATE };
