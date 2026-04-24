import { useState, useEffect } from 'react';
import Modal from '@/components/common/Modal';
import { Product, ProductCategory, CATEGORY_LABELS } from '@/types';
import { useApp } from '@/context/AppContext';

interface CustomProductModalProps {
  isOpen: boolean;
  onClose: () => void;
  editProduct?: Product | null;
}

const EMOJI_OPTIONS = [
  '🍎','🥩','🐟','🥛','🧀','🥚','🍞','🥦','🥕','🍌','🍇','🍓',
  '🥑','🫒','🥜','🌽','🍅','🧄','🧅','🫑','🥔','🍄','🫘','🌾',
  '🥗','🍝','🍲','🫕','🥘','🍛','🍜','🍣','🌮','🌯','🥪','🍕',
  '🍔','🌭','🍟','🥞','🧆','🥙','🍱','🥫','🫙','🍶','🧃','🥤',
  '☕','🍵','🧋','💧','🍫','🍪','🧁','🍰','🍦','🍩','🍮','🥐',
];

const CATEGORIES = Object.entries(CATEGORY_LABELS) as [ProductCategory, string][];

const EMPTY_FORM = {
  name: '',
  brand: '',
  emoji: '🍎',
  category: 'otros' as ProductCategory,
  kcal: '',
  proteins: '',
  carbs: '',
  fats: '',
  defaultServingG: '100',
  unit: 'g' as 'g' | 'ml',
};

