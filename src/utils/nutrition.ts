import { Product, CalculatedNutrition, MealEntry, MealType } from '@/types';

function round1(n: number): number {
  return Math.round(n * 10) / 10;
}

export function calculateNutrition(product: Product, quantityG: number): CalculatedNutrition {
  const factor = quantityG / 100;
  return {
    kcal: Math.round(product.nutritionPer100g.kcal * factor),
    proteins: round1(product.nutritionPer100g.proteins * factor),
    carbs: round1(product.nutritionPer100g.carbs * factor),
    fats: round1(product.nutritionPer100g.fats * factor),
  };
}

export function calculateMealTotal(entries: MealEntry[]): CalculatedNutrition {
  return entries.reduce(
    (acc, entry) => ({
      kcal: acc.kcal + entry.calculatedNutrition.kcal,
      proteins: round1(acc.proteins + entry.calculatedNutrition.proteins),
      carbs: round1(acc.carbs + entry.calculatedNutrition.carbs),
      fats: round1(acc.fats + entry.calculatedNutrition.fats),
    }),
    { kcal: 0, proteins: 0, carbs: 0, fats: 0 }
  );
}

export function calculateDayTotal(meals: Record<MealType, MealEntry[]>): CalculatedNutrition {
  const allEntries = Object.values(meals).flat();
  return calculateMealTotal(allEntries);
}

export const EMPTY_NUTRITION: CalculatedNutrition = { kcal: 0, proteins: 0, carbs: 0, fats: 0 };
