import { Product } from '@/types';

// ═══════════════════════════════════════════
// ██  LIDL                                 ██
// ═══════════════════════════════════════════

export const productsLidl: Product[] = [
  // --- Lácteos ---
  { id: 'lidl2-leche-entera', name: 'Leche Entera', brand: 'Milbona', supermarket: 'lidl', category: 'lacteos', nutritionPer100g: { kcal: 64, proteins: 3.2, carbs: 4.8, fats: 3.6 }, defaultServingG: 250, unit: 'ml', emoji: '🥛' },
  { id: 'lidl2-leche-semi', name: 'Leche Semidesnatada', brand: 'Milbona', supermarket: 'lidl', category: 'lacteos', nutritionPer100g: { kcal: 46, proteins: 3.2, carbs: 4.8, fats: 1.6 }, defaultServingG: 250, unit: 'ml', emoji: '🥛' },
  { id: 'lidl2-leche-desnatada', name: 'Leche Desnatada', brand: 'Milbona', supermarket: 'lidl', category: 'lacteos', nutritionPer100g: { kcal: 34, proteins: 3.4, carbs: 4.9, fats: 0.1 }, defaultServingG: 250, unit: 'ml', emoji: '🥛' },
  { id: 'lidl2-yogur-natural', name: 'Yogur Natural', brand: 'Milbona', supermarket: 'lidl', category: 'lacteos', nutritionPer100g: { kcal: 62, proteins: 3.8, carbs: 4.6, fats: 3.1 }, defaultServingG: 125, unit: 'g', emoji: '🫙' },
  { id: 'lidl2-yogur-griego', name: 'Yogur Griego Natural', brand: 'Milbona', supermarket: 'lidl', category: 'lacteos', nutritionPer100g: { kcal: 115, proteins: 3.6, carbs: 5.0, fats: 8.5 }, defaultServingG: 125, unit: 'g', emoji: '🫙' },
  { id: 'lidl2-yogur-proteinas', name: 'Yogur Proteínas', brand: 'Milbona', supermarket: 'lidl', category: 'lacteos', nutritionPer100g: { kcal: 65, proteins: 10.2, carbs: 3.8, fats: 0.8 }, defaultServingG: 150, unit: 'g', emoji: '🫙' },
  { id: 'lidl2-natillas-vainilla', name: 'Natillas de Vainilla', brand: 'Milbona', supermarket: 'lidl', category: 'lacteos', nutritionPer100g: { kcal: 114, proteins: 3.0, carbs: 16.5, fats: 3.8 }, defaultServingG: 125, unit: 'g', emoji: '🍮' },
  { id: 'lidl2-queso-fresco', name: 'Queso Fresco Batido 0%', brand: 'Milbona', supermarket: 'lidl', category: 'lacteos', nutritionPer100g: { kcal: 48, proteins: 7.8, carbs: 3.9, fats: 0.2 }, defaultServingG: 250, unit: 'g', emoji: '🧀' },
  { id: 'lidl2-queso-lonchas', name: 'Queso en Lonchas', brand: 'Milbona', supermarket: 'lidl', category: 'lacteos', nutritionPer100g: { kcal: 310, proteins: 21.5, carbs: 1.6, fats: 24.0 }, defaultServingG: 20, unit: 'g', emoji: '🧀' },
  { id: 'lidl2-queso-mozzarella', name: 'Mozzarella', brand: 'Milbona', supermarket: 'lidl', category: 'lacteos', nutritionPer100g: { kcal: 254, proteins: 18.0, carbs: 1.0, fats: 20.0 }, defaultServingG: 125, unit: 'g', emoji: '🧀' },
  { id: 'lidl2-queso-parmesano', name: 'Parmesano Rallado', brand: 'Milbona', supermarket: 'lidl', category: 'lacteos', nutritionPer100g: { kcal: 392, proteins: 35.0, carbs: 0.5, fats: 28.0 }, defaultServingG: 10, unit: 'g', emoji: '🧀' },
  { id: 'lidl2-queso-crema', name: 'Queso Crema', brand: 'Milbona', supermarket: 'lidl', category: 'lacteos', nutritionPer100g: { kcal: 235, proteins: 5.5, carbs: 3.2, fats: 23.0 }, defaultServingG: 30, unit: 'g', emoji: '🧀' },
  { id: 'lidl2-mantequilla', name: 'Mantequilla', brand: 'Milbona', supermarket: 'lidl', category: 'lacteos', nutritionPer100g: { kcal: 720, proteins: 0.8, carbs: 0.1, fats: 82.0 }, defaultServingG: 10, unit: 'g', emoji: '🧈' },
  { id: 'lidl2-nata-cocinar', name: 'Nata para Cocinar', brand: 'Milbona', supermarket: 'lidl', category: 'lacteos', nutritionPer100g: { kcal: 132, proteins: 2.4, carbs: 3.6, fats: 12.0 }, defaultServingG: 50, unit: 'ml', emoji: '🍶' },
  { id: 'lidl2-kefir-natural', name: 'Kéfir Natural', brand: 'Milbona', supermarket: 'lidl', category: 'lacteos', nutritionPer100g: { kcal: 55, proteins: 3.3, carbs: 4.0, fats: 2.5 }, defaultServingG: 200, unit: 'ml', emoji: '🥛' },
  { id: 'lidl2-batido-chocolate', name: 'Batido de Chocolate', brand: 'Milbona', supermarket: 'lidl', category: 'lacteos', nutritionPer100g: { kcal: 78, proteins: 3.0, carbs: 11.5, fats: 1.8 }, defaultServingG: 200, unit: 'ml', emoji: '🥛' },
  { id: 'lidl2-bebida-avena', name: 'Bebida de Avena', brand: 'Vemondo', supermarket: 'lidl', category: 'lacteos', nutritionPer100g: { kcal: 45, proteins: 0.3, carbs: 6.7, fats: 1.5 }, defaultServingG: 250, unit: 'ml', emoji: '🥛' },
  { id: 'lidl2-bebida-soja', name: 'Bebida de Soja', brand: 'Vemondo', supermarket: 'lidl', category: 'lacteos', nutritionPer100g: { kcal: 42, proteins: 3.5, carbs: 2.5, fats: 1.8 }, defaultServingG: 250, unit: 'ml', emoji: '🥛' },

  // --- Carnes ---
  { id: 'lidl2-pechuga-pollo', name: 'Pechuga de Pollo', brand: 'Realvalle', supermarket: 'lidl', category: 'carnes', nutritionPer100g: { kcal: 112, proteins: 23.5, carbs: 0.0, fats: 1.5 }, defaultServingG: 150, unit: 'g', emoji: '🍗' },
  { id: 'lidl2-muslo-pollo', name: 'Muslo de Pollo', brand: 'Realvalle', supermarket: 'lidl', category: 'carnes', nutritionPer100g: { kcal: 175, proteins: 17.5, carbs: 0.0, fats: 11.5 }, defaultServingG: 150, unit: 'g', emoji: '🍗' },
  { id: 'lidl2-filete-ternera', name: 'Filete de Ternera', brand: 'Realvalle', supermarket: 'lidl', category: 'carnes', nutritionPer100g: { kcal: 133, proteins: 21.5, carbs: 0.0, fats: 5.2 }, defaultServingG: 150, unit: 'g', emoji: '🥩' },
  { id: 'lidl2-carne-picada-mixta', name: 'Carne Picada Mixta', brand: 'Realvalle', supermarket: 'lidl', category: 'carnes', nutritionPer100g: { kcal: 218, proteins: 16.5, carbs: 0.5, fats: 16.5 }, defaultServingG: 150, unit: 'g', emoji: '🥩' },
  { id: 'lidl2-hamburguesa-vacuno', name: 'Hamburguesa de Vacuno', brand: 'Realvalle', supermarket: 'lidl', category: 'carnes', nutritionPer100g: { kcal: 225, proteins: 16.0, carbs: 3.5, fats: 16.0 }, defaultServingG: 100, unit: 'g', emoji: '🍔' },
  { id: 'lidl2-lomo-cerdo', name: 'Lomo de Cerdo', brand: 'Realvalle', supermarket: 'lidl', category: 'carnes', nutritionPer100g: { kcal: 145, proteins: 22.5, carbs: 0.0, fats: 6.0 }, defaultServingG: 150, unit: 'g', emoji: '🥩' },
  { id: 'lidl2-chuleta-cerdo', name: 'Chuleta de Cerdo', brand: 'Realvalle', supermarket: 'lidl', category: 'carnes', nutritionPer100g: { kcal: 210, proteins: 19.0, carbs: 0.0, fats: 14.5 }, defaultServingG: 150, unit: 'g', emoji: '🥩' },
  { id: 'lidl2-pechuga-pavo', name: 'Pechuga de Pavo', brand: 'Realvalle', supermarket: 'lidl', category: 'carnes', nutritionPer100g: { kcal: 107, proteins: 24.0, carbs: 0.0, fats: 1.0 }, defaultServingG: 150, unit: 'g', emoji: '🍗' },
  { id: 'lidl2-albondigas-mixtas', name: 'Albóndigas Mixtas', brand: 'Realvalle', supermarket: 'lidl', category: 'carnes', nutritionPer100g: { kcal: 195, proteins: 14.0, carbs: 6.0, fats: 12.5 }, defaultServingG: 150, unit: 'g', emoji: '🧆' },
  { id: 'lidl2-salchichas-cerdo', name: 'Salchichas de Cerdo', brand: 'Realvalle', supermarket: 'lidl', category: 'carnes', nutritionPer100g: { kcal: 265, proteins: 13.0, carbs: 2.0, fats: 22.5 }, defaultServingG: 100, unit: 'g', emoji: '🌭' },

  // --- Pescados ---
  { id: 'lidl2-salmon-fresco', name: 'Salmón Fresco', brand: 'Ocean Sea', supermarket: 'lidl', category: 'pescados', nutritionPer100g: { kcal: 206, proteins: 20.0, carbs: 0.0, fats: 13.5 }, defaultServingG: 125, unit: 'g', emoji: '🐟' },
  { id: 'lidl2-merluza-filetes', name: 'Merluza en Filetes', brand: 'Ocean Sea', supermarket: 'lidl', category: 'pescados', nutritionPer100g: { kcal: 80, proteins: 17.0, carbs: 0.0, fats: 1.2 }, defaultServingG: 150, unit: 'g', emoji: '🐟' },
  { id: 'lidl2-gambas-peladas', name: 'Gambas Peladas', brand: 'Ocean Sea', supermarket: 'lidl', category: 'pescados', nutritionPer100g: { kcal: 85, proteins: 18.0, carbs: 0.5, fats: 1.0 }, defaultServingG: 100, unit: 'g', emoji: '🦐' },
  { id: 'lidl2-langostinos', name: 'Langostinos', brand: 'Ocean Sea', supermarket: 'lidl', category: 'pescados', nutritionPer100g: { kcal: 90, proteins: 19.0, carbs: 0.3, fats: 1.2 }, defaultServingG: 100, unit: 'g', emoji: '🦐' },
  { id: 'lidl2-bacalao-fresco', name: 'Bacalao Fresco', brand: 'Ocean Sea', supermarket: 'lidl', category: 'pescados', nutritionPer100g: { kcal: 78, proteins: 17.5, carbs: 0.0, fats: 0.7 }, defaultServingG: 150, unit: 'g', emoji: '🐟' },
  { id: 'lidl2-dorada', name: 'Dorada', brand: 'Ocean Sea', supermarket: 'lidl', category: 'pescados', nutritionPer100g: { kcal: 96, proteins: 19.0, carbs: 0.0, fats: 2.0 }, defaultServingG: 200, unit: 'g', emoji: '🐟' },
  { id: 'lidl2-mejillones-vapor', name: 'Mejillones al Vapor', brand: 'Ocean Sea', supermarket: 'lidl', category: 'pescados', nutritionPer100g: { kcal: 86, proteins: 12.0, carbs: 3.7, fats: 2.2 }, defaultServingG: 100, unit: 'g', emoji: '🦪' },
  { id: 'lidl2-calamares', name: 'Calamares', brand: 'Ocean Sea', supermarket: 'lidl', category: 'pescados', nutritionPer100g: { kcal: 92, proteins: 15.6, carbs: 3.1, fats: 1.4 }, defaultServingG: 100, unit: 'g', emoji: '🦑' },

  // --- Embutidos ---
  { id: 'lidl2-jamon-serrano', name: 'Jamón Serrano', brand: 'Dulano', supermarket: 'lidl', category: 'embutidos', nutritionPer100g: { kcal: 241, proteins: 31.0, carbs: 0.0, fats: 13.0 }, defaultServingG: 30, unit: 'g', emoji: '🥓' },
  { id: 'lidl2-jamon-cocido', name: 'Jamón Cocido Extra', brand: 'Dulano', supermarket: 'lidl', category: 'embutidos', nutritionPer100g: { kcal: 105, proteins: 18.0, carbs: 1.2, fats: 3.5 }, defaultServingG: 40, unit: 'g', emoji: '🥓' },
  { id: 'lidl2-pavo-lonchas', name: 'Pavo en Lonchas', brand: 'Dulano', supermarket: 'lidl', category: 'embutidos', nutritionPer100g: { kcal: 95, proteins: 16.5, carbs: 1.5, fats: 2.5 }, defaultServingG: 40, unit: 'g', emoji: '🥓' },
  { id: 'lidl2-chorizo-extra', name: 'Chorizo Extra', brand: 'Dulano', supermarket: 'lidl', category: 'embutidos', nutritionPer100g: { kcal: 385, proteins: 22.0, carbs: 2.0, fats: 32.0 }, defaultServingG: 30, unit: 'g', emoji: '🌶️' },
  { id: 'lidl2-salchichon', name: 'Salchichón Extra', brand: 'Dulano', supermarket: 'lidl', category: 'embutidos', nutritionPer100g: { kcal: 395, proteins: 24.0, carbs: 1.5, fats: 33.0 }, defaultServingG: 30, unit: 'g', emoji: '🥓' },
  { id: 'lidl2-fuet', name: 'Fuet Extra', brand: 'Dulano', supermarket: 'lidl', category: 'embutidos', nutritionPer100g: { kcal: 420, proteins: 26.0, carbs: 1.0, fats: 35.0 }, defaultServingG: 25, unit: 'g', emoji: '🥓' },
  { id: 'lidl2-bacon', name: 'Bacon Ahumado', brand: 'Dulano', supermarket: 'lidl', category: 'embutidos', nutritionPer100g: { kcal: 300, proteins: 15.0, carbs: 0.5, fats: 27.0 }, defaultServingG: 30, unit: 'g', emoji: '🥓' },
  { id: 'lidl2-mortadela', name: 'Mortadela', brand: 'Dulano', supermarket: 'lidl', category: 'embutidos', nutritionPer100g: { kcal: 288, proteins: 14.0, carbs: 3.0, fats: 24.0 }, defaultServingG: 30, unit: 'g', emoji: '🥓' },

  // --- Panadería ---
  { id: 'lidl2-pan-molde', name: 'Pan de Molde', brand: 'Snack Day', supermarket: 'lidl', category: 'panaderia', nutritionPer100g: { kcal: 260, proteins: 8.0, carbs: 48.0, fats: 3.5 }, defaultServingG: 30, unit: 'g', emoji: '🍞' },
  { id: 'lidl2-pan-integral', name: 'Pan de Molde Integral', brand: 'Snack Day', supermarket: 'lidl', category: 'panaderia', nutritionPer100g: { kcal: 245, proteins: 9.0, carbs: 42.0, fats: 3.8 }, defaultServingG: 30, unit: 'g', emoji: '🍞' },
  { id: 'lidl2-baguette', name: 'Baguette', brand: 'Snack Day', supermarket: 'lidl', category: 'panaderia', nutritionPer100g: { kcal: 270, proteins: 9.0, carbs: 52.0, fats: 1.5 }, defaultServingG: 60, unit: 'g', emoji: '🥖' },
  { id: 'lidl2-tostadas', name: 'Tostadas', brand: 'Snack Day', supermarket: 'lidl', category: 'panaderia', nutritionPer100g: { kcal: 385, proteins: 11.0, carbs: 72.0, fats: 5.0 }, defaultServingG: 10, unit: 'g', emoji: '🍞' },
  { id: 'lidl2-croissants', name: 'Croissants', brand: 'Snack Day', supermarket: 'lidl', category: 'panaderia', nutritionPer100g: { kcal: 406, proteins: 7.5, carbs: 45.0, fats: 22.0 }, defaultServingG: 45, unit: 'g', emoji: '🥐' },
  { id: 'lidl2-tortillas-trigo', name: 'Tortillas de Trigo', brand: 'Snack Day', supermarket: 'lidl', category: 'panaderia', nutritionPer100g: { kcal: 310, proteins: 8.0, carbs: 50.0, fats: 8.5 }, defaultServingG: 60, unit: 'g', emoji: '🫓' },
  { id: 'lidl2-magdalenas', name: 'Magdalenas', brand: 'Snack Day', supermarket: 'lidl', category: 'panaderia', nutritionPer100g: { kcal: 410, proteins: 5.5, carbs: 52.0, fats: 20.0 }, defaultServingG: 35, unit: 'g', emoji: '🧁' },

  // --- Cereales y Pasta ---
  { id: 'lidl2-arroz-blanco', name: 'Arroz Blanco', brand: 'Deluxe', supermarket: 'lidl', category: 'cereales', nutritionPer100g: { kcal: 350, proteins: 7.0, carbs: 78.0, fats: 0.5 }, defaultServingG: 75, unit: 'g', emoji: '🍚' },
  { id: 'lidl2-arroz-integral', name: 'Arroz Integral', brand: 'Deluxe', supermarket: 'lidl', category: 'cereales', nutritionPer100g: { kcal: 345, proteins: 7.5, carbs: 73.0, fats: 2.5 }, defaultServingG: 75, unit: 'g', emoji: '🍚' },
  { id: 'lidl2-macarrones', name: 'Macarrones', brand: 'Deluxe', supermarket: 'lidl', category: 'cereales', nutritionPer100g: { kcal: 355, proteins: 12.5, carbs: 72.0, fats: 1.5 }, defaultServingG: 80, unit: 'g', emoji: '🍝' },
  { id: 'lidl2-espaguetis', name: 'Espaguetis', brand: 'Deluxe', supermarket: 'lidl', category: 'cereales', nutritionPer100g: { kcal: 355, proteins: 12.5, carbs: 72.0, fats: 1.5 }, defaultServingG: 80, unit: 'g', emoji: '🍝' },
  { id: 'lidl2-avena-copos', name: 'Copos de Avena', brand: 'Deluxe', supermarket: 'lidl', category: 'cereales', nutritionPer100g: { kcal: 367, proteins: 13.0, carbs: 58.0, fats: 7.0 }, defaultServingG: 40, unit: 'g', emoji: '🥣' },
  { id: 'lidl2-muesli', name: 'Muesli con Frutos Secos', brand: 'Deluxe', supermarket: 'lidl', category: 'cereales', nutritionPer100g: { kcal: 395, proteins: 10.0, carbs: 60.0, fats: 12.0 }, defaultServingG: 50, unit: 'g', emoji: '🥣' },
  { id: 'lidl2-cereales-chocolate', name: 'Cereales de Chocolate', brand: 'Snack Day', supermarket: 'lidl', category: 'cereales', nutritionPer100g: { kcal: 390, proteins: 7.0, carbs: 74.0, fats: 6.0 }, defaultServingG: 40, unit: 'g', emoji: '🥣' },
  { id: 'lidl2-quinoa', name: 'Quinoa', brand: 'Deluxe', supermarket: 'lidl', category: 'cereales', nutritionPer100g: { kcal: 365, proteins: 14.0, carbs: 64.0, fats: 6.0 }, defaultServingG: 70, unit: 'g', emoji: '🥣' },
  { id: 'lidl2-cuscus', name: 'Cuscús', brand: 'Deluxe', supermarket: 'lidl', category: 'cereales', nutritionPer100g: { kcal: 356, proteins: 12.0, carbs: 72.0, fats: 1.5 }, defaultServingG: 70, unit: 'g', emoji: '🥣' },

  // --- Legumbres ---
  { id: 'lidl2-lentejas', name: 'Lentejas', brand: 'Deluxe', supermarket: 'lidl', category: 'legumbres', nutritionPer100g: { kcal: 116, proteins: 9.0, carbs: 16.5, fats: 0.4 }, defaultServingG: 150, unit: 'g', emoji: '🫘' },
  { id: 'lidl2-garbanzos', name: 'Garbanzos Cocidos', brand: 'Deluxe', supermarket: 'lidl', category: 'legumbres', nutritionPer100g: { kcal: 150, proteins: 8.5, carbs: 18.0, fats: 2.6 }, defaultServingG: 150, unit: 'g', emoji: '🫘' },
  { id: 'lidl2-alubias-blancas', name: 'Alubias Blancas Cocidas', brand: 'Deluxe', supermarket: 'lidl', category: 'legumbres', nutritionPer100g: { kcal: 110, proteins: 7.5, carbs: 15.5, fats: 0.5 }, defaultServingG: 150, unit: 'g', emoji: '🫘' },
  { id: 'lidl2-hummus', name: 'Hummus Clásico', brand: 'Vemondo', supermarket: 'lidl', category: 'legumbres', nutritionPer100g: { kcal: 245, proteins: 7.5, carbs: 14.0, fats: 17.5 }, defaultServingG: 50, unit: 'g', emoji: '🫘' },

  // --- Frutas ---
  { id: 'lidl2-platano', name: 'Plátano', brand: 'Lidl', supermarket: 'lidl', category: 'frutas', nutritionPer100g: { kcal: 89, proteins: 1.1, carbs: 20.0, fats: 0.3 }, defaultServingG: 120, unit: 'g', emoji: '🍌' },
  { id: 'lidl2-manzana', name: 'Manzana', brand: 'Lidl', supermarket: 'lidl', category: 'frutas', nutritionPer100g: { kcal: 52, proteins: 0.3, carbs: 12.0, fats: 0.2 }, defaultServingG: 180, unit: 'g', emoji: '🍎' },
  { id: 'lidl2-naranja', name: 'Naranja', brand: 'Lidl', supermarket: 'lidl', category: 'frutas', nutritionPer100g: { kcal: 47, proteins: 0.9, carbs: 9.4, fats: 0.1 }, defaultServingG: 200, unit: 'g', emoji: '🍊' },
  { id: 'lidl2-fresa', name: 'Fresas', brand: 'Lidl', supermarket: 'lidl', category: 'frutas', nutritionPer100g: { kcal: 33, proteins: 0.7, carbs: 5.5, fats: 0.3 }, defaultServingG: 150, unit: 'g', emoji: '🍓' },
  { id: 'lidl2-aguacate', name: 'Aguacate', brand: 'Lidl', supermarket: 'lidl', category: 'frutas', nutritionPer100g: { kcal: 160, proteins: 2.0, carbs: 1.8, fats: 14.7 }, defaultServingG: 80, unit: 'g', emoji: '🥑' },
  { id: 'lidl2-kiwi', name: 'Kiwi', brand: 'Lidl', supermarket: 'lidl', category: 'frutas', nutritionPer100g: { kcal: 61, proteins: 1.1, carbs: 11.0, fats: 0.5 }, defaultServingG: 75, unit: 'g', emoji: '🥝' },

  // --- Verduras ---
  { id: 'lidl2-tomate', name: 'Tomate', brand: 'Lidl', supermarket: 'lidl', category: 'verduras', nutritionPer100g: { kcal: 18, proteins: 0.9, carbs: 2.6, fats: 0.2 }, defaultServingG: 150, unit: 'g', emoji: '🍅' },
  { id: 'lidl2-lechuga', name: 'Lechuga', brand: 'Lidl', supermarket: 'lidl', category: 'verduras', nutritionPer100g: { kcal: 15, proteins: 1.4, carbs: 1.4, fats: 0.2 }, defaultServingG: 100, unit: 'g', emoji: '🥬' },
  { id: 'lidl2-cebolla', name: 'Cebolla', brand: 'Lidl', supermarket: 'lidl', category: 'verduras', nutritionPer100g: { kcal: 40, proteins: 1.1, carbs: 7.6, fats: 0.1 }, defaultServingG: 100, unit: 'g', emoji: '🧅' },
  { id: 'lidl2-zanahoria', name: 'Zanahoria', brand: 'Lidl', supermarket: 'lidl', category: 'verduras', nutritionPer100g: { kcal: 41, proteins: 0.9, carbs: 7.7, fats: 0.2 }, defaultServingG: 100, unit: 'g', emoji: '🥕' },
  { id: 'lidl2-brocoli', name: 'Brócoli', brand: 'Lidl', supermarket: 'lidl', category: 'verduras', nutritionPer100g: { kcal: 34, proteins: 2.8, carbs: 4.0, fats: 0.4 }, defaultServingG: 150, unit: 'g', emoji: '🥦' },
  { id: 'lidl2-espinacas', name: 'Espinacas', brand: 'Lidl', supermarket: 'lidl', category: 'verduras', nutritionPer100g: { kcal: 23, proteins: 2.9, carbs: 1.4, fats: 0.4 }, defaultServingG: 100, unit: 'g', emoji: '🥬' },
  { id: 'lidl2-patata', name: 'Patata', brand: 'Lidl', supermarket: 'lidl', category: 'verduras', nutritionPer100g: { kcal: 77, proteins: 2.0, carbs: 15.4, fats: 0.1 }, defaultServingG: 200, unit: 'g', emoji: '🥔' },
  { id: 'lidl2-calabacin', name: 'Calabacín', brand: 'Lidl', supermarket: 'lidl', category: 'verduras', nutritionPer100g: { kcal: 17, proteins: 1.2, carbs: 2.0, fats: 0.3 }, defaultServingG: 200, unit: 'g', emoji: '🥒' },
  { id: 'lidl2-pimiento-rojo', name: 'Pimiento Rojo', brand: 'Lidl', supermarket: 'lidl', category: 'verduras', nutritionPer100g: { kcal: 31, proteins: 1.0, carbs: 5.0, fats: 0.3 }, defaultServingG: 150, unit: 'g', emoji: '🌶️' },

  // --- Bebidas ---
  { id: 'lidl2-zumo-naranja', name: 'Zumo de Naranja', brand: 'Solevita', supermarket: 'lidl', category: 'bebidas', nutritionPer100g: { kcal: 43, proteins: 0.6, carbs: 9.5, fats: 0.1 }, defaultServingG: 250, unit: 'ml', emoji: '🧃' },
  { id: 'lidl2-zumo-manzana', name: 'Zumo de Manzana', brand: 'Solevita', supermarket: 'lidl', category: 'bebidas', nutritionPer100g: { kcal: 46, proteins: 0.1, carbs: 10.5, fats: 0.1 }, defaultServingG: 250, unit: 'ml', emoji: '🧃' },
  { id: 'lidl2-zumo-piña', name: 'Zumo de Piña', brand: 'Solevita', supermarket: 'lidl', category: 'bebidas', nutritionPer100g: { kcal: 48, proteins: 0.3, carbs: 11.0, fats: 0.1 }, defaultServingG: 250, unit: 'ml', emoji: '🧃' },
  { id: 'lidl2-cola', name: 'Refresco de Cola', brand: 'Freeway', supermarket: 'lidl', category: 'bebidas', nutritionPer100g: { kcal: 42, proteins: 0.0, carbs: 10.6, fats: 0.0 }, defaultServingG: 330, unit: 'ml', emoji: '🥤' },
  { id: 'lidl2-cola-zero', name: 'Refresco de Cola Zero', brand: 'Freeway', supermarket: 'lidl', category: 'bebidas', nutritionPer100g: { kcal: 0, proteins: 0.0, carbs: 0.0, fats: 0.0 }, defaultServingG: 330, unit: 'ml', emoji: '🥤' },
  { id: 'lidl2-limon', name: 'Refresco de Limón', brand: 'Freeway', supermarket: 'lidl', category: 'bebidas', nutritionPer100g: { kcal: 38, proteins: 0.0, carbs: 9.0, fats: 0.0 }, defaultServingG: 330, unit: 'ml', emoji: '🥤' },
  { id: 'lidl2-cerveza', name: 'Cerveza Lager', brand: 'Lidl', supermarket: 'lidl', category: 'bebidas', nutritionPer100g: { kcal: 43, proteins: 0.3, carbs: 3.5, fats: 0.0 }, defaultServingG: 330, unit: 'ml', emoji: '🍺' },
  { id: 'lidl2-cafe-molido', name: 'Café Molido', brand: 'Deluxe', supermarket: 'lidl', category: 'bebidas', nutritionPer100g: { kcal: 2, proteins: 0.1, carbs: 0.0, fats: 0.0 }, defaultServingG: 200, unit: 'ml', emoji: '☕' },
  { id: 'lidl2-agua-mineral', name: 'Agua Mineral', brand: 'Lidl', supermarket: 'lidl', category: 'bebidas', nutritionPer100g: { kcal: 0, proteins: 0.0, carbs: 0.0, fats: 0.0 }, defaultServingG: 500, unit: 'ml', emoji: '💧' },
  { id: 'lidl2-cacao-soluble', name: 'Cacao Soluble', brand: 'Deluxe', supermarket: 'lidl', category: 'bebidas', nutritionPer100g: { kcal: 375, proteins: 5.0, carbs: 78.0, fats: 3.5 }, defaultServingG: 15, unit: 'g', emoji: '☕' },

  // --- Snacks ---
  { id: 'lidl2-patatas-fritas', name: 'Patatas Fritas Clásicas', brand: 'Snack Day', supermarket: 'lidl', category: 'snacks', nutritionPer100g: { kcal: 530, proteins: 6.0, carbs: 52.0, fats: 33.0 }, defaultServingG: 30, unit: 'g', emoji: '🍟' },
  { id: 'lidl2-nachos', name: 'Nachos', brand: 'Snack Day', supermarket: 'lidl', category: 'snacks', nutritionPer100g: { kcal: 480, proteins: 6.5, carbs: 60.0, fats: 23.0 }, defaultServingG: 30, unit: 'g', emoji: '🌮' },
  { id: 'lidl2-frutos-secos-mix', name: 'Mix de Frutos Secos', brand: 'Snack Day', supermarket: 'lidl', category: 'snacks', nutritionPer100g: { kcal: 590, proteins: 18.0, carbs: 14.0, fats: 50.0 }, defaultServingG: 30, unit: 'g', emoji: '🥜' },
  { id: 'lidl2-almendras', name: 'Almendras Tostadas', brand: 'Snack Day', supermarket: 'lidl', category: 'snacks', nutritionPer100g: { kcal: 598, proteins: 21.0, carbs: 7.0, fats: 52.0 }, defaultServingG: 25, unit: 'g', emoji: '🥜' },
  { id: 'lidl2-aceitunas-verdes', name: 'Aceitunas Verdes', brand: 'Snack Day', supermarket: 'lidl', category: 'snacks', nutritionPer100g: { kcal: 145, proteins: 1.0, carbs: 1.0, fats: 15.0 }, defaultServingG: 30, unit: 'g', emoji: '🫒' },
  { id: 'lidl2-palomitas', name: 'Palomitas para Microondas', brand: 'Snack Day', supermarket: 'lidl', category: 'snacks', nutritionPer100g: { kcal: 460, proteins: 7.0, carbs: 55.0, fats: 24.0 }, defaultServingG: 25, unit: 'g', emoji: '🍿' },

  // --- Congelados ---
  { id: 'lidl2-pizza-margarita', name: 'Pizza Margarita', brand: 'Deluxe', supermarket: 'lidl', category: 'congelados', nutritionPer100g: { kcal: 235, proteins: 10.0, carbs: 28.0, fats: 9.5 }, defaultServingG: 175, unit: 'g', emoji: '🍕' },
  { id: 'lidl2-croquetas-jamon', name: 'Croquetas de Jamón', brand: 'Deluxe', supermarket: 'lidl', category: 'congelados', nutritionPer100g: { kcal: 195, proteins: 5.5, carbs: 22.0, fats: 9.5 }, defaultServingG: 100, unit: 'g', emoji: '🍘' },
  { id: 'lidl2-nuggets-pollo', name: 'Nuggets de Pollo', brand: 'Deluxe', supermarket: 'lidl', category: 'congelados', nutritionPer100g: { kcal: 240, proteins: 14.0, carbs: 18.0, fats: 12.5 }, defaultServingG: 100, unit: 'g', emoji: '🍗' },
  { id: 'lidl2-verduras-cong', name: 'Verduras Congeladas Mix', brand: 'Lidl', supermarket: 'lidl', category: 'congelados', nutritionPer100g: { kcal: 42, proteins: 2.5, carbs: 5.5, fats: 0.5 }, defaultServingG: 200, unit: 'g', emoji: '🥦' },
  { id: 'lidl2-pescado-empanado', name: 'Filetes de Pescado Empanado', brand: 'Ocean Sea', supermarket: 'lidl', category: 'congelados', nutritionPer100g: { kcal: 205, proteins: 12.0, carbs: 18.0, fats: 9.5 }, defaultServingG: 100, unit: 'g', emoji: '🐟' },
  { id: 'lidl2-helado-vainilla', name: 'Helado de Vainilla', brand: 'Deluxe', supermarket: 'lidl', category: 'congelados', nutritionPer100g: { kcal: 210, proteins: 3.5, carbs: 25.0, fats: 11.0 }, defaultServingG: 75, unit: 'g', emoji: '🍨' },

  // --- Dulces ---
  { id: 'lidl2-chocolate-negro', name: 'Chocolate Negro 70%', brand: 'Deluxe', supermarket: 'lidl', category: 'dulces', nutritionPer100g: { kcal: 545, proteins: 8.0, carbs: 38.0, fats: 38.0 }, defaultServingG: 25, unit: 'g', emoji: '🍫' },
  { id: 'lidl2-galletas-digestive', name: 'Galletas Digestive', brand: 'Snack Day', supermarket: 'lidl', category: 'dulces', nutritionPer100g: { kcal: 470, proteins: 7.0, carbs: 62.0, fats: 21.0 }, defaultServingG: 15, unit: 'g', emoji: '🍪' },
  { id: 'lidl2-mermelada-fresa', name: 'Mermelada de Fresa', brand: 'Deluxe', supermarket: 'lidl', category: 'dulces', nutritionPer100g: { kcal: 245, proteins: 0.3, carbs: 60.0, fats: 0.1 }, defaultServingG: 20, unit: 'g', emoji: '🍓' },
  { id: 'lidl2-miel', name: 'Miel de Flores', brand: 'Deluxe', supermarket: 'lidl', category: 'dulces', nutritionPer100g: { kcal: 320, proteins: 0.3, carbs: 80.0, fats: 0.0 }, defaultServingG: 15, unit: 'g', emoji: '🍯' },
  { id: 'lidl2-crema-cacao', name: 'Crema de Cacao y Avellanas', brand: 'Snack Day', supermarket: 'lidl', category: 'dulces', nutritionPer100g: { kcal: 540, proteins: 6.0, carbs: 56.0, fats: 32.0 }, defaultServingG: 20, unit: 'g', emoji: '🍫' },

  // --- Conservas ---
  { id: 'lidl2-atun-aceite', name: 'Atún en Aceite de Oliva', brand: 'Ocean Sea', supermarket: 'lidl', category: 'conservas', nutritionPer100g: { kcal: 198, proteins: 25.5, carbs: 0.0, fats: 10.5 }, defaultServingG: 52, unit: 'g', emoji: '🥫' },
  { id: 'lidl2-atun-natural', name: 'Atún al Natural', brand: 'Ocean Sea', supermarket: 'lidl', category: 'conservas', nutritionPer100g: { kcal: 103, proteins: 24.0, carbs: 0.0, fats: 0.5 }, defaultServingG: 52, unit: 'g', emoji: '🥫' },
  { id: 'lidl2-sardinas-aceite', name: 'Sardinas en Aceite', brand: 'Ocean Sea', supermarket: 'lidl', category: 'conservas', nutritionPer100g: { kcal: 220, proteins: 22.0, carbs: 0.0, fats: 14.5 }, defaultServingG: 80, unit: 'g', emoji: '🥫' },
  { id: 'lidl2-tomate-triturado', name: 'Tomate Triturado', brand: 'Deluxe', supermarket: 'lidl', category: 'conservas', nutritionPer100g: { kcal: 26, proteins: 1.2, carbs: 3.5, fats: 0.1 }, defaultServingG: 100, unit: 'g', emoji: '🥫' },
  { id: 'lidl2-caldo-pollo', name: 'Caldo de Pollo', brand: 'Deluxe', supermarket: 'lidl', category: 'conservas', nutritionPer100g: { kcal: 10, proteins: 0.4, carbs: 0.5, fats: 0.5 }, defaultServingG: 250, unit: 'ml', emoji: '🥣' },
  { id: 'lidl2-gazpacho', name: 'Gazpacho', brand: 'Deluxe', supermarket: 'lidl', category: 'conservas', nutritionPer100g: { kcal: 38, proteins: 0.7, carbs: 3.5, fats: 2.2 }, defaultServingG: 250, unit: 'ml', emoji: '🥫' },

  // --- Salsas ---
  { id: 'lidl2-tomate-frito', name: 'Tomate Frito', brand: 'Deluxe', supermarket: 'lidl', category: 'salsas', nutritionPer100g: { kcal: 78, proteins: 1.2, carbs: 8.5, fats: 4.2 }, defaultServingG: 50, unit: 'g', emoji: '🍅' },
  { id: 'lidl2-mayonesa', name: 'Mayonesa', brand: 'Deluxe', supermarket: 'lidl', category: 'salsas', nutritionPer100g: { kcal: 680, proteins: 1.0, carbs: 2.0, fats: 74.0 }, defaultServingG: 15, unit: 'g', emoji: '🥫' },
  { id: 'lidl2-ketchup', name: 'Ketchup', brand: 'Deluxe', supermarket: 'lidl', category: 'salsas', nutritionPer100g: { kcal: 112, proteins: 1.2, carbs: 24.0, fats: 0.2 }, defaultServingG: 15, unit: 'g', emoji: '🥫' },
  { id: 'lidl2-mostaza', name: 'Mostaza', brand: 'Deluxe', supermarket: 'lidl', category: 'salsas', nutritionPer100g: { kcal: 67, proteins: 4.0, carbs: 3.5, fats: 3.5 }, defaultServingG: 10, unit: 'g', emoji: '🥫' },

  // --- Aceites ---
  { id: 'lidl2-aceite-oliva', name: 'Aceite de Oliva Virgen Extra', brand: 'Deluxe', supermarket: 'lidl', category: 'aceites', nutritionPer100g: { kcal: 824, proteins: 0.0, carbs: 0.0, fats: 91.6 }, defaultServingG: 10, unit: 'ml', emoji: '🫒' },
  { id: 'lidl2-aceite-girasol', name: 'Aceite de Girasol', brand: 'Deluxe', supermarket: 'lidl', category: 'aceites', nutritionPer100g: { kcal: 824, proteins: 0.0, carbs: 0.0, fats: 91.6 }, defaultServingG: 10, unit: 'ml', emoji: '🌻' },

  // --- Huevos ---
  { id: 'lidl2-huevos-l', name: 'Huevos Talla L (x12)', brand: 'Lidl', supermarket: 'lidl', category: 'huevos', nutritionPer100g: { kcal: 143, proteins: 12.5, carbs: 0.7, fats: 9.8 }, defaultServingG: 60, unit: 'g', emoji: '🥚' },
  { id: 'lidl2-huevos-camperos', name: 'Huevos Camperos (x6)', brand: 'Lidl', supermarket: 'lidl', category: 'huevos', nutritionPer100g: { kcal: 143, proteins: 12.5, carbs: 0.7, fats: 9.8 }, defaultServingG: 60, unit: 'g', emoji: '🥚' },
];

