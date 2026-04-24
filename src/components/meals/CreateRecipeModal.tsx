import { useState, useMemo, useRef, useEffect } from 'react';
import Modal from '@/components/common/Modal';
import { Product, Recipe, RecipeIngredient, CalculatedNutrition } from '@/types';
import { calculateNutrition } from '@/utils/nutrition';
import { useApp } from '@/context/AppContext';

interface CreateRecipeModalProps {
  isOpen: boolean;
  onClose: () => void;
  editRecipe?: Recipe | null;
}

const EMOJI_OPTIONS = [
  // Platos principales
  '🍳', '🥘', '🍲', '🥗', '🍝', '🌮', '🥙', '🍕', '🍔', '🌭', '🥪', '🌯', '🫔',
  '🍜', '🍛', '🍣', '🍱', '🍤', '🍗', '🍖', '🥩', '🥓', '🥟', '🫕', '🥠',
  // Horneados y panadería
  '🥞', '🧇', '🥐', '🥯', '🍞', '🥖', '🥨', '🧀',
  // Postres y dulces
  '🍰', '🥧', '🧁', '🍮', '🍩', '🍪', '🍫', '🍬', '🍭', '🍡', '🍧', '🍨', '🍦',
  // Frutas y saludable
  '🍎', '🍊', '🍌', '🍓', '🍇', '🍉', '🍑', '🥭', '🍍', '🥑', '🥥', '🍒',
  // Verduras
  '🥕', '🌽', '🥦', '🥬', '🥒', '🍅', '🫑', '🥔', '🧄', '🧅', '🍄',
  // Bebidas
  '🥤', '🧃', '☕', '🍵', '🫖', '🥛', '🍶', '🍷', '🍺', '🧋',
  // Otros
  '🍯', '🥜', '🫘', '🍚', '🍙', '🍘', '🧈', '🧊', '🥫',
];

type Step = 'info' | 'ingredients' | 'review';

