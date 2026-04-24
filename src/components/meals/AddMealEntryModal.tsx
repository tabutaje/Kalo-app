import { useState, useMemo, useRef, useEffect } from 'react';
import Modal from '@/components/common/Modal';
import { Product, MealType, MEAL_LABELS, CATEGORY_LABELS, ProductCategory } from '@/types';
import { calculateNutrition } from '@/utils/nutrition';
import { useApp } from '@/context/AppContext';
import CustomProductModal from '@/components/products/CustomProductModal';

interface AddMealEntryModalProps {
  isOpen: boolean;
  onClose: () => void;
  mealType: MealType;
  date: string;
}

export default function AddMealEntryModal({ isOpen, onClose, mealType, date }: AddMealEntryModalProps) {
  const { allProducts, addMealEntry, state, isSeedProduct } = useApp();
  const [search, setSearch] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<ProductCategory | 'all'>('all');
  const [selectedBrand, setSelectedBrand] = useState<string>('all');
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [quantity, setQuantity] = useState('');
  const [editingProduct, setEditingProduct] = useState<Product | null>(null);
  const searchRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen) {
      setSearch('');
      setSelectedCategory('all');
      setSelectedBrand('all');
      setSelectedProduct(null);
      setQuantity('');
      setTimeout(() => searchRef.current?.focus(), 100);
    }
  }, [isOpen]);

  const brands = useMemo(() => {
    const set = new Set(allProducts.map((p) => p.brand));
    return Array.from(set).sort((a, b) => a.localeCompare(b, 'es'));
  }, [allProducts]);

  const overriddenIds = useMemo(
    () => new Set(state.customProducts.filter((p) => isSeedProduct(p.id)).map((p) => p.id)),
    [state.customProducts, isSeedProduct]
  );

  const filteredProducts = useMemo(() => {
    const q = search.toLowerCase().trim();
    return allProducts.filter((p) => {
      if (selectedCategory !== 'all' && p.category !== selectedCategory) return false;
      if (selectedBrand !== 'all' && p.brand !== selectedBrand) return false;
      if (q) {
        return (
          p.name.toLowerCase().includes(q) ||
          p.brand.toLowerCase().includes(q)
        );
      }
      return true;
    });
  }, [allProducts, search, selectedCategory, selectedBrand]);

  const sortedProducts = useMemo(() => {
    const favs = new Set(state.favoriteProductIds);
    return [...filteredProducts].sort((a, b) => {
      const aFav = favs.has(a.id) ? 0 : 1;
      const bFav = favs.has(b.id) ? 0 : 1;
      if (aFav !== bFav) return aFav - bFav;
      return a.name.localeCompare(b.name);
    });
  }, [filteredProducts, state.favoriteProductIds]);

  const quantityNum = Number(quantity) || 0;
  const preview = selectedProduct ? calculateNutrition(selectedProduct, quantityNum) : null;

  // Keep the selectedProduct fresh when product overrides are updated
  const selectedProductLive = useMemo(() => {
    if (!selectedProduct) return null;
    return allProducts.find((p) => p.id === selectedProduct.id) ?? selectedProduct;
  }, [allProducts, selectedProduct]);

  function handleAdd() {
    if (!selectedProductLive || quantityNum <= 0) return;
    addMealEntry(date, mealType, selectedProductLive, quantityNum);
    onClose();
  }

  const categories = useMemo(() => {
    const cats = new Set(allProducts.map((p) => p.category));
    return Array.from(cats).sort();
  }, [allProducts]);

  if (selectedProductLive) {
    const isPureCustom = !!selectedProductLive.isCustom && !isSeedProduct(selectedProductLive.id);
    const isOverridden = overriddenIds.has(selectedProductLive.id);

    return (
      <>
        <Modal isOpen={isOpen} onClose={onClose} title={`Añadir a ${MEAL_LABELS[mealType]}`}>
          <div className="p-4 space-y-4">
            <button
              onClick={() => setSelectedProduct(null)}
              className="text-sm text-primary-600 hover:underline"
            >
              ← Volver a buscar
            </button>

            <div className="card">
              <div className="flex items-start justify-between gap-2">
                <div className="flex items-center gap-2">
                  <span className="text-3xl">{selectedProductLive.emoji}</span>
                  <div>
                    <div className="flex items-center gap-1 flex-wrap">
                      <h3 className="font-bold text-gray-900">{selectedProductLive.name}</h3>
                      {isPureCustom && (
                        <span className="text-[10px] px-1.5 py-0.5 bg-amber-100 text-amber-700 rounded-full font-medium">Mío</span>
                      )}
                      {isOverridden && (
                        <span className="text-[10px] px-1.5 py-0.5 bg-blue-100 text-blue-700 rounded-full font-medium">Modificado</span>
                      )}
                    </div>
                    <p className="text-sm text-gray-500">{selectedProductLive.brand}</p>
                  </div>
                </div>
                <button
                  onClick={() => setEditingProduct(selectedProductLive)}
                  className="text-gray-400 hover:text-primary-500 p-1.5 text-sm shrink-0"
                  title="Editar producto"
                >
                  ✏️
                </button>
              </div>

              <div className="mt-3 grid grid-cols-4 gap-2 text-center">
                <div className="bg-orange-50 rounded-lg p-2">
                  <p className="text-xs text-gray-500">Kcal</p>
                  <p className="font-bold text-orange-600">{selectedProductLive.nutritionPer100g.kcal}</p>
                </div>
                <div className="bg-blue-50 rounded-lg p-2">
                  <p className="text-xs text-gray-500">Prot</p>
                  <p className="font-bold text-blue-600">{selectedProductLive.nutritionPer100g.proteins}g</p>
                </div>
                <div className="bg-amber-50 rounded-lg p-2">
                  <p className="text-xs text-gray-500">Carbs</p>
                  <p className="font-bold text-amber-600">{selectedProductLive.nutritionPer100g.carbs}g</p>
                </div>
                <div className="bg-red-50 rounded-lg p-2">
                  <p className="text-xs text-gray-500">Grasas</p>
                  <p className="font-bold text-red-600">{selectedProductLive.nutritionPer100g.fats}g</p>
                </div>
              </div>
              <p className="text-xs text-gray-400 mt-1 text-center">por 100{selectedProductLive.unit}</p>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Cantidad ({selectedProductLive.unit})
              </label>
              <input
                type="number"
                value={quantity}
                onChange={(e) => setQuantity(e.target.value)}
                placeholder={`Ej: ${selectedProductLive.defaultServingG}`}
                className="w-full border border-gray-300 rounded-lg px-3 py-2 text-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none"
                min="1"
                autoFocus
              />
              <div className="flex gap-2 mt-2">
                {[selectedProductLive.defaultServingG, 50, 100, 200].map((q) => (
                  <button
                    key={q}
                    onClick={() => setQuantity(String(q))}
                    className="text-xs px-3 py-1 bg-gray-100 rounded-full hover:bg-gray-200 transition-colors"
                  >
                    {q}{selectedProductLive.unit}
                  </button>
                ))}
              </div>
            </div>

            {preview && quantityNum > 0 && (
              <div className="bg-primary-50 rounded-lg p-3">
                <p className="text-sm text-gray-600 mb-1">Para {quantityNum}{selectedProductLive.unit}:</p>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-primary-700">{preview.kcal} kcal</span>
                  <div className="text-xs text-gray-500 text-right">
                    <span className="text-blue-600">P: {preview.proteins}g</span>{' '}
                    <span className="text-amber-600">C: {preview.carbs}g</span>{' '}
                    <span className="text-red-600">G: {preview.fats}g</span>
                  </div>
                </div>
              </div>
            )}

            <button
              onClick={handleAdd}
              disabled={quantityNum <= 0}
              className="w-full btn-primary py-3 text-lg disabled:opacity-40 disabled:cursor-not-allowed"
            >
              Añadir
            </button>
          </div>
        </Modal>

        <CustomProductModal
          isOpen={!!editingProduct}
          onClose={() => setEditingProduct(null)}
          editProduct={editingProduct}
        />
      </>
    );
  }

  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose} title={`Añadir a ${MEAL_LABELS[mealType]}`}>
        <div className="p-4 space-y-3">
          <input
            ref={searchRef}
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Buscar producto o marca..."
            className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none"
          />

          <div className="flex gap-2">
            <select
              value={selectedBrand}
              onChange={(e) => setSelectedBrand(e.target.value)}
              className="flex-1 text-sm border border-gray-300 rounded-lg px-2 py-1.5 bg-white focus:ring-2 focus:ring-primary-500 outline-none truncate"
            >
              <option value="all">Todas las marcas</option>
              {brands.map((b) => (
                <option key={b} value={b}>{b}</option>
              ))}
            </select>
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value as ProductCategory | 'all')}
              className="flex-1 text-sm border border-gray-300 rounded-lg px-2 py-1.5 bg-white focus:ring-2 focus:ring-primary-500 outline-none"
            >
              <option value="all">Todas las categorías</option>
              {categories.map((c) => (
                <option key={c} value={c}>{CATEGORY_LABELS[c]}</option>
              ))}
            </select>
          </div>

          <p className="text-xs text-gray-400">{sortedProducts.length} resultados</p>

          <div className="max-h-80 overflow-y-auto space-y-1">
            {sortedProducts.length === 0 && (
              <p className="text-center text-gray-400 py-8">No se encontraron productos</p>
            )}
            {sortedProducts.map((product) => {
              const isPureCustom = !!product.isCustom && !isSeedProduct(product.id);
              const isOverridden = overriddenIds.has(product.id);
              return (
                <div
                  key={product.id}
                  className="flex items-center gap-2 p-2 rounded-lg hover:bg-gray-50 active:bg-gray-100 transition-colors"
                >
                  <button
                    onClick={() => {
                      setSelectedProduct(product);
                      setQuantity(String(product.defaultServingG));
                    }}
                    className="flex-1 flex items-center gap-3 text-left min-w-0"
                  >
                    <span className="text-2xl shrink-0">{product.emoji}</span>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-1 flex-wrap">
                        <p className="text-sm font-medium text-gray-800 truncate">
                          {state.favoriteProductIds.includes(product.id) && '⭐ '}
                          {product.name}
                        </p>
                        {isPureCustom && (
                          <span className="text-[9px] px-1 py-0.5 bg-amber-100 text-amber-700 rounded-full font-medium">Mío</span>
                        )}
                        {isOverridden && (
                          <span className="text-[9px] px-1 py-0.5 bg-blue-100 text-blue-700 rounded-full font-medium">Mod</span>
                        )}
                      </div>
                      <p className="text-xs text-gray-500 truncate">{product.brand}</p>
                    </div>
                    <div className="text-right shrink-0">
                      <p className="text-xs text-gray-500">{product.nutritionPer100g.kcal} kcal/100{product.unit}</p>
                    </div>
                  </button>
                  <button
                    onClick={(e) => { e.stopPropagation(); setEditingProduct(product); }}
                    className="text-gray-300 hover:text-primary-500 p-1.5 text-sm shrink-0"
                    title="Editar producto"
                  >
                    ✏️
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      </Modal>

      <CustomProductModal
        isOpen={!!editingProduct}
        onClose={() => setEditingProduct(null)}
        editProduct={editingProduct}
      />
    </>
  );
}
