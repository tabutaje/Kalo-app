import { Product } from '@/types';

// ═══════════════════════════════════════════
// ██  DIA (Dia / Bonté / El Cid / AS)     ██
// ═══════════════════════════════════════════

export const productsDia: Product[] = [
  // --- Lácteos ---
  { id: 'dia2-leche-entera', name: 'Leche Entera', brand: 'Dia', supermarket: 'dia', category: 'lacteos', nutritionPer100g: { kcal: 64, proteins: 3.1, carbs: 4.8, fats: 3.6 }, defaultServingG: 250, unit: 'ml', emoji: '🥛' },
  { id: 'dia2-leche-semi', name: 'Leche Semidesnatada', brand: 'Dia', supermarket: 'dia', category: 'lacteos', nutritionPer100g: { kcal: 46, proteins: 3.2, carbs: 4.8, fats: 1.6 }, defaultServingG: 250, unit: 'ml', emoji: '🥛' },
  { id: 'dia2-leche-desnatada', name: 'Leche Desnatada', brand: 'Dia', supermarket: 'dia', category: 'lacteos', nutritionPer100g: { kcal: 34, proteins: 3.3, carbs: 4.9, fats: 0.1 }, defaultServingG: 250, unit: 'ml', emoji: '🥛' },
  { id: 'dia2-yogur-natural', name: 'Yogur Natural', brand: 'Dia', supermarket: 'dia', category: 'lacteos', nutritionPer100g: { kcal: 62, proteins: 3.8, carbs: 4.6, fats: 3.1 }, defaultServingG: 125, unit: 'g', emoji: '🫙' },
  { id: 'dia2-yogur-griego', name: 'Yogur Griego', brand: 'Dia', supermarket: 'dia', category: 'lacteos', nutritionPer100g: { kcal: 115, proteins: 3.3, carbs: 5.0, fats: 8.5 }, defaultServingG: 125, unit: 'g', emoji: '🫙' },
  { id: 'dia2-queso-lonchas', name: 'Queso en Lonchas', brand: 'Dia', supermarket: 'dia', category: 'lacteos', nutritionPer100g: { kcal: 310, proteins: 21.0, carbs: 1.8, fats: 24.0 }, defaultServingG: 20, unit: 'g', emoji: '🧀' },
  { id: 'dia2-queso-fresco', name: 'Queso Fresco', brand: 'Dia', supermarket: 'dia', category: 'lacteos', nutritionPer100g: { kcal: 175, proteins: 11.5, carbs: 2.8, fats: 13.0 }, defaultServingG: 75, unit: 'g', emoji: '🧀' },
  { id: 'dia2-natillas-vainilla', name: 'Natillas de Vainilla', brand: 'Dia', supermarket: 'dia', category: 'lacteos', nutritionPer100g: { kcal: 114, proteins: 3.0, carbs: 17.0, fats: 3.5 }, defaultServingG: 125, unit: 'g', emoji: '🍮' },
  { id: 'dia2-batido-chocolate', name: 'Batido de Chocolate', brand: 'Dia', supermarket: 'dia', category: 'lacteos', nutritionPer100g: { kcal: 72, proteins: 3.0, carbs: 10.5, fats: 1.8 }, defaultServingG: 200, unit: 'ml', emoji: '🥛' },
  { id: 'dia2-nata-cocinar', name: 'Nata para Cocinar', brand: 'Dia', supermarket: 'dia', category: 'lacteos', nutritionPer100g: { kcal: 130, proteins: 2.4, carbs: 3.9, fats: 12.0 }, defaultServingG: 50, unit: 'ml', emoji: '🍶' },
  { id: 'dia2-mantequilla', name: 'Mantequilla', brand: 'Dia', supermarket: 'dia', category: 'lacteos', nutritionPer100g: { kcal: 720, proteins: 0.8, carbs: 0.1, fats: 81.0 }, defaultServingG: 10, unit: 'g', emoji: '🧈' },
  { id: 'dia2-kefir-natural', name: 'Kéfir Natural', brand: 'Dia', supermarket: 'dia', category: 'lacteos', nutritionPer100g: { kcal: 55, proteins: 3.3, carbs: 4.0, fats: 2.5 }, defaultServingG: 200, unit: 'ml', emoji: '🥛' },

  // --- Carnes ---
  { id: 'dia2-pechuga-pollo', name: 'Pechuga de Pollo', brand: 'Dia', supermarket: 'dia', category: 'carnes', nutritionPer100g: { kcal: 108, proteins: 23.0, carbs: 0.0, fats: 1.5 }, defaultServingG: 150, unit: 'g', emoji: '🍗' },
  { id: 'dia2-carne-picada-mixta', name: 'Carne Picada Mixta', brand: 'Dia', supermarket: 'dia', category: 'carnes', nutritionPer100g: { kcal: 218, proteins: 16.5, carbs: 0.5, fats: 16.5 }, defaultServingG: 150, unit: 'g', emoji: '🥩' },
  { id: 'dia2-filete-ternera', name: 'Filete de Ternera', brand: 'Dia', supermarket: 'dia', category: 'carnes', nutritionPer100g: { kcal: 130, proteins: 21.0, carbs: 0.0, fats: 5.0 }, defaultServingG: 150, unit: 'g', emoji: '🥩' },
  { id: 'dia2-chuleta-cerdo', name: 'Chuleta de Cerdo', brand: 'Dia', supermarket: 'dia', category: 'carnes', nutritionPer100g: { kcal: 208, proteins: 18.5, carbs: 0.0, fats: 15.0 }, defaultServingG: 150, unit: 'g', emoji: '🥩' },
  { id: 'dia2-pechuga-pavo', name: 'Pechuga de Pavo', brand: 'Dia', supermarket: 'dia', category: 'carnes', nutritionPer100g: { kcal: 105, proteins: 24.0, carbs: 0.0, fats: 1.0 }, defaultServingG: 150, unit: 'g', emoji: '🍗' },
  { id: 'dia2-hamburguesa-vacuno', name: 'Hamburguesa de Vacuno', brand: 'Dia', supermarket: 'dia', category: 'carnes', nutritionPer100g: { kcal: 225, proteins: 16.0, carbs: 3.5, fats: 16.0 }, defaultServingG: 100, unit: 'g', emoji: '🍔' },
  { id: 'dia2-albondigas-mixtas', name: 'Albóndigas Mixtas', brand: 'Dia', supermarket: 'dia', category: 'carnes', nutritionPer100g: { kcal: 195, proteins: 14.0, carbs: 6.0, fats: 12.5 }, defaultServingG: 150, unit: 'g', emoji: '🍖' },
  { id: 'dia2-salchichas-cerdo', name: 'Salchichas de Cerdo', brand: 'Dia', supermarket: 'dia', category: 'carnes', nutritionPer100g: { kcal: 260, proteins: 13.0, carbs: 1.5, fats: 22.0 }, defaultServingG: 80, unit: 'g', emoji: '🌭' },

  // --- Pescados ---
  { id: 'dia2-salmon-fresco', name: 'Salmón Fresco', brand: 'Dia', supermarket: 'dia', category: 'pescados', nutritionPer100g: { kcal: 206, proteins: 20.0, carbs: 0.0, fats: 13.5 }, defaultServingG: 125, unit: 'g', emoji: '🐟' },
  { id: 'dia2-merluza-filetes', name: 'Merluza en Filetes', brand: 'Dia', supermarket: 'dia', category: 'pescados', nutritionPer100g: { kcal: 80, proteins: 17.0, carbs: 0.0, fats: 1.2 }, defaultServingG: 150, unit: 'g', emoji: '🐟' },
  { id: 'dia2-gambas-peladas', name: 'Gambas Peladas', brand: 'Dia', supermarket: 'dia', category: 'pescados', nutritionPer100g: { kcal: 85, proteins: 18.0, carbs: 0.5, fats: 1.0 }, defaultServingG: 100, unit: 'g', emoji: '🦐' },
  { id: 'dia2-sardinas-frescas', name: 'Sardinas Frescas', brand: 'Dia', supermarket: 'dia', category: 'pescados', nutritionPer100g: { kcal: 174, proteins: 18.0, carbs: 0.0, fats: 11.0 }, defaultServingG: 120, unit: 'g', emoji: '🐟' },

  // --- Embutidos ---
  { id: 'dia2-jamon-cocido', name: 'Jamón Cocido Extra', brand: 'El Cid', supermarket: 'dia', category: 'embutidos', nutritionPer100g: { kcal: 108, proteins: 18.0, carbs: 1.0, fats: 3.5 }, defaultServingG: 40, unit: 'g', emoji: '🥩' },
  { id: 'dia2-pavo-lonchas', name: 'Pechuga de Pavo en Lonchas', brand: 'El Cid', supermarket: 'dia', category: 'embutidos', nutritionPer100g: { kcal: 95, proteins: 17.0, carbs: 1.5, fats: 2.0 }, defaultServingG: 40, unit: 'g', emoji: '🍖' },
  { id: 'dia2-chorizo-extra', name: 'Chorizo Extra', brand: 'El Cid', supermarket: 'dia', category: 'embutidos', nutritionPer100g: { kcal: 380, proteins: 22.0, carbs: 1.8, fats: 32.0 }, defaultServingG: 30, unit: 'g', emoji: '🌶️' },
  { id: 'dia2-salchichon', name: 'Salchichón Extra', brand: 'El Cid', supermarket: 'dia', category: 'embutidos', nutritionPer100g: { kcal: 390, proteins: 24.0, carbs: 1.0, fats: 32.0 }, defaultServingG: 30, unit: 'g', emoji: '🥩' },
  { id: 'dia2-fuet', name: 'Fuet Extra', brand: 'El Cid', supermarket: 'dia', category: 'embutidos', nutritionPer100g: { kcal: 425, proteins: 28.0, carbs: 1.5, fats: 34.0 }, defaultServingG: 25, unit: 'g', emoji: '🥩' },
  { id: 'dia2-bacon-lonchas', name: 'Bacon en Lonchas', brand: 'Dia', supermarket: 'dia', category: 'embutidos', nutritionPer100g: { kcal: 280, proteins: 16.0, carbs: 0.5, fats: 24.0 }, defaultServingG: 30, unit: 'g', emoji: '🥓' },

  // --- Panadería ---
  { id: 'dia2-pan-molde', name: 'Pan de Molde', brand: 'Dia', supermarket: 'dia', category: 'panaderia', nutritionPer100g: { kcal: 260, proteins: 8.0, carbs: 48.0, fats: 3.5 }, defaultServingG: 28, unit: 'g', emoji: '🍞' },
  { id: 'dia2-pan-integral', name: 'Pan de Molde Integral', brand: 'Dia', supermarket: 'dia', category: 'panaderia', nutritionPer100g: { kcal: 240, proteins: 9.5, carbs: 40.0, fats: 3.8 }, defaultServingG: 28, unit: 'g', emoji: '🍞' },
  { id: 'dia2-baguette', name: 'Baguette', brand: 'Dia', supermarket: 'dia', category: 'panaderia', nutritionPer100g: { kcal: 270, proteins: 9.0, carbs: 52.0, fats: 1.5 }, defaultServingG: 125, unit: 'g', emoji: '🥖' },
  { id: 'dia2-tostadas', name: 'Pan Tostado', brand: 'Dia', supermarket: 'dia', category: 'panaderia', nutritionPer100g: { kcal: 395, proteins: 10.0, carbs: 72.0, fats: 6.0 }, defaultServingG: 10, unit: 'g', emoji: '🍞' },
  { id: 'dia2-croissants', name: 'Croissants', brand: 'Dia', supermarket: 'dia', category: 'panaderia', nutritionPer100g: { kcal: 410, proteins: 7.5, carbs: 46.0, fats: 22.0 }, defaultServingG: 50, unit: 'g', emoji: '🥐' },
  { id: 'dia2-magdalenas', name: 'Magdalenas', brand: 'Dia', supermarket: 'dia', category: 'panaderia', nutritionPer100g: { kcal: 400, proteins: 6.0, carbs: 50.0, fats: 20.0 }, defaultServingG: 35, unit: 'g', emoji: '🧁' },

  // --- Cereales ---
  { id: 'dia2-arroz-redondo', name: 'Arroz Redondo', brand: 'Dia', supermarket: 'dia', category: 'cereales', nutritionPer100g: { kcal: 350, proteins: 7.0, carbs: 78.0, fats: 0.6 }, defaultServingG: 80, unit: 'g', emoji: '🍚' },
  { id: 'dia2-pasta-macarrones', name: 'Macarrones', brand: 'AS', supermarket: 'dia', category: 'cereales', nutritionPer100g: { kcal: 355, proteins: 12.5, carbs: 71.0, fats: 1.8 }, defaultServingG: 80, unit: 'g', emoji: '🍝' },
  { id: 'dia2-espaguetis', name: 'Espaguetis', brand: 'AS', supermarket: 'dia', category: 'cereales', nutritionPer100g: { kcal: 355, proteins: 12.5, carbs: 71.0, fats: 1.8 }, defaultServingG: 80, unit: 'g', emoji: '🍝' },
  { id: 'dia2-avena-copos', name: 'Copos de Avena', brand: 'Dia', supermarket: 'dia', category: 'cereales', nutritionPer100g: { kcal: 368, proteins: 11.0, carbs: 60.0, fats: 7.0 }, defaultServingG: 40, unit: 'g', emoji: '🥣' },
  { id: 'dia2-muesli', name: 'Muesli con Frutas', brand: 'Dia', supermarket: 'dia', category: 'cereales', nutritionPer100g: { kcal: 370, proteins: 8.5, carbs: 65.0, fats: 7.5 }, defaultServingG: 40, unit: 'g', emoji: '🥣' },

  // --- Legumbres ---
  { id: 'dia2-lentejas', name: 'Lentejas', brand: 'AS', supermarket: 'dia', category: 'legumbres', nutritionPer100g: { kcal: 338, proteins: 23.0, carbs: 52.0, fats: 1.5 }, defaultServingG: 80, unit: 'g', emoji: '🫘' },
  { id: 'dia2-garbanzos', name: 'Garbanzos', brand: 'AS', supermarket: 'dia', category: 'legumbres', nutritionPer100g: { kcal: 350, proteins: 20.0, carbs: 50.0, fats: 5.5 }, defaultServingG: 80, unit: 'g', emoji: '🫘' },
  { id: 'dia2-judias-blancas', name: 'Judías Blancas', brand: 'AS', supermarket: 'dia', category: 'legumbres', nutritionPer100g: { kcal: 310, proteins: 21.0, carbs: 46.0, fats: 1.5 }, defaultServingG: 80, unit: 'g', emoji: '🫘' },
  { id: 'dia2-hummus', name: 'Hummus Clásico', brand: 'Dia', supermarket: 'dia', category: 'legumbres', nutritionPer100g: { kcal: 240, proteins: 7.5, carbs: 14.0, fats: 17.0 }, defaultServingG: 50, unit: 'g', emoji: '🫘' },

  // --- Frutas ---
  { id: 'dia2-platano', name: 'Plátano', brand: 'Dia', supermarket: 'dia', category: 'frutas', nutritionPer100g: { kcal: 89, proteins: 1.1, carbs: 20.0, fats: 0.3 }, defaultServingG: 120, unit: 'g', emoji: '🍌' },
  { id: 'dia2-manzana', name: 'Manzana', brand: 'Dia', supermarket: 'dia', category: 'frutas', nutritionPer100g: { kcal: 52, proteins: 0.3, carbs: 12.0, fats: 0.2 }, defaultServingG: 180, unit: 'g', emoji: '🍎' },
  { id: 'dia2-naranja', name: 'Naranja', brand: 'Dia', supermarket: 'dia', category: 'frutas', nutritionPer100g: { kcal: 47, proteins: 0.9, carbs: 9.4, fats: 0.1 }, defaultServingG: 200, unit: 'g', emoji: '🍊' },
  { id: 'dia2-fresa', name: 'Fresas', brand: 'Dia', supermarket: 'dia', category: 'frutas', nutritionPer100g: { kcal: 33, proteins: 0.7, carbs: 5.5, fats: 0.3 }, defaultServingG: 150, unit: 'g', emoji: '🍓' },

  // --- Verduras ---
  { id: 'dia2-tomate', name: 'Tomate', brand: 'Dia', supermarket: 'dia', category: 'verduras', nutritionPer100g: { kcal: 18, proteins: 0.9, carbs: 2.6, fats: 0.2 }, defaultServingG: 150, unit: 'g', emoji: '🍅' },
  { id: 'dia2-lechuga', name: 'Lechuga', brand: 'Dia', supermarket: 'dia', category: 'verduras', nutritionPer100g: { kcal: 15, proteins: 1.4, carbs: 1.3, fats: 0.2 }, defaultServingG: 100, unit: 'g', emoji: '🥬' },
  { id: 'dia2-cebolla', name: 'Cebolla', brand: 'Dia', supermarket: 'dia', category: 'verduras', nutritionPer100g: { kcal: 40, proteins: 1.1, carbs: 7.6, fats: 0.1 }, defaultServingG: 100, unit: 'g', emoji: '🧅' },
  { id: 'dia2-zanahoria', name: 'Zanahoria', brand: 'Dia', supermarket: 'dia', category: 'verduras', nutritionPer100g: { kcal: 41, proteins: 0.9, carbs: 7.7, fats: 0.2 }, defaultServingG: 80, unit: 'g', emoji: '🥕' },
  { id: 'dia2-brocoli', name: 'Brócoli', brand: 'Dia', supermarket: 'dia', category: 'verduras', nutritionPer100g: { kcal: 34, proteins: 2.8, carbs: 4.0, fats: 0.4 }, defaultServingG: 150, unit: 'g', emoji: '🥦' },
  { id: 'dia2-espinacas', name: 'Espinacas', brand: 'Dia', supermarket: 'dia', category: 'verduras', nutritionPer100g: { kcal: 23, proteins: 2.9, carbs: 1.4, fats: 0.4 }, defaultServingG: 150, unit: 'g', emoji: '🥬' },
  { id: 'dia2-patata', name: 'Patata', brand: 'Dia', supermarket: 'dia', category: 'verduras', nutritionPer100g: { kcal: 77, proteins: 2.0, carbs: 15.4, fats: 0.1 }, defaultServingG: 200, unit: 'g', emoji: '🥔' },

  // --- Bebidas ---
  { id: 'dia2-agua-mineral', name: 'Agua Mineral', brand: 'Dia', supermarket: 'dia', category: 'bebidas', nutritionPer100g: { kcal: 0, proteins: 0.0, carbs: 0.0, fats: 0.0 }, defaultServingG: 330, unit: 'ml', emoji: '💧' },
  { id: 'dia2-cola', name: 'Refresco de Cola', brand: 'Dia', supermarket: 'dia', category: 'bebidas', nutritionPer100g: { kcal: 42, proteins: 0.0, carbs: 10.6, fats: 0.0 }, defaultServingG: 330, unit: 'ml', emoji: '🥤' },
  { id: 'dia2-zumo-naranja', name: 'Zumo de Naranja', brand: 'Dia', supermarket: 'dia', category: 'bebidas', nutritionPer100g: { kcal: 43, proteins: 0.6, carbs: 9.5, fats: 0.1 }, defaultServingG: 250, unit: 'ml', emoji: '🧃' },
  { id: 'dia2-cerveza', name: 'Cerveza Lager', brand: 'Dia', supermarket: 'dia', category: 'bebidas', nutritionPer100g: { kcal: 43, proteins: 0.3, carbs: 3.5, fats: 0.0 }, defaultServingG: 330, unit: 'ml', emoji: '🍺' },
  { id: 'dia2-cafe-molido', name: 'Café Molido Natural', brand: 'Dia', supermarket: 'dia', category: 'bebidas', nutritionPer100g: { kcal: 2, proteins: 0.1, carbs: 0.0, fats: 0.0 }, defaultServingG: 200, unit: 'ml', emoji: '☕' },

  // --- Snacks ---
  { id: 'dia2-patatas-fritas', name: 'Patatas Fritas Clásicas', brand: 'Dia', supermarket: 'dia', category: 'snacks', nutritionPer100g: { kcal: 530, proteins: 6.0, carbs: 52.0, fats: 33.0 }, defaultServingG: 30, unit: 'g', emoji: '🍟' },
  { id: 'dia2-aceitunas-manzanilla', name: 'Aceitunas Manzanilla', brand: 'Dia', supermarket: 'dia', category: 'snacks', nutritionPer100g: { kcal: 145, proteins: 1.0, carbs: 1.0, fats: 15.0 }, defaultServingG: 50, unit: 'g', emoji: '🫒' },
  { id: 'dia2-frutos-secos-mix', name: 'Mix de Frutos Secos', brand: 'Dia', supermarket: 'dia', category: 'snacks', nutritionPer100g: { kcal: 590, proteins: 18.0, carbs: 15.0, fats: 50.0 }, defaultServingG: 30, unit: 'g', emoji: '🥜' },

  // --- Congelados ---
  { id: 'dia2-pizza-4quesos', name: 'Pizza 4 Quesos', brand: 'Dia', supermarket: 'dia', category: 'congelados', nutritionPer100g: { kcal: 240, proteins: 11.0, carbs: 28.0, fats: 9.5 }, defaultServingG: 200, unit: 'g', emoji: '🍕' },
  { id: 'dia2-croquetas-jamon', name: 'Croquetas de Jamón', brand: 'Dia', supermarket: 'dia', category: 'congelados', nutritionPer100g: { kcal: 210, proteins: 6.5, carbs: 22.0, fats: 10.5 }, defaultServingG: 100, unit: 'g', emoji: '🍘' },
  { id: 'dia2-nuggets-pollo', name: 'Nuggets de Pollo', brand: 'Dia', supermarket: 'dia', category: 'congelados', nutritionPer100g: { kcal: 240, proteins: 13.0, carbs: 18.0, fats: 13.0 }, defaultServingG: 100, unit: 'g', emoji: '🍗' },
  { id: 'dia2-verduras-congeladas', name: 'Menestra de Verduras Congelada', brand: 'Dia', supermarket: 'dia', category: 'congelados', nutritionPer100g: { kcal: 42, proteins: 2.5, carbs: 5.5, fats: 0.5 }, defaultServingG: 200, unit: 'g', emoji: '🥦' },
  { id: 'dia2-helado-vainilla', name: 'Helado de Vainilla', brand: 'Dia', supermarket: 'dia', category: 'congelados', nutritionPer100g: { kcal: 200, proteins: 3.5, carbs: 24.0, fats: 10.0 }, defaultServingG: 100, unit: 'g', emoji: '🍦' },

  // --- Dulces ---
  { id: 'dia2-chocolate-con-leche', name: 'Chocolate con Leche', brand: 'Dia', supermarket: 'dia', category: 'dulces', nutritionPer100g: { kcal: 535, proteins: 7.0, carbs: 56.0, fats: 31.0 }, defaultServingG: 25, unit: 'g', emoji: '🍫' },
  { id: 'dia2-galletas-maria', name: 'Galletas María', brand: 'Dia', supermarket: 'dia', category: 'dulces', nutritionPer100g: { kcal: 450, proteins: 7.0, carbs: 72.0, fats: 14.0 }, defaultServingG: 12, unit: 'g', emoji: '🍪' },
  { id: 'dia2-mermelada-fresa', name: 'Mermelada de Fresa', brand: 'Dia', supermarket: 'dia', category: 'dulces', nutritionPer100g: { kcal: 250, proteins: 0.4, carbs: 60.0, fats: 0.1 }, defaultServingG: 20, unit: 'g', emoji: '🍓' },
  { id: 'dia2-miel', name: 'Miel de Flores', brand: 'Dia', supermarket: 'dia', category: 'dulces', nutritionPer100g: { kcal: 320, proteins: 0.3, carbs: 78.0, fats: 0.0 }, defaultServingG: 15, unit: 'g', emoji: '🍯' },

  // --- Conservas ---
  { id: 'dia2-atun-aceite', name: 'Atún en Aceite de Oliva', brand: 'Dia', supermarket: 'dia', category: 'conservas', nutritionPer100g: { kcal: 198, proteins: 25.0, carbs: 0.0, fats: 10.5 }, defaultServingG: 52, unit: 'g', emoji: '🥫' },
  { id: 'dia2-tomate-triturado', name: 'Tomate Triturado', brand: 'AS', supermarket: 'dia', category: 'conservas', nutritionPer100g: { kcal: 28, proteins: 1.2, carbs: 4.0, fats: 0.2 }, defaultServingG: 100, unit: 'g', emoji: '🥫' },
  { id: 'dia2-garbanzos-bote', name: 'Garbanzos Cocidos en Tarro', brand: 'AS', supermarket: 'dia', category: 'conservas', nutritionPer100g: { kcal: 130, proteins: 7.0, carbs: 18.0, fats: 2.5 }, defaultServingG: 125, unit: 'g', emoji: '🥫' },
  { id: 'dia2-caldo-pollo', name: 'Caldo de Pollo', brand: 'Dia', supermarket: 'dia', category: 'conservas', nutritionPer100g: { kcal: 10, proteins: 0.5, carbs: 0.5, fats: 0.5 }, defaultServingG: 250, unit: 'ml', emoji: '🥣' },

  // --- Salsas ---
  { id: 'dia2-mayonesa', name: 'Mayonesa', brand: 'Dia', supermarket: 'dia', category: 'salsas', nutritionPer100g: { kcal: 680, proteins: 1.0, carbs: 2.0, fats: 74.0 }, defaultServingG: 15, unit: 'g', emoji: '🫙' },
  { id: 'dia2-ketchup', name: 'Ketchup', brand: 'Dia', supermarket: 'dia', category: 'salsas', nutritionPer100g: { kcal: 110, proteins: 1.3, carbs: 25.0, fats: 0.2 }, defaultServingG: 15, unit: 'g', emoji: '🫙' },
  { id: 'dia2-tomate-frito', name: 'Tomate Frito', brand: 'Dia', supermarket: 'dia', category: 'salsas', nutritionPer100g: { kcal: 78, proteins: 1.3, carbs: 9.0, fats: 3.8 }, defaultServingG: 50, unit: 'g', emoji: '🍅' },

  // --- Aceites ---
  { id: 'dia2-aceite-oliva-virgen', name: 'Aceite de Oliva Virgen Extra', brand: 'Dia', supermarket: 'dia', category: 'aceites', nutritionPer100g: { kcal: 900, proteins: 0.0, carbs: 0.0, fats: 100.0 }, defaultServingG: 10, unit: 'ml', emoji: '🫒' },
  { id: 'dia2-aceite-girasol', name: 'Aceite de Girasol', brand: 'AS', supermarket: 'dia', category: 'aceites', nutritionPer100g: { kcal: 900, proteins: 0.0, carbs: 0.0, fats: 100.0 }, defaultServingG: 10, unit: 'ml', emoji: '🌻' },

  // --- Huevos ---
  { id: 'dia2-huevos-camperos', name: 'Huevos Camperos L', brand: 'Dia', supermarket: 'dia', category: 'huevos', nutritionPer100g: { kcal: 143, proteins: 12.7, carbs: 0.7, fats: 9.8 }, defaultServingG: 60, unit: 'g', emoji: '🥚' },
];

