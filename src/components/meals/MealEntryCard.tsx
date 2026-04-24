import { MealEntry } from '@/types';

interface MealEntryCardProps {
  entry: MealEntry;
  onRemove: () => void;
}

export default function MealEntryCard({ entry, onRemove }: MealEntryCardProps) {
  return (
    <div className="flex items-center gap-2 py-2 px-3 bg-gray-50 rounded-lg">
      <span className="text-2xl shrink-0">{entry.productEmoji || '🍽️'}</span>
      <div className="flex-1 min-w-0">
        <p className="text-sm font-medium text-gray-800 truncate">{entry.productName}</p>
        <p className="text-xs text-gray-500">
          {entry.productBrand} &middot; {entry.quantityG}g
        </p>
      </div>
      <div className="flex items-center gap-3 ml-2">
        <div className="text-right">
          <p className="text-sm font-bold text-gray-900">{entry.calculatedNutrition.kcal} kcal</p>
          <p className="text-xs text-gray-400">
            P:{entry.calculatedNutrition.proteins} C:{entry.calculatedNutrition.carbs} G:{entry.calculatedNutrition.fats}
          </p>
        </div>
        <button
          onClick={onRemove}
          className="text-gray-300 hover:text-red-500 transition-colors text-lg"
          title="Eliminar"
        >
          &times;
        </button>
      </div>
    </div>
  );
}
