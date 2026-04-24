import { Product } from '@/types';
import { productsExtra } from './products-extra';
import { productsMercadona } from './products-mercadona';
import { productsLidl, productsCarrefour } from './products-lidl-carrefour';
import { productsDia, productsEroski, productsAldi } from './products-dia-eroski-aldi';
import { productsAhorramas, productsSupeco, productsAlcampo, productsConsum, productsHipercor, productsBonpreu, productsMasymas } from './products-otros';
import { productsMarcas } from './products-marcas';
import { productsRestaurantes } from './products-restaurantes';

const baseProducts: Product[] = [
  // NOTE: baseProducts + productsExtra are merged below as `products`
  // ═══════════════════════════════════════════
  // ██  MERCADONA (Hacendado / Deliplus)    ██
  // ═══════════════════════════════════════════

  // --- Lácteos ---
  { id: 'merc-leche-entera', name: 'Leche Entera', brand: 'Hacendado', supermarket: 'mercadona', category: 'lacteos', nutritionPer100g: { kcal: 63, proteins: 3.1, carbs: 4.7, fats: 3.5 }, defaultServingG: 250, unit: 'ml', emoji: '🥛' },
  { id: 'merc-leche-semi', name: 'Leche Semidesnatada', brand: 'Hacendado', supermarket: 'mercadona', category: 'lacteos', nutritionPer100g: { kcal: 46, proteins: 3.2, carbs: 4.8, fats: 1.6 }, defaultServingG: 250, unit: 'ml', emoji: '🥛' },
  { id: 'merc-leche-desnatada', name: 'Leche Desnatada', brand: 'Hacendado', supermarket: 'mercadona', category: 'lacteos', nutritionPer100g: { kcal: 35, proteins: 3.4, carbs: 4.9, fats: 0.1 }, defaultServingG: 250, unit: 'ml', emoji: '🥛' },
  { id: 'merc-yogur-natural', name: 'Yogur Natural', brand: 'Hacendado', supermarket: 'mercadona', category: 'lacteos', nutritionPer100g: { kcal: 61, proteins: 3.9, carbs: 4.5, fats: 3.0 }, defaultServingG: 125, unit: 'g', emoji: '🫙' },
  { id: 'merc-yogur-griego', name: 'Yogur Griego Natural', brand: 'Hacendado', supermarket: 'mercadona', category: 'lacteos', nutritionPer100g: { kcal: 118, proteins: 3.4, carbs: 3.6, fats: 10.0 }, defaultServingG: 125, unit: 'g', emoji: '🫙' },
  { id: 'merc-yogur-proteinas', name: 'Yogur Proteínas Sabor Vainilla', brand: 'Hacendado', supermarket: 'mercadona', category: 'lacteos', nutritionPer100g: { kcal: 67, proteins: 10.0, carbs: 4.0, fats: 0.9 }, defaultServingG: 160, unit: 'g', emoji: '🫙' },
  { id: 'merc-queso-fresco-batido', name: 'Queso Fresco Batido 0%', brand: 'Hacendado', supermarket: 'mercadona', category: 'lacteos', nutritionPer100g: { kcal: 49, proteins: 8.0, carbs: 3.8, fats: 0.2 }, defaultServingG: 250, unit: 'g', emoji: '🧀' },
  { id: 'merc-queso-lonchas', name: 'Queso en Lonchas', brand: 'Hacendado', supermarket: 'mercadona', category: 'lacteos', nutritionPer100g: { kcal: 314, proteins: 22.0, carbs: 1.5, fats: 24.0 }, defaultServingG: 20, unit: 'g', emoji: '🧀' },
  { id: 'merc-queso-burgos', name: 'Queso de Burgos', brand: 'Hacendado', supermarket: 'mercadona', category: 'lacteos', nutritionPer100g: { kcal: 174, proteins: 11.0, carbs: 2.5, fats: 13.5 }, defaultServingG: 75, unit: 'g', emoji: '🧀' },
  { id: 'merc-queso-manchego-semi', name: 'Queso Manchego Semicurado', brand: 'Hacendado', supermarket: 'mercadona', category: 'lacteos', nutritionPer100g: { kcal: 392, proteins: 26.0, carbs: 0.5, fats: 32.0 }, defaultServingG: 30, unit: 'g', emoji: '🧀' },
  { id: 'merc-nata-cocinar', name: 'Nata para Cocinar', brand: 'Hacendado', supermarket: 'mercadona', category: 'lacteos', nutritionPer100g: { kcal: 163, proteins: 2.0, carbs: 5.0, fats: 15.0 }, defaultServingG: 50, unit: 'ml', emoji: '🍶' },
  { id: 'merc-mantequilla', name: 'Mantequilla', brand: 'Hacendado', supermarket: 'mercadona', category: 'lacteos', nutritionPer100g: { kcal: 717, proteins: 0.9, carbs: 0.1, fats: 81.0 }, defaultServingG: 10, unit: 'g', emoji: '🧈' },
  { id: 'merc-bebida-avena', name: 'Bebida de Avena', brand: 'Hacendado', supermarket: 'mercadona', category: 'lacteos', nutritionPer100g: { kcal: 46, proteins: 0.3, carbs: 6.8, fats: 1.5 }, defaultServingG: 250, unit: 'ml', emoji: '🥛' },
  { id: 'merc-bebida-almendra', name: 'Bebida de Almendras', brand: 'Hacendado', supermarket: 'mercadona', category: 'lacteos', nutritionPer100g: { kcal: 24, proteins: 0.5, carbs: 3.0, fats: 1.1 }, defaultServingG: 250, unit: 'ml', emoji: '🥛' },

  // --- Carnes ---
  { id: 'merc-pechuga-pollo', name: 'Pechuga de Pollo', brand: 'Hacendado', supermarket: 'mercadona', category: 'carnes', nutritionPer100g: { kcal: 109, proteins: 23.0, carbs: 0.0, fats: 1.2 }, defaultServingG: 150, unit: 'g', emoji: '🍗' },
  { id: 'merc-muslo-pollo', name: 'Muslo de Pollo', brand: 'Hacendado', supermarket: 'mercadona', category: 'carnes', nutritionPer100g: { kcal: 177, proteins: 17.3, carbs: 0.0, fats: 11.7 }, defaultServingG: 150, unit: 'g', emoji: '🍗' },
  { id: 'merc-carne-picada-mixta', name: 'Carne Picada Mixta', brand: 'Hacendado', supermarket: 'mercadona', category: 'carnes', nutritionPer100g: { kcal: 215, proteins: 17.0, carbs: 0.5, fats: 16.0 }, defaultServingG: 150, unit: 'g', emoji: '🥩' },
  { id: 'merc-carne-picada-vacuno', name: 'Carne Picada de Vacuno', brand: 'Hacendado', supermarket: 'mercadona', category: 'carnes', nutritionPer100g: { kcal: 174, proteins: 20.0, carbs: 0.0, fats: 10.0 }, defaultServingG: 150, unit: 'g', emoji: '🥩' },
  { id: 'merc-filete-ternera', name: 'Filete de Ternera', brand: 'Hacendado', supermarket: 'mercadona', category: 'carnes', nutritionPer100g: { kcal: 131, proteins: 21.0, carbs: 0.0, fats: 5.0 }, defaultServingG: 150, unit: 'g', emoji: '🥩' },
  { id: 'merc-chuleta-cerdo', name: 'Chuleta de Cerdo', brand: 'Hacendado', supermarket: 'mercadona', category: 'carnes', nutritionPer100g: { kcal: 211, proteins: 19.0, carbs: 0.0, fats: 15.0 }, defaultServingG: 150, unit: 'g', emoji: '🥩' },
  { id: 'merc-lomo-cerdo', name: 'Lomo de Cerdo', brand: 'Hacendado', supermarket: 'mercadona', category: 'carnes', nutritionPer100g: { kcal: 143, proteins: 22.0, carbs: 0.0, fats: 5.8 }, defaultServingG: 150, unit: 'g', emoji: '🥩' },
  { id: 'merc-hamburguesa-vacuno', name: 'Hamburguesa de Vacuno', brand: 'Hacendado', supermarket: 'mercadona', category: 'carnes', nutritionPer100g: { kcal: 220, proteins: 16.0, carbs: 4.0, fats: 15.0 }, defaultServingG: 100, unit: 'g', emoji: '🍔' },
  { id: 'merc-pollo-asado', name: 'Pollo Asado Entero', brand: 'Mercadona', supermarket: 'mercadona', category: 'carnes', nutritionPer100g: { kcal: 167, proteins: 25.0, carbs: 0.0, fats: 7.0 }, defaultServingG: 200, unit: 'g', emoji: '🍗' },

  // --- Pescados ---
  { id: 'merc-salmon', name: 'Salmón Fresco', brand: 'Hacendado', supermarket: 'mercadona', category: 'pescados', nutritionPer100g: { kcal: 208, proteins: 20.0, carbs: 0.0, fats: 13.0 }, defaultServingG: 125, unit: 'g', emoji: '🐟' },
  { id: 'merc-merluza', name: 'Merluza en Filetes', brand: 'Hacendado', supermarket: 'mercadona', category: 'pescados', nutritionPer100g: { kcal: 86, proteins: 18.6, carbs: 1.0, fats: 0.8 }, defaultServingG: 150, unit: 'g', emoji: '🐟' },
  { id: 'merc-atun-lata-aceite', name: 'Atún en Aceite de Oliva', brand: 'Hacendado', supermarket: 'mercadona', category: 'conservas', nutritionPer100g: { kcal: 200, proteins: 26.0, carbs: 0.0, fats: 10.5 }, defaultServingG: 52, unit: 'g', emoji: '🥫' },
  { id: 'merc-atun-lata-natural', name: 'Atún al Natural', brand: 'Hacendado', supermarket: 'mercadona', category: 'conservas', nutritionPer100g: { kcal: 98, proteins: 21.0, carbs: 0.9, fats: 1.2 }, defaultServingG: 52, unit: 'g', emoji: '🥫' },
  { id: 'merc-gambas', name: 'Gambas Peladas Cocidas', brand: 'Hacendado', supermarket: 'mercadona', category: 'pescados', nutritionPer100g: { kcal: 85, proteins: 18.0, carbs: 1.0, fats: 0.8 }, defaultServingG: 100, unit: 'g', emoji: '🦐' },
  { id: 'merc-bacalao', name: 'Bacalao Fresco', brand: 'Hacendado', supermarket: 'mercadona', category: 'pescados', nutritionPer100g: { kcal: 82, proteins: 18.0, carbs: 0.0, fats: 0.7 }, defaultServingG: 150, unit: 'g', emoji: '🐟' },
  { id: 'merc-surimi', name: 'Surimi (Palitos de Cangrejo)', brand: 'Hacendado', supermarket: 'mercadona', category: 'pescados', nutritionPer100g: { kcal: 88, proteins: 8.0, carbs: 10.0, fats: 1.0 }, defaultServingG: 100, unit: 'g', emoji: '🦀' },

  // --- Embutidos ---
  { id: 'merc-jamon-serrano', name: 'Jamón Serrano', brand: 'Hacendado', supermarket: 'mercadona', category: 'embutidos', nutritionPer100g: { kcal: 241, proteins: 31.0, carbs: 0.5, fats: 12.5 }, defaultServingG: 40, unit: 'g', emoji: '🥓' },
  { id: 'merc-pechuga-pavo', name: 'Pechuga de Pavo', brand: 'Hacendado', supermarket: 'mercadona', category: 'embutidos', nutritionPer100g: { kcal: 105, proteins: 17.0, carbs: 1.5, fats: 3.5 }, defaultServingG: 40, unit: 'g', emoji: '🦃' },
  { id: 'merc-chorizo-extra', name: 'Chorizo Extra', brand: 'Hacendado', supermarket: 'mercadona', category: 'embutidos', nutritionPer100g: { kcal: 380, proteins: 22.0, carbs: 2.0, fats: 32.0 }, defaultServingG: 30, unit: 'g', emoji: '🌭' },
  { id: 'merc-jamon-cocido', name: 'Jamón Cocido Extra', brand: 'Hacendado', supermarket: 'mercadona', category: 'embutidos', nutritionPer100g: { kcal: 108, proteins: 18.0, carbs: 1.0, fats: 3.8 }, defaultServingG: 40, unit: 'g', emoji: '🥓' },
  { id: 'merc-salchichon', name: 'Salchichón Extra', brand: 'Hacendado', supermarket: 'mercadona', category: 'embutidos', nutritionPer100g: { kcal: 396, proteins: 24.0, carbs: 1.5, fats: 33.0 }, defaultServingG: 30, unit: 'g', emoji: '🌭' },
  { id: 'merc-mortadela', name: 'Mortadela', brand: 'Hacendado', supermarket: 'mercadona', category: 'embutidos', nutritionPer100g: { kcal: 288, proteins: 14.0, carbs: 3.0, fats: 24.0 }, defaultServingG: 30, unit: 'g', emoji: '🌭' },
  { id: 'merc-salchichas-frankfurt', name: 'Salchichas Frankfurt', brand: 'Hacendado', supermarket: 'mercadona', category: 'embutidos', nutritionPer100g: { kcal: 240, proteins: 12.0, carbs: 2.0, fats: 20.0 }, defaultServingG: 45, unit: 'g', emoji: '🌭' },

  // --- Cereales / Pan ---
  { id: 'merc-arroz-blanco', name: 'Arroz Blanco', brand: 'Hacendado', supermarket: 'mercadona', category: 'cereales', nutritionPer100g: { kcal: 354, proteins: 7.0, carbs: 78.0, fats: 0.9 }, defaultServingG: 80, unit: 'g', emoji: '🍚' },
  { id: 'merc-arroz-integral', name: 'Arroz Integral', brand: 'Hacendado', supermarket: 'mercadona', category: 'cereales', nutritionPer100g: { kcal: 349, proteins: 7.5, carbs: 73.0, fats: 2.5 }, defaultServingG: 80, unit: 'g', emoji: '🍚' },
  { id: 'merc-macarrones', name: 'Macarrones', brand: 'Hacendado', supermarket: 'mercadona', category: 'cereales', nutritionPer100g: { kcal: 353, proteins: 12.5, carbs: 71.0, fats: 1.8 }, defaultServingG: 80, unit: 'g', emoji: '🍝' },
  { id: 'merc-espaguetis', name: 'Espaguetis', brand: 'Hacendado', supermarket: 'mercadona', category: 'cereales', nutritionPer100g: { kcal: 353, proteins: 12.5, carbs: 71.0, fats: 1.8 }, defaultServingG: 80, unit: 'g', emoji: '🍝' },
  { id: 'merc-fideos', name: 'Fideos', brand: 'Hacendado', supermarket: 'mercadona', category: 'cereales', nutritionPer100g: { kcal: 353, proteins: 12.5, carbs: 71.0, fats: 1.8 }, defaultServingG: 80, unit: 'g', emoji: '🍜' },
  { id: 'merc-copos-avena', name: 'Copos de Avena', brand: 'Hacendado', supermarket: 'mercadona', category: 'cereales', nutritionPer100g: { kcal: 375, proteins: 14.0, carbs: 59.0, fats: 7.0 }, defaultServingG: 40, unit: 'g', emoji: '🥣' },
  { id: 'merc-pan-molde-integral', name: 'Pan de Molde Integral', brand: 'Hacendado', supermarket: 'mercadona', category: 'panaderia', nutritionPer100g: { kcal: 248, proteins: 11.0, carbs: 41.0, fats: 3.8 }, defaultServingG: 30, unit: 'g', emoji: '🍞' },
  { id: 'merc-pan-molde-blanco', name: 'Pan de Molde Blanco', brand: 'Hacendado', supermarket: 'mercadona', category: 'panaderia', nutritionPer100g: { kcal: 265, proteins: 8.5, carbs: 48.0, fats: 3.5 }, defaultServingG: 30, unit: 'g', emoji: '🍞' },
  { id: 'merc-pan-barra', name: 'Barra de Pan', brand: 'Mercadona', supermarket: 'mercadona', category: 'panaderia', nutritionPer100g: { kcal: 261, proteins: 8.5, carbs: 50.0, fats: 1.5 }, defaultServingG: 60, unit: 'g', emoji: '🥖' },
  { id: 'merc-cereales-choco', name: 'Cereales Choco Flakes', brand: 'Hacendado', supermarket: 'mercadona', category: 'cereales', nutritionPer100g: { kcal: 388, proteins: 5.5, carbs: 78.0, fats: 5.0 }, defaultServingG: 30, unit: 'g', emoji: '🥣' },
  { id: 'merc-tortitas-arroz', name: 'Tortitas de Arroz', brand: 'Hacendado', supermarket: 'mercadona', category: 'cereales', nutritionPer100g: { kcal: 387, proteins: 8.0, carbs: 81.0, fats: 3.5 }, defaultServingG: 10, unit: 'g', emoji: '🍘' },
  { id: 'merc-cuscus', name: 'Cuscús', brand: 'Hacendado', supermarket: 'mercadona', category: 'cereales', nutritionPer100g: { kcal: 356, proteins: 12.0, carbs: 72.0, fats: 1.5 }, defaultServingG: 70, unit: 'g', emoji: '🍚' },

  // --- Huevos ---
  { id: 'merc-huevos', name: 'Huevos Camperos (unidad ~60g)', brand: 'Hacendado', supermarket: 'mercadona', category: 'huevos', nutritionPer100g: { kcal: 143, proteins: 12.6, carbs: 0.7, fats: 9.5 }, defaultServingG: 60, unit: 'g', emoji: '🥚' },
  { id: 'merc-claras-huevo', name: 'Claras de Huevo Líquidas', brand: 'Hacendado', supermarket: 'mercadona', category: 'huevos', nutritionPer100g: { kcal: 48, proteins: 10.8, carbs: 0.7, fats: 0.0 }, defaultServingG: 100, unit: 'ml', emoji: '🥚' },

  // --- Frutas ---
  { id: 'merc-platano', name: 'Plátano de Canarias', brand: 'Mercadona', supermarket: 'mercadona', category: 'frutas', nutritionPer100g: { kcal: 89, proteins: 1.1, carbs: 20.0, fats: 0.3 }, defaultServingG: 120, unit: 'g', emoji: '🍌' },
  { id: 'merc-manzana', name: 'Manzana', brand: 'Mercadona', supermarket: 'mercadona', category: 'frutas', nutritionPer100g: { kcal: 52, proteins: 0.3, carbs: 12.0, fats: 0.2 }, defaultServingG: 180, unit: 'g', emoji: '🍎' },
  { id: 'merc-naranja', name: 'Naranja', brand: 'Mercadona', supermarket: 'mercadona', category: 'frutas', nutritionPer100g: { kcal: 47, proteins: 0.9, carbs: 9.4, fats: 0.1 }, defaultServingG: 200, unit: 'g', emoji: '🍊' },
  { id: 'merc-fresa', name: 'Fresas', brand: 'Mercadona', supermarket: 'mercadona', category: 'frutas', nutritionPer100g: { kcal: 32, proteins: 0.7, carbs: 6.0, fats: 0.3 }, defaultServingG: 150, unit: 'g', emoji: '🍓' },
  { id: 'merc-uvas', name: 'Uvas', brand: 'Mercadona', supermarket: 'mercadona', category: 'frutas', nutritionPer100g: { kcal: 69, proteins: 0.7, carbs: 16.0, fats: 0.2 }, defaultServingG: 150, unit: 'g', emoji: '🍇' },
  { id: 'merc-pera', name: 'Pera', brand: 'Mercadona', supermarket: 'mercadona', category: 'frutas', nutritionPer100g: { kcal: 57, proteins: 0.4, carbs: 12.0, fats: 0.1 }, defaultServingG: 170, unit: 'g', emoji: '🍐' },
  { id: 'merc-melocoton', name: 'Melocotón', brand: 'Mercadona', supermarket: 'mercadona', category: 'frutas', nutritionPer100g: { kcal: 39, proteins: 0.9, carbs: 8.0, fats: 0.3 }, defaultServingG: 150, unit: 'g', emoji: '🍑' },
  { id: 'merc-sandia', name: 'Sandía', brand: 'Mercadona', supermarket: 'mercadona', category: 'frutas', nutritionPer100g: { kcal: 30, proteins: 0.6, carbs: 6.2, fats: 0.2 }, defaultServingG: 200, unit: 'g', emoji: '🍉' },
  { id: 'merc-aguacate', name: 'Aguacate', brand: 'Mercadona', supermarket: 'mercadona', category: 'frutas', nutritionPer100g: { kcal: 160, proteins: 2.0, carbs: 2.0, fats: 15.0 }, defaultServingG: 80, unit: 'g', emoji: '🥑' },
  { id: 'merc-kiwi', name: 'Kiwi', brand: 'Mercadona', supermarket: 'mercadona', category: 'frutas', nutritionPer100g: { kcal: 61, proteins: 1.1, carbs: 11.0, fats: 0.5 }, defaultServingG: 80, unit: 'g', emoji: '🥝' },

  // --- Verduras ---
  { id: 'merc-tomate', name: 'Tomate', brand: 'Mercadona', supermarket: 'mercadona', category: 'verduras', nutritionPer100g: { kcal: 18, proteins: 0.9, carbs: 3.0, fats: 0.2 }, defaultServingG: 150, unit: 'g', emoji: '🍅' },
  { id: 'merc-lechuga', name: 'Lechuga', brand: 'Mercadona', supermarket: 'mercadona', category: 'verduras', nutritionPer100g: { kcal: 15, proteins: 1.4, carbs: 1.5, fats: 0.2 }, defaultServingG: 100, unit: 'g', emoji: '🥬' },
  { id: 'merc-cebolla', name: 'Cebolla', brand: 'Mercadona', supermarket: 'mercadona', category: 'verduras', nutritionPer100g: { kcal: 40, proteins: 1.1, carbs: 8.6, fats: 0.1 }, defaultServingG: 150, unit: 'g', emoji: '🧅' },
  { id: 'merc-patata', name: 'Patata', brand: 'Mercadona', supermarket: 'mercadona', category: 'verduras', nutritionPer100g: { kcal: 77, proteins: 2.0, carbs: 17.0, fats: 0.1 }, defaultServingG: 200, unit: 'g', emoji: '🥔' },
  { id: 'merc-zanahoria', name: 'Zanahoria', brand: 'Mercadona', supermarket: 'mercadona', category: 'verduras', nutritionPer100g: { kcal: 41, proteins: 0.9, carbs: 8.7, fats: 0.2 }, defaultServingG: 100, unit: 'g', emoji: '🥕' },
  { id: 'merc-pimiento', name: 'Pimiento', brand: 'Mercadona', supermarket: 'mercadona', category: 'verduras', nutritionPer100g: { kcal: 31, proteins: 1.0, carbs: 5.0, fats: 0.3 }, defaultServingG: 150, unit: 'g', emoji: '🫑' },
  { id: 'merc-brocoli', name: 'Brócoli', brand: 'Mercadona', supermarket: 'mercadona', category: 'verduras', nutritionPer100g: { kcal: 34, proteins: 2.8, carbs: 4.0, fats: 0.4 }, defaultServingG: 200, unit: 'g', emoji: '🥦' },
  { id: 'merc-espinacas', name: 'Espinacas Frescas', brand: 'Mercadona', supermarket: 'mercadona', category: 'verduras', nutritionPer100g: { kcal: 23, proteins: 2.9, carbs: 1.4, fats: 0.4 }, defaultServingG: 100, unit: 'g', emoji: '🥬' },
  { id: 'merc-calabacin', name: 'Calabacín', brand: 'Mercadona', supermarket: 'mercadona', category: 'verduras', nutritionPer100g: { kcal: 17, proteins: 1.2, carbs: 2.0, fats: 0.3 }, defaultServingG: 200, unit: 'g', emoji: '🥒' },
  { id: 'merc-champiñones', name: 'Champiñones', brand: 'Mercadona', supermarket: 'mercadona', category: 'verduras', nutritionPer100g: { kcal: 22, proteins: 3.1, carbs: 0.5, fats: 0.3 }, defaultServingG: 150, unit: 'g', emoji: '🍄' },
  { id: 'merc-ajo', name: 'Ajo', brand: 'Mercadona', supermarket: 'mercadona', category: 'verduras', nutritionPer100g: { kcal: 149, proteins: 6.4, carbs: 28.0, fats: 0.5 }, defaultServingG: 5, unit: 'g', emoji: '🧄' },
  { id: 'merc-pepino', name: 'Pepino', brand: 'Mercadona', supermarket: 'mercadona', category: 'verduras', nutritionPer100g: { kcal: 12, proteins: 0.7, carbs: 1.8, fats: 0.1 }, defaultServingG: 100, unit: 'g', emoji: '🥒' },

  // --- Aceites ---
  { id: 'merc-aceite-oliva', name: 'Aceite de Oliva Virgen Extra', brand: 'Hacendado', supermarket: 'mercadona', category: 'aceites', nutritionPer100g: { kcal: 884, proteins: 0.0, carbs: 0.0, fats: 100.0 }, defaultServingG: 10, unit: 'ml', emoji: '🫒' },
  { id: 'merc-aceite-girasol', name: 'Aceite de Girasol', brand: 'Hacendado', supermarket: 'mercadona', category: 'aceites', nutritionPer100g: { kcal: 884, proteins: 0.0, carbs: 0.0, fats: 100.0 }, defaultServingG: 10, unit: 'ml', emoji: '🌻' },

  // --- Legumbres ---
  { id: 'merc-garbanzos', name: 'Garbanzos Cocidos', brand: 'Hacendado', supermarket: 'mercadona', category: 'legumbres', nutritionPer100g: { kcal: 128, proteins: 7.2, carbs: 17.0, fats: 2.9 }, defaultServingG: 200, unit: 'g', emoji: '🫘' },
  { id: 'merc-lentejas', name: 'Lentejas Cocidas', brand: 'Hacendado', supermarket: 'mercadona', category: 'legumbres', nutritionPer100g: { kcal: 103, proteins: 8.1, carbs: 14.0, fats: 0.6 }, defaultServingG: 200, unit: 'g', emoji: '🫘' },
  { id: 'merc-alubias', name: 'Alubias Cocidas', brand: 'Hacendado', supermarket: 'mercadona', category: 'legumbres', nutritionPer100g: { kcal: 97, proteins: 6.9, carbs: 13.0, fats: 0.5 }, defaultServingG: 200, unit: 'g', emoji: '🫘' },

  // --- Salsas ---
  { id: 'merc-tomate-frito', name: 'Tomate Frito', brand: 'Hacendado', supermarket: 'mercadona', category: 'salsas', nutritionPer100g: { kcal: 76, proteins: 1.2, carbs: 8.5, fats: 4.0 }, defaultServingG: 50, unit: 'g', emoji: '🍅' },
  { id: 'merc-ketchup', name: 'Ketchup', brand: 'Hacendado', supermarket: 'mercadona', category: 'salsas', nutritionPer100g: { kcal: 110, proteins: 1.2, carbs: 24.0, fats: 0.3 }, defaultServingG: 15, unit: 'g', emoji: '🫙' },
  { id: 'merc-mayonesa', name: 'Mayonesa', brand: 'Hacendado', supermarket: 'mercadona', category: 'salsas', nutritionPer100g: { kcal: 680, proteins: 1.0, carbs: 3.0, fats: 74.0 }, defaultServingG: 15, unit: 'g', emoji: '🫙' },
  { id: 'merc-mostaza', name: 'Mostaza', brand: 'Hacendado', supermarket: 'mercadona', category: 'salsas', nutritionPer100g: { kcal: 66, proteins: 4.4, carbs: 3.0, fats: 3.7 }, defaultServingG: 10, unit: 'g', emoji: '🫙' },

  // --- Bebidas ---
  { id: 'merc-zumo-naranja', name: 'Zumo de Naranja Exprimido', brand: 'Hacendado', supermarket: 'mercadona', category: 'bebidas', nutritionPer100g: { kcal: 43, proteins: 0.7, carbs: 9.4, fats: 0.1 }, defaultServingG: 250, unit: 'ml', emoji: '🧃' },
  { id: 'merc-agua', name: 'Agua Mineral Bezoya', brand: 'Hacendado', supermarket: 'mercadona', category: 'bebidas', nutritionPer100g: { kcal: 0, proteins: 0.0, carbs: 0.0, fats: 0.0 }, defaultServingG: 500, unit: 'ml', emoji: '💧' },
  { id: 'merc-coca-cola', name: 'Coca-Cola', brand: 'Coca-Cola', supermarket: 'mercadona', category: 'bebidas', nutritionPer100g: { kcal: 42, proteins: 0.0, carbs: 10.6, fats: 0.0 }, defaultServingG: 330, unit: 'ml', emoji: '🥤' },
  { id: 'merc-coca-cola-zero', name: 'Coca-Cola Zero', brand: 'Coca-Cola', supermarket: 'mercadona', category: 'bebidas', nutritionPer100g: { kcal: 0, proteins: 0.0, carbs: 0.0, fats: 0.0 }, defaultServingG: 330, unit: 'ml', emoji: '🥤' },
  { id: 'merc-cerveza', name: 'Cerveza Steinburg', brand: 'Hacendado', supermarket: 'mercadona', category: 'bebidas', nutritionPer100g: { kcal: 42, proteins: 0.5, carbs: 3.5, fats: 0.0 }, defaultServingG: 330, unit: 'ml', emoji: '🍺' },
  { id: 'merc-cafe-capsula', name: 'Café en Cápsula', brand: 'Hacendado', supermarket: 'mercadona', category: 'bebidas', nutritionPer100g: { kcal: 2, proteins: 0.1, carbs: 0.0, fats: 0.0 }, defaultServingG: 40, unit: 'ml', emoji: '☕' },

  // --- Snacks / Dulces ---
  { id: 'merc-galletas-maria', name: 'Galletas María', brand: 'Hacendado', supermarket: 'mercadona', category: 'snacks', nutritionPer100g: { kcal: 436, proteins: 7.0, carbs: 73.0, fats: 13.0 }, defaultServingG: 25, unit: 'g', emoji: '🍪' },
  { id: 'merc-galletas-digestive', name: 'Galletas Digestive', brand: 'Hacendado', supermarket: 'mercadona', category: 'snacks', nutritionPer100g: { kcal: 468, proteins: 7.0, carbs: 62.0, fats: 21.0 }, defaultServingG: 30, unit: 'g', emoji: '🍪' },
  { id: 'merc-chocolate-leche', name: 'Chocolate con Leche', brand: 'Hacendado', supermarket: 'mercadona', category: 'dulces', nutritionPer100g: { kcal: 545, proteins: 7.6, carbs: 56.0, fats: 32.0 }, defaultServingG: 25, unit: 'g', emoji: '🍫' },
  { id: 'merc-chocolate-negro', name: 'Chocolate Negro 72%', brand: 'Hacendado', supermarket: 'mercadona', category: 'dulces', nutritionPer100g: { kcal: 560, proteins: 8.0, carbs: 35.0, fats: 42.0 }, defaultServingG: 25, unit: 'g', emoji: '🍫' },
  { id: 'merc-almendras', name: 'Almendras Tostadas', brand: 'Hacendado', supermarket: 'mercadona', category: 'snacks', nutritionPer100g: { kcal: 607, proteins: 22.0, carbs: 7.0, fats: 53.0 }, defaultServingG: 30, unit: 'g', emoji: '🥜' },
  { id: 'merc-nueces', name: 'Nueces Peladas', brand: 'Hacendado', supermarket: 'mercadona', category: 'snacks', nutritionPer100g: { kcal: 688, proteins: 15.0, carbs: 5.0, fats: 65.0 }, defaultServingG: 25, unit: 'g', emoji: '🥜' },
  { id: 'merc-patatas-fritas', name: 'Patatas Fritas Lisas', brand: 'Hacendado', supermarket: 'mercadona', category: 'snacks', nutritionPer100g: { kcal: 533, proteins: 6.0, carbs: 52.0, fats: 33.0 }, defaultServingG: 30, unit: 'g', emoji: '🥔' },
  { id: 'merc-nocilla', name: 'Crema Cacao y Avellanas', brand: 'Hacendado', supermarket: 'mercadona', category: 'dulces', nutritionPer100g: { kcal: 539, proteins: 5.0, carbs: 58.0, fats: 31.0 }, defaultServingG: 20, unit: 'g', emoji: '🍫' },
  { id: 'merc-mermelada-fresa', name: 'Mermelada de Fresa', brand: 'Hacendado', supermarket: 'mercadona', category: 'dulces', nutritionPer100g: { kcal: 243, proteins: 0.4, carbs: 60.0, fats: 0.1 }, defaultServingG: 20, unit: 'g', emoji: '🍓' },
  { id: 'merc-miel', name: 'Miel', brand: 'Hacendado', supermarket: 'mercadona', category: 'dulces', nutritionPer100g: { kcal: 304, proteins: 0.3, carbs: 75.0, fats: 0.0 }, defaultServingG: 15, unit: 'g', emoji: '🍯' },

  // --- Conservas ---
  { id: 'merc-sardinas-aceite', name: 'Sardinas en Aceite de Oliva', brand: 'Hacendado', supermarket: 'mercadona', category: 'conservas', nutritionPer100g: { kcal: 220, proteins: 20.0, carbs: 0.0, fats: 15.0 }, defaultServingG: 85, unit: 'g', emoji: '🥫' },
  { id: 'merc-tomate-triturado', name: 'Tomate Triturado', brand: 'Hacendado', supermarket: 'mercadona', category: 'conservas', nutritionPer100g: { kcal: 26, proteins: 1.2, carbs: 3.5, fats: 0.2 }, defaultServingG: 200, unit: 'g', emoji: '🥫' },
  { id: 'merc-maiz-dulce', name: 'Maíz Dulce', brand: 'Hacendado', supermarket: 'mercadona', category: 'conservas', nutritionPer100g: { kcal: 81, proteins: 2.7, carbs: 14.0, fats: 1.2 }, defaultServingG: 140, unit: 'g', emoji: '🌽' },
  { id: 'merc-aceitunas', name: 'Aceitunas Rellenas de Anchoa', brand: 'Hacendado', supermarket: 'mercadona', category: 'conservas', nutritionPer100g: { kcal: 150, proteins: 1.5, carbs: 1.0, fats: 15.0 }, defaultServingG: 30, unit: 'g', emoji: '🫒' },

  // --- Congelados ---
  { id: 'merc-pizza-4quesos', name: 'Pizza 4 Quesos', brand: 'Hacendado', supermarket: 'mercadona', category: 'congelados', nutritionPer100g: { kcal: 245, proteins: 11.0, carbs: 28.0, fats: 10.0 }, defaultServingG: 200, unit: 'g', emoji: '🍕' },
  { id: 'merc-croquetas-jamon', name: 'Croquetas de Jamón', brand: 'Hacendado', supermarket: 'mercadona', category: 'congelados', nutritionPer100g: { kcal: 198, proteins: 6.0, carbs: 20.0, fats: 10.0 }, defaultServingG: 100, unit: 'g', emoji: '🍤' },
  { id: 'merc-guisantes-congelados', name: 'Guisantes Congelados', brand: 'Hacendado', supermarket: 'mercadona', category: 'congelados', nutritionPer100g: { kcal: 72, proteins: 5.4, carbs: 9.0, fats: 0.4 }, defaultServingG: 150, unit: 'g', emoji: '🟢' },
  { id: 'merc-helado-vainilla', name: 'Helado de Vainilla', brand: 'Hacendado', supermarket: 'mercadona', category: 'congelados', nutritionPer100g: { kcal: 207, proteins: 3.5, carbs: 24.0, fats: 11.0 }, defaultServingG: 100, unit: 'g', emoji: '🍦' },

  // ═══════════════════════════════════════════
  // ██  LIDL (Milbona / Snack Day / etc.)   ██
  // ═══════════════════════════════════════════

  // --- Lácteos ---
  { id: 'lidl-leche-semi', name: 'Leche Semidesnatada', brand: 'Milbona', supermarket: 'lidl', category: 'lacteos', nutritionPer100g: { kcal: 47, proteins: 3.2, carbs: 4.9, fats: 1.6 }, defaultServingG: 250, unit: 'ml', emoji: '🥛' },
  { id: 'lidl-leche-entera', name: 'Leche Entera', brand: 'Milbona', supermarket: 'lidl', category: 'lacteos', nutritionPer100g: { kcal: 64, proteins: 3.2, carbs: 4.8, fats: 3.6 }, defaultServingG: 250, unit: 'ml', emoji: '🥛' },
  { id: 'lidl-yogur-griego', name: 'Yogur Griego Natural', brand: 'Milbona', supermarket: 'lidl', category: 'lacteos', nutritionPer100g: { kcal: 115, proteins: 6.4, carbs: 4.0, fats: 8.0 }, defaultServingG: 150, unit: 'g', emoji: '🫙' },
  { id: 'lidl-queso-proteina', name: 'Queso Batido Proteína', brand: 'Milbona', supermarket: 'lidl', category: 'lacteos', nutritionPer100g: { kcal: 55, proteins: 10.0, carbs: 3.5, fats: 0.2 }, defaultServingG: 250, unit: 'g', emoji: '🧀' },
  { id: 'lidl-yogur-proteinas', name: 'Yogur Proteínas', brand: 'Milbona', supermarket: 'lidl', category: 'lacteos', nutritionPer100g: { kcal: 62, proteins: 10.0, carbs: 4.2, fats: 0.5 }, defaultServingG: 200, unit: 'g', emoji: '🫙' },
  { id: 'lidl-queso-edam', name: 'Queso Edam Lonchas', brand: 'Milbona', supermarket: 'lidl', category: 'lacteos', nutritionPer100g: { kcal: 313, proteins: 25.0, carbs: 0.5, fats: 23.0 }, defaultServingG: 20, unit: 'g', emoji: '🧀' },
  { id: 'lidl-skyr', name: 'Skyr Natural', brand: 'Milbona', supermarket: 'lidl', category: 'lacteos', nutritionPer100g: { kcal: 63, proteins: 11.0, carbs: 4.0, fats: 0.2 }, defaultServingG: 150, unit: 'g', emoji: '🫙' },
  { id: 'lidl-mantequilla', name: 'Mantequilla', brand: 'Milbona', supermarket: 'lidl', category: 'lacteos', nutritionPer100g: { kcal: 717, proteins: 0.9, carbs: 0.1, fats: 81.0 }, defaultServingG: 10, unit: 'g', emoji: '🧈' },

  // --- Carnes ---
  { id: 'lidl-pechuga-pollo', name: 'Pechuga de Pollo', brand: 'Lidl', supermarket: 'lidl', category: 'carnes', nutritionPer100g: { kcal: 108, proteins: 24.0, carbs: 0.0, fats: 1.3 }, defaultServingG: 150, unit: 'g', emoji: '🍗' },
  { id: 'lidl-carne-picada-vacuno', name: 'Carne Picada de Vacuno', brand: 'Lidl', supermarket: 'lidl', category: 'carnes', nutritionPer100g: { kcal: 174, proteins: 20.0, carbs: 0.0, fats: 10.0 }, defaultServingG: 150, unit: 'g', emoji: '🥩' },
  { id: 'lidl-hamburguesa', name: 'Hamburguesa de Pollo', brand: 'Lidl', supermarket: 'lidl', category: 'carnes', nutritionPer100g: { kcal: 180, proteins: 18.0, carbs: 5.0, fats: 9.0 }, defaultServingG: 100, unit: 'g', emoji: '🍔' },
  { id: 'lidl-filete-cerdo', name: 'Filete de Cerdo', brand: 'Lidl', supermarket: 'lidl', category: 'carnes', nutritionPer100g: { kcal: 143, proteins: 22.0, carbs: 0.0, fats: 5.8 }, defaultServingG: 150, unit: 'g', emoji: '🥩' },

  // --- Embutidos ---
  { id: 'lidl-jamon-cocido', name: 'Jamón Cocido Extra', brand: 'Realvalle', supermarket: 'lidl', category: 'embutidos', nutritionPer100g: { kcal: 107, proteins: 18.0, carbs: 1.0, fats: 3.5 }, defaultServingG: 40, unit: 'g', emoji: '🥓' },
  { id: 'lidl-pavo-lonchas', name: 'Pavo en Lonchas', brand: 'Realvalle', supermarket: 'lidl', category: 'embutidos', nutritionPer100g: { kcal: 98, proteins: 16.0, carbs: 2.0, fats: 3.0 }, defaultServingG: 40, unit: 'g', emoji: '🦃' },
  { id: 'lidl-chorizo', name: 'Chorizo Tradición', brand: 'Realvalle', supermarket: 'lidl', category: 'embutidos', nutritionPer100g: { kcal: 375, proteins: 21.0, carbs: 2.5, fats: 31.0 }, defaultServingG: 30, unit: 'g', emoji: '🌭' },
  { id: 'lidl-jamon-serrano', name: 'Jamón Serrano Reserva', brand: 'Realvalle', supermarket: 'lidl', category: 'embutidos', nutritionPer100g: { kcal: 240, proteins: 30.0, carbs: 0.5, fats: 13.0 }, defaultServingG: 40, unit: 'g', emoji: '🥓' },

  // --- Cereales / Pan ---
  { id: 'lidl-pan-integral', name: 'Pan de Molde 100% Integral', brand: 'Belbake', supermarket: 'lidl', category: 'panaderia', nutritionPer100g: { kcal: 237, proteins: 10.0, carbs: 38.0, fats: 3.9 }, defaultServingG: 30, unit: 'g', emoji: '🍞' },
  { id: 'lidl-tortitas-arroz', name: 'Tortitas de Arroz', brand: 'Snack Day', supermarket: 'lidl', category: 'cereales', nutritionPer100g: { kcal: 387, proteins: 8.0, carbs: 81.0, fats: 3.5 }, defaultServingG: 10, unit: 'g', emoji: '🍘' },
  { id: 'lidl-arroz-integral', name: 'Arroz Integral', brand: 'Golden Sun', supermarket: 'lidl', category: 'cereales', nutritionPer100g: { kcal: 349, proteins: 7.5, carbs: 73.0, fats: 2.5 }, defaultServingG: 80, unit: 'g', emoji: '🍚' },
  { id: 'lidl-avena', name: 'Copos de Avena Finos', brand: 'Crownfield', supermarket: 'lidl', category: 'cereales', nutritionPer100g: { kcal: 368, proteins: 13.5, carbs: 56.0, fats: 7.0 }, defaultServingG: 40, unit: 'g', emoji: '🥣' },
  { id: 'lidl-pasta-penne', name: 'Pasta Penne', brand: 'Combino', supermarket: 'lidl', category: 'cereales', nutritionPer100g: { kcal: 355, proteins: 12.0, carbs: 72.0, fats: 1.5 }, defaultServingG: 80, unit: 'g', emoji: '🍝' },

  // --- Frutas / Verduras ---
  { id: 'lidl-platano', name: 'Plátano', brand: 'Lidl', supermarket: 'lidl', category: 'frutas', nutritionPer100g: { kcal: 89, proteins: 1.1, carbs: 20.0, fats: 0.3 }, defaultServingG: 120, unit: 'g', emoji: '🍌' },
  { id: 'lidl-brocoli', name: 'Brócoli', brand: 'Lidl', supermarket: 'lidl', category: 'verduras', nutritionPer100g: { kcal: 34, proteins: 2.8, carbs: 4.0, fats: 0.4 }, defaultServingG: 200, unit: 'g', emoji: '🥦' },
  { id: 'lidl-manzana', name: 'Manzana', brand: 'Lidl', supermarket: 'lidl', category: 'frutas', nutritionPer100g: { kcal: 52, proteins: 0.3, carbs: 12.0, fats: 0.2 }, defaultServingG: 180, unit: 'g', emoji: '🍎' },
  { id: 'lidl-tomate-cherry', name: 'Tomates Cherry', brand: 'Lidl', supermarket: 'lidl', category: 'verduras', nutritionPer100g: { kcal: 18, proteins: 0.9, carbs: 3.0, fats: 0.2 }, defaultServingG: 100, unit: 'g', emoji: '🍅' },

  // --- Snacks ---
  { id: 'lidl-almendras', name: 'Almendras Tostadas', brand: 'Alesto', supermarket: 'lidl', category: 'snacks', nutritionPer100g: { kcal: 607, proteins: 22.0, carbs: 7.0, fats: 53.0 }, defaultServingG: 30, unit: 'g', emoji: '🥜' },
  { id: 'lidl-barrita-proteina', name: 'Barrita Proteína', brand: 'Enervit', supermarket: 'lidl', category: 'snacks', nutritionPer100g: { kcal: 358, proteins: 30.0, carbs: 30.0, fats: 12.0 }, defaultServingG: 45, unit: 'g', emoji: '🍫' },
  { id: 'lidl-mix-frutos-secos', name: 'Mix de Frutos Secos', brand: 'Alesto', supermarket: 'lidl', category: 'snacks', nutritionPer100g: { kcal: 594, proteins: 18.0, carbs: 14.0, fats: 51.0 }, defaultServingG: 30, unit: 'g', emoji: '🥜' },
  { id: 'lidl-cacahuetes', name: 'Cacahuetes Tostados', brand: 'Alesto', supermarket: 'lidl', category: 'snacks', nutritionPer100g: { kcal: 599, proteins: 26.0, carbs: 12.0, fats: 49.0 }, defaultServingG: 30, unit: 'g', emoji: '🥜' },

  // --- Bebidas ---
  { id: 'lidl-cerveza', name: 'Cerveza Lager', brand: 'Argus', supermarket: 'lidl', category: 'bebidas', nutritionPer100g: { kcal: 42, proteins: 0.5, carbs: 3.5, fats: 0.0 }, defaultServingG: 330, unit: 'ml', emoji: '🍺' },
  { id: 'lidl-zumo-naranja', name: 'Zumo de Naranja', brand: 'Solevita', supermarket: 'lidl', category: 'bebidas', nutritionPer100g: { kcal: 43, proteins: 0.7, carbs: 9.4, fats: 0.1 }, defaultServingG: 250, unit: 'ml', emoji: '🧃' },
  { id: 'lidl-agua', name: 'Agua Mineral', brand: 'Freeway', supermarket: 'lidl', category: 'bebidas', nutritionPer100g: { kcal: 0, proteins: 0.0, carbs: 0.0, fats: 0.0 }, defaultServingG: 500, unit: 'ml', emoji: '💧' },

  // --- Conservas ---
  { id: 'lidl-atun-aceite', name: 'Atún en Aceite', brand: 'Nixe', supermarket: 'lidl', category: 'conservas', nutritionPer100g: { kcal: 195, proteins: 25.0, carbs: 0.0, fats: 10.0 }, defaultServingG: 52, unit: 'g', emoji: '🥫' },

  // --- Congelados ---
  { id: 'lidl-pizza-margherita', name: 'Pizza Margherita', brand: 'Trattoria Alfredo', supermarket: 'lidl', category: 'congelados', nutritionPer100g: { kcal: 230, proteins: 9.5, carbs: 28.0, fats: 9.0 }, defaultServingG: 175, unit: 'g', emoji: '🍕' },

  // ═══════════════════════════════════════════
  // ██  CARREFOUR                            ██
  // ═══════════════════════════════════════════

  // --- Lácteos ---
  { id: 'carr-leche-desnatada', name: 'Leche Desnatada', brand: 'Carrefour', supermarket: 'carrefour', category: 'lacteos', nutritionPer100g: { kcal: 34, proteins: 3.4, carbs: 4.9, fats: 0.1 }, defaultServingG: 250, unit: 'ml', emoji: '🥛' },
  { id: 'carr-leche-entera', name: 'Leche Entera', brand: 'Carrefour', supermarket: 'carrefour', category: 'lacteos', nutritionPer100g: { kcal: 64, proteins: 3.2, carbs: 4.8, fats: 3.6 }, defaultServingG: 250, unit: 'ml', emoji: '🥛' },
  { id: 'carr-yogur-proteinas', name: 'Yogur Alto en Proteínas', brand: 'Carrefour Sensation', supermarket: 'carrefour', category: 'lacteos', nutritionPer100g: { kcal: 67, proteins: 10.0, carbs: 4.5, fats: 0.8 }, defaultServingG: 160, unit: 'g', emoji: '🫙' },
  { id: 'carr-queso-manchego', name: 'Queso Manchego Semicurado', brand: 'Carrefour', supermarket: 'carrefour', category: 'lacteos', nutritionPer100g: { kcal: 392, proteins: 26.0, carbs: 0.5, fats: 32.0 }, defaultServingG: 30, unit: 'g', emoji: '🧀' },
  { id: 'carr-yogur-natural', name: 'Yogur Natural', brand: 'Carrefour', supermarket: 'carrefour', category: 'lacteos', nutritionPer100g: { kcal: 60, proteins: 3.8, carbs: 4.5, fats: 3.0 }, defaultServingG: 125, unit: 'g', emoji: '🫙' },
  { id: 'carr-queso-fresco', name: 'Queso Fresco 0%', brand: 'Carrefour', supermarket: 'carrefour', category: 'lacteos', nutritionPer100g: { kcal: 52, proteins: 8.5, carbs: 4.0, fats: 0.2 }, defaultServingG: 75, unit: 'g', emoji: '🧀' },

  // --- Carnes / Pescados ---
  { id: 'carr-pechuga-pollo', name: 'Pechuga de Pollo', brand: 'Carrefour Calidad y Origen', supermarket: 'carrefour', category: 'carnes', nutritionPer100g: { kcal: 112, proteins: 22.0, carbs: 0.0, fats: 2.5 }, defaultServingG: 150, unit: 'g', emoji: '🍗' },
  { id: 'carr-salmon', name: 'Salmón Fresco', brand: 'Carrefour', supermarket: 'carrefour', category: 'pescados', nutritionPer100g: { kcal: 208, proteins: 20.0, carbs: 0.0, fats: 13.0 }, defaultServingG: 125, unit: 'g', emoji: '🐟' },
  { id: 'carr-atun-lata', name: 'Atún en Aceite de Oliva', brand: 'Carrefour', supermarket: 'carrefour', category: 'conservas', nutritionPer100g: { kcal: 200, proteins: 26.0, carbs: 0.0, fats: 10.5 }, defaultServingG: 52, unit: 'g', emoji: '🥫' },
  { id: 'carr-carne-picada', name: 'Carne Picada Mixta', brand: 'Carrefour', supermarket: 'carrefour', category: 'carnes', nutritionPer100g: { kcal: 215, proteins: 17.0, carbs: 0.5, fats: 16.0 }, defaultServingG: 150, unit: 'g', emoji: '🥩' },
  { id: 'carr-merluza', name: 'Merluza Filetes', brand: 'Carrefour', supermarket: 'carrefour', category: 'pescados', nutritionPer100g: { kcal: 82, proteins: 17.0, carbs: 0.0, fats: 1.3 }, defaultServingG: 150, unit: 'g', emoji: '🐟' },

  // --- Cereales ---
  { id: 'carr-espaguetis', name: 'Espaguetis', brand: 'Carrefour', supermarket: 'carrefour', category: 'cereales', nutritionPer100g: { kcal: 355, proteins: 12.0, carbs: 72.0, fats: 1.5 }, defaultServingG: 80, unit: 'g', emoji: '🍝' },
  { id: 'carr-arroz-blanco', name: 'Arroz Blanco', brand: 'Carrefour', supermarket: 'carrefour', category: 'cereales', nutritionPer100g: { kcal: 354, proteins: 7.0, carbs: 78.0, fats: 0.9 }, defaultServingG: 80, unit: 'g', emoji: '🍚' },
  { id: 'carr-cereales-fitness', name: 'Cereales Fitness', brand: 'Nestlé', supermarket: 'carrefour', category: 'cereales', nutritionPer100g: { kcal: 367, proteins: 8.0, carbs: 76.0, fats: 1.5 }, defaultServingG: 30, unit: 'g', emoji: '🥣' },
  { id: 'carr-pan-barra', name: 'Baguette', brand: 'Carrefour', supermarket: 'carrefour', category: 'panaderia', nutritionPer100g: { kcal: 261, proteins: 8.5, carbs: 50.0, fats: 1.5 }, defaultServingG: 60, unit: 'g', emoji: '🥖' },

  // --- Verduras ---
  { id: 'carr-patata', name: 'Patata', brand: 'Carrefour', supermarket: 'carrefour', category: 'verduras', nutritionPer100g: { kcal: 77, proteins: 2.0, carbs: 17.0, fats: 0.1 }, defaultServingG: 200, unit: 'g', emoji: '🥔' },
  { id: 'carr-cebolla', name: 'Cebolla', brand: 'Carrefour', supermarket: 'carrefour', category: 'verduras', nutritionPer100g: { kcal: 40, proteins: 1.1, carbs: 8.6, fats: 0.1 }, defaultServingG: 150, unit: 'g', emoji: '🧅' },
  { id: 'carr-ensalada-bolsa', name: 'Ensalada Mixta Bolsa', brand: 'Carrefour', supermarket: 'carrefour', category: 'verduras', nutritionPer100g: { kcal: 16, proteins: 1.3, carbs: 1.5, fats: 0.2 }, defaultServingG: 100, unit: 'g', emoji: '🥗' },

  // --- Salsas ---
  { id: 'carr-tomate-frito', name: 'Tomate Frito', brand: 'Carrefour', supermarket: 'carrefour', category: 'salsas', nutritionPer100g: { kcal: 76, proteins: 1.2, carbs: 8.5, fats: 4.0 }, defaultServingG: 50, unit: 'g', emoji: '🍅' },

  // --- Snacks ---
  { id: 'carr-frutos-secos-mix', name: 'Mix Frutos Secos', brand: 'Carrefour', supermarket: 'carrefour', category: 'snacks', nutritionPer100g: { kcal: 594, proteins: 18.0, carbs: 14.0, fats: 51.0 }, defaultServingG: 30, unit: 'g', emoji: '🥜' },

  // --- Bebidas ---
  { id: 'carr-coca-cola', name: 'Coca-Cola', brand: 'Coca-Cola', supermarket: 'carrefour', category: 'bebidas', nutritionPer100g: { kcal: 42, proteins: 0.0, carbs: 10.6, fats: 0.0 }, defaultServingG: 330, unit: 'ml', emoji: '🥤' },
  { id: 'carr-agua', name: 'Agua Mineral', brand: 'Carrefour', supermarket: 'carrefour', category: 'bebidas', nutritionPer100g: { kcal: 0, proteins: 0.0, carbs: 0.0, fats: 0.0 }, defaultServingG: 500, unit: 'ml', emoji: '💧' },
  { id: 'carr-cerveza-mahou', name: 'Cerveza Mahou 5 Estrellas', brand: 'Mahou', supermarket: 'carrefour', category: 'bebidas', nutritionPer100g: { kcal: 45, proteins: 0.5, carbs: 3.8, fats: 0.0 }, defaultServingG: 330, unit: 'ml', emoji: '🍺' },

  // --- Huevos ---
  { id: 'carr-huevos', name: 'Huevos Camperos L', brand: 'Carrefour', supermarket: 'carrefour', category: 'huevos', nutritionPer100g: { kcal: 155, proteins: 13.0, carbs: 1.1, fats: 11.0 }, defaultServingG: 60, unit: 'g', emoji: '🥚' },

  // ═══════════════════════════════════════════
  // ██  DIA                                  ██
  // ═══════════════════════════════════════════

  { id: 'dia-leche-entera', name: 'Leche Entera', brand: 'Dia', supermarket: 'dia', category: 'lacteos', nutritionPer100g: { kcal: 64, proteins: 3.1, carbs: 4.8, fats: 3.6 }, defaultServingG: 250, unit: 'ml', emoji: '🥛' },
  { id: 'dia-leche-semi', name: 'Leche Semidesnatada', brand: 'Dia', supermarket: 'dia', category: 'lacteos', nutritionPer100g: { kcal: 46, proteins: 3.2, carbs: 4.8, fats: 1.6 }, defaultServingG: 250, unit: 'ml', emoji: '🥛' },
  { id: 'dia-yogur-natural', name: 'Yogur Natural', brand: 'Dia', supermarket: 'dia', category: 'lacteos', nutritionPer100g: { kcal: 58, proteins: 4.0, carbs: 4.3, fats: 2.8 }, defaultServingG: 125, unit: 'g', emoji: '🫙' },
  { id: 'dia-queso-lonchas', name: 'Queso en Lonchas', brand: 'Dia', supermarket: 'dia', category: 'lacteos', nutritionPer100g: { kcal: 314, proteins: 22.0, carbs: 1.5, fats: 24.0 }, defaultServingG: 20, unit: 'g', emoji: '🧀' },
  { id: 'dia-pechuga-pollo', name: 'Pechuga de Pollo', brand: 'Dia', supermarket: 'dia', category: 'carnes', nutritionPer100g: { kcal: 110, proteins: 23.0, carbs: 0.0, fats: 1.8 }, defaultServingG: 150, unit: 'g', emoji: '🍗' },
  { id: 'dia-jamon-serrano', name: 'Jamón Serrano', brand: 'Dia', supermarket: 'dia', category: 'embutidos', nutritionPer100g: { kcal: 241, proteins: 30.5, carbs: 0.5, fats: 12.8 }, defaultServingG: 40, unit: 'g', emoji: '🥓' },
  { id: 'dia-pavo-lonchas', name: 'Pavo en Lonchas', brand: 'Dia', supermarket: 'dia', category: 'embutidos', nutritionPer100g: { kcal: 98, proteins: 16.0, carbs: 2.0, fats: 3.0 }, defaultServingG: 40, unit: 'g', emoji: '🦃' },
  { id: 'dia-arroz', name: 'Arroz Redondo', brand: 'Dia', supermarket: 'dia', category: 'cereales', nutritionPer100g: { kcal: 352, proteins: 6.7, carbs: 79.0, fats: 0.6 }, defaultServingG: 80, unit: 'g', emoji: '🍚' },
  { id: 'dia-pan-barra', name: 'Pan Barra Integral', brand: 'Dia', supermarket: 'dia', category: 'panaderia', nutritionPer100g: { kcal: 245, proteins: 9.0, carbs: 43.0, fats: 3.0 }, defaultServingG: 50, unit: 'g', emoji: '🥖' },
  { id: 'dia-zanahoria', name: 'Zanahoria', brand: 'Dia', supermarket: 'dia', category: 'verduras', nutritionPer100g: { kcal: 41, proteins: 0.9, carbs: 8.7, fats: 0.2 }, defaultServingG: 100, unit: 'g', emoji: '🥕' },
  { id: 'dia-pimiento', name: 'Pimiento Rojo', brand: 'Dia', supermarket: 'dia', category: 'verduras', nutritionPer100g: { kcal: 31, proteins: 1.0, carbs: 5.0, fats: 0.3 }, defaultServingG: 150, unit: 'g', emoji: '🫑' },
  { id: 'dia-alubias', name: 'Alubias Cocidas', brand: 'Dia', supermarket: 'dia', category: 'legumbres', nutritionPer100g: { kcal: 97, proteins: 6.9, carbs: 13.0, fats: 0.5 }, defaultServingG: 200, unit: 'g', emoji: '🫘' },
  { id: 'dia-garbanzos', name: 'Garbanzos Cocidos', brand: 'Dia', supermarket: 'dia', category: 'legumbres', nutritionPer100g: { kcal: 128, proteins: 7.2, carbs: 17.0, fats: 2.9 }, defaultServingG: 200, unit: 'g', emoji: '🫘' },
  { id: 'dia-zumo-pina', name: 'Zumo de Piña', brand: 'Dia', supermarket: 'dia', category: 'bebidas', nutritionPer100g: { kcal: 46, proteins: 0.3, carbs: 11.0, fats: 0.1 }, defaultServingG: 250, unit: 'ml', emoji: '🧃' },
  { id: 'dia-aceite-girasol', name: 'Aceite de Girasol', brand: 'Dia', supermarket: 'dia', category: 'aceites', nutritionPer100g: { kcal: 824, proteins: 0.0, carbs: 0.0, fats: 91.6 }, defaultServingG: 10, unit: 'ml', emoji: '🌻' },
  { id: 'dia-aceite-oliva', name: 'Aceite de Oliva Virgen Extra', brand: 'Dia', supermarket: 'dia', category: 'aceites', nutritionPer100g: { kcal: 824, proteins: 0.0, carbs: 0.0, fats: 91.6 }, defaultServingG: 10, unit: 'ml', emoji: '🫒' },
  { id: 'dia-tomate-frito', name: 'Tomate Frito', brand: 'Dia', supermarket: 'dia', category: 'salsas', nutritionPer100g: { kcal: 78, proteins: 1.2, carbs: 9.0, fats: 4.0 }, defaultServingG: 50, unit: 'g', emoji: '🍅' },
  { id: 'dia-huevos', name: 'Huevos L', brand: 'Dia', supermarket: 'dia', category: 'huevos', nutritionPer100g: { kcal: 155, proteins: 13.0, carbs: 1.1, fats: 11.0 }, defaultServingG: 60, unit: 'g', emoji: '🥚' },
  { id: 'dia-galletas-maria', name: 'Galletas María', brand: 'Dia', supermarket: 'dia', category: 'snacks', nutritionPer100g: { kcal: 436, proteins: 7.0, carbs: 73.0, fats: 13.0 }, defaultServingG: 25, unit: 'g', emoji: '🍪' },
  { id: 'dia-atun-natural', name: 'Atún al Natural', brand: 'Dia', supermarket: 'dia', category: 'conservas', nutritionPer100g: { kcal: 103, proteins: 24.0, carbs: 0.0, fats: 0.6 }, defaultServingG: 52, unit: 'g', emoji: '🥫' },
  { id: 'dia-pasta-macarrones', name: 'Macarrones', brand: 'Dia', supermarket: 'dia', category: 'cereales', nutritionPer100g: { kcal: 353, proteins: 12.5, carbs: 71.0, fats: 1.8 }, defaultServingG: 80, unit: 'g', emoji: '🍝' },

  // ═══════════════════════════════════════════
  // ██  ALDI (Milsani / GutBio / etc.)      ██
  // ═══════════════════════════════════════════

  { id: 'aldi-leche-semi', name: 'Leche Semidesnatada', brand: 'Milsani', supermarket: 'aldi', category: 'lacteos', nutritionPer100g: { kcal: 46, proteins: 3.2, carbs: 4.8, fats: 1.5 }, defaultServingG: 250, unit: 'ml', emoji: '🥛' },
  { id: 'aldi-yogur-natural', name: 'Yogur Natural', brand: 'Milsani', supermarket: 'aldi', category: 'lacteos', nutritionPer100g: { kcal: 60, proteins: 3.8, carbs: 4.6, fats: 3.0 }, defaultServingG: 125, unit: 'g', emoji: '🫙' },
  { id: 'aldi-queso-edam', name: 'Queso Edam Lonchas', brand: 'Milsani', supermarket: 'aldi', category: 'lacteos', nutritionPer100g: { kcal: 313, proteins: 25.0, carbs: 0.5, fats: 23.0 }, defaultServingG: 20, unit: 'g', emoji: '🧀' },
  { id: 'aldi-pechuga-pollo', name: 'Pechuga de Pollo', brand: 'Aldi', supermarket: 'aldi', category: 'carnes', nutritionPer100g: { kcal: 110, proteins: 23.0, carbs: 0.0, fats: 1.5 }, defaultServingG: 150, unit: 'g', emoji: '🍗' },
  { id: 'aldi-pavo-braseado', name: 'Pavo Braseado', brand: 'Gutwald', supermarket: 'aldi', category: 'embutidos', nutritionPer100g: { kcal: 96, proteins: 15.0, carbs: 2.5, fats: 2.8 }, defaultServingG: 40, unit: 'g', emoji: '🦃' },
  { id: 'aldi-avena', name: 'Copos de Avena', brand: 'GutBio', supermarket: 'aldi', category: 'cereales', nutritionPer100g: { kcal: 368, proteins: 13.5, carbs: 56.0, fats: 7.0 }, defaultServingG: 40, unit: 'g', emoji: '🥣' },
  { id: 'aldi-pan-centeno', name: 'Pan de Centeno', brand: 'GutBio', supermarket: 'aldi', category: 'panaderia', nutritionPer100g: { kcal: 219, proteins: 6.0, carbs: 42.0, fats: 1.3 }, defaultServingG: 40, unit: 'g', emoji: '🍞' },
  { id: 'aldi-naranja', name: 'Naranja', brand: 'Aldi', supermarket: 'aldi', category: 'frutas', nutritionPer100g: { kcal: 47, proteins: 0.9, carbs: 9.4, fats: 0.1 }, defaultServingG: 200, unit: 'g', emoji: '🍊' },
  { id: 'aldi-fresa', name: 'Fresas', brand: 'Aldi', supermarket: 'aldi', category: 'frutas', nutritionPer100g: { kcal: 32, proteins: 0.7, carbs: 6.0, fats: 0.3 }, defaultServingG: 150, unit: 'g', emoji: '🍓' },
  { id: 'aldi-nueces', name: 'Nueces Peladas', brand: 'Alesto', supermarket: 'aldi', category: 'snacks', nutritionPer100g: { kcal: 688, proteins: 15.0, carbs: 5.0, fats: 65.0 }, defaultServingG: 25, unit: 'g', emoji: '🥜' },
  { id: 'aldi-chocolate-negro', name: 'Chocolate Negro 70%', brand: 'Moser Roth', supermarket: 'aldi', category: 'dulces', nutritionPer100g: { kcal: 570, proteins: 8.0, carbs: 36.0, fats: 42.0 }, defaultServingG: 25, unit: 'g', emoji: '🍫' },
  { id: 'aldi-bebida-avena', name: 'Bebida de Avena', brand: 'GutBio', supermarket: 'aldi', category: 'bebidas', nutritionPer100g: { kcal: 44, proteins: 0.3, carbs: 6.7, fats: 1.5 }, defaultServingG: 250, unit: 'ml', emoji: '🥛' },
  { id: 'aldi-arroz', name: 'Arroz Basmati', brand: 'Asia Green Garden', supermarket: 'aldi', category: 'cereales', nutritionPer100g: { kcal: 354, proteins: 7.0, carbs: 78.0, fats: 0.9 }, defaultServingG: 80, unit: 'g', emoji: '🍚' },
  { id: 'aldi-huevos', name: 'Huevos Camperos', brand: 'Aldi', supermarket: 'aldi', category: 'huevos', nutritionPer100g: { kcal: 155, proteins: 13.0, carbs: 1.1, fats: 11.0 }, defaultServingG: 60, unit: 'g', emoji: '🥚' },
  { id: 'aldi-salmon', name: 'Salmón Noruego', brand: 'Aldi', supermarket: 'aldi', category: 'pescados', nutritionPer100g: { kcal: 208, proteins: 20.0, carbs: 0.0, fats: 13.0 }, defaultServingG: 125, unit: 'g', emoji: '🐟' },
  { id: 'aldi-jamon-serrano', name: 'Jamón Serrano', brand: 'Gutwald', supermarket: 'aldi', category: 'embutidos', nutritionPer100g: { kcal: 241, proteins: 31.0, carbs: 0.5, fats: 12.5 }, defaultServingG: 40, unit: 'g', emoji: '🥓' },

  // ═══════════════════════════════════════════
  // ██  EROSKI                               ██
  // ═══════════════════════════════════════════

  { id: 'ero-leche-entera', name: 'Leche Entera', brand: 'Eroski', supermarket: 'eroski', category: 'lacteos', nutritionPer100g: { kcal: 63, proteins: 3.1, carbs: 4.7, fats: 3.5 }, defaultServingG: 250, unit: 'ml', emoji: '🥛' },
  { id: 'ero-leche-semi', name: 'Leche Semidesnatada', brand: 'Eroski', supermarket: 'eroski', category: 'lacteos', nutritionPer100g: { kcal: 46, proteins: 3.2, carbs: 4.8, fats: 1.6 }, defaultServingG: 250, unit: 'ml', emoji: '🥛' },
  { id: 'ero-yogur-natural', name: 'Yogur Natural', brand: 'Eroski', supermarket: 'eroski', category: 'lacteos', nutritionPer100g: { kcal: 59, proteins: 3.9, carbs: 4.4, fats: 2.9 }, defaultServingG: 125, unit: 'g', emoji: '🫙' },
  { id: 'ero-yogur-griego', name: 'Yogur Griego', brand: 'Eroski', supermarket: 'eroski', category: 'lacteos', nutritionPer100g: { kcal: 113, proteins: 3.5, carbs: 5.0, fats: 8.5 }, defaultServingG: 125, unit: 'g', emoji: '🫙' },
  { id: 'ero-queso-fresco', name: 'Queso Fresco Batido 0%', brand: 'Eroski', supermarket: 'eroski', category: 'lacteos', nutritionPer100g: { kcal: 48, proteins: 7.5, carbs: 4.0, fats: 0.1 }, defaultServingG: 250, unit: 'g', emoji: '🧀' },
  { id: 'ero-pechuga-pollo', name: 'Pechuga de Pollo', brand: 'Eroski Natur', supermarket: 'eroski', category: 'carnes', nutritionPer100g: { kcal: 110, proteins: 23.1, carbs: 0.0, fats: 1.6 }, defaultServingG: 150, unit: 'g', emoji: '🍗' },
  { id: 'ero-carne-picada', name: 'Carne Picada de Vacuno', brand: 'Eroski', supermarket: 'eroski', category: 'carnes', nutritionPer100g: { kcal: 174, proteins: 20.0, carbs: 0.0, fats: 10.0 }, defaultServingG: 150, unit: 'g', emoji: '🥩' },
  { id: 'ero-jamon-serrano', name: 'Jamón Serrano', brand: 'Eroski', supermarket: 'eroski', category: 'embutidos', nutritionPer100g: { kcal: 240, proteins: 31.0, carbs: 0.5, fats: 12.5 }, defaultServingG: 40, unit: 'g', emoji: '🥓' },
  { id: 'ero-pavo-lonchas', name: 'Pechuga de Pavo', brand: 'Eroski', supermarket: 'eroski', category: 'embutidos', nutritionPer100g: { kcal: 102, proteins: 17.0, carbs: 1.5, fats: 3.2 }, defaultServingG: 40, unit: 'g', emoji: '🦃' },
  { id: 'ero-arroz-blanco', name: 'Arroz Blanco', brand: 'Eroski', supermarket: 'eroski', category: 'cereales', nutritionPer100g: { kcal: 354, proteins: 7.0, carbs: 78.0, fats: 0.9 }, defaultServingG: 80, unit: 'g', emoji: '🍚' },
  { id: 'ero-pasta-espaguetis', name: 'Espaguetis', brand: 'Eroski', supermarket: 'eroski', category: 'cereales', nutritionPer100g: { kcal: 355, proteins: 12.0, carbs: 72.0, fats: 1.5 }, defaultServingG: 80, unit: 'g', emoji: '🍝' },
  { id: 'ero-pan-molde', name: 'Pan de Molde Integral', brand: 'Eroski', supermarket: 'eroski', category: 'panaderia', nutritionPer100g: { kcal: 245, proteins: 10.0, carbs: 40.0, fats: 3.8 }, defaultServingG: 30, unit: 'g', emoji: '🍞' },
  { id: 'ero-tomate-frito', name: 'Tomate Frito Casero', brand: 'Eroski', supermarket: 'eroski', category: 'salsas', nutritionPer100g: { kcal: 72, proteins: 1.3, carbs: 8.0, fats: 3.8 }, defaultServingG: 50, unit: 'g', emoji: '🍅' },
  { id: 'ero-aceite-oliva', name: 'Aceite de Oliva Virgen Extra', brand: 'Eroski', supermarket: 'eroski', category: 'aceites', nutritionPer100g: { kcal: 824, proteins: 0.0, carbs: 0.0, fats: 91.6 }, defaultServingG: 10, unit: 'ml', emoji: '🫒' },
  { id: 'ero-garbanzos', name: 'Garbanzos Cocidos', brand: 'Eroski', supermarket: 'eroski', category: 'legumbres', nutritionPer100g: { kcal: 128, proteins: 7.2, carbs: 17.0, fats: 2.9 }, defaultServingG: 200, unit: 'g', emoji: '🫘' },
  { id: 'ero-lentejas', name: 'Lentejas Cocidas', brand: 'Eroski', supermarket: 'eroski', category: 'legumbres', nutritionPer100g: { kcal: 103, proteins: 8.1, carbs: 14.0, fats: 0.6 }, defaultServingG: 200, unit: 'g', emoji: '🫘' },
  { id: 'ero-atun-aceite', name: 'Atún en Aceite de Oliva', brand: 'Eroski', supermarket: 'eroski', category: 'conservas', nutritionPer100g: { kcal: 200, proteins: 26.0, carbs: 0.0, fats: 10.5 }, defaultServingG: 52, unit: 'g', emoji: '🥫' },
  { id: 'ero-huevos', name: 'Huevos Camperos', brand: 'Eroski', supermarket: 'eroski', category: 'huevos', nutritionPer100g: { kcal: 155, proteins: 13.0, carbs: 1.1, fats: 11.0 }, defaultServingG: 60, unit: 'g', emoji: '🥚' },
  { id: 'ero-cerveza', name: 'Cerveza Eroski', brand: 'Eroski', supermarket: 'eroski', category: 'bebidas', nutritionPer100g: { kcal: 42, proteins: 0.5, carbs: 3.5, fats: 0.0 }, defaultServingG: 330, unit: 'ml', emoji: '🍺' },
  { id: 'ero-galletas-digestive', name: 'Galletas Digestive', brand: 'Eroski', supermarket: 'eroski', category: 'snacks', nutritionPer100g: { kcal: 468, proteins: 7.0, carbs: 62.0, fats: 21.0 }, defaultServingG: 30, unit: 'g', emoji: '🍪' },

  // ═══════════════════════════════════════════
  // ██  AHORRAMAS                            ██
  // ═══════════════════════════════════════════

  { id: 'ahor-leche-entera', name: 'Leche Entera', brand: 'AhorraMás', supermarket: 'ahorramas', category: 'lacteos', nutritionPer100g: { kcal: 63, proteins: 3.1, carbs: 4.7, fats: 3.5 }, defaultServingG: 250, unit: 'ml', emoji: '🥛' },
  { id: 'ahor-leche-semi', name: 'Leche Semidesnatada', brand: 'AhorraMás', supermarket: 'ahorramas', category: 'lacteos', nutritionPer100g: { kcal: 46, proteins: 3.2, carbs: 4.8, fats: 1.6 }, defaultServingG: 250, unit: 'ml', emoji: '🥛' },
  { id: 'ahor-yogur-natural', name: 'Yogur Natural', brand: 'AhorraMás', supermarket: 'ahorramas', category: 'lacteos', nutritionPer100g: { kcal: 60, proteins: 3.8, carbs: 4.5, fats: 3.0 }, defaultServingG: 125, unit: 'g', emoji: '🫙' },
  { id: 'ahor-pechuga-pollo', name: 'Pechuga de Pollo', brand: 'AhorraMás', supermarket: 'ahorramas', category: 'carnes', nutritionPer100g: { kcal: 110, proteins: 23.1, carbs: 0.0, fats: 1.6 }, defaultServingG: 150, unit: 'g', emoji: '🍗' },
  { id: 'ahor-carne-picada', name: 'Carne Picada Mixta', brand: 'AhorraMás', supermarket: 'ahorramas', category: 'carnes', nutritionPer100g: { kcal: 215, proteins: 17.0, carbs: 0.5, fats: 16.0 }, defaultServingG: 150, unit: 'g', emoji: '🥩' },
  { id: 'ahor-jamon-serrano', name: 'Jamón Serrano', brand: 'AhorraMás', supermarket: 'ahorramas', category: 'embutidos', nutritionPer100g: { kcal: 241, proteins: 31.0, carbs: 0.5, fats: 12.5 }, defaultServingG: 40, unit: 'g', emoji: '🥓' },
  { id: 'ahor-pavo', name: 'Pechuga de Pavo', brand: 'AhorraMás', supermarket: 'ahorramas', category: 'embutidos', nutritionPer100g: { kcal: 105, proteins: 17.0, carbs: 1.5, fats: 3.5 }, defaultServingG: 40, unit: 'g', emoji: '🦃' },
  { id: 'ahor-pan-barra', name: 'Barra de Pan', brand: 'AhorraMás', supermarket: 'ahorramas', category: 'panaderia', nutritionPer100g: { kcal: 261, proteins: 8.5, carbs: 50.0, fats: 1.5 }, defaultServingG: 60, unit: 'g', emoji: '🥖' },
  { id: 'ahor-arroz', name: 'Arroz Redondo', brand: 'AhorraMás', supermarket: 'ahorramas', category: 'cereales', nutritionPer100g: { kcal: 354, proteins: 7.0, carbs: 78.0, fats: 0.9 }, defaultServingG: 80, unit: 'g', emoji: '🍚' },
  { id: 'ahor-tomate-frito', name: 'Tomate Frito', brand: 'AhorraMás', supermarket: 'ahorramas', category: 'salsas', nutritionPer100g: { kcal: 76, proteins: 1.2, carbs: 8.5, fats: 4.0 }, defaultServingG: 50, unit: 'g', emoji: '🍅' },
  { id: 'ahor-huevos', name: 'Huevos L', brand: 'AhorraMás', supermarket: 'ahorramas', category: 'huevos', nutritionPer100g: { kcal: 155, proteins: 13.0, carbs: 1.1, fats: 11.0 }, defaultServingG: 60, unit: 'g', emoji: '🥚' },
  { id: 'ahor-aceite-oliva', name: 'Aceite de Oliva Virgen Extra', brand: 'AhorraMás', supermarket: 'ahorramas', category: 'aceites', nutritionPer100g: { kcal: 824, proteins: 0.0, carbs: 0.0, fats: 91.6 }, defaultServingG: 10, unit: 'ml', emoji: '🫒' },
  { id: 'ahor-garbanzos', name: 'Garbanzos Cocidos', brand: 'AhorraMás', supermarket: 'ahorramas', category: 'legumbres', nutritionPer100g: { kcal: 128, proteins: 7.2, carbs: 17.0, fats: 2.9 }, defaultServingG: 200, unit: 'g', emoji: '🫘' },
  { id: 'ahor-atun', name: 'Atún en Aceite de Oliva', brand: 'AhorraMás', supermarket: 'ahorramas', category: 'conservas', nutritionPer100g: { kcal: 200, proteins: 26.0, carbs: 0.0, fats: 10.5 }, defaultServingG: 52, unit: 'g', emoji: '🥫' },

  // ═══════════════════════════════════════════
  // ██  SUPECO                               ██
  // ═══════════════════════════════════════════

  { id: 'sup-leche-entera', name: 'Leche Entera', brand: 'Supeco', supermarket: 'supeco', category: 'lacteos', nutritionPer100g: { kcal: 63, proteins: 3.1, carbs: 4.7, fats: 3.5 }, defaultServingG: 250, unit: 'ml', emoji: '🥛' },
  { id: 'sup-pechuga-pollo', name: 'Pechuga de Pollo', brand: 'Supeco', supermarket: 'supeco', category: 'carnes', nutritionPer100g: { kcal: 110, proteins: 23.0, carbs: 0.0, fats: 1.6 }, defaultServingG: 150, unit: 'g', emoji: '🍗' },
  { id: 'sup-arroz', name: 'Arroz Blanco', brand: 'Supeco', supermarket: 'supeco', category: 'cereales', nutritionPer100g: { kcal: 354, proteins: 7.0, carbs: 78.0, fats: 0.9 }, defaultServingG: 80, unit: 'g', emoji: '🍚' },
  { id: 'sup-pasta', name: 'Espaguetis', brand: 'Supeco', supermarket: 'supeco', category: 'cereales', nutritionPer100g: { kcal: 355, proteins: 12.0, carbs: 72.0, fats: 1.5 }, defaultServingG: 80, unit: 'g', emoji: '🍝' },
  { id: 'sup-aceite-oliva', name: 'Aceite de Oliva Virgen Extra', brand: 'Supeco', supermarket: 'supeco', category: 'aceites', nutritionPer100g: { kcal: 824, proteins: 0.0, carbs: 0.0, fats: 91.6 }, defaultServingG: 10, unit: 'ml', emoji: '🫒' },
  { id: 'sup-huevos', name: 'Huevos M', brand: 'Supeco', supermarket: 'supeco', category: 'huevos', nutritionPer100g: { kcal: 155, proteins: 13.0, carbs: 1.1, fats: 11.0 }, defaultServingG: 55, unit: 'g', emoji: '🥚' },
  { id: 'sup-tomate-frito', name: 'Tomate Frito', brand: 'Supeco', supermarket: 'supeco', category: 'salsas', nutritionPer100g: { kcal: 76, proteins: 1.2, carbs: 8.5, fats: 4.0 }, defaultServingG: 50, unit: 'g', emoji: '🍅' },
  { id: 'sup-atun', name: 'Atún en Aceite', brand: 'Supeco', supermarket: 'supeco', category: 'conservas', nutritionPer100g: { kcal: 200, proteins: 26.0, carbs: 0.0, fats: 10.5 }, defaultServingG: 52, unit: 'g', emoji: '🥫' },
  { id: 'sup-garbanzos', name: 'Garbanzos Cocidos', brand: 'Supeco', supermarket: 'supeco', category: 'legumbres', nutritionPer100g: { kcal: 128, proteins: 7.2, carbs: 17.0, fats: 2.9 }, defaultServingG: 200, unit: 'g', emoji: '🫘' },
  { id: 'sup-pan', name: 'Pan de Molde', brand: 'Supeco', supermarket: 'supeco', category: 'panaderia', nutritionPer100g: { kcal: 265, proteins: 8.5, carbs: 48.0, fats: 3.5 }, defaultServingG: 30, unit: 'g', emoji: '🍞' },

  // ═══════════════════════════════════════════
  // ██  ALCAMPO (Auchan)                     ██
  // ═══════════════════════════════════════════

  { id: 'alc-leche-entera', name: 'Leche Entera', brand: 'Auchan', supermarket: 'alcampo', category: 'lacteos', nutritionPer100g: { kcal: 63, proteins: 3.1, carbs: 4.7, fats: 3.5 }, defaultServingG: 250, unit: 'ml', emoji: '🥛' },
  { id: 'alc-leche-semi', name: 'Leche Semidesnatada', brand: 'Auchan', supermarket: 'alcampo', category: 'lacteos', nutritionPer100g: { kcal: 46, proteins: 3.2, carbs: 4.8, fats: 1.6 }, defaultServingG: 250, unit: 'ml', emoji: '🥛' },
  { id: 'alc-yogur-natural', name: 'Yogur Natural', brand: 'Auchan', supermarket: 'alcampo', category: 'lacteos', nutritionPer100g: { kcal: 60, proteins: 3.8, carbs: 4.5, fats: 3.0 }, defaultServingG: 125, unit: 'g', emoji: '🫙' },
  { id: 'alc-pechuga-pollo', name: 'Pechuga de Pollo', brand: 'Auchan', supermarket: 'alcampo', category: 'carnes', nutritionPer100g: { kcal: 110, proteins: 23.0, carbs: 0.0, fats: 1.6 }, defaultServingG: 150, unit: 'g', emoji: '🍗' },
  { id: 'alc-carne-picada', name: 'Carne Picada Vacuno', brand: 'Auchan', supermarket: 'alcampo', category: 'carnes', nutritionPer100g: { kcal: 174, proteins: 20.0, carbs: 0.0, fats: 10.0 }, defaultServingG: 150, unit: 'g', emoji: '🥩' },
  { id: 'alc-salmon', name: 'Salmón Fresco', brand: 'Auchan', supermarket: 'alcampo', category: 'pescados', nutritionPer100g: { kcal: 208, proteins: 20.0, carbs: 0.0, fats: 13.0 }, defaultServingG: 125, unit: 'g', emoji: '🐟' },
  { id: 'alc-jamon-serrano', name: 'Jamón Serrano', brand: 'Auchan', supermarket: 'alcampo', category: 'embutidos', nutritionPer100g: { kcal: 241, proteins: 31.0, carbs: 0.5, fats: 12.5 }, defaultServingG: 40, unit: 'g', emoji: '🥓' },
  { id: 'alc-pavo', name: 'Pechuga de Pavo', brand: 'Auchan', supermarket: 'alcampo', category: 'embutidos', nutritionPer100g: { kcal: 105, proteins: 17.0, carbs: 1.5, fats: 3.5 }, defaultServingG: 40, unit: 'g', emoji: '🦃' },
  { id: 'alc-arroz', name: 'Arroz Redondo', brand: 'Auchan', supermarket: 'alcampo', category: 'cereales', nutritionPer100g: { kcal: 354, proteins: 7.0, carbs: 78.0, fats: 0.9 }, defaultServingG: 80, unit: 'g', emoji: '🍚' },
  { id: 'alc-pasta', name: 'Macarrones', brand: 'Auchan', supermarket: 'alcampo', category: 'cereales', nutritionPer100g: { kcal: 353, proteins: 12.5, carbs: 71.0, fats: 1.8 }, defaultServingG: 80, unit: 'g', emoji: '🍝' },
  { id: 'alc-pan-molde', name: 'Pan de Molde Integral', brand: 'Auchan', supermarket: 'alcampo', category: 'panaderia', nutritionPer100g: { kcal: 248, proteins: 11.0, carbs: 41.0, fats: 3.8 }, defaultServingG: 30, unit: 'g', emoji: '🍞' },
  { id: 'alc-aceite-oliva', name: 'Aceite de Oliva Virgen Extra', brand: 'Auchan', supermarket: 'alcampo', category: 'aceites', nutritionPer100g: { kcal: 824, proteins: 0.0, carbs: 0.0, fats: 91.6 }, defaultServingG: 10, unit: 'ml', emoji: '🫒' },
  { id: 'alc-huevos', name: 'Huevos Camperos L', brand: 'Auchan', supermarket: 'alcampo', category: 'huevos', nutritionPer100g: { kcal: 155, proteins: 13.0, carbs: 1.1, fats: 11.0 }, defaultServingG: 60, unit: 'g', emoji: '🥚' },
  { id: 'alc-garbanzos', name: 'Garbanzos Cocidos', brand: 'Auchan', supermarket: 'alcampo', category: 'legumbres', nutritionPer100g: { kcal: 128, proteins: 7.2, carbs: 17.0, fats: 2.9 }, defaultServingG: 200, unit: 'g', emoji: '🫘' },

  // ═══════════════════════════════════════════
  // ██  CONSUM                               ██
  // ═══════════════════════════════════════════

  { id: 'con-leche-entera', name: 'Leche Entera', brand: 'Consum', supermarket: 'consum', category: 'lacteos', nutritionPer100g: { kcal: 63, proteins: 3.1, carbs: 4.7, fats: 3.5 }, defaultServingG: 250, unit: 'ml', emoji: '🥛' },
  { id: 'con-yogur-natural', name: 'Yogur Natural', brand: 'Consum', supermarket: 'consum', category: 'lacteos', nutritionPer100g: { kcal: 60, proteins: 3.8, carbs: 4.5, fats: 3.0 }, defaultServingG: 125, unit: 'g', emoji: '🫙' },
  { id: 'con-pechuga-pollo', name: 'Pechuga de Pollo', brand: 'Consum', supermarket: 'consum', category: 'carnes', nutritionPer100g: { kcal: 110, proteins: 23.0, carbs: 0.0, fats: 1.6 }, defaultServingG: 150, unit: 'g', emoji: '🍗' },
  { id: 'con-jamon-serrano', name: 'Jamón Serrano', brand: 'Consum', supermarket: 'consum', category: 'embutidos', nutritionPer100g: { kcal: 241, proteins: 31.0, carbs: 0.5, fats: 12.5 }, defaultServingG: 40, unit: 'g', emoji: '🥓' },
  { id: 'con-pavo', name: 'Pechuga de Pavo', brand: 'Consum', supermarket: 'consum', category: 'embutidos', nutritionPer100g: { kcal: 105, proteins: 17.0, carbs: 1.5, fats: 3.5 }, defaultServingG: 40, unit: 'g', emoji: '🦃' },
  { id: 'con-arroz', name: 'Arroz Bomba', brand: 'Consum', supermarket: 'consum', category: 'cereales', nutritionPer100g: { kcal: 354, proteins: 7.0, carbs: 78.0, fats: 0.9 }, defaultServingG: 80, unit: 'g', emoji: '🍚' },
  { id: 'con-pan-molde', name: 'Pan de Molde', brand: 'Consum', supermarket: 'consum', category: 'panaderia', nutritionPer100g: { kcal: 265, proteins: 8.5, carbs: 48.0, fats: 3.5 }, defaultServingG: 30, unit: 'g', emoji: '🍞' },
  { id: 'con-aceite-oliva', name: 'Aceite de Oliva Virgen Extra', brand: 'Consum', supermarket: 'consum', category: 'aceites', nutritionPer100g: { kcal: 824, proteins: 0.0, carbs: 0.0, fats: 91.6 }, defaultServingG: 10, unit: 'ml', emoji: '🫒' },
  { id: 'con-huevos', name: 'Huevos L', brand: 'Consum', supermarket: 'consum', category: 'huevos', nutritionPer100g: { kcal: 155, proteins: 13.0, carbs: 1.1, fats: 11.0 }, defaultServingG: 60, unit: 'g', emoji: '🥚' },
  { id: 'con-tomate-frito', name: 'Tomate Frito', brand: 'Consum', supermarket: 'consum', category: 'salsas', nutritionPer100g: { kcal: 76, proteins: 1.2, carbs: 8.5, fats: 4.0 }, defaultServingG: 50, unit: 'g', emoji: '🍅' },

  // ═══════════════════════════════════════════
  // ██  HIPERCOR / EL CORTE INGLÉS           ██
  // ═══════════════════════════════════════════

  { id: 'hip-leche-entera', name: 'Leche Entera', brand: 'Hipercor', supermarket: 'hipercor', category: 'lacteos', nutritionPer100g: { kcal: 63, proteins: 3.1, carbs: 4.7, fats: 3.5 }, defaultServingG: 250, unit: 'ml', emoji: '🥛' },
  { id: 'hip-yogur-griego', name: 'Yogur Griego Premium', brand: 'Hipercor', supermarket: 'hipercor', category: 'lacteos', nutritionPer100g: { kcal: 115, proteins: 4.0, carbs: 5.0, fats: 8.5 }, defaultServingG: 150, unit: 'g', emoji: '🫙' },
  { id: 'hip-jamon-iberico', name: 'Jamón Ibérico de Cebo', brand: 'Hipercor Gourmet', supermarket: 'hipercor', category: 'embutidos', nutritionPer100g: { kcal: 300, proteins: 28.0, carbs: 0.5, fats: 21.0 }, defaultServingG: 40, unit: 'g', emoji: '🥓' },
  { id: 'hip-salmon-ahumado', name: 'Salmón Ahumado', brand: 'Hipercor', supermarket: 'hipercor', category: 'pescados', nutritionPer100g: { kcal: 190, proteins: 22.0, carbs: 0.0, fats: 11.0 }, defaultServingG: 50, unit: 'g', emoji: '🐟' },
  { id: 'hip-pechuga-pollo', name: 'Pechuga de Pollo Ecológica', brand: 'Hipercor Bio', supermarket: 'hipercor', category: 'carnes', nutritionPer100g: { kcal: 110, proteins: 23.0, carbs: 0.0, fats: 1.6 }, defaultServingG: 150, unit: 'g', emoji: '🍗' },
  { id: 'hip-queso-manchego-curado', name: 'Queso Manchego Curado', brand: 'Hipercor', supermarket: 'hipercor', category: 'lacteos', nutritionPer100g: { kcal: 420, proteins: 28.0, carbs: 0.5, fats: 34.0 }, defaultServingG: 30, unit: 'g', emoji: '🧀' },
  { id: 'hip-aceite-oliva', name: 'AOVE Picual Premium', brand: 'Hipercor Gourmet', supermarket: 'hipercor', category: 'aceites', nutritionPer100g: { kcal: 824, proteins: 0.0, carbs: 0.0, fats: 91.6 }, defaultServingG: 10, unit: 'ml', emoji: '🫒' },

  // ═══════════════════════════════════════════
  // ██  BONPREU (Cataluña)                   ██
  // ═══════════════════════════════════════════

  { id: 'bon-leche-entera', name: 'Llet Sencera', brand: 'BonPreu', supermarket: 'bonpreu', category: 'lacteos', nutritionPer100g: { kcal: 63, proteins: 3.1, carbs: 4.7, fats: 3.5 }, defaultServingG: 250, unit: 'ml', emoji: '🥛' },
  { id: 'bon-yogur-natural', name: 'Iogurt Natural', brand: 'BonPreu', supermarket: 'bonpreu', category: 'lacteos', nutritionPer100g: { kcal: 60, proteins: 3.8, carbs: 4.5, fats: 3.0 }, defaultServingG: 125, unit: 'g', emoji: '🫙' },
  { id: 'bon-pechuga-pollo', name: 'Pit de Pollastre', brand: 'BonPreu', supermarket: 'bonpreu', category: 'carnes', nutritionPer100g: { kcal: 110, proteins: 23.0, carbs: 0.0, fats: 1.6 }, defaultServingG: 150, unit: 'g', emoji: '🍗' },
  { id: 'bon-fuet', name: 'Fuet Extra', brand: 'BonPreu', supermarket: 'bonpreu', category: 'embutidos', nutritionPer100g: { kcal: 430, proteins: 25.0, carbs: 2.0, fats: 36.0 }, defaultServingG: 30, unit: 'g', emoji: '🌭' },
  { id: 'bon-pa-pages', name: 'Pa de Pagès', brand: 'BonPreu', supermarket: 'bonpreu', category: 'panaderia', nutritionPer100g: { kcal: 260, proteins: 8.0, carbs: 50.0, fats: 1.5 }, defaultServingG: 60, unit: 'g', emoji: '🥖' },
  { id: 'bon-aceite-arbequina', name: 'Oli d\'Oliva Arbequina', brand: 'BonPreu', supermarket: 'bonpreu', category: 'aceites', nutritionPer100g: { kcal: 824, proteins: 0.0, carbs: 0.0, fats: 91.6 }, defaultServingG: 10, unit: 'ml', emoji: '🫒' },

  // ═══════════════════════════════════════════
  // ██  MAS Y MAS                            ██
  // ═══════════════════════════════════════════

  { id: 'mym-leche-semi', name: 'Leche Semidesnatada', brand: 'Mas y Mas', supermarket: 'masymas', category: 'lacteos', nutritionPer100g: { kcal: 46, proteins: 3.2, carbs: 4.8, fats: 1.6 }, defaultServingG: 250, unit: 'ml', emoji: '🥛' },
  { id: 'mym-pechuga-pollo', name: 'Pechuga de Pollo', brand: 'Mas y Mas', supermarket: 'masymas', category: 'carnes', nutritionPer100g: { kcal: 110, proteins: 23.0, carbs: 0.0, fats: 1.6 }, defaultServingG: 150, unit: 'g', emoji: '🍗' },
  { id: 'mym-jamon-serrano', name: 'Jamón Serrano', brand: 'Mas y Mas', supermarket: 'masymas', category: 'embutidos', nutritionPer100g: { kcal: 241, proteins: 31.0, carbs: 0.5, fats: 12.5 }, defaultServingG: 40, unit: 'g', emoji: '🥓' },
  { id: 'mym-arroz', name: 'Arroz Redondo', brand: 'Mas y Mas', supermarket: 'masymas', category: 'cereales', nutritionPer100g: { kcal: 354, proteins: 7.0, carbs: 78.0, fats: 0.9 }, defaultServingG: 80, unit: 'g', emoji: '🍚' },
  { id: 'mym-huevos', name: 'Huevos L', brand: 'Mas y Mas', supermarket: 'masymas', category: 'huevos', nutritionPer100g: { kcal: 155, proteins: 13.0, carbs: 1.1, fats: 11.0 }, defaultServingG: 60, unit: 'g', emoji: '🥚' },
];

// Merge all sources and deduplicate by name+brand+supermarket (keep last = most specific file wins)
const allRaw: Product[] = [
  ...baseProducts,
  ...productsExtra,
  ...productsMercadona,
  ...productsLidl,
  ...productsCarrefour,
  ...productsDia,
  ...productsEroski,
  ...productsAldi,
  ...productsAhorramas,
  ...productsSupeco,
  ...productsAlcampo,
  ...productsConsum,
  ...productsHipercor,
  ...productsBonpreu,
  ...productsMasymas,
  ...productsMarcas,
  ...productsRestaurantes,
];

// Deduplicate: first by ID, then by name+brand+supermarket
const byId = new Map<string, Product>();
for (const p of allRaw) {
  byId.set(p.id, p);
}
const byKey = new Map<string, Product>();
for (const p of byId.values()) {
  const key = `${p.name.toLowerCase().trim()}|${p.brand.toLowerCase().trim()}|${p.supermarket}`;
  byKey.set(key, p);
}
export const products: Product[] = Array.from(byKey.values());