// ═══════════════════════════════════════════
// ██  EROSKI (Eroski / Basic / Seleqtia / Natur) ██
// ═══════════════════════════════════════════

export const productsEroski: Product[] = [
  // --- Lácteos ---
  { id: 'ero2-leche-entera', name: 'Leche Entera', brand: 'Eroski', supermarket: 'eroski', category: 'lacteos', nutritionPer100g: { kcal: 63, proteins: 3.1, carbs: 4.7, fats: 3.5 }, defaultServingG: 250, unit: 'ml', emoji: '🥛' },
  { id: 'ero2-leche-semi', name: 'Leche Semidesnatada', brand: 'Eroski', supermarket: 'eroski', category: 'lacteos', nutritionPer100g: { kcal: 46, proteins: 3.1, carbs: 4.8, fats: 1.6 }, defaultServingG: 250, unit: 'ml', emoji: '🥛' },
  { id: 'ero2-leche-desnatada', name: 'Leche Desnatada', brand: 'Eroski', supermarket: 'eroski', category: 'lacteos', nutritionPer100g: { kcal: 35, proteins: 3.4, carbs: 5.0, fats: 0.1 }, defaultServingG: 250, unit: 'ml', emoji: '🥛' },
  { id: 'ero2-yogur-natural', name: 'Yogur Natural', brand: 'Eroski', supermarket: 'eroski', category: 'lacteos', nutritionPer100g: { kcal: 60, proteins: 3.7, carbs: 4.5, fats: 3.0 }, defaultServingG: 125, unit: 'g', emoji: '🫙' },
  { id: 'ero2-yogur-griego', name: 'Yogur Griego Natural', brand: 'Eroski', supermarket: 'eroski', category: 'lacteos', nutritionPer100g: { kcal: 112, proteins: 3.4, carbs: 5.0, fats: 8.2 }, defaultServingG: 125, unit: 'g', emoji: '🫙' },
  { id: 'ero2-queso-lonchas', name: 'Queso en Lonchas Tierno', brand: 'Eroski', supermarket: 'eroski', category: 'lacteos', nutritionPer100g: { kcal: 320, proteins: 22.0, carbs: 1.5, fats: 25.0 }, defaultServingG: 20, unit: 'g', emoji: '🧀' },
  { id: 'ero2-queso-fresco-batido', name: 'Queso Fresco Batido 0%', brand: 'Eroski', supermarket: 'eroski', category: 'lacteos', nutritionPer100g: { kcal: 48, proteins: 8.0, carbs: 3.6, fats: 0.2 }, defaultServingG: 250, unit: 'g', emoji: '🧀' },
  { id: 'ero2-queso-manchego-seleqtia', name: 'Queso Manchego Curado', brand: 'Eroski Seleqtia', supermarket: 'eroski', category: 'lacteos', nutritionPer100g: { kcal: 410, proteins: 27.0, carbs: 0.3, fats: 34.0 }, defaultServingG: 30, unit: 'g', emoji: '🧀' },
  { id: 'ero2-natillas-vainilla', name: 'Natillas de Vainilla', brand: 'Eroski', supermarket: 'eroski', category: 'lacteos', nutritionPer100g: { kcal: 112, proteins: 3.0, carbs: 16.5, fats: 3.5 }, defaultServingG: 125, unit: 'g', emoji: '🍮' },
  { id: 'ero2-batido-fresa', name: 'Batido de Fresa', brand: 'Eroski', supermarket: 'eroski', category: 'lacteos', nutritionPer100g: { kcal: 68, proteins: 2.8, carbs: 10.0, fats: 1.5 }, defaultServingG: 200, unit: 'ml', emoji: '🥛' },
  { id: 'ero2-nata-montar', name: 'Nata para Montar', brand: 'Eroski', supermarket: 'eroski', category: 'lacteos', nutritionPer100g: { kcal: 308, proteins: 2.0, carbs: 3.2, fats: 32.0 }, defaultServingG: 30, unit: 'ml', emoji: '🍶' },
  { id: 'ero2-mantequilla', name: 'Mantequilla', brand: 'Eroski', supermarket: 'eroski', category: 'lacteos', nutritionPer100g: { kcal: 718, proteins: 0.9, carbs: 0.1, fats: 81.0 }, defaultServingG: 10, unit: 'g', emoji: '🧈' },
  { id: 'ero2-kefir', name: 'Kéfir Natural', brand: 'Eroski Natur', supermarket: 'eroski', category: 'lacteos', nutritionPer100g: { kcal: 54, proteins: 3.2, carbs: 4.0, fats: 2.5 }, defaultServingG: 200, unit: 'ml', emoji: '🥛' },

  // --- Carnes ---
  { id: 'ero2-pechuga-pollo', name: 'Pechuga de Pollo', brand: 'Eroski Natur', supermarket: 'eroski', category: 'carnes', nutritionPer100g: { kcal: 110, proteins: 23.5, carbs: 0.0, fats: 1.5 }, defaultServingG: 150, unit: 'g', emoji: '🍗' },
  { id: 'ero2-carne-picada-mixta', name: 'Carne Picada Mixta', brand: 'Eroski', supermarket: 'eroski', category: 'carnes', nutritionPer100g: { kcal: 220, proteins: 16.5, carbs: 0.5, fats: 17.0 }, defaultServingG: 150, unit: 'g', emoji: '🥩' },
  { id: 'ero2-filete-ternera', name: 'Filete de Ternera', brand: 'Eroski Natur', supermarket: 'eroski', category: 'carnes', nutritionPer100g: { kcal: 128, proteins: 21.0, carbs: 0.0, fats: 4.8 }, defaultServingG: 150, unit: 'g', emoji: '🥩' },
  { id: 'ero2-chuleta-cerdo', name: 'Chuleta de Cerdo', brand: 'Eroski', supermarket: 'eroski', category: 'carnes', nutritionPer100g: { kcal: 210, proteins: 19.0, carbs: 0.0, fats: 15.0 }, defaultServingG: 150, unit: 'g', emoji: '🥩' },
  { id: 'ero2-pechuga-pavo', name: 'Pechuga de Pavo Fresca', brand: 'Eroski Natur', supermarket: 'eroski', category: 'carnes', nutritionPer100g: { kcal: 104, proteins: 23.5, carbs: 0.0, fats: 1.0 }, defaultServingG: 150, unit: 'g', emoji: '🍗' },
  { id: 'ero2-hamburguesa-vacuno', name: 'Hamburguesa de Vacuno', brand: 'Eroski', supermarket: 'eroski', category: 'carnes', nutritionPer100g: { kcal: 222, proteins: 16.5, carbs: 3.0, fats: 16.0 }, defaultServingG: 100, unit: 'g', emoji: '🍔' },
  { id: 'ero2-albondigas', name: 'Albóndigas de Pollo', brand: 'Eroski', supermarket: 'eroski', category: 'carnes', nutritionPer100g: { kcal: 180, proteins: 15.0, carbs: 5.0, fats: 10.0 }, defaultServingG: 150, unit: 'g', emoji: '🍖' },
  { id: 'ero2-salchichas-pavo', name: 'Salchichas de Pavo', brand: 'Eroski', supermarket: 'eroski', category: 'carnes', nutritionPer100g: { kcal: 165, proteins: 14.0, carbs: 2.0, fats: 11.0 }, defaultServingG: 80, unit: 'g', emoji: '🌭' },

  // --- Pescados ---
  { id: 'ero2-salmon-fresco', name: 'Salmón Fresco', brand: 'Eroski Natur', supermarket: 'eroski', category: 'pescados', nutritionPer100g: { kcal: 210, proteins: 20.0, carbs: 0.0, fats: 14.0 }, defaultServingG: 125, unit: 'g', emoji: '🐟' },
  { id: 'ero2-merluza-filetes', name: 'Merluza en Filetes', brand: 'Eroski', supermarket: 'eroski', category: 'pescados', nutritionPer100g: { kcal: 82, proteins: 17.0, carbs: 0.0, fats: 1.3 }, defaultServingG: 150, unit: 'g', emoji: '🐟' },
  { id: 'ero2-bacalao-fresco', name: 'Bacalao Fresco', brand: 'Eroski', supermarket: 'eroski', category: 'pescados', nutritionPer100g: { kcal: 78, proteins: 17.5, carbs: 0.0, fats: 0.7 }, defaultServingG: 150, unit: 'g', emoji: '🐟' },
  { id: 'ero2-gambas', name: 'Gambas Peladas', brand: 'Eroski', supermarket: 'eroski', category: 'pescados', nutritionPer100g: { kcal: 86, proteins: 18.5, carbs: 0.3, fats: 1.0 }, defaultServingG: 100, unit: 'g', emoji: '🦐' },

  // --- Embutidos ---
  { id: 'ero2-jamon-serrano', name: 'Jamón Serrano Gran Reserva', brand: 'Eroski Seleqtia', supermarket: 'eroski', category: 'embutidos', nutritionPer100g: { kcal: 240, proteins: 30.0, carbs: 0.5, fats: 13.0 }, defaultServingG: 40, unit: 'g', emoji: '🥩' },
  { id: 'ero2-jamon-cocido', name: 'Jamón Cocido Extra', brand: 'Eroski', supermarket: 'eroski', category: 'embutidos', nutritionPer100g: { kcal: 105, proteins: 18.0, carbs: 1.0, fats: 3.5 }, defaultServingG: 40, unit: 'g', emoji: '🥩' },
  { id: 'ero2-pavo-lonchas', name: 'Pechuga de Pavo en Lonchas', brand: 'Eroski', supermarket: 'eroski', category: 'embutidos', nutritionPer100g: { kcal: 98, proteins: 17.0, carbs: 1.5, fats: 2.5 }, defaultServingG: 40, unit: 'g', emoji: '🍖' },
  { id: 'ero2-chorizo', name: 'Chorizo Sarta', brand: 'Eroski', supermarket: 'eroski', category: 'embutidos', nutritionPer100g: { kcal: 375, proteins: 22.0, carbs: 2.0, fats: 31.0 }, defaultServingG: 30, unit: 'g', emoji: '🌶️' },
  { id: 'ero2-fuet', name: 'Fuet Extra', brand: 'Eroski', supermarket: 'eroski', category: 'embutidos', nutritionPer100g: { kcal: 420, proteins: 27.0, carbs: 1.5, fats: 34.0 }, defaultServingG: 25, unit: 'g', emoji: '🥩' },
  { id: 'ero2-bacon', name: 'Bacon Ahumado', brand: 'Eroski', supermarket: 'eroski', category: 'embutidos', nutritionPer100g: { kcal: 275, proteins: 16.5, carbs: 0.5, fats: 23.0 }, defaultServingG: 30, unit: 'g', emoji: '🥓' },

  // --- Panadería ---
  { id: 'ero2-pan-molde', name: 'Pan de Molde', brand: 'Eroski', supermarket: 'eroski', category: 'panaderia', nutritionPer100g: { kcal: 258, proteins: 8.0, carbs: 47.0, fats: 3.5 }, defaultServingG: 28, unit: 'g', emoji: '🍞' },
  { id: 'ero2-pan-integral', name: 'Pan de Molde Integral', brand: 'Eroski', supermarket: 'eroski', category: 'panaderia', nutritionPer100g: { kcal: 238, proteins: 10.0, carbs: 39.0, fats: 3.8 }, defaultServingG: 28, unit: 'g', emoji: '🍞' },
  { id: 'ero2-baguette', name: 'Baguette Precocida', brand: 'Eroski', supermarket: 'eroski', category: 'panaderia', nutritionPer100g: { kcal: 268, proteins: 8.5, carbs: 51.0, fats: 1.8 }, defaultServingG: 125, unit: 'g', emoji: '🥖' },
  { id: 'ero2-tostadas', name: 'Pan Tostado', brand: 'Eroski', supermarket: 'eroski', category: 'panaderia', nutritionPer100g: { kcal: 398, proteins: 10.0, carbs: 71.0, fats: 6.5 }, defaultServingG: 10, unit: 'g', emoji: '🍞' },
  { id: 'ero2-croissants', name: 'Croissants de Mantequilla', brand: 'Eroski Seleqtia', supermarket: 'eroski', category: 'panaderia', nutritionPer100g: { kcal: 420, proteins: 7.5, carbs: 44.0, fats: 24.0 }, defaultServingG: 55, unit: 'g', emoji: '🥐' },
  { id: 'ero2-magdalenas', name: 'Magdalenas Caseras', brand: 'Eroski', supermarket: 'eroski', category: 'panaderia', nutritionPer100g: { kcal: 405, proteins: 6.5, carbs: 48.0, fats: 21.0 }, defaultServingG: 35, unit: 'g', emoji: '🧁' },

  // --- Cereales ---
  { id: 'ero2-arroz-redondo', name: 'Arroz Redondo', brand: 'Eroski', supermarket: 'eroski', category: 'cereales', nutritionPer100g: { kcal: 352, proteins: 7.0, carbs: 78.0, fats: 0.7 }, defaultServingG: 80, unit: 'g', emoji: '🍚' },
  { id: 'ero2-pasta-macarrones', name: 'Macarrones', brand: 'Eroski Basic', supermarket: 'eroski', category: 'cereales', nutritionPer100g: { kcal: 354, proteins: 12.0, carbs: 72.0, fats: 1.5 }, defaultServingG: 80, unit: 'g', emoji: '🍝' },
  { id: 'ero2-espaguetis', name: 'Espaguetis', brand: 'Eroski Basic', supermarket: 'eroski', category: 'cereales', nutritionPer100g: { kcal: 354, proteins: 12.0, carbs: 72.0, fats: 1.5 }, defaultServingG: 80, unit: 'g', emoji: '🍝' },
  { id: 'ero2-avena-copos', name: 'Copos de Avena', brand: 'Eroski', supermarket: 'eroski', category: 'cereales', nutritionPer100g: { kcal: 370, proteins: 11.5, carbs: 60.0, fats: 7.0 }, defaultServingG: 40, unit: 'g', emoji: '🥣' },
  { id: 'ero2-muesli-chocolate', name: 'Muesli con Chocolate', brand: 'Eroski', supermarket: 'eroski', category: 'cereales', nutritionPer100g: { kcal: 410, proteins: 8.0, carbs: 63.0, fats: 13.0 }, defaultServingG: 40, unit: 'g', emoji: '🥣' },
  { id: 'ero2-quinoa', name: 'Quinoa', brand: 'Eroski Natur', supermarket: 'eroski', category: 'cereales', nutritionPer100g: { kcal: 360, proteins: 14.0, carbs: 58.0, fats: 6.0 }, defaultServingG: 70, unit: 'g', emoji: '🌾' },

  // --- Legumbres ---
  { id: 'ero2-lentejas', name: 'Lentejas Pardinas', brand: 'Eroski', supermarket: 'eroski', category: 'legumbres', nutritionPer100g: { kcal: 340, proteins: 24.0, carbs: 51.0, fats: 1.5 }, defaultServingG: 80, unit: 'g', emoji: '🫘' },
  { id: 'ero2-garbanzos', name: 'Garbanzos Lechosos', brand: 'Eroski', supermarket: 'eroski', category: 'legumbres', nutritionPer100g: { kcal: 348, proteins: 20.0, carbs: 49.0, fats: 5.5 }, defaultServingG: 80, unit: 'g', emoji: '🫘' },
  { id: 'ero2-judias-blancas', name: 'Judías Blancas', brand: 'Eroski', supermarket: 'eroski', category: 'legumbres', nutritionPer100g: { kcal: 315, proteins: 21.5, carbs: 45.0, fats: 1.5 }, defaultServingG: 80, unit: 'g', emoji: '🫘' },
  { id: 'ero2-hummus', name: 'Hummus', brand: 'Eroski', supermarket: 'eroski', category: 'legumbres', nutritionPer100g: { kcal: 235, proteins: 7.0, carbs: 13.0, fats: 17.0 }, defaultServingG: 50, unit: 'g', emoji: '🫘' },

  // --- Frutas ---
  { id: 'ero2-platano', name: 'Plátano de Canarias', brand: 'Eroski Natur', supermarket: 'eroski', category: 'frutas', nutritionPer100g: { kcal: 90, proteins: 1.1, carbs: 20.5, fats: 0.3 }, defaultServingG: 120, unit: 'g', emoji: '🍌' },
  { id: 'ero2-manzana', name: 'Manzana Golden', brand: 'Eroski Natur', supermarket: 'eroski', category: 'frutas', nutritionPer100g: { kcal: 53, proteins: 0.3, carbs: 12.5, fats: 0.2 }, defaultServingG: 180, unit: 'g', emoji: '🍎' },
  { id: 'ero2-naranja', name: 'Naranja de Zumo', brand: 'Eroski Natur', supermarket: 'eroski', category: 'frutas', nutritionPer100g: { kcal: 47, proteins: 0.9, carbs: 9.5, fats: 0.1 }, defaultServingG: 200, unit: 'g', emoji: '🍊' },
  { id: 'ero2-fresa', name: 'Fresas', brand: 'Eroski Natur', supermarket: 'eroski', category: 'frutas', nutritionPer100g: { kcal: 32, proteins: 0.7, carbs: 5.5, fats: 0.3 }, defaultServingG: 150, unit: 'g', emoji: '🍓' },
  { id: 'ero2-aguacate', name: 'Aguacate', brand: 'Eroski Natur', supermarket: 'eroski', category: 'frutas', nutritionPer100g: { kcal: 160, proteins: 2.0, carbs: 1.8, fats: 15.0 }, defaultServingG: 80, unit: 'g', emoji: '🥑' },

  // --- Verduras ---
  { id: 'ero2-tomate', name: 'Tomate', brand: 'Eroski Natur', supermarket: 'eroski', category: 'verduras', nutritionPer100g: { kcal: 18, proteins: 0.9, carbs: 2.6, fats: 0.2 }, defaultServingG: 150, unit: 'g', emoji: '🍅' },
  { id: 'ero2-lechuga', name: 'Lechuga Iceberg', brand: 'Eroski', supermarket: 'eroski', category: 'verduras', nutritionPer100g: { kcal: 14, proteins: 0.9, carbs: 1.8, fats: 0.1 }, defaultServingG: 100, unit: 'g', emoji: '🥬' },
  { id: 'ero2-cebolla', name: 'Cebolla', brand: 'Eroski Natur', supermarket: 'eroski', category: 'verduras', nutritionPer100g: { kcal: 40, proteins: 1.1, carbs: 7.6, fats: 0.1 }, defaultServingG: 100, unit: 'g', emoji: '🧅' },
  { id: 'ero2-pimiento-rojo', name: 'Pimiento Rojo', brand: 'Eroski Natur', supermarket: 'eroski', category: 'verduras', nutritionPer100g: { kcal: 31, proteins: 1.0, carbs: 5.0, fats: 0.3 }, defaultServingG: 150, unit: 'g', emoji: '🌶️' },
  { id: 'ero2-brocoli', name: 'Brócoli', brand: 'Eroski Natur', supermarket: 'eroski', category: 'verduras', nutritionPer100g: { kcal: 35, proteins: 2.8, carbs: 4.0, fats: 0.4 }, defaultServingG: 150, unit: 'g', emoji: '🥦' },
  { id: 'ero2-espinacas', name: 'Espinacas Baby', brand: 'Eroski Natur', supermarket: 'eroski', category: 'verduras', nutritionPer100g: { kcal: 23, proteins: 2.9, carbs: 1.4, fats: 0.4 }, defaultServingG: 100, unit: 'g', emoji: '🥬' },
  { id: 'ero2-calabacin', name: 'Calabacín', brand: 'Eroski Natur', supermarket: 'eroski', category: 'verduras', nutritionPer100g: { kcal: 17, proteins: 1.2, carbs: 2.0, fats: 0.3 }, defaultServingG: 200, unit: 'g', emoji: '🥒' },

  // --- Bebidas ---
  { id: 'ero2-agua-mineral', name: 'Agua Mineral Natural', brand: 'Eroski', supermarket: 'eroski', category: 'bebidas', nutritionPer100g: { kcal: 0, proteins: 0.0, carbs: 0.0, fats: 0.0 }, defaultServingG: 330, unit: 'ml', emoji: '💧' },
  { id: 'ero2-cola', name: 'Refresco de Cola', brand: 'Eroski', supermarket: 'eroski', category: 'bebidas', nutritionPer100g: { kcal: 42, proteins: 0.0, carbs: 10.5, fats: 0.0 }, defaultServingG: 330, unit: 'ml', emoji: '🥤' },
  { id: 'ero2-zumo-naranja', name: 'Zumo de Naranja Exprimido', brand: 'Eroski', supermarket: 'eroski', category: 'bebidas', nutritionPer100g: { kcal: 44, proteins: 0.7, carbs: 9.6, fats: 0.1 }, defaultServingG: 250, unit: 'ml', emoji: '🧃' },
  { id: 'ero2-cerveza', name: 'Cerveza Pilsen', brand: 'Eroski', supermarket: 'eroski', category: 'bebidas', nutritionPer100g: { kcal: 44, proteins: 0.3, carbs: 3.6, fats: 0.0 }, defaultServingG: 330, unit: 'ml', emoji: '🍺' },
  { id: 'ero2-vino-tinto', name: 'Vino Tinto Crianza', brand: 'Eroski Seleqtia', supermarket: 'eroski', category: 'bebidas', nutritionPer100g: { kcal: 75, proteins: 0.1, carbs: 0.3, fats: 0.0 }, defaultServingG: 150, unit: 'ml', emoji: '🍷' },
  { id: 'ero2-cafe-capsulas', name: 'Café en Cápsulas Intenso', brand: 'Eroski', supermarket: 'eroski', category: 'bebidas', nutritionPer100g: { kcal: 2, proteins: 0.1, carbs: 0.0, fats: 0.0 }, defaultServingG: 40, unit: 'ml', emoji: '☕' },

  // --- Snacks ---
  { id: 'ero2-patatas-fritas', name: 'Patatas Fritas Campesinas', brand: 'Eroski', supermarket: 'eroski', category: 'snacks', nutritionPer100g: { kcal: 525, proteins: 6.0, carbs: 51.0, fats: 33.0 }, defaultServingG: 30, unit: 'g', emoji: '🍟' },
  { id: 'ero2-aceitunas-rellenas', name: 'Aceitunas Rellenas de Anchoa', brand: 'Eroski', supermarket: 'eroski', category: 'snacks', nutritionPer100g: { kcal: 160, proteins: 1.2, carbs: 1.0, fats: 16.5 }, defaultServingG: 50, unit: 'g', emoji: '🫒' },
  { id: 'ero2-almendras-tostadas', name: 'Almendras Tostadas', brand: 'Eroski', supermarket: 'eroski', category: 'snacks', nutritionPer100g: { kcal: 610, proteins: 22.0, carbs: 7.0, fats: 54.0 }, defaultServingG: 30, unit: 'g', emoji: '🥜' },
  { id: 'ero2-palomitas', name: 'Palomitas para Microondas', brand: 'Eroski', supermarket: 'eroski', category: 'snacks', nutritionPer100g: { kcal: 460, proteins: 7.0, carbs: 52.0, fats: 25.0 }, defaultServingG: 30, unit: 'g', emoji: '🍿' },

  // --- Congelados ---
  { id: 'ero2-pizza-margarita', name: 'Pizza Margarita', brand: 'Eroski', supermarket: 'eroski', category: 'congelados', nutritionPer100g: { kcal: 230, proteins: 10.0, carbs: 28.0, fats: 8.5 }, defaultServingG: 200, unit: 'g', emoji: '🍕' },
  { id: 'ero2-croquetas', name: 'Croquetas de Jamón', brand: 'Eroski', supermarket: 'eroski', category: 'congelados', nutritionPer100g: { kcal: 215, proteins: 7.0, carbs: 21.0, fats: 11.0 }, defaultServingG: 100, unit: 'g', emoji: '🍘' },
  { id: 'ero2-nuggets', name: 'Nuggets de Pollo', brand: 'Eroski', supermarket: 'eroski', category: 'congelados', nutritionPer100g: { kcal: 238, proteins: 13.0, carbs: 17.0, fats: 13.0 }, defaultServingG: 100, unit: 'g', emoji: '🍗' },
  { id: 'ero2-verduras-cong', name: 'Verduras para Paella Congeladas', brand: 'Eroski', supermarket: 'eroski', category: 'congelados', nutritionPer100g: { kcal: 38, proteins: 2.0, carbs: 5.0, fats: 0.4 }, defaultServingG: 200, unit: 'g', emoji: '🥦' },
  { id: 'ero2-helado-chocolate', name: 'Helado de Chocolate', brand: 'Eroski', supermarket: 'eroski', category: 'congelados', nutritionPer100g: { kcal: 218, proteins: 3.8, carbs: 26.0, fats: 11.0 }, defaultServingG: 100, unit: 'g', emoji: '🍦' },

  // --- Dulces ---
  { id: 'ero2-chocolate-negro', name: 'Chocolate Negro 70%', brand: 'Eroski Seleqtia', supermarket: 'eroski', category: 'dulces', nutritionPer100g: { kcal: 550, proteins: 8.0, carbs: 38.0, fats: 40.0 }, defaultServingG: 25, unit: 'g', emoji: '🍫' },
  { id: 'ero2-galletas-digestive', name: 'Galletas Digestive', brand: 'Eroski', supermarket: 'eroski', category: 'dulces', nutritionPer100g: { kcal: 470, proteins: 7.0, carbs: 66.0, fats: 19.0 }, defaultServingG: 15, unit: 'g', emoji: '🍪' },
  { id: 'ero2-mermelada-melocoton', name: 'Mermelada de Melocotón', brand: 'Eroski', supermarket: 'eroski', category: 'dulces', nutritionPer100g: { kcal: 245, proteins: 0.4, carbs: 58.0, fats: 0.1 }, defaultServingG: 20, unit: 'g', emoji: '🍑' },
  { id: 'ero2-miel-romero', name: 'Miel de Romero', brand: 'Eroski Seleqtia', supermarket: 'eroski', category: 'dulces', nutritionPer100g: { kcal: 322, proteins: 0.3, carbs: 79.0, fats: 0.0 }, defaultServingG: 15, unit: 'g', emoji: '🍯' },

  // --- Conservas ---
  { id: 'ero2-atun-aceite', name: 'Atún Claro en Aceite', brand: 'Eroski', supermarket: 'eroski', category: 'conservas', nutritionPer100g: { kcal: 195, proteins: 25.5, carbs: 0.0, fats: 10.0 }, defaultServingG: 52, unit: 'g', emoji: '🥫' },
  { id: 'ero2-tomate-triturado', name: 'Tomate Triturado', brand: 'Eroski', supermarket: 'eroski', category: 'conservas', nutritionPer100g: { kcal: 30, proteins: 1.2, carbs: 4.2, fats: 0.2 }, defaultServingG: 100, unit: 'g', emoji: '🥫' },
  { id: 'ero2-lentejas-bote', name: 'Lentejas Cocidas en Tarro', brand: 'Eroski', supermarket: 'eroski', category: 'conservas', nutritionPer100g: { kcal: 95, proteins: 7.0, carbs: 13.0, fats: 0.5 }, defaultServingG: 125, unit: 'g', emoji: '🥫' },
  { id: 'ero2-caldo-verduras', name: 'Caldo de Verduras', brand: 'Eroski', supermarket: 'eroski', category: 'conservas', nutritionPer100g: { kcal: 8, proteins: 0.3, carbs: 0.6, fats: 0.4 }, defaultServingG: 250, unit: 'ml', emoji: '🥣' },

  // --- Salsas ---
  { id: 'ero2-mayonesa', name: 'Mayonesa', brand: 'Eroski', supermarket: 'eroski', category: 'salsas', nutritionPer100g: { kcal: 685, proteins: 1.0, carbs: 2.0, fats: 75.0 }, defaultServingG: 15, unit: 'g', emoji: '🫙' },
  { id: 'ero2-ketchup', name: 'Ketchup', brand: 'Eroski', supermarket: 'eroski', category: 'salsas', nutritionPer100g: { kcal: 112, proteins: 1.2, carbs: 25.0, fats: 0.2 }, defaultServingG: 15, unit: 'g', emoji: '🫙' },
  { id: 'ero2-tomate-frito', name: 'Tomate Frito Casero', brand: 'Eroski', supermarket: 'eroski', category: 'salsas', nutritionPer100g: { kcal: 76, proteins: 1.2, carbs: 8.5, fats: 3.8 }, defaultServingG: 50, unit: 'g', emoji: '🍅' },

  // --- Aceites ---
  { id: 'ero2-aceite-oliva-virgen', name: 'Aceite de Oliva Virgen Extra', brand: 'Eroski', supermarket: 'eroski', category: 'aceites', nutritionPer100g: { kcal: 900, proteins: 0.0, carbs: 0.0, fats: 100.0 }, defaultServingG: 10, unit: 'ml', emoji: '🫒' },
  { id: 'ero2-aceite-girasol', name: 'Aceite de Girasol', brand: 'Eroski Basic', supermarket: 'eroski', category: 'aceites', nutritionPer100g: { kcal: 900, proteins: 0.0, carbs: 0.0, fats: 100.0 }, defaultServingG: 10, unit: 'ml', emoji: '🌻' },

  // --- Huevos ---
  { id: 'ero2-huevos-camperos', name: 'Huevos Camperos L', brand: 'Eroski Natur', supermarket: 'eroski', category: 'huevos', nutritionPer100g: { kcal: 143, proteins: 12.7, carbs: 0.7, fats: 9.8 }, defaultServingG: 60, unit: 'g', emoji: '🥚' },
];

