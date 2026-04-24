import { useState, useMemo, useEffect } from 'react';
import Modal from '@/components/common/Modal';
import CreateRecipeModal from '@/components/meals/CreateRecipeModal';
import { Recipe, MealType, MEAL_LABELS } from '@/types';
import { useApp } from '@/context/AppContext';

interface AddRecipeToMealModalProps {
  isOpen: boolean;
  onClose: () => void;
  mealType: MealType;
  date: string;
}

export default function AddRecipeToMealModal({ isOpen, onClose, mealType, date }: AddRecipeToMealModalProps) {
  const { state, addRecipeToMeal, removeRecipe } = useApp();
  const [selectedRecipe, setSelectedRecipe] = useState<Recipe | null>(null);
  const [confirmDelete, setConfirmDelete] = useState<string | null>(null);
  const [servingsCount, setServingsCount] = useState(1);
  const [editingRecipe, setEditingRecipe] = useState<Recipe | null>(null);
  const [search, setSearch] = useState('');

  useEffect(() => {
    if (!isOpen) setSearch('');
  }, [isOpen]);

  const recipes = state.recipes;

  const filteredRecipes = useMemo(() => {
    const q = search.toLowerCase().trim();
    if (!q) return recipes;
    return recipes.filter((r) =>
      r.name.toLowerCase().includes(q) ||
      r.ingredients.some((ing) => ing.productName.toLowerCase().includes(q))
    );
  }, [recipes, search]);

  function handleAdd(recipe: Recipe) {
    addRecipeToMeal(date, mealType, recipe, servingsCount);
    setSelectedRecipe(null);
    setServingsCount(1);
    onClose();
  }

  function handleDelete(recipeId: string) {
    removeRecipe(recipeId);
    setConfirmDelete(null);
    if (selectedRecipe?.id === recipeId) setSelectedRecipe(null);
  }

  if (selectedRecipe) {
    return (
      <Modal isOpen={isOpen} onClose={onClose} title={`${selectedRecipe.emoji} ${selectedRecipe.name}`}>
        <div className="p-4 space-y-4">
          <button onClick={() => setSelectedRecipe(null)} className="text-sm text-primary-600 hover:underline">
            ← Volver a recetas
          </button>

          <div className="text-center">
            <span className="text-5xl">{selectedRecipe.emoji}</span>
            <h3 className="text-lg font-bold text-gray-900 mt-2">{selectedRecipe.name}</h3>
            <p className="text-sm text-gray-500">
              {selectedRecipe.ingredients.length} ingredientes &middot; {selectedRecipe.servings} {selectedRecipe.servings === 1 ? 'racion' : 'raciones'}
            </p>
          </div>

          {/* Ingredients */}
          <div className="space-y-1">
            {selectedRecipe.ingredients.map((ing, i) => (
              <div key={i} className="flex items-center justify-between text-sm py-1 border-b border-gray-100 last:border-0">
                <span className="flex items-center gap-1.5">
                  <span>{ing.productEmoji}</span>
                  <span className="text-gray-700">{ing.productName}</span>
                </span>
                <span className="text-gray-500">{ing.quantityG}g</span>
              </div>
            ))}
          </div>

          {/* Servings selector */}
          <div className="bg-gray-50 rounded-xl p-3">
            <p className="text-xs font-medium text-gray-500 uppercase mb-2 text-center">
              Raciones a añadir
            </p>
            <div className="flex items-center justify-center gap-4">
              <button
                onClick={() => setServingsCount(Math.max(0.5, servingsCount - 0.5))}
                className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-200 text-gray-600 hover:bg-gray-300 text-lg font-bold"
              >
                −
              </button>
              <span className="text-2xl font-bold text-gray-800 w-12 text-center">{servingsCount}</span>
              <button
                onClick={() => setServingsCount(servingsCount + 0.5)}
                className="w-10 h-10 flex items-center justify-center rounded-full bg-primary-500 text-white hover:bg-primary-600 text-lg font-bold"
              >
                +
              </button>
            </div>
          </div>

          {/* Per serving nutrition */}
          <div className="bg-primary-50 rounded-xl p-4">
            <p className="text-xs font-medium text-gray-500 uppercase mb-2">
              Total ({servingsCount} {servingsCount === 1 ? 'ración' : 'raciones'})
            </p>
            <div className="grid grid-cols-4 gap-2 text-center">
              <div>
                <p className="text-lg font-bold text-primary-700">{Math.round(selectedRecipe.nutritionPerServing.kcal * servingsCount)}</p>
                <p className="text-xs text-gray-500">kcal</p>
              </div>
              <div>
                <p className="text-lg font-bold text-blue-600">{Math.round(selectedRecipe.nutritionPerServing.proteins * servingsCount * 10) / 10}g</p>
                <p className="text-xs text-gray-500">Prot</p>
              </div>
              <div>
                <p className="text-lg font-bold text-amber-600">{Math.round(selectedRecipe.nutritionPerServing.carbs * servingsCount * 10) / 10}g</p>
                <p className="text-xs text-gray-500">Carbs</p>
              </div>
              <div>
                <p className="text-lg font-bold text-red-600">{Math.round(selectedRecipe.nutritionPerServing.fats * servingsCount * 10) / 10}g</p>
                <p className="text-xs text-gray-500">Grasas</p>
              </div>
            </div>
          </div>

          <button
            onClick={() => handleAdd(selectedRecipe)}
            className="w-full btn-primary py-3 text-lg"
          >
            Añadir {servingsCount} {servingsCount === 1 ? 'ración' : 'raciones'} a {MEAL_LABELS[mealType]}
          </button>
        </div>
      </Modal>
    );
  }

  return (
    <Modal isOpen={isOpen} onClose={onClose} title={`Comida elaborada → ${MEAL_LABELS[mealType]}`}>
      <div className="p-4 space-y-3">
        {recipes.length === 0 ? (
          <div className="text-center py-8">
            <span className="text-4xl">🍳</span>
            <p className="text-gray-500 mt-2">No tienes recetas guardadas</p>
            <p className="text-sm text-gray-400">Crea una desde el boton "Crear comida elaborada"</p>
          </div>
        ) : (
          <>
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Buscar receta por nombre o ingrediente..."
              className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none"
              autoFocus
            />
            {filteredRecipes.length === 0 ? (
              <p className="text-sm text-gray-400 text-center py-4">
                Sin resultados para "{search}"
              </p>
            ) : (
              <p className="text-xs text-gray-400">{filteredRecipes.length} {filteredRecipes.length === 1 ? 'receta' : 'recetas'}</p>
            )}
          <div className="space-y-2">
            {filteredRecipes.map((recipe) => (
              <div key={recipe.id} className="relative">
                <button
                  onClick={() => setSelectedRecipe(recipe)}
                  className="w-full text-left flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 active:bg-gray-100 transition-colors"
                >
                  <span className="text-3xl shrink-0">{recipe.emoji}</span>
                  <div className="flex-1 min-w-0">
                    <p className="font-medium text-gray-800">{recipe.name}</p>
                    <p className="text-xs text-gray-500">
                      {recipe.ingredients.length} ing. &middot; {recipe.nutritionPerServing.kcal} kcal/racion
                    </p>
                  </div>
                  <div className="text-right shrink-0">
                    <p className="text-xs text-gray-400">{recipe.servings} rac.</p>
                  </div>
                </button>
                {confirmDelete === recipe.id ? (
                  <div className="absolute right-2 top-1/2 -translate-y-1/2 flex items-center gap-1 bg-white border border-red-200 rounded-lg px-2 py-1 shadow-sm">
                    <button
                      onClick={() => handleDelete(recipe.id)}
                      className="text-xs text-red-600 font-medium px-2 py-1 hover:bg-red-50 rounded"
                    >
                      Borrar
                    </button>
                    <button
                      onClick={() => setConfirmDelete(null)}
                      className="text-xs text-gray-500 px-2 py-1 hover:bg-gray-50 rounded"
                    >
                      No
                    </button>
                  </div>
                ) : (
                  <div className="absolute right-2 top-1/2 -translate-y-1/2 flex items-center gap-1">
                    <button
                      onClick={(e) => { e.stopPropagation(); setEditingRecipe(recipe); }}
                      className="text-gray-300 hover:text-primary-500 text-sm p-1"
                      title="Editar receta"
                    >
                      ✏️
                    </button>
                    <button
                      onClick={(e) => { e.stopPropagation(); setConfirmDelete(recipe.id); }}
                      className="text-gray-300 hover:text-red-400 text-sm p-1"
                      title="Eliminar receta"
                    >
                      🗑️
                    </button>
                  </div>
                )}
              </div>
            ))}
          </div>
          </>
        )}
      </div>

      <CreateRecipeModal
        isOpen={!!editingRecipe}
        onClose={() => setEditingRecipe(null)}
        editRecipe={editingRecipe}
      />
    </Modal>
  );
}