export default function CustomProductModal({ isOpen, onClose, editProduct }: CustomProductModalProps) {
  const { addCustomProduct, updateCustomProduct } = useApp();
  const [form, setForm] = useState({ ...EMPTY_FORM });
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const isEditing = !!editProduct;

  useEffect(() => {
    if (editProduct && isOpen) {
      setForm({
        name: editProduct.name,
        brand: editProduct.brand,
        emoji: editProduct.emoji,
        category: editProduct.category,
        kcal: String(editProduct.nutritionPer100g.kcal),
        proteins: String(editProduct.nutritionPer100g.proteins),
        carbs: String(editProduct.nutritionPer100g.carbs),
        fats: String(editProduct.nutritionPer100g.fats),
        defaultServingG: String(editProduct.defaultServingG),
        unit: editProduct.unit,
      });
    }
    if (!isOpen) {
      setForm({ ...EMPTY_FORM });
      setErrors({});
      setShowEmojiPicker(false);
    }
  }, [editProduct, isOpen]);

  function set(field: keyof typeof EMPTY_FORM, value: string) {
    setForm((prev) => ({ ...prev, [field]: value }));
    setErrors((prev) => ({ ...prev, [field]: '' }));
  }

  function validate(): boolean {
    const errs: Record<string, string> = {};
    if (!form.name.trim()) errs.name = 'El nombre es obligatorio';
    if (!form.brand.trim()) errs.brand = 'La marca es obligatoria';
    if (!form.kcal || isNaN(Number(form.kcal))) errs.kcal = 'Introduce un valor numérico';
    if (!form.proteins || isNaN(Number(form.proteins))) errs.proteins = 'Introduce un valor numérico';
    if (!form.carbs || isNaN(Number(form.carbs))) errs.carbs = 'Introduce un valor numérico';
    if (!form.fats || isNaN(Number(form.fats))) errs.fats = 'Introduce un valor numérico';
    if (!form.defaultServingG || isNaN(Number(form.defaultServingG)) || Number(form.defaultServingG) <= 0) {
      errs.defaultServingG = 'Introduce una cantidad válida';
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  }

  function handleSave() {
    if (!validate()) return;

    const product: Product = {
      id: isEditing ? editProduct!.id : `custom-${Date.now()}-${Math.random().toString(36).slice(2, 7)}`,
      name: form.name.trim(),
      brand: form.brand.trim(),
      emoji: form.emoji,
      supermarket: 'mercadona', // interno, no visible al usuario
      category: form.category,
      nutritionPer100g: {
        kcal: Number(form.kcal),
        proteins: Number(form.proteins),
        carbs: Number(form.carbs),
        fats: Number(form.fats),
      },
      defaultServingG: Number(form.defaultServingG),
      unit: form.unit,
      isCustom: true,
    };

    if (isEditing) {
      updateCustomProduct(product);
    } else {
      addCustomProduct(product);
    }
    onClose();
  }

  const inputClass = (field: string) =>
    `w-full border rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-primary-500 outline-none ${
      errors[field] ? 'border-red-400 bg-red-50' : 'border-gray-300'
    }`;

  return (
    <Modal isOpen={isOpen} onClose={onClose} title={isEditing ? 'Editar producto' : 'Nuevo producto'}>
      <div className="p-4 space-y-4 overflow-y-auto max-h-[80vh]">

        {/* Emoji */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Icono</label>
          <button
            type="button"
            onClick={() => setShowEmojiPicker(!showEmojiPicker)}
            className="text-3xl w-14 h-14 rounded-xl bg-gray-50 border border-gray-200 hover:bg-gray-100 flex items-center justify-center"
          >
            {form.emoji}
          </button>
          {showEmojiPicker && (
            <div className="mt-2 grid grid-cols-8 gap-1 bg-gray-50 rounded-xl p-2 border border-gray-200 max-h-40 overflow-y-auto">
              {EMOJI_OPTIONS.map((e) => (
                <button
                  key={e}
                  type="button"
                  onClick={() => { set('emoji', e); setShowEmojiPicker(false); }}
                  className={`text-xl w-9 h-9 rounded-lg flex items-center justify-center transition-colors ${
                    form.emoji === e ? 'bg-primary-100 ring-2 ring-primary-400' : 'hover:bg-gray-200'
                  }`}
                >
                  {e}
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Nombre */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Nombre del producto *</label>
          <input
            type="text"
            value={form.name}
            onChange={(e) => set('name', e.target.value)}
            placeholder="Ej: Yogur Griego Proteico"
            className={inputClass('name')}
            autoFocus
          />
          {errors.name && <p className="text-xs text-red-500 mt-1">{errors.name}</p>}
        </div>

        {/* Marca */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Marca *</label>
          <input
            type="text"
            value={form.brand}
            onChange={(e) => set('brand', e.target.value)}
            placeholder="Ej: Lidl, Danone, Casero..."
            className={inputClass('brand')}
          />
          {errors.brand && <p className="text-xs text-red-500 mt-1">{errors.brand}</p>}
        </div>

        {/* Categoría */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Categoría</label>
          <select
            value={form.category}
            onChange={(e) => set('category', e.target.value)}
            className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-primary-500 outline-none bg-white"
          >
            {CATEGORIES.map(([value, label]) => (
              <option key={value} value={value}>{label}</option>
            ))}
          </select>
        </div>

        {/* Nutrición por 100g/ml */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Nutrición por 100{form.unit} *
          </label>
          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block text-xs text-gray-500 mb-1">Calorías (kcal)</label>
              <input type="number" min="0" value={form.kcal}
                onChange={(e) => set('kcal', e.target.value)}
                className={inputClass('kcal')} placeholder="0" />
              {errors.kcal && <p className="text-xs text-red-500 mt-1">{errors.kcal}</p>}
            </div>
            <div>
              <label className="block text-xs text-gray-500 mb-1">Proteínas (g)</label>
              <input type="number" min="0" step="0.1" value={form.proteins}
                onChange={(e) => set('proteins', e.target.value)}
                className={inputClass('proteins')} placeholder="0" />
              {errors.proteins && <p className="text-xs text-red-500 mt-1">{errors.proteins}</p>}
            </div>
            <div>
              <label className="block text-xs text-gray-500 mb-1">Carbohidratos (g)</label>
              <input type="number" min="0" step="0.1" value={form.carbs}
                onChange={(e) => set('carbs', e.target.value)}
                className={inputClass('carbs')} placeholder="0" />
              {errors.carbs && <p className="text-xs text-red-500 mt-1">{errors.carbs}</p>}
            </div>
            <div>
              <label className="block text-xs text-gray-500 mb-1">Grasas (g)</label>
              <input type="number" min="0" step="0.1" value={form.fats}
                onChange={(e) => set('fats', e.target.value)}
                className={inputClass('fats')} placeholder="0" />
              {errors.fats && <p className="text-xs text-red-500 mt-1">{errors.fats}</p>}
            </div>
          </div>
        </div>

        {/* Ración habitual */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Ración habitual</label>
          <div className="flex gap-2">
            <input
              type="number" min="1" value={form.defaultServingG}
              onChange={(e) => set('defaultServingG', e.target.value)}
              className={`flex-1 ${inputClass('defaultServingG')}`}
              placeholder="100"
            />
            <select
              value={form.unit}
              onChange={(e) => set('unit', e.target.value)}
              className="border border-gray-300 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-primary-500 outline-none bg-white"
            >
              <option value="g">g</option>
              <option value="ml">ml</option>
            </select>
          </div>
          {errors.defaultServingG && <p className="text-xs text-red-500 mt-1">{errors.defaultServingG}</p>}
        </div>

        {/* Vista previa */}
        {form.name && Number(form.kcal) > 0 && (
          <div className="bg-primary-50 rounded-xl p-3 flex items-center gap-3">
            <span className="text-3xl">{form.emoji}</span>
            <div className="flex-1 min-w-0">
              <p className="font-medium text-gray-800 truncate">{form.name || '—'}</p>
              <p className="text-xs text-primary-600">{form.brand || '—'}</p>
            </div>
            <div className="text-right text-sm">
              <p className="font-bold text-orange-600">{form.kcal} kcal</p>
              <p className="text-xs text-gray-500">por 100{form.unit}</p>
            </div>
          </div>
        )}

        <button
          onClick={handleSave}
          className="w-full btn-primary py-3 text-base font-semibold"
        >
          {isEditing ? 'Guardar cambios' : 'Crear producto'}
        </button>
      </div>
    </Modal>
  );
}