export default function CreateRecipeModal({ isOpen, onClose, editRecipe }: CreateRecipeModalProps) {
  const { allProducts, addRecipe, updateRecipe } = useApp();
  const [step, setStep] = useState<Step>('info');
  const [initialized, setInitialized] = useState(false);

  // Info step
  const [name, setName] = useState('');
  const [emoji, setEmoji] = useState('🍳');
  const [servings, setServings] = useState('1');

  // Ingredients step
  const [ingredients, setIngredients] = useState<RecipeIngredient[]>([]);
  const [search, setSearch] = useState('');
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [ingQuantity, setIngQuantity] = useState('');
  const searchRef = useRef<HTMLInputElement>(null);

  const isEditing = !!editRecipe;

  // Initialize form when editRecipe changes
  useEffect(() => {
    if (editRecipe && isOpen && !initialized) {
      setName(editRecipe.name);
      setEmoji(editRecipe.emoji);
      setServings(String(editRecipe.servings));
      setIngredients([...editRecipe.ingredients]);
      setStep('info');
      setInitialized(true);
    }
    if (!isOpen) {
      setInitialized(false);
    }
  }, [editRecipe, isOpen, initialized]);

  function reset() {
    setStep('info');
    setName('');
    setEmoji('🍳');
    setServings('1');
    setIngredients([]);
    setSearch('');
    setSelectedProduct(null);
    setIngQuantity('');
    setInitialized(false);
  }

  function handleClose() {
    reset();
    onClose();
  }

  // --- Computed ---
  const servingsNum = Math.max(1, Number(servings) || 1);

  const totalNutrition: CalculatedNutrition = useMemo(() => {
    return ingredients.reduce(
      (acc, ing) => ({
        kcal: acc.kcal + ing.nutrition.kcal,
        proteins: +(acc.proteins + ing.nutrition.proteins).toFixed(1),
        carbs: +(acc.carbs + ing.nutrition.carbs).toFixed(1),
        fats: +(acc.fats + ing.nutrition.fats).toFixed(1),
      }),
      { kcal: 0, proteins: 0, carbs: 0, fats: 0 }
    );
  }, [ingredients]);

  const perServing: CalculatedNutrition = useMemo(() => ({
    kcal: Math.round(totalNutrition.kcal / servingsNum),
    proteins: +(totalNutrition.proteins / servingsNum).toFixed(1),
    carbs: +(totalNutrition.carbs / servingsNum).toFixed(1),
    fats: +(totalNutrition.fats / servingsNum).toFixed(1),
  }), [totalNutrition, servingsNum]);

  // --- Product search ---
  const filteredProducts = useMemo(() => {
    const q = search.toLowerCase().trim();
    if (!q) return [];
    return allProducts
      .filter((p) =>
        p.name.toLowerCase().includes(q) ||
        p.brand.toLowerCase().includes(q)
      )
      .slice(0, 20);
  }, [allProducts, search]);

  function addIngredient() {
    if (!selectedProduct || !ingQuantity || Number(ingQuantity) <= 0) return;
    const qty = Number(ingQuantity);
    const nutrition = calculateNutrition(selectedProduct, qty);
    const ingredient: RecipeIngredient = {
      productId: selectedProduct.id,
      productName: selectedProduct.name,
      productEmoji: selectedProduct.emoji,
      quantityG: qty,
      nutrition,
    };
    setIngredients((prev) => [...prev, ingredient]);
    setSelectedProduct(null);
    setIngQuantity('');
    setSearch('');
    setTimeout(() => searchRef.current?.focus(), 100);
  }

  function removeIngredient(index: number) {
    setIngredients((prev) => prev.filter((_, i) => i !== index));
  }

  function handleSave() {
    if (!name.trim() || ingredients.length === 0) return;
    const recipe: Recipe = {
      id: isEditing ? editRecipe!.id : crypto.randomUUID(),
      name: name.trim(),
      emoji,
      ingredients,
      servings: servingsNum,
      totalNutrition,
      nutritionPerServing: perServing,
    };
    if (isEditing) {
      updateRecipe(recipe);
    } else {
      addRecipe(recipe);
    }
    handleClose();
  }

  // --- STEP: Info ---
  if (step === 'info') {
    return (
      <Modal isOpen={isOpen} onClose={handleClose} title={isEditing ? 'Editar receta' : 'Nueva comida elaborada'}>
        <div className="p-4 space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Nombre de la receta</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Ej: Torrijas caseras"
              className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-primary-500 outline-none"
              autoFocus
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Icono</label>
            <div className="flex flex-wrap gap-1.5 max-h-48 overflow-y-auto border border-gray-100 rounded-lg p-2 bg-gray-50/50">
              {EMOJI_OPTIONS.map((e) => (
                <button
                  key={e}
                  onClick={() => setEmoji(e)}
                  className={`text-xl w-9 h-9 rounded-lg flex items-center justify-center transition-colors ${
                    emoji === e ? 'bg-primary-100 ring-2 ring-primary-500' : 'bg-white hover:bg-gray-100'
                  }`}
                >
                  {e}
                </button>
              ))}
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Raciones / porciones</label>
            <input
              type="number"
              min="1"
              value={servings}
              onChange={(e) => setServings(e.target.value)}
              className="w-24 border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-primary-500 outline-none"
            />
            <p className="text-xs text-gray-400 mt-1">La nutricion se dividira entre este numero al añadirla a una comida</p>
          </div>

          <button
            onClick={() => setStep('ingredients')}
            disabled={!name.trim()}
            className="w-full btn-primary py-3 disabled:opacity-40 disabled:cursor-not-allowed"
          >
            Siguiente: Añadir ingredientes
          </button>
        </div>
      </Modal>
    );
  }

  // --- STEP: Ingredients ---
  if (step === 'ingredients') {
    return (
      <Modal isOpen={isOpen} onClose={handleClose} title={`${emoji} ${name}`}>
        <div className="p-4 space-y-4">
          <button onClick={() => setStep('info')} className="text-sm text-primary-600 hover:underline">
            ← Editar nombre
          </button>

          {/* Ingredients list */}
          {ingredients.length > 0 && (
            <div className="space-y-1">
              <p className="text-xs font-medium text-gray-500 uppercase">Ingredientes ({ingredients.length})</p>
              {ingredients.map((ing, i) => (
                <div key={i} className="flex items-center gap-2 bg-gray-50 rounded-lg px-3 py-2">
                  <span className="text-lg">{ing.productEmoji}</span>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-gray-800 truncate">{ing.productName}</p>
                    <p className="text-xs text-gray-500">{ing.quantityG}g &middot; {ing.nutrition.kcal} kcal</p>
                  </div>
                  <button
                    onClick={() => removeIngredient(i)}
                    className="text-gray-300 hover:text-red-500 text-lg"
                  >
                    &times;
                  </button>
                </div>
              ))}

              {/* Running total */}
              <div className="bg-amber-50 rounded-lg px-3 py-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-600">Total receta:</span>
                  <span className="font-bold text-gray-800">{totalNutrition.kcal} kcal</span>
                </div>
                <div className="flex justify-between text-xs text-gray-500">
                  <span>Por racion ({servingsNum}):</span>
                  <span className="font-medium">{perServing.kcal} kcal | P:{perServing.proteins}g C:{perServing.carbs}g G:{perServing.fats}g</span>
                </div>
              </div>
            </div>
          )}

          {/* Add ingredient section */}
          {selectedProduct ? (
            <div className="border border-primary-200 bg-primary-50 rounded-lg p-3 space-y-3">
              <div className="flex items-center gap-2">
                <span className="text-2xl">{selectedProduct.emoji}</span>
                <div>
                  <p className="text-sm font-medium text-gray-800">{selectedProduct.name}</p>
                  <p className="text-xs text-gray-500">{selectedProduct.brand} &middot; {selectedProduct.nutritionPer100g.kcal} kcal/100g</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <input
                  type="number"
                  value={ingQuantity}
                  onChange={(e) => setIngQuantity(e.target.value)}
                  placeholder="Cantidad (g)"
                  className="flex-1 border border-gray-300 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-primary-500 outline-none"
                  min="1"
                  autoFocus
                />
                <div className="flex gap-1">
                  {[25, 50, 100, 200].map((q) => (
                    <button
                      key={q}
                      onClick={() => setIngQuantity(String(q))}
                      className="text-xs px-2 py-1 bg-white border border-gray-200 rounded-full hover:bg-gray-50"
                    >
                      {q}g
                    </button>
                  ))}
                </div>
              </div>
              {Number(ingQuantity) > 0 && (
                <p className="text-xs text-gray-500">
                  = {calculateNutrition(selectedProduct, Number(ingQuantity)).kcal} kcal,{' '}
                  P:{calculateNutrition(selectedProduct, Number(ingQuantity)).proteins}g{' '}
                  C:{calculateNutrition(selectedProduct, Number(ingQuantity)).carbs}g{' '}
                  G:{calculateNutrition(selectedProduct, Number(ingQuantity)).fats}g
                </p>
              )}
              <div className="flex gap-2">
                <button
                  onClick={() => { setSelectedProduct(null); setIngQuantity(''); }}
                  className="flex-1 text-sm py-2 border border-gray-300 rounded-lg text-gray-600 hover:bg-gray-50"
                >
                  Cancelar
                </button>
                <button
                  onClick={addIngredient}
                  disabled={!ingQuantity || Number(ingQuantity) <= 0}
                  className="flex-1 text-sm py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 disabled:opacity-40 disabled:cursor-not-allowed"
                >
                  Añadir ingrediente
                </button>
              </div>
            </div>
          ) : (
            <div>
              <input
                ref={searchRef}
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Buscar ingrediente..."
                className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-primary-500 outline-none"
              />
              {filteredProducts.length > 0 && (
                <div className="mt-2 max-h-48 overflow-y-auto space-y-1 border border-gray-100 rounded-lg">
                  {filteredProducts.map((p) => (
                    <button
                      key={p.id}
                      onClick={() => {
                        setSelectedProduct(p);
                        setIngQuantity(String(p.defaultServingG));
                        setSearch('');
                      }}
                      className="w-full text-left flex items-center gap-2 px-3 py-2 hover:bg-gray-50 text-sm"
                    >
                      <span className="text-lg">{p.emoji}</span>
                      <div className="flex-1 min-w-0">
                        <p className="font-medium text-gray-800 truncate">{p.name}</p>
                        <p className="text-xs text-gray-500">{p.brand}</p>
                      </div>
                      <span className="text-xs px-1.5 py-0.5 rounded-full bg-primary-50 text-primary-700 font-medium">
                        {p.brand}
                      </span>
                    </button>
                  ))}
                </div>
              )}
              {search.length > 0 && filteredProducts.length === 0 && (
                <p className="text-xs text-gray-400 text-center py-3">Sin resultados</p>
              )}
            </div>
          )}

          {/* Next step */}
          <button
            onClick={() => setStep('review')}
            disabled={ingredients.length === 0}
            className="w-full btn-primary py-3 disabled:opacity-40 disabled:cursor-not-allowed"
          >
            Revisar receta ({ingredients.length} ingredientes)
          </button>
        </div>
      </Modal>
    );
  }

  // --- STEP: Review ---
  return (
    <Modal isOpen={isOpen} onClose={handleClose} title={isEditing ? 'Revisar cambios' : 'Revisar receta'}>
      <div className="p-4 space-y-4">
        <button onClick={() => setStep('ingredients')} className="text-sm text-primary-600 hover:underline">
          ← Editar ingredientes
        </button>

        <div className="text-center">
          <span className="text-5xl">{emoji}</span>
          <h3 className="text-xl font-bold text-gray-900 mt-2">{name}</h3>
          <p className="text-sm text-gray-500">{ingredients.length} ingredientes &middot; {servingsNum} {servingsNum === 1 ? 'racion' : 'raciones'}</p>
        </div>

        {/* Ingredients summary */}
        <div className="space-y-1">
          {ingredients.map((ing, i) => (
            <div key={i} className="flex items-center justify-between text-sm py-1 border-b border-gray-100 last:border-0">
              <span className="flex items-center gap-1.5">
                <span>{ing.productEmoji}</span>
                <span className="text-gray-700">{ing.productName}</span>
              </span>
              <span className="text-gray-500">{ing.quantityG}g &middot; {ing.nutrition.kcal} kcal</span>
            </div>
          ))}
        </div>

        {/* Nutrition totals */}
        <div className="bg-gradient-to-r from-orange-50 to-amber-50 rounded-xl p-4">
          <p className="text-xs font-medium text-gray-500 uppercase mb-2">Nutricion total</p>
          <div className="grid grid-cols-4 gap-2 text-center">
            <div>
              <p className="text-lg font-bold text-orange-600">{totalNutrition.kcal}</p>
              <p className="text-xs text-gray-500">kcal</p>
            </div>
            <div>
              <p className="text-lg font-bold text-blue-600">{totalNutrition.proteins}g</p>
              <p className="text-xs text-gray-500">Prot</p>
            </div>
            <div>
              <p className="text-lg font-bold text-amber-600">{totalNutrition.carbs}g</p>
              <p className="text-xs text-gray-500">Carbs</p>
            </div>
            <div>
              <p className="text-lg font-bold text-red-600">{totalNutrition.fats}g</p>
              <p className="text-xs text-gray-500">Grasas</p>
            </div>
          </div>
        </div>

        {servingsNum > 1 && (
          <div className="bg-primary-50 rounded-xl p-4">
            <p className="text-xs font-medium text-gray-500 uppercase mb-2">Por racion (1/{servingsNum})</p>
            <div className="grid grid-cols-4 gap-2 text-center">
              <div>
                <p className="text-lg font-bold text-primary-700">{perServing.kcal}</p>
                <p className="text-xs text-gray-500">kcal</p>
              </div>
              <div>
                <p className="text-lg font-bold text-blue-600">{perServing.proteins}g</p>
                <p className="text-xs text-gray-500">Prot</p>
              </div>
              <div>
                <p className="text-lg font-bold text-amber-600">{perServing.carbs}g</p>
                <p className="text-xs text-gray-500">Carbs</p>
              </div>
              <div>
                <p className="text-lg font-bold text-red-600">{perServing.fats}g</p>
                <p className="text-xs text-gray-500">Grasas</p>
              </div>
            </div>
          </div>
        )}

        <button
          onClick={handleSave}
          className="w-full btn-primary py-3 text-lg"
        >
          {isEditing ? 'Guardar cambios' : 'Guardar receta'}
        </button>
      </div>
    </Modal>
  );
}