// ═══════════════════════════════════════════
// ██  ALDI (Milsani / GutBio / Snack Day / Cucina / Moser Roth / River / Trader Joe's) ██
// ═══════════════════════════════════════════

export const productsAldi: Product[] = [
  // --- Lácteos ---
  { id: 'aldi3-leche-entera', name: 'Leche Entera', brand: 'Milsani', supermarket: 'aldi', category: 'lacteos', nutritionPer100g: { kcal: 64, proteins: 3.2, carbs: 4.8, fats: 3.6 }, defaultServingG: 250, unit: 'ml', emoji: '🥛' },
  { id: 'aldi3-leche-semi', name: 'Leche Semidesnatada', brand: 'Milsani', supermarket: 'aldi', category: 'lacteos', nutritionPer100g: { kcal: 47, proteins: 3.2, carbs: 4.9, fats: 1.6 }, defaultServingG: 250, unit: 'ml', emoji: '🥛' },
  { id: 'aldi3-leche-desnatada', name: 'Leche Desnatada', brand: 'Milsani', supermarket: 'aldi', category: 'lacteos', nutritionPer100g: { kcal: 35, proteins: 3.4, carbs: 5.0, fats: 0.1 }, defaultServingG: 250, unit: 'ml', emoji: '🥛' },
  { id: 'aldi3-yogur-natural', name: 'Yogur Natural', brand: 'Milsani', supermarket: 'aldi', category: 'lacteos', nutritionPer100g: { kcal: 61, proteins: 3.8, carbs: 4.5, fats: 3.0 }, defaultServingG: 125, unit: 'g', emoji: '🫙' },
  { id: 'aldi3-yogur-griego', name: 'Yogur Griego Natural', brand: 'Milsani', supermarket: 'aldi', category: 'lacteos', nutritionPer100g: { kcal: 113, proteins: 3.5, carbs: 5.0, fats: 8.3 }, defaultServingG: 125, unit: 'g', emoji: '🫙' },
  { id: 'aldi3-queso-lonchas', name: 'Queso en Lonchas', brand: 'Milsani', supermarket: 'aldi', category: 'lacteos', nutritionPer100g: { kcal: 315, proteins: 21.5, carbs: 1.5, fats: 25.0 }, defaultServingG: 20, unit: 'g', emoji: '🧀' },
  { id: 'aldi3-queso-fresco', name: 'Queso Fresco', brand: 'Milsani', supermarket: 'aldi', category: 'lacteos', nutritionPer100g: { kcal: 170, proteins: 11.0, carbs: 2.5, fats: 13.0 }, defaultServingG: 75, unit: 'g', emoji: '🧀' },
  { id: 'aldi3-queso-emmental', name: 'Queso Emmental Lonchas', brand: 'Milsani', supermarket: 'aldi', category: 'lacteos', nutritionPer100g: { kcal: 370, proteins: 28.0, carbs: 0.5, fats: 29.0 }, defaultServingG: 20, unit: 'g', emoji: '🧀' },
  { id: 'aldi3-natillas-chocolate', name: 'Natillas de Chocolate', brand: 'Milsani', supermarket: 'aldi', category: 'lacteos', nutritionPer100g: { kcal: 125, proteins: 3.2, carbs: 18.0, fats: 4.0 }, defaultServingG: 125, unit: 'g', emoji: '🍮' },
  { id: 'aldi3-batido-vainilla', name: 'Batido de Vainilla', brand: 'Milsani', supermarket: 'aldi', category: 'lacteos', nutritionPer100g: { kcal: 70, proteins: 2.8, carbs: 10.5, fats: 1.6 }, defaultServingG: 200, unit: 'ml', emoji: '🥛' },
  { id: 'aldi3-nata-cocinar', name: 'Nata para Cocinar', brand: 'Milsani', supermarket: 'aldi', category: 'lacteos', nutritionPer100g: { kcal: 128, proteins: 2.5, carbs: 3.8, fats: 11.5 }, defaultServingG: 50, unit: 'ml', emoji: '🍶' },
  { id: 'aldi3-mantequilla', name: 'Mantequilla', brand: 'Milsani', supermarket: 'aldi', category: 'lacteos', nutritionPer100g: { kcal: 720, proteins: 0.8, carbs: 0.1, fats: 81.0 }, defaultServingG: 10, unit: 'g', emoji: '🧈' },
  { id: 'aldi3-kefir-bio', name: 'Kéfir Ecológico', brand: 'GutBio', supermarket: 'aldi', category: 'lacteos', nutritionPer100g: { kcal: 56, proteins: 3.3, carbs: 4.2, fats: 2.5 }, defaultServingG: 200, unit: 'ml', emoji: '🥛' },

  // --- Carnes ---
  { id: 'aldi3-pechuga-pollo', name: 'Pechuga de Pollo', brand: 'River', supermarket: 'aldi', category: 'carnes', nutritionPer100g: { kcal: 109, proteins: 23.0, carbs: 0.0, fats: 1.5 }, defaultServingG: 150, unit: 'g', emoji: '🍗' },
  { id: 'aldi3-carne-picada-vacuno', name: 'Carne Picada de Vacuno', brand: 'River', supermarket: 'aldi', category: 'carnes', nutritionPer100g: { kcal: 175, proteins: 20.0, carbs: 0.0, fats: 10.5 }, defaultServingG: 150, unit: 'g', emoji: '🥩' },
  { id: 'aldi3-carne-picada-mixta', name: 'Carne Picada Mixta', brand: 'River', supermarket: 'aldi', category: 'carnes', nutritionPer100g: { kcal: 220, proteins: 16.0, carbs: 0.5, fats: 17.0 }, defaultServingG: 150, unit: 'g', emoji: '🥩' },
  { id: 'aldi3-filete-ternera', name: 'Filete de Ternera', brand: 'River', supermarket: 'aldi', category: 'carnes', nutritionPer100g: { kcal: 132, proteins: 21.0, carbs: 0.0, fats: 5.0 }, defaultServingG: 150, unit: 'g', emoji: '🥩' },
  { id: 'aldi3-chuleta-cerdo', name: 'Chuleta de Cerdo', brand: 'River', supermarket: 'aldi', category: 'carnes', nutritionPer100g: { kcal: 205, proteins: 18.5, carbs: 0.0, fats: 14.5 }, defaultServingG: 150, unit: 'g', emoji: '🥩' },
  { id: 'aldi3-pechuga-pavo', name: 'Pechuga de Pavo', brand: 'River', supermarket: 'aldi', category: 'carnes', nutritionPer100g: { kcal: 106, proteins: 24.0, carbs: 0.0, fats: 1.0 }, defaultServingG: 150, unit: 'g', emoji: '🍗' },
  { id: 'aldi3-hamburguesa-vacuno', name: 'Hamburguesa de Vacuno', brand: 'River', supermarket: 'aldi', category: 'carnes', nutritionPer100g: { kcal: 228, proteins: 16.0, carbs: 3.5, fats: 16.5 }, defaultServingG: 100, unit: 'g', emoji: '🍔' },
  { id: 'aldi3-albondigas', name: 'Albóndigas de Vacuno', brand: 'River', supermarket: 'aldi', category: 'carnes', nutritionPer100g: { kcal: 190, proteins: 14.5, carbs: 5.0, fats: 12.0 }, defaultServingG: 150, unit: 'g', emoji: '🍖' },
  { id: 'aldi3-salchichas-bratwurst', name: 'Salchichas Bratwurst', brand: 'River', supermarket: 'aldi', category: 'carnes', nutritionPer100g: { kcal: 270, proteins: 13.0, carbs: 2.0, fats: 23.0 }, defaultServingG: 100, unit: 'g', emoji: '🌭' },

  // --- Pescados ---
  { id: 'aldi3-salmon-fresco', name: 'Salmón Fresco', brand: 'River', supermarket: 'aldi', category: 'pescados', nutritionPer100g: { kcal: 208, proteins: 20.0, carbs: 0.0, fats: 13.5 }, defaultServingG: 125, unit: 'g', emoji: '🐟' },
  { id: 'aldi3-merluza-filetes', name: 'Filetes de Merluza', brand: 'River', supermarket: 'aldi', category: 'pescados', nutritionPer100g: { kcal: 80, proteins: 17.0, carbs: 0.0, fats: 1.2 }, defaultServingG: 150, unit: 'g', emoji: '🐟' },
  { id: 'aldi3-bacalao-filetes', name: 'Filetes de Bacalao', brand: 'River', supermarket: 'aldi', category: 'pescados', nutritionPer100g: { kcal: 76, proteins: 17.0, carbs: 0.0, fats: 0.7 }, defaultServingG: 150, unit: 'g', emoji: '🐟' },
  { id: 'aldi3-gambas-peladas', name: 'Gambas Peladas', brand: 'River', supermarket: 'aldi', category: 'pescados', nutritionPer100g: { kcal: 84, proteins: 18.0, carbs: 0.5, fats: 0.9 }, defaultServingG: 100, unit: 'g', emoji: '🦐' },
  { id: 'aldi3-sardinas-lata', name: 'Sardinas en Aceite de Oliva', brand: 'River', supermarket: 'aldi', category: 'pescados', nutritionPer100g: { kcal: 220, proteins: 22.0, carbs: 0.0, fats: 14.0 }, defaultServingG: 60, unit: 'g', emoji: '🐟' },

  // --- Embutidos ---
  { id: 'aldi3-jamon-serrano', name: 'Jamón Serrano Reserva', brand: 'River', supermarket: 'aldi', category: 'embutidos', nutritionPer100g: { kcal: 240, proteins: 30.0, carbs: 0.5, fats: 13.0 }, defaultServingG: 40, unit: 'g', emoji: '🥩' },
  { id: 'aldi3-jamon-cocido', name: 'Jamón Cocido Extra', brand: 'River', supermarket: 'aldi', category: 'embutidos', nutritionPer100g: { kcal: 106, proteins: 17.5, carbs: 1.0, fats: 3.5 }, defaultServingG: 40, unit: 'g', emoji: '🥩' },
  { id: 'aldi3-pavo-lonchas', name: 'Pechuga de Pavo en Lonchas', brand: 'River', supermarket: 'aldi', category: 'embutidos', nutritionPer100g: { kcal: 96, proteins: 17.0, carbs: 1.5, fats: 2.2 }, defaultServingG: 40, unit: 'g', emoji: '🍖' },
  { id: 'aldi3-chorizo', name: 'Chorizo Extra', brand: 'River', supermarket: 'aldi', category: 'embutidos', nutritionPer100g: { kcal: 382, proteins: 22.5, carbs: 1.8, fats: 32.0 }, defaultServingG: 30, unit: 'g', emoji: '🌶️' },
  { id: 'aldi3-salchichon', name: 'Salchichón Extra', brand: 'River', supermarket: 'aldi', category: 'embutidos', nutritionPer100g: { kcal: 388, proteins: 24.0, carbs: 1.0, fats: 32.0 }, defaultServingG: 30, unit: 'g', emoji: '🥩' },
  { id: 'aldi3-bacon', name: 'Bacon Ahumado en Lonchas', brand: 'River', supermarket: 'aldi', category: 'embutidos', nutritionPer100g: { kcal: 278, proteins: 16.0, carbs: 0.5, fats: 24.0 }, defaultServingG: 30, unit: 'g', emoji: '🥓' },

  // --- Panadería ---
  { id: 'aldi3-pan-molde', name: 'Pan de Molde', brand: 'Cucina', supermarket: 'aldi', category: 'panaderia', nutritionPer100g: { kcal: 262, proteins: 8.0, carbs: 48.0, fats: 3.5 }, defaultServingG: 28, unit: 'g', emoji: '🍞' },
  { id: 'aldi3-pan-integral', name: 'Pan de Molde Integral', brand: 'GutBio', supermarket: 'aldi', category: 'panaderia', nutritionPer100g: { kcal: 235, proteins: 10.0, carbs: 38.0, fats: 3.5 }, defaultServingG: 28, unit: 'g', emoji: '🍞' },
  { id: 'aldi3-baguette', name: 'Baguette Precocida', brand: 'Cucina', supermarket: 'aldi', category: 'panaderia', nutritionPer100g: { kcal: 272, proteins: 9.0, carbs: 53.0, fats: 1.5 }, defaultServingG: 125, unit: 'g', emoji: '🥖' },
  { id: 'aldi3-tostadas', name: 'Pan Tostado Integral', brand: 'GutBio', supermarket: 'aldi', category: 'panaderia', nutritionPer100g: { kcal: 380, proteins: 11.0, carbs: 65.0, fats: 7.0 }, defaultServingG: 10, unit: 'g', emoji: '🍞' },
  { id: 'aldi3-croissants', name: 'Croissants de Mantequilla', brand: 'Cucina', supermarket: 'aldi', category: 'panaderia', nutritionPer100g: { kcal: 415, proteins: 7.5, carbs: 45.0, fats: 23.0 }, defaultServingG: 50, unit: 'g', emoji: '🥐' },
  { id: 'aldi3-magdalenas', name: 'Magdalenas', brand: 'Cucina', supermarket: 'aldi', category: 'panaderia', nutritionPer100g: { kcal: 398, proteins: 6.0, carbs: 49.0, fats: 20.0 }, defaultServingG: 35, unit: 'g', emoji: '🧁' },

  // --- Cereales ---
  { id: 'aldi3-arroz-basmati', name: 'Arroz Basmati', brand: 'Cucina', supermarket: 'aldi', category: 'cereales', nutritionPer100g: { kcal: 350, proteins: 7.5, carbs: 77.0, fats: 0.6 }, defaultServingG: 80, unit: 'g', emoji: '🍚' },
  { id: 'aldi3-pasta-penne', name: 'Pasta Penne Rigate', brand: 'Cucina', supermarket: 'aldi', category: 'cereales', nutritionPer100g: { kcal: 356, proteins: 13.0, carbs: 71.0, fats: 1.8 }, defaultServingG: 80, unit: 'g', emoji: '🍝' },
  { id: 'aldi3-espaguetis', name: 'Espaguetis', brand: 'Cucina', supermarket: 'aldi', category: 'cereales', nutritionPer100g: { kcal: 356, proteins: 13.0, carbs: 71.0, fats: 1.8 }, defaultServingG: 80, unit: 'g', emoji: '🍝' },
  { id: 'aldi3-avena-copos-bio', name: 'Copos de Avena Ecológicos', brand: 'GutBio', supermarket: 'aldi', category: 'cereales', nutritionPer100g: { kcal: 367, proteins: 11.0, carbs: 59.0, fats: 7.0 }, defaultServingG: 40, unit: 'g', emoji: '🥣' },
  { id: 'aldi3-muesli-crujiente', name: 'Muesli Crujiente con Miel', brand: 'Cucina', supermarket: 'aldi', category: 'cereales', nutritionPer100g: { kcal: 440, proteins: 7.0, carbs: 65.0, fats: 16.0 }, defaultServingG: 40, unit: 'g', emoji: '🥣' },
  { id: 'aldi3-quinoa-bio', name: 'Quinoa Ecológica', brand: 'GutBio', supermarket: 'aldi', category: 'cereales', nutritionPer100g: { kcal: 358, proteins: 14.0, carbs: 57.0, fats: 6.0 }, defaultServingG: 70, unit: 'g', emoji: '🌾' },

  // --- Legumbres ---
  { id: 'aldi3-lentejas', name: 'Lentejas', brand: 'Cucina', supermarket: 'aldi', category: 'legumbres', nutritionPer100g: { kcal: 340, proteins: 23.0, carbs: 52.0, fats: 1.5 }, defaultServingG: 80, unit: 'g', emoji: '🫘' },
  { id: 'aldi3-garbanzos', name: 'Garbanzos', brand: 'Cucina', supermarket: 'aldi', category: 'legumbres', nutritionPer100g: { kcal: 348, proteins: 20.0, carbs: 50.0, fats: 5.5 }, defaultServingG: 80, unit: 'g', emoji: '🫘' },
  { id: 'aldi3-judias-rojas', name: 'Judías Rojas', brand: 'Cucina', supermarket: 'aldi', category: 'legumbres', nutritionPer100g: { kcal: 320, proteins: 22.0, carbs: 47.0, fats: 1.5 }, defaultServingG: 80, unit: 'g', emoji: '🫘' },
  { id: 'aldi3-hummus-bio', name: 'Hummus Ecológico', brand: 'GutBio', supermarket: 'aldi', category: 'legumbres', nutritionPer100g: { kcal: 230, proteins: 7.5, carbs: 12.0, fats: 16.5 }, defaultServingG: 50, unit: 'g', emoji: '🫘' },

  // --- Frutas ---
  { id: 'aldi3-platano', name: 'Plátano', brand: 'GutBio', supermarket: 'aldi', category: 'frutas', nutritionPer100g: { kcal: 89, proteins: 1.1, carbs: 20.0, fats: 0.3 }, defaultServingG: 120, unit: 'g', emoji: '🍌' },
  { id: 'aldi3-manzana', name: 'Manzana', brand: 'GutBio', supermarket: 'aldi', category: 'frutas', nutritionPer100g: { kcal: 52, proteins: 0.3, carbs: 12.0, fats: 0.2 }, defaultServingG: 180, unit: 'g', emoji: '🍎' },
  { id: 'aldi3-naranja', name: 'Naranja de Zumo', brand: 'GutBio', supermarket: 'aldi', category: 'frutas', nutritionPer100g: { kcal: 47, proteins: 0.9, carbs: 9.4, fats: 0.1 }, defaultServingG: 200, unit: 'g', emoji: '🍊' },
  { id: 'aldi3-fresa', name: 'Fresas', brand: 'GutBio', supermarket: 'aldi', category: 'frutas', nutritionPer100g: { kcal: 33, proteins: 0.7, carbs: 5.5, fats: 0.3 }, defaultServingG: 150, unit: 'g', emoji: '🍓' },
  { id: 'aldi3-aguacate', name: 'Aguacate', brand: 'GutBio', supermarket: 'aldi', category: 'frutas', nutritionPer100g: { kcal: 160, proteins: 2.0, carbs: 1.8, fats: 15.0 }, defaultServingG: 80, unit: 'g', emoji: '🥑' },
  { id: 'aldi3-kiwi', name: 'Kiwi', brand: 'GutBio', supermarket: 'aldi', category: 'frutas', nutritionPer100g: { kcal: 61, proteins: 1.1, carbs: 11.0, fats: 0.5 }, defaultServingG: 75, unit: 'g', emoji: '🥝' },
  { id: 'aldi3-uva', name: 'Uva Blanca', brand: 'GutBio', supermarket: 'aldi', category: 'frutas', nutritionPer100g: { kcal: 69, proteins: 0.7, carbs: 15.5, fats: 0.2 }, defaultServingG: 150, unit: 'g', emoji: '🍇' },
  { id: 'aldi3-pera', name: 'Pera Conference', brand: 'GutBio', supermarket: 'aldi', category: 'frutas', nutritionPer100g: { kcal: 57, proteins: 0.4, carbs: 12.0, fats: 0.1 }, defaultServingG: 170, unit: 'g', emoji: '🍐' },

  // --- Verduras ---
  { id: 'aldi3-tomate', name: 'Tomate Rama', brand: 'GutBio', supermarket: 'aldi', category: 'verduras', nutritionPer100g: { kcal: 18, proteins: 0.9, carbs: 2.6, fats: 0.2 }, defaultServingG: 150, unit: 'g', emoji: '🍅' },
  { id: 'aldi3-lechuga', name: 'Lechuga Romana', brand: 'GutBio', supermarket: 'aldi', category: 'verduras', nutritionPer100g: { kcal: 17, proteins: 1.2, carbs: 1.5, fats: 0.3 }, defaultServingG: 100, unit: 'g', emoji: '🥬' },
  { id: 'aldi3-cebolla', name: 'Cebolla', brand: 'GutBio', supermarket: 'aldi', category: 'verduras', nutritionPer100g: { kcal: 40, proteins: 1.1, carbs: 7.6, fats: 0.1 }, defaultServingG: 100, unit: 'g', emoji: '🧅' },
  { id: 'aldi3-zanahoria', name: 'Zanahoria', brand: 'GutBio', supermarket: 'aldi', category: 'verduras', nutritionPer100g: { kcal: 41, proteins: 0.9, carbs: 7.7, fats: 0.2 }, defaultServingG: 80, unit: 'g', emoji: '🥕' },
  { id: 'aldi3-pimiento', name: 'Pimiento Tricolor', brand: 'GutBio', supermarket: 'aldi', category: 'verduras', nutritionPer100g: { kcal: 28, proteins: 1.0, carbs: 4.5, fats: 0.2 }, defaultServingG: 150, unit: 'g', emoji: '🌶️' },
  { id: 'aldi3-brocoli', name: 'Brócoli', brand: 'GutBio', supermarket: 'aldi', category: 'verduras', nutritionPer100g: { kcal: 34, proteins: 2.8, carbs: 4.0, fats: 0.4 }, defaultServingG: 150, unit: 'g', emoji: '🥦' },
  { id: 'aldi3-espinacas', name: 'Espinacas Frescas', brand: 'GutBio', supermarket: 'aldi', category: 'verduras', nutritionPer100g: { kcal: 23, proteins: 2.9, carbs: 1.4, fats: 0.4 }, defaultServingG: 100, unit: 'g', emoji: '🥬' },
  { id: 'aldi3-patata', name: 'Patata', brand: 'GutBio', supermarket: 'aldi', category: 'verduras', nutritionPer100g: { kcal: 77, proteins: 2.0, carbs: 15.4, fats: 0.1 }, defaultServingG: 200, unit: 'g', emoji: '🥔' },
  { id: 'aldi3-calabacin', name: 'Calabacín', brand: 'GutBio', supermarket: 'aldi', category: 'verduras', nutritionPer100g: { kcal: 17, proteins: 1.2, carbs: 2.0, fats: 0.3 }, defaultServingG: 200, unit: 'g', emoji: '🥒' },

  // --- Bebidas ---
  { id: 'aldi3-agua-mineral', name: 'Agua Mineral Natural', brand: 'River', supermarket: 'aldi', category: 'bebidas', nutritionPer100g: { kcal: 0, proteins: 0.0, carbs: 0.0, fats: 0.0 }, defaultServingG: 330, unit: 'ml', emoji: '💧' },
  { id: 'aldi3-cola', name: 'Refresco de Cola', brand: 'River', supermarket: 'aldi', category: 'bebidas', nutritionPer100g: { kcal: 42, proteins: 0.0, carbs: 10.5, fats: 0.0 }, defaultServingG: 330, unit: 'ml', emoji: '🥤' },
  { id: 'aldi3-zumo-naranja', name: 'Zumo de Naranja', brand: 'River', supermarket: 'aldi', category: 'bebidas', nutritionPer100g: { kcal: 42, proteins: 0.6, carbs: 9.2, fats: 0.1 }, defaultServingG: 250, unit: 'ml', emoji: '🧃' },
  { id: 'aldi3-cerveza', name: 'Cerveza Lager', brand: 'River', supermarket: 'aldi', category: 'bebidas', nutritionPer100g: { kcal: 43, proteins: 0.3, carbs: 3.4, fats: 0.0 }, defaultServingG: 330, unit: 'ml', emoji: '🍺' },
  { id: 'aldi3-vino-tinto', name: 'Vino Tinto Reserva', brand: 'River', supermarket: 'aldi', category: 'bebidas', nutritionPer100g: { kcal: 78, proteins: 0.1, carbs: 0.4, fats: 0.0 }, defaultServingG: 150, unit: 'ml', emoji: '🍷' },
  { id: 'aldi3-cafe-molido', name: 'Café Molido Mezcla', brand: 'River', supermarket: 'aldi', category: 'bebidas', nutritionPer100g: { kcal: 2, proteins: 0.1, carbs: 0.0, fats: 0.0 }, defaultServingG: 200, unit: 'ml', emoji: '☕' },

  // --- Snacks ---
  { id: 'aldi3-patatas-fritas', name: 'Patatas Fritas Onduladas', brand: 'Snack Day', supermarket: 'aldi', category: 'snacks', nutritionPer100g: { kcal: 528, proteins: 6.0, carbs: 52.0, fats: 32.0 }, defaultServingG: 30, unit: 'g', emoji: '🍟' },
  { id: 'aldi3-aceitunas', name: 'Aceitunas Verdes Rellenas', brand: 'Cucina', supermarket: 'aldi', category: 'snacks', nutritionPer100g: { kcal: 158, proteins: 1.2, carbs: 1.0, fats: 16.0 }, defaultServingG: 50, unit: 'g', emoji: '🫒' },
  { id: 'aldi3-cacahuetes', name: 'Cacahuetes Tostados', brand: 'Snack Day', supermarket: 'aldi', category: 'snacks', nutritionPer100g: { kcal: 590, proteins: 25.0, carbs: 12.0, fats: 48.0 }, defaultServingG: 30, unit: 'g', emoji: '🥜' },
  { id: 'aldi3-palomitas', name: 'Palomitas con Sal', brand: 'Snack Day', supermarket: 'aldi', category: 'snacks', nutritionPer100g: { kcal: 455, proteins: 7.0, carbs: 50.0, fats: 25.0 }, defaultServingG: 30, unit: 'g', emoji: '🍿' },
  { id: 'aldi3-nachos', name: 'Nachos de Maíz', brand: 'Snack Day', supermarket: 'aldi', category: 'snacks', nutritionPer100g: { kcal: 480, proteins: 6.5, carbs: 60.0, fats: 23.0 }, defaultServingG: 30, unit: 'g', emoji: '🌮' },

  // --- Congelados ---
  { id: 'aldi3-pizza-diavola', name: 'Pizza Diavola', brand: 'Cucina', supermarket: 'aldi', category: 'congelados', nutritionPer100g: { kcal: 248, proteins: 11.0, carbs: 27.0, fats: 10.5 }, defaultServingG: 200, unit: 'g', emoji: '🍕' },
  { id: 'aldi3-croquetas', name: 'Croquetas de Bacalao', brand: 'Cucina', supermarket: 'aldi', category: 'congelados', nutritionPer100g: { kcal: 205, proteins: 7.0, carbs: 22.0, fats: 9.5 }, defaultServingG: 100, unit: 'g', emoji: '🍘' },
  { id: 'aldi3-nuggets', name: 'Nuggets de Pollo', brand: 'Cucina', supermarket: 'aldi', category: 'congelados', nutritionPer100g: { kcal: 235, proteins: 13.0, carbs: 17.0, fats: 12.5 }, defaultServingG: 100, unit: 'g', emoji: '🍗' },
  { id: 'aldi3-verduras-cong', name: 'Verduras para Wok Congeladas', brand: 'Cucina', supermarket: 'aldi', category: 'congelados', nutritionPer100g: { kcal: 35, proteins: 2.0, carbs: 4.5, fats: 0.4 }, defaultServingG: 200, unit: 'g', emoji: '🥦' },
  { id: 'aldi3-helado-stracciatella', name: 'Helado Stracciatella', brand: 'Milsani', supermarket: 'aldi', category: 'congelados', nutritionPer100g: { kcal: 215, proteins: 3.5, carbs: 25.0, fats: 11.5 }, defaultServingG: 100, unit: 'g', emoji: '🍦' },

  // --- Dulces ---
  { id: 'aldi3-chocolate-negro-85', name: 'Chocolate Negro 85%', brand: 'Moser Roth', supermarket: 'aldi', category: 'dulces', nutritionPer100g: { kcal: 580, proteins: 10.0, carbs: 24.0, fats: 48.0 }, defaultServingG: 25, unit: 'g', emoji: '🍫' },
  { id: 'aldi3-chocolate-leche', name: 'Chocolate con Leche', brand: 'Moser Roth', supermarket: 'aldi', category: 'dulces', nutritionPer100g: { kcal: 540, proteins: 7.5, carbs: 55.0, fats: 32.0 }, defaultServingG: 25, unit: 'g', emoji: '🍫' },
  { id: 'aldi3-galletas-avena', name: 'Galletas de Avena', brand: 'GutBio', supermarket: 'aldi', category: 'dulces', nutritionPer100g: { kcal: 440, proteins: 8.0, carbs: 63.0, fats: 17.0 }, defaultServingG: 15, unit: 'g', emoji: '🍪' },
  { id: 'aldi3-mermelada-arandanos', name: 'Mermelada de Arándanos', brand: 'GutBio', supermarket: 'aldi', category: 'dulces', nutritionPer100g: { kcal: 155, proteins: 0.3, carbs: 37.0, fats: 0.1 }, defaultServingG: 20, unit: 'g', emoji: '🫐' },
  { id: 'aldi3-miel-ecologica', name: 'Miel Ecológica', brand: 'GutBio', supermarket: 'aldi', category: 'dulces', nutritionPer100g: { kcal: 320, proteins: 0.3, carbs: 78.0, fats: 0.0 }, defaultServingG: 15, unit: 'g', emoji: '🍯' },

  // --- Conservas ---
  { id: 'aldi3-atun-aceite', name: 'Atún Claro en Aceite de Oliva', brand: 'Cucina', supermarket: 'aldi', category: 'conservas', nutritionPer100g: { kcal: 200, proteins: 26.0, carbs: 0.0, fats: 10.5 }, defaultServingG: 52, unit: 'g', emoji: '🥫' },
  { id: 'aldi3-tomate-triturado', name: 'Tomate Triturado', brand: 'Cucina', supermarket: 'aldi', category: 'conservas', nutritionPer100g: { kcal: 26, proteins: 1.0, carbs: 3.8, fats: 0.2 }, defaultServingG: 100, unit: 'g', emoji: '🥫' },
  { id: 'aldi3-garbanzos-bote', name: 'Garbanzos Cocidos', brand: 'Cucina', supermarket: 'aldi', category: 'conservas', nutritionPer100g: { kcal: 128, proteins: 7.0, carbs: 17.5, fats: 2.5 }, defaultServingG: 125, unit: 'g', emoji: '🥫' },
  { id: 'aldi3-caldo-pollo', name: 'Caldo de Pollo Natural', brand: 'Cucina', supermarket: 'aldi', category: 'conservas', nutritionPer100g: { kcal: 9, proteins: 0.5, carbs: 0.5, fats: 0.4 }, defaultServingG: 250, unit: 'ml', emoji: '🥣' },

  // --- Salsas ---
  { id: 'aldi3-mayonesa', name: 'Mayonesa', brand: 'Cucina', supermarket: 'aldi', category: 'salsas', nutritionPer100g: { kcal: 680, proteins: 1.0, carbs: 2.0, fats: 74.0 }, defaultServingG: 15, unit: 'g', emoji: '🫙' },
  { id: 'aldi3-ketchup', name: 'Ketchup', brand: 'Cucina', supermarket: 'aldi', category: 'salsas', nutritionPer100g: { kcal: 108, proteins: 1.2, carbs: 24.0, fats: 0.2 }, defaultServingG: 15, unit: 'g', emoji: '🫙' },
  { id: 'aldi3-tomate-frito', name: 'Tomate Frito', brand: 'Cucina', supermarket: 'aldi', category: 'salsas', nutritionPer100g: { kcal: 80, proteins: 1.3, carbs: 9.5, fats: 3.8 }, defaultServingG: 50, unit: 'g', emoji: '🍅' },

  // --- Aceites ---
  { id: 'aldi3-aceite-oliva-virgen', name: 'Aceite de Oliva Virgen Extra', brand: 'Cucina', supermarket: 'aldi', category: 'aceites', nutritionPer100g: { kcal: 900, proteins: 0.0, carbs: 0.0, fats: 100.0 }, defaultServingG: 10, unit: 'ml', emoji: '🫒' },
  { id: 'aldi3-aceite-girasol', name: 'Aceite de Girasol', brand: 'Cucina', supermarket: 'aldi', category: 'aceites', nutritionPer100g: { kcal: 900, proteins: 0.0, carbs: 0.0, fats: 100.0 }, defaultServingG: 10, unit: 'ml', emoji: '🌻' },

  // --- Huevos ---
  { id: 'aldi3-huevos-camperos', name: 'Huevos Camperos L', brand: 'GutBio', supermarket: 'aldi', category: 'huevos', nutritionPer100g: { kcal: 143, proteins: 12.7, carbs: 0.7, fats: 9.8 }, defaultServingG: 60, unit: 'g', emoji: '🥚' },
  { id: 'aldi3-huevos-eco', name: 'Huevos Ecológicos M', brand: 'GutBio', supermarket: 'aldi', category: 'huevos', nutritionPer100g: { kcal: 143, proteins: 12.7, carbs: 0.7, fats: 9.8 }, defaultServingG: 55, unit: 'g', emoji: '🥚' },
];
