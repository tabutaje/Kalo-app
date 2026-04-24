import { useState, useMemo } from 'react';
import { useApp } from '@/context/AppContext';
import Header from '@/components/layout/Header';
import { CATEGORY_LABELS, ProductCategory, Product } from '@/types';
import CustomProductModal from '@/components/products/CustomProductModal';

export default function ProductsPage() {
  const { allProducts, state, toggleFavorite, removeCustomProduct, resetProductOverride, isSeedProduct } = useApp();
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState<ProductCategory | 'all'>('all');
  const [brand, setBrand] = useState<string>('all');
  const [showCustomOnly, setShowCustomOnly] = useState(false);
  const [customModalOpen, setCustomModalOpen] = useState(false);
  const [editingProduct, setEditingProduct] = useState<Product | null>(null);
  const [confirmDelete, setConfirmDelete] = useState<string | null>(null);
  const [confirmReset, setConfirmReset] = useState<string | null>(null);

  // IDs of seed products that have been overridden
  const overriddenIds = useMemo(
    () => new Set(state.customProducts.filter((p) => isSeedProduct(p.id)).map((p) => p.id)),
    [state.customProducts, isSeedProduct]
  );

  // Extract unique brands sorted alphabetically
  const brands = useMemo(() => {
    const set = new Set(allProducts.map((p) => p.brand));
    return Array.from(set).sort((a, b) => a.localeCompare(b, 'es'));
  }, [allProducts]);

  const filtered = useMemo(() => {
    const q = search.toLowerCase().trim();
    return allProducts.filter((p) => {
      if (showCustomOnly && !p.isCustom) return false;
      if (category !== 'all' && p.category !== category) return false;
      if (brand !== 'all' && p.brand !== brand) return false;
      if (q) {
        return p.name.toLowerCase().includes(q) || p.brand.toLowerCase().includes(q);
      }
      return true;
    });
  }, [allProducts, search, category, brand, showCustomOnly]);

  const categories = useMemo(() => {
    const cats = new Set(allProducts.map((p) => p.category));
    return Array.from(cats).sort();
  }, [allProducts]);

  function handleEdit(product: Product) {
    setEditingProduct(product);
    setCustomModalOpen(true);
  }

  function handleDelete(productId: string) {
    removeCustomProduct(productId);
    setConfirmDelete(null);
  }

  function handleReset(productId: string) {
    resetProductOverride(productId);
    setConfirmReset(null);
  }

  function handleModalClose() {
    setCustomModalOpen(false);
    setEditingProduct(null);
  }

  return (
    <div className="pb-20">
      <Header title="Productos" subtitle={`${allProducts.length} productos disponibles`} showLogo />
      <div className="max-w-lg mx-auto px-4 py-4 space-y-3">

        {/* Botón crear producto */}
        <button
          onClick={() => { setEditingProduct(null); setCustomModalOpen(true); }}
          className="w-full flex items-center justify-center gap-2 py-2.5 px-4 bg-primary-600 text-white rounded-xl text-sm font-semibold hover:bg-primary-700 active:bg-primary-800 transition-colors"
        >
          <span className="text-base">➕</span> Añadir producto personalizado
        </button>

        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Buscar producto o marca..."
          className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none"
        />

        <div className="flex gap-2">
          <select
            value={brand}
            onChange={(e) => setBrand(e.target.value)}
            className="flex-1 text-sm border border-gray-300 rounded-lg px-2 py-1.5 bg-white truncate"
          >
            <option value="all">Todas las marcas</option>
            {brands.map((b) => (
              <option key={b} value={b}>{b}</option>
            ))}
          </select>
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value as ProductCategory | 'all')}
            className="flex-1 text-sm border border-gray-300 rounded-lg px-2 py-1.5 bg-white"
          >
            <option value="all">Todas las categorías</option>
            {categories.map((c) => (
              <option key={c} value={c}>{CATEGORY_LABELS[c]}</option>
            ))}
          </select>
        </div>

        {/* Filtro mis productos */}
        {state.customProducts.length > 0 && (
          <button
            onClick={() => setShowCustomOnly(!showCustomOnly)}
            className={`text-xs px-3 py-1.5 rounded-full border transition-colors ${
              showCustomOnly
                ? 'bg-primary-100 border-primary-400 text-primary-700 font-semibold'
                : 'border-gray-300 text-gray-500 hover:bg-gray-50'
            }`}
          >
            {showCustomOnly ? '✓ ' : ''}Mis productos ({state.customProducts.length})
          </button>
        )}

        <p className="text-xs text-gray-400">{filtered.length} resultados</p>

        <div className="space-y-2">
          {filtered.map((product) => {
            const isFav = state.favoriteProductIds.includes(product.id);
            const isPureCustom = !!product.isCustom && !isSeedProduct(product.id);
            const isOverridden = overriddenIds.has(product.id);

            return (
              <div key={product.id} className={`card flex items-start gap-3 ${isOverridden ? 'ring-1 ring-amber-300' : ''}`}>
                <div className="flex flex-col items-center gap-1 shrink-0">
                  <span className="text-2xl">{product.emoji}</span>
                  <button
                    onClick={() => toggleFavorite(product.id)}
                    className="text-sm"
                    title={isFav ? 'Quitar de favoritos' : 'Añadir a favoritos'}
                  >
                    {isFav ? '⭐' : '☆'}
                  </button>
                </div>

                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-1.5 flex-wrap">
                    <p className="font-medium text-gray-800">{product.name}</p>
                    {isPureCustom && (
                      <span className="text-[10px] px-1.5 py-0.5 bg-amber-100 text-amber-700 rounded-full font-medium">Mío</span>
                    )}
                    {isOverridden && (
                      <span className="text-[10px] px-1.5 py-0.5 bg-blue-100 text-blue-700 rounded-full font-medium">Modificado</span>
                    )}
                  </div>
                  <span className="inline-block mt-0.5 text-xs px-2 py-0.5 rounded-full bg-primary-50 text-primary-700 font-medium">
                    {product.brand}
                  </span>
                </div>

                <div className="flex flex-col items-end gap-1 shrink-0">
                  <div className="text-right text-sm">
                    <p className="font-bold text-orange-600">{product.nutritionPer100g.kcal} kcal</p>
                    <p className="text-xs text-gray-400">por 100{product.unit}</p>
                    <div className="text-xs text-gray-400 mt-0.5">
                      P:{product.nutritionPer100g.proteins} C:{product.nutritionPer100g.carbs} G:{product.nutritionPer100g.fats}
                    </div>
                  </div>

                  <div className="flex gap-1 mt-1">
                    {/* Botón editar — todos los productos */}
                    <button
                      onClick={() => handleEdit(product)}
                      className="text-gray-400 hover:text-primary-500 p-1 text-sm"
                      title="Editar"
                    >
                      ✏️
                    </button>

                    {/* Restaurar (solo en productos de base de datos modificados) */}
                    {isOverridden && (
                      confirmReset === product.id ? (
                        <div className="flex gap-1">
                          <button
                            onClick={() => handleReset(product.id)}
                            className="text-xs px-2 py-1 bg-blue-500 text-white rounded-lg"
                          >
                            Restaurar
                          </button>
                          <button
                            onClick={() => setConfirmReset(null)}
                            className="text-xs px-2 py-1 bg-gray-100 text-gray-600 rounded-lg"
                          >
                            No
                          </button>
                        </div>
                      ) : (
                        <button
                          onClick={() => setConfirmReset(product.id)}
                          className="text-gray-400 hover:text-blue-500 p-1 text-sm"
                          title="Restaurar original"
                        >
                          ↩️
                        </button>
                      )
                    )}

                    {/* Eliminar (solo en productos puramente personalizados) */}
                    {isPureCustom && (
                      confirmDelete === product.id ? (
                        <div className="flex gap-1">
                          <button
                            onClick={() => handleDelete(product.id)}
                            className="text-xs px-2 py-1 bg-red-500 text-white rounded-lg"
                          >
                            Borrar
                          </button>
                          <button
                            onClick={() => setConfirmDelete(null)}
                            className="text-xs px-2 py-1 bg-gray-100 text-gray-600 rounded-lg"
                          >
                            No
                          </button>
                        </div>
                      ) : (
                        <button
                          onClick={() => setConfirmDelete(product.id)}
                          className="text-gray-400 hover:text-red-500 p-1 text-sm"
                          title="Eliminar"
                        >
                          🗑️
                        </button>
                      )
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <CustomProductModal
        isOpen={customModalOpen}
        onClose={handleModalClose}
        editProduct={editingProduct}
      />
    </div>
  );
}
