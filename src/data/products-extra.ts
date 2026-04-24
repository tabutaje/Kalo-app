import { Product } from '@/types';

export const productsExtra: Product[] = [
  // ═══════════════════════════════════════════
  // ██  ALDI (Milsani, GutBio, Trader Joe's,
  // ██  Cucina, Moser Roth)                  ██
  // ═══════════════════════════════════════════

  // --- Lácteos ---
  { id: 'aldi2-leche-entera', name: 'Leche Entera', brand: 'Milsani', supermarket: 'aldi', category: 'lacteos', nutritionPer100g: { kcal: 64, proteins: 3.2, carbs: 4.8, fats: 3.5 }, defaultServingG: 250, unit: 'ml', emoji: '🥛' },
  { id: 'aldi2-leche-semi', name: 'Leche Semidesnatada', brand: 'Milsani', supermarket: 'aldi', category: 'lacteos', nutritionPer100g: { kcal: 46, proteins: 3.2, carbs: 4.8, fats: 1.6 }, defaultServingG: 250, unit: 'ml', emoji: '🥛' },
  { id: 'aldi2-yogur-griego', name: 'Yogur Griego Natural', brand: 'Milsani', supermarket: 'aldi', category: 'lacteos', nutritionPer100g: { kcal: 115, proteins: 3.8, carbs: 4.6, fats: 9.0 }, defaultServingG: 125, unit: 'g', emoji: '🫙' },
  { id: 'aldi2-yogur-proteinas', name: 'Yogur Proteínas', brand: 'Milsani', supermarket: 'aldi', category: 'lacteos', nutritionPer100g: { kcal: 63, proteins: 10.0, carbs: 4.2, fats: 0.7 }, defaultServingG: 150, unit: 'g', emoji: '🫙' },
  { id: 'aldi2-queso-tierno', name: 'Queso Tierno', brand: 'Milsani', supermarket: 'aldi', category: 'lacteos', nutritionPer100g: { kcal: 330, proteins: 23.0, carbs: 0.5, fats: 26.0 }, defaultServingG: 30, unit: 'g', emoji: '🧀' },
  { id: 'aldi2-queso-lonchas', name: 'Queso en Lonchas Light', brand: 'Milsani', supermarket: 'aldi', category: 'lacteos', nutritionPer100g: { kcal: 240, proteins: 28.0, carbs: 2.0, fats: 13.0 }, defaultServingG: 20, unit: 'g', emoji: '🧀' },
  { id: 'aldi2-bebida-soja', name: 'Bebida de Soja', brand: 'GutBio', supermarket: 'aldi', category: 'lacteos', nutritionPer100g: { kcal: 39, proteins: 3.3, carbs: 2.5, fats: 1.8 }, defaultServingG: 250, unit: 'ml', emoji: '🥛' },
  { id: 'aldi2-bebida-avena', name: 'Bebida de Avena Bio', brand: 'GutBio', supermarket: 'aldi', category: 'lacteos', nutritionPer100g: { kcal: 44, proteins: 0.3, carbs: 6.5, fats: 1.5 }, defaultServingG: 250, unit: 'ml', emoji: '🥛' },
  { id: 'aldi2-mantequilla', name: 'Mantequilla', brand: 'Milsani', supermarket: 'aldi', category: 'lacteos', nutritionPer100g: { kcal: 720, proteins: 0.8, carbs: 0.1, fats: 81.0 }, defaultServingG: 10, unit: 'g', emoji: '🧈' },
  { id: 'aldi2-nata-cocinar', name: 'Nata para Cocinar', brand: 'Milsani', supermarket: 'aldi', category: 'lacteos', nutritionPer100g: { kcal: 131, proteins: 2.4, carbs: 3.6, fats: 12.0 }, defaultServingG: 50, unit: 'ml', emoji: '🍶' },

  // --- Carnes ---
  { id: 'aldi2-pechuga-pollo', name: 'Pechuga de Pollo Fileteada', brand: 'Aldi', supermarket: 'aldi', category: 'carnes', nutritionPer100g: { kcal: 108, proteins: 23.0, carbs: 0.0, fats: 1.5 }, defaultServingG: 150, unit: 'g', emoji: '🍗' },
  { id: 'aldi2-carne-picada-vacuno', name: 'Carne Picada de Vacuno', brand: 'Aldi', supermarket: 'aldi', category: 'carnes', nutritionPer100g: { kcal: 170, proteins: 20.0, carbs: 0.0, fats: 10.0 }, defaultServingG: 150, unit: 'g', emoji: '🥩' },
  { id: 'aldi2-hamburguesa-ternera', name: 'Hamburguesa de Ternera', brand: 'Aldi', supermarket: 'aldi', category: 'carnes', nutritionPer100g: { kcal: 210, proteins: 17.0, carbs: 2.5, fats: 15.0 }, defaultServingG: 100, unit: 'g', emoji: '🍔' },
  { id: 'aldi2-solomillo-cerdo', name: 'Solomillo de Cerdo', brand: 'Aldi', supermarket: 'aldi', category: 'carnes', nutritionPer100g: { kcal: 143, proteins: 21.5, carbs: 0.0, fats: 6.0 }, defaultServingG: 150, unit: 'g', emoji: '🥩' },

  // --- Pescados ---
  { id: 'aldi2-salmon-fresco', name: 'Salmón Fresco', brand: 'Aldi', supermarket: 'aldi', category: 'pescados', nutritionPer100g: { kcal: 208, proteins: 20.0, carbs: 0.0, fats: 14.0 }, defaultServingG: 125, unit: 'g', emoji: '🐟' },
  { id: 'aldi2-merluza-filetes', name: 'Filetes de Merluza', brand: 'Aldi', supermarket: 'aldi', category: 'pescados', nutritionPer100g: { kcal: 82, proteins: 17.0, carbs: 0.0, fats: 1.3 }, defaultServingG: 150, unit: 'g', emoji: '🐟' },
  { id: 'aldi2-gambas-peladas', name: 'Gambas Peladas Congeladas', brand: 'Aldi', supermarket: 'aldi', category: 'pescados', nutritionPer100g: { kcal: 85, proteins: 18.0, carbs: 0.2, fats: 1.0 }, defaultServingG: 100, unit: 'g', emoji: '🦐' },

  // --- Frutas ---
  { id: 'aldi2-platanos', name: 'Plátanos de Canarias', brand: 'Aldi', supermarket: 'aldi', category: 'frutas', nutritionPer100g: { kcal: 89, proteins: 1.1, carbs: 20.0, fats: 0.3 }, defaultServingG: 120, unit: 'g', emoji: '🍌' },
  { id: 'aldi2-fresas', name: 'Fresas', brand: 'Aldi', supermarket: 'aldi', category: 'frutas', nutritionPer100g: { kcal: 32, proteins: 0.7, carbs: 5.5, fats: 0.3 }, defaultServingG: 150, unit: 'g', emoji: '🍓' },

  // --- Verduras ---
  { id: 'aldi2-ensalada-mixta', name: 'Ensalada Mixta', brand: 'GutBio', supermarket: 'aldi', category: 'verduras', nutritionPer100g: { kcal: 18, proteins: 1.2, carbs: 2.0, fats: 0.2 }, defaultServingG: 100, unit: 'g', emoji: '🥗' },
  { id: 'aldi2-brocoli', name: 'Brócoli', brand: 'Aldi', supermarket: 'aldi', category: 'verduras', nutritionPer100g: { kcal: 34, proteins: 2.8, carbs: 4.0, fats: 0.4 }, defaultServingG: 200, unit: 'g', emoji: '🥦' },
  { id: 'aldi2-espinacas-frescas', name: 'Espinacas Baby', brand: 'GutBio', supermarket: 'aldi', category: 'verduras', nutritionPer100g: { kcal: 23, proteins: 2.9, carbs: 1.4, fats: 0.4 }, defaultServingG: 80, unit: 'g', emoji: '🥬' },

  // --- Cereales ---
  { id: 'aldi2-arroz-integral', name: 'Arroz Integral', brand: 'GutBio', supermarket: 'aldi', category: 'cereales', nutritionPer100g: { kcal: 350, proteins: 7.5, carbs: 74.0, fats: 2.2 }, defaultServingG: 80, unit: 'g', emoji: '🍚' },
  { id: 'aldi2-pasta-espagueti', name: 'Espaguetis', brand: 'Cucina', supermarket: 'aldi', category: 'cereales', nutritionPer100g: { kcal: 359, proteins: 13.0, carbs: 71.0, fats: 1.5 }, defaultServingG: 80, unit: 'g', emoji: '🍝' },
  { id: 'aldi2-pasta-penne', name: 'Penne Rigate', brand: 'Cucina', supermarket: 'aldi', category: 'cereales', nutritionPer100g: { kcal: 357, proteins: 12.5, carbs: 72.0, fats: 1.5 }, defaultServingG: 80, unit: 'g', emoji: '🍝' },
  { id: 'aldi2-avena-copos', name: 'Copos de Avena', brand: 'GutBio', supermarket: 'aldi', category: 'cereales', nutritionPer100g: { kcal: 372, proteins: 13.0, carbs: 58.0, fats: 7.0 }, defaultServingG: 40, unit: 'g', emoji: '🥣' },
  { id: 'aldi2-muesli', name: 'Muesli con Frutas', brand: 'GutBio', supermarket: 'aldi', category: 'cereales', nutritionPer100g: { kcal: 365, proteins: 9.0, carbs: 63.0, fats: 6.5 }, defaultServingG: 50, unit: 'g', emoji: '🥣' },

  // --- Legumbres ---
  { id: 'aldi2-garbanzos-cocidos', name: 'Garbanzos Cocidos', brand: 'GutBio', supermarket: 'aldi', category: 'legumbres', nutritionPer100g: { kcal: 128, proteins: 7.0, carbs: 17.0, fats: 2.5 }, defaultServingG: 130, unit: 'g', emoji: '🫘' },
  { id: 'aldi2-lentejas', name: 'Lentejas Pardinas', brand: 'Aldi', supermarket: 'aldi', category: 'legumbres', nutritionPer100g: { kcal: 338, proteins: 24.0, carbs: 52.0, fats: 1.5 }, defaultServingG: 80, unit: 'g', emoji: '🫘' },

  // --- Bebidas ---
  { id: 'aldi2-zumo-naranja', name: 'Zumo de Naranja Exprimido', brand: 'Aldi', supermarket: 'aldi', category: 'bebidas', nutritionPer100g: { kcal: 43, proteins: 0.7, carbs: 9.4, fats: 0.1 }, defaultServingG: 250, unit: 'ml', emoji: '🍊' },
  { id: 'aldi2-agua-mineral', name: 'Agua Mineral', brand: 'Aldi', supermarket: 'aldi', category: 'bebidas', nutritionPer100g: { kcal: 0, proteins: 0.0, carbs: 0.0, fats: 0.0 }, defaultServingG: 500, unit: 'ml', emoji: '💧' },
  { id: 'aldi2-cerveza-lager', name: 'Cerveza Lager', brand: "Trader Joe's", supermarket: 'aldi', category: 'bebidas', nutritionPer100g: { kcal: 42, proteins: 0.3, carbs: 3.5, fats: 0.0 }, defaultServingG: 330, unit: 'ml', emoji: '🍺' },

  // --- Snacks ---
  { id: 'aldi2-patatas-fritas', name: 'Patatas Fritas Clásicas', brand: 'Aldi', supermarket: 'aldi', category: 'snacks', nutritionPer100g: { kcal: 530, proteins: 6.0, carbs: 53.0, fats: 33.0 }, defaultServingG: 30, unit: 'g', emoji: '🍟' },
  { id: 'aldi2-frutos-secos-mix', name: 'Mix de Frutos Secos', brand: "Trader Joe's", supermarket: 'aldi', category: 'snacks', nutritionPer100g: { kcal: 590, proteins: 18.0, carbs: 20.0, fats: 49.0 }, defaultServingG: 30, unit: 'g', emoji: '🥜' },
  { id: 'aldi2-almendras-tostadas', name: 'Almendras Tostadas', brand: "Trader Joe's", supermarket: 'aldi', category: 'snacks', nutritionPer100g: { kcal: 598, proteins: 21.0, carbs: 10.0, fats: 52.0 }, defaultServingG: 25, unit: 'g', emoji: '🥜' },

  // --- Congelados ---
  { id: 'aldi2-pizza-margarita', name: 'Pizza Margherita', brand: 'Cucina', supermarket: 'aldi', category: 'congelados', nutritionPer100g: { kcal: 230, proteins: 9.0, carbs: 28.0, fats: 9.5 }, defaultServingG: 175, unit: 'g', emoji: '🍕' },
  { id: 'aldi2-verduras-salteadas', name: 'Verduras Salteadas Congeladas', brand: 'Aldi', supermarket: 'aldi', category: 'congelados', nutritionPer100g: { kcal: 42, proteins: 2.0, carbs: 5.0, fats: 1.0 }, defaultServingG: 200, unit: 'g', emoji: '🥘' },
  { id: 'aldi2-croquetas-jamon', name: 'Croquetas de Jamón', brand: 'Cucina', supermarket: 'aldi', category: 'congelados', nutritionPer100g: { kcal: 218, proteins: 6.5, carbs: 22.0, fats: 11.5 }, defaultServingG: 100, unit: 'g', emoji: '🥘' },
  { id: 'aldi2-helado-vainilla', name: 'Helado de Vainilla', brand: 'Milsani', supermarket: 'aldi', category: 'congelados', nutritionPer100g: { kcal: 200, proteins: 3.5, carbs: 24.0, fats: 10.0 }, defaultServingG: 100, unit: 'ml', emoji: '🍦' },

  // --- Embutidos ---
  { id: 'aldi2-jamon-serrano', name: 'Jamón Serrano Gran Reserva', brand: 'Aldi', supermarket: 'aldi', category: 'embutidos', nutritionPer100g: { kcal: 241, proteins: 31.0, carbs: 0.5, fats: 12.5 }, defaultServingG: 40, unit: 'g', emoji: '🥓' },
  { id: 'aldi2-pavo-lonchas', name: 'Pechuga de Pavo en Lonchas', brand: 'Aldi', supermarket: 'aldi', category: 'embutidos', nutritionPer100g: { kcal: 105, proteins: 17.0, carbs: 2.0, fats: 3.0 }, defaultServingG: 30, unit: 'g', emoji: '🍖' },
  { id: 'aldi2-chorizo-extra', name: 'Chorizo Extra', brand: 'Aldi', supermarket: 'aldi', category: 'embutidos', nutritionPer100g: { kcal: 380, proteins: 22.0, carbs: 2.0, fats: 32.0 }, defaultServingG: 30, unit: 'g', emoji: '🌭' },

  // --- Panadería ---
  { id: 'aldi2-pan-molde-integral', name: 'Pan de Molde Integral', brand: 'GutBio', supermarket: 'aldi', category: 'panaderia', nutritionPer100g: { kcal: 244, proteins: 9.0, carbs: 42.0, fats: 3.5 }, defaultServingG: 30, unit: 'g', emoji: '🍞' },
  { id: 'aldi2-tortitas-maiz', name: 'Tortitas de Maíz', brand: 'GutBio', supermarket: 'aldi', category: 'panaderia', nutritionPer100g: { kcal: 387, proteins: 7.0, carbs: 82.0, fats: 2.5 }, defaultServingG: 10, unit: 'g', emoji: '🍘' },

  // --- Aceites ---
  { id: 'aldi2-aceite-oliva-virgen', name: 'Aceite de Oliva Virgen Extra', brand: 'GutBio', supermarket: 'aldi', category: 'aceites', nutritionPer100g: { kcal: 824, proteins: 0.0, carbs: 0.0, fats: 91.6 }, defaultServingG: 10, unit: 'ml', emoji: '🫒' },
  { id: 'aldi2-aceite-girasol', name: 'Aceite de Girasol', brand: 'Aldi', supermarket: 'aldi', category: 'aceites', nutritionPer100g: { kcal: 824, proteins: 0.0, carbs: 0.0, fats: 91.6 }, defaultServingG: 10, unit: 'ml', emoji: '🌻' },

  // --- Salsas ---
  { id: 'aldi2-tomate-frito', name: 'Tomate Frito', brand: 'Cucina', supermarket: 'aldi', category: 'salsas', nutritionPer100g: { kcal: 68, proteins: 1.2, carbs: 8.5, fats: 3.2 }, defaultServingG: 50, unit: 'g', emoji: '🍅' },
  { id: 'aldi2-salsa-pesto', name: 'Salsa Pesto alla Genovese', brand: 'Cucina', supermarket: 'aldi', category: 'salsas', nutritionPer100g: { kcal: 380, proteins: 5.0, carbs: 6.0, fats: 37.0 }, defaultServingG: 30, unit: 'g', emoji: '🌿' },
  { id: 'aldi2-salsa-boloñesa', name: 'Salsa Boloñesa', brand: 'Cucina', supermarket: 'aldi', category: 'salsas', nutritionPer100g: { kcal: 75, proteins: 4.0, carbs: 6.5, fats: 3.5 }, defaultServingG: 100, unit: 'g', emoji: '🍝' },

  // --- Huevos ---
  { id: 'aldi2-huevos-camperos', name: 'Huevos Camperos L', brand: 'GutBio', supermarket: 'aldi', category: 'huevos', nutritionPer100g: { kcal: 155, proteins: 13.0, carbs: 1.1, fats: 11.0 }, defaultServingG: 60, unit: 'g', emoji: '🥚' },

  // --- Dulces ---
  { id: 'aldi2-chocolate-negro-85', name: 'Chocolate Negro 85%', brand: 'Moser Roth', supermarket: 'aldi', category: 'dulces', nutritionPer100g: { kcal: 580, proteins: 10.0, carbs: 22.0, fats: 48.0 }, defaultServingG: 25, unit: 'g', emoji: '🍫' },
  { id: 'aldi2-chocolate-leche', name: 'Chocolate con Leche', brand: 'Moser Roth', supermarket: 'aldi', category: 'dulces', nutritionPer100g: { kcal: 545, proteins: 7.5, carbs: 55.0, fats: 33.0 }, defaultServingG: 25, unit: 'g', emoji: '🍫' },
  { id: 'aldi2-galletas-digestive', name: 'Galletas Digestive', brand: 'Aldi', supermarket: 'aldi', category: 'dulces', nutritionPer100g: { kcal: 468, proteins: 7.0, carbs: 66.0, fats: 19.0 }, defaultServingG: 15, unit: 'g', emoji: '🍪' },
  { id: 'aldi2-mermelada-fresa', name: 'Mermelada de Fresa', brand: 'GutBio', supermarket: 'aldi', category: 'dulces', nutritionPer100g: { kcal: 225, proteins: 0.4, carbs: 55.0, fats: 0.1 }, defaultServingG: 20, unit: 'g', emoji: '🍓' },

  // --- Conservas ---
  { id: 'aldi2-atun-aceite', name: 'Atún en Aceite de Oliva', brand: 'Aldi', supermarket: 'aldi', category: 'conservas', nutritionPer100g: { kcal: 200, proteins: 26.0, carbs: 0.0, fats: 10.5 }, defaultServingG: 52, unit: 'g', emoji: '🐟' },
  { id: 'aldi2-tomate-triturado', name: 'Tomate Triturado', brand: 'Cucina', supermarket: 'aldi', category: 'conservas', nutritionPer100g: { kcal: 26, proteins: 1.2, carbs: 3.5, fats: 0.1 }, defaultServingG: 100, unit: 'g', emoji: '🍅' },

  // --- Otros ---
  { id: 'aldi2-cafe-molido', name: 'Café Molido Natural', brand: 'Aldi', supermarket: 'aldi', category: 'otros', nutritionPer100g: { kcal: 2, proteins: 0.1, carbs: 0.0, fats: 0.0 }, defaultServingG: 200, unit: 'ml', emoji: '☕' },
  { id: 'aldi2-miel-flores', name: 'Miel de Flores', brand: 'GutBio', supermarket: 'aldi', category: 'otros', nutritionPer100g: { kcal: 320, proteins: 0.3, carbs: 80.0, fats: 0.0 }, defaultServingG: 15, unit: 'g', emoji: '🍯' },

  // ═══════════════════════════════════════════
  // ██  AHORRAMAS                             ██
  // ═══════════════════════════════════════════

  // --- Lácteos ---
  { id: 'ahor-leche-entera', name: 'Leche Entera', brand: 'AhorraMás', supermarket: 'ahorramas', category: 'lacteos', nutritionPer100g: { kcal: 63, proteins: 3.1, carbs: 4.7, fats: 3.5 }, defaultServingG: 250, unit: 'ml', emoji: '🥛' },
  { id: 'ahor-leche-semi', name: 'Leche Semidesnatada', brand: 'AhorraMás', supermarket: 'ahorramas', category: 'lacteos', nutritionPer100g: { kcal: 46, proteins: 3.2, carbs: 4.8, fats: 1.6 }, defaultServingG: 250, unit: 'ml', emoji: '🥛' },
  { id: 'ahor-yogur-natural', name: 'Yogur Natural', brand: 'AhorraMás', supermarket: 'ahorramas', category: 'lacteos', nutritionPer100g: { kcal: 62, proteins: 3.8, carbs: 4.5, fats: 3.2 }, defaultServingG: 125, unit: 'g', emoji: '🫙' },
  { id: 'ahor-queso-semicurado', name: 'Queso Semicurado', brand: 'AhorraMás', supermarket: 'ahorramas', category: 'lacteos', nutritionPer100g: { kcal: 370, proteins: 25.0, carbs: 0.5, fats: 30.0 }, defaultServingG: 30, unit: 'g', emoji: '🧀' },
  { id: 'ahor-mantequilla', name: 'Mantequilla', brand: 'AhorraMás', supermarket: 'ahorramas', category: 'lacteos', nutritionPer100g: { kcal: 717, proteins: 0.9, carbs: 0.1, fats: 81.0 }, defaultServingG: 10, unit: 'g', emoji: '🧈' },

  // --- Carnes ---
  { id: 'ahor-pechuga-pollo', name: 'Pechuga de Pollo', brand: 'AhorraMás', supermarket: 'ahorramas', category: 'carnes', nutritionPer100g: { kcal: 110, proteins: 23.0, carbs: 0.0, fats: 1.6 }, defaultServingG: 150, unit: 'g', emoji: '🍗' },
  { id: 'ahor-carne-picada-mixta', name: 'Carne Picada Mixta', brand: 'AhorraMás', supermarket: 'ahorramas', category: 'carnes', nutritionPer100g: { kcal: 218, proteins: 16.5, carbs: 0.5, fats: 17.0 }, defaultServingG: 150, unit: 'g', emoji: '🥩' },
  { id: 'ahor-filete-ternera', name: 'Filete de Ternera', brand: 'AhorraMás', supermarket: 'ahorramas', category: 'carnes', nutritionPer100g: { kcal: 131, proteins: 21.0, carbs: 0.0, fats: 5.0 }, defaultServingG: 150, unit: 'g', emoji: '🥩' },

  // --- Pescados ---
  { id: 'ahor-merluza-rodajas', name: 'Merluza en Rodajas', brand: 'AhorraMás', supermarket: 'ahorramas', category: 'pescados', nutritionPer100g: { kcal: 82, proteins: 17.0, carbs: 0.0, fats: 1.3 }, defaultServingG: 150, unit: 'g', emoji: '🐟' },
  { id: 'ahor-salmon-noruego', name: 'Salmón Noruego', brand: 'AhorraMás', supermarket: 'ahorramas', category: 'pescados', nutritionPer100g: { kcal: 208, proteins: 20.0, carbs: 0.0, fats: 14.0 }, defaultServingG: 125, unit: 'g', emoji: '🐟' },
  { id: 'ahor-langostinos', name: 'Langostinos Cocidos', brand: 'AhorraMás', supermarket: 'ahorramas', category: 'pescados', nutritionPer100g: { kcal: 90, proteins: 19.0, carbs: 0.3, fats: 1.2 }, defaultServingG: 100, unit: 'g', emoji: '🦐' },

  // --- Frutas ---
  { id: 'ahor-manzanas', name: 'Manzanas Golden', brand: 'AhorraMás', supermarket: 'ahorramas', category: 'frutas', nutritionPer100g: { kcal: 52, proteins: 0.3, carbs: 12.0, fats: 0.2 }, defaultServingG: 180, unit: 'g', emoji: '🍎' },
  { id: 'ahor-naranjas', name: 'Naranjas de Zumo', brand: 'AhorraMás', supermarket: 'ahorramas', category: 'frutas', nutritionPer100g: { kcal: 47, proteins: 0.9, carbs: 9.4, fats: 0.1 }, defaultServingG: 200, unit: 'g', emoji: '🍊' },

  // --- Verduras ---
  { id: 'ahor-tomate-rama', name: 'Tomate en Rama', brand: 'AhorraMás', supermarket: 'ahorramas', category: 'verduras', nutritionPer100g: { kcal: 22, proteins: 1.0, carbs: 3.5, fats: 0.3 }, defaultServingG: 150, unit: 'g', emoji: '🍅' },
  { id: 'ahor-lechuga-romana', name: 'Lechuga Romana', brand: 'AhorraMás', supermarket: 'ahorramas', category: 'verduras', nutritionPer100g: { kcal: 15, proteins: 1.2, carbs: 1.7, fats: 0.3 }, defaultServingG: 100, unit: 'g', emoji: '🥬' },

  // --- Cereales ---
  { id: 'ahor-arroz-redondo', name: 'Arroz Redondo', brand: 'AhorraMás', supermarket: 'ahorramas', category: 'cereales', nutritionPer100g: { kcal: 354, proteins: 7.0, carbs: 78.0, fats: 0.9 }, defaultServingG: 80, unit: 'g', emoji: '🍚' },
  { id: 'ahor-macarrones', name: 'Macarrones', brand: 'AhorraMás', supermarket: 'ahorramas', category: 'cereales', nutritionPer100g: { kcal: 358, proteins: 12.5, carbs: 72.0, fats: 1.5 }, defaultServingG: 80, unit: 'g', emoji: '🍝' },

  // --- Bebidas ---
  { id: 'ahor-zumo-naranja', name: 'Zumo de Naranja', brand: 'AhorraMás', supermarket: 'ahorramas', category: 'bebidas', nutritionPer100g: { kcal: 42, proteins: 0.7, carbs: 9.2, fats: 0.1 }, defaultServingG: 250, unit: 'ml', emoji: '🍊' },
  { id: 'ahor-agua-mineral', name: 'Agua Mineral Natural', brand: 'AhorraMás', supermarket: 'ahorramas', category: 'bebidas', nutritionPer100g: { kcal: 0, proteins: 0.0, carbs: 0.0, fats: 0.0 }, defaultServingG: 500, unit: 'ml', emoji: '💧' },
  { id: 'ahor-refresco-cola', name: 'Refresco de Cola', brand: 'AhorraMás', supermarket: 'ahorramas', category: 'bebidas', nutritionPer100g: { kcal: 42, proteins: 0.0, carbs: 10.6, fats: 0.0 }, defaultServingG: 330, unit: 'ml', emoji: '🥤' },

  // --- Congelados ---
  { id: 'ahor-guisantes-congelados', name: 'Guisantes Congelados', brand: 'AhorraMás', supermarket: 'ahorramas', category: 'congelados', nutritionPer100g: { kcal: 78, proteins: 5.4, carbs: 10.0, fats: 0.4 }, defaultServingG: 150, unit: 'g', emoji: '🫛' },
  { id: 'ahor-croquetas-bacalao', name: 'Croquetas de Bacalao', brand: 'AhorraMás', supermarket: 'ahorramas', category: 'congelados', nutritionPer100g: { kcal: 205, proteins: 7.0, carbs: 21.0, fats: 10.0 }, defaultServingG: 100, unit: 'g', emoji: '🥘' },
  { id: 'ahor-san-jacobo', name: 'San Jacobos', brand: 'AhorraMás', supermarket: 'ahorramas', category: 'congelados', nutritionPer100g: { kcal: 248, proteins: 13.0, carbs: 18.0, fats: 14.0 }, defaultServingG: 130, unit: 'g', emoji: '🥩' },

  // --- Embutidos ---
  { id: 'ahor-jamon-cocido', name: 'Jamón Cocido Extra', brand: 'AhorraMás', supermarket: 'ahorramas', category: 'embutidos', nutritionPer100g: { kcal: 115, proteins: 18.0, carbs: 1.5, fats: 4.0 }, defaultServingG: 40, unit: 'g', emoji: '🍖' },
  { id: 'ahor-salchichon', name: 'Salchichón Extra', brand: 'AhorraMás', supermarket: 'ahorramas', category: 'embutidos', nutritionPer100g: { kcal: 410, proteins: 24.0, carbs: 2.0, fats: 35.0 }, defaultServingG: 30, unit: 'g', emoji: '🌭' },

  // --- Panadería ---
  { id: 'ahor-barra-pan', name: 'Barra de Pan', brand: 'AhorraMás', supermarket: 'ahorramas', category: 'panaderia', nutritionPer100g: { kcal: 260, proteins: 8.5, carbs: 50.0, fats: 1.5 }, defaultServingG: 60, unit: 'g', emoji: '🥖' },

  // --- Salsas ---
  { id: 'ahor-tomate-frito', name: 'Tomate Frito Casero', brand: 'AhorraMás', supermarket: 'ahorramas', category: 'salsas', nutritionPer100g: { kcal: 70, proteins: 1.2, carbs: 8.8, fats: 3.3 }, defaultServingG: 50, unit: 'g', emoji: '🍅' },
  { id: 'ahor-mayonesa', name: 'Mayonesa', brand: 'AhorraMás', supermarket: 'ahorramas', category: 'salsas', nutritionPer100g: { kcal: 680, proteins: 1.0, carbs: 2.5, fats: 74.0 }, defaultServingG: 15, unit: 'g', emoji: '🥫' },

  // --- Dulces ---
  { id: 'ahor-galletas-maria', name: 'Galletas María', brand: 'AhorraMás', supermarket: 'ahorramas', category: 'dulces', nutritionPer100g: { kcal: 450, proteins: 7.0, carbs: 73.0, fats: 14.0 }, defaultServingG: 10, unit: 'g', emoji: '🍪' },
  { id: 'ahor-magdalenas', name: 'Magdalenas Caseras', brand: 'AhorraMás', supermarket: 'ahorramas', category: 'dulces', nutritionPer100g: { kcal: 410, proteins: 5.5, carbs: 50.0, fats: 21.0 }, defaultServingG: 35, unit: 'g', emoji: '🧁' },

  // --- Conservas ---
  { id: 'ahor-atun-natural', name: 'Atún al Natural', brand: 'AhorraMás', supermarket: 'ahorramas', category: 'conservas', nutritionPer100g: { kcal: 103, proteins: 24.0, carbs: 0.0, fats: 0.5 }, defaultServingG: 52, unit: 'g', emoji: '🐟' },
  { id: 'ahor-pimientos-piquillo', name: 'Pimientos del Piquillo', brand: 'AhorraMás', supermarket: 'ahorramas', category: 'conservas', nutritionPer100g: { kcal: 30, proteins: 1.0, carbs: 4.5, fats: 0.3 }, defaultServingG: 80, unit: 'g', emoji: '🌶️' },

  // --- Huevos ---
  { id: 'ahor-huevos-l', name: 'Huevos Frescos L', brand: 'AhorraMás', supermarket: 'ahorramas', category: 'huevos', nutritionPer100g: { kcal: 155, proteins: 13.0, carbs: 1.1, fats: 11.0 }, defaultServingG: 60, unit: 'g', emoji: '🥚' },

  // --- Otros ---
  { id: 'ahor-cafe-capsulas', name: 'Cápsulas de Café Intenso', brand: 'AhorraMás', supermarket: 'ahorramas', category: 'otros', nutritionPer100g: { kcal: 2, proteins: 0.1, carbs: 0.0, fats: 0.0 }, defaultServingG: 40, unit: 'ml', emoji: '☕' },

  // ═══════════════════════════════════════════
  // ██  SUPECO                                ██
  // ═══════════════════════════════════════════

  // --- Lácteos ---
  { id: 'sup2-leche-entera', name: 'Leche Entera', brand: 'Supeco', supermarket: 'supeco', category: 'lacteos', nutritionPer100g: { kcal: 64, proteins: 3.1, carbs: 4.8, fats: 3.5 }, defaultServingG: 250, unit: 'ml', emoji: '🥛' },
  { id: 'sup2-yogur-natural', name: 'Yogur Natural', brand: 'Supeco', supermarket: 'supeco', category: 'lacteos', nutritionPer100g: { kcal: 60, proteins: 3.8, carbs: 4.4, fats: 3.0 }, defaultServingG: 125, unit: 'g', emoji: '🫙' },
  { id: 'sup2-queso-lonchas', name: 'Queso en Lonchas', brand: 'Supeco', supermarket: 'supeco', category: 'lacteos', nutritionPer100g: { kcal: 314, proteins: 22.0, carbs: 1.5, fats: 24.0 }, defaultServingG: 20, unit: 'g', emoji: '🧀' },

  // --- Carnes ---
  { id: 'sup2-pechuga-pollo', name: 'Pechuga de Pollo', brand: 'Supeco', supermarket: 'supeco', category: 'carnes', nutritionPer100g: { kcal: 110, proteins: 23.0, carbs: 0.0, fats: 1.6 }, defaultServingG: 150, unit: 'g', emoji: '🍗' },
  { id: 'sup2-carne-picada', name: 'Carne Picada de Cerdo y Vacuno', brand: 'Supeco', supermarket: 'supeco', category: 'carnes', nutritionPer100g: { kcal: 220, proteins: 16.0, carbs: 0.5, fats: 17.0 }, defaultServingG: 150, unit: 'g', emoji: '🥩' },

  // --- Pescados ---
  { id: 'sup2-bacalao-desalado', name: 'Bacalao Desalado', brand: 'Supeco', supermarket: 'supeco', category: 'pescados', nutritionPer100g: { kcal: 78, proteins: 18.0, carbs: 0.0, fats: 0.7 }, defaultServingG: 150, unit: 'g', emoji: '🐟' },
  { id: 'sup2-sardinas-frescas', name: 'Sardinas Frescas', brand: 'Supeco', supermarket: 'supeco', category: 'pescados', nutritionPer100g: { kcal: 174, proteins: 21.0, carbs: 0.0, fats: 10.0 }, defaultServingG: 100, unit: 'g', emoji: '🐟' },

  // --- Verduras ---
  { id: 'sup2-patatas', name: 'Patatas', brand: 'Supeco', supermarket: 'supeco', category: 'verduras', nutritionPer100g: { kcal: 77, proteins: 2.0, carbs: 17.0, fats: 0.1 }, defaultServingG: 200, unit: 'g', emoji: '🥔' },
  { id: 'sup2-cebolla', name: 'Cebollas', brand: 'Supeco', supermarket: 'supeco', category: 'verduras', nutritionPer100g: { kcal: 40, proteins: 1.1, carbs: 8.6, fats: 0.1 }, defaultServingG: 100, unit: 'g', emoji: '🧅' },

  // --- Cereales ---
  { id: 'sup2-arroz-redondo', name: 'Arroz Redondo', brand: 'Supeco', supermarket: 'supeco', category: 'cereales', nutritionPer100g: { kcal: 354, proteins: 7.0, carbs: 78.0, fats: 0.9 }, defaultServingG: 80, unit: 'g', emoji: '🍚' },
  { id: 'sup2-fideos', name: 'Fideos Nº3', brand: 'Supeco', supermarket: 'supeco', category: 'cereales', nutritionPer100g: { kcal: 356, proteins: 12.0, carbs: 72.0, fats: 1.5 }, defaultServingG: 80, unit: 'g', emoji: '🍜' },

  // --- Legumbres ---
  { id: 'sup2-lentejas-cocidas', name: 'Lentejas Cocidas', brand: 'Supeco', supermarket: 'supeco', category: 'legumbres', nutritionPer100g: { kcal: 105, proteins: 8.0, carbs: 14.0, fats: 0.4 }, defaultServingG: 130, unit: 'g', emoji: '🫘' },

  // --- Bebidas ---
  { id: 'sup2-agua', name: 'Agua Mineral', brand: 'Supeco', supermarket: 'supeco', category: 'bebidas', nutritionPer100g: { kcal: 0, proteins: 0.0, carbs: 0.0, fats: 0.0 }, defaultServingG: 500, unit: 'ml', emoji: '💧' },
  { id: 'sup2-cerveza', name: 'Cerveza Rubia', brand: 'Supeco', supermarket: 'supeco', category: 'bebidas', nutritionPer100g: { kcal: 43, proteins: 0.3, carbs: 3.6, fats: 0.0 }, defaultServingG: 330, unit: 'ml', emoji: '🍺' },

  // --- Congelados ---
  { id: 'sup2-merluza-congelada', name: 'Merluza Congelada en Rodajas', brand: 'Supeco', supermarket: 'supeco', category: 'congelados', nutritionPer100g: { kcal: 80, proteins: 17.0, carbs: 0.0, fats: 1.2 }, defaultServingG: 150, unit: 'g', emoji: '🐟' },
  { id: 'sup2-salteado-verduras', name: 'Salteado de Verduras', brand: 'Supeco', supermarket: 'supeco', category: 'congelados', nutritionPer100g: { kcal: 38, proteins: 1.8, carbs: 4.5, fats: 0.8 }, defaultServingG: 200, unit: 'g', emoji: '🥘' },

  // --- Embutidos ---
  { id: 'sup2-jamon-york', name: 'Jamón Cocido', brand: 'Supeco', supermarket: 'supeco', category: 'embutidos', nutritionPer100g: { kcal: 112, proteins: 17.5, carbs: 1.5, fats: 4.0 }, defaultServingG: 40, unit: 'g', emoji: '🍖' },
  { id: 'sup2-chorizo', name: 'Chorizo Extra', brand: 'Supeco', supermarket: 'supeco', category: 'embutidos', nutritionPer100g: { kcal: 385, proteins: 22.0, carbs: 2.0, fats: 33.0 }, defaultServingG: 30, unit: 'g', emoji: '🌭' },

  // --- Salsas ---
  { id: 'sup2-tomate-frito', name: 'Tomate Frito', brand: 'Supeco', supermarket: 'supeco', category: 'salsas', nutritionPer100g: { kcal: 66, proteins: 1.1, carbs: 8.2, fats: 3.0 }, defaultServingG: 50, unit: 'g', emoji: '🍅' },

  // --- Dulces ---
  { id: 'sup2-galletas-chocolate', name: 'Galletas con Chocolate', brand: 'Supeco', supermarket: 'supeco', category: 'dulces', nutritionPer100g: { kcal: 492, proteins: 6.0, carbs: 64.0, fats: 23.0 }, defaultServingG: 15, unit: 'g', emoji: '🍪' },

  // --- Conservas ---
  { id: 'sup2-sardinas-aceite', name: 'Sardinas en Aceite', brand: 'Supeco', supermarket: 'supeco', category: 'conservas', nutritionPer100g: { kcal: 220, proteins: 22.0, carbs: 0.0, fats: 14.0 }, defaultServingG: 60, unit: 'g', emoji: '🐟' },
  { id: 'sup2-atun-aceite', name: 'Atún en Aceite de Girasol', brand: 'Supeco', supermarket: 'supeco', category: 'conservas', nutritionPer100g: { kcal: 190, proteins: 25.0, carbs: 0.0, fats: 10.0 }, defaultServingG: 52, unit: 'g', emoji: '🐟' },

  // --- Panadería ---
  { id: 'sup2-pan-molde', name: 'Pan de Molde', brand: 'Supeco', supermarket: 'supeco', category: 'panaderia', nutritionPer100g: { kcal: 265, proteins: 8.0, carbs: 48.0, fats: 4.0 }, defaultServingG: 30, unit: 'g', emoji: '🍞' },

  // --- Huevos ---
  { id: 'sup2-huevos-m', name: 'Huevos M', brand: 'Supeco', supermarket: 'supeco', category: 'huevos', nutritionPer100g: { kcal: 155, proteins: 13.0, carbs: 1.1, fats: 11.0 }, defaultServingG: 55, unit: 'g', emoji: '🥚' },

  // --- Aceites ---
  { id: 'sup2-aceite-oliva', name: 'Aceite de Oliva Virgen Extra', brand: 'Supeco', supermarket: 'supeco', category: 'aceites', nutritionPer100g: { kcal: 824, proteins: 0.0, carbs: 0.0, fats: 91.6 }, defaultServingG: 10, unit: 'ml', emoji: '🫒' },

  // --- Otros ---
  { id: 'sup2-sal-fina', name: 'Sal Fina', brand: 'Supeco', supermarket: 'supeco', category: 'otros', nutritionPer100g: { kcal: 0, proteins: 0.0, carbs: 0.0, fats: 0.0 }, defaultServingG: 2, unit: 'g', emoji: '🧂' },

  // ═══════════════════════════════════════════
  // ██  ALCAMPO (Auchan, Mmm!)               ██
  // ═══════════════════════════════════════════

  // --- Lácteos ---
  { id: 'alc-leche-entera', name: 'Leche Entera', brand: 'Auchan', supermarket: 'alcampo', category: 'lacteos', nutritionPer100g: { kcal: 63, proteins: 3.1, carbs: 4.7, fats: 3.5 }, defaultServingG: 250, unit: 'ml', emoji: '🥛' },
  { id: 'alc-leche-desnatada', name: 'Leche Desnatada', brand: 'Auchan', supermarket: 'alcampo', category: 'lacteos', nutritionPer100g: { kcal: 35, proteins: 3.4, carbs: 4.9, fats: 0.1 }, defaultServingG: 250, unit: 'ml', emoji: '🥛' },
  { id: 'alc-yogur-griego', name: 'Yogur Griego Natural', brand: 'Auchan', supermarket: 'alcampo', category: 'lacteos', nutritionPer100g: { kcal: 112, proteins: 3.6, carbs: 4.8, fats: 8.5 }, defaultServingG: 125, unit: 'g', emoji: '🫙' },
  { id: 'alc-yogur-frutas', name: 'Yogur con Frutas del Bosque', brand: 'Auchan', supermarket: 'alcampo', category: 'lacteos', nutritionPer100g: { kcal: 90, proteins: 3.0, carbs: 13.0, fats: 2.8 }, defaultServingG: 125, unit: 'g', emoji: '🫙' },
  { id: 'alc-queso-manchego', name: 'Queso Manchego Curado', brand: 'Mmm!', supermarket: 'alcampo', category: 'lacteos', nutritionPer100g: { kcal: 420, proteins: 28.0, carbs: 0.3, fats: 34.0 }, defaultServingG: 30, unit: 'g', emoji: '🧀' },
  { id: 'alc-queso-fresco', name: 'Queso Fresco', brand: 'Auchan', supermarket: 'alcampo', category: 'lacteos', nutritionPer100g: { kcal: 174, proteins: 11.0, carbs: 2.5, fats: 13.5 }, defaultServingG: 75, unit: 'g', emoji: '🧀' },

  // --- Carnes ---
  { id: 'alc-pechuga-pavo', name: 'Pechuga de Pavo', brand: 'Auchan', supermarket: 'alcampo', category: 'carnes', nutritionPer100g: { kcal: 107, proteins: 24.0, carbs: 0.0, fats: 1.0 }, defaultServingG: 150, unit: 'g', emoji: '🍗' },
  { id: 'alc-entrecot-ternera', name: 'Entrecot de Ternera', brand: 'Mmm!', supermarket: 'alcampo', category: 'carnes', nutritionPer100g: { kcal: 195, proteins: 20.0, carbs: 0.0, fats: 13.0 }, defaultServingG: 200, unit: 'g', emoji: '🥩' },
  { id: 'alc-pollo-entero', name: 'Pollo Entero', brand: 'Auchan', supermarket: 'alcampo', category: 'carnes', nutritionPer100g: { kcal: 167, proteins: 20.0, carbs: 0.0, fats: 9.5 }, defaultServingG: 200, unit: 'g', emoji: '🍗' },
  { id: 'alc-carne-picada-vacuno', name: 'Carne Picada de Vacuno', brand: 'Auchan', supermarket: 'alcampo', category: 'carnes', nutritionPer100g: { kcal: 175, proteins: 20.0, carbs: 0.0, fats: 10.0 }, defaultServingG: 150, unit: 'g', emoji: '🥩' },

  // --- Pescados ---
  { id: 'alc-dorada', name: 'Dorada Fresca', brand: 'Auchan', supermarket: 'alcampo', category: 'pescados', nutritionPer100g: { kcal: 96, proteins: 19.0, carbs: 0.0, fats: 2.5 }, defaultServingG: 200, unit: 'g', emoji: '🐟' },
  { id: 'alc-lubina', name: 'Lubina Fresca', brand: 'Mmm!', supermarket: 'alcampo', category: 'pescados', nutritionPer100g: { kcal: 97, proteins: 18.0, carbs: 0.0, fats: 2.8 }, defaultServingG: 200, unit: 'g', emoji: '🐟' },
  { id: 'alc-gambas-blancas', name: 'Gamba Blanca', brand: 'Auchan', supermarket: 'alcampo', category: 'pescados', nutritionPer100g: { kcal: 85, proteins: 18.0, carbs: 0.2, fats: 1.0 }, defaultServingG: 100, unit: 'g', emoji: '🦐' },

  // --- Frutas ---
  { id: 'alc-melon', name: 'Melón', brand: 'Auchan', supermarket: 'alcampo', category: 'frutas', nutritionPer100g: { kcal: 34, proteins: 0.8, carbs: 7.3, fats: 0.2 }, defaultServingG: 200, unit: 'g', emoji: '🍈' },
  { id: 'alc-uvas', name: 'Uvas Blancas', brand: 'Auchan', supermarket: 'alcampo', category: 'frutas', nutritionPer100g: { kcal: 67, proteins: 0.6, carbs: 15.5, fats: 0.4 }, defaultServingG: 120, unit: 'g', emoji: '🍇' },

  // --- Verduras ---
  { id: 'alc-pimiento-rojo', name: 'Pimiento Rojo', brand: 'Auchan', supermarket: 'alcampo', category: 'verduras', nutritionPer100g: { kcal: 31, proteins: 1.0, carbs: 5.0, fats: 0.3 }, defaultServingG: 150, unit: 'g', emoji: '🌶️' },
  { id: 'alc-calabacin', name: 'Calabacín', brand: 'Auchan', supermarket: 'alcampo', category: 'verduras', nutritionPer100g: { kcal: 17, proteins: 1.2, carbs: 2.0, fats: 0.3 }, defaultServingG: 200, unit: 'g', emoji: '🥒' },
  { id: 'alc-champiñones', name: 'Champiñones Laminados', brand: 'Auchan', supermarket: 'alcampo', category: 'verduras', nutritionPer100g: { kcal: 22, proteins: 3.1, carbs: 0.5, fats: 0.3 }, defaultServingG: 100, unit: 'g', emoji: '🍄' },

  // --- Cereales ---
  { id: 'alc-arroz-basmati', name: 'Arroz Basmati', brand: 'Auchan', supermarket: 'alcampo', category: 'cereales', nutritionPer100g: { kcal: 352, proteins: 7.5, carbs: 77.0, fats: 0.6 }, defaultServingG: 80, unit: 'g', emoji: '🍚' },
  { id: 'alc-quinoa', name: 'Quinoa', brand: 'Mmm!', supermarket: 'alcampo', category: 'cereales', nutritionPer100g: { kcal: 368, proteins: 14.0, carbs: 64.0, fats: 6.0 }, defaultServingG: 60, unit: 'g', emoji: '🌾' },

  // --- Legumbres ---
  { id: 'alc-garbanzos-secos', name: 'Garbanzos Secos', brand: 'Auchan', supermarket: 'alcampo', category: 'legumbres', nutritionPer100g: { kcal: 364, proteins: 19.0, carbs: 53.0, fats: 6.0 }, defaultServingG: 80, unit: 'g', emoji: '🫘' },
  { id: 'alc-alubias-blancas', name: 'Alubias Blancas', brand: 'Auchan', supermarket: 'alcampo', category: 'legumbres', nutritionPer100g: { kcal: 330, proteins: 21.0, carbs: 48.0, fats: 1.5 }, defaultServingG: 80, unit: 'g', emoji: '🫘' },

  // --- Bebidas ---
  { id: 'alc-zumo-melocoton', name: 'Zumo de Melocotón', brand: 'Auchan', supermarket: 'alcampo', category: 'bebidas', nutritionPer100g: { kcal: 46, proteins: 0.3, carbs: 11.0, fats: 0.0 }, defaultServingG: 250, unit: 'ml', emoji: '🍑' },
  { id: 'alc-tonica', name: 'Tónica', brand: 'Auchan', supermarket: 'alcampo', category: 'bebidas', nutritionPer100g: { kcal: 36, proteins: 0.0, carbs: 9.0, fats: 0.0 }, defaultServingG: 200, unit: 'ml', emoji: '🥤' },
  { id: 'alc-vino-tinto-crianza', name: 'Vino Tinto Crianza', brand: 'Mmm!', supermarket: 'alcampo', category: 'bebidas', nutritionPer100g: { kcal: 75, proteins: 0.1, carbs: 2.0, fats: 0.0 }, defaultServingG: 150, unit: 'ml', emoji: '🍷' },

  // --- Congelados ---
  { id: 'alc-pizza-4-quesos', name: 'Pizza 4 Quesos', brand: 'Auchan', supermarket: 'alcampo', category: 'congelados', nutritionPer100g: { kcal: 252, proteins: 11.0, carbs: 27.0, fats: 11.0 }, defaultServingG: 195, unit: 'g', emoji: '🍕' },
  { id: 'alc-nuggets-pollo', name: 'Nuggets de Pollo', brand: 'Auchan', supermarket: 'alcampo', category: 'congelados', nutritionPer100g: { kcal: 240, proteins: 14.0, carbs: 18.0, fats: 13.0 }, defaultServingG: 100, unit: 'g', emoji: '🍗' },
  { id: 'alc-helado-chocolate', name: 'Helado de Chocolate', brand: 'Mmm!', supermarket: 'alcampo', category: 'congelados', nutritionPer100g: { kcal: 220, proteins: 4.0, carbs: 28.0, fats: 10.0 }, defaultServingG: 100, unit: 'ml', emoji: '🍦' },
  { id: 'alc-menestra-verduras', name: 'Menestra de Verduras', brand: 'Auchan', supermarket: 'alcampo', category: 'congelados', nutritionPer100g: { kcal: 45, proteins: 2.5, carbs: 5.0, fats: 1.0 }, defaultServingG: 200, unit: 'g', emoji: '🥘' },

  // --- Embutidos ---
  { id: 'alc-jamon-iberico', name: 'Jamón Ibérico Loncheado', brand: 'Mmm!', supermarket: 'alcampo', category: 'embutidos', nutritionPer100g: { kcal: 300, proteins: 30.0, carbs: 0.5, fats: 20.0 }, defaultServingG: 40, unit: 'g', emoji: '🥓' },
  { id: 'alc-mortadela', name: 'Mortadela', brand: 'Auchan', supermarket: 'alcampo', category: 'embutidos', nutritionPer100g: { kcal: 288, proteins: 14.0, carbs: 2.0, fats: 25.0 }, defaultServingG: 30, unit: 'g', emoji: '🍖' },

  // --- Panadería ---
  { id: 'alc-pan-chapata', name: 'Pan Chapata', brand: 'Auchan', supermarket: 'alcampo', category: 'panaderia', nutritionPer100g: { kcal: 270, proteins: 9.0, carbs: 52.0, fats: 2.0 }, defaultServingG: 80, unit: 'g', emoji: '🥖' },
  { id: 'alc-pan-molde-integral', name: 'Pan de Molde Integral', brand: 'Auchan', supermarket: 'alcampo', category: 'panaderia', nutritionPer100g: { kcal: 240, proteins: 9.5, carbs: 40.0, fats: 3.5 }, defaultServingG: 30, unit: 'g', emoji: '🍞' },

  // --- Salsas ---
  { id: 'alc-ketchup', name: 'Ketchup', brand: 'Auchan', supermarket: 'alcampo', category: 'salsas', nutritionPer100g: { kcal: 112, proteins: 1.2, carbs: 25.0, fats: 0.2 }, defaultServingG: 15, unit: 'g', emoji: '🥫' },
  { id: 'alc-mostaza', name: 'Mostaza de Dijon', brand: 'Auchan', supermarket: 'alcampo', category: 'salsas', nutritionPer100g: { kcal: 150, proteins: 6.0, carbs: 7.0, fats: 10.0 }, defaultServingG: 10, unit: 'g', emoji: '🟡' },
  { id: 'alc-salsa-soja', name: 'Salsa de Soja', brand: 'Auchan', supermarket: 'alcampo', category: 'salsas', nutritionPer100g: { kcal: 55, proteins: 5.5, carbs: 6.0, fats: 0.1 }, defaultServingG: 15, unit: 'ml', emoji: '🥫' },

  // --- Dulces ---
  { id: 'alc-chocolate-negro-70', name: 'Chocolate Negro 70%', brand: 'Mmm!', supermarket: 'alcampo', category: 'dulces', nutritionPer100g: { kcal: 550, proteins: 8.0, carbs: 35.0, fats: 40.0 }, defaultServingG: 25, unit: 'g', emoji: '🍫' },
  { id: 'alc-bizcocho-yogur', name: 'Bizcocho de Yogur', brand: 'Auchan', supermarket: 'alcampo', category: 'dulces', nutritionPer100g: { kcal: 380, proteins: 5.5, carbs: 48.0, fats: 18.0 }, defaultServingG: 40, unit: 'g', emoji: '🍰' },

  // --- Conservas ---
  { id: 'alc-atun-aceite-oliva', name: 'Atún en Aceite de Oliva', brand: 'Auchan', supermarket: 'alcampo', category: 'conservas', nutritionPer100g: { kcal: 198, proteins: 26.0, carbs: 0.0, fats: 10.5 }, defaultServingG: 52, unit: 'g', emoji: '🐟' },
  { id: 'alc-mejillones-escabeche', name: 'Mejillones en Escabeche', brand: 'Auchan', supermarket: 'alcampo', category: 'conservas', nutritionPer100g: { kcal: 150, proteins: 15.0, carbs: 3.0, fats: 8.5 }, defaultServingG: 70, unit: 'g', emoji: '🦪' },
  { id: 'alc-aceitunas-rellenas', name: 'Aceitunas Rellenas de Anchoa', brand: 'Auchan', supermarket: 'alcampo', category: 'conservas', nutritionPer100g: { kcal: 148, proteins: 1.5, carbs: 1.0, fats: 15.0 }, defaultServingG: 40, unit: 'g', emoji: '🫒' },

  // --- Huevos ---
  { id: 'alc-huevos-camperos', name: 'Huevos Camperos L', brand: 'Auchan', supermarket: 'alcampo', category: 'huevos', nutritionPer100g: { kcal: 155, proteins: 13.0, carbs: 1.1, fats: 11.0 }, defaultServingG: 60, unit: 'g', emoji: '🥚' },

  // --- Aceites ---
  { id: 'alc-aceite-oliva-suave', name: 'Aceite de Oliva Suave', brand: 'Auchan', supermarket: 'alcampo', category: 'aceites', nutritionPer100g: { kcal: 824, proteins: 0.0, carbs: 0.0, fats: 91.6 }, defaultServingG: 10, unit: 'ml', emoji: '🫒' },

  // --- Otros ---
  { id: 'alc-azucar-blanco', name: 'Azúcar Blanco', brand: 'Auchan', supermarket: 'alcampo', category: 'otros', nutritionPer100g: { kcal: 400, proteins: 0.0, carbs: 100.0, fats: 0.0 }, defaultServingG: 8, unit: 'g', emoji: '🍬' },
  { id: 'alc-harina-trigo', name: 'Harina de Trigo', brand: 'Auchan', supermarket: 'alcampo', category: 'otros', nutritionPer100g: { kcal: 341, proteins: 10.0, carbs: 70.0, fats: 1.2 }, defaultServingG: 30, unit: 'g', emoji: '🌾' },

  // ═══════════════════════════════════════════
  // ██  CONSUM (Consum, Consum Eco)           ██
  // ═══════════════════════════════════════════

  // --- Lácteos ---
  { id: 'cons-leche-entera', name: 'Leche Entera', brand: 'Consum', supermarket: 'consum', category: 'lacteos', nutritionPer100g: { kcal: 63, proteins: 3.1, carbs: 4.7, fats: 3.5 }, defaultServingG: 250, unit: 'ml', emoji: '🥛' },
  { id: 'cons-leche-semi', name: 'Leche Semidesnatada', brand: 'Consum', supermarket: 'consum', category: 'lacteos', nutritionPer100g: { kcal: 46, proteins: 3.2, carbs: 4.8, fats: 1.6 }, defaultServingG: 250, unit: 'ml', emoji: '🥛' },
  { id: 'cons-yogur-natural', name: 'Yogur Natural', brand: 'Consum', supermarket: 'consum', category: 'lacteos', nutritionPer100g: { kcal: 60, proteins: 3.8, carbs: 4.4, fats: 3.0 }, defaultServingG: 125, unit: 'g', emoji: '🫙' },
  { id: 'cons-yogur-desnatado', name: 'Yogur Desnatado Natural', brand: 'Consum', supermarket: 'consum', category: 'lacteos', nutritionPer100g: { kcal: 42, proteins: 4.3, carbs: 5.5, fats: 0.1 }, defaultServingG: 125, unit: 'g', emoji: '🫙' },
  { id: 'cons-queso-fresco-eco', name: 'Queso Fresco Eco', brand: 'Consum Eco', supermarket: 'consum', category: 'lacteos', nutritionPer100g: { kcal: 175, proteins: 11.0, carbs: 2.5, fats: 13.5 }, defaultServingG: 75, unit: 'g', emoji: '🧀' },
  { id: 'cons-bebida-almendras', name: 'Bebida de Almendras', brand: 'Consum', supermarket: 'consum', category: 'lacteos', nutritionPer100g: { kcal: 22, proteins: 0.4, carbs: 2.8, fats: 1.1 }, defaultServingG: 250, unit: 'ml', emoji: '🥛' },

  // --- Carnes ---
  { id: 'cons-pechuga-pollo', name: 'Pechuga de Pollo', brand: 'Consum', supermarket: 'consum', category: 'carnes', nutritionPer100g: { kcal: 110, proteins: 23.0, carbs: 0.0, fats: 1.6 }, defaultServingG: 150, unit: 'g', emoji: '🍗' },
  { id: 'cons-cinta-lomo', name: 'Cinta de Lomo de Cerdo', brand: 'Consum', supermarket: 'consum', category: 'carnes', nutritionPer100g: { kcal: 150, proteins: 21.0, carbs: 0.0, fats: 7.0 }, defaultServingG: 150, unit: 'g', emoji: '🥩' },
  { id: 'cons-hamburguesa-pollo', name: 'Hamburguesa de Pollo', brand: 'Consum', supermarket: 'consum', category: 'carnes', nutritionPer100g: { kcal: 180, proteins: 18.0, carbs: 5.0, fats: 9.5 }, defaultServingG: 100, unit: 'g', emoji: '🍔' },

  // --- Pescados ---
  { id: 'cons-merluza-fresca', name: 'Merluza Fresca', brand: 'Consum', supermarket: 'consum', category: 'pescados', nutritionPer100g: { kcal: 82, proteins: 17.0, carbs: 0.0, fats: 1.3 }, defaultServingG: 150, unit: 'g', emoji: '🐟' },
  { id: 'cons-salmon-ahumado', name: 'Salmón Ahumado', brand: 'Consum', supermarket: 'consum', category: 'pescados', nutritionPer100g: { kcal: 190, proteins: 22.0, carbs: 0.5, fats: 11.0 }, defaultServingG: 50, unit: 'g', emoji: '🐟' },
  { id: 'cons-bacalao-fresco', name: 'Bacalao Fresco', brand: 'Consum', supermarket: 'consum', category: 'pescados', nutritionPer100g: { kcal: 78, proteins: 18.0, carbs: 0.0, fats: 0.7 }, defaultServingG: 150, unit: 'g', emoji: '🐟' },

  // --- Frutas ---
  { id: 'cons-platanos', name: 'Plátanos', brand: 'Consum', supermarket: 'consum', category: 'frutas', nutritionPer100g: { kcal: 89, proteins: 1.1, carbs: 20.0, fats: 0.3 }, defaultServingG: 120, unit: 'g', emoji: '🍌' },
  { id: 'cons-kiwi', name: 'Kiwi', brand: 'Consum Eco', supermarket: 'consum', category: 'frutas', nutritionPer100g: { kcal: 61, proteins: 1.1, carbs: 11.0, fats: 0.5 }, defaultServingG: 90, unit: 'g', emoji: '🥝' },

  // --- Verduras ---
  { id: 'cons-tomate-ensalada', name: 'Tomate de Ensalada', brand: 'Consum', supermarket: 'consum', category: 'verduras', nutritionPer100g: { kcal: 22, proteins: 1.0, carbs: 3.5, fats: 0.3 }, defaultServingG: 150, unit: 'g', emoji: '🍅' },
  { id: 'cons-zanahoria', name: 'Zanahorias', brand: 'Consum Eco', supermarket: 'consum', category: 'verduras', nutritionPer100g: { kcal: 41, proteins: 0.9, carbs: 7.7, fats: 0.2 }, defaultServingG: 100, unit: 'g', emoji: '🥕' },

  // --- Cereales ---
  { id: 'cons-arroz-redondo', name: 'Arroz Redondo', brand: 'Consum', supermarket: 'consum', category: 'cereales', nutritionPer100g: { kcal: 354, proteins: 7.0, carbs: 78.0, fats: 0.9 }, defaultServingG: 80, unit: 'g', emoji: '🍚' },
  { id: 'cons-espaguetis', name: 'Espaguetis', brand: 'Consum', supermarket: 'consum', category: 'cereales', nutritionPer100g: { kcal: 359, proteins: 13.0, carbs: 71.0, fats: 1.5 }, defaultServingG: 80, unit: 'g', emoji: '🍝' },
  { id: 'cons-copos-avena-eco', name: 'Copos de Avena Eco', brand: 'Consum Eco', supermarket: 'consum', category: 'cereales', nutritionPer100g: { kcal: 370, proteins: 13.5, carbs: 58.0, fats: 7.0 }, defaultServingG: 40, unit: 'g', emoji: '🥣' },

  // --- Legumbres ---
  { id: 'cons-lentejas-cocidas', name: 'Lentejas Cocidas', brand: 'Consum', supermarket: 'consum', category: 'legumbres', nutritionPer100g: { kcal: 106, proteins: 8.0, carbs: 14.0, fats: 0.4 }, defaultServingG: 130, unit: 'g', emoji: '🫘' },
  { id: 'cons-judias-cocidas', name: 'Judías Blancas Cocidas', brand: 'Consum', supermarket: 'consum', category: 'legumbres', nutritionPer100g: { kcal: 100, proteins: 7.0, carbs: 14.0, fats: 0.5 }, defaultServingG: 130, unit: 'g', emoji: '🫘' },

  // --- Bebidas ---
  { id: 'cons-zumo-naranja', name: 'Zumo de Naranja Exprimido', brand: 'Consum', supermarket: 'consum', category: 'bebidas', nutritionPer100g: { kcal: 44, proteins: 0.7, carbs: 9.5, fats: 0.1 }, defaultServingG: 250, unit: 'ml', emoji: '🍊' },
  { id: 'cons-cerveza-artesana', name: 'Cerveza Artesana', brand: 'Consum', supermarket: 'consum', category: 'bebidas', nutritionPer100g: { kcal: 45, proteins: 0.4, carbs: 3.8, fats: 0.0 }, defaultServingG: 330, unit: 'ml', emoji: '🍺' },
  { id: 'cons-horchata', name: 'Horchata de Chufa', brand: 'Consum', supermarket: 'consum', category: 'bebidas', nutritionPer100g: { kcal: 68, proteins: 0.5, carbs: 12.0, fats: 2.0 }, defaultServingG: 250, unit: 'ml', emoji: '🥛' },

  // --- Congelados ---
  { id: 'cons-croquetas-jamon', name: 'Croquetas de Jamón', brand: 'Consum', supermarket: 'consum', category: 'congelados', nutritionPer100g: { kcal: 215, proteins: 6.5, carbs: 22.0, fats: 11.0 }, defaultServingG: 100, unit: 'g', emoji: '🥘' },
  { id: 'cons-espinacas-congeladas', name: 'Espinacas Congeladas', brand: 'Consum', supermarket: 'consum', category: 'congelados', nutritionPer100g: { kcal: 25, proteins: 3.0, carbs: 1.5, fats: 0.4 }, defaultServingG: 150, unit: 'g', emoji: '🥬' },
  { id: 'cons-lasaña-boloñesa', name: 'Lasaña Boloñesa', brand: 'Consum', supermarket: 'consum', category: 'congelados', nutritionPer100g: { kcal: 140, proteins: 7.0, carbs: 14.0, fats: 6.0 }, defaultServingG: 300, unit: 'g', emoji: '🍝' },

  // --- Embutidos ---
  { id: 'cons-jamon-serrano', name: 'Jamón Serrano Reserva', brand: 'Consum', supermarket: 'consum', category: 'embutidos', nutritionPer100g: { kcal: 241, proteins: 31.0, carbs: 0.5, fats: 12.5 }, defaultServingG: 40, unit: 'g', emoji: '🥓' },
  { id: 'cons-fuet', name: 'Fuet Extra', brand: 'Consum', supermarket: 'consum', category: 'embutidos', nutritionPer100g: { kcal: 430, proteins: 25.0, carbs: 2.0, fats: 36.0 }, defaultServingG: 30, unit: 'g', emoji: '🌭' },

  // --- Panadería ---
  { id: 'cons-pan-rustico', name: 'Pan Rústico', brand: 'Consum', supermarket: 'consum', category: 'panaderia', nutritionPer100g: { kcal: 258, proteins: 8.5, carbs: 49.0, fats: 1.5 }, defaultServingG: 60, unit: 'g', emoji: '🥖' },

  // --- Salsas ---
  { id: 'cons-tomate-frito', name: 'Tomate Frito Casero', brand: 'Consum', supermarket: 'consum', category: 'salsas', nutritionPer100g: { kcal: 68, proteins: 1.2, carbs: 8.5, fats: 3.2 }, defaultServingG: 50, unit: 'g', emoji: '🍅' },
  { id: 'cons-alioli', name: 'Alioli', brand: 'Consum', supermarket: 'consum', category: 'salsas', nutritionPer100g: { kcal: 450, proteins: 1.5, carbs: 4.0, fats: 47.0 }, defaultServingG: 15, unit: 'g', emoji: '🧄' },

  // --- Dulces ---
  { id: 'cons-galletas-integrales', name: 'Galletas Integrales', brand: 'Consum', supermarket: 'consum', category: 'dulces', nutritionPer100g: { kcal: 445, proteins: 8.0, carbs: 65.0, fats: 16.0 }, defaultServingG: 12, unit: 'g', emoji: '🍪' },
  { id: 'cons-cacao-polvo', name: 'Cacao en Polvo', brand: 'Consum', supermarket: 'consum', category: 'dulces', nutritionPer100g: { kcal: 380, proteins: 5.0, carbs: 78.0, fats: 3.5 }, defaultServingG: 15, unit: 'g', emoji: '🍫' },

  // --- Conservas ---
  { id: 'cons-atun-natural', name: 'Atún al Natural', brand: 'Consum', supermarket: 'consum', category: 'conservas', nutritionPer100g: { kcal: 103, proteins: 24.0, carbs: 0.0, fats: 0.5 }, defaultServingG: 52, unit: 'g', emoji: '🐟' },
  { id: 'cons-garbanzos-tarro', name: 'Garbanzos Cocidos en Tarro', brand: 'Consum', supermarket: 'consum', category: 'conservas', nutritionPer100g: { kcal: 128, proteins: 7.0, carbs: 17.0, fats: 2.5 }, defaultServingG: 130, unit: 'g', emoji: '🫘' },

  // --- Huevos ---
  { id: 'cons-huevos-eco', name: 'Huevos Ecológicos L', brand: 'Consum Eco', supermarket: 'consum', category: 'huevos', nutritionPer100g: { kcal: 155, proteins: 13.0, carbs: 1.1, fats: 11.0 }, defaultServingG: 60, unit: 'g', emoji: '🥚' },

  // --- Aceites ---
  { id: 'cons-aceite-oliva', name: 'Aceite de Oliva Virgen Extra', brand: 'Consum', supermarket: 'consum', category: 'aceites', nutritionPer100g: { kcal: 824, proteins: 0.0, carbs: 0.0, fats: 91.6 }, defaultServingG: 10, unit: 'ml', emoji: '🫒' },

  // --- Otros ---
  { id: 'cons-miel-romero', name: 'Miel de Romero', brand: 'Consum', supermarket: 'consum', category: 'otros', nutritionPer100g: { kcal: 322, proteins: 0.3, carbs: 80.0, fats: 0.0 }, defaultServingG: 15, unit: 'g', emoji: '🍯' },
  { id: 'cons-infusion-manzanilla', name: 'Infusión Manzanilla', brand: 'Consum', supermarket: 'consum', category: 'otros', nutritionPer100g: { kcal: 1, proteins: 0.0, carbs: 0.0, fats: 0.0 }, defaultServingG: 200, unit: 'ml', emoji: '🍵' },

  // ═══════════════════════════════════════════
  // ██  HIPERCOR (Hipercor, El Corte Inglés)  ██
  // ═══════════════════════════════════════════

  // --- Lácteos ---
  { id: 'hip-leche-entera', name: 'Leche Entera', brand: 'Hipercor', supermarket: 'hipercor', category: 'lacteos', nutritionPer100g: { kcal: 63, proteins: 3.1, carbs: 4.7, fats: 3.5 }, defaultServingG: 250, unit: 'ml', emoji: '🥛' },
  { id: 'hip-yogur-griego', name: 'Yogur Griego Natural', brand: 'Hipercor', supermarket: 'hipercor', category: 'lacteos', nutritionPer100g: { kcal: 113, proteins: 3.5, carbs: 4.7, fats: 8.5 }, defaultServingG: 125, unit: 'g', emoji: '🫙' },
  { id: 'hip-queso-brie', name: 'Queso Brie', brand: 'El Corte Inglés', supermarket: 'hipercor', category: 'lacteos', nutritionPer100g: { kcal: 334, proteins: 21.0, carbs: 0.5, fats: 27.0 }, defaultServingG: 30, unit: 'g', emoji: '🧀' },
  { id: 'hip-queso-parmesano', name: 'Queso Parmigiano Reggiano', brand: 'El Corte Inglés', supermarket: 'hipercor', category: 'lacteos', nutritionPer100g: { kcal: 392, proteins: 33.0, carbs: 0.0, fats: 29.0 }, defaultServingG: 20, unit: 'g', emoji: '🧀' },
  { id: 'hip-nata-montar', name: 'Nata para Montar', brand: 'Hipercor', supermarket: 'hipercor', category: 'lacteos', nutritionPer100g: { kcal: 308, proteins: 2.0, carbs: 3.0, fats: 33.0 }, defaultServingG: 30, unit: 'ml', emoji: '🍶' },

  // --- Carnes ---
  { id: 'hip-solomillo-ternera', name: 'Solomillo de Ternera', brand: 'El Corte Inglés', supermarket: 'hipercor', category: 'carnes', nutritionPer100g: { kcal: 140, proteins: 22.0, carbs: 0.0, fats: 5.5 }, defaultServingG: 200, unit: 'g', emoji: '🥩' },
  { id: 'hip-chuleton', name: 'Chuletón de Vacuno', brand: 'El Corte Inglés', supermarket: 'hipercor', category: 'carnes', nutritionPer100g: { kcal: 210, proteins: 20.0, carbs: 0.0, fats: 14.0 }, defaultServingG: 250, unit: 'g', emoji: '🥩' },
  { id: 'hip-pechuga-pollo-eco', name: 'Pechuga de Pollo Eco', brand: 'Hipercor', supermarket: 'hipercor', category: 'carnes', nutritionPer100g: { kcal: 110, proteins: 23.0, carbs: 0.0, fats: 1.6 }, defaultServingG: 150, unit: 'g', emoji: '🍗' },

  // --- Pescados ---
  { id: 'hip-atun-rojo', name: 'Atún Rojo Fresco', brand: 'El Corte Inglés', supermarket: 'hipercor', category: 'pescados', nutritionPer100g: { kcal: 144, proteins: 23.0, carbs: 0.0, fats: 5.0 }, defaultServingG: 150, unit: 'g', emoji: '🐟' },
  { id: 'hip-langostinos-tigre', name: 'Langostinos Tigre', brand: 'El Corte Inglés', supermarket: 'hipercor', category: 'pescados', nutritionPer100g: { kcal: 90, proteins: 19.0, carbs: 0.3, fats: 1.2 }, defaultServingG: 100, unit: 'g', emoji: '🦐' },
  { id: 'hip-rape', name: 'Rape Fresco', brand: 'Hipercor', supermarket: 'hipercor', category: 'pescados', nutritionPer100g: { kcal: 76, proteins: 15.0, carbs: 0.0, fats: 1.8 }, defaultServingG: 150, unit: 'g', emoji: '🐟' },

  // --- Frutas ---
  { id: 'hip-fresas-premium', name: 'Fresas Premium', brand: 'El Corte Inglés', supermarket: 'hipercor', category: 'frutas', nutritionPer100g: { kcal: 32, proteins: 0.7, carbs: 5.5, fats: 0.3 }, defaultServingG: 150, unit: 'g', emoji: '🍓' },
  { id: 'hip-arandanos', name: 'Arándanos', brand: 'Hipercor', supermarket: 'hipercor', category: 'frutas', nutritionPer100g: { kcal: 57, proteins: 0.7, carbs: 11.5, fats: 0.3 }, defaultServingG: 100, unit: 'g', emoji: '🫐' },

  // --- Verduras ---
  { id: 'hip-esparragos-blancos', name: 'Espárragos Blancos Extra', brand: 'El Corte Inglés', supermarket: 'hipercor', category: 'verduras', nutritionPer100g: { kcal: 20, proteins: 2.2, carbs: 1.8, fats: 0.1 }, defaultServingG: 100, unit: 'g', emoji: '🌿' },
  { id: 'hip-aguacate', name: 'Aguacate Hass', brand: 'Hipercor', supermarket: 'hipercor', category: 'verduras', nutritionPer100g: { kcal: 160, proteins: 2.0, carbs: 1.8, fats: 14.7 }, defaultServingG: 80, unit: 'g', emoji: '🥑' },

  // --- Cereales ---
  { id: 'hip-arroz-bomba', name: 'Arroz Bomba', brand: 'El Corte Inglés', supermarket: 'hipercor', category: 'cereales', nutritionPer100g: { kcal: 354, proteins: 7.0, carbs: 78.0, fats: 0.9 }, defaultServingG: 80, unit: 'g', emoji: '🍚' },
  { id: 'hip-pasta-fresca', name: 'Pasta Fresca Rellena Ricotta', brand: 'El Corte Inglés', supermarket: 'hipercor', category: 'cereales', nutritionPer100g: { kcal: 250, proteins: 10.0, carbs: 35.0, fats: 7.5 }, defaultServingG: 125, unit: 'g', emoji: '🍝' },

  // --- Bebidas ---
  { id: 'hip-vino-rioja-reserva', name: 'Vino Rioja Reserva', brand: 'El Corte Inglés', supermarket: 'hipercor', category: 'bebidas', nutritionPer100g: { kcal: 80, proteins: 0.1, carbs: 2.5, fats: 0.0 }, defaultServingG: 150, unit: 'ml', emoji: '🍷' },
  { id: 'hip-cava-brut', name: 'Cava Brut Nature', brand: 'Hipercor', supermarket: 'hipercor', category: 'bebidas', nutritionPer100g: { kcal: 65, proteins: 0.1, carbs: 0.5, fats: 0.0 }, defaultServingG: 125, unit: 'ml', emoji: '🥂' },
  { id: 'hip-kombucha', name: 'Kombucha Original', brand: 'Hipercor', supermarket: 'hipercor', category: 'bebidas', nutritionPer100g: { kcal: 18, proteins: 0.0, carbs: 4.0, fats: 0.0 }, defaultServingG: 250, unit: 'ml', emoji: '🍵' },

  // --- Congelados ---
  { id: 'hip-gambas-al-ajillo', name: 'Gambas al Ajillo', brand: 'El Corte Inglés', supermarket: 'hipercor', category: 'congelados', nutritionPer100g: { kcal: 130, proteins: 14.0, carbs: 2.0, fats: 7.0 }, defaultServingG: 150, unit: 'g', emoji: '🦐' },
  { id: 'hip-empanadillas-atun', name: 'Empanadillas de Atún', brand: 'Hipercor', supermarket: 'hipercor', category: 'congelados', nutritionPer100g: { kcal: 235, proteins: 8.0, carbs: 26.0, fats: 11.0 }, defaultServingG: 100, unit: 'g', emoji: '🥟' },
  { id: 'hip-tarta-queso', name: 'Tarta de Queso Congelada', brand: 'El Corte Inglés', supermarket: 'hipercor', category: 'congelados', nutritionPer100g: { kcal: 310, proteins: 6.0, carbs: 28.0, fats: 19.0 }, defaultServingG: 100, unit: 'g', emoji: '🍰' },

  // --- Embutidos ---
  { id: 'hip-jamon-5j', name: 'Jamón 100% Ibérico Bellota', brand: 'El Corte Inglés', supermarket: 'hipercor', category: 'embutidos', nutritionPer100g: { kcal: 310, proteins: 32.0, carbs: 0.5, fats: 20.0 }, defaultServingG: 30, unit: 'g', emoji: '🥓' },
  { id: 'hip-salchichon-iberico', name: 'Salchichón Ibérico', brand: 'El Corte Inglés', supermarket: 'hipercor', category: 'embutidos', nutritionPer100g: { kcal: 420, proteins: 24.0, carbs: 2.0, fats: 36.0 }, defaultServingG: 30, unit: 'g', emoji: '🌭' },

  // --- Panadería ---
  { id: 'hip-pan-cristal', name: 'Pan Cristal', brand: 'Hipercor', supermarket: 'hipercor', category: 'panaderia', nutritionPer100g: { kcal: 255, proteins: 8.5, carbs: 48.0, fats: 2.0 }, defaultServingG: 50, unit: 'g', emoji: '🥖' },
  { id: 'hip-croissant-mantequilla', name: 'Croissant de Mantequilla', brand: 'El Corte Inglés', supermarket: 'hipercor', category: 'panaderia', nutritionPer100g: { kcal: 406, proteins: 7.5, carbs: 45.0, fats: 21.0 }, defaultServingG: 60, unit: 'g', emoji: '🥐' },

  // --- Salsas ---
  { id: 'hip-vinagre-modena', name: 'Vinagre Balsámico de Módena', brand: 'El Corte Inglés', supermarket: 'hipercor', category: 'salsas', nutritionPer100g: { kcal: 88, proteins: 0.5, carbs: 17.0, fats: 0.0 }, defaultServingG: 10, unit: 'ml', emoji: '🍶' },
  { id: 'hip-salsa-cesar', name: 'Salsa César', brand: 'Hipercor', supermarket: 'hipercor', category: 'salsas', nutritionPer100g: { kcal: 340, proteins: 2.5, carbs: 6.0, fats: 34.0 }, defaultServingG: 20, unit: 'g', emoji: '🥗' },

  // --- Dulces ---
  { id: 'hip-turron-jijona', name: 'Turrón de Jijona', brand: 'El Corte Inglés', supermarket: 'hipercor', category: 'dulces', nutritionPer100g: { kcal: 520, proteins: 12.0, carbs: 40.0, fats: 35.0 }, defaultServingG: 30, unit: 'g', emoji: '🍬' },
  { id: 'hip-palmera-chocolate', name: 'Palmera de Chocolate', brand: 'Hipercor', supermarket: 'hipercor', category: 'dulces', nutritionPer100g: { kcal: 435, proteins: 5.0, carbs: 55.0, fats: 22.0 }, defaultServingG: 80, unit: 'g', emoji: '🍩' },

  // --- Conservas ---
  { id: 'hip-bonito-norte', name: 'Bonito del Norte en Aceite', brand: 'El Corte Inglés', supermarket: 'hipercor', category: 'conservas', nutritionPer100g: { kcal: 220, proteins: 25.0, carbs: 0.0, fats: 13.0 }, defaultServingG: 80, unit: 'g', emoji: '🐟' },
  { id: 'hip-berberechos', name: 'Berberechos al Natural', brand: 'El Corte Inglés', supermarket: 'hipercor', category: 'conservas', nutritionPer100g: { kcal: 70, proteins: 12.0, carbs: 2.0, fats: 1.5 }, defaultServingG: 60, unit: 'g', emoji: '🦪' },
  { id: 'hip-anchoas', name: 'Anchoas en Aceite de Oliva', brand: 'El Corte Inglés', supermarket: 'hipercor', category: 'conservas', nutritionPer100g: { kcal: 210, proteins: 25.0, carbs: 0.0, fats: 12.0 }, defaultServingG: 30, unit: 'g', emoji: '🐟' },

  // --- Huevos ---
  { id: 'hip-huevos-camperos-xl', name: 'Huevos Camperos XL', brand: 'Hipercor', supermarket: 'hipercor', category: 'huevos', nutritionPer100g: { kcal: 155, proteins: 13.0, carbs: 1.1, fats: 11.0 }, defaultServingG: 70, unit: 'g', emoji: '🥚' },

  // --- Aceites ---
  { id: 'hip-aceite-picual', name: 'Aceite de Oliva Virgen Extra Picual', brand: 'El Corte Inglés', supermarket: 'hipercor', category: 'aceites', nutritionPer100g: { kcal: 824, proteins: 0.0, carbs: 0.0, fats: 91.6 }, defaultServingG: 10, unit: 'ml', emoji: '🫒' },

  // --- Otros ---
  { id: 'hip-cafe-grano', name: 'Café en Grano Colombia', brand: 'El Corte Inglés', supermarket: 'hipercor', category: 'otros', nutritionPer100g: { kcal: 2, proteins: 0.1, carbs: 0.0, fats: 0.0 }, defaultServingG: 200, unit: 'ml', emoji: '☕' },
  { id: 'hip-te-verde', name: 'Té Verde', brand: 'Hipercor', supermarket: 'hipercor', category: 'otros', nutritionPer100g: { kcal: 1, proteins: 0.0, carbs: 0.0, fats: 0.0 }, defaultServingG: 200, unit: 'ml', emoji: '🍵' },

  // ═══════════════════════════════════════════
  // ██  BONPREU (BonPreu, BonÀrea)            ██
  // ═══════════════════════════════════════════

  // --- Lácteos ---
  { id: 'bp-leche-semi', name: 'Llet Semidesnatada', brand: 'BonPreu', supermarket: 'bonpreu', category: 'lacteos', nutritionPer100g: { kcal: 46, proteins: 3.2, carbs: 4.8, fats: 1.6 }, defaultServingG: 250, unit: 'ml', emoji: '🥛' },
  { id: 'bp-yogur-griego', name: 'Iogurt Grec Natural', brand: 'BonPreu', supermarket: 'bonpreu', category: 'lacteos', nutritionPer100g: { kcal: 112, proteins: 3.6, carbs: 4.6, fats: 8.5 }, defaultServingG: 125, unit: 'g', emoji: '🫙' },
  { id: 'bp-mato', name: 'Mató', brand: 'BonPreu', supermarket: 'bonpreu', category: 'lacteos', nutritionPer100g: { kcal: 176, proteins: 11.0, carbs: 2.5, fats: 14.0 }, defaultServingG: 75, unit: 'g', emoji: '🧀' },
  { id: 'bp-queso-emmental', name: 'Formatge Emmental', brand: 'BonPreu', supermarket: 'bonpreu', category: 'lacteos', nutritionPer100g: { kcal: 370, proteins: 27.0, carbs: 0.5, fats: 29.0 }, defaultServingG: 30, unit: 'g', emoji: '🧀' },

  // --- Carnes ---
  { id: 'bp-pechuga-pavo', name: 'Pit de Gall Dindi', brand: 'BonÀrea', supermarket: 'bonpreu', category: 'carnes', nutritionPer100g: { kcal: 107, proteins: 24.0, carbs: 0.0, fats: 1.0 }, defaultServingG: 150, unit: 'g', emoji: '🍗' },
  { id: 'bp-carne-picada', name: 'Carn Picada de Vedella', brand: 'BonÀrea', supermarket: 'bonpreu', category: 'carnes', nutritionPer100g: { kcal: 175, proteins: 20.0, carbs: 0.0, fats: 10.0 }, defaultServingG: 150, unit: 'g', emoji: '🥩' },
  { id: 'bp-butifarra-fresca', name: 'Butifarra Fresca', brand: 'BonÀrea', supermarket: 'bonpreu', category: 'carnes', nutritionPer100g: { kcal: 270, proteins: 15.0, carbs: 1.0, fats: 23.0 }, defaultServingG: 100, unit: 'g', emoji: '🌭' },
  { id: 'bp-conejo', name: 'Conill', brand: 'BonÀrea', supermarket: 'bonpreu', category: 'carnes', nutritionPer100g: { kcal: 136, proteins: 20.0, carbs: 0.0, fats: 6.0 }, defaultServingG: 150, unit: 'g', emoji: '🐇' },

  // --- Pescados ---
  { id: 'bp-sardina-fresca', name: 'Sardina Fresca', brand: 'BonPreu', supermarket: 'bonpreu', category: 'pescados', nutritionPer100g: { kcal: 174, proteins: 21.0, carbs: 0.0, fats: 10.0 }, defaultServingG: 100, unit: 'g', emoji: '🐟' },
  { id: 'bp-sepia', name: 'Sípia', brand: 'BonPreu', supermarket: 'bonpreu', category: 'pescados', nutritionPer100g: { kcal: 79, proteins: 16.0, carbs: 1.0, fats: 0.7 }, defaultServingG: 150, unit: 'g', emoji: '🦑' },
  { id: 'bp-trucha', name: 'Truita', brand: 'BonPreu', supermarket: 'bonpreu', category: 'pescados', nutritionPer100g: { kcal: 119, proteins: 20.0, carbs: 0.0, fats: 4.0 }, defaultServingG: 150, unit: 'g', emoji: '🐟' },

  // --- Frutas ---
  { id: 'bp-pera', name: 'Peres Conference', brand: 'BonPreu', supermarket: 'bonpreu', category: 'frutas', nutritionPer100g: { kcal: 57, proteins: 0.4, carbs: 12.0, fats: 0.1 }, defaultServingG: 170, unit: 'g', emoji: '🍐' },
  { id: 'bp-mandarinas', name: 'Mandarines', brand: 'BonPreu', supermarket: 'bonpreu', category: 'frutas', nutritionPer100g: { kcal: 53, proteins: 0.8, carbs: 11.5, fats: 0.3 }, defaultServingG: 80, unit: 'g', emoji: '🍊' },

  // --- Verduras ---
  { id: 'bp-mongeta-tendra', name: 'Mongeta Tendra', brand: 'BonPreu', supermarket: 'bonpreu', category: 'verduras', nutritionPer100g: { kcal: 31, proteins: 1.8, carbs: 4.2, fats: 0.1 }, defaultServingG: 150, unit: 'g', emoji: '🫛' },
  { id: 'bp-alberginia', name: 'Albergínia', brand: 'BonPreu', supermarket: 'bonpreu', category: 'verduras', nutritionPer100g: { kcal: 25, proteins: 1.0, carbs: 3.5, fats: 0.2 }, defaultServingG: 200, unit: 'g', emoji: '🍆' },

  // --- Cereales ---
  { id: 'bp-fideus', name: 'Fideus Nº2', brand: 'BonPreu', supermarket: 'bonpreu', category: 'cereales', nutritionPer100g: { kcal: 356, proteins: 12.0, carbs: 72.0, fats: 1.5 }, defaultServingG: 80, unit: 'g', emoji: '🍜' },
  { id: 'bp-arroz-integral', name: 'Arròs Integral', brand: 'BonPreu', supermarket: 'bonpreu', category: 'cereales', nutritionPer100g: { kcal: 350, proteins: 7.5, carbs: 74.0, fats: 2.2 }, defaultServingG: 80, unit: 'g', emoji: '🍚' },

  // --- Bebidas ---
  { id: 'bp-cerveza-artesana', name: 'Cervesa Artesana', brand: 'BonPreu', supermarket: 'bonpreu', category: 'bebidas', nutritionPer100g: { kcal: 45, proteins: 0.4, carbs: 3.8, fats: 0.0 }, defaultServingG: 330, unit: 'ml', emoji: '🍺' },
  { id: 'bp-zumo-manzana', name: 'Suc de Poma', brand: 'BonPreu', supermarket: 'bonpreu', category: 'bebidas', nutritionPer100g: { kcal: 46, proteins: 0.1, carbs: 10.5, fats: 0.1 }, defaultServingG: 250, unit: 'ml', emoji: '🍎' },
  { id: 'bp-agua-font-vella', name: 'Aigua Mineral', brand: 'BonPreu', supermarket: 'bonpreu', category: 'bebidas', nutritionPer100g: { kcal: 0, proteins: 0.0, carbs: 0.0, fats: 0.0 }, defaultServingG: 500, unit: 'ml', emoji: '💧' },

  // --- Congelados ---
  { id: 'bp-canelons', name: 'Canelons de Carn', brand: 'BonPreu', supermarket: 'bonpreu', category: 'congelados', nutritionPer100g: { kcal: 155, proteins: 8.0, carbs: 15.0, fats: 7.0 }, defaultServingG: 250, unit: 'g', emoji: '🍝' },
  { id: 'bp-patatas-bravas', name: 'Patates Braves', brand: 'BonPreu', supermarket: 'bonpreu', category: 'congelados', nutritionPer100g: { kcal: 170, proteins: 2.5, carbs: 25.0, fats: 7.0 }, defaultServingG: 150, unit: 'g', emoji: '🍟' },
  { id: 'bp-calamares-romana', name: 'Calamars a la Romana', brand: 'BonPreu', supermarket: 'bonpreu', category: 'congelados', nutritionPer100g: { kcal: 195, proteins: 10.0, carbs: 18.0, fats: 9.0 }, defaultServingG: 100, unit: 'g', emoji: '🦑' },

  // --- Embutidos ---
  { id: 'bp-llonganissa', name: 'Llonganissa Seca', brand: 'BonÀrea', supermarket: 'bonpreu', category: 'embutidos', nutritionPer100g: { kcal: 420, proteins: 25.0, carbs: 2.0, fats: 35.0 }, defaultServingG: 30, unit: 'g', emoji: '🌭' },
  { id: 'bp-pernil-dolc', name: 'Pernil Dolç', brand: 'BonÀrea', supermarket: 'bonpreu', category: 'embutidos', nutritionPer100g: { kcal: 115, proteins: 18.0, carbs: 1.5, fats: 4.0 }, defaultServingG: 40, unit: 'g', emoji: '🍖' },

  // --- Salsas ---
  { id: 'bp-sofregit', name: 'Sofregit de Tomàquet', brand: 'BonPreu', supermarket: 'bonpreu', category: 'salsas', nutritionPer100g: { kcal: 72, proteins: 1.0, carbs: 8.0, fats: 3.5 }, defaultServingG: 50, unit: 'g', emoji: '🍅' },
  { id: 'bp-romesco', name: 'Salsa Romesco', brand: 'BonPreu', supermarket: 'bonpreu', category: 'salsas', nutritionPer100g: { kcal: 200, proteins: 4.0, carbs: 12.0, fats: 15.0 }, defaultServingG: 30, unit: 'g', emoji: '🌶️' },

  // --- Dulces ---
  { id: 'bp-coca-llardons', name: 'Coca de Llardons', brand: 'BonPreu', supermarket: 'bonpreu', category: 'dulces', nutritionPer100g: { kcal: 400, proteins: 6.0, carbs: 50.0, fats: 20.0 }, defaultServingG: 80, unit: 'g', emoji: '🍰' },
  { id: 'bp-crema-catalana', name: 'Crema Catalana', brand: 'BonPreu', supermarket: 'bonpreu', category: 'dulces', nutritionPer100g: { kcal: 180, proteins: 4.0, carbs: 22.0, fats: 8.5 }, defaultServingG: 100, unit: 'g', emoji: '🍮' },

  // --- Conservas ---
  { id: 'bp-tonyina-oli', name: 'Tonyina en Oli d\'Oliva', brand: 'BonPreu', supermarket: 'bonpreu', category: 'conservas', nutritionPer100g: { kcal: 198, proteins: 26.0, carbs: 0.0, fats: 10.5 }, defaultServingG: 52, unit: 'g', emoji: '🐟' },
  { id: 'bp-olives-arbequines', name: 'Olives Arbequines', brand: 'BonPreu', supermarket: 'bonpreu', category: 'conservas', nutritionPer100g: { kcal: 145, proteins: 1.0, carbs: 1.0, fats: 15.0 }, defaultServingG: 25, unit: 'g', emoji: '🫒' },

  // --- Huevos ---
  { id: 'bp-ous-pagesia', name: 'Ous de Pagesia L', brand: 'BonÀrea', supermarket: 'bonpreu', category: 'huevos', nutritionPer100g: { kcal: 155, proteins: 13.0, carbs: 1.1, fats: 11.0 }, defaultServingG: 60, unit: 'g', emoji: '🥚' },

  // --- Aceites ---
  { id: 'bp-oli-arbequina', name: 'Oli d\'Oliva Verge Extra Arbequina', brand: 'BonPreu', supermarket: 'bonpreu', category: 'aceites', nutritionPer100g: { kcal: 824, proteins: 0.0, carbs: 0.0, fats: 91.6 }, defaultServingG: 10, unit: 'ml', emoji: '🫒' },

  // --- Otros ---
  { id: 'bp-mel-taronger', name: 'Mel de Taronger', brand: 'BonPreu', supermarket: 'bonpreu', category: 'otros', nutritionPer100g: { kcal: 320, proteins: 0.3, carbs: 80.0, fats: 0.0 }, defaultServingG: 15, unit: 'g', emoji: '🍯' },

  // ═══════════════════════════════════════════
  // ██  MAS Y MAS                             ██
  // ═══════════════════════════════════════════

  // --- Lácteos ---
  { id: 'mym2-leche-entera', name: 'Leche Entera', brand: 'Mas y Mas', supermarket: 'masymas', category: 'lacteos', nutritionPer100g: { kcal: 63, proteins: 3.1, carbs: 4.7, fats: 3.5 }, defaultServingG: 250, unit: 'ml', emoji: '🥛' },
  { id: 'mym2-yogur-griego', name: 'Yogur Griego', brand: 'Mas y Mas', supermarket: 'masymas', category: 'lacteos', nutritionPer100g: { kcal: 112, proteins: 3.6, carbs: 4.8, fats: 8.5 }, defaultServingG: 125, unit: 'g', emoji: '🫙' },
  { id: 'mym2-queso-manchego', name: 'Queso Manchego Semicurado', brand: 'Mas y Mas', supermarket: 'masymas', category: 'lacteos', nutritionPer100g: { kcal: 392, proteins: 26.0, carbs: 0.5, fats: 32.0 }, defaultServingG: 30, unit: 'g', emoji: '🧀' },

  // --- Carnes ---
  { id: 'mym2-carne-picada', name: 'Carne Picada Mixta', brand: 'Mas y Mas', supermarket: 'masymas', category: 'carnes', nutritionPer100g: { kcal: 218, proteins: 16.5, carbs: 0.5, fats: 17.0 }, defaultServingG: 150, unit: 'g', emoji: '🥩' },
  { id: 'mym2-chuletas-cordero', name: 'Chuletas de Cordero', brand: 'Mas y Mas', supermarket: 'masymas', category: 'carnes', nutritionPer100g: { kcal: 260, proteins: 18.0, carbs: 0.0, fats: 21.0 }, defaultServingG: 150, unit: 'g', emoji: '🥩' },

  // --- Pescados ---
  { id: 'mym2-boquerones', name: 'Boquerones Frescos', brand: 'Mas y Mas', supermarket: 'masymas', category: 'pescados', nutritionPer100g: { kcal: 131, proteins: 17.0, carbs: 0.0, fats: 7.0 }, defaultServingG: 100, unit: 'g', emoji: '🐟' },
  { id: 'mym2-mejillones', name: 'Mejillones Frescos', brand: 'Mas y Mas', supermarket: 'masymas', category: 'pescados', nutritionPer100g: { kcal: 86, proteins: 12.0, carbs: 3.7, fats: 2.0 }, defaultServingG: 100, unit: 'g', emoji: '🦪' },

  // --- Frutas ---
  { id: 'mym2-melocoton', name: 'Melocotones', brand: 'Mas y Mas', supermarket: 'masymas', category: 'frutas', nutritionPer100g: { kcal: 39, proteins: 0.9, carbs: 8.0, fats: 0.3 }, defaultServingG: 150, unit: 'g', emoji: '🍑' },

  // --- Verduras ---
  { id: 'mym2-judias-verdes', name: 'Judías Verdes', brand: 'Mas y Mas', supermarket: 'masymas', category: 'verduras', nutritionPer100g: { kcal: 31, proteins: 1.8, carbs: 4.2, fats: 0.1 }, defaultServingG: 150, unit: 'g', emoji: '🫛' },
  { id: 'mym2-puerro', name: 'Puerros', brand: 'Mas y Mas', supermarket: 'masymas', category: 'verduras', nutritionPer100g: { kcal: 61, proteins: 1.5, carbs: 12.0, fats: 0.3 }, defaultServingG: 100, unit: 'g', emoji: '🧅' },

  // --- Cereales ---
  { id: 'mym2-pasta-espiral', name: 'Pasta Espiral', brand: 'Mas y Mas', supermarket: 'masymas', category: 'cereales', nutritionPer100g: { kcal: 357, proteins: 12.5, carbs: 72.0, fats: 1.5 }, defaultServingG: 80, unit: 'g', emoji: '🍝' },

  // --- Legumbres ---
  { id: 'mym2-garbanzos', name: 'Garbanzos Secos', brand: 'Mas y Mas', supermarket: 'masymas', category: 'legumbres', nutritionPer100g: { kcal: 364, proteins: 19.0, carbs: 53.0, fats: 6.0 }, defaultServingG: 80, unit: 'g', emoji: '🫘' },

  // --- Bebidas ---
  { id: 'mym2-agua', name: 'Agua Mineral', brand: 'Mas y Mas', supermarket: 'masymas', category: 'bebidas', nutritionPer100g: { kcal: 0, proteins: 0.0, carbs: 0.0, fats: 0.0 }, defaultServingG: 500, unit: 'ml', emoji: '💧' },
  { id: 'mym2-zumo-piña', name: 'Zumo de Piña', brand: 'Mas y Mas', supermarket: 'masymas', category: 'bebidas', nutritionPer100g: { kcal: 50, proteins: 0.3, carbs: 12.0, fats: 0.1 }, defaultServingG: 250, unit: 'ml', emoji: '🍍' },
  { id: 'mym2-refresco-naranja', name: 'Refresco de Naranja', brand: 'Mas y Mas', supermarket: 'masymas', category: 'bebidas', nutritionPer100g: { kcal: 44, proteins: 0.0, carbs: 11.0, fats: 0.0 }, defaultServingG: 330, unit: 'ml', emoji: '🍊' },

  // --- Congelados ---
  { id: 'mym2-pizza-jamon', name: 'Pizza Jamón y Queso', brand: 'Mas y Mas', supermarket: 'masymas', category: 'congelados', nutritionPer100g: { kcal: 235, proteins: 10.0, carbs: 28.0, fats: 9.5 }, defaultServingG: 185, unit: 'g', emoji: '🍕' },
  { id: 'mym2-fingers-pescado', name: 'Fingers de Pescado', brand: 'Mas y Mas', supermarket: 'masymas', category: 'congelados', nutritionPer100g: { kcal: 210, proteins: 12.0, carbs: 20.0, fats: 9.0 }, defaultServingG: 100, unit: 'g', emoji: '🐟' },

  // --- Embutidos ---
  { id: 'mym2-chorizo-iberico', name: 'Chorizo Ibérico', brand: 'Mas y Mas', supermarket: 'masymas', category: 'embutidos', nutritionPer100g: { kcal: 390, proteins: 22.0, carbs: 2.0, fats: 33.0 }, defaultServingG: 30, unit: 'g', emoji: '🌭' },
  { id: 'mym2-pavo-lonchas', name: 'Pechuga de Pavo Lonchas', brand: 'Mas y Mas', supermarket: 'masymas', category: 'embutidos', nutritionPer100g: { kcal: 105, proteins: 17.0, carbs: 2.0, fats: 3.0 }, defaultServingG: 30, unit: 'g', emoji: '🍖' },

  // --- Panadería ---
  { id: 'mym2-pan-barra', name: 'Barra de Pan', brand: 'Mas y Mas', supermarket: 'masymas', category: 'panaderia', nutritionPer100g: { kcal: 260, proteins: 8.5, carbs: 50.0, fats: 1.5 }, defaultServingG: 60, unit: 'g', emoji: '🥖' },
  { id: 'mym2-pan-molde', name: 'Pan de Molde', brand: 'Mas y Mas', supermarket: 'masymas', category: 'panaderia', nutritionPer100g: { kcal: 265, proteins: 8.0, carbs: 48.0, fats: 4.0 }, defaultServingG: 30, unit: 'g', emoji: '🍞' },

  // --- Salsas ---
  { id: 'mym2-tomate-frito', name: 'Tomate Frito', brand: 'Mas y Mas', supermarket: 'masymas', category: 'salsas', nutritionPer100g: { kcal: 68, proteins: 1.2, carbs: 8.5, fats: 3.2 }, defaultServingG: 50, unit: 'g', emoji: '🍅' },
  { id: 'mym2-mayonesa', name: 'Mayonesa', brand: 'Mas y Mas', supermarket: 'masymas', category: 'salsas', nutritionPer100g: { kcal: 680, proteins: 1.0, carbs: 2.5, fats: 74.0 }, defaultServingG: 15, unit: 'g', emoji: '🥫' },

  // --- Dulces ---
  { id: 'mym2-galletas-maria', name: 'Galletas María', brand: 'Mas y Mas', supermarket: 'masymas', category: 'dulces', nutritionPer100g: { kcal: 450, proteins: 7.0, carbs: 73.0, fats: 14.0 }, defaultServingG: 10, unit: 'g', emoji: '🍪' },
  { id: 'mym2-chocolate-leche', name: 'Tableta Chocolate con Leche', brand: 'Mas y Mas', supermarket: 'masymas', category: 'dulces', nutritionPer100g: { kcal: 540, proteins: 7.5, carbs: 56.0, fats: 32.0 }, defaultServingG: 25, unit: 'g', emoji: '🍫' },

  // --- Conservas ---
  { id: 'mym2-atun-aceite', name: 'Atún en Aceite de Oliva', brand: 'Mas y Mas', supermarket: 'masymas', category: 'conservas', nutritionPer100g: { kcal: 198, proteins: 26.0, carbs: 0.0, fats: 10.5 }, defaultServingG: 52, unit: 'g', emoji: '🐟' },
  { id: 'mym2-tomate-pelado', name: 'Tomate Pelado Entero', brand: 'Mas y Mas', supermarket: 'masymas', category: 'conservas', nutritionPer100g: { kcal: 24, proteins: 1.0, carbs: 3.5, fats: 0.1 }, defaultServingG: 100, unit: 'g', emoji: '🍅' },
  { id: 'mym2-maiz-dulce', name: 'Maíz Dulce en Conserva', brand: 'Mas y Mas', supermarket: 'masymas', category: 'conservas', nutritionPer100g: { kcal: 79, proteins: 2.5, carbs: 14.0, fats: 1.0 }, defaultServingG: 70, unit: 'g', emoji: '🌽' },

  // --- Huevos ---
  { id: 'mym2-huevos-xl', name: 'Huevos XL', brand: 'Mas y Mas', supermarket: 'masymas', category: 'huevos', nutritionPer100g: { kcal: 155, proteins: 13.0, carbs: 1.1, fats: 11.0 }, defaultServingG: 70, unit: 'g', emoji: '🥚' },

  // --- Aceites ---
  { id: 'mym2-aceite-oliva', name: 'Aceite de Oliva Virgen Extra', brand: 'Mas y Mas', supermarket: 'masymas', category: 'aceites', nutritionPer100g: { kcal: 824, proteins: 0.0, carbs: 0.0, fats: 91.6 }, defaultServingG: 10, unit: 'ml', emoji: '🫒' },

  // --- Otros ---
  { id: 'mym2-cafe-natural', name: 'Café Molido Natural', brand: 'Mas y Mas', supermarket: 'masymas', category: 'otros', nutritionPer100g: { kcal: 2, proteins: 0.1, carbs: 0.0, fats: 0.0 }, defaultServingG: 200, unit: 'ml', emoji: '☕' },
  { id: 'mym2-vinagre-vino', name: 'Vinagre de Vino', brand: 'Mas y Mas', supermarket: 'masymas', category: 'otros', nutritionPer100g: { kcal: 22, proteins: 0.0, carbs: 0.6, fats: 0.0 }, defaultServingG: 10, unit: 'ml', emoji: '🍶' },

  // ══════════════════════════════════════════════════════════════
  // ▓▓  GENÉRICOS v1.4 — Alimentos naturales (FatSecret ES)     ▓▓
  // ▓▓  Ideal para recetas caseras (brand "Genérico")           ▓▓
  // ══════════════════════════════════════════════════════════════

  // ─── Frutas frescas ───
  { id: 'gen-manzana', name: 'Manzana', brand: 'Genérico', supermarket: 'otros', category: 'frutas', nutritionPer100g: { kcal: 52, proteins: 0.3, carbs: 14.0, fats: 0.2 }, defaultServingG: 180, unit: 'g', emoji: '🍎' },
  { id: 'gen-pera', name: 'Pera', brand: 'Genérico', supermarket: 'otros', category: 'frutas', nutritionPer100g: { kcal: 57, proteins: 0.4, carbs: 15.2, fats: 0.1 }, defaultServingG: 170, unit: 'g', emoji: '🍐' },
  { id: 'gen-platano', name: 'Plátano', brand: 'Genérico', supermarket: 'otros', category: 'frutas', nutritionPer100g: { kcal: 89, proteins: 1.1, carbs: 22.8, fats: 0.3 }, defaultServingG: 120, unit: 'g', emoji: '🍌' },
  { id: 'gen-naranja', name: 'Naranja', brand: 'Genérico', supermarket: 'otros', category: 'frutas', nutritionPer100g: { kcal: 47, proteins: 0.9, carbs: 11.8, fats: 0.1 }, defaultServingG: 180, unit: 'g', emoji: '🍊' },
  { id: 'gen-mandarina', name: 'Mandarina', brand: 'Genérico', supermarket: 'otros', category: 'frutas', nutritionPer100g: { kcal: 53, proteins: 0.8, carbs: 13.3, fats: 0.3 }, defaultServingG: 80, unit: 'g', emoji: '🍊' },
  { id: 'gen-fresa', name: 'Fresas', brand: 'Genérico', supermarket: 'otros', category: 'frutas', nutritionPer100g: { kcal: 32, proteins: 0.7, carbs: 7.7, fats: 0.3 }, defaultServingG: 150, unit: 'g', emoji: '🍓' },
  { id: 'gen-uva', name: 'Uvas', brand: 'Genérico', supermarket: 'otros', category: 'frutas', nutritionPer100g: { kcal: 69, proteins: 0.7, carbs: 18.0, fats: 0.2 }, defaultServingG: 125, unit: 'g', emoji: '🍇' },
  { id: 'gen-kiwi', name: 'Kiwi', brand: 'Genérico', supermarket: 'otros', category: 'frutas', nutritionPer100g: { kcal: 61, proteins: 1.1, carbs: 14.7, fats: 0.5 }, defaultServingG: 85, unit: 'g', emoji: '🥝' },
  { id: 'gen-pina', name: 'Piña', brand: 'Genérico', supermarket: 'otros', category: 'frutas', nutritionPer100g: { kcal: 50, proteins: 0.5, carbs: 13.1, fats: 0.1 }, defaultServingG: 150, unit: 'g', emoji: '🍍' },
  { id: 'gen-mango', name: 'Mango', brand: 'Genérico', supermarket: 'otros', category: 'frutas', nutritionPer100g: { kcal: 60, proteins: 0.8, carbs: 15.0, fats: 0.4 }, defaultServingG: 165, unit: 'g', emoji: '🥭' },
  { id: 'gen-sandia', name: 'Sandía', brand: 'Genérico', supermarket: 'otros', category: 'frutas', nutritionPer100g: { kcal: 30, proteins: 0.6, carbs: 7.6, fats: 0.2 }, defaultServingG: 200, unit: 'g', emoji: '🍉' },
  { id: 'gen-melon', name: 'Melón', brand: 'Genérico', supermarket: 'otros', category: 'frutas', nutritionPer100g: { kcal: 34, proteins: 0.8, carbs: 8.2, fats: 0.2 }, defaultServingG: 200, unit: 'g', emoji: '🍈' },
  { id: 'gen-melocoton', name: 'Melocotón', brand: 'Genérico', supermarket: 'otros', category: 'frutas', nutritionPer100g: { kcal: 39, proteins: 0.9, carbs: 9.5, fats: 0.3 }, defaultServingG: 150, unit: 'g', emoji: '🍑' },
  { id: 'gen-ciruela', name: 'Ciruela', brand: 'Genérico', supermarket: 'otros', category: 'frutas', nutritionPer100g: { kcal: 46, proteins: 0.7, carbs: 11.4, fats: 0.3 }, defaultServingG: 70, unit: 'g', emoji: '🍑' },
  { id: 'gen-cereza', name: 'Cerezas', brand: 'Genérico', supermarket: 'otros', category: 'frutas', nutritionPer100g: { kcal: 63, proteins: 1.1, carbs: 16.0, fats: 0.2 }, defaultServingG: 125, unit: 'g', emoji: '🍒' },
  { id: 'gen-aguacate', name: 'Aguacate', brand: 'Genérico', supermarket: 'otros', category: 'frutas', nutritionPer100g: { kcal: 160, proteins: 2.0, carbs: 8.5, fats: 14.7 }, defaultServingG: 150, unit: 'g', emoji: '🥑' },
  { id: 'gen-arandanos', name: 'Arándanos', brand: 'Genérico', supermarket: 'otros', category: 'frutas', nutritionPer100g: { kcal: 57, proteins: 0.7, carbs: 14.5, fats: 0.3 }, defaultServingG: 125, unit: 'g', emoji: '🫐' },
  { id: 'gen-frambuesa', name: 'Frambuesas', brand: 'Genérico', supermarket: 'otros', category: 'frutas', nutritionPer100g: { kcal: 52, proteins: 1.2, carbs: 11.9, fats: 0.7 }, defaultServingG: 125, unit: 'g', emoji: '🍇' },
  { id: 'gen-granada', name: 'Granada', brand: 'Genérico', supermarket: 'otros', category: 'frutas', nutritionPer100g: { kcal: 83, proteins: 1.7, carbs: 18.7, fats: 1.2 }, defaultServingG: 140, unit: 'g', emoji: '🍎' },
  { id: 'gen-papaya', name: 'Papaya', brand: 'Genérico', supermarket: 'otros', category: 'frutas', nutritionPer100g: { kcal: 43, proteins: 0.5, carbs: 10.8, fats: 0.3 }, defaultServingG: 150, unit: 'g', emoji: '🥭' },

  // ─── Verduras / Hortalizas ───
  { id: 'gen-tomate', name: 'Tomate', brand: 'Genérico', supermarket: 'otros', category: 'verduras', nutritionPer100g: { kcal: 18, proteins: 0.9, carbs: 3.9, fats: 0.2 }, defaultServingG: 125, unit: 'g', emoji: '🍅' },
  { id: 'gen-tomate-cherry', name: 'Tomate Cherry', brand: 'Genérico', supermarket: 'otros', category: 'verduras', nutritionPer100g: { kcal: 20, proteins: 1.0, carbs: 4.0, fats: 0.2 }, defaultServingG: 100, unit: 'g', emoji: '🍅' },
  { id: 'gen-lechuga', name: 'Lechuga', brand: 'Genérico', supermarket: 'otros', category: 'verduras', nutritionPer100g: { kcal: 15, proteins: 1.4, carbs: 2.9, fats: 0.2 }, defaultServingG: 80, unit: 'g', emoji: '🥬' },
  { id: 'gen-espinacas', name: 'Espinacas', brand: 'Genérico', supermarket: 'otros', category: 'verduras', nutritionPer100g: { kcal: 23, proteins: 2.9, carbs: 3.6, fats: 0.4 }, defaultServingG: 100, unit: 'g', emoji: '🥬' },
  { id: 'gen-rucula', name: 'Rúcula', brand: 'Genérico', supermarket: 'otros', category: 'verduras', nutritionPer100g: { kcal: 25, proteins: 2.6, carbs: 3.7, fats: 0.7 }, defaultServingG: 80, unit: 'g', emoji: '🥬' },
  { id: 'gen-canonigos', name: 'Canónigos', brand: 'Genérico', supermarket: 'otros', category: 'verduras', nutritionPer100g: { kcal: 21, proteins: 2.0, carbs: 3.6, fats: 0.4 }, defaultServingG: 80, unit: 'g', emoji: '🥬' },
  { id: 'gen-pepino', name: 'Pepino', brand: 'Genérico', supermarket: 'otros', category: 'verduras', nutritionPer100g: { kcal: 16, proteins: 0.7, carbs: 3.6, fats: 0.1 }, defaultServingG: 100, unit: 'g', emoji: '🥒' },
  { id: 'gen-pimiento-rojo', name: 'Pimiento Rojo', brand: 'Genérico', supermarket: 'otros', category: 'verduras', nutritionPer100g: { kcal: 31, proteins: 1.0, carbs: 6.0, fats: 0.3 }, defaultServingG: 150, unit: 'g', emoji: '🫑' },
  { id: 'gen-pimiento-verde', name: 'Pimiento Verde', brand: 'Genérico', supermarket: 'otros', category: 'verduras', nutritionPer100g: { kcal: 20, proteins: 0.9, carbs: 4.6, fats: 0.2 }, defaultServingG: 150, unit: 'g', emoji: '🫑' },
  { id: 'gen-cebolla', name: 'Cebolla', brand: 'Genérico', supermarket: 'otros', category: 'verduras', nutritionPer100g: { kcal: 40, proteins: 1.1, carbs: 9.3, fats: 0.1 }, defaultServingG: 100, unit: 'g', emoji: '🧅' },
  { id: 'gen-ajo', name: 'Ajo', brand: 'Genérico', supermarket: 'otros', category: 'verduras', nutritionPer100g: { kcal: 149, proteins: 6.4, carbs: 33.1, fats: 0.5 }, defaultServingG: 5, unit: 'g', emoji: '🧄' },
  { id: 'gen-zanahoria', name: 'Zanahoria', brand: 'Genérico', supermarket: 'otros', category: 'verduras', nutritionPer100g: { kcal: 41, proteins: 0.9, carbs: 9.6, fats: 0.2 }, defaultServingG: 80, unit: 'g', emoji: '🥕' },
  { id: 'gen-calabacin', name: 'Calabacín', brand: 'Genérico', supermarket: 'otros', category: 'verduras', nutritionPer100g: { kcal: 17, proteins: 1.2, carbs: 3.1, fats: 0.3 }, defaultServingG: 150, unit: 'g', emoji: '🥒' },
  { id: 'gen-berenjena', name: 'Berenjena', brand: 'Genérico', supermarket: 'otros', category: 'verduras', nutritionPer100g: { kcal: 25, proteins: 1.0, carbs: 5.9, fats: 0.2 }, defaultServingG: 150, unit: 'g', emoji: '🍆' },
  { id: 'gen-brocoli', name: 'Brócoli', brand: 'Genérico', supermarket: 'otros', category: 'verduras', nutritionPer100g: { kcal: 34, proteins: 2.8, carbs: 6.6, fats: 0.4 }, defaultServingG: 150, unit: 'g', emoji: '🥦' },
  { id: 'gen-coliflor', name: 'Coliflor', brand: 'Genérico', supermarket: 'otros', category: 'verduras', nutritionPer100g: { kcal: 25, proteins: 1.9, carbs: 5.0, fats: 0.3 }, defaultServingG: 150, unit: 'g', emoji: '🥦' },
  { id: 'gen-champinon', name: 'Champiñones', brand: 'Genérico', supermarket: 'otros', category: 'verduras', nutritionPer100g: { kcal: 22, proteins: 3.1, carbs: 3.3, fats: 0.3 }, defaultServingG: 100, unit: 'g', emoji: '🍄' },
  { id: 'gen-esparragos', name: 'Espárragos', brand: 'Genérico', supermarket: 'otros', category: 'verduras', nutritionPer100g: { kcal: 20, proteins: 2.2, carbs: 3.9, fats: 0.1 }, defaultServingG: 100, unit: 'g', emoji: '🥬' },
  { id: 'gen-alcachofa', name: 'Alcachofa', brand: 'Genérico', supermarket: 'otros', category: 'verduras', nutritionPer100g: { kcal: 47, proteins: 3.3, carbs: 10.5, fats: 0.2 }, defaultServingG: 120, unit: 'g', emoji: '🌿' },
  { id: 'gen-judias-verdes', name: 'Judías Verdes', brand: 'Genérico', supermarket: 'otros', category: 'verduras', nutritionPer100g: { kcal: 31, proteins: 1.8, carbs: 7.0, fats: 0.1 }, defaultServingG: 150, unit: 'g', emoji: '🫛' },
  { id: 'gen-maiz-dulce', name: 'Maíz Dulce', brand: 'Genérico', supermarket: 'otros', category: 'verduras', nutritionPer100g: { kcal: 86, proteins: 3.2, carbs: 19.0, fats: 1.2 }, defaultServingG: 100, unit: 'g', emoji: '🌽' },
  { id: 'gen-remolacha', name: 'Remolacha', brand: 'Genérico', supermarket: 'otros', category: 'verduras', nutritionPer100g: { kcal: 43, proteins: 1.6, carbs: 9.6, fats: 0.2 }, defaultServingG: 100, unit: 'g', emoji: '🥬' },
  { id: 'gen-apio', name: 'Apio', brand: 'Genérico', supermarket: 'otros', category: 'verduras', nutritionPer100g: { kcal: 16, proteins: 0.7, carbs: 3.0, fats: 0.2 }, defaultServingG: 100, unit: 'g', emoji: '🌿' },
  { id: 'gen-puerro', name: 'Puerro', brand: 'Genérico', supermarket: 'otros', category: 'verduras', nutritionPer100g: { kcal: 61, proteins: 1.5, carbs: 14.2, fats: 0.3 }, defaultServingG: 100, unit: 'g', emoji: '🥬' },

  // ─── Tubérculos y raíces ───
  { id: 'gen-patata', name: 'Patata', brand: 'Genérico', supermarket: 'otros', category: 'verduras', nutritionPer100g: { kcal: 77, proteins: 2.0, carbs: 17.5, fats: 0.1 }, defaultServingG: 200, unit: 'g', emoji: '🥔' },
  { id: 'gen-boniato', name: 'Boniato', brand: 'Genérico', supermarket: 'otros', category: 'verduras', nutritionPer100g: { kcal: 86, proteins: 1.6, carbs: 20.1, fats: 0.1 }, defaultServingG: 130, unit: 'g', emoji: '🍠' },

  // ─── Frutos secos ───
  { id: 'gen-almendras', name: 'Almendras', brand: 'Genérico', supermarket: 'otros', category: 'snacks', nutritionPer100g: { kcal: 579, proteins: 21.2, carbs: 21.6, fats: 49.9 }, defaultServingG: 25, unit: 'g', emoji: '🥜' },
  { id: 'gen-nueces', name: 'Nueces', brand: 'Genérico', supermarket: 'otros', category: 'snacks', nutritionPer100g: { kcal: 654, proteins: 15.2, carbs: 13.7, fats: 65.2 }, defaultServingG: 25, unit: 'g', emoji: '🥜' },
  { id: 'gen-pistachos', name: 'Pistachos', brand: 'Genérico', supermarket: 'otros', category: 'snacks', nutritionPer100g: { kcal: 560, proteins: 20.2, carbs: 27.2, fats: 45.3 }, defaultServingG: 25, unit: 'g', emoji: '🥜' },
  { id: 'gen-anacardos', name: 'Anacardos', brand: 'Genérico', supermarket: 'otros', category: 'snacks', nutritionPer100g: { kcal: 553, proteins: 18.2, carbs: 30.2, fats: 43.8 }, defaultServingG: 25, unit: 'g', emoji: '🥜' },
  { id: 'gen-cacahuete', name: 'Cacahuetes Tostados', brand: 'Genérico', supermarket: 'otros', category: 'snacks', nutritionPer100g: { kcal: 567, proteins: 25.8, carbs: 16.1, fats: 49.2 }, defaultServingG: 25, unit: 'g', emoji: '🥜' },
  { id: 'gen-avellanas', name: 'Avellanas', brand: 'Genérico', supermarket: 'otros', category: 'snacks', nutritionPer100g: { kcal: 628, proteins: 15.0, carbs: 16.7, fats: 60.8 }, defaultServingG: 25, unit: 'g', emoji: '🥜' },
  { id: 'gen-pinones', name: 'Piñones', brand: 'Genérico', supermarket: 'otros', category: 'snacks', nutritionPer100g: { kcal: 673, proteins: 13.7, carbs: 13.1, fats: 68.4 }, defaultServingG: 15, unit: 'g', emoji: '🌰' },
  { id: 'gen-pasas', name: 'Pasas', brand: 'Genérico', supermarket: 'otros', category: 'snacks', nutritionPer100g: { kcal: 299, proteins: 3.1, carbs: 79.2, fats: 0.5 }, defaultServingG: 30, unit: 'g', emoji: '🍇' },
  { id: 'gen-orejones', name: 'Orejones de Albaricoque', brand: 'Genérico', supermarket: 'otros', category: 'snacks', nutritionPer100g: { kcal: 241, proteins: 3.4, carbs: 62.6, fats: 0.5 }, defaultServingG: 40, unit: 'g', emoji: '🍑' },
  { id: 'gen-datiles', name: 'Dátiles', brand: 'Genérico', supermarket: 'otros', category: 'snacks', nutritionPer100g: { kcal: 277, proteins: 1.8, carbs: 75.0, fats: 0.2 }, defaultServingG: 25, unit: 'g', emoji: '🌴' },
  { id: 'gen-semillas-chia', name: 'Semillas de Chía', brand: 'Genérico', supermarket: 'otros', category: 'snacks', nutritionPer100g: { kcal: 486, proteins: 16.5, carbs: 42.1, fats: 30.7 }, defaultServingG: 15, unit: 'g', emoji: '🌱' },
  { id: 'gen-semillas-lino', name: 'Semillas de Lino', brand: 'Genérico', supermarket: 'otros', category: 'snacks', nutritionPer100g: { kcal: 534, proteins: 18.3, carbs: 28.9, fats: 42.2 }, defaultServingG: 15, unit: 'g', emoji: '🌱' },
  { id: 'gen-semillas-calabaza', name: 'Semillas de Calabaza', brand: 'Genérico', supermarket: 'otros', category: 'snacks', nutritionPer100g: { kcal: 559, proteins: 30.2, carbs: 10.7, fats: 49.0 }, defaultServingG: 15, unit: 'g', emoji: '🌱' },

  // ─── Legumbres (cocidas/secas) ───
  { id: 'gen-lentejas-cocidas', name: 'Lentejas Cocidas', brand: 'Genérico', supermarket: 'otros', category: 'legumbres', nutritionPer100g: { kcal: 116, proteins: 9.0, carbs: 20.1, fats: 0.4 }, defaultServingG: 200, unit: 'g', emoji: '🫘' },
  { id: 'gen-garbanzos-cocidos', name: 'Garbanzos Cocidos', brand: 'Genérico', supermarket: 'otros', category: 'legumbres', nutritionPer100g: { kcal: 164, proteins: 8.9, carbs: 27.4, fats: 2.6 }, defaultServingG: 200, unit: 'g', emoji: '🫘' },
  { id: 'gen-judias-cocidas', name: 'Alubias Blancas Cocidas', brand: 'Genérico', supermarket: 'otros', category: 'legumbres', nutritionPer100g: { kcal: 139, proteins: 9.7, carbs: 25.1, fats: 0.5 }, defaultServingG: 200, unit: 'g', emoji: '🫘' },
  { id: 'gen-soja-cocida', name: 'Soja Cocida', brand: 'Genérico', supermarket: 'otros', category: 'legumbres', nutritionPer100g: { kcal: 173, proteins: 16.6, carbs: 9.9, fats: 9.0 }, defaultServingG: 150, unit: 'g', emoji: '🫘' },
  { id: 'gen-guisantes-cocidos', name: 'Guisantes Cocidos', brand: 'Genérico', supermarket: 'otros', category: 'legumbres', nutritionPer100g: { kcal: 84, proteins: 5.4, carbs: 15.6, fats: 0.2 }, defaultServingG: 150, unit: 'g', emoji: '🟢' },

  // ─── Cereales / Granos ───
  { id: 'gen-arroz-blanco-cocido', name: 'Arroz Blanco Cocido', brand: 'Genérico', supermarket: 'otros', category: 'cereales', nutritionPer100g: { kcal: 130, proteins: 2.7, carbs: 28.2, fats: 0.3 }, defaultServingG: 150, unit: 'g', emoji: '🍚' },
  { id: 'gen-arroz-integral-cocido', name: 'Arroz Integral Cocido', brand: 'Genérico', supermarket: 'otros', category: 'cereales', nutritionPer100g: { kcal: 123, proteins: 2.9, carbs: 25.6, fats: 1.0 }, defaultServingG: 150, unit: 'g', emoji: '🍚' },
  { id: 'gen-pasta-cocida', name: 'Pasta Cocida', brand: 'Genérico', supermarket: 'otros', category: 'cereales', nutritionPer100g: { kcal: 158, proteins: 5.8, carbs: 30.9, fats: 0.9 }, defaultServingG: 200, unit: 'g', emoji: '🍝' },
  { id: 'gen-quinoa-cocida', name: 'Quinoa Cocida', brand: 'Genérico', supermarket: 'otros', category: 'cereales', nutritionPer100g: { kcal: 120, proteins: 4.4, carbs: 21.3, fats: 1.9 }, defaultServingG: 150, unit: 'g', emoji: '🌾' },
  { id: 'gen-cuscus-cocido', name: 'Cuscús Cocido', brand: 'Genérico', supermarket: 'otros', category: 'cereales', nutritionPer100g: { kcal: 112, proteins: 3.8, carbs: 23.2, fats: 0.2 }, defaultServingG: 150, unit: 'g', emoji: '🍚' },
  { id: 'gen-bulgur', name: 'Bulgur Cocido', brand: 'Genérico', supermarket: 'otros', category: 'cereales', nutritionPer100g: { kcal: 83, proteins: 3.1, carbs: 18.6, fats: 0.2 }, defaultServingG: 150, unit: 'g', emoji: '🌾' },
  { id: 'gen-avena-copos', name: 'Copos de Avena', brand: 'Genérico', supermarket: 'otros', category: 'cereales', nutritionPer100g: { kcal: 389, proteins: 16.9, carbs: 66.3, fats: 6.9 }, defaultServingG: 40, unit: 'g', emoji: '🥣' },
  { id: 'gen-harina-trigo', name: 'Harina de Trigo', brand: 'Genérico', supermarket: 'otros', category: 'cereales', nutritionPer100g: { kcal: 364, proteins: 10.3, carbs: 76.3, fats: 1.0 }, defaultServingG: 30, unit: 'g', emoji: '🌾' },
  { id: 'gen-harina-integral', name: 'Harina Integral', brand: 'Genérico', supermarket: 'otros', category: 'cereales', nutritionPer100g: { kcal: 340, proteins: 13.2, carbs: 71.0, fats: 2.5 }, defaultServingG: 30, unit: 'g', emoji: '🌾' },
  { id: 'gen-harina-maiz', name: 'Harina de Maíz', brand: 'Genérico', supermarket: 'otros', category: 'cereales', nutritionPer100g: { kcal: 361, proteins: 6.9, carbs: 76.9, fats: 3.9 }, defaultServingG: 30, unit: 'g', emoji: '🌽' },

  // ─── Pescado / Mariscos frescos ───
  { id: 'gen-atun-fresco', name: 'Atún Fresco', brand: 'Genérico', supermarket: 'otros', category: 'pescados', nutritionPer100g: { kcal: 144, proteins: 23.3, carbs: 0.0, fats: 4.9 }, defaultServingG: 130, unit: 'g', emoji: '🐟' },
  { id: 'gen-dorada', name: 'Dorada', brand: 'Genérico', supermarket: 'otros', category: 'pescados', nutritionPer100g: { kcal: 115, proteins: 20.0, carbs: 0.0, fats: 3.6 }, defaultServingG: 200, unit: 'g', emoji: '🐟' },
  { id: 'gen-lubina', name: 'Lubina', brand: 'Genérico', supermarket: 'otros', category: 'pescados', nutritionPer100g: { kcal: 118, proteins: 18.0, carbs: 0.0, fats: 4.5 }, defaultServingG: 200, unit: 'g', emoji: '🐟' },
  { id: 'gen-sardina', name: 'Sardinas Frescas', brand: 'Genérico', supermarket: 'otros', category: 'pescados', nutritionPer100g: { kcal: 208, proteins: 20.9, carbs: 0.0, fats: 11.5 }, defaultServingG: 150, unit: 'g', emoji: '🐟' },
  { id: 'gen-caballa', name: 'Caballa', brand: 'Genérico', supermarket: 'otros', category: 'pescados', nutritionPer100g: { kcal: 205, proteins: 18.6, carbs: 0.0, fats: 13.9 }, defaultServingG: 150, unit: 'g', emoji: '🐟' },
  { id: 'gen-boqueron', name: 'Boquerones', brand: 'Genérico', supermarket: 'otros', category: 'pescados', nutritionPer100g: { kcal: 131, proteins: 20.1, carbs: 0.0, fats: 4.8 }, defaultServingG: 150, unit: 'g', emoji: '🐟' },
  { id: 'gen-trucha', name: 'Trucha', brand: 'Genérico', supermarket: 'otros', category: 'pescados', nutritionPer100g: { kcal: 148, proteins: 20.8, carbs: 0.0, fats: 6.6 }, defaultServingG: 200, unit: 'g', emoji: '🐟' },
  { id: 'gen-rape', name: 'Rape', brand: 'Genérico', supermarket: 'otros', category: 'pescados', nutritionPer100g: { kcal: 76, proteins: 17.0, carbs: 0.0, fats: 0.7 }, defaultServingG: 150, unit: 'g', emoji: '🐟' },
  { id: 'gen-pulpo-cocido', name: 'Pulpo Cocido', brand: 'Genérico', supermarket: 'otros', category: 'pescados', nutritionPer100g: { kcal: 164, proteins: 29.8, carbs: 4.4, fats: 2.1 }, defaultServingG: 100, unit: 'g', emoji: '🐙' },
  { id: 'gen-mejillones', name: 'Mejillones', brand: 'Genérico', supermarket: 'otros', category: 'pescados', nutritionPer100g: { kcal: 86, proteins: 11.9, carbs: 3.7, fats: 2.2 }, defaultServingG: 100, unit: 'g', emoji: '🦪' },
  { id: 'gen-calamares', name: 'Calamares', brand: 'Genérico', supermarket: 'otros', category: 'pescados', nutritionPer100g: { kcal: 92, proteins: 15.6, carbs: 3.1, fats: 1.4 }, defaultServingG: 150, unit: 'g', emoji: '🦑' },
  { id: 'gen-langostino', name: 'Langostinos Cocidos', brand: 'Genérico', supermarket: 'otros', category: 'pescados', nutritionPer100g: { kcal: 99, proteins: 20.9, carbs: 0.0, fats: 1.5 }, defaultServingG: 100, unit: 'g', emoji: '🦐' },

  // ─── Carne ───
  { id: 'gen-pavo-pechuga', name: 'Pechuga de Pavo', brand: 'Genérico', supermarket: 'otros', category: 'carnes', nutritionPer100g: { kcal: 112, proteins: 24.1, carbs: 0.0, fats: 1.7 }, defaultServingG: 150, unit: 'g', emoji: '🦃' },
  { id: 'gen-cerdo-solomillo', name: 'Solomillo de Cerdo', brand: 'Genérico', supermarket: 'otros', category: 'carnes', nutritionPer100g: { kcal: 143, proteins: 21.5, carbs: 0.0, fats: 5.9 }, defaultServingG: 150, unit: 'g', emoji: '🥩' },
  { id: 'gen-cordero', name: 'Cordero', brand: 'Genérico', supermarket: 'otros', category: 'carnes', nutritionPer100g: { kcal: 294, proteins: 16.6, carbs: 0.0, fats: 25.0 }, defaultServingG: 150, unit: 'g', emoji: '🥩' },
  { id: 'gen-ternera-solomillo', name: 'Solomillo de Ternera', brand: 'Genérico', supermarket: 'otros', category: 'carnes', nutritionPer100g: { kcal: 158, proteins: 21.0, carbs: 0.0, fats: 8.0 }, defaultServingG: 150, unit: 'g', emoji: '🥩' },
  { id: 'gen-conejo', name: 'Conejo', brand: 'Genérico', supermarket: 'otros', category: 'carnes', nutritionPer100g: { kcal: 136, proteins: 20.0, carbs: 0.0, fats: 5.5 }, defaultServingG: 150, unit: 'g', emoji: '🐰' },

  // ─── Otros / Dulces naturales ───
  { id: 'gen-miel', name: 'Miel', brand: 'Genérico', supermarket: 'otros', category: 'dulces', nutritionPer100g: { kcal: 304, proteins: 0.3, carbs: 82.4, fats: 0.0 }, defaultServingG: 20, unit: 'g', emoji: '🍯' },
  { id: 'gen-azucar-blanco', name: 'Azúcar Blanco', brand: 'Genérico', supermarket: 'otros', category: 'dulces', nutritionPer100g: { kcal: 387, proteins: 0.0, carbs: 100.0, fats: 0.0 }, defaultServingG: 10, unit: 'g', emoji: '🍬' },
  { id: 'gen-azucar-moreno', name: 'Azúcar Moreno', brand: 'Genérico', supermarket: 'otros', category: 'dulces', nutritionPer100g: { kcal: 380, proteins: 0.1, carbs: 98.1, fats: 0.0 }, defaultServingG: 10, unit: 'g', emoji: '🍬' },
  { id: 'gen-cacao-puro', name: 'Cacao en Polvo Puro', brand: 'Genérico', supermarket: 'otros', category: 'dulces', nutritionPer100g: { kcal: 228, proteins: 19.6, carbs: 57.9, fats: 13.7 }, defaultServingG: 10, unit: 'g', emoji: '🍫' },
  { id: 'gen-levadura', name: 'Levadura Fresca', brand: 'Genérico', supermarket: 'otros', category: 'otros', nutritionPer100g: { kcal: 105, proteins: 12.7, carbs: 18.1, fats: 1.5 }, defaultServingG: 10, unit: 'g', emoji: '🫧' },
  { id: 'gen-vinagre-manzana', name: 'Vinagre de Manzana', brand: 'Genérico', supermarket: 'otros', category: 'otros', nutritionPer100g: { kcal: 22, proteins: 0.0, carbs: 0.9, fats: 0.0 }, defaultServingG: 15, unit: 'ml', emoji: '🍶' },
  { id: 'gen-sal', name: 'Sal', brand: 'Genérico', supermarket: 'otros', category: 'otros', nutritionPer100g: { kcal: 0, proteins: 0.0, carbs: 0.0, fats: 0.0 }, defaultServingG: 1, unit: 'g', emoji: '🧂' },
  { id: 'gen-pimienta-negra', name: 'Pimienta Negra', brand: 'Genérico', supermarket: 'otros', category: 'otros', nutritionPer100g: { kcal: 251, proteins: 10.4, carbs: 64.0, fats: 3.3 }, defaultServingG: 1, unit: 'g', emoji: '🌶️' },
  { id: 'gen-pan-integral', name: 'Pan Integral', brand: 'Genérico', supermarket: 'otros', category: 'panaderia', nutritionPer100g: { kcal: 247, proteins: 13.0, carbs: 41.3, fats: 3.4 }, defaultServingG: 30, unit: 'g', emoji: '🍞' },
  { id: 'gen-pan-blanco', name: 'Pan Blanco', brand: 'Genérico', supermarket: 'otros', category: 'panaderia', nutritionPer100g: { kcal: 266, proteins: 8.0, carbs: 49.0, fats: 3.5 }, defaultServingG: 30, unit: 'g', emoji: '🍞' },
  { id: 'gen-baguette', name: 'Baguette', brand: 'Genérico', supermarket: 'otros', category: 'panaderia', nutritionPer100g: { kcal: 272, proteins: 9.0, carbs: 54.0, fats: 1.5 }, defaultServingG: 50, unit: 'g', emoji: '🥖' },
  { id: 'gen-picos-pan', name: 'Picos de Pan', brand: 'Genérico', supermarket: 'otros', category: 'panaderia', nutritionPer100g: { kcal: 433, proteins: 10.0, carbs: 69.0, fats: 13.0 }, defaultServingG: 20, unit: 'g', emoji: '🍞' },
  { id: 'gen-hummus', name: 'Hummus', brand: 'Genérico', supermarket: 'otros', category: 'legumbres', nutritionPer100g: { kcal: 177, proteins: 4.9, carbs: 20.1, fats: 8.6 }, defaultServingG: 50, unit: 'g', emoji: '🫘' },
  { id: 'gen-tofu', name: 'Tofu', brand: 'Genérico', supermarket: 'otros', category: 'legumbres', nutritionPer100g: { kcal: 144, proteins: 15.7, carbs: 2.8, fats: 8.7 }, defaultServingG: 100, unit: 'g', emoji: '🧊' },
  { id: 'gen-tempeh', name: 'Tempeh', brand: 'Genérico', supermarket: 'otros', category: 'legumbres', nutritionPer100g: { kcal: 192, proteins: 20.3, carbs: 7.6, fats: 10.8 }, defaultServingG: 100, unit: 'g', emoji: '🧊' },
  { id: 'gen-seitan', name: 'Seitán', brand: 'Genérico', supermarket: 'otros', category: 'carnes', nutritionPer100g: { kcal: 121, proteins: 25.0, carbs: 4.0, fats: 1.0 }, defaultServingG: 100, unit: 'g', emoji: '🌱' },
];
