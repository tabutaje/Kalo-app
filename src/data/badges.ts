import { Badge } from '@/types';

export const ALL_BADGES: Badge[] = [
  { id: 'first-log', name: 'Primer Paso', description: 'Registra tu primera comida', emoji: '🌱' },
  { id: 'streak-3', name: 'Constante', description: '3 días seguidos registrando', emoji: '🔥' },
  { id: 'streak-7', name: 'Semana Completa', description: '7 días seguidos registrando', emoji: '⭐' },
  { id: 'streak-30', name: 'Mes Imparable', description: '30 días seguidos registrando', emoji: '🏆' },
  { id: 'goal-hit', name: 'En el Clavo', description: 'Cumple tu objetivo de kcal (±10%)', emoji: '🎯' },
  { id: 'goal-7', name: 'Semana Perfecta', description: 'Cumple tu objetivo 7 días seguidos', emoji: '💎' },
  { id: 'protein-king', name: 'Rey de la Proteína', description: 'Cumple tu objetivo de proteínas 5 días', emoji: '💪' },
  { id: 'hydrated', name: 'Hidratado', description: 'Registra 2L de agua en un día', emoji: '💧' },
  { id: 'explorer', name: 'Explorador', description: 'Prueba productos de 5 supermercados', emoji: '🗺️' },
  { id: 'chef', name: 'Chef', description: 'Crea tu primera receta', emoji: '👨‍🍳' },
  { id: 'variety', name: 'Variedad', description: 'Registra 10 productos diferentes en un día', emoji: '🌈' },
  { id: 'lightweight', name: 'Día Ligero', description: 'Completa un día con menos de 1500 kcal', emoji: '🪶' },
  { id: 'five-meals', name: '5 Comidas', description: 'Registra algo en las 5 comidas del día', emoji: '📋' },
  { id: 'weight-start', name: 'Control de Peso', description: 'Registra tu peso por primera vez', emoji: '⚖️' },
  { id: 'weight-10', name: 'Seguimiento', description: 'Registra tu peso 10 días', emoji: '📈' },
];

export function checkBadges(state: {
  totalDaysLogged: number;
  currentStreak: number;
  goalsHitStreak: number;
  proteinGoalDays: number;
  waterHit: boolean;
  supermarketsUsed: number;
  hasRecipe: boolean;
  uniqueProductsToday: number;
  todayKcal: number;
  fiveMealsToday: boolean;
  weightEntries: number;
}): string[] {
  const earned: string[] = [];
  if (state.totalDaysLogged >= 1) earned.push('first-log');
  if (state.currentStreak >= 3) earned.push('streak-3');
  if (state.currentStreak >= 7) earned.push('streak-7');
  if (state.currentStreak >= 30) earned.push('streak-30');
  if (state.goalsHitStreak >= 1) earned.push('goal-hit');
  if (state.goalsHitStreak >= 7) earned.push('goal-7');
  if (state.proteinGoalDays >= 5) earned.push('protein-king');
  if (state.waterHit) earned.push('hydrated');
  if (state.supermarketsUsed >= 5) earned.push('explorer');
  if (state.hasRecipe) earned.push('chef');
  if (state.uniqueProductsToday >= 10) earned.push('variety');
  if (state.todayKcal > 0 && state.todayKcal < 1500) earned.push('lightweight');
  if (state.fiveMealsToday) earned.push('five-meals');
  if (state.weightEntries >= 1) earned.push('weight-start');
  if (state.weightEntries >= 10) earned.push('weight-10');
  return earned;
}