// ═══════════════════════════════════════════
// ██  CARREFOUR                            ██
// ═══════════════════════════════════════════

export const productsCarrefour: Product[] = [
  // --- Lácteos ---
  { id: 'carr2-leche-entera', name: 'Leche Entera', brand: 'Carrefour', supermarket: 'carrefour', category: 'lacteos', nutritionPer100g: { kcal: 63, proteins: 3.1, carbs: 4.7, fats: 3.5 }, defaultServingG: 250, unit: 'ml', emoji: '🥛' },
  { id: 'carr2-leche-semi', name: 'Leche Semidesnatada', brand: 'Carrefour', supermarket: 'carrefour', category: 'lacteos', nutritionPer100g: { kcal: 45, proteins: 3.2, carbs: 4.7, fats: 1.5 }, defaultServingG: 250, unit: 'ml', emoji: '🥛' },
  { id: 'carr2-leche-desnatada', name: 'Leche Desnatada', brand: 'Carrefour', supermarket: 'carrefour', category: 'lacteos', nutritionPer100g: { kcal: 34, proteins: 3.3, carbs: 4.8, fats: 0.1 }, defaultServingG: 250, unit: 'ml', emoji: '🥛' },
  { id: 'carr2-yogur-natural', name: 'Yogur Natural', brand: 'Carrefour', supermarket: 'carrefour', category: 'lacteos', nutritionPer100g: { kcal: 60, proteins: 3.7, carbs: 4.5, fats: 3.0 }, defaultServingG: 125, unit: 'g', emoji: '🫙' },
  { id: 'carr2-yogur-griego', name: 'Yogur Griego Natural', brand: 'Carrefour', supermarket: 'carrefour', category: 'lacteos', nutritionPer100g: { kcal: 112, proteins: 3.4, carbs: 5.3, fats: 8.2 }, defaultServingG: 125, unit: 'g', emoji: '🫙' },
  { id: 'carr2-yogur-desnatado', name: 'Yogur Desnatado Natural', brand: 'Carrefour', supermarket: 'carrefour', category: 'lacteos', nutritionPer100g: { kcal: 40, proteins: 4.2, carbs: 5.0, fats: 0.1 }, defaultServingG: 125, unit: 'g', emoji: '🫙' },
  { id: 'carr2-natillas-vainilla', name: 'Natillas de Vainilla', brand: 'Carrefour', supermarket: 'carrefour', category: 'lacteos', nutritionPer100g: { kcal: 118, proteins: 3.2, carbs: 17.0, fats: 3.5 }, defaultServingG: 125, unit: 'g', emoji: '🍮' },
  { id: 'carr2-queso-fresco', name: 'Queso Fresco Batido 0%', brand: 'Carrefour', supermarket: 'carrefour', category: 'lacteos', nutritionPer100g: { kcal: 50, proteins: 8.2, carbs: 3.7, fats: 0.2 }, defaultServingG: 250, unit: 'g', emoji: '🧀' },
  { id: 'carr2-queso-lonchas', name: 'Queso en Lonchas', brand: 'Carrefour', supermarket: 'carrefour', category: 'lacteos', nutritionPer100g: { kcal: 312, proteins: 22.0, carbs: 1.5, fats: 24.5 }, defaultServingG: 20, unit: 'g', emoji: '🧀' },
  { id: 'carr2-queso-manchego', name: 'Queso Manchego Semicurado', brand: 'Carrefour', supermarket: 'carrefour', category: 'lacteos', nutritionPer100g: { kcal: 390, proteins: 25.5, carbs: 0.5, fats: 32.0 }, defaultServingG: 30, unit: 'g', emoji: '🧀' },
  { id: 'carr2-queso-mozzarella', name: 'Mozzarella', brand: 'Carrefour', supermarket: 'carrefour', category: 'lacteos', nutritionPer100g: { kcal: 252, proteins: 18.5, carbs: 1.0, fats: 19.5 }, defaultServingG: 125, unit: 'g', emoji: '🧀' },
  { id: 'carr2-queso-parmesano', name: 'Parmesano Rallado', brand: 'Carrefour', supermarket: 'carrefour', category: 'lacteos', nutritionPer100g: { kcal: 390, proteins: 35.5, carbs: 0.5, fats: 27.5 }, defaultServingG: 10, unit: 'g', emoji: '🧀' },
  { id: 'carr2-queso-crema', name: 'Queso Crema', brand: 'Carrefour', supermarket: 'carrefour', category: 'lacteos', nutritionPer100g: { kcal: 230, proteins: 5.2, carbs: 3.5, fats: 22.0 }, defaultServingG: 30, unit: 'g', emoji: '🧀' },
  { id: 'carr2-queso-burgos', name: 'Queso de Burgos', brand: 'Carrefour', supermarket: 'carrefour', category: 'lacteos', nutritionPer100g: { kcal: 170, proteins: 11.5, carbs: 2.5, fats: 13.0 }, defaultServingG: 75, unit: 'g', emoji: '🧀' },
  { id: 'carr2-mantequilla', name: 'Mantequilla', brand: 'Carrefour', supermarket: 'carrefour', category: 'lacteos', nutritionPer100g: { kcal: 718, proteins: 0.9, carbs: 0.1, fats: 81.0 }, defaultServingG: 10, unit: 'g', emoji: '🧈' },
  { id: 'carr2-nata-cocinar', name: 'Nata para Cocinar', brand: 'Carrefour', supermarket: 'carrefour', category: 'lacteos', nutritionPer100g: { kcal: 130, proteins: 2.5, carbs: 3.8, fats: 12.0 }, defaultServingG: 50, unit: 'ml', emoji: '🍶' },
  { id: 'carr2-kefir', name: 'Kéfir Natural', brand: 'Carrefour', supermarket: 'carrefour', category: 'lacteos', nutritionPer100g: { kcal: 56, proteins: 3.4, carbs: 4.1, fats: 2.6 }, defaultServingG: 200, unit: 'ml', emoji: '🥛' },
  { id: 'carr2-batido-chocolate', name: 'Batido de Chocolate', brand: 'Carrefour', supermarket: 'carrefour', category: 'lacteos', nutritionPer100g: { kcal: 76, proteins: 3.0, carbs: 11.0, fats: 1.7 }, defaultServingG: 200, unit: 'ml', emoji: '🥛' },
  { id: 'carr2-bebida-avena-bio', name: 'Bebida de Avena Bio', brand: 'Carrefour Bio', supermarket: 'carrefour', category: 'lacteos', nutritionPer100g: { kcal: 44, proteins: 0.3, carbs: 6.5, fats: 1.5 }, defaultServingG: 250, unit: 'ml', emoji: '🥛' },
  { id: 'carr2-bebida-almendra', name: 'Bebida de Almendras', brand: 'Carrefour', supermarket: 'carrefour', category: 'lacteos', nutritionPer100g: { kcal: 22, proteins: 0.4, carbs: 2.8, fats: 1.0 }, defaultServingG: 250, unit: 'ml', emoji: '🥛' },

  // --- Carnes ---
  { id: 'carr2-pechuga-pollo', name: 'Pechuga de Pollo', brand: 'Carrefour', supermarket: 'carrefour', category: 'carnes', nutritionPer100g: { kcal: 110, proteins: 23.0, carbs: 0.0, fats: 1.5 }, defaultServingG: 150, unit: 'g', emoji: '🍗' },
  { id: 'carr2-muslo-pollo', name: 'Muslo de Pollo', brand: 'Carrefour', supermarket: 'carrefour', category: 'carnes', nutritionPer100g: { kcal: 178, proteins: 17.0, carbs: 0.0, fats: 12.0 }, defaultServingG: 150, unit: 'g', emoji: '🍗' },
  { id: 'carr2-filete-ternera', name: 'Filete de Ternera', brand: 'Carrefour', supermarket: 'carrefour', category: 'carnes', nutritionPer100g: { kcal: 130, proteins: 21.0, carbs: 0.0, fats: 5.0 }, defaultServingG: 150, unit: 'g', emoji: '🥩' },
  { id: 'carr2-carne-picada-mixta', name: 'Carne Picada Mixta', brand: 'Carrefour', supermarket: 'carrefour', category: 'carnes', nutritionPer100g: { kcal: 220, proteins: 16.5, carbs: 0.5, fats: 17.0 }, defaultServingG: 150, unit: 'g', emoji: '🥩' },
  { id: 'carr2-carne-picada-vacuno', name: 'Carne Picada de Vacuno', brand: 'Carrefour', supermarket: 'carrefour', category: 'carnes', nutritionPer100g: { kcal: 175, proteins: 20.0, carbs: 0.0, fats: 10.5 }, defaultServingG: 150, unit: 'g', emoji: '🥩' },
  { id: 'carr2-hamburguesa-vacuno', name: 'Hamburguesa de Vacuno', brand: 'Carrefour', supermarket: 'carrefour', category: 'carnes', nutritionPer100g: { kcal: 228, proteins: 15.5, carbs: 4.0, fats: 16.5 }, defaultServingG: 100, unit: 'g', emoji: '🍔' },
  { id: 'carr2-lomo-cerdo', name: 'Lomo de Cerdo', brand: 'Carrefour', supermarket: 'carrefour', category: 'carnes', nutritionPer100g: { kcal: 142, proteins: 22.0, carbs: 0.0, fats: 5.5 }, defaultServingG: 150, unit: 'g', emoji: '🥩' },
  { id: 'carr2-chuleta-cerdo', name: 'Chuleta de Cerdo', brand: 'Carrefour', supermarket: 'carrefour', category: 'carnes', nutritionPer100g: { kcal: 208, proteins: 18.5, carbs: 0.0, fats: 15.0 }, defaultServingG: 150, unit: 'g', emoji: '🥩' },
  { id: 'carr2-pechuga-pavo', name: 'Pechuga de Pavo', brand: 'Carrefour', supermarket: 'carrefour', category: 'carnes', nutritionPer100g: { kcal: 105, proteins: 24.0, carbs: 0.0, fats: 1.0 }, defaultServingG: 150, unit: 'g', emoji: '🍗' },
  { id: 'carr2-albondigas', name: 'Albóndigas de Ternera', brand: 'Carrefour', supermarket: 'carrefour', category: 'carnes', nutritionPer100g: { kcal: 190, proteins: 14.5, carbs: 5.5, fats: 12.0 }, defaultServingG: 150, unit: 'g', emoji: '🧆' },
  { id: 'carr2-salchichas', name: 'Salchichas Frankfurt', brand: 'Simpl', supermarket: 'carrefour', category: 'carnes', nutritionPer100g: { kcal: 250, proteins: 12.0, carbs: 2.5, fats: 21.0 }, defaultServingG: 70, unit: 'g', emoji: '🌭' },

  // --- Pescados ---
  { id: 'carr2-salmon-fresco', name: 'Salmón Fresco', brand: 'Carrefour', supermarket: 'carrefour', category: 'pescados', nutritionPer100g: { kcal: 208, proteins: 20.5, carbs: 0.0, fats: 13.5 }, defaultServingG: 125, unit: 'g', emoji: '🐟' },
  { id: 'carr2-merluza-filetes', name: 'Merluza en Filetes', brand: 'Carrefour', supermarket: 'carrefour', category: 'pescados', nutritionPer100g: { kcal: 82, proteins: 17.0, carbs: 0.0, fats: 1.3 }, defaultServingG: 150, unit: 'g', emoji: '🐟' },
  { id: 'carr2-gambas-peladas', name: 'Gambas Peladas', brand: 'Carrefour', supermarket: 'carrefour', category: 'pescados', nutritionPer100g: { kcal: 84, proteins: 18.0, carbs: 0.4, fats: 1.0 }, defaultServingG: 100, unit: 'g', emoji: '🦐' },
  { id: 'carr2-langostinos', name: 'Langostinos', brand: 'Carrefour', supermarket: 'carrefour', category: 'pescados', nutritionPer100g: { kcal: 88, proteins: 18.5, carbs: 0.3, fats: 1.1 }, defaultServingG: 100, unit: 'g', emoji: '🦐' },
  { id: 'carr2-bacalao', name: 'Bacalao Fresco', brand: 'Carrefour', supermarket: 'carrefour', category: 'pescados', nutritionPer100g: { kcal: 76, proteins: 17.5, carbs: 0.0, fats: 0.6 }, defaultServingG: 150, unit: 'g', emoji: '🐟' },
  { id: 'carr2-sardinas-frescas', name: 'Sardinas Frescas', brand: 'Carrefour', supermarket: 'carrefour', category: 'pescados', nutritionPer100g: { kcal: 162, proteins: 19.0, carbs: 0.0, fats: 9.5 }, defaultServingG: 100, unit: 'g', emoji: '🐟' },
  { id: 'carr2-dorada', name: 'Dorada', brand: 'Carrefour', supermarket: 'carrefour', category: 'pescados', nutritionPer100g: { kcal: 95, proteins: 18.5, carbs: 0.0, fats: 2.0 }, defaultServingG: 200, unit: 'g', emoji: '🐟' },
  { id: 'carr2-calamares', name: 'Calamares', brand: 'Carrefour', supermarket: 'carrefour', category: 'pescados', nutritionPer100g: { kcal: 90, proteins: 15.5, carbs: 3.0, fats: 1.3 }, defaultServingG: 100, unit: 'g', emoji: '🦑' },

  // --- Embutidos ---
  { id: 'carr2-jamon-serrano', name: 'Jamón Serrano', brand: 'Carrefour', supermarket: 'carrefour', category: 'embutidos', nutritionPer100g: { kcal: 240, proteins: 30.5, carbs: 0.0, fats: 13.0 }, defaultServingG: 30, unit: 'g', emoji: '🥓' },
  { id: 'carr2-jamon-cocido', name: 'Jamón Cocido Extra', brand: 'Carrefour', supermarket: 'carrefour', category: 'embutidos', nutritionPer100g: { kcal: 108, proteins: 18.5, carbs: 1.0, fats: 3.5 }, defaultServingG: 40, unit: 'g', emoji: '🥓' },
  { id: 'carr2-pavo-lonchas', name: 'Pavo en Lonchas', brand: 'Carrefour', supermarket: 'carrefour', category: 'embutidos', nutritionPer100g: { kcal: 96, proteins: 17.0, carbs: 1.5, fats: 2.5 }, defaultServingG: 40, unit: 'g', emoji: '🥓' },
  { id: 'carr2-chorizo-extra', name: 'Chorizo Extra', brand: 'Carrefour', supermarket: 'carrefour', category: 'embutidos', nutritionPer100g: { kcal: 380, proteins: 21.5, carbs: 2.0, fats: 32.0 }, defaultServingG: 30, unit: 'g', emoji: '🌶️' },
  { id: 'carr2-salchichon', name: 'Salchichón Extra', brand: 'Carrefour', supermarket: 'carrefour', category: 'embutidos', nutritionPer100g: { kcal: 392, proteins: 23.5, carbs: 1.5, fats: 33.0 }, defaultServingG: 30, unit: 'g', emoji: '🥓' },
  { id: 'carr2-fuet', name: 'Fuet Extra', brand: 'Carrefour', supermarket: 'carrefour', category: 'embutidos', nutritionPer100g: { kcal: 415, proteins: 25.5, carbs: 1.0, fats: 35.0 }, defaultServingG: 25, unit: 'g', emoji: '🥓' },
  { id: 'carr2-bacon', name: 'Bacon Ahumado', brand: 'Carrefour', supermarket: 'carrefour', category: 'embutidos', nutritionPer100g: { kcal: 298, proteins: 15.0, carbs: 0.5, fats: 26.5 }, defaultServingG: 30, unit: 'g', emoji: '🥓' },
  { id: 'carr2-sobrasada', name: 'Sobrasada', brand: 'Carrefour', supermarket: 'carrefour', category: 'embutidos', nutritionPer100g: { kcal: 468, proteins: 16.0, carbs: 3.0, fats: 44.0 }, defaultServingG: 20, unit: 'g', emoji: '🌶️' },

  // --- Panadería ---
  { id: 'carr2-pan-molde', name: 'Pan de Molde', brand: 'Simpl', supermarket: 'carrefour', category: 'panaderia', nutritionPer100g: { kcal: 258, proteins: 8.0, carbs: 47.0, fats: 3.5 }, defaultServingG: 30, unit: 'g', emoji: '🍞' },
  { id: 'carr2-pan-integral', name: 'Pan de Molde Integral', brand: 'Carrefour', supermarket: 'carrefour', category: 'panaderia', nutritionPer100g: { kcal: 242, proteins: 9.5, carbs: 41.0, fats: 3.8 }, defaultServingG: 30, unit: 'g', emoji: '🍞' },
  { id: 'carr2-baguette', name: 'Baguette', brand: 'Carrefour', supermarket: 'carrefour', category: 'panaderia', nutritionPer100g: { kcal: 268, proteins: 9.0, carbs: 51.0, fats: 1.5 }, defaultServingG: 60, unit: 'g', emoji: '🥖' },
  { id: 'carr2-tostadas', name: 'Tostadas', brand: 'Carrefour', supermarket: 'carrefour', category: 'panaderia', nutritionPer100g: { kcal: 382, proteins: 11.0, carbs: 71.0, fats: 5.0 }, defaultServingG: 10, unit: 'g', emoji: '🍞' },
  { id: 'carr2-croissants', name: 'Croissants', brand: 'Carrefour', supermarket: 'carrefour', category: 'panaderia', nutritionPer100g: { kcal: 400, proteins: 7.5, carbs: 44.0, fats: 22.0 }, defaultServingG: 45, unit: 'g', emoji: '🥐' },
  { id: 'carr2-tortillas-trigo', name: 'Tortillas de Trigo', brand: 'Carrefour', supermarket: 'carrefour', category: 'panaderia', nutritionPer100g: { kcal: 305, proteins: 8.0, carbs: 49.0, fats: 8.5 }, defaultServingG: 60, unit: 'g', emoji: '🫓' },

  // --- Cereales y Pasta ---
  { id: 'carr2-arroz-blanco', name: 'Arroz Blanco', brand: 'Carrefour', supermarket: 'carrefour', category: 'cereales', nutritionPer100g: { kcal: 348, proteins: 7.0, carbs: 77.0, fats: 0.5 }, defaultServingG: 75, unit: 'g', emoji: '🍚' },
  { id: 'carr2-arroz-integral', name: 'Arroz Integral', brand: 'Carrefour Bio', supermarket: 'carrefour', category: 'cereales', nutritionPer100g: { kcal: 342, proteins: 7.5, carbs: 72.0, fats: 2.5 }, defaultServingG: 75, unit: 'g', emoji: '🍚' },
  { id: 'carr2-macarrones', name: 'Macarrones', brand: 'Simpl', supermarket: 'carrefour', category: 'cereales', nutritionPer100g: { kcal: 353, proteins: 12.0, carbs: 71.5, fats: 1.5 }, defaultServingG: 80, unit: 'g', emoji: '🍝' },
  { id: 'carr2-espaguetis', name: 'Espaguetis', brand: 'Carrefour', supermarket: 'carrefour', category: 'cereales', nutritionPer100g: { kcal: 353, proteins: 12.0, carbs: 71.5, fats: 1.5 }, defaultServingG: 80, unit: 'g', emoji: '🍝' },
  { id: 'carr2-avena-copos', name: 'Copos de Avena', brand: 'Carrefour Bio', supermarket: 'carrefour', category: 'cereales', nutritionPer100g: { kcal: 365, proteins: 13.0, carbs: 57.0, fats: 7.0 }, defaultServingG: 40, unit: 'g', emoji: '🥣' },
  { id: 'carr2-muesli', name: 'Muesli con Frutas', brand: 'Carrefour', supermarket: 'carrefour', category: 'cereales', nutritionPer100g: { kcal: 370, proteins: 8.5, carbs: 65.0, fats: 7.5 }, defaultServingG: 50, unit: 'g', emoji: '🥣' },
  { id: 'carr2-cereales-chocolate', name: 'Cereales de Chocolate', brand: 'Simpl', supermarket: 'carrefour', category: 'cereales', nutritionPer100g: { kcal: 388, proteins: 6.5, carbs: 75.0, fats: 6.0 }, defaultServingG: 40, unit: 'g', emoji: '🥣' },
  { id: 'carr2-quinoa-bio', name: 'Quinoa Bio', brand: 'Carrefour Bio', supermarket: 'carrefour', category: 'cereales', nutritionPer100g: { kcal: 362, proteins: 14.0, carbs: 63.0, fats: 6.0 }, defaultServingG: 70, unit: 'g', emoji: '🥣' },
  { id: 'carr2-cuscus', name: 'Cuscús', brand: 'Carrefour', supermarket: 'carrefour', category: 'cereales', nutritionPer100g: { kcal: 355, proteins: 12.0, carbs: 72.0, fats: 1.5 }, defaultServingG: 70, unit: 'g', emoji: '🥣' },

  // --- Legumbres ---
  { id: 'carr2-lentejas', name: 'Lentejas Cocidas', brand: 'Carrefour', supermarket: 'carrefour', category: 'legumbres', nutritionPer100g: { kcal: 114, proteins: 8.8, carbs: 16.0, fats: 0.4 }, defaultServingG: 150, unit: 'g', emoji: '🫘' },
  { id: 'carr2-garbanzos', name: 'Garbanzos Cocidos', brand: 'Carrefour', supermarket: 'carrefour', category: 'legumbres', nutritionPer100g: { kcal: 148, proteins: 8.5, carbs: 17.5, fats: 2.5 }, defaultServingG: 150, unit: 'g', emoji: '🫘' },
  { id: 'carr2-alubias', name: 'Alubias Cocidas', brand: 'Carrefour', supermarket: 'carrefour', category: 'legumbres', nutritionPer100g: { kcal: 108, proteins: 7.5, carbs: 15.0, fats: 0.5 }, defaultServingG: 150, unit: 'g', emoji: '🫘' },
  { id: 'carr2-hummus', name: 'Hummus Clásico', brand: 'Carrefour', supermarket: 'carrefour', category: 'legumbres', nutritionPer100g: { kcal: 248, proteins: 7.0, carbs: 14.5, fats: 18.0 }, defaultServingG: 50, unit: 'g', emoji: '🫘' },

  // --- Frutas ---
  { id: 'carr2-platano', name: 'Plátano', brand: 'Carrefour', supermarket: 'carrefour', category: 'frutas', nutritionPer100g: { kcal: 89, proteins: 1.1, carbs: 20.0, fats: 0.3 }, defaultServingG: 120, unit: 'g', emoji: '🍌' },
  { id: 'carr2-manzana', name: 'Manzana', brand: 'Carrefour', supermarket: 'carrefour', category: 'frutas', nutritionPer100g: { kcal: 52, proteins: 0.3, carbs: 12.0, fats: 0.2 }, defaultServingG: 180, unit: 'g', emoji: '🍎' },
  { id: 'carr2-naranja', name: 'Naranja', brand: 'Carrefour', supermarket: 'carrefour', category: 'frutas', nutritionPer100g: { kcal: 47, proteins: 0.9, carbs: 9.4, fats: 0.1 }, defaultServingG: 200, unit: 'g', emoji: '🍊' },
  { id: 'carr2-fresa', name: 'Fresas', brand: 'Carrefour', supermarket: 'carrefour', category: 'frutas', nutritionPer100g: { kcal: 33, proteins: 0.7, carbs: 5.5, fats: 0.3 }, defaultServingG: 150, unit: 'g', emoji: '🍓' },
  { id: 'carr2-piña', name: 'Piña', brand: 'Carrefour', supermarket: 'carrefour', category: 'frutas', nutritionPer100g: { kcal: 50, proteins: 0.5, carbs: 11.0, fats: 0.1 }, defaultServingG: 150, unit: 'g', emoji: '🍍' },
  { id: 'carr2-mango', name: 'Mango', brand: 'Carrefour', supermarket: 'carrefour', category: 'frutas', nutritionPer100g: { kcal: 60, proteins: 0.8, carbs: 12.5, fats: 0.4 }, defaultServingG: 150, unit: 'g', emoji: '🥭' },
  { id: 'carr2-aguacate', name: 'Aguacate', brand: 'Carrefour', supermarket: 'carrefour', category: 'frutas', nutritionPer100g: { kcal: 160, proteins: 2.0, carbs: 1.8, fats: 14.7 }, defaultServingG: 80, unit: 'g', emoji: '🥑' },
  { id: 'carr2-uva', name: 'Uvas', brand: 'Carrefour', supermarket: 'carrefour', category: 'frutas', nutritionPer100g: { kcal: 69, proteins: 0.7, carbs: 15.5, fats: 0.2 }, defaultServingG: 150, unit: 'g', emoji: '🍇' },
  { id: 'carr2-sandia', name: 'Sandía', brand: 'Carrefour', supermarket: 'carrefour', category: 'frutas', nutritionPer100g: { kcal: 30, proteins: 0.6, carbs: 6.2, fats: 0.2 }, defaultServingG: 200, unit: 'g', emoji: '🍉' },

  // --- Verduras ---
  { id: 'carr2-tomate', name: 'Tomate', brand: 'Carrefour', supermarket: 'carrefour', category: 'verduras', nutritionPer100g: { kcal: 18, proteins: 0.9, carbs: 2.6, fats: 0.2 }, defaultServingG: 150, unit: 'g', emoji: '🍅' },
  { id: 'carr2-lechuga', name: 'Lechuga', brand: 'Carrefour', supermarket: 'carrefour', category: 'verduras', nutritionPer100g: { kcal: 15, proteins: 1.4, carbs: 1.4, fats: 0.2 }, defaultServingG: 100, unit: 'g', emoji: '🥬' },
  { id: 'carr2-cebolla', name: 'Cebolla', brand: 'Carrefour', supermarket: 'carrefour', category: 'verduras', nutritionPer100g: { kcal: 40, proteins: 1.1, carbs: 7.6, fats: 0.1 }, defaultServingG: 100, unit: 'g', emoji: '🧅' },
  { id: 'carr2-zanahoria', name: 'Zanahoria', brand: 'Carrefour', supermarket: 'carrefour', category: 'verduras', nutritionPer100g: { kcal: 41, proteins: 0.9, carbs: 7.7, fats: 0.2 }, defaultServingG: 100, unit: 'g', emoji: '🥕' },
  { id: 'carr2-pimiento-rojo', name: 'Pimiento Rojo', brand: 'Carrefour', supermarket: 'carrefour', category: 'verduras', nutritionPer100g: { kcal: 31, proteins: 1.0, carbs: 5.0, fats: 0.3 }, defaultServingG: 150, unit: 'g', emoji: '🌶️' },
  { id: 'carr2-brocoli', name: 'Brócoli', brand: 'Carrefour', supermarket: 'carrefour', category: 'verduras', nutritionPer100g: { kcal: 34, proteins: 2.8, carbs: 4.0, fats: 0.4 }, defaultServingG: 150, unit: 'g', emoji: '🥦' },
  { id: 'carr2-espinacas', name: 'Espinacas', brand: 'Carrefour Bio', supermarket: 'carrefour', category: 'verduras', nutritionPer100g: { kcal: 23, proteins: 2.9, carbs: 1.4, fats: 0.4 }, defaultServingG: 100, unit: 'g', emoji: '🥬' },
  { id: 'carr2-patata', name: 'Patata', brand: 'Carrefour', supermarket: 'carrefour', category: 'verduras', nutritionPer100g: { kcal: 77, proteins: 2.0, carbs: 15.4, fats: 0.1 }, defaultServingG: 200, unit: 'g', emoji: '🥔' },
  { id: 'carr2-calabacin', name: 'Calabacín', brand: 'Carrefour', supermarket: 'carrefour', category: 'verduras', nutritionPer100g: { kcal: 17, proteins: 1.2, carbs: 2.0, fats: 0.3 }, defaultServingG: 200, unit: 'g', emoji: '🥒' },
  { id: 'carr2-boniato', name: 'Boniato', brand: 'Carrefour', supermarket: 'carrefour', category: 'verduras', nutritionPer100g: { kcal: 86, proteins: 1.6, carbs: 18.0, fats: 0.1 }, defaultServingG: 200, unit: 'g', emoji: '🍠' },
  { id: 'carr2-ajo', name: 'Ajo', brand: 'Carrefour', supermarket: 'carrefour', category: 'verduras', nutritionPer100g: { kcal: 149, proteins: 6.4, carbs: 28.0, fats: 0.5 }, defaultServingG: 5, unit: 'g', emoji: '🧄' },
  { id: 'carr2-berenjena', name: 'Berenjena', brand: 'Carrefour', supermarket: 'carrefour', category: 'verduras', nutritionPer100g: { kcal: 25, proteins: 1.0, carbs: 3.5, fats: 0.2 }, defaultServingG: 200, unit: 'g', emoji: '🍆' },
  { id: 'carr2-coliflor', name: 'Coliflor', brand: 'Carrefour', supermarket: 'carrefour', category: 'verduras', nutritionPer100g: { kcal: 25, proteins: 2.0, carbs: 3.0, fats: 0.3 }, defaultServingG: 200, unit: 'g', emoji: '🥦' },

  // --- Bebidas ---
  { id: 'carr2-zumo-naranja', name: 'Zumo de Naranja', brand: 'Carrefour', supermarket: 'carrefour', category: 'bebidas', nutritionPer100g: { kcal: 42, proteins: 0.6, carbs: 9.3, fats: 0.1 }, defaultServingG: 250, unit: 'ml', emoji: '🧃' },
  { id: 'carr2-zumo-multifrutas', name: 'Zumo Multifrutas', brand: 'Carrefour', supermarket: 'carrefour', category: 'bebidas', nutritionPer100g: { kcal: 48, proteins: 0.4, carbs: 11.0, fats: 0.1 }, defaultServingG: 250, unit: 'ml', emoji: '🧃' },
  { id: 'carr2-cola', name: 'Refresco de Cola', brand: 'Simpl', supermarket: 'carrefour', category: 'bebidas', nutritionPer100g: { kcal: 42, proteins: 0.0, carbs: 10.5, fats: 0.0 }, defaultServingG: 330, unit: 'ml', emoji: '🥤' },
  { id: 'carr2-cola-zero', name: 'Refresco de Cola Zero', brand: 'Carrefour', supermarket: 'carrefour', category: 'bebidas', nutritionPer100g: { kcal: 0, proteins: 0.0, carbs: 0.0, fats: 0.0 }, defaultServingG: 330, unit: 'ml', emoji: '🥤' },
  { id: 'carr2-cerveza', name: 'Cerveza Lager', brand: 'Carrefour', supermarket: 'carrefour', category: 'bebidas', nutritionPer100g: { kcal: 42, proteins: 0.3, carbs: 3.5, fats: 0.0 }, defaultServingG: 330, unit: 'ml', emoji: '🍺' },
  { id: 'carr2-cafe-molido', name: 'Café Molido', brand: 'Carrefour', supermarket: 'carrefour', category: 'bebidas', nutritionPer100g: { kcal: 2, proteins: 0.1, carbs: 0.0, fats: 0.0 }, defaultServingG: 200, unit: 'ml', emoji: '☕' },
  { id: 'carr2-agua-mineral', name: 'Agua Mineral', brand: 'Carrefour', supermarket: 'carrefour', category: 'bebidas', nutritionPer100g: { kcal: 0, proteins: 0.0, carbs: 0.0, fats: 0.0 }, defaultServingG: 500, unit: 'ml', emoji: '💧' },
  { id: 'carr2-te-verde', name: 'Té Verde', brand: 'Carrefour Bio', supermarket: 'carrefour', category: 'bebidas', nutritionPer100g: { kcal: 1, proteins: 0.0, carbs: 0.0, fats: 0.0 }, defaultServingG: 250, unit: 'ml', emoji: '🍵' },
  { id: 'carr2-cacao-soluble', name: 'Cacao Soluble', brand: 'Carrefour', supermarket: 'carrefour', category: 'bebidas', nutritionPer100g: { kcal: 378, proteins: 5.0, carbs: 79.0, fats: 3.5 }, defaultServingG: 15, unit: 'g', emoji: '☕' },

  // --- Snacks ---
  { id: 'carr2-patatas-fritas', name: 'Patatas Fritas Clásicas', brand: 'Carrefour', supermarket: 'carrefour', category: 'snacks', nutritionPer100g: { kcal: 528, proteins: 6.0, carbs: 51.0, fats: 33.0 }, defaultServingG: 30, unit: 'g', emoji: '🍟' },
  { id: 'carr2-frutos-secos-mix', name: 'Mix de Frutos Secos', brand: 'Carrefour', supermarket: 'carrefour', category: 'snacks', nutritionPer100g: { kcal: 585, proteins: 17.5, carbs: 14.0, fats: 50.0 }, defaultServingG: 30, unit: 'g', emoji: '🥜' },
  { id: 'carr2-aceitunas-verdes', name: 'Aceitunas Verdes', brand: 'Carrefour', supermarket: 'carrefour', category: 'snacks', nutritionPer100g: { kcal: 142, proteins: 1.0, carbs: 1.0, fats: 14.5 }, defaultServingG: 30, unit: 'g', emoji: '🫒' },
  { id: 'carr2-almendras', name: 'Almendras Tostadas', brand: 'Carrefour', supermarket: 'carrefour', category: 'snacks', nutritionPer100g: { kcal: 600, proteins: 21.5, carbs: 7.0, fats: 52.0 }, defaultServingG: 25, unit: 'g', emoji: '🥜' },
  { id: 'carr2-nachos', name: 'Nachos', brand: 'Simpl', supermarket: 'carrefour', category: 'snacks', nutritionPer100g: { kcal: 478, proteins: 6.5, carbs: 59.0, fats: 23.0 }, defaultServingG: 30, unit: 'g', emoji: '🌮' },

  // --- Congelados ---
  { id: 'carr2-pizza-margarita', name: 'Pizza Margarita', brand: 'Carrefour', supermarket: 'carrefour', category: 'congelados', nutritionPer100g: { kcal: 230, proteins: 9.5, carbs: 27.0, fats: 9.0 }, defaultServingG: 175, unit: 'g', emoji: '🍕' },
  { id: 'carr2-croquetas-jamon', name: 'Croquetas de Jamón', brand: 'Carrefour', supermarket: 'carrefour', category: 'congelados', nutritionPer100g: { kcal: 192, proteins: 5.5, carbs: 21.0, fats: 9.5 }, defaultServingG: 100, unit: 'g', emoji: '🍘' },
  { id: 'carr2-nuggets-pollo', name: 'Nuggets de Pollo', brand: 'Carrefour', supermarket: 'carrefour', category: 'congelados', nutritionPer100g: { kcal: 238, proteins: 14.0, carbs: 17.5, fats: 12.5 }, defaultServingG: 100, unit: 'g', emoji: '🍗' },
  { id: 'carr2-verduras-cong', name: 'Verduras Congeladas Mix', brand: 'Carrefour', supermarket: 'carrefour', category: 'congelados', nutritionPer100g: { kcal: 40, proteins: 2.5, carbs: 5.0, fats: 0.5 }, defaultServingG: 200, unit: 'g', emoji: '🥦' },
  { id: 'carr2-helado-vainilla', name: 'Helado de Vainilla', brand: 'Carrefour', supermarket: 'carrefour', category: 'congelados', nutritionPer100g: { kcal: 205, proteins: 3.5, carbs: 24.0, fats: 10.5 }, defaultServingG: 75, unit: 'g', emoji: '🍨' },
  { id: 'carr2-pescado-empanado', name: 'Filetes de Pescado Empanado', brand: 'Carrefour', supermarket: 'carrefour', category: 'congelados', nutritionPer100g: { kcal: 200, proteins: 12.0, carbs: 17.5, fats: 9.0 }, defaultServingG: 100, unit: 'g', emoji: '🐟' },

  // --- Dulces ---
  { id: 'carr2-chocolate-negro', name: 'Chocolate Negro 72%', brand: 'Carrefour', supermarket: 'carrefour', category: 'dulces', nutritionPer100g: { kcal: 548, proteins: 8.5, carbs: 37.0, fats: 39.0 }, defaultServingG: 25, unit: 'g', emoji: '🍫' },
  { id: 'carr2-galletas-digestive', name: 'Galletas Digestive', brand: 'Carrefour', supermarket: 'carrefour', category: 'dulces', nutritionPer100g: { kcal: 468, proteins: 7.0, carbs: 63.0, fats: 20.5 }, defaultServingG: 15, unit: 'g', emoji: '🍪' },
  { id: 'carr2-galletas-maria', name: 'Galletas María', brand: 'Simpl', supermarket: 'carrefour', category: 'dulces', nutritionPer100g: { kcal: 440, proteins: 7.0, carbs: 72.0, fats: 14.0 }, defaultServingG: 12, unit: 'g', emoji: '🍪' },
  { id: 'carr2-mermelada-fresa', name: 'Mermelada de Fresa', brand: 'Carrefour', supermarket: 'carrefour', category: 'dulces', nutritionPer100g: { kcal: 248, proteins: 0.3, carbs: 61.0, fats: 0.1 }, defaultServingG: 20, unit: 'g', emoji: '🍓' },
  { id: 'carr2-miel', name: 'Miel de Flores', brand: 'Carrefour', supermarket: 'carrefour', category: 'dulces', nutritionPer100g: { kcal: 322, proteins: 0.3, carbs: 80.0, fats: 0.0 }, defaultServingG: 15, unit: 'g', emoji: '🍯' },
  { id: 'carr2-crema-cacao', name: 'Crema de Cacao y Avellanas', brand: 'Carrefour', supermarket: 'carrefour', category: 'dulces', nutritionPer100g: { kcal: 538, proteins: 6.0, carbs: 55.0, fats: 32.0 }, defaultServingG: 20, unit: 'g', emoji: '🍫' },

  // --- Conservas ---
  { id: 'carr2-atun-aceite', name: 'Atún en Aceite de Oliva', brand: 'Carrefour', supermarket: 'carrefour', category: 'conservas', nutritionPer100g: { kcal: 196, proteins: 25.0, carbs: 0.0, fats: 10.5 }, defaultServingG: 52, unit: 'g', emoji: '🥫' },
  { id: 'carr2-atun-natural', name: 'Atún al Natural', brand: 'Carrefour', supermarket: 'carrefour', category: 'conservas', nutritionPer100g: { kcal: 100, proteins: 23.5, carbs: 0.0, fats: 0.5 }, defaultServingG: 52, unit: 'g', emoji: '🥫' },
  { id: 'carr2-sardinas-aceite', name: 'Sardinas en Aceite', brand: 'Carrefour', supermarket: 'carrefour', category: 'conservas', nutritionPer100g: { kcal: 218, proteins: 21.5, carbs: 0.0, fats: 14.5 }, defaultServingG: 80, unit: 'g', emoji: '🥫' },
  { id: 'carr2-tomate-triturado', name: 'Tomate Triturado', brand: 'Carrefour', supermarket: 'carrefour', category: 'conservas', nutritionPer100g: { kcal: 25, proteins: 1.2, carbs: 3.5, fats: 0.1 }, defaultServingG: 100, unit: 'g', emoji: '🥫' },
  { id: 'carr2-caldo-pollo', name: 'Caldo de Pollo', brand: 'Carrefour', supermarket: 'carrefour', category: 'conservas', nutritionPer100g: { kcal: 9, proteins: 0.4, carbs: 0.5, fats: 0.4 }, defaultServingG: 250, unit: 'ml', emoji: '🥣' },
  { id: 'carr2-gazpacho', name: 'Gazpacho', brand: 'Carrefour', supermarket: 'carrefour', category: 'conservas', nutritionPer100g: { kcal: 36, proteins: 0.7, carbs: 3.2, fats: 2.0 }, defaultServingG: 250, unit: 'ml', emoji: '🥫' },

  // --- Salsas ---
  { id: 'carr2-tomate-frito', name: 'Tomate Frito', brand: 'Carrefour', supermarket: 'carrefour', category: 'salsas', nutritionPer100g: { kcal: 76, proteins: 1.2, carbs: 8.0, fats: 4.0 }, defaultServingG: 50, unit: 'g', emoji: '🍅' },
  { id: 'carr2-mayonesa', name: 'Mayonesa', brand: 'Carrefour', supermarket: 'carrefour', category: 'salsas', nutritionPer100g: { kcal: 685, proteins: 1.0, carbs: 2.0, fats: 75.0 }, defaultServingG: 15, unit: 'g', emoji: '🥫' },
  { id: 'carr2-ketchup', name: 'Ketchup', brand: 'Carrefour', supermarket: 'carrefour', category: 'salsas', nutritionPer100g: { kcal: 110, proteins: 1.2, carbs: 23.5, fats: 0.2 }, defaultServingG: 15, unit: 'g', emoji: '🥫' },
  { id: 'carr2-mostaza', name: 'Mostaza', brand: 'Carrefour', supermarket: 'carrefour', category: 'salsas', nutritionPer100g: { kcal: 65, proteins: 4.0, carbs: 3.5, fats: 3.5 }, defaultServingG: 10, unit: 'g', emoji: '🥫' },
  { id: 'carr2-salsa-soja', name: 'Salsa de Soja', brand: 'Carrefour', supermarket: 'carrefour', category: 'salsas', nutritionPer100g: { kcal: 55, proteins: 6.0, carbs: 5.5, fats: 0.1 }, defaultServingG: 15, unit: 'ml', emoji: '🥫' },
  { id: 'carr2-pesto', name: 'Pesto alla Genovese', brand: 'Carrefour', supermarket: 'carrefour', category: 'salsas', nutritionPer100g: { kcal: 380, proteins: 5.0, carbs: 6.0, fats: 38.0 }, defaultServingG: 30, unit: 'g', emoji: '🌿' },

  // --- Aceites ---
  { id: 'carr2-aceite-oliva', name: 'Aceite de Oliva Virgen Extra', brand: 'Carrefour', supermarket: 'carrefour', category: 'aceites', nutritionPer100g: { kcal: 824, proteins: 0.0, carbs: 0.0, fats: 91.6 }, defaultServingG: 10, unit: 'ml', emoji: '🫒' },
  { id: 'carr2-aceite-girasol', name: 'Aceite de Girasol', brand: 'Carrefour', supermarket: 'carrefour', category: 'aceites', nutritionPer100g: { kcal: 824, proteins: 0.0, carbs: 0.0, fats: 91.6 }, defaultServingG: 10, unit: 'ml', emoji: '🌻' },

  // --- Huevos ---
  { id: 'carr2-huevos-l', name: 'Huevos Talla L (x12)', brand: 'Carrefour', supermarket: 'carrefour', category: 'huevos', nutritionPer100g: { kcal: 143, proteins: 12.5, carbs: 0.7, fats: 9.8 }, defaultServingG: 60, unit: 'g', emoji: '🥚' },
  { id: 'carr2-huevos-camperos', name: 'Huevos Camperos (x6)', brand: 'Carrefour Bio', supermarket: 'carrefour', category: 'huevos', nutritionPer100g: { kcal: 143, proteins: 12.5, carbs: 0.7, fats: 9.8 }, defaultServingG: 60, unit: 'g', emoji: '🥚' },
];
