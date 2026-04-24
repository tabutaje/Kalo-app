export type Supermarket =
  | 'mercadona'
  | 'lidl'
  | 'carrefour'
  | 'dia'
  | 'aldi'
  | 'eroski'
  | 'ahorramas'
  | 'supeco'
  | 'alcampo'
  | 'consum'
  | 'hipercor'
  | 'bonpreu'
  | 'masymas'
  | 'otros';

export type ProductCategory =
  | 'lacteos'
  | 'carnes'
  | 'pescados'
  | 'frutas'
  | 'verduras'
  | 'cereales'
  | 'legumbres'
  | 'bebidas'
  | 'snacks'
  | 'congelados'
  | 'embutidos'
  | 'panaderia'
  | 'aceites'
  | 'salsas'
  | 'huevos'
  | 'dulces'
  | 'conservas'
  | 'otros';

export type MealType = 'desayuno' | 'almuerzo' | 'comida' | 'merienda' | 'cena';

export interface NutritionPer100g {
  kcal: number;
  proteins: number;
  carbs: number;
  fats: number;
}

export interface Product {
  id: string;
  name: string;
  brand: string;
  supermarket: Supermarket;
  category: ProductCategory;
  nutritionPer100g: NutritionPer100g;
  defaultServingG: number;
  unit: 'g' | 'ml';
  emoji: string;
  isCustom?: boolean;
}

export interface CalculatedNutrition {
  kcal: number;
  proteins: number;
  carbs: number;
  fats: number;
}

export interface MealEntry {
  id: string;
  productId: string;
  productName: string;
  productBrand: string;
  productEmoji: string;
  quantityG: number;
  calculatedNutrition: CalculatedNutrition;
}

export interface DailyLog {
  date: string;
  meals: Record<MealType, MealEntry[]>;
  weight?: number;
  waterMl?: number;
  burnedKcal?: number;
  notes?: string;
}

export type DietType = 'flexible' | 'vegetariana' | 'vegana' | 'lowcarb' | 'keto' | 'proteica';

export interface UserSettings {
  dailyKcalGoal: number;
  dailyProteinGoalG: number;
  dailyCarbsGoalG: number;
  dailyFatsGoalG: number;
  name: string;
  dietType: DietType;
  waterGoalMl: number;
  weightUnit: 'kg' | 'lb';
}

export interface RecipeIngredient {
  productId: string;
  productName: string;
  productEmoji: string;
  quantityG: number;
  nutrition: CalculatedNutrition;
}

export interface Recipe {
  id: string;
  name: string;
  emoji: string;
  ingredients: RecipeIngredient[];
  servings: number;
  totalNutrition: CalculatedNutrition;
  nutritionPerServing: CalculatedNutrition;
}

export interface Badge {
  id: string;
  name: string;
  description: string;
  emoji: string;
  unlockedAt?: string;
}

export interface AppState {
  dailyLogs: Record<string, DailyLog>;
  customProducts: Product[];
  recipes: Recipe[];
  settings: UserSettings;
  favoriteProductIds: string[];
  badges: string[];
  currentStreak: number;
  longestStreak: number;
}

export interface UserProfile {
  id: string;
  name: string;
  emoji: string;
  /** Optional custom photo as a data URL (base64). When set, overrides emoji. */
  photoDataUrl?: string;
  createdAt: string;
  state: AppState;
}

export interface ProfilesState {
  profiles: UserProfile[];
  activeProfileId: string;
}

export const DIET_LABELS: Record<DietType, string> = {
  flexible: 'Flexible',
  vegetariana: 'Vegetariana',
  vegana: 'Vegana',
  lowcarb: 'Baja en Carbos',
  keto: 'Keto',
  proteica: 'Alta en Proteínas',
};

export const MEAL_LABELS: Record<MealType, string> = {
  desayuno: 'Desayuno',
  almuerzo: 'Almuerzo',
  comida: 'Comida',
  merienda: 'Merienda',
  cena: 'Cena',
};

export const MEAL_ICONS: Record<MealType, string> = {
  desayuno: '☀️',
  almuerzo: '🥪',
  comida: '🍽️',
  merienda: '🍪',
  cena: '🌙',
};

export const SUPERMARKET_LABELS: Record<Supermarket, string> = {
  mercadona: 'Mercadona',
  lidl: 'Lidl',
  carrefour: 'Carrefour',
  dia: 'Dia',
  aldi: 'Aldi',
  eroski: 'Eroski',
  ahorramas: 'AhorraMás',
  supeco: 'Supeco',
  alcampo: 'Alcampo',
  consum: 'Consum',
  hipercor: 'Hipercor',
  bonpreu: 'BonPreu',
  masymas: 'Mas y Mas',
  otros: 'Genéricos',
};

export const SUPERMARKET_COLORS: Record<Supermarket, string> = {
  mercadona: 'bg-green-100 text-green-800',
  lidl: 'bg-blue-100 text-blue-800',
  carrefour: 'bg-indigo-100 text-indigo-800',
  dia: 'bg-red-100 text-red-800',
  aldi: 'bg-orange-100 text-orange-800',
  eroski: 'bg-rose-100 text-rose-800',
  ahorramas: 'bg-yellow-100 text-yellow-800',
  supeco: 'bg-purple-100 text-purple-800',
  alcampo: 'bg-cyan-100 text-cyan-800',
  consum: 'bg-lime-100 text-lime-800',
  hipercor: 'bg-emerald-100 text-emerald-800',
  bonpreu: 'bg-teal-100 text-teal-800',
  masymas: 'bg-fuchsia-100 text-fuchsia-800',
  otros: 'bg-gray-100 text-gray-800',
};

export const CATEGORY_LABELS: Record<ProductCategory, string> = {
  lacteos: 'Lácteos',
  carnes: 'Carnes',
  pescados: 'Pescados',
  frutas: 'Frutas',
  verduras: 'Verduras',
  cereales: 'Cereales',
  legumbres: 'Legumbres',
  bebidas: 'Bebidas',
  snacks: 'Snacks',
  congelados: 'Congelados',
  embutidos: 'Embutidos',
  panaderia: 'Panadería',
  aceites: 'Aceites',
  salsas: 'Salsas',
  huevos: 'Huevos',
  dulces: 'Dulces',
  conservas: 'Conservas',
  otros: 'Otros',
};

export const MEAL_ORDER: MealType[] = ['desayuno', 'almuerzo', 'comida', 'merienda', 'cena'];
