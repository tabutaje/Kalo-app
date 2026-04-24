import { useState } from 'react';
import { MealType, MealEntry, MEAL_LABELS, MEAL_ICONS } from '@/types';
import { calculateMealTotal } from '@/utils/nutrition';
import MealEntryCard from './MealEntryCard';

interface MealSectionProps {
  mealType: MealType;
  entries: MealEntry[];
  onAddEntry: () => void;
  onAddRecipe: () => void;
  onRemoveEntry: (entryId: string) => void;
}

export default function MealSection({ mealType, entries, onAddEntry, onAddRecipe, onRemoveEntry }: MealSectionProps) {
  const [isOpen, setIsOpen] = useState(true);
  const total = calculateMealTotal(entries);

  return (
    <div className="card mb-3">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between"
      >
        <div className="flex items-center gap-2">
          <span className="text-xl">{MEAL_ICONS[mealType]}</span>
          <span className="font-semibold text-gray-800">{MEAL_LABELS[mealType]}</span>
          {entries.length > 0 && (
            <span className="text-xs bg-gray-100 text-gray-600 px-2 py-0.5 rounded-full">
              {entries.length}
            </span>
          )}
        </div>
        <div className="flex items-center gap-2">
          {total.kcal > 0 && (
            <span className="text-sm font-bold text-primary-600">{total.kcal} kcal</span>
          )}
          <span className="text-gray-400 text-sm">{isOpen ? '▲' : '▼'}</span>
        </div>
      </button>

      {isOpen && (
        <div className="mt-3 space-y-2">
          {entries.map((entry) => (
            <MealEntryCard
              key={entry.id}
              entry={entry}
              onRemove={() => onRemoveEntry(entry.id)}
            />
          ))}

          <div className="flex gap-2">
            <button
              onClick={onAddEntry}
              className="flex-1 py-2 border-2 border-dashed border-gray-200 rounded-lg text-sm text-gray-500 hover:border-primary-400 hover:text-primary-600 transition-colors"
            >
              + Añadir alimento
            </button>
            <button
              onClick={onAddRecipe}
              className="py-2 px-3 border-2 border-dashed border-amber-200 rounded-lg text-sm text-amber-600 hover:border-amber-400 hover:bg-amber-50 transition-colors"
              title="Añadir comida elaborada"
            >
              🍳 Elaborada
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
