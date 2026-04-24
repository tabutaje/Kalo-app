import { Product } from '@/types';

// ═══════════════════════════════════════════════════
// Productos de MARCAS NACIONALES E INTERNACIONALES
// ═══════════════════════════════════════════════════

export const productsMarcas: Product[] = [
  // ─── DANONE ───
  { id: 'dan-activia-natural', name: 'Activia Natural', brand: 'Danone', supermarket: 'mercadona', category: 'lacteos', nutritionPer100g: { kcal: 71, proteins: 4.3, carbs: 5.1, fats: 3.5 }, defaultServingG: 120, unit: 'g', emoji: '🫙' },
  { id: 'dan-activia-fibras', name: 'Activia Fibras Cereales', brand: 'Danone', supermarket: 'mercadona', category: 'lacteos', nutritionPer100g: { kcal: 81, proteins: 3.4, carbs: 12.5, fats: 1.8 }, defaultServingG: 120, unit: 'g', emoji: '🫙' },
  { id: 'dan-actimel', name: 'Actimel Original', brand: 'Danone', supermarket: 'mercadona', category: 'lacteos', nutritionPer100g: { kcal: 72, proteins: 2.8, carbs: 11.4, fats: 1.6 }, defaultServingG: 100, unit: 'ml', emoji: '🥛' },
  { id: 'dan-oikos-natural', name: 'Oikos Natural', brand: 'Danone', supermarket: 'mercadona', category: 'lacteos', nutritionPer100g: { kcal: 113, proteins: 3.3, carbs: 5.0, fats: 8.5 }, defaultServingG: 110, unit: 'g', emoji: '🫙' },
  { id: 'dan-danonino', name: 'Danonino', brand: 'Danone', supermarket: 'mercadona', category: 'lacteos', nutritionPer100g: { kcal: 93, proteins: 6.4, carbs: 12.0, fats: 2.4 }, defaultServingG: 50, unit: 'g', emoji: '🫙' },
  { id: 'dan-yogur-natural', name: 'Yogur Natural', brand: 'Danone', supermarket: 'mercadona', category: 'lacteos', nutritionPer100g: { kcal: 57, proteins: 4.0, carbs: 4.9, fats: 2.6 }, defaultServingG: 120, unit: 'g', emoji: '🫙' },
  { id: 'dan-yogur-griego', name: 'Yogur Griego Natural', brand: 'Danone', supermarket: 'mercadona', category: 'lacteos', nutritionPer100g: { kcal: 116, proteins: 3.8, carbs: 4.3, fats: 9.2 }, defaultServingG: 150, unit: 'g', emoji: '🫙' },
  { id: 'dan-yopro-fresa', name: 'YoPRO Fresa', brand: 'Danone', supermarket: 'mercadona', category: 'lacteos', nutritionPer100g: { kcal: 55, proteins: 10.0, carbs: 3.0, fats: 0.0 }, defaultServingG: 160, unit: 'g', emoji: '🫙' },
  { id: 'dan-yopro-vainilla', name: 'YoPRO Vainilla', brand: 'Danone', supermarket: 'mercadona', category: 'lacteos', nutritionPer100g: { kcal: 56, proteins: 10.0, carbs: 3.2, fats: 0.0 }, defaultServingG: 160, unit: 'g', emoji: '🫙' },
  { id: 'dan-yopro-natural', name: 'YoPRO Natural', brand: 'Danone', supermarket: 'mercadona', category: 'lacteos', nutritionPer100g: { kcal: 53, proteins: 10.0, carbs: 2.5, fats: 0.0 }, defaultServingG: 160, unit: 'g', emoji: '🫙' },

  // ─── NESTLÉ ───
  { id: 'nes-fitness-original', name: 'Fitness Original', brand: 'Nestlé', supermarket: 'mercadona', category: 'cereales', nutritionPer100g: { kcal: 378, proteins: 8.0, carbs: 73.0, fats: 4.5 }, defaultServingG: 30, unit: 'g', emoji: '🥣' },
  { id: 'nes-chocapic', name: 'Chocapic', brand: 'Nestlé', supermarket: 'mercadona', category: 'cereales', nutritionPer100g: { kcal: 385, proteins: 7.8, carbs: 75.0, fats: 4.3 }, defaultServingG: 30, unit: 'g', emoji: '🥣' },
  { id: 'nes-lion', name: 'Lion Cereales', brand: 'Nestlé', supermarket: 'mercadona', category: 'cereales', nutritionPer100g: { kcal: 412, proteins: 5.5, carbs: 72.0, fats: 11.0 }, defaultServingG: 30, unit: 'g', emoji: '🥣' },
  { id: 'nes-nesquik-polvo', name: 'Nesquik Cacao en Polvo', brand: 'Nestlé', supermarket: 'mercadona', category: 'bebidas', nutritionPer100g: { kcal: 377, proteins: 4.5, carbs: 79.0, fats: 3.5 }, defaultServingG: 14, unit: 'g', emoji: '🍫' },
  { id: 'nes-kit-kat', name: 'Kit Kat', brand: 'Nestlé', supermarket: 'mercadona', category: 'dulces', nutritionPer100g: { kcal: 524, proteins: 7.3, carbs: 59.0, fats: 27.0 }, defaultServingG: 41, unit: 'g', emoji: '🍫' },
  { id: 'nes-crunch', name: 'Crunch', brand: 'Nestlé', supermarket: 'mercadona', category: 'dulces', nutritionPer100g: { kcal: 531, proteins: 5.8, carbs: 63.0, fats: 28.0 }, defaultServingG: 40, unit: 'g', emoji: '🍫' },
  { id: 'nes-la-lechera', name: 'Leche Condensada La Lechera', brand: 'Nestlé', supermarket: 'mercadona', category: 'lacteos', nutritionPer100g: { kcal: 321, proteins: 8.0, carbs: 55.0, fats: 8.0 }, defaultServingG: 20, unit: 'g', emoji: '🥛' },
  { id: 'nes-sveltesse-natural', name: 'Sveltesse Yogur 0%', brand: 'Nestlé', supermarket: 'mercadona', category: 'lacteos', nutritionPer100g: { kcal: 38, proteins: 4.2, carbs: 4.8, fats: 0.1 }, defaultServingG: 125, unit: 'g', emoji: '🫙' },

  // ─── KELLOGG'S ───
  { id: 'kel-special-k', name: 'Special K Original', brand: "Kellogg's", supermarket: 'mercadona', category: 'cereales', nutritionPer100g: { kcal: 392, proteins: 15.0, carbs: 72.0, fats: 4.0 }, defaultServingG: 30, unit: 'g', emoji: '🥣' },
  { id: 'kel-corn-flakes', name: 'Corn Flakes', brand: "Kellogg's", supermarket: 'mercadona', category: 'cereales', nutritionPer100g: { kcal: 381, proteins: 7.5, carbs: 84.0, fats: 0.9 }, defaultServingG: 30, unit: 'g', emoji: '🥣' },
  { id: 'kel-all-bran', name: 'All-Bran Original', brand: "Kellogg's", supermarket: 'mercadona', category: 'cereales', nutritionPer100g: { kcal: 397, proteins: 14.0, carbs: 49.0, fats: 3.5 }, defaultServingG: 40, unit: 'g', emoji: '🥣' },
  { id: 'kel-choco-krispies', name: 'Choco Krispies', brand: "Kellogg's", supermarket: 'mercadona', category: 'cereales', nutritionPer100g: { kcal: 389, proteins: 5.5, carbs: 82.0, fats: 3.5 }, defaultServingG: 30, unit: 'g', emoji: '🥣' },
  { id: 'kel-extra-granola-choc', name: 'Extra Granola Chocolate', brand: "Kellogg's", supermarket: 'mercadona', category: 'cereales', nutritionPer100g: { kcal: 455, proteins: 8.0, carbs: 60.0, fats: 19.0 }, defaultServingG: 45, unit: 'g', emoji: '🥣' },

  // ─── COCA-COLA / BEBIDAS ───
  { id: 'cc-cocacola', name: 'Coca-Cola Original', brand: 'Coca-Cola', supermarket: 'mercadona', category: 'bebidas', nutritionPer100g: { kcal: 42, proteins: 0.0, carbs: 10.6, fats: 0.0 }, defaultServingG: 330, unit: 'ml', emoji: '🥤' },
  { id: 'cc-cocacola-zero', name: 'Coca-Cola Zero', brand: 'Coca-Cola', supermarket: 'mercadona', category: 'bebidas', nutritionPer100g: { kcal: 0, proteins: 0.0, carbs: 0.0, fats: 0.0 }, defaultServingG: 330, unit: 'ml', emoji: '🥤' },
  { id: 'cc-fanta-naranja', name: 'Fanta Naranja', brand: 'Coca-Cola', supermarket: 'mercadona', category: 'bebidas', nutritionPer100g: { kcal: 41, proteins: 0.0, carbs: 9.9, fats: 0.0 }, defaultServingG: 330, unit: 'ml', emoji: '🥤' },
  { id: 'cc-aquarius', name: 'Aquarius Limón', brand: 'Coca-Cola', supermarket: 'mercadona', category: 'bebidas', nutritionPer100g: { kcal: 25, proteins: 0.0, carbs: 5.7, fats: 0.0 }, defaultServingG: 330, unit: 'ml', emoji: '🥤' },
  { id: 'cc-nestea-limon', name: 'Nestea Limón', brand: 'Coca-Cola', supermarket: 'mercadona', category: 'bebidas', nutritionPer100g: { kcal: 28, proteins: 0.0, carbs: 6.6, fats: 0.0 }, defaultServingG: 330, unit: 'ml', emoji: '🧊' },
  { id: 'pep-pepsi', name: 'Pepsi', brand: 'PepsiCo', supermarket: 'mercadona', category: 'bebidas', nutritionPer100g: { kcal: 44, proteins: 0.0, carbs: 11.0, fats: 0.0 }, defaultServingG: 330, unit: 'ml', emoji: '🥤' },
  { id: 'pep-7up', name: '7UP', brand: 'PepsiCo', supermarket: 'mercadona', category: 'bebidas', nutritionPer100g: { kcal: 32, proteins: 0.0, carbs: 7.8, fats: 0.0 }, defaultServingG: 330, unit: 'ml', emoji: '🥤' },
  { id: 'rb-redbull', name: 'Red Bull', brand: 'Red Bull', supermarket: 'mercadona', category: 'bebidas', nutritionPer100g: { kcal: 46, proteins: 0.0, carbs: 11.0, fats: 0.0 }, defaultServingG: 250, unit: 'ml', emoji: '🥫' },
  { id: 'rb-redbull-zero', name: 'Red Bull Zero', brand: 'Red Bull', supermarket: 'mercadona', category: 'bebidas', nutritionPer100g: { kcal: 3, proteins: 0.0, carbs: 0.0, fats: 0.0 }, defaultServingG: 250, unit: 'ml', emoji: '🥫' },
  { id: 'mon-monster', name: 'Monster Energy', brand: 'Monster', supermarket: 'mercadona', category: 'bebidas', nutritionPer100g: { kcal: 47, proteins: 0.0, carbs: 12.0, fats: 0.0 }, defaultServingG: 500, unit: 'ml', emoji: '🥫' },
  { id: 'mon-monster-zero', name: 'Monster Zero Ultra', brand: 'Monster', supermarket: 'mercadona', category: 'bebidas', nutritionPer100g: { kcal: 3, proteins: 0.0, carbs: 0.4, fats: 0.0 }, defaultServingG: 500, unit: 'ml', emoji: '🥫' },

  // ─── BIMBO ───
  { id: 'bim-pan-blanco', name: 'Pan de Molde Blanco', brand: 'Bimbo', supermarket: 'mercadona', category: 'panaderia', nutritionPer100g: { kcal: 265, proteins: 9.0, carbs: 48.0, fats: 3.7 }, defaultServingG: 28, unit: 'g', emoji: '🍞' },
  { id: 'bim-pan-integral', name: 'Pan de Molde Integral', brand: 'Bimbo', supermarket: 'mercadona', category: 'panaderia', nutritionPer100g: { kcal: 238, proteins: 10.0, carbs: 39.0, fats: 3.8 }, defaultServingG: 28, unit: 'g', emoji: '🍞' },
  { id: 'bim-thins', name: 'Thins Sandwich', brand: 'Bimbo', supermarket: 'mercadona', category: 'panaderia', nutritionPer100g: { kcal: 263, proteins: 8.0, carbs: 46.0, fats: 4.0 }, defaultServingG: 32, unit: 'g', emoji: '🍞' },
  { id: 'bim-donuts-clasico', name: 'Donuts Clásico', brand: 'Bimbo', supermarket: 'mercadona', category: 'dulces', nutritionPer100g: { kcal: 410, proteins: 5.5, carbs: 48.0, fats: 22.0 }, defaultServingG: 55, unit: 'g', emoji: '🍩' },
  { id: 'bim-bollycao', name: 'Bollycao', brand: 'Bimbo', supermarket: 'mercadona', category: 'dulces', nutritionPer100g: { kcal: 397, proteins: 7.0, carbs: 50.0, fats: 18.0 }, defaultServingG: 60, unit: 'g', emoji: '🥐' },
  { id: 'bim-silueta-integral', name: 'Silueta 8 Cereales', brand: 'Bimbo', supermarket: 'mercadona', category: 'panaderia', nutritionPer100g: { kcal: 247, proteins: 11.0, carbs: 40.0, fats: 3.5 }, defaultServingG: 26, unit: 'g', emoji: '🍞' },

  // ─── GALLO / PASTAS ───
  { id: 'gal-macarrones', name: 'Macarrones', brand: 'Gallo', supermarket: 'mercadona', category: 'cereales', nutritionPer100g: { kcal: 359, proteins: 12.5, carbs: 72.0, fats: 1.5 }, defaultServingG: 80, unit: 'g', emoji: '🍝' },
  { id: 'gal-espaguetis', name: 'Espaguetis', brand: 'Gallo', supermarket: 'mercadona', category: 'cereales', nutritionPer100g: { kcal: 359, proteins: 12.5, carbs: 72.0, fats: 1.5 }, defaultServingG: 80, unit: 'g', emoji: '🍝' },
  { id: 'gal-fideos', name: 'Fideos Nº1', brand: 'Gallo', supermarket: 'mercadona', category: 'cereales', nutritionPer100g: { kcal: 359, proteins: 12.5, carbs: 72.0, fats: 1.5 }, defaultServingG: 70, unit: 'g', emoji: '🍝' },
  { id: 'gal-plumas', name: 'Plumas', brand: 'Gallo', supermarket: 'mercadona', category: 'cereales', nutritionPer100g: { kcal: 359, proteins: 12.5, carbs: 72.0, fats: 1.5 }, defaultServingG: 80, unit: 'g', emoji: '🍝' },
  { id: 'bar-pasta-integral', name: 'Espaguetis Integrales', brand: 'Barilla', supermarket: 'mercadona', category: 'cereales', nutritionPer100g: { kcal: 348, proteins: 13.0, carbs: 65.0, fats: 2.5 }, defaultServingG: 80, unit: 'g', emoji: '🍝' },
  { id: 'bar-penne', name: 'Penne Rigate', brand: 'Barilla', supermarket: 'mercadona', category: 'cereales', nutritionPer100g: { kcal: 359, proteins: 12.5, carbs: 72.0, fats: 1.5 }, defaultServingG: 80, unit: 'g', emoji: '🍝' },

  // ─── CARBONELL / ACEITES ───
  { id: 'carb-aceite-oliva-virgen', name: 'Aceite Oliva Virgen Extra', brand: 'Carbonell', supermarket: 'mercadona', category: 'aceites', nutritionPer100g: { kcal: 824, proteins: 0.0, carbs: 0.0, fats: 91.6 }, defaultServingG: 10, unit: 'ml', emoji: '🫒' },
  { id: 'carb-aceite-oliva-suave', name: 'Aceite Oliva Suave', brand: 'Carbonell', supermarket: 'mercadona', category: 'aceites', nutritionPer100g: { kcal: 824, proteins: 0.0, carbs: 0.0, fats: 91.6 }, defaultServingG: 10, unit: 'ml', emoji: '🫒' },
  { id: 'koip-aceite-girasol', name: 'Aceite de Girasol', brand: 'Koipesol', supermarket: 'mercadona', category: 'aceites', nutritionPer100g: { kcal: 824, proteins: 0.0, carbs: 0.0, fats: 91.6 }, defaultServingG: 10, unit: 'ml', emoji: '🌻' },

  // ─── CENTRAL LECHERA ASTURIANA ───
  { id: 'cla-leche-entera', name: 'Leche Entera', brand: 'Central Lechera Asturiana', supermarket: 'mercadona', category: 'lacteos', nutritionPer100g: { kcal: 65, proteins: 3.1, carbs: 4.7, fats: 3.6 }, defaultServingG: 250, unit: 'ml', emoji: '🥛' },
  { id: 'cla-leche-semi', name: 'Leche Semidesnatada', brand: 'Central Lechera Asturiana', supermarket: 'mercadona', category: 'lacteos', nutritionPer100g: { kcal: 46, proteins: 3.2, carbs: 4.8, fats: 1.6 }, defaultServingG: 250, unit: 'ml', emoji: '🥛' },
  { id: 'cla-leche-desnatada', name: 'Leche Desnatada', brand: 'Central Lechera Asturiana', supermarket: 'mercadona', category: 'lacteos', nutritionPer100g: { kcal: 34, proteins: 3.3, carbs: 4.9, fats: 0.1 }, defaultServingG: 250, unit: 'ml', emoji: '🥛' },
  { id: 'cla-nata-montar', name: 'Nata para Montar', brand: 'Central Lechera Asturiana', supermarket: 'mercadona', category: 'lacteos', nutritionPer100g: { kcal: 310, proteins: 2.2, carbs: 3.4, fats: 32.0 }, defaultServingG: 30, unit: 'ml', emoji: '🍶' },

  // ─── PASCUAL ───
  { id: 'pas-leche-entera', name: 'Leche Entera', brand: 'Pascual', supermarket: 'mercadona', category: 'lacteos', nutritionPer100g: { kcal: 63, proteins: 3.1, carbs: 4.6, fats: 3.5 }, defaultServingG: 250, unit: 'ml', emoji: '🥛' },
  { id: 'pas-bifrutas-tropical', name: 'Bifrutas Tropical', brand: 'Pascual', supermarket: 'mercadona', category: 'bebidas', nutritionPer100g: { kcal: 31, proteins: 0.2, carbs: 7.4, fats: 0.0 }, defaultServingG: 330, unit: 'ml', emoji: '🧃' },
  { id: 'pas-vivesoy-soja', name: 'Vivesoy Soja', brand: 'Pascual', supermarket: 'mercadona', category: 'lacteos', nutritionPer100g: { kcal: 41, proteins: 3.3, carbs: 2.8, fats: 1.8 }, defaultServingG: 250, unit: 'ml', emoji: '🥛' },

  // ─── FERRERO / CHOCOLATES ───
  { id: 'fer-nutella', name: 'Nutella', brand: 'Ferrero', supermarket: 'mercadona', category: 'dulces', nutritionPer100g: { kcal: 539, proteins: 6.3, carbs: 57.5, fats: 30.9 }, defaultServingG: 15, unit: 'g', emoji: '🍫' },
  { id: 'fer-kinder-bueno', name: 'Kinder Bueno', brand: 'Ferrero', supermarket: 'mercadona', category: 'dulces', nutritionPer100g: { kcal: 572, proteins: 9.2, carbs: 49.5, fats: 37.3 }, defaultServingG: 43, unit: 'g', emoji: '🍫' },
  { id: 'fer-ferrero-rocher', name: 'Ferrero Rocher', brand: 'Ferrero', supermarket: 'mercadona', category: 'dulces', nutritionPer100g: { kcal: 594, proteins: 8.7, carbs: 43.0, fats: 42.5 }, defaultServingG: 12.5, unit: 'g', emoji: '🍫' },

  // ─── VALOR ───
  { id: 'val-choc-puro', name: 'Chocolate Puro', brand: 'Valor', supermarket: 'mercadona', category: 'dulces', nutritionPer100g: { kcal: 497, proteins: 5.0, carbs: 52.0, fats: 29.0 }, defaultServingG: 20, unit: 'g', emoji: '🍫' },
  { id: 'val-choc-negro-70', name: 'Chocolate Negro 70%', brand: 'Valor', supermarket: 'mercadona', category: 'dulces', nutritionPer100g: { kcal: 547, proteins: 8.0, carbs: 33.0, fats: 41.0 }, defaultServingG: 20, unit: 'g', emoji: '🍫' },
  { id: 'val-choc-leche', name: 'Chocolate con Leche', brand: 'Valor', supermarket: 'mercadona', category: 'dulces', nutritionPer100g: { kcal: 550, proteins: 7.5, carbs: 55.0, fats: 33.0 }, defaultServingG: 20, unit: 'g', emoji: '🍫' },
  { id: 'val-cacao-soluble', name: 'Cacao Soluble a la Taza', brand: 'Valor', supermarket: 'mercadona', category: 'bebidas', nutritionPer100g: { kcal: 358, proteins: 6.0, carbs: 69.0, fats: 5.5 }, defaultServingG: 25, unit: 'g', emoji: '☕' },

  // ─── COLA CAO ───
  { id: 'colacao-original', name: 'ColaCao Original', brand: 'ColaCao', supermarket: 'mercadona', category: 'bebidas', nutritionPer100g: { kcal: 374, proteins: 5.3, carbs: 78.0, fats: 3.5 }, defaultServingG: 14, unit: 'g', emoji: '🍫' },
  { id: 'colacao-turbo', name: 'ColaCao Turbo', brand: 'ColaCao', supermarket: 'mercadona', category: 'bebidas', nutritionPer100g: { kcal: 369, proteins: 6.0, carbs: 75.0, fats: 3.5 }, defaultServingG: 14, unit: 'g', emoji: '🍫' },
  { id: 'colacao-0', name: 'ColaCao 0% Azúcares', brand: 'ColaCao', supermarket: 'mercadona', category: 'bebidas', nutritionPer100g: { kcal: 299, proteins: 22.0, carbs: 24.0, fats: 9.0 }, defaultServingG: 14, unit: 'g', emoji: '🍫' },

  // ─── GALLETAS (LU / FONTANEDA / GULLÓN) ───
  { id: 'lu-principe', name: 'Príncipe Chocolate', brand: 'LU', supermarket: 'mercadona', category: 'dulces', nutritionPer100g: { kcal: 476, proteins: 6.5, carbs: 67.0, fats: 19.0 }, defaultServingG: 25, unit: 'g', emoji: '🍪' },
  { id: 'lu-dinosaurus', name: 'Dinosaurus', brand: 'LU', supermarket: 'mercadona', category: 'dulces', nutritionPer100g: { kcal: 470, proteins: 6.0, carbs: 65.0, fats: 20.0 }, defaultServingG: 30, unit: 'g', emoji: '🍪' },
  { id: 'lu-maria-oro', name: 'María Oro', brand: 'LU', supermarket: 'mercadona', category: 'dulces', nutritionPer100g: { kcal: 440, proteins: 7.0, carbs: 73.0, fats: 13.0 }, defaultServingG: 25, unit: 'g', emoji: '🍪' },
  { id: 'font-digestive', name: 'Digestive Original', brand: 'Fontaneda', supermarket: 'mercadona', category: 'dulces', nutritionPer100g: { kcal: 465, proteins: 7.0, carbs: 65.0, fats: 19.0 }, defaultServingG: 29, unit: 'g', emoji: '🍪' },
  { id: 'gul-digestive-avena', name: 'Digestive Avena Choc', brand: 'Gullón', supermarket: 'mercadona', category: 'dulces', nutritionPer100g: { kcal: 478, proteins: 7.0, carbs: 62.0, fats: 22.0 }, defaultServingG: 29, unit: 'g', emoji: '🍪' },
  { id: 'gul-maria-integral', name: 'Maria Integral', brand: 'Gullón', supermarket: 'mercadona', category: 'dulces', nutritionPer100g: { kcal: 435, proteins: 7.5, carbs: 70.0, fats: 13.0 }, defaultServingG: 25, unit: 'g', emoji: '🍪' },
  { id: 'gul-diet-nature-sin', name: 'Diet Nature Sin Azúcar', brand: 'Gullón', supermarket: 'mercadona', category: 'dulces', nutritionPer100g: { kcal: 443, proteins: 7.0, carbs: 66.0, fats: 16.0 }, defaultServingG: 25, unit: 'g', emoji: '🍪' },
  { id: 'gul-zero-sin-azucar', name: 'Zero Sin Azúcar Chocolate', brand: 'Gullón', supermarket: 'mercadona', category: 'dulces', nutritionPer100g: { kcal: 470, proteins: 7.0, carbs: 62.0, fats: 21.0 }, defaultServingG: 25, unit: 'g', emoji: '🍪' },

  // ─── OSCAR MAYER / CAMPOFRÍO / EMBUTIDOS ───
  { id: 'om-pavo-braseado', name: 'Pavo Braseado Lonchas', brand: 'Oscar Mayer', supermarket: 'mercadona', category: 'embutidos', nutritionPer100g: { kcal: 96, proteins: 16.0, carbs: 2.5, fats: 2.5 }, defaultServingG: 30, unit: 'g', emoji: '🥩' },
  { id: 'om-salchichas-frank', name: 'Salchichas Frankfurt', brand: 'Oscar Mayer', supermarket: 'mercadona', category: 'embutidos', nutritionPer100g: { kcal: 265, proteins: 11.0, carbs: 2.0, fats: 24.0 }, defaultServingG: 35, unit: 'g', emoji: '🌭' },
  { id: 'cf-jamon-cocido-extra', name: 'Jamón Cocido Extra', brand: 'Campofrío', supermarket: 'mercadona', category: 'embutidos', nutritionPer100g: { kcal: 108, proteins: 18.0, carbs: 1.0, fats: 3.5 }, defaultServingG: 40, unit: 'g', emoji: '🥓' },
  { id: 'cf-pavo-natural', name: 'Pechuga de Pavo al Natural', brand: 'Campofrío', supermarket: 'mercadona', category: 'embutidos', nutritionPer100g: { kcal: 82, proteins: 17.0, carbs: 1.0, fats: 1.0 }, defaultServingG: 40, unit: 'g', emoji: '🥩' },
  { id: 'cf-chorizo-pamplona', name: 'Chorizo de Pamplona', brand: 'Campofrío', supermarket: 'mercadona', category: 'embutidos', nutritionPer100g: { kcal: 430, proteins: 22.0, carbs: 2.0, fats: 37.0 }, defaultServingG: 25, unit: 'g', emoji: '🌶️' },
  { id: 'cf-fuet', name: 'Fuet Extra', brand: 'Campofrío', supermarket: 'mercadona', category: 'embutidos', nutritionPer100g: { kcal: 461, proteins: 28.0, carbs: 1.0, fats: 38.0 }, defaultServingG: 25, unit: 'g', emoji: '🥓' },
  { id: 'nac-jamon-serrano', name: 'Jamón Serrano', brand: 'Navidul', supermarket: 'mercadona', category: 'embutidos', nutritionPer100g: { kcal: 241, proteins: 31.0, carbs: 0.0, fats: 13.0 }, defaultServingG: 30, unit: 'g', emoji: '🥓' },

  // ─── SALSAS (HEINZ / PRIMA / LIGERESA) ───
  { id: 'hz-ketchup', name: 'Ketchup', brand: 'Heinz', supermarket: 'mercadona', category: 'salsas', nutritionPer100g: { kcal: 102, proteins: 1.3, carbs: 24.0, fats: 0.1 }, defaultServingG: 15, unit: 'g', emoji: '🍅' },
  { id: 'hz-mayonesa', name: 'Mayonesa', brand: 'Heinz', supermarket: 'mercadona', category: 'salsas', nutritionPer100g: { kcal: 680, proteins: 1.0, carbs: 2.0, fats: 74.0 }, defaultServingG: 15, unit: 'g', emoji: '🫙' },
  { id: 'hz-mostaza', name: 'Mostaza', brand: 'Heinz', supermarket: 'mercadona', category: 'salsas', nutritionPer100g: { kcal: 67, proteins: 4.0, carbs: 4.0, fats: 3.5 }, defaultServingG: 10, unit: 'g', emoji: '🫙' },
  { id: 'pri-tomate-frito', name: 'Tomate Frito', brand: 'Orlando', supermarket: 'mercadona', category: 'salsas', nutritionPer100g: { kcal: 78, proteins: 1.3, carbs: 9.5, fats: 3.8 }, defaultServingG: 50, unit: 'g', emoji: '🍅' },
  { id: 'lig-mayonesa-ligera', name: 'Mayonesa Ligera', brand: 'Ligeresa', supermarket: 'mercadona', category: 'salsas', nutritionPer100g: { kcal: 288, proteins: 0.9, carbs: 7.0, fats: 28.0 }, defaultServingG: 15, unit: 'g', emoji: '🫙' },

  // ─── CONSERVAS (CALVO / ISABEL) ───
  { id: 'cal-atun-aceite', name: 'Atún en Aceite de Oliva', brand: 'Calvo', supermarket: 'mercadona', category: 'conservas', nutritionPer100g: { kcal: 186, proteins: 25.0, carbs: 0.0, fats: 9.3 }, defaultServingG: 56, unit: 'g', emoji: '🥫' },
  { id: 'cal-atun-natural', name: 'Atún al Natural', brand: 'Calvo', supermarket: 'mercadona', category: 'conservas', nutritionPer100g: { kcal: 107, proteins: 25.0, carbs: 0.0, fats: 0.8 }, defaultServingG: 56, unit: 'g', emoji: '🥫' },
  { id: 'isa-sardinas-aceite', name: 'Sardinas en Aceite de Oliva', brand: 'Isabel', supermarket: 'mercadona', category: 'conservas', nutritionPer100g: { kcal: 221, proteins: 23.0, carbs: 0.0, fats: 14.0 }, defaultServingG: 85, unit: 'g', emoji: '🐟' },
  { id: 'isa-mejillones-escabeche', name: 'Mejillones en Escabeche', brand: 'Isabel', supermarket: 'mercadona', category: 'conservas', nutritionPer100g: { kcal: 168, proteins: 17.0, carbs: 5.0, fats: 9.0 }, defaultServingG: 70, unit: 'g', emoji: '🦪' },

  // ─── QUESOS (GARCÍA BAQUERO / PRESIDENT / PHILADELPHIA) ───
  { id: 'gb-manchego-semi', name: 'Manchego Semicurado', brand: 'García Baquero', supermarket: 'mercadona', category: 'lacteos', nutritionPer100g: { kcal: 392, proteins: 27.0, carbs: 0.5, fats: 31.0 }, defaultServingG: 30, unit: 'g', emoji: '🧀' },
  { id: 'gb-manchego-curado', name: 'Manchego Curado', brand: 'García Baquero', supermarket: 'mercadona', category: 'lacteos', nutritionPer100g: { kcal: 409, proteins: 30.0, carbs: 0.2, fats: 32.0 }, defaultServingG: 30, unit: 'g', emoji: '🧀' },
  { id: 'pre-brie', name: 'Brie', brand: 'Président', supermarket: 'mercadona', category: 'lacteos', nutritionPer100g: { kcal: 334, proteins: 20.0, carbs: 0.5, fats: 28.0 }, defaultServingG: 30, unit: 'g', emoji: '🧀' },
  { id: 'pre-camembert', name: 'Camembert', brand: 'Président', supermarket: 'mercadona', category: 'lacteos', nutritionPer100g: { kcal: 299, proteins: 20.0, carbs: 0.5, fats: 24.0 }, defaultServingG: 30, unit: 'g', emoji: '🧀' },
  { id: 'phi-original', name: 'Philadelphia Original', brand: 'Philadelphia', supermarket: 'mercadona', category: 'lacteos', nutritionPer100g: { kcal: 253, proteins: 5.7, carbs: 4.1, fats: 24.0 }, defaultServingG: 30, unit: 'g', emoji: '🧀' },
  { id: 'phi-light', name: 'Philadelphia Light', brand: 'Philadelphia', supermarket: 'mercadona', category: 'lacteos', nutritionPer100g: { kcal: 153, proteins: 7.5, carbs: 4.0, fats: 12.0 }, defaultServingG: 30, unit: 'g', emoji: '🧀' },

  // ─── SNACKS (LAY'S / PRINGLES / DORITOS) ───
  { id: 'lay-clasicas', name: 'Patatas Clásicas', brand: "Lay's", supermarket: 'mercadona', category: 'snacks', nutritionPer100g: { kcal: 549, proteins: 6.5, carbs: 53.0, fats: 34.0 }, defaultServingG: 30, unit: 'g', emoji: '🥔' },
  { id: 'lay-campesinas', name: 'Patatas Campesinas', brand: "Lay's", supermarket: 'mercadona', category: 'snacks', nutritionPer100g: { kcal: 507, proteins: 6.5, carbs: 55.0, fats: 29.0 }, defaultServingG: 30, unit: 'g', emoji: '🥔' },
  { id: 'pri-original', name: 'Pringles Original', brand: 'Pringles', supermarket: 'mercadona', category: 'snacks', nutritionPer100g: { kcal: 524, proteins: 4.0, carbs: 53.0, fats: 33.0 }, defaultServingG: 30, unit: 'g', emoji: '🥔' },
  { id: 'dor-original', name: 'Doritos Original', brand: 'Doritos', supermarket: 'mercadona', category: 'snacks', nutritionPer100g: { kcal: 489, proteins: 6.5, carbs: 61.0, fats: 24.0 }, defaultServingG: 30, unit: 'g', emoji: '🌮' },
  { id: 'fri-rizos', name: 'Rizos', brand: 'Fritos', supermarket: 'mercadona', category: 'snacks', nutritionPer100g: { kcal: 498, proteins: 5.5, carbs: 58.0, fats: 27.0 }, defaultServingG: 30, unit: 'g', emoji: '🥔' },
  { id: 'mat-coc-frutos', name: 'Cocktail de Frutos Secos', brand: 'Matutano', supermarket: 'mercadona', category: 'snacks', nutritionPer100g: { kcal: 595, proteins: 18.0, carbs: 20.0, fats: 49.0 }, defaultServingG: 30, unit: 'g', emoji: '🥜' },

  // ─── ZUMOS (DON SIMÓN / GRANINI) ───
  { id: 'ds-zumo-naranja', name: 'Zumo de Naranja', brand: 'Don Simón', supermarket: 'mercadona', category: 'bebidas', nutritionPer100g: { kcal: 43, proteins: 0.5, carbs: 10.0, fats: 0.0 }, defaultServingG: 250, unit: 'ml', emoji: '🍊' },
  { id: 'ds-zumo-piña', name: 'Zumo de Piña', brand: 'Don Simón', supermarket: 'mercadona', category: 'bebidas', nutritionPer100g: { kcal: 48, proteins: 0.3, carbs: 11.5, fats: 0.0 }, defaultServingG: 250, unit: 'ml', emoji: '🍍' },
  { id: 'ds-zumo-melocoton', name: 'Zumo de Melocotón', brand: 'Don Simón', supermarket: 'mercadona', category: 'bebidas', nutritionPer100g: { kcal: 46, proteins: 0.3, carbs: 11.0, fats: 0.0 }, defaultServingG: 250, unit: 'ml', emoji: '🍑' },
  { id: 'gra-zumo-naranja', name: 'Zumo de Naranja', brand: 'Granini', supermarket: 'mercadona', category: 'bebidas', nutritionPer100g: { kcal: 45, proteins: 0.6, carbs: 10.3, fats: 0.1 }, defaultServingG: 250, unit: 'ml', emoji: '🍊' },

  // ─── ARROZ (SOS / BRILLANTE) ───
  { id: 'sos-arroz-blanco', name: 'Arroz Largo', brand: 'SOS', supermarket: 'mercadona', category: 'cereales', nutritionPer100g: { kcal: 350, proteins: 7.0, carbs: 78.0, fats: 0.8 }, defaultServingG: 75, unit: 'g', emoji: '🍚' },
  { id: 'sos-arroz-integral', name: 'Arroz Integral', brand: 'SOS', supermarket: 'mercadona', category: 'cereales', nutritionPer100g: { kcal: 348, proteins: 7.5, carbs: 74.0, fats: 2.5 }, defaultServingG: 75, unit: 'g', emoji: '🍚' },
  { id: 'bri-arroz-vasito', name: 'Arroz Vasito Brillante', brand: 'Brillante', supermarket: 'mercadona', category: 'cereales', nutritionPer100g: { kcal: 143, proteins: 2.5, carbs: 31.0, fats: 0.5 }, defaultServingG: 125, unit: 'g', emoji: '🍚' },
  { id: 'bri-arroz-integral-vasito', name: 'Arroz Integral Vasito', brand: 'Brillante', supermarket: 'mercadona', category: 'cereales', nutritionPer100g: { kcal: 140, proteins: 3.0, carbs: 29.0, fats: 1.2 }, defaultServingG: 125, unit: 'g', emoji: '🍚' },

  // ─── LEGUMBRES (LITORAL / LA ASTURIANA) ───
  { id: 'lit-fabada', name: 'Fabada Asturiana', brand: 'Litoral', supermarket: 'mercadona', category: 'legumbres', nutritionPer100g: { kcal: 132, proteins: 6.5, carbs: 10.0, fats: 7.5 }, defaultServingG: 210, unit: 'g', emoji: '🫘' },
  { id: 'lit-lentejas-chorizo', name: 'Lentejas con Chorizo', brand: 'Litoral', supermarket: 'mercadona', category: 'legumbres', nutritionPer100g: { kcal: 107, proteins: 6.5, carbs: 12.0, fats: 3.5 }, defaultServingG: 210, unit: 'g', emoji: '🫘' },
  { id: 'ast-lentejas', name: 'Lentejas Pardinas', brand: 'La Asturiana', supermarket: 'mercadona', category: 'legumbres', nutritionPer100g: { kcal: 319, proteins: 24.0, carbs: 48.0, fats: 1.5 }, defaultServingG: 70, unit: 'g', emoji: '🫘' },
  { id: 'ast-garbanzos', name: 'Garbanzos', brand: 'La Asturiana', supermarket: 'mercadona', category: 'legumbres', nutritionPer100g: { kcal: 343, proteins: 20.0, carbs: 49.0, fats: 5.0 }, defaultServingG: 70, unit: 'g', emoji: '🫘' },
  { id: 'ast-alubias', name: 'Alubias Blancas', brand: 'La Asturiana', supermarket: 'mercadona', category: 'legumbres', nutritionPer100g: { kcal: 293, proteins: 21.0, carbs: 42.0, fats: 1.5 }, defaultServingG: 70, unit: 'g', emoji: '🫘' },

  // ─── CONGELADOS (FINDUS / LA COCINERA) ───
  { id: 'fin-capitan-pescado', name: 'Capitán Pescado', brand: 'Findus', supermarket: 'mercadona', category: 'congelados', nutritionPer100g: { kcal: 193, proteins: 12.0, carbs: 18.0, fats: 8.0 }, defaultServingG: 100, unit: 'g', emoji: '🐟' },
  { id: 'fin-guisantes', name: 'Guisantes Finos', brand: 'Findus', supermarket: 'mercadona', category: 'congelados', nutritionPer100g: { kcal: 70, proteins: 5.5, carbs: 8.0, fats: 0.5 }, defaultServingG: 150, unit: 'g', emoji: '🟢' },
  { id: 'fin-menestra', name: 'Menestra de Verduras', brand: 'Findus', supermarket: 'mercadona', category: 'congelados', nutritionPer100g: { kcal: 35, proteins: 2.0, carbs: 4.0, fats: 0.5 }, defaultServingG: 200, unit: 'g', emoji: '🥦' },
  { id: 'coc-san-jacobos', name: 'San Jacobos', brand: 'La Cocinera', supermarket: 'mercadona', category: 'congelados', nutritionPer100g: { kcal: 240, proteins: 12.0, carbs: 20.0, fats: 12.0 }, defaultServingG: 90, unit: 'g', emoji: '🥩' },
  { id: 'coc-croquetas-jamon', name: 'Croquetas de Jamón', brand: 'La Cocinera', supermarket: 'mercadona', category: 'congelados', nutritionPer100g: { kcal: 231, proteins: 6.2, carbs: 21.0, fats: 13.7 }, defaultServingG: 30, unit: 'g', emoji: '🟤' },

  // ─── PROTEÍNAS / FITNESS (WEIDER / MYPROTEIN) ───
  { id: 'wei-protein-bar', name: 'Protein Bar Chocolate', brand: 'Weider', supermarket: 'mercadona', category: 'snacks', nutritionPer100g: { kcal: 340, proteins: 32.0, carbs: 35.0, fats: 9.0 }, defaultServingG: 35, unit: 'g', emoji: '💪' },
  { id: 'wei-vegan-protein', name: 'Vegan Protein Bar', brand: 'Weider', supermarket: 'mercadona', category: 'snacks', nutritionPer100g: { kcal: 355, proteins: 28.0, carbs: 40.0, fats: 8.0 }, defaultServingG: 35, unit: 'g', emoji: '💪' },

  // ─── PAN / TORTITAS ───
  { id: 'bio-tortitas-arroz', name: 'Tortitas de Arroz', brand: 'Bicentury', supermarket: 'mercadona', category: 'snacks', nutritionPer100g: { kcal: 383, proteins: 8.0, carbs: 82.0, fats: 2.5 }, defaultServingG: 8, unit: 'g', emoji: '🍘' },
  { id: 'bio-tortitas-maiz', name: 'Tortitas de Maíz', brand: 'Bicentury', supermarket: 'mercadona', category: 'snacks', nutritionPer100g: { kcal: 385, proteins: 7.0, carbs: 83.0, fats: 2.5 }, defaultServingG: 8, unit: 'g', emoji: '🍘' },
  { id: 'bio-tortitas-choc', name: 'Tortitas Arroz Chocolate', brand: 'Bicentury', supermarket: 'mercadona', category: 'snacks', nutritionPer100g: { kcal: 462, proteins: 6.0, carbs: 68.0, fats: 18.0 }, defaultServingG: 20, unit: 'g', emoji: '🍘' },

  // ─── CAFÉ / INFUSIONES ───
  { id: 'nsc-dolce-gusto', name: 'Café Dolce Gusto Espresso', brand: 'Nescafé', supermarket: 'mercadona', category: 'bebidas', nutritionPer100g: { kcal: 2, proteins: 0.3, carbs: 0.0, fats: 0.0 }, defaultServingG: 40, unit: 'ml', emoji: '☕' },
  { id: 'nsc-solucion', name: 'Nescafé Classic Soluble', brand: 'Nescafé', supermarket: 'mercadona', category: 'bebidas', nutritionPer100g: { kcal: 333, proteins: 14.0, carbs: 41.0, fats: 11.0 }, defaultServingG: 2, unit: 'g', emoji: '☕' },

  // ─── AGUA MINERAL ───
  { id: 'bez-agua', name: 'Agua Mineral', brand: 'Bezoya', supermarket: 'mercadona', category: 'bebidas', nutritionPer100g: { kcal: 0, proteins: 0.0, carbs: 0.0, fats: 0.0 }, defaultServingG: 500, unit: 'ml', emoji: '💧' },
  { id: 'fon-agua', name: 'Agua Mineral', brand: 'Font Vella', supermarket: 'mercadona', category: 'bebidas', nutritionPer100g: { kcal: 0, proteins: 0.0, carbs: 0.0, fats: 0.0 }, defaultServingG: 500, unit: 'ml', emoji: '💧' },
  { id: 'lan-agua-gas', name: 'Agua con Gas', brand: 'Lanjarón', supermarket: 'mercadona', category: 'bebidas', nutritionPer100g: { kcal: 0, proteins: 0.0, carbs: 0.0, fats: 0.0 }, defaultServingG: 330, unit: 'ml', emoji: '💧' },

  // ─── HUEVOS ───
  { id: 'mat-huevos-camperos', name: 'Huevos Camperos', brand: 'Matines', supermarket: 'mercadona', category: 'huevos', nutritionPer100g: { kcal: 143, proteins: 12.5, carbs: 0.7, fats: 10.0 }, defaultServingG: 60, unit: 'g', emoji: '🥚' },
  { id: 'dagu-huevos-eco', name: 'Huevos Ecológicos', brand: 'Dagu', supermarket: 'mercadona', category: 'huevos', nutritionPer100g: { kcal: 143, proteins: 12.5, carbs: 0.7, fats: 10.0 }, defaultServingG: 60, unit: 'g', emoji: '🥚' },

  // ─── HELADOS (MAGNUM / HÄAGEN-DAZS) ───
  { id: 'mag-classic', name: 'Magnum Classic', brand: 'Magnum', supermarket: 'mercadona', category: 'dulces', nutritionPer100g: { kcal: 269, proteins: 3.6, carbs: 27.0, fats: 16.0 }, defaultServingG: 86, unit: 'g', emoji: '🍦' },
  { id: 'mag-white', name: 'Magnum White', brand: 'Magnum', supermarket: 'mercadona', category: 'dulces', nutritionPer100g: { kcal: 299, proteins: 3.8, carbs: 30.0, fats: 18.0 }, defaultServingG: 86, unit: 'g', emoji: '🍦' },
  { id: 'hd-vainilla', name: 'Vainilla', brand: 'Häagen-Dazs', supermarket: 'mercadona', category: 'dulces', nutritionPer100g: { kcal: 248, proteins: 4.0, carbs: 24.0, fats: 15.0 }, defaultServingG: 100, unit: 'g', emoji: '🍨' },
  { id: 'hd-cookies-cream', name: 'Cookies & Cream', brand: 'Häagen-Dazs', supermarket: 'mercadona', category: 'dulces', nutritionPer100g: { kcal: 264, proteins: 4.0, carbs: 27.0, fats: 16.0 }, defaultServingG: 100, unit: 'g', emoji: '🍨' },

  // ══════════════════════════════════════════════════════════════
  // ▓▓  AMPLIACIÓN v1.4 (FatSecret España + OpenFoodFacts)     ▓▓
  // ══════════════════════════════════════════════════════════════

  // ─── DANONE extra ───
  { id: 'dan-activia-fresa', name: 'Activia Fresa', brand: 'Danone', supermarket: 'mercadona', category: 'lacteos', nutritionPer100g: { kcal: 80, proteins: 3.5, carbs: 12.0, fats: 2.3 }, defaultServingG: 120, unit: 'g', emoji: '🫙' },
  { id: 'dan-actimel-fresa', name: 'Actimel Fresa', brand: 'Danone', supermarket: 'mercadona', category: 'lacteos', nutritionPer100g: { kcal: 72, proteins: 2.8, carbs: 11.0, fats: 1.6 }, defaultServingG: 100, unit: 'ml', emoji: '🥛' },
  { id: 'dan-actimel-0', name: 'Actimel 0%', brand: 'Danone', supermarket: 'mercadona', category: 'lacteos', nutritionPer100g: { kcal: 40, proteins: 2.9, carbs: 5.7, fats: 0.1 }, defaultServingG: 100, unit: 'ml', emoji: '🥛' },
  { id: 'dan-densia', name: 'Densia Natural', brand: 'Danone', supermarket: 'mercadona', category: 'lacteos', nutritionPer100g: { kcal: 53, proteins: 4.0, carbs: 5.5, fats: 1.6 }, defaultServingG: 120, unit: 'g', emoji: '🫙' },
  { id: 'dan-vitalinea-natural', name: 'Vitalínea 0% Natural', brand: 'Danone', supermarket: 'mercadona', category: 'lacteos', nutritionPer100g: { kcal: 41, proteins: 4.3, carbs: 5.6, fats: 0.1 }, defaultServingG: 120, unit: 'g', emoji: '🫙' },
  { id: 'dan-vitalinea-fresa', name: 'Vitalínea 0% Fresa', brand: 'Danone', supermarket: 'mercadona', category: 'lacteos', nutritionPer100g: { kcal: 46, proteins: 4.0, carbs: 7.0, fats: 0.1 }, defaultServingG: 120, unit: 'g', emoji: '🫙' },
  { id: 'dan-yopro-choco', name: 'YoPRO Chocolate', brand: 'Danone', supermarket: 'mercadona', category: 'lacteos', nutritionPer100g: { kcal: 68, proteins: 10.0, carbs: 5.5, fats: 0.8 }, defaultServingG: 160, unit: 'g', emoji: '🫙' },
  { id: 'dan-danacol', name: 'Danacol Natural', brand: 'Danone', supermarket: 'mercadona', category: 'lacteos', nutritionPer100g: { kcal: 50, proteins: 3.2, carbs: 7.1, fats: 1.1 }, defaultServingG: 100, unit: 'ml', emoji: '🥛' },

  // ─── NESTLÉ / CEREALES extra ───
  { id: 'nes-estrellitas', name: 'Estrellitas', brand: 'Nestlé', supermarket: 'mercadona', category: 'cereales', nutritionPer100g: { kcal: 384, proteins: 8.0, carbs: 76.0, fats: 3.5 }, defaultServingG: 30, unit: 'g', emoji: '🥣' },
  { id: 'nes-golden-grahams', name: 'Golden Grahams', brand: 'Nestlé', supermarket: 'mercadona', category: 'cereales', nutritionPer100g: { kcal: 397, proteins: 5.5, carbs: 84.0, fats: 4.0 }, defaultServingG: 30, unit: 'g', emoji: '🥣' },
  { id: 'nes-cheerios', name: 'Cheerios Avena y Miel', brand: 'Nestlé', supermarket: 'mercadona', category: 'cereales', nutritionPer100g: { kcal: 383, proteins: 9.5, carbs: 75.0, fats: 3.5 }, defaultServingG: 30, unit: 'g', emoji: '🥣' },
  { id: 'kel-froot-loops', name: 'Froot Loops', brand: "Kellogg's", supermarket: 'mercadona', category: 'cereales', nutritionPer100g: { kcal: 379, proteins: 5.5, carbs: 87.0, fats: 2.0 }, defaultServingG: 30, unit: 'g', emoji: '🥣' },
  { id: 'kel-smacks', name: 'Smacks', brand: "Kellogg's", supermarket: 'mercadona', category: 'cereales', nutritionPer100g: { kcal: 378, proteins: 6.5, carbs: 80.0, fats: 3.0 }, defaultServingG: 30, unit: 'g', emoji: '🥣' },
  { id: 'kel-tresor', name: 'Tresor Chocolate', brand: "Kellogg's", supermarket: 'mercadona', category: 'cereales', nutritionPer100g: { kcal: 418, proteins: 5.5, carbs: 79.0, fats: 8.0 }, defaultServingG: 30, unit: 'g', emoji: '🥣' },
  { id: 'qua-avena-integral', name: 'Avena Copos Integral', brand: 'Quaker', supermarket: 'mercadona', category: 'cereales', nutritionPer100g: { kcal: 370, proteins: 13.5, carbs: 60.0, fats: 6.5 }, defaultServingG: 40, unit: 'g', emoji: '🥣' },
  { id: 'qua-avena-instant', name: 'Oatso Simple Sabor Natural', brand: 'Quaker', supermarket: 'mercadona', category: 'cereales', nutritionPer100g: { kcal: 374, proteins: 12.0, carbs: 62.0, fats: 8.0 }, defaultServingG: 30, unit: 'g', emoji: '🥣' },

  // ─── COCA-COLA / PEPSICO extra ───
  { id: 'cc-cocacola-sin-cafeina', name: 'Coca-Cola Sin Cafeína', brand: 'Coca-Cola', supermarket: 'mercadona', category: 'bebidas', nutritionPer100g: { kcal: 42, proteins: 0.0, carbs: 10.6, fats: 0.0 }, defaultServingG: 330, unit: 'ml', emoji: '🥤' },
  { id: 'cc-sprite', name: 'Sprite', brand: 'Coca-Cola', supermarket: 'mercadona', category: 'bebidas', nutritionPer100g: { kcal: 34, proteins: 0.0, carbs: 8.0, fats: 0.0 }, defaultServingG: 330, unit: 'ml', emoji: '🥤' },
  { id: 'cc-fanta-limon', name: 'Fanta Limón', brand: 'Coca-Cola', supermarket: 'mercadona', category: 'bebidas', nutritionPer100g: { kcal: 30, proteins: 0.0, carbs: 7.0, fats: 0.0 }, defaultServingG: 330, unit: 'ml', emoji: '🥤' },
  { id: 'cc-minute-maid-naranja', name: 'Minute Maid Naranja', brand: 'Coca-Cola', supermarket: 'mercadona', category: 'bebidas', nutritionPer100g: { kcal: 45, proteins: 0.7, carbs: 10.0, fats: 0.1 }, defaultServingG: 330, unit: 'ml', emoji: '🍊' },
  { id: 'pep-pepsi-max', name: 'Pepsi Max', brand: 'PepsiCo', supermarket: 'mercadona', category: 'bebidas', nutritionPer100g: { kcal: 1, proteins: 0.0, carbs: 0.0, fats: 0.0 }, defaultServingG: 330, unit: 'ml', emoji: '🥤' },
  { id: 'pep-mirinda', name: 'Mirinda Naranja', brand: 'PepsiCo', supermarket: 'mercadona', category: 'bebidas', nutritionPer100g: { kcal: 44, proteins: 0.0, carbs: 10.6, fats: 0.0 }, defaultServingG: 330, unit: 'ml', emoji: '🥤' },
  { id: 'sch-schweppes-tonic', name: 'Schweppes Tónica', brand: 'Schweppes', supermarket: 'mercadona', category: 'bebidas', nutritionPer100g: { kcal: 30, proteins: 0.0, carbs: 7.4, fats: 0.0 }, defaultServingG: 200, unit: 'ml', emoji: '🥤' },
  { id: 'kas-kas-limon', name: 'Kas Limón', brand: 'Kas', supermarket: 'mercadona', category: 'bebidas', nutritionPer100g: { kcal: 35, proteins: 0.0, carbs: 8.5, fats: 0.0 }, defaultServingG: 330, unit: 'ml', emoji: '🥤' },

  // ─── CERVEZAS ───
  { id: 'beer-mahou-clasica', name: 'Mahou Clásica', brand: 'Mahou', supermarket: 'mercadona', category: 'bebidas', nutritionPer100g: { kcal: 42, proteins: 0.5, carbs: 3.0, fats: 0.0 }, defaultServingG: 330, unit: 'ml', emoji: '🍺' },
  { id: 'beer-mahou-5estrellas', name: 'Mahou 5 Estrellas', brand: 'Mahou', supermarket: 'mercadona', category: 'bebidas', nutritionPer100g: { kcal: 46, proteins: 0.4, carbs: 3.4, fats: 0.0 }, defaultServingG: 330, unit: 'ml', emoji: '🍺' },
  { id: 'beer-estrella-galicia', name: 'Estrella Galicia Especial', brand: 'Estrella Galicia', supermarket: 'mercadona', category: 'bebidas', nutritionPer100g: { kcal: 47, proteins: 0.5, carbs: 3.6, fats: 0.0 }, defaultServingG: 330, unit: 'ml', emoji: '🍺' },
  { id: 'beer-estrella-damm', name: 'Estrella Damm', brand: 'Damm', supermarket: 'mercadona', category: 'bebidas', nutritionPer100g: { kcal: 44, proteins: 0.5, carbs: 3.3, fats: 0.0 }, defaultServingG: 330, unit: 'ml', emoji: '🍺' },
  { id: 'beer-san-miguel', name: 'San Miguel Especial', brand: 'San Miguel', supermarket: 'mercadona', category: 'bebidas', nutritionPer100g: { kcal: 43, proteins: 0.5, carbs: 3.4, fats: 0.0 }, defaultServingG: 330, unit: 'ml', emoji: '🍺' },
  { id: 'beer-san-miguel-0', name: 'San Miguel 0,0%', brand: 'San Miguel', supermarket: 'mercadona', category: 'bebidas', nutritionPer100g: { kcal: 23, proteins: 0.4, carbs: 5.0, fats: 0.0 }, defaultServingG: 330, unit: 'ml', emoji: '🍺' },
  { id: 'beer-heineken', name: 'Heineken', brand: 'Heineken', supermarket: 'mercadona', category: 'bebidas', nutritionPer100g: { kcal: 42, proteins: 0.3, carbs: 3.2, fats: 0.0 }, defaultServingG: 330, unit: 'ml', emoji: '🍺' },
  { id: 'beer-heineken-0', name: 'Heineken 0.0', brand: 'Heineken', supermarket: 'mercadona', category: 'bebidas', nutritionPer100g: { kcal: 21, proteins: 0.3, carbs: 4.6, fats: 0.0 }, defaultServingG: 330, unit: 'ml', emoji: '🍺' },
  { id: 'beer-cruzcampo', name: 'Cruzcampo', brand: 'Cruzcampo', supermarket: 'mercadona', category: 'bebidas', nutritionPer100g: { kcal: 42, proteins: 0.5, carbs: 3.5, fats: 0.0 }, defaultServingG: 330, unit: 'ml', emoji: '🍺' },
  { id: 'beer-alhambra-especial', name: 'Alhambra Especial', brand: 'Alhambra', supermarket: 'mercadona', category: 'bebidas', nutritionPer100g: { kcal: 43, proteins: 0.5, carbs: 3.5, fats: 0.0 }, defaultServingG: 330, unit: 'ml', emoji: '🍺' },

  // ─── VINOS ───
  { id: 'wine-tinto-rioja', name: 'Vino Tinto Rioja Crianza', brand: 'Marqués de Riscal', supermarket: 'mercadona', category: 'bebidas', nutritionPer100g: { kcal: 83, proteins: 0.1, carbs: 2.6, fats: 0.0 }, defaultServingG: 150, unit: 'ml', emoji: '🍷' },
  { id: 'wine-tinto-ribera', name: 'Vino Tinto Ribera del Duero', brand: 'Protos', supermarket: 'mercadona', category: 'bebidas', nutritionPer100g: { kcal: 85, proteins: 0.1, carbs: 2.5, fats: 0.0 }, defaultServingG: 150, unit: 'ml', emoji: '🍷' },
  { id: 'wine-blanco-rueda', name: 'Vino Blanco Rueda Verdejo', brand: 'Marqués de Riscal', supermarket: 'mercadona', category: 'bebidas', nutritionPer100g: { kcal: 82, proteins: 0.1, carbs: 2.6, fats: 0.0 }, defaultServingG: 150, unit: 'ml', emoji: '🥂' },
  { id: 'wine-cava-freixenet', name: 'Cava Brut Nature', brand: 'Freixenet', supermarket: 'mercadona', category: 'bebidas', nutritionPer100g: { kcal: 76, proteins: 0.1, carbs: 0.8, fats: 0.0 }, defaultServingG: 100, unit: 'ml', emoji: '🥂' },
  { id: 'wine-sangria-don-simon', name: 'Sangría', brand: 'Don Simón', supermarket: 'mercadona', category: 'bebidas', nutritionPer100g: { kcal: 82, proteins: 0.2, carbs: 10.0, fats: 0.0 }, defaultServingG: 200, unit: 'ml', emoji: '🍷' },

  // ─── MILKA ───
  { id: 'mil-tableta-leche', name: 'Chocolate con Leche', brand: 'Milka', supermarket: 'mercadona', category: 'dulces', nutritionPer100g: { kcal: 534, proteins: 6.7, carbs: 58.5, fats: 29.5 }, defaultServingG: 25, unit: 'g', emoji: '🍫' },
  { id: 'mil-tableta-oreo', name: 'Chocolate con Oreo', brand: 'Milka', supermarket: 'mercadona', category: 'dulces', nutritionPer100g: { kcal: 516, proteins: 5.3, carbs: 59.0, fats: 27.5 }, defaultServingG: 25, unit: 'g', emoji: '🍫' },
  { id: 'mil-tuc', name: 'Milka & TUC', brand: 'Milka', supermarket: 'mercadona', category: 'dulces', nutritionPer100g: { kcal: 534, proteins: 7.0, carbs: 58.0, fats: 30.0 }, defaultServingG: 35, unit: 'g', emoji: '🍫' },

  // ─── OREO ───
  { id: 'ore-original', name: 'Galletas Oreo Original', brand: 'Oreo', supermarket: 'mercadona', category: 'dulces', nutritionPer100g: { kcal: 479, proteins: 5.2, carbs: 68.0, fats: 20.0 }, defaultServingG: 22, unit: 'g', emoji: '🍪' },
  { id: 'ore-double', name: 'Oreo Double', brand: 'Oreo', supermarket: 'mercadona', category: 'dulces', nutritionPer100g: { kcal: 494, proteins: 4.8, carbs: 67.0, fats: 22.0 }, defaultServingG: 29, unit: 'g', emoji: '🍪' },

  // ─── MARS / SNICKERS / TWIX ───
  { id: 'mars-mars', name: 'Mars', brand: 'Mars', supermarket: 'mercadona', category: 'dulces', nutritionPer100g: { kcal: 449, proteins: 4.0, carbs: 69.0, fats: 17.0 }, defaultServingG: 51, unit: 'g', emoji: '🍫' },
  { id: 'mars-snickers', name: 'Snickers', brand: 'Snickers', supermarket: 'mercadona', category: 'dulces', nutritionPer100g: { kcal: 484, proteins: 8.4, carbs: 56.0, fats: 24.0 }, defaultServingG: 50, unit: 'g', emoji: '🍫' },
  { id: 'mars-twix', name: 'Twix', brand: 'Twix', supermarket: 'mercadona', category: 'dulces', nutritionPer100g: { kcal: 495, proteins: 4.7, carbs: 64.0, fats: 24.0 }, defaultServingG: 50, unit: 'g', emoji: '🍫' },
  { id: 'mars-bounty', name: 'Bounty', brand: 'Bounty', supermarket: 'mercadona', category: 'dulces', nutritionPer100g: { kcal: 473, proteins: 3.8, carbs: 58.5, fats: 25.0 }, defaultServingG: 57, unit: 'g', emoji: '🍫' },
  { id: 'mars-mm-chocolate', name: 'M&M Chocolate', brand: 'M&M', supermarket: 'mercadona', category: 'dulces', nutritionPer100g: { kcal: 492, proteins: 4.4, carbs: 70.0, fats: 21.0 }, defaultServingG: 45, unit: 'g', emoji: '🍬' },
  { id: 'mars-mm-cacahuete', name: 'M&M Cacahuete', brand: 'M&M', supermarket: 'mercadona', category: 'dulces', nutritionPer100g: { kcal: 515, proteins: 9.2, carbs: 59.0, fats: 27.0 }, defaultServingG: 45, unit: 'g', emoji: '🍬' },
  { id: 'mars-haribo-ositos', name: 'Ositos de Oro', brand: 'Haribo', supermarket: 'mercadona', category: 'dulces', nutritionPer100g: { kcal: 343, proteins: 6.9, carbs: 77.0, fats: 0.5 }, defaultServingG: 25, unit: 'g', emoji: '🍬' },
  { id: 'hari-happy-cola', name: 'Happy Cola', brand: 'Haribo', supermarket: 'mercadona', category: 'dulces', nutritionPer100g: { kcal: 343, proteins: 6.9, carbs: 77.0, fats: 0.0 }, defaultServingG: 25, unit: 'g', emoji: '🍬' },
  { id: 'hari-fresas', name: 'Fresas Haribo', brand: 'Haribo', supermarket: 'mercadona', category: 'dulces', nutritionPer100g: { kcal: 350, proteins: 2.5, carbs: 82.0, fats: 0.5 }, defaultServingG: 25, unit: 'g', emoji: '🍓' },

  // ─── FERRERO extra ───
  { id: 'fer-kinder-chocolate', name: 'Kinder Chocolate', brand: 'Ferrero', supermarket: 'mercadona', category: 'dulces', nutritionPer100g: { kcal: 565, proteins: 8.7, carbs: 53.5, fats: 34.5 }, defaultServingG: 12.5, unit: 'g', emoji: '🍫' },
  { id: 'fer-kinder-delice', name: 'Kinder Delice', brand: 'Ferrero', supermarket: 'mercadona', category: 'dulces', nutritionPer100g: { kcal: 407, proteins: 6.4, carbs: 45.0, fats: 22.5 }, defaultServingG: 39, unit: 'g', emoji: '🍫' },
  { id: 'fer-kinder-sorpresa', name: 'Kinder Sorpresa', brand: 'Ferrero', supermarket: 'mercadona', category: 'dulces', nutritionPer100g: { kcal: 569, proteins: 9.0, carbs: 51.0, fats: 36.0 }, defaultServingG: 20, unit: 'g', emoji: '🥚' },
  { id: 'fer-kinder-pinguin', name: 'Kinder Pingüi', brand: 'Ferrero', supermarket: 'mercadona', category: 'dulces', nutritionPer100g: { kcal: 411, proteins: 7.2, carbs: 36.0, fats: 26.5 }, defaultServingG: 30, unit: 'g', emoji: '🍫' },
  { id: 'fer-tictac-menta', name: 'Tic Tac Menta', brand: 'Ferrero', supermarket: 'mercadona', category: 'dulces', nutritionPer100g: { kcal: 391, proteins: 0.0, carbs: 97.0, fats: 0.0 }, defaultServingG: 16, unit: 'g', emoji: '🍬' },

  // ─── LINDT ───
  { id: 'lind-excellence-70', name: 'Excellence 70% Cacao', brand: 'Lindt', supermarket: 'mercadona', category: 'dulces', nutritionPer100g: { kcal: 582, proteins: 9.0, carbs: 34.0, fats: 43.0 }, defaultServingG: 20, unit: 'g', emoji: '🍫' },
  { id: 'lind-excellence-85', name: 'Excellence 85% Cacao', brand: 'Lindt', supermarket: 'mercadona', category: 'dulces', nutritionPer100g: { kcal: 605, proteins: 12.0, carbs: 19.0, fats: 49.0 }, defaultServingG: 20, unit: 'g', emoji: '🍫' },
  { id: 'lind-lindor', name: 'Lindor Leche', brand: 'Lindt', supermarket: 'mercadona', category: 'dulces', nutritionPer100g: { kcal: 620, proteins: 7.0, carbs: 48.0, fats: 44.0 }, defaultServingG: 12.5, unit: 'g', emoji: '🍫' },

  // ─── NUTELLA / DESAYUNO extra ───
  { id: 'fer-nutella-biscuits', name: 'Nutella Biscuits', brand: 'Ferrero', supermarket: 'mercadona', category: 'dulces', nutritionPer100g: { kcal: 524, proteins: 6.8, carbs: 58.0, fats: 29.0 }, defaultServingG: 11.6, unit: 'g', emoji: '🍪' },

  // ─── GALLETAS extra ───
  { id: 'lu-bn', name: 'BN Chocolate', brand: 'LU', supermarket: 'mercadona', category: 'dulces', nutritionPer100g: { kcal: 444, proteins: 6.5, carbs: 67.0, fats: 16.0 }, defaultServingG: 25, unit: 'g', emoji: '🍪' },
  { id: 'lu-tosta-rica', name: 'Tosta Rica', brand: 'Fontaneda', supermarket: 'mercadona', category: 'dulces', nutritionPer100g: { kcal: 454, proteins: 7.0, carbs: 73.0, fats: 14.5 }, defaultServingG: 25, unit: 'g', emoji: '🍪' },
  { id: 'gul-maria-dorada', name: 'María Dorada', brand: 'Gullón', supermarket: 'mercadona', category: 'dulces', nutritionPer100g: { kcal: 440, proteins: 7.5, carbs: 73.0, fats: 12.0 }, defaultServingG: 25, unit: 'g', emoji: '🍪' },
  { id: 'gul-cookies-choc', name: 'Cookies Chocolate', brand: 'Gullón', supermarket: 'mercadona', category: 'dulces', nutritionPer100g: { kcal: 490, proteins: 5.5, carbs: 63.0, fats: 24.0 }, defaultServingG: 25, unit: 'g', emoji: '🍪' },
  { id: 'gul-vitalday-frutas', name: 'Vitalday Frutos Rojos', brand: 'Gullón', supermarket: 'mercadona', category: 'dulces', nutritionPer100g: { kcal: 420, proteins: 7.0, carbs: 68.0, fats: 13.0 }, defaultServingG: 37, unit: 'g', emoji: '🍪' },
  { id: 'chi-palmera-chocolate', name: 'Palmera de Chocolate', brand: 'Chiquilín', supermarket: 'mercadona', category: 'dulces', nutritionPer100g: { kcal: 500, proteins: 5.0, carbs: 58.0, fats: 27.0 }, defaultServingG: 70, unit: 'g', emoji: '🍪' },

  // ─── SNACKS extra ───
  { id: 'mat-cheetos-pandilla', name: 'Cheetos Pandilla', brand: 'Matutano', supermarket: 'mercadona', category: 'snacks', nutritionPer100g: { kcal: 497, proteins: 8.0, carbs: 55.0, fats: 27.0 }, defaultServingG: 30, unit: 'g', emoji: '🧀' },
  { id: 'mat-ruffles', name: 'Ruffles Jamón', brand: 'Matutano', supermarket: 'mercadona', category: 'snacks', nutritionPer100g: { kcal: 515, proteins: 6.0, carbs: 55.0, fats: 30.0 }, defaultServingG: 30, unit: 'g', emoji: '🥔' },
  { id: 'mat-3d-bugles', name: 'Bugles 3D', brand: 'Matutano', supermarket: 'mercadona', category: 'snacks', nutritionPer100g: { kcal: 482, proteins: 5.2, carbs: 59.0, fats: 24.0 }, defaultServingG: 30, unit: 'g', emoji: '🌽' },
  { id: 'mat-risketos', name: 'Risketos', brand: 'Matutano', supermarket: 'mercadona', category: 'snacks', nutritionPer100g: { kcal: 496, proteins: 9.0, carbs: 57.0, fats: 25.0 }, defaultServingG: 30, unit: 'g', emoji: '🧀' },
  { id: 'dor-tex-mex', name: 'Doritos Tex Mex', brand: 'Doritos', supermarket: 'mercadona', category: 'snacks', nutritionPer100g: { kcal: 498, proteins: 7.0, carbs: 61.0, fats: 24.0 }, defaultServingG: 30, unit: 'g', emoji: '🌮' },
  { id: 'lay-light', name: "Lay's Light", brand: "Lay's", supermarket: 'mercadona', category: 'snacks', nutritionPer100g: { kcal: 489, proteins: 6.5, carbs: 58.0, fats: 25.0 }, defaultServingG: 30, unit: 'g', emoji: '🥔' },

  // ─── YATEKOMO / NOODLES ───
  { id: 'gal-yatekomo-pollo', name: 'Yatekomo Pollo', brand: 'Gallo', supermarket: 'mercadona', category: 'cereales', nutritionPer100g: { kcal: 429, proteins: 10.0, carbs: 60.0, fats: 16.0 }, defaultServingG: 76, unit: 'g', emoji: '🍜' },
  { id: 'gal-yatekomo-curry', name: 'Yatekomo Curry', brand: 'Gallo', supermarket: 'mercadona', category: 'cereales', nutritionPer100g: { kcal: 431, proteins: 10.0, carbs: 58.0, fats: 17.0 }, defaultServingG: 76, unit: 'g', emoji: '🍜' },

  // ─── SALSAS extra ───
  { id: 'hz-barbacoa', name: 'Salsa Barbacoa', brand: 'Heinz', supermarket: 'mercadona', category: 'salsas', nutritionPer100g: { kcal: 155, proteins: 1.1, carbs: 36.0, fats: 0.1 }, defaultServingG: 15, unit: 'g', emoji: '🫙' },
  { id: 'kuh-mayonesa-clasica', name: 'Mayonesa Clásica', brand: 'Kühne', supermarket: 'mercadona', category: 'salsas', nutritionPer100g: { kcal: 695, proteins: 0.7, carbs: 2.8, fats: 75.0 }, defaultServingG: 15, unit: 'g', emoji: '🫙' },
  { id: 'muss-mayonesa', name: 'Mayonesa', brand: 'Musso', supermarket: 'mercadona', category: 'salsas', nutritionPer100g: { kcal: 677, proteins: 1.0, carbs: 3.0, fats: 72.0 }, defaultServingG: 15, unit: 'g', emoji: '🫙' },
  { id: 'orl-tomate-frito-clasico', name: 'Tomate Frito Clásico', brand: 'Orlando', supermarket: 'mercadona', category: 'salsas', nutritionPer100g: { kcal: 82, proteins: 1.4, carbs: 10.0, fats: 4.0 }, defaultServingG: 70, unit: 'g', emoji: '🍅' },
  { id: 'sol-soja', name: 'Salsa de Soja', brand: 'Kikkoman', supermarket: 'mercadona', category: 'salsas', nutritionPer100g: { kcal: 60, proteins: 9.3, carbs: 5.6, fats: 0.0 }, defaultServingG: 10, unit: 'g', emoji: '🫙' },
  { id: 'buit-tomate-tradicional', name: 'Tomate Frito Tradicional', brand: 'Solís', supermarket: 'mercadona', category: 'salsas', nutritionPer100g: { kcal: 71, proteins: 1.5, carbs: 7.5, fats: 3.7 }, defaultServingG: 100, unit: 'g', emoji: '🍅' },

  // ─── DESAYUNO / PAN extra ───
  { id: 'bim-tostadas', name: 'Tostadas Clásicas', brand: 'Bimbo', supermarket: 'mercadona', category: 'panaderia', nutritionPer100g: { kcal: 390, proteins: 10.0, carbs: 72.0, fats: 6.5 }, defaultServingG: 10, unit: 'g', emoji: '🍞' },
  { id: 'bim-tigretones', name: 'Tigretón', brand: 'Bimbo', supermarket: 'mercadona', category: 'dulces', nutritionPer100g: { kcal: 430, proteins: 5.0, carbs: 52.0, fats: 22.0 }, defaultServingG: 45, unit: 'g', emoji: '🧁' },
  { id: 'bim-mini-donuts', name: 'Mini Donuts', brand: 'Bimbo', supermarket: 'mercadona', category: 'dulces', nutritionPer100g: { kcal: 430, proteins: 5.5, carbs: 52.0, fats: 22.0 }, defaultServingG: 50, unit: 'g', emoji: '🍩' },
  { id: 'pan-rico-pan-burger', name: 'Pan Hamburguesa', brand: 'Panrico', supermarket: 'mercadona', category: 'panaderia', nutritionPer100g: { kcal: 267, proteins: 8.5, carbs: 48.0, fats: 4.0 }, defaultServingG: 55, unit: 'g', emoji: '🍔' },
  { id: 'pan-rico-pan-hotdog', name: 'Pan Hot Dog', brand: 'Panrico', supermarket: 'mercadona', category: 'panaderia', nutritionPer100g: { kcal: 275, proteins: 8.0, carbs: 48.0, fats: 5.5 }, defaultServingG: 50, unit: 'g', emoji: '🌭' },
  { id: 'pan-rico-donettes', name: 'Donettes', brand: 'Panrico', supermarket: 'mercadona', category: 'dulces', nutritionPer100g: { kcal: 476, proteins: 6.3, carbs: 50.0, fats: 27.0 }, defaultServingG: 22, unit: 'g', emoji: '🍩' },

  // ─── CARNE / EMBUTIDOS extra ───
  { id: 'elpo-chorizo-revilla', name: 'Chorizo Sarta', brand: 'Revilla', supermarket: 'mercadona', category: 'embutidos', nutritionPer100g: { kcal: 380, proteins: 22.0, carbs: 1.5, fats: 31.0 }, defaultServingG: 30, unit: 'g', emoji: '🌶️' },
  { id: 'elpo-salchichas', name: 'Salchichas Gran Frankfurt', brand: 'El Pozo', supermarket: 'mercadona', category: 'embutidos', nutritionPer100g: { kcal: 232, proteins: 13.0, carbs: 2.0, fats: 19.0 }, defaultServingG: 45, unit: 'g', emoji: '🌭' },
  { id: 'elpo-jamon-cocido', name: 'Jamón Cocido Extra', brand: 'El Pozo', supermarket: 'mercadona', category: 'embutidos', nutritionPer100g: { kcal: 115, proteins: 18.5, carbs: 1.0, fats: 4.0 }, defaultServingG: 40, unit: 'g', emoji: '🥓' },
  { id: 'elpo-pavo-finissimas', name: 'Finissimas Pavo', brand: 'El Pozo', supermarket: 'mercadona', category: 'embutidos', nutritionPer100g: { kcal: 85, proteins: 17.0, carbs: 1.2, fats: 1.3 }, defaultServingG: 30, unit: 'g', emoji: '🦃' },
  { id: 'om-jamon-cocido', name: 'Jamón Cocido Extra', brand: 'Oscar Mayer', supermarket: 'mercadona', category: 'embutidos', nutritionPer100g: { kcal: 105, proteins: 18.0, carbs: 1.0, fats: 3.3 }, defaultServingG: 40, unit: 'g', emoji: '🥓' },

  // ─── ENERGÉTICAS / ISOTÓNICAS ───
  { id: 'gat-gatorade-naranja', name: 'Gatorade Naranja', brand: 'Gatorade', supermarket: 'mercadona', category: 'bebidas', nutritionPer100g: { kcal: 22, proteins: 0.0, carbs: 5.3, fats: 0.0 }, defaultServingG: 500, unit: 'ml', emoji: '🥤' },
  { id: 'pow-powerade-limon', name: 'Powerade Limón', brand: 'Powerade', supermarket: 'mercadona', category: 'bebidas', nutritionPer100g: { kcal: 21, proteins: 0.0, carbs: 5.0, fats: 0.0 }, defaultServingG: 500, unit: 'ml', emoji: '🥤' },
  { id: 'mon-ultra-paradise', name: 'Monster Ultra Paradise', brand: 'Monster', supermarket: 'mercadona', category: 'bebidas', nutritionPer100g: { kcal: 3, proteins: 0.0, carbs: 0.6, fats: 0.0 }, defaultServingG: 500, unit: 'ml', emoji: '🥫' },
  { id: 'mon-ultra-mango', name: 'Monster Mango Loco', brand: 'Monster', supermarket: 'mercadona', category: 'bebidas', nutritionPer100g: { kcal: 47, proteins: 0.0, carbs: 11.0, fats: 0.0 }, defaultServingG: 500, unit: 'ml', emoji: '🥫' },

  // ─── CAFÉ extra ───
  { id: 'mar-descafeinado', name: 'Café Descafeinado Molido', brand: 'Marcilla', supermarket: 'mercadona', category: 'bebidas', nutritionPer100g: { kcal: 2, proteins: 0.3, carbs: 0.0, fats: 0.0 }, defaultServingG: 7, unit: 'g', emoji: '☕' },
  { id: 'mar-gold', name: 'Café Molido Natural Gold', brand: 'Marcilla', supermarket: 'mercadona', category: 'bebidas', nutritionPer100g: { kcal: 2, proteins: 0.3, carbs: 0.0, fats: 0.0 }, defaultServingG: 7, unit: 'g', emoji: '☕' },
  { id: 'dolce-cappuccino', name: 'Dolce Gusto Cappuccino', brand: 'Nescafé', supermarket: 'mercadona', category: 'bebidas', nutritionPer100g: { kcal: 60, proteins: 2.0, carbs: 9.0, fats: 2.0 }, defaultServingG: 24, unit: 'g', emoji: '☕' },

  // ─── LÁCTEOS / QUESOS extra ───
  { id: 'burg-queso-burgos', name: 'Queso Fresco de Burgos', brand: 'Burgo de Arias', supermarket: 'mercadona', category: 'lacteos', nutritionPer100g: { kcal: 173, proteins: 12.5, carbs: 2.8, fats: 13.0 }, defaultServingG: 75, unit: 'g', emoji: '🧀' },
  { id: 'cas-quesitos', name: 'Quesitos', brand: 'El Caserío', supermarket: 'mercadona', category: 'lacteos', nutritionPer100g: { kcal: 250, proteins: 11.0, carbs: 7.0, fats: 20.0 }, defaultServingG: 17.5, unit: 'g', emoji: '🧀' },
  { id: 'cas-tranchetes', name: 'Tranchetes', brand: 'El Caserío', supermarket: 'mercadona', category: 'lacteos', nutritionPer100g: { kcal: 269, proteins: 12.0, carbs: 6.0, fats: 22.0 }, defaultServingG: 20, unit: 'g', emoji: '🧀' },
  { id: 'babybel-mini', name: 'Mini Babybel Original', brand: 'Babybel', supermarket: 'mercadona', category: 'lacteos', nutritionPer100g: { kcal: 299, proteins: 22.0, carbs: 0.0, fats: 23.0 }, defaultServingG: 20, unit: 'g', emoji: '🧀' },
  { id: 'kir-queso-fresco', name: 'Kiri', brand: 'Kiri', supermarket: 'mercadona', category: 'lacteos', nutritionPer100g: { kcal: 275, proteins: 6.5, carbs: 3.0, fats: 26.0 }, defaultServingG: 18, unit: 'g', emoji: '🧀' },
  { id: 'vache-quiri', name: 'La Vaca que Ríe', brand: 'La Vache qui rit', supermarket: 'mercadona', category: 'lacteos', nutritionPer100g: { kcal: 239, proteins: 10.0, carbs: 6.5, fats: 19.0 }, defaultServingG: 17.5, unit: 'g', emoji: '🧀' },
  { id: 'flor-flora-ligera', name: 'Flora Ligera', brand: 'Flora', supermarket: 'mercadona', category: 'aceites', nutritionPer100g: { kcal: 354, proteins: 0.4, carbs: 0.5, fats: 39.0 }, defaultServingG: 10, unit: 'g', emoji: '🧈' },
  { id: 'tul-tulipan-original', name: 'Tulipán Original', brand: 'Tulipán', supermarket: 'mercadona', category: 'aceites', nutritionPer100g: { kcal: 530, proteins: 0.2, carbs: 0.4, fats: 59.0 }, defaultServingG: 10, unit: 'g', emoji: '🧈' },

  // ─── POSTRES ───
  { id: 'dan-danet-chocolate', name: 'Danet Chocolate', brand: 'Danone', supermarket: 'mercadona', category: 'lacteos', nutritionPer100g: { kcal: 129, proteins: 3.0, carbs: 18.0, fats: 4.7 }, defaultServingG: 125, unit: 'g', emoji: '🍫' },
  { id: 'dan-natillas-vainilla', name: 'Natillas Vainilla Danone', brand: 'Danone', supermarket: 'mercadona', category: 'lacteos', nutritionPer100g: { kcal: 113, proteins: 3.0, carbs: 17.0, fats: 3.6 }, defaultServingG: 125, unit: 'g', emoji: '🍮' },
  { id: 'dan-flan-huevo', name: 'Flan de Huevo Danone', brand: 'Danone', supermarket: 'mercadona', category: 'lacteos', nutritionPer100g: { kcal: 135, proteins: 3.5, carbs: 20.0, fats: 4.5 }, defaultServingG: 110, unit: 'g', emoji: '🍮' },
  { id: 'ree-flan-vainilla', name: 'Flan de Vainilla', brand: 'Reina', supermarket: 'mercadona', category: 'lacteos', nutritionPer100g: { kcal: 115, proteins: 2.3, carbs: 18.0, fats: 3.8 }, defaultServingG: 120, unit: 'g', emoji: '🍮' },

  // ─── CONGELADOS extra ───
  { id: 'pes-varitas-merluza', name: 'Varitas de Merluza', brand: 'Pescanova', supermarket: 'mercadona', category: 'congelados', nutritionPer100g: { kcal: 205, proteins: 12.5, carbs: 17.0, fats: 9.5 }, defaultServingG: 100, unit: 'g', emoji: '🐟' },
  { id: 'pes-calamar-romana', name: 'Calamar a la Romana', brand: 'Pescanova', supermarket: 'mercadona', category: 'congelados', nutritionPer100g: { kcal: 194, proteins: 11.0, carbs: 21.0, fats: 7.5 }, defaultServingG: 100, unit: 'g', emoji: '🦑' },
  { id: 'coc-canelones-carne', name: 'Canelones de Carne', brand: 'La Cocinera', supermarket: 'mercadona', category: 'congelados', nutritionPer100g: { kcal: 170, proteins: 7.5, carbs: 17.0, fats: 8.0 }, defaultServingG: 250, unit: 'g', emoji: '🍝' },
  { id: 'coc-lasagna', name: 'Lasaña Boloñesa', brand: 'La Cocinera', supermarket: 'mercadona', category: 'congelados', nutritionPer100g: { kcal: 147, proteins: 7.5, carbs: 14.0, fats: 6.8 }, defaultServingG: 300, unit: 'g', emoji: '🍝' },
  { id: 'fin-palitos-merluza', name: 'Palitos de Merluza Crujientes', brand: 'Findus', supermarket: 'mercadona', category: 'congelados', nutritionPer100g: { kcal: 189, proteins: 13.0, carbs: 17.0, fats: 8.0 }, defaultServingG: 100, unit: 'g', emoji: '🐟' },
  { id: 'mac-pizza-4quesos', name: 'Pizza 4 Quesos', brand: "Dr. Oetker", supermarket: 'mercadona', category: 'congelados', nutritionPer100g: { kcal: 249, proteins: 11.0, carbs: 30.0, fats: 9.5 }, defaultServingG: 400, unit: 'g', emoji: '🍕' },
  { id: 'casa-tar-pizza-jamyo', name: 'Pizza Jamón y Queso', brand: 'Casa Tarradellas', supermarket: 'mercadona', category: 'congelados', nutritionPer100g: { kcal: 234, proteins: 10.0, carbs: 29.0, fats: 8.5 }, defaultServingG: 360, unit: 'g', emoji: '🍕' },
  { id: 'casa-tar-pizza-carbonara', name: 'Pizza Carbonara', brand: 'Casa Tarradellas', supermarket: 'mercadona', category: 'congelados', nutritionPer100g: { kcal: 259, proteins: 10.0, carbs: 29.0, fats: 11.0 }, defaultServingG: 360, unit: 'g', emoji: '🍕' },
  { id: 'casa-tar-pizza-bbq', name: 'Pizza Barbacoa', brand: 'Casa Tarradellas', supermarket: 'mercadona', category: 'congelados', nutritionPer100g: { kcal: 247, proteins: 11.0, carbs: 31.0, fats: 9.0 }, defaultServingG: 360, unit: 'g', emoji: '🍕' },

  // ─── ZUMOS / BEBIDAS extra ───
  { id: 'ds-zumo-tomate', name: 'Zumo de Tomate', brand: 'Don Simón', supermarket: 'mercadona', category: 'bebidas', nutritionPer100g: { kcal: 17, proteins: 0.9, carbs: 3.4, fats: 0.1 }, defaultServingG: 250, unit: 'ml', emoji: '🍅' },
  { id: 'hac-horchata', name: 'Horchata Chufa', brand: 'Hacendado', supermarket: 'mercadona', category: 'bebidas', nutritionPer100g: { kcal: 100, proteins: 1.0, carbs: 16.0, fats: 3.2 }, defaultServingG: 200, unit: 'ml', emoji: '🥛' },
  { id: 'gra-multifrutas', name: 'Multifrutas', brand: 'Granini', supermarket: 'mercadona', category: 'bebidas', nutritionPer100g: { kcal: 50, proteins: 0.4, carbs: 11.5, fats: 0.1 }, defaultServingG: 200, unit: 'ml', emoji: '🧃' },
  { id: 'hac-batido-choc', name: 'Batido de Chocolate', brand: 'Puleva', supermarket: 'mercadona', category: 'bebidas', nutritionPer100g: { kcal: 79, proteins: 3.2, carbs: 12.5, fats: 1.8 }, defaultServingG: 200, unit: 'ml', emoji: '🥛' },
  { id: 'pul-batido-fresa', name: 'Batido de Fresa', brand: 'Puleva', supermarket: 'mercadona', category: 'bebidas', nutritionPer100g: { kcal: 75, proteins: 3.0, carbs: 12.0, fats: 1.6 }, defaultServingG: 200, unit: 'ml', emoji: '🥛' },
  { id: 'pul-max-proteinas', name: 'Puleva Max Proteínas', brand: 'Puleva', supermarket: 'mercadona', category: 'lacteos', nutritionPer100g: { kcal: 60, proteins: 5.9, carbs: 7.8, fats: 1.0 }, defaultServingG: 250, unit: 'ml', emoji: '🥛' },
  { id: 'cov-leche-entera', name: 'Leche Entera', brand: 'Covap', supermarket: 'mercadona', category: 'lacteos', nutritionPer100g: { kcal: 64, proteins: 3.2, carbs: 4.8, fats: 3.6 }, defaultServingG: 250, unit: 'ml', emoji: '🥛' },
  { id: 'rio-kefir-natural', name: 'Kéfir Natural', brand: 'El Cantero de Letur', supermarket: 'mercadona', category: 'lacteos', nutritionPer100g: { kcal: 65, proteins: 3.2, carbs: 4.5, fats: 3.5 }, defaultServingG: 200, unit: 'g', emoji: '🫙' },

  // ─── VEGANO / ALTERNATIVOS ───
  { id: 'hb-heura-original', name: 'Heura Original', brand: 'Heura', supermarket: 'mercadona', category: 'carnes', nutritionPer100g: { kcal: 170, proteins: 20.5, carbs: 4.4, fats: 7.6 }, defaultServingG: 100, unit: 'g', emoji: '🌱' },
  { id: 'hb-heura-nuggets', name: 'Heura Nuggets', brand: 'Heura', supermarket: 'mercadona', category: 'carnes', nutritionPer100g: { kcal: 200, proteins: 17.0, carbs: 11.0, fats: 9.5 }, defaultServingG: 100, unit: 'g', emoji: '🌱' },
  { id: 'beyond-burger', name: 'Beyond Burger', brand: 'Beyond Meat', supermarket: 'mercadona', category: 'carnes', nutritionPer100g: { kcal: 230, proteins: 20.0, carbs: 5.0, fats: 14.0 }, defaultServingG: 113, unit: 'g', emoji: '🌱' },
  { id: 'alp-bebida-soja', name: 'Bebida de Soja', brand: 'Alpro', supermarket: 'mercadona', category: 'lacteos', nutritionPer100g: { kcal: 38, proteins: 3.3, carbs: 2.5, fats: 1.8 }, defaultServingG: 250, unit: 'ml', emoji: '🥛' },
  { id: 'alp-bebida-avena', name: 'Bebida de Avena', brand: 'Alpro', supermarket: 'mercadona', category: 'lacteos', nutritionPer100g: { kcal: 43, proteins: 0.3, carbs: 6.5, fats: 1.5 }, defaultServingG: 250, unit: 'ml', emoji: '🥛' },
  { id: 'alp-yog-natural', name: 'Alternativa Yogur Natural', brand: 'Alpro', supermarket: 'mercadona', category: 'lacteos', nutritionPer100g: { kcal: 43, proteins: 4.0, carbs: 1.8, fats: 2.0 }, defaultServingG: 125, unit: 'g', emoji: '🫙' },

  // ─── PROTEÍNAS / FITNESS extra ───
  { id: 'wei-whey-chocolate', name: 'Whey Protein Chocolate', brand: 'Weider', supermarket: 'mercadona', category: 'snacks', nutritionPer100g: { kcal: 380, proteins: 75.0, carbs: 7.5, fats: 5.5 }, defaultServingG: 30, unit: 'g', emoji: '💪' },
  { id: 'my-pro-whey', name: 'Impact Whey Chocolate', brand: 'MyProtein', supermarket: 'mercadona', category: 'snacks', nutritionPer100g: { kcal: 401, proteins: 80.0, carbs: 6.6, fats: 7.5 }, defaultServingG: 25, unit: 'g', emoji: '💪' },
  { id: 'my-pro-crunchy-bar', name: 'Layered Protein Bar Chocolate', brand: 'MyProtein', supermarket: 'mercadona', category: 'snacks', nutritionPer100g: { kcal: 377, proteins: 33.0, carbs: 38.0, fats: 11.0 }, defaultServingG: 60, unit: 'g', emoji: '💪' },

  // ─── CONSERVAS extra ───
  { id: 'isa-atun-aceite', name: 'Atún en Aceite de Oliva', brand: 'Isabel', supermarket: 'mercadona', category: 'conservas', nutritionPer100g: { kcal: 190, proteins: 25.0, carbs: 0.0, fats: 9.5 }, defaultServingG: 52, unit: 'g', emoji: '🥫' },
  { id: 'isa-anchoas', name: 'Anchoas en Aceite', brand: 'Isabel', supermarket: 'mercadona', category: 'conservas', nutritionPer100g: { kcal: 210, proteins: 27.0, carbs: 0.0, fats: 11.0 }, defaultServingG: 12, unit: 'g', emoji: '🐟' },
  { id: 'cal-berberechos', name: 'Berberechos al Natural', brand: 'Calvo', supermarket: 'mercadona', category: 'conservas', nutritionPer100g: { kcal: 75, proteins: 13.0, carbs: 3.5, fats: 1.0 }, defaultServingG: 58, unit: 'g', emoji: '🦪' },
  { id: 'cal-pulpo-aceite', name: 'Pulpo en Aceite', brand: 'Calvo', supermarket: 'mercadona', category: 'conservas', nutritionPer100g: { kcal: 148, proteins: 20.0, carbs: 3.0, fats: 6.2 }, defaultServingG: 80, unit: 'g', emoji: '🐙' },

  // ─── KOMBUCHA / AGUAS FUNCIONALES ───
  { id: 'kom-mana-jengibre', name: 'Kombucha Jengibre', brand: 'Komvida', supermarket: 'mercadona', category: 'bebidas', nutritionPer100g: { kcal: 14, proteins: 0.0, carbs: 3.0, fats: 0.0 }, defaultServingG: 250, unit: 'ml', emoji: '🍵' },
  { id: 'aquarius-naranja', name: 'Aquarius Naranja', brand: 'Coca-Cola', supermarket: 'mercadona', category: 'bebidas', nutritionPer100g: { kcal: 28, proteins: 0.0, carbs: 6.6, fats: 0.0 }, defaultServingG: 330, unit: 'ml', emoji: '🥤' },
  { id: 'volvic-fresa', name: 'Volvic Touch Fresa', brand: 'Volvic', supermarket: 'mercadona', category: 'bebidas', nutritionPer100g: { kcal: 18, proteins: 0.0, carbs: 4.5, fats: 0.0 }, defaultServingG: 500, unit: 'ml', emoji: '💧' },
];
