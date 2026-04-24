import { Product } from '@/types';

// ─── AHORRAMAS (marca blanca: Alipende) ──────────────────────────────────────

export const productsAhorramas: Product[] = [
  // Lácteos
  { id: 'ahor2-001', name: 'Leche entera', brand: 'Alipende', supermarket: 'ahorramas', category: 'lacteos', nutritionPer100g: { kcal: 63, proteins: 3.1, carbs: 4.8, fats: 3.5 }, defaultServingG: 250, unit: 'ml', emoji: '🥛' },
  { id: 'ahor2-002', name: 'Leche semidesnatada', brand: 'Alipende', supermarket: 'ahorramas', category: 'lacteos', nutritionPer100g: { kcal: 46, proteins: 3.2, carbs: 4.8, fats: 1.6 }, defaultServingG: 250, unit: 'ml', emoji: '🥛' },
  { id: 'ahor2-003', name: 'Yogur natural', brand: 'Alipende', supermarket: 'ahorramas', category: 'lacteos', nutritionPer100g: { kcal: 57, proteins: 3.9, carbs: 4.7, fats: 2.6 }, defaultServingG: 125, unit: 'g', emoji: '🫙' },
  { id: 'ahor2-004', name: 'Queso tierno', brand: 'Alipende', supermarket: 'ahorramas', category: 'lacteos', nutritionPer100g: { kcal: 305, proteins: 22, carbs: 0.5, fats: 24 }, defaultServingG: 30, unit: 'g', emoji: '🧀' },
  // Carnes
  { id: 'ahor2-005', name: 'Pechuga de pollo fileteada', brand: 'Alipende', supermarket: 'ahorramas', category: 'carnes', nutritionPer100g: { kcal: 110, proteins: 23.1, carbs: 0, fats: 1.9 }, defaultServingG: 150, unit: 'g', emoji: '🍗' },
  { id: 'ahor2-006', name: 'Carne picada mixta', brand: 'Alipende', supermarket: 'ahorramas', category: 'carnes', nutritionPer100g: { kcal: 212, proteins: 17, carbs: 0, fats: 16 }, defaultServingG: 150, unit: 'g', emoji: '🥩' },
  { id: 'ahor2-007', name: 'Chuletas de cerdo', brand: 'Alipende', supermarket: 'ahorramas', category: 'carnes', nutritionPer100g: { kcal: 190, proteins: 19, carbs: 0, fats: 12.5 }, defaultServingG: 150, unit: 'g', emoji: '🥩' },
  // Pescados
  { id: 'ahor2-008', name: 'Merluza en rodajas', brand: 'Alipende', supermarket: 'ahorramas', category: 'pescados', nutritionPer100g: { kcal: 82, proteins: 17, carbs: 0, fats: 1.3 }, defaultServingG: 200, unit: 'g', emoji: '🐟' },
  { id: 'ahor2-009', name: 'Salmón fresco', brand: 'Alipende', supermarket: 'ahorramas', category: 'pescados', nutritionPer100g: { kcal: 206, proteins: 20, carbs: 0, fats: 13.5 }, defaultServingG: 150, unit: 'g', emoji: '🐟' },
  // Embutidos
  { id: 'ahor2-010', name: 'Jamón cocido extra', brand: 'Alipende', supermarket: 'ahorramas', category: 'embutidos', nutritionPer100g: { kcal: 105, proteins: 18, carbs: 1.5, fats: 3.2 }, defaultServingG: 40, unit: 'g', emoji: '🥓' },
  { id: 'ahor2-011', name: 'Pechuga de pavo', brand: 'Alipende', supermarket: 'ahorramas', category: 'embutidos', nutritionPer100g: { kcal: 98, proteins: 17, carbs: 2, fats: 2.5 }, defaultServingG: 40, unit: 'g', emoji: '🦃' },
  { id: 'ahor2-012', name: 'Chorizo extra', brand: 'Alipende', supermarket: 'ahorramas', category: 'embutidos', nutritionPer100g: { kcal: 380, proteins: 22, carbs: 2, fats: 32 }, defaultServingG: 30, unit: 'g', emoji: '🌭' },
  // Panadería
  { id: 'ahor2-013', name: 'Pan de molde integral', brand: 'Alipende', supermarket: 'ahorramas', category: 'panaderia', nutritionPer100g: { kcal: 244, proteins: 9, carbs: 42, fats: 3.8 }, defaultServingG: 30, unit: 'g', emoji: '🍞' },
  { id: 'ahor2-014', name: 'Pan tostado', brand: 'Alipende', supermarket: 'ahorramas', category: 'panaderia', nutritionPer100g: { kcal: 390, proteins: 11, carbs: 72, fats: 6 }, defaultServingG: 10, unit: 'g', emoji: '🍞' },
  // Cereales y legumbres
  { id: 'ahor2-015', name: 'Arroz redondo', brand: 'Alipende', supermarket: 'ahorramas', category: 'cereales', nutritionPer100g: { kcal: 354, proteins: 6.7, carbs: 80, fats: 0.6 }, defaultServingG: 75, unit: 'g', emoji: '🍚' },
  { id: 'ahor2-016', name: 'Macarrones', brand: 'Alipende', supermarket: 'ahorramas', category: 'cereales', nutritionPer100g: { kcal: 352, proteins: 12.5, carbs: 72, fats: 1.5 }, defaultServingG: 80, unit: 'g', emoji: '🍝' },
  { id: 'ahor2-017', name: 'Lentejas cocidas', brand: 'Alipende', supermarket: 'ahorramas', category: 'legumbres', nutritionPer100g: { kcal: 93, proteins: 7, carbs: 13, fats: 0.5 }, defaultServingG: 250, unit: 'g', emoji: '🫘' },
  { id: 'ahor2-018', name: 'Garbanzos cocidos', brand: 'Alipende', supermarket: 'ahorramas', category: 'legumbres', nutritionPer100g: { kcal: 128, proteins: 7.2, carbs: 18, fats: 2.5 }, defaultServingG: 250, unit: 'g', emoji: '🫘' },
  // Frutas y verduras
  { id: 'ahor2-019', name: 'Plátano', brand: 'Alipende', supermarket: 'ahorramas', category: 'frutas', nutritionPer100g: { kcal: 89, proteins: 1.1, carbs: 20, fats: 0.3 }, defaultServingG: 120, unit: 'g', emoji: '🍌' },
  { id: 'ahor2-020', name: 'Manzana Golden', brand: 'Alipende', supermarket: 'ahorramas', category: 'frutas', nutritionPer100g: { kcal: 52, proteins: 0.3, carbs: 12, fats: 0.2 }, defaultServingG: 180, unit: 'g', emoji: '🍎' },
  { id: 'ahor2-021', name: 'Tomate', brand: 'Alipende', supermarket: 'ahorramas', category: 'verduras', nutritionPer100g: { kcal: 18, proteins: 0.9, carbs: 3.5, fats: 0.2 }, defaultServingG: 150, unit: 'g', emoji: '🍅' },
  { id: 'ahor2-022', name: 'Patata', brand: 'Alipende', supermarket: 'ahorramas', category: 'verduras', nutritionPer100g: { kcal: 77, proteins: 2, carbs: 17, fats: 0.1 }, defaultServingG: 200, unit: 'g', emoji: '🥔' },
  // Bebidas
  { id: 'ahor2-023', name: 'Agua mineral 1,5L', brand: 'Alipende', supermarket: 'ahorramas', category: 'bebidas', nutritionPer100g: { kcal: 0, proteins: 0, carbs: 0, fats: 0 }, defaultServingG: 250, unit: 'ml', emoji: '💧' },
  { id: 'ahor2-024', name: 'Zumo de naranja', brand: 'Alipende', supermarket: 'ahorramas', category: 'bebidas', nutritionPer100g: { kcal: 42, proteins: 0.5, carbs: 10, fats: 0.1 }, defaultServingG: 250, unit: 'ml', emoji: '🍊' },
  // Snacks y dulces
  { id: 'ahor2-025', name: 'Patatas fritas', brand: 'Alipende', supermarket: 'ahorramas', category: 'snacks', nutritionPer100g: { kcal: 536, proteins: 6, carbs: 52, fats: 34 }, defaultServingG: 30, unit: 'g', emoji: '🥔' },
  { id: 'ahor2-026', name: 'Galletas María', brand: 'Alipende', supermarket: 'ahorramas', category: 'dulces', nutritionPer100g: { kcal: 440, proteins: 7, carbs: 74, fats: 13 }, defaultServingG: 25, unit: 'g', emoji: '🍪' },
  // Conservas y salsas
  { id: 'ahor2-027', name: 'Atún en aceite de oliva', brand: 'Alipende', supermarket: 'ahorramas', category: 'conservas', nutritionPer100g: { kcal: 190, proteins: 26, carbs: 0, fats: 10 }, defaultServingG: 52, unit: 'g', emoji: '🐟' },
  { id: 'ahor2-028', name: 'Tomate frito', brand: 'Alipende', supermarket: 'ahorramas', category: 'salsas', nutritionPer100g: { kcal: 68, proteins: 1.2, carbs: 8, fats: 3.5 }, defaultServingG: 50, unit: 'g', emoji: '🍅' },
  // Congelados
  { id: 'ahor2-029', name: 'Croquetas de jamón', brand: 'Alipende', supermarket: 'ahorramas', category: 'congelados', nutritionPer100g: { kcal: 215, proteins: 6, carbs: 22, fats: 11 }, defaultServingG: 200, unit: 'g', emoji: '🧊' },
  // Aceites y huevos
  { id: 'ahor2-030', name: 'Aceite de oliva virgen extra', brand: 'Alipende', supermarket: 'ahorramas', category: 'aceites', nutritionPer100g: { kcal: 884, proteins: 0, carbs: 0, fats: 100 }, defaultServingG: 10, unit: 'ml', emoji: '🫒' },
  { id: 'ahor2-031', name: 'Huevos camperos M (6 uds)', brand: 'Alipende', supermarket: 'ahorramas', category: 'huevos', nutritionPer100g: { kcal: 143, proteins: 12.5, carbs: 0.7, fats: 10 }, defaultServingG: 60, unit: 'g', emoji: '🥚' },
];

// ─── SUPECO (marcas: Supeco, BF) ─────────────────────────────────────────────

export const productsSupeco: Product[] = [
  // Lácteos
  { id: 'sup2-001', name: 'Leche entera', brand: 'BF', supermarket: 'supeco', category: 'lacteos', nutritionPer100g: { kcal: 64, proteins: 3.1, carbs: 4.8, fats: 3.6 }, defaultServingG: 250, unit: 'ml', emoji: '🥛' },
  { id: 'sup2-002', name: 'Leche desnatada', brand: 'BF', supermarket: 'supeco', category: 'lacteos', nutritionPer100g: { kcal: 34, proteins: 3.4, carbs: 4.9, fats: 0.1 }, defaultServingG: 250, unit: 'ml', emoji: '🥛' },
  { id: 'sup2-003', name: 'Yogur natural azucarado', brand: 'Supeco', supermarket: 'supeco', category: 'lacteos', nutritionPer100g: { kcal: 72, proteins: 3.5, carbs: 10, fats: 2 }, defaultServingG: 125, unit: 'g', emoji: '🫙' },
  { id: 'sup2-004', name: 'Queso rallado mezcla', brand: 'Supeco', supermarket: 'supeco', category: 'lacteos', nutritionPer100g: { kcal: 370, proteins: 26, carbs: 1.5, fats: 29 }, defaultServingG: 20, unit: 'g', emoji: '🧀' },
  // Carnes
  { id: 'sup2-005', name: 'Pechuga de pollo', brand: 'Supeco', supermarket: 'supeco', category: 'carnes', nutritionPer100g: { kcal: 108, proteins: 22.5, carbs: 0, fats: 2 }, defaultServingG: 150, unit: 'g', emoji: '🍗' },
  { id: 'sup2-006', name: 'Carne picada de vacuno', brand: 'Supeco', supermarket: 'supeco', category: 'carnes', nutritionPer100g: { kcal: 196, proteins: 19.5, carbs: 0, fats: 13 }, defaultServingG: 150, unit: 'g', emoji: '🥩' },
  { id: 'sup2-007', name: 'Costillas de cerdo', brand: 'Supeco', supermarket: 'supeco', category: 'carnes', nutritionPer100g: { kcal: 250, proteins: 17, carbs: 0, fats: 20 }, defaultServingG: 200, unit: 'g', emoji: '🥩' },
  // Pescados
  { id: 'sup2-008', name: 'Merluza congelada', brand: 'BF', supermarket: 'supeco', category: 'pescados', nutritionPer100g: { kcal: 80, proteins: 17, carbs: 0, fats: 1.2 }, defaultServingG: 200, unit: 'g', emoji: '🐟' },
  { id: 'sup2-009', name: 'Salmón ahumado', brand: 'Supeco', supermarket: 'supeco', category: 'pescados', nutritionPer100g: { kcal: 195, proteins: 21, carbs: 0, fats: 12 }, defaultServingG: 50, unit: 'g', emoji: '🐟' },
  // Embutidos
  { id: 'sup2-010', name: 'Jamón serrano', brand: 'Supeco', supermarket: 'supeco', category: 'embutidos', nutritionPer100g: { kcal: 240, proteins: 30, carbs: 0, fats: 13 }, defaultServingG: 40, unit: 'g', emoji: '🥓' },
  { id: 'sup2-011', name: 'Pavo en lonchas', brand: 'BF', supermarket: 'supeco', category: 'embutidos', nutritionPer100g: { kcal: 95, proteins: 16, carbs: 2, fats: 2.8 }, defaultServingG: 40, unit: 'g', emoji: '🦃' },
  { id: 'sup2-012', name: 'Salchichón extra', brand: 'Supeco', supermarket: 'supeco', category: 'embutidos', nutritionPer100g: { kcal: 400, proteins: 24, carbs: 1, fats: 34 }, defaultServingG: 25, unit: 'g', emoji: '🌭' },
  // Panadería
  { id: 'sup2-013', name: 'Pan de molde blanco', brand: 'BF', supermarket: 'supeco', category: 'panaderia', nutritionPer100g: { kcal: 258, proteins: 8, carbs: 48, fats: 3.5 }, defaultServingG: 28, unit: 'g', emoji: '🍞' },
  { id: 'sup2-014', name: 'Biscotes integrales', brand: 'Supeco', supermarket: 'supeco', category: 'panaderia', nutritionPer100g: { kcal: 380, proteins: 12, carbs: 68, fats: 6.5 }, defaultServingG: 10, unit: 'g', emoji: '🍞' },
  // Cereales y legumbres
  { id: 'sup2-015', name: 'Arroz largo', brand: 'BF', supermarket: 'supeco', category: 'cereales', nutritionPer100g: { kcal: 356, proteins: 7, carbs: 79, fats: 0.7 }, defaultServingG: 75, unit: 'g', emoji: '🍚' },
  { id: 'sup2-016', name: 'Espaguetis', brand: 'BF', supermarket: 'supeco', category: 'cereales', nutritionPer100g: { kcal: 350, proteins: 12, carbs: 72, fats: 1.5 }, defaultServingG: 80, unit: 'g', emoji: '🍝' },
  { id: 'sup2-017', name: 'Lentejas secas', brand: 'Supeco', supermarket: 'supeco', category: 'legumbres', nutritionPer100g: { kcal: 340, proteins: 24, carbs: 52, fats: 1.5 }, defaultServingG: 80, unit: 'g', emoji: '🫘' },
  { id: 'sup2-018', name: 'Garbanzos secos', brand: 'BF', supermarket: 'supeco', category: 'legumbres', nutritionPer100g: { kcal: 355, proteins: 20, carbs: 50, fats: 5 }, defaultServingG: 80, unit: 'g', emoji: '🫘' },
  // Frutas y verduras
  { id: 'sup2-019', name: 'Plátano de Canarias', brand: 'Supeco', supermarket: 'supeco', category: 'frutas', nutritionPer100g: { kcal: 90, proteins: 1.1, carbs: 20, fats: 0.3 }, defaultServingG: 120, unit: 'g', emoji: '🍌' },
  { id: 'sup2-020', name: 'Naranja de zumo', brand: 'Supeco', supermarket: 'supeco', category: 'frutas', nutritionPer100g: { kcal: 42, proteins: 0.8, carbs: 8.5, fats: 0.1 }, defaultServingG: 200, unit: 'g', emoji: '🍊' },
  { id: 'sup2-021', name: 'Lechuga iceberg', brand: 'Supeco', supermarket: 'supeco', category: 'verduras', nutritionPer100g: { kcal: 14, proteins: 0.9, carbs: 2, fats: 0.1 }, defaultServingG: 100, unit: 'g', emoji: '🥬' },
  { id: 'sup2-022', name: 'Cebolla', brand: 'Supeco', supermarket: 'supeco', category: 'verduras', nutritionPer100g: { kcal: 40, proteins: 1.1, carbs: 9, fats: 0.1 }, defaultServingG: 100, unit: 'g', emoji: '🧅' },
  // Bebidas
  { id: 'sup2-023', name: 'Agua mineral', brand: 'BF', supermarket: 'supeco', category: 'bebidas', nutritionPer100g: { kcal: 0, proteins: 0, carbs: 0, fats: 0 }, defaultServingG: 250, unit: 'ml', emoji: '💧' },
  { id: 'sup2-024', name: 'Cerveza lager', brand: 'Supeco', supermarket: 'supeco', category: 'bebidas', nutritionPer100g: { kcal: 42, proteins: 0.3, carbs: 3.5, fats: 0 }, defaultServingG: 330, unit: 'ml', emoji: '🍺' },
  // Snacks, dulces, conservas
  { id: 'sup2-025', name: 'Patatas fritas onduladas', brand: 'BF', supermarket: 'supeco', category: 'snacks', nutritionPer100g: { kcal: 530, proteins: 5.5, carbs: 53, fats: 33 }, defaultServingG: 30, unit: 'g', emoji: '🥔' },
  { id: 'sup2-026', name: 'Chocolate con leche', brand: 'Supeco', supermarket: 'supeco', category: 'dulces', nutritionPer100g: { kcal: 535, proteins: 7.5, carbs: 56, fats: 31 }, defaultServingG: 25, unit: 'g', emoji: '🍫' },
  { id: 'sup2-027', name: 'Atún claro en aceite', brand: 'BF', supermarket: 'supeco', category: 'conservas', nutritionPer100g: { kcal: 185, proteins: 25, carbs: 0, fats: 10 }, defaultServingG: 52, unit: 'g', emoji: '🐟' },
  // Salsas, aceites, huevos, congelados
  { id: 'sup2-028', name: 'Mayonesa', brand: 'Supeco', supermarket: 'supeco', category: 'salsas', nutritionPer100g: { kcal: 680, proteins: 1, carbs: 2, fats: 75 }, defaultServingG: 15, unit: 'g', emoji: '🥫' },
  { id: 'sup2-029', name: 'Aceite de oliva suave', brand: 'BF', supermarket: 'supeco', category: 'aceites', nutritionPer100g: { kcal: 884, proteins: 0, carbs: 0, fats: 100 }, defaultServingG: 10, unit: 'ml', emoji: '🫒' },
  { id: 'sup2-030', name: 'Huevos L (12 uds)', brand: 'Supeco', supermarket: 'supeco', category: 'huevos', nutritionPer100g: { kcal: 140, proteins: 12, carbs: 0.7, fats: 10 }, defaultServingG: 63, unit: 'g', emoji: '🥚' },
  { id: 'sup2-031', name: 'Pizza 4 quesos congelada', brand: 'BF', supermarket: 'supeco', category: 'congelados', nutritionPer100g: { kcal: 245, proteins: 11, carbs: 28, fats: 10 }, defaultServingG: 175, unit: 'g', emoji: '🍕' },
];

// ─── ALCAMPO (marcas: Auchan, Auchan Bio) ────────────────────────────────────

export const productsAlcampo: Product[] = [
  // Lácteos
  { id: 'alc2-001', name: 'Leche entera', brand: 'Auchan', supermarket: 'alcampo', category: 'lacteos', nutritionPer100g: { kcal: 64, proteins: 3.2, carbs: 4.7, fats: 3.6 }, defaultServingG: 250, unit: 'ml', emoji: '🥛' },
  { id: 'alc2-002', name: 'Leche semidesnatada', brand: 'Auchan', supermarket: 'alcampo', category: 'lacteos', nutritionPer100g: { kcal: 46, proteins: 3.2, carbs: 4.8, fats: 1.5 }, defaultServingG: 250, unit: 'ml', emoji: '🥛' },
  { id: 'alc2-003', name: 'Yogur natural ecológico', brand: 'Auchan Bio', supermarket: 'alcampo', category: 'lacteos', nutritionPer100g: { kcal: 60, proteins: 4, carbs: 4.5, fats: 2.8 }, defaultServingG: 125, unit: 'g', emoji: '🫙' },
  { id: 'alc2-004', name: 'Queso en lonchas light', brand: 'Auchan', supermarket: 'alcampo', category: 'lacteos', nutritionPer100g: { kcal: 240, proteins: 28, carbs: 3, fats: 13 }, defaultServingG: 20, unit: 'g', emoji: '🧀' },
  { id: 'alc2-005', name: 'Queso fresco batido 0%', brand: 'Auchan', supermarket: 'alcampo', category: 'lacteos', nutritionPer100g: { kcal: 48, proteins: 8, carbs: 3.5, fats: 0.2 }, defaultServingG: 125, unit: 'g', emoji: '🧀' },
  // Carnes
  { id: 'alc2-006', name: 'Pechuga de pollo', brand: 'Auchan', supermarket: 'alcampo', category: 'carnes', nutritionPer100g: { kcal: 112, proteins: 23, carbs: 0, fats: 2 }, defaultServingG: 150, unit: 'g', emoji: '🍗' },
  { id: 'alc2-007', name: 'Solomillo de cerdo', brand: 'Auchan', supermarket: 'alcampo', category: 'carnes', nutritionPer100g: { kcal: 143, proteins: 21, carbs: 0, fats: 6.5 }, defaultServingG: 150, unit: 'g', emoji: '🥩' },
  { id: 'alc2-008', name: 'Ternera para guisar', brand: 'Auchan', supermarket: 'alcampo', category: 'carnes', nutritionPer100g: { kcal: 155, proteins: 20, carbs: 0, fats: 8 }, defaultServingG: 200, unit: 'g', emoji: '🥩' },
  // Pescados
  { id: 'alc2-009', name: 'Salmón noruego', brand: 'Auchan', supermarket: 'alcampo', category: 'pescados', nutritionPer100g: { kcal: 208, proteins: 20, carbs: 0, fats: 14 }, defaultServingG: 150, unit: 'g', emoji: '🐟' },
  { id: 'alc2-010', name: 'Merluza del Cabo', brand: 'Auchan', supermarket: 'alcampo', category: 'pescados', nutritionPer100g: { kcal: 78, proteins: 17, carbs: 0, fats: 1 }, defaultServingG: 200, unit: 'g', emoji: '🐟' },
  // Embutidos
  { id: 'alc2-011', name: 'Jamón cocido extra', brand: 'Auchan', supermarket: 'alcampo', category: 'embutidos', nutritionPer100g: { kcal: 107, proteins: 18.5, carbs: 1, fats: 3.5 }, defaultServingG: 40, unit: 'g', emoji: '🥓' },
  { id: 'alc2-012', name: 'Pechuga de pavo', brand: 'Auchan', supermarket: 'alcampo', category: 'embutidos', nutritionPer100g: { kcal: 96, proteins: 16.5, carbs: 2, fats: 2.5 }, defaultServingG: 40, unit: 'g', emoji: '🦃' },
  { id: 'alc2-013', name: 'Chorizo sarta dulce', brand: 'Auchan', supermarket: 'alcampo', category: 'embutidos', nutritionPer100g: { kcal: 375, proteins: 21, carbs: 2, fats: 31 }, defaultServingG: 30, unit: 'g', emoji: '🌭' },
  // Panadería
  { id: 'alc2-014', name: 'Pan de molde', brand: 'Auchan', supermarket: 'alcampo', category: 'panaderia', nutritionPer100g: { kcal: 260, proteins: 8.5, carbs: 48, fats: 3.8 }, defaultServingG: 28, unit: 'g', emoji: '🍞' },
  { id: 'alc2-015', name: 'Pan integral ecológico', brand: 'Auchan Bio', supermarket: 'alcampo', category: 'panaderia', nutritionPer100g: { kcal: 242, proteins: 10, carbs: 40, fats: 3.5 }, defaultServingG: 30, unit: 'g', emoji: '🍞' },
  // Cereales y legumbres
  { id: 'alc2-016', name: 'Arroz basmati', brand: 'Auchan', supermarket: 'alcampo', category: 'cereales', nutritionPer100g: { kcal: 352, proteins: 7, carbs: 78, fats: 0.6 }, defaultServingG: 75, unit: 'g', emoji: '🍚' },
  { id: 'alc2-017', name: 'Pasta fusilli', brand: 'Auchan', supermarket: 'alcampo', category: 'cereales', nutritionPer100g: { kcal: 351, proteins: 12, carbs: 72, fats: 1.5 }, defaultServingG: 80, unit: 'g', emoji: '🍝' },
  { id: 'alc2-018', name: 'Copos de avena', brand: 'Auchan Bio', supermarket: 'alcampo', category: 'cereales', nutritionPer100g: { kcal: 367, proteins: 13, carbs: 58, fats: 7 }, defaultServingG: 40, unit: 'g', emoji: '🥣' },
  { id: 'alc2-019', name: 'Lentejas pardinas', brand: 'Auchan', supermarket: 'alcampo', category: 'legumbres', nutritionPer100g: { kcal: 338, proteins: 24, carbs: 52, fats: 1.4 }, defaultServingG: 80, unit: 'g', emoji: '🫘' },
  // Frutas y verduras
  { id: 'alc2-020', name: 'Fresa', brand: 'Auchan', supermarket: 'alcampo', category: 'frutas', nutritionPer100g: { kcal: 32, proteins: 0.7, carbs: 6, fats: 0.3 }, defaultServingG: 150, unit: 'g', emoji: '🍓' },
  { id: 'alc2-021', name: 'Zanahoria', brand: 'Auchan', supermarket: 'alcampo', category: 'verduras', nutritionPer100g: { kcal: 41, proteins: 0.9, carbs: 7.5, fats: 0.2 }, defaultServingG: 100, unit: 'g', emoji: '🥕' },
  { id: 'alc2-022', name: 'Patata', brand: 'Auchan', supermarket: 'alcampo', category: 'verduras', nutritionPer100g: { kcal: 77, proteins: 2, carbs: 17, fats: 0.1 }, defaultServingG: 200, unit: 'g', emoji: '🥔' },
  // Bebidas
  { id: 'alc2-023', name: 'Zumo de naranja exprimido', brand: 'Auchan', supermarket: 'alcampo', category: 'bebidas', nutritionPer100g: { kcal: 43, proteins: 0.6, carbs: 10, fats: 0.1 }, defaultServingG: 250, unit: 'ml', emoji: '🍊' },
  { id: 'alc2-024', name: 'Cerveza rubia', brand: 'Auchan', supermarket: 'alcampo', category: 'bebidas', nutritionPer100g: { kcal: 43, proteins: 0.3, carbs: 3.6, fats: 0 }, defaultServingG: 330, unit: 'ml', emoji: '🍺' },
  // Snacks, dulces, conservas
  { id: 'alc2-025', name: 'Almendras tostadas', brand: 'Auchan', supermarket: 'alcampo', category: 'snacks', nutritionPer100g: { kcal: 598, proteins: 21, carbs: 10, fats: 52 }, defaultServingG: 30, unit: 'g', emoji: '🥜' },
  { id: 'alc2-026', name: 'Galletas digestive', brand: 'Auchan', supermarket: 'alcampo', category: 'dulces', nutritionPer100g: { kcal: 468, proteins: 7, carbs: 65, fats: 20 }, defaultServingG: 15, unit: 'g', emoji: '🍪' },
  { id: 'alc2-027', name: 'Atún en aceite de girasol', brand: 'Auchan', supermarket: 'alcampo', category: 'conservas', nutritionPer100g: { kcal: 190, proteins: 25, carbs: 0, fats: 10 }, defaultServingG: 52, unit: 'g', emoji: '🐟' },
  { id: 'alc2-028', name: 'Tomate triturado', brand: 'Auchan', supermarket: 'alcampo', category: 'conservas', nutritionPer100g: { kcal: 26, proteins: 1, carbs: 4, fats: 0.2 }, defaultServingG: 100, unit: 'g', emoji: '🍅' },
  // Salsas, aceites, huevos, congelados
  { id: 'alc2-029', name: 'Ketchup', brand: 'Auchan', supermarket: 'alcampo', category: 'salsas', nutritionPer100g: { kcal: 104, proteins: 1.2, carbs: 24, fats: 0.2 }, defaultServingG: 15, unit: 'g', emoji: '🥫' },
  { id: 'alc2-030', name: 'Aceite de oliva virgen extra', brand: 'Auchan', supermarket: 'alcampo', category: 'aceites', nutritionPer100g: { kcal: 884, proteins: 0, carbs: 0, fats: 100 }, defaultServingG: 10, unit: 'ml', emoji: '🫒' },
  { id: 'alc2-031', name: 'Huevos camperos L (6 uds)', brand: 'Auchan', supermarket: 'alcampo', category: 'huevos', nutritionPer100g: { kcal: 143, proteins: 12.5, carbs: 0.7, fats: 10 }, defaultServingG: 63, unit: 'g', emoji: '🥚' },
  { id: 'alc2-032', name: 'Croquetas de bacalao', brand: 'Auchan', supermarket: 'alcampo', category: 'congelados', nutritionPer100g: { kcal: 210, proteins: 7, carbs: 23, fats: 10 }, defaultServingG: 200, unit: 'g', emoji: '🧊' },
];

// ─── CONSUM (marcas: Consum, Consum Eco) ─────────────────────────────────────

export const productsConsum: Product[] = [
  // Lácteos
  { id: 'con2-001', name: 'Leche entera', brand: 'Consum', supermarket: 'consum', category: 'lacteos', nutritionPer100g: { kcal: 63, proteins: 3.1, carbs: 4.8, fats: 3.5 }, defaultServingG: 250, unit: 'ml', emoji: '🥛' },
  { id: 'con2-002', name: 'Leche semidesnatada', brand: 'Consum', supermarket: 'consum', category: 'lacteos', nutritionPer100g: { kcal: 46, proteins: 3.2, carbs: 4.7, fats: 1.6 }, defaultServingG: 250, unit: 'ml', emoji: '🥛' },
  { id: 'con2-003', name: 'Yogur natural ecológico', brand: 'Consum Eco', supermarket: 'consum', category: 'lacteos', nutritionPer100g: { kcal: 62, proteins: 3.8, carbs: 4.8, fats: 3 }, defaultServingG: 125, unit: 'g', emoji: '🫙' },
  { id: 'con2-004', name: 'Queso semicurado', brand: 'Consum', supermarket: 'consum', category: 'lacteos', nutritionPer100g: { kcal: 370, proteins: 25, carbs: 0.5, fats: 30 }, defaultServingG: 30, unit: 'g', emoji: '🧀' },
  // Carnes
  { id: 'con2-005', name: 'Pechuga de pollo', brand: 'Consum', supermarket: 'consum', category: 'carnes', nutritionPer100g: { kcal: 110, proteins: 23, carbs: 0, fats: 1.8 }, defaultServingG: 150, unit: 'g', emoji: '🍗' },
  { id: 'con2-006', name: 'Carne picada de ternera', brand: 'Consum', supermarket: 'consum', category: 'carnes', nutritionPer100g: { kcal: 176, proteins: 20, carbs: 0, fats: 10.5 }, defaultServingG: 150, unit: 'g', emoji: '🥩' },
  { id: 'con2-007', name: 'Lomo de cerdo', brand: 'Consum', supermarket: 'consum', category: 'carnes', nutritionPer100g: { kcal: 148, proteins: 21.5, carbs: 0, fats: 7 }, defaultServingG: 150, unit: 'g', emoji: '🥩' },
  // Pescados
  { id: 'con2-008', name: 'Merluza fresca', brand: 'Consum', supermarket: 'consum', category: 'pescados', nutritionPer100g: { kcal: 82, proteins: 17, carbs: 0, fats: 1.3 }, defaultServingG: 200, unit: 'g', emoji: '🐟' },
  { id: 'con2-009', name: 'Salmón fresco', brand: 'Consum', supermarket: 'consum', category: 'pescados', nutritionPer100g: { kcal: 206, proteins: 20, carbs: 0, fats: 13.5 }, defaultServingG: 150, unit: 'g', emoji: '🐟' },
  // Embutidos
  { id: 'con2-010', name: 'Jamón cocido', brand: 'Consum', supermarket: 'consum', category: 'embutidos', nutritionPer100g: { kcal: 105, proteins: 18, carbs: 1.5, fats: 3.2 }, defaultServingG: 40, unit: 'g', emoji: '🥓' },
  { id: 'con2-011', name: 'Pechuga de pavo braseada', brand: 'Consum', supermarket: 'consum', category: 'embutidos', nutritionPer100g: { kcal: 100, proteins: 17.5, carbs: 1.5, fats: 2.8 }, defaultServingG: 40, unit: 'g', emoji: '🦃' },
  { id: 'con2-012', name: 'Chorizo ibérico', brand: 'Consum', supermarket: 'consum', category: 'embutidos', nutritionPer100g: { kcal: 385, proteins: 23, carbs: 2, fats: 32 }, defaultServingG: 30, unit: 'g', emoji: '🌭' },
  // Panadería
  { id: 'con2-013', name: 'Pan de molde blanco', brand: 'Consum', supermarket: 'consum', category: 'panaderia', nutritionPer100g: { kcal: 255, proteins: 8.5, carbs: 47, fats: 3.5 }, defaultServingG: 28, unit: 'g', emoji: '🍞' },
  { id: 'con2-014', name: 'Tostadas integrales', brand: 'Consum', supermarket: 'consum', category: 'panaderia', nutritionPer100g: { kcal: 385, proteins: 12, carbs: 66, fats: 7 }, defaultServingG: 10, unit: 'g', emoji: '🍞' },
  // Cereales y legumbres
  { id: 'con2-015', name: 'Arroz redondo', brand: 'Consum', supermarket: 'consum', category: 'cereales', nutritionPer100g: { kcal: 354, proteins: 6.7, carbs: 80, fats: 0.6 }, defaultServingG: 75, unit: 'g', emoji: '🍚' },
  { id: 'con2-016', name: 'Macarrones', brand: 'Consum', supermarket: 'consum', category: 'cereales', nutritionPer100g: { kcal: 351, proteins: 12.5, carbs: 71, fats: 1.5 }, defaultServingG: 80, unit: 'g', emoji: '🍝' },
  { id: 'con2-017', name: 'Avena integral ecológica', brand: 'Consum Eco', supermarket: 'consum', category: 'cereales', nutritionPer100g: { kcal: 368, proteins: 13.5, carbs: 58, fats: 7 }, defaultServingG: 40, unit: 'g', emoji: '🥣' },
  { id: 'con2-018', name: 'Lentejas cocidas', brand: 'Consum', supermarket: 'consum', category: 'legumbres', nutritionPer100g: { kcal: 92, proteins: 7, carbs: 13, fats: 0.4 }, defaultServingG: 250, unit: 'g', emoji: '🫘' },
  { id: 'con2-019', name: 'Garbanzos cocidos', brand: 'Consum', supermarket: 'consum', category: 'legumbres', nutritionPer100g: { kcal: 130, proteins: 7.5, carbs: 18, fats: 2.6 }, defaultServingG: 250, unit: 'g', emoji: '🫘' },
  // Frutas y verduras
  { id: 'con2-020', name: 'Manzana Fuji', brand: 'Consum', supermarket: 'consum', category: 'frutas', nutritionPer100g: { kcal: 52, proteins: 0.3, carbs: 12, fats: 0.2 }, defaultServingG: 180, unit: 'g', emoji: '🍎' },
  { id: 'con2-021', name: 'Naranja de Valencia', brand: 'Consum', supermarket: 'consum', category: 'frutas', nutritionPer100g: { kcal: 43, proteins: 0.8, carbs: 8.5, fats: 0.1 }, defaultServingG: 200, unit: 'g', emoji: '🍊' },
  { id: 'con2-022', name: 'Tomate ensalada', brand: 'Consum', supermarket: 'consum', category: 'verduras', nutritionPer100g: { kcal: 18, proteins: 0.9, carbs: 3.5, fats: 0.2 }, defaultServingG: 150, unit: 'g', emoji: '🍅' },
  { id: 'con2-023', name: 'Lechuga romana', brand: 'Consum', supermarket: 'consum', category: 'verduras', nutritionPer100g: { kcal: 15, proteins: 1.2, carbs: 1.7, fats: 0.2 }, defaultServingG: 100, unit: 'g', emoji: '🥬' },
  // Bebidas
  { id: 'con2-024', name: 'Agua mineral natural', brand: 'Consum', supermarket: 'consum', category: 'bebidas', nutritionPer100g: { kcal: 0, proteins: 0, carbs: 0, fats: 0 }, defaultServingG: 250, unit: 'ml', emoji: '💧' },
  { id: 'con2-025', name: 'Zumo de melocotón', brand: 'Consum', supermarket: 'consum', category: 'bebidas', nutritionPer100g: { kcal: 44, proteins: 0.3, carbs: 10.5, fats: 0.1 }, defaultServingG: 250, unit: 'ml', emoji: '🍑' },
  // Snacks, dulces, conservas, salsas
  { id: 'con2-026', name: 'Mix frutos secos', brand: 'Consum', supermarket: 'consum', category: 'snacks', nutritionPer100g: { kcal: 580, proteins: 18, carbs: 15, fats: 50 }, defaultServingG: 30, unit: 'g', emoji: '🥜' },
  { id: 'con2-027', name: 'Galletas de chocolate', brand: 'Consum', supermarket: 'consum', category: 'dulces', nutritionPer100g: { kcal: 490, proteins: 6, carbs: 62, fats: 24 }, defaultServingG: 25, unit: 'g', emoji: '🍪' },
  { id: 'con2-028', name: 'Atún claro en aceite de oliva', brand: 'Consum', supermarket: 'consum', category: 'conservas', nutritionPer100g: { kcal: 192, proteins: 26, carbs: 0, fats: 10 }, defaultServingG: 52, unit: 'g', emoji: '🐟' },
  { id: 'con2-029', name: 'Tomate frito casero', brand: 'Consum', supermarket: 'consum', category: 'salsas', nutritionPer100g: { kcal: 65, proteins: 1.2, carbs: 7.5, fats: 3.5 }, defaultServingG: 50, unit: 'g', emoji: '🍅' },
  // Aceites, huevos, congelados
  { id: 'con2-030', name: 'Aceite de oliva virgen extra', brand: 'Consum', supermarket: 'consum', category: 'aceites', nutritionPer100g: { kcal: 884, proteins: 0, carbs: 0, fats: 100 }, defaultServingG: 10, unit: 'ml', emoji: '🫒' },
  { id: 'con2-031', name: 'Huevos frescos L (6 uds)', brand: 'Consum', supermarket: 'consum', category: 'huevos', nutritionPer100g: { kcal: 143, proteins: 12.5, carbs: 0.7, fats: 10 }, defaultServingG: 63, unit: 'g', emoji: '🥚' },
  { id: 'con2-032', name: 'Pizza margarita congelada', brand: 'Consum', supermarket: 'consum', category: 'congelados', nutritionPer100g: { kcal: 230, proteins: 10, carbs: 30, fats: 8 }, defaultServingG: 175, unit: 'g', emoji: '🍕' },
];

// ─── HIPERCOR (marcas: Hipercor, El Corte Inglés, Aliada) ────────────────────

export const productsHipercor: Product[] = [
  // Lácteos
  { id: 'hip2-001', name: 'Leche entera', brand: 'Aliada', supermarket: 'hipercor', category: 'lacteos', nutritionPer100g: { kcal: 63, proteins: 3.1, carbs: 4.8, fats: 3.5 }, defaultServingG: 250, unit: 'ml', emoji: '🥛' },
  { id: 'hip2-002', name: 'Leche semidesnatada', brand: 'Aliada', supermarket: 'hipercor', category: 'lacteos', nutritionPer100g: { kcal: 46, proteins: 3.2, carbs: 4.7, fats: 1.6 }, defaultServingG: 250, unit: 'ml', emoji: '🥛' },
  { id: 'hip2-003', name: 'Yogur griego natural', brand: 'El Corte Inglés', supermarket: 'hipercor', category: 'lacteos', nutritionPer100g: { kcal: 115, proteins: 4, carbs: 5, fats: 9 }, defaultServingG: 125, unit: 'g', emoji: '🫙' },
  { id: 'hip2-004', name: 'Queso manchego curado', brand: 'Hipercor', supermarket: 'hipercor', category: 'lacteos', nutritionPer100g: { kcal: 410, proteins: 28, carbs: 0.5, fats: 33 }, defaultServingG: 30, unit: 'g', emoji: '🧀' },
  { id: 'hip2-005', name: 'Queso de cabra en rulo', brand: 'El Corte Inglés', supermarket: 'hipercor', category: 'lacteos', nutritionPer100g: { kcal: 280, proteins: 20, carbs: 1, fats: 22 }, defaultServingG: 30, unit: 'g', emoji: '🧀' },
  // Carnes
  { id: 'hip2-006', name: 'Pechuga de pollo campero', brand: 'Hipercor', supermarket: 'hipercor', category: 'carnes', nutritionPer100g: { kcal: 112, proteins: 23, carbs: 0, fats: 2 }, defaultServingG: 150, unit: 'g', emoji: '🍗' },
  { id: 'hip2-007', name: 'Entrecot de ternera', brand: 'Hipercor', supermarket: 'hipercor', category: 'carnes', nutritionPer100g: { kcal: 210, proteins: 20, carbs: 0, fats: 14 }, defaultServingG: 200, unit: 'g', emoji: '🥩' },
  { id: 'hip2-008', name: 'Solomillo de cerdo ibérico', brand: 'El Corte Inglés', supermarket: 'hipercor', category: 'carnes', nutritionPer100g: { kcal: 155, proteins: 21.5, carbs: 0, fats: 7.5 }, defaultServingG: 150, unit: 'g', emoji: '🥩' },
  // Pescados
  { id: 'hip2-009', name: 'Salmón atlántico', brand: 'Hipercor', supermarket: 'hipercor', category: 'pescados', nutritionPer100g: { kcal: 206, proteins: 20, carbs: 0, fats: 13.5 }, defaultServingG: 150, unit: 'g', emoji: '🐟' },
  { id: 'hip2-010', name: 'Atún rojo fresco', brand: 'Hipercor', supermarket: 'hipercor', category: 'pescados', nutritionPer100g: { kcal: 130, proteins: 28, carbs: 0, fats: 1.5 }, defaultServingG: 150, unit: 'g', emoji: '🐟' },
  // Embutidos
  { id: 'hip2-011', name: 'Jamón ibérico de cebo', brand: 'El Corte Inglés', supermarket: 'hipercor', category: 'embutidos', nutritionPer100g: { kcal: 280, proteins: 32, carbs: 0, fats: 17 }, defaultServingG: 40, unit: 'g', emoji: '🥓' },
  { id: 'hip2-012', name: 'Pavo en lonchas', brand: 'Aliada', supermarket: 'hipercor', category: 'embutidos', nutritionPer100g: { kcal: 95, proteins: 16, carbs: 2, fats: 2.5 }, defaultServingG: 40, unit: 'g', emoji: '🦃' },
  { id: 'hip2-013', name: 'Chorizo de León', brand: 'El Corte Inglés', supermarket: 'hipercor', category: 'embutidos', nutritionPer100g: { kcal: 390, proteins: 23, carbs: 2, fats: 33 }, defaultServingG: 30, unit: 'g', emoji: '🌭' },
  // Panadería
  { id: 'hip2-014', name: 'Pan de molde artesano', brand: 'El Corte Inglés', supermarket: 'hipercor', category: 'panaderia', nutritionPer100g: { kcal: 265, proteins: 9, carbs: 48, fats: 4 }, defaultServingG: 30, unit: 'g', emoji: '🍞' },
  { id: 'hip2-015', name: 'Pan tostado integral', brand: 'Aliada', supermarket: 'hipercor', category: 'panaderia', nutritionPer100g: { kcal: 378, proteins: 12, carbs: 65, fats: 7 }, defaultServingG: 10, unit: 'g', emoji: '🍞' },
  // Cereales y legumbres
  { id: 'hip2-016', name: 'Arroz bomba', brand: 'Hipercor', supermarket: 'hipercor', category: 'cereales', nutritionPer100g: { kcal: 347, proteins: 7, carbs: 77, fats: 0.5 }, defaultServingG: 75, unit: 'g', emoji: '🍚' },
  { id: 'hip2-017', name: 'Espaguetis', brand: 'Aliada', supermarket: 'hipercor', category: 'cereales', nutritionPer100g: { kcal: 350, proteins: 12, carbs: 72, fats: 1.5 }, defaultServingG: 80, unit: 'g', emoji: '🍝' },
  { id: 'hip2-018', name: 'Lentejas pardinas', brand: 'Aliada', supermarket: 'hipercor', category: 'legumbres', nutritionPer100g: { kcal: 336, proteins: 24, carbs: 52, fats: 1.4 }, defaultServingG: 80, unit: 'g', emoji: '🫘' },
  { id: 'hip2-019', name: 'Garbanzos pedrosillanos', brand: 'El Corte Inglés', supermarket: 'hipercor', category: 'legumbres', nutritionPer100g: { kcal: 353, proteins: 20, carbs: 50, fats: 5 }, defaultServingG: 80, unit: 'g', emoji: '🫘' },
  // Frutas y verduras
  { id: 'hip2-020', name: 'Plátano de Canarias', brand: 'Hipercor', supermarket: 'hipercor', category: 'frutas', nutritionPer100g: { kcal: 89, proteins: 1.1, carbs: 20, fats: 0.3 }, defaultServingG: 120, unit: 'g', emoji: '🍌' },
  { id: 'hip2-021', name: 'Fresa de Huelva', brand: 'Hipercor', supermarket: 'hipercor', category: 'frutas', nutritionPer100g: { kcal: 32, proteins: 0.7, carbs: 6, fats: 0.3 }, defaultServingG: 150, unit: 'g', emoji: '🍓' },
  { id: 'hip2-022', name: 'Tomate Raf', brand: 'Hipercor', supermarket: 'hipercor', category: 'verduras', nutritionPer100g: { kcal: 20, proteins: 1, carbs: 3.5, fats: 0.2 }, defaultServingG: 150, unit: 'g', emoji: '🍅' },
  { id: 'hip2-023', name: 'Patata nueva', brand: 'Hipercor', supermarket: 'hipercor', category: 'verduras', nutritionPer100g: { kcal: 70, proteins: 2, carbs: 15.5, fats: 0.1 }, defaultServingG: 200, unit: 'g', emoji: '🥔' },
  // Bebidas
  { id: 'hip2-024', name: 'Agua mineral', brand: 'Aliada', supermarket: 'hipercor', category: 'bebidas', nutritionPer100g: { kcal: 0, proteins: 0, carbs: 0, fats: 0 }, defaultServingG: 250, unit: 'ml', emoji: '💧' },
  { id: 'hip2-025', name: 'Zumo de manzana', brand: 'El Corte Inglés', supermarket: 'hipercor', category: 'bebidas', nutritionPer100g: { kcal: 46, proteins: 0.1, carbs: 11, fats: 0.1 }, defaultServingG: 250, unit: 'ml', emoji: '🍏' },
  // Snacks, dulces, conservas, salsas
  { id: 'hip2-026', name: 'Patatas fritas gourmet', brand: 'El Corte Inglés', supermarket: 'hipercor', category: 'snacks', nutritionPer100g: { kcal: 530, proteins: 6, carbs: 52, fats: 33 }, defaultServingG: 30, unit: 'g', emoji: '🥔' },
  { id: 'hip2-027', name: 'Chocolate negro 70%', brand: 'Hipercor', supermarket: 'hipercor', category: 'dulces', nutritionPer100g: { kcal: 545, proteins: 8, carbs: 38, fats: 40 }, defaultServingG: 25, unit: 'g', emoji: '🍫' },
  { id: 'hip2-028', name: 'Atún claro en aceite de oliva', brand: 'Aliada', supermarket: 'hipercor', category: 'conservas', nutritionPer100g: { kcal: 188, proteins: 25, carbs: 0, fats: 10 }, defaultServingG: 52, unit: 'g', emoji: '🐟' },
  { id: 'hip2-029', name: 'Mayonesa', brand: 'Aliada', supermarket: 'hipercor', category: 'salsas', nutritionPer100g: { kcal: 685, proteins: 1, carbs: 2, fats: 75 }, defaultServingG: 15, unit: 'g', emoji: '🥫' },
  // Aceites, huevos, congelados
  { id: 'hip2-030', name: 'Aceite de oliva virgen extra', brand: 'Hipercor', supermarket: 'hipercor', category: 'aceites', nutritionPer100g: { kcal: 884, proteins: 0, carbs: 0, fats: 100 }, defaultServingG: 10, unit: 'ml', emoji: '🫒' },
  { id: 'hip2-031', name: 'Huevos camperos L (6 uds)', brand: 'El Corte Inglés', supermarket: 'hipercor', category: 'huevos', nutritionPer100g: { kcal: 143, proteins: 12.5, carbs: 0.7, fats: 10 }, defaultServingG: 63, unit: 'g', emoji: '🥚' },
  { id: 'hip2-032', name: 'Croquetas de jamón ibérico', brand: 'Hipercor', supermarket: 'hipercor', category: 'congelados', nutritionPer100g: { kcal: 220, proteins: 7, carbs: 22, fats: 11.5 }, defaultServingG: 200, unit: 'g', emoji: '🧊' },
];

// ─── BONPREU (marcas: BonPreu, Bonpreu Eco) ─────────────────────────────────

export const productsBonpreu: Product[] = [
  // Lácteos
  { id: 'bon2-001', name: 'Llet sencera', brand: 'BonPreu', supermarket: 'bonpreu', category: 'lacteos', nutritionPer100g: { kcal: 64, proteins: 3.2, carbs: 4.7, fats: 3.6 }, defaultServingG: 250, unit: 'ml', emoji: '🥛' },
  { id: 'bon2-002', name: 'Llet semidesnatada', brand: 'BonPreu', supermarket: 'bonpreu', category: 'lacteos', nutritionPer100g: { kcal: 46, proteins: 3.2, carbs: 4.8, fats: 1.5 }, defaultServingG: 250, unit: 'ml', emoji: '🥛' },
  { id: 'bon2-003', name: 'Iogurt natural ecològic', brand: 'Bonpreu Eco', supermarket: 'bonpreu', category: 'lacteos', nutritionPer100g: { kcal: 60, proteins: 4, carbs: 4.5, fats: 2.8 }, defaultServingG: 125, unit: 'g', emoji: '🫙' },
  { id: 'bon2-004', name: 'Formatge tendre', brand: 'BonPreu', supermarket: 'bonpreu', category: 'lacteos', nutritionPer100g: { kcal: 300, proteins: 22, carbs: 0.5, fats: 23 }, defaultServingG: 30, unit: 'g', emoji: '🧀' },
  // Carnes
  { id: 'bon2-005', name: 'Pit de pollastre', brand: 'BonPreu', supermarket: 'bonpreu', category: 'carnes', nutritionPer100g: { kcal: 110, proteins: 23, carbs: 0, fats: 1.9 }, defaultServingG: 150, unit: 'g', emoji: '🍗' },
  { id: 'bon2-006', name: 'Carn picada de vedella', brand: 'BonPreu', supermarket: 'bonpreu', category: 'carnes', nutritionPer100g: { kcal: 175, proteins: 20, carbs: 0, fats: 10.5 }, defaultServingG: 150, unit: 'g', emoji: '🥩' },
  { id: 'bon2-007', name: 'Llom de porc', brand: 'BonPreu', supermarket: 'bonpreu', category: 'carnes', nutritionPer100g: { kcal: 148, proteins: 21.5, carbs: 0, fats: 7 }, defaultServingG: 150, unit: 'g', emoji: '🥩' },
  // Pescados
  { id: 'bon2-008', name: 'Salmó fresc', brand: 'BonPreu', supermarket: 'bonpreu', category: 'pescados', nutritionPer100g: { kcal: 206, proteins: 20, carbs: 0, fats: 13.5 }, defaultServingG: 150, unit: 'g', emoji: '🐟' },
  { id: 'bon2-009', name: 'Lluç en rodanxes', brand: 'BonPreu', supermarket: 'bonpreu', category: 'pescados', nutritionPer100g: { kcal: 80, proteins: 17, carbs: 0, fats: 1.2 }, defaultServingG: 200, unit: 'g', emoji: '🐟' },
  // Embutidos
  { id: 'bon2-010', name: 'Pernil dolç extra', brand: 'BonPreu', supermarket: 'bonpreu', category: 'embutidos', nutritionPer100g: { kcal: 105, proteins: 18, carbs: 1.5, fats: 3.2 }, defaultServingG: 40, unit: 'g', emoji: '🥓' },
  { id: 'bon2-011', name: 'Pit de gall dindi', brand: 'BonPreu', supermarket: 'bonpreu', category: 'embutidos', nutritionPer100g: { kcal: 96, proteins: 16.5, carbs: 2, fats: 2.5 }, defaultServingG: 40, unit: 'g', emoji: '🦃' },
  { id: 'bon2-012', name: 'Fuet català', brand: 'BonPreu', supermarket: 'bonpreu', category: 'embutidos', nutritionPer100g: { kcal: 420, proteins: 25, carbs: 1, fats: 36 }, defaultServingG: 25, unit: 'g', emoji: '🌭' },
  // Panadería
  { id: 'bon2-013', name: 'Pa de motlle integral', brand: 'BonPreu', supermarket: 'bonpreu', category: 'panaderia', nutritionPer100g: { kcal: 245, proteins: 9.5, carbs: 42, fats: 3.8 }, defaultServingG: 30, unit: 'g', emoji: '🍞' },
  { id: 'bon2-014', name: 'Pa torrat', brand: 'BonPreu', supermarket: 'bonpreu', category: 'panaderia', nutritionPer100g: { kcal: 388, proteins: 11, carbs: 72, fats: 5.5 }, defaultServingG: 10, unit: 'g', emoji: '🍞' },
  // Cereales y legumbres
  { id: 'bon2-015', name: 'Arròs rodó', brand: 'BonPreu', supermarket: 'bonpreu', category: 'cereales', nutritionPer100g: { kcal: 354, proteins: 6.7, carbs: 80, fats: 0.6 }, defaultServingG: 75, unit: 'g', emoji: '🍚' },
  { id: 'bon2-016', name: 'Pasta macarrons', brand: 'BonPreu', supermarket: 'bonpreu', category: 'cereales', nutritionPer100g: { kcal: 352, proteins: 12.5, carbs: 72, fats: 1.5 }, defaultServingG: 80, unit: 'g', emoji: '🍝' },
  { id: 'bon2-017', name: 'Civada ecològica', brand: 'Bonpreu Eco', supermarket: 'bonpreu', category: 'cereales', nutritionPer100g: { kcal: 367, proteins: 13, carbs: 58, fats: 7 }, defaultServingG: 40, unit: 'g', emoji: '🥣' },
  { id: 'bon2-018', name: 'Llenties cuites', brand: 'BonPreu', supermarket: 'bonpreu', category: 'legumbres', nutritionPer100g: { kcal: 93, proteins: 7, carbs: 13, fats: 0.5 }, defaultServingG: 250, unit: 'g', emoji: '🫘' },
  { id: 'bon2-019', name: 'Cigrons cuits', brand: 'BonPreu', supermarket: 'bonpreu', category: 'legumbres', nutritionPer100g: { kcal: 128, proteins: 7.2, carbs: 18, fats: 2.5 }, defaultServingG: 250, unit: 'g', emoji: '🫘' },
  // Frutas y verduras
  { id: 'bon2-020', name: 'Plàtan', brand: 'BonPreu', supermarket: 'bonpreu', category: 'frutas', nutritionPer100g: { kcal: 89, proteins: 1.1, carbs: 20, fats: 0.3 }, defaultServingG: 120, unit: 'g', emoji: '🍌' },
  { id: 'bon2-021', name: 'Poma Golden', brand: 'BonPreu', supermarket: 'bonpreu', category: 'frutas', nutritionPer100g: { kcal: 52, proteins: 0.3, carbs: 12, fats: 0.2 }, defaultServingG: 180, unit: 'g', emoji: '🍎' },
  { id: 'bon2-022', name: 'Tomàquet', brand: 'BonPreu', supermarket: 'bonpreu', category: 'verduras', nutritionPer100g: { kcal: 18, proteins: 0.9, carbs: 3.5, fats: 0.2 }, defaultServingG: 150, unit: 'g', emoji: '🍅' },
  { id: 'bon2-023', name: 'Patata', brand: 'BonPreu', supermarket: 'bonpreu', category: 'verduras', nutritionPer100g: { kcal: 77, proteins: 2, carbs: 17, fats: 0.1 }, defaultServingG: 200, unit: 'g', emoji: '🥔' },
  // Bebidas
  { id: 'bon2-024', name: 'Aigua mineral', brand: 'BonPreu', supermarket: 'bonpreu', category: 'bebidas', nutritionPer100g: { kcal: 0, proteins: 0, carbs: 0, fats: 0 }, defaultServingG: 250, unit: 'ml', emoji: '💧' },
  { id: 'bon2-025', name: 'Suc de taronja', brand: 'BonPreu', supermarket: 'bonpreu', category: 'bebidas', nutritionPer100g: { kcal: 43, proteins: 0.5, carbs: 10, fats: 0.1 }, defaultServingG: 250, unit: 'ml', emoji: '🍊' },
  // Snacks, dulces, conservas, salsas
  { id: 'bon2-026', name: 'Ametlles torrades', brand: 'BonPreu', supermarket: 'bonpreu', category: 'snacks', nutritionPer100g: { kcal: 598, proteins: 21, carbs: 10, fats: 52 }, defaultServingG: 30, unit: 'g', emoji: '🥜' },
  { id: 'bon2-027', name: 'Galetes Maria', brand: 'BonPreu', supermarket: 'bonpreu', category: 'dulces', nutritionPer100g: { kcal: 440, proteins: 7, carbs: 74, fats: 13 }, defaultServingG: 25, unit: 'g', emoji: '🍪' },
  { id: 'bon2-028', name: 'Tonyina clara en oli', brand: 'BonPreu', supermarket: 'bonpreu', category: 'conservas', nutritionPer100g: { kcal: 190, proteins: 26, carbs: 0, fats: 10 }, defaultServingG: 52, unit: 'g', emoji: '🐟' },
  { id: 'bon2-029', name: 'Kètxup', brand: 'BonPreu', supermarket: 'bonpreu', category: 'salsas', nutritionPer100g: { kcal: 104, proteins: 1.2, carbs: 24, fats: 0.2 }, defaultServingG: 15, unit: 'g', emoji: '🥫' },
  // Aceites, huevos, congelados
  { id: 'bon2-030', name: 'Oli d\'oliva verge extra', brand: 'BonPreu', supermarket: 'bonpreu', category: 'aceites', nutritionPer100g: { kcal: 884, proteins: 0, carbs: 0, fats: 100 }, defaultServingG: 10, unit: 'ml', emoji: '🫒' },
  { id: 'bon2-031', name: 'Ous frescos L (6 uds)', brand: 'BonPreu', supermarket: 'bonpreu', category: 'huevos', nutritionPer100g: { kcal: 143, proteins: 12.5, carbs: 0.7, fats: 10 }, defaultServingG: 63, unit: 'g', emoji: '🥚' },
  { id: 'bon2-032', name: 'Croquetes de pernil', brand: 'BonPreu', supermarket: 'bonpreu', category: 'congelados', nutritionPer100g: { kcal: 215, proteins: 6, carbs: 22, fats: 11 }, defaultServingG: 200, unit: 'g', emoji: '🧊' },
];

// ─── MAS Y MAS (marca: Mas y Mas) ────────────────────────────────────────────

export const productsMasymas: Product[] = [
  // Lácteos
  { id: 'mym2-001', name: 'Leche entera', brand: 'Mas y Mas', supermarket: 'masymas', category: 'lacteos', nutritionPer100g: { kcal: 63, proteins: 3.1, carbs: 4.8, fats: 3.5 }, defaultServingG: 250, unit: 'ml', emoji: '🥛' },
  { id: 'mym2-002', name: 'Leche desnatada', brand: 'Mas y Mas', supermarket: 'masymas', category: 'lacteos', nutritionPer100g: { kcal: 34, proteins: 3.4, carbs: 4.9, fats: 0.1 }, defaultServingG: 250, unit: 'ml', emoji: '🥛' },
  { id: 'mym2-003', name: 'Yogur natural', brand: 'Mas y Mas', supermarket: 'masymas', category: 'lacteos', nutritionPer100g: { kcal: 57, proteins: 3.9, carbs: 4.7, fats: 2.6 }, defaultServingG: 125, unit: 'g', emoji: '🫙' },
  { id: 'mym2-004', name: 'Queso semicurado mezcla', brand: 'Mas y Mas', supermarket: 'masymas', category: 'lacteos', nutritionPer100g: { kcal: 365, proteins: 25, carbs: 0.5, fats: 29 }, defaultServingG: 30, unit: 'g', emoji: '🧀' },
  // Carnes
  { id: 'mym2-005', name: 'Pechuga de pollo', brand: 'Mas y Mas', supermarket: 'masymas', category: 'carnes', nutritionPer100g: { kcal: 110, proteins: 23, carbs: 0, fats: 1.9 }, defaultServingG: 150, unit: 'g', emoji: '🍗' },
  { id: 'mym2-006', name: 'Carne picada mixta', brand: 'Mas y Mas', supermarket: 'masymas', category: 'carnes', nutritionPer100g: { kcal: 210, proteins: 17, carbs: 0, fats: 15.5 }, defaultServingG: 150, unit: 'g', emoji: '🥩' },
  { id: 'mym2-007', name: 'Chuletas de cerdo', brand: 'Mas y Mas', supermarket: 'masymas', category: 'carnes', nutritionPer100g: { kcal: 190, proteins: 19, carbs: 0, fats: 12.5 }, defaultServingG: 150, unit: 'g', emoji: '🥩' },
  // Pescados
  { id: 'mym2-008', name: 'Merluza fresca', brand: 'Mas y Mas', supermarket: 'masymas', category: 'pescados', nutritionPer100g: { kcal: 82, proteins: 17, carbs: 0, fats: 1.3 }, defaultServingG: 200, unit: 'g', emoji: '🐟' },
  { id: 'mym2-009', name: 'Salmón', brand: 'Mas y Mas', supermarket: 'masymas', category: 'pescados', nutritionPer100g: { kcal: 206, proteins: 20, carbs: 0, fats: 13.5 }, defaultServingG: 150, unit: 'g', emoji: '🐟' },
  // Embutidos
  { id: 'mym2-010', name: 'Jamón cocido extra', brand: 'Mas y Mas', supermarket: 'masymas', category: 'embutidos', nutritionPer100g: { kcal: 107, proteins: 18, carbs: 1.5, fats: 3.5 }, defaultServingG: 40, unit: 'g', emoji: '🥓' },
  { id: 'mym2-011', name: 'Pechuga de pavo', brand: 'Mas y Mas', supermarket: 'masymas', category: 'embutidos', nutritionPer100g: { kcal: 98, proteins: 17, carbs: 2, fats: 2.5 }, defaultServingG: 40, unit: 'g', emoji: '🦃' },
  { id: 'mym2-012', name: 'Chorizo extra', brand: 'Mas y Mas', supermarket: 'masymas', category: 'embutidos', nutritionPer100g: { kcal: 378, proteins: 22, carbs: 2, fats: 32 }, defaultServingG: 30, unit: 'g', emoji: '🌭' },
  // Panadería
  { id: 'mym2-013', name: 'Pan de molde', brand: 'Mas y Mas', supermarket: 'masymas', category: 'panaderia', nutritionPer100g: { kcal: 258, proteins: 8, carbs: 48, fats: 3.5 }, defaultServingG: 28, unit: 'g', emoji: '🍞' },
  { id: 'mym2-014', name: 'Tostadas', brand: 'Mas y Mas', supermarket: 'masymas', category: 'panaderia', nutritionPer100g: { kcal: 390, proteins: 11, carbs: 72, fats: 6 }, defaultServingG: 10, unit: 'g', emoji: '🍞' },
  // Cereales y legumbres
  { id: 'mym2-015', name: 'Arroz redondo', brand: 'Mas y Mas', supermarket: 'masymas', category: 'cereales', nutritionPer100g: { kcal: 354, proteins: 6.7, carbs: 80, fats: 0.6 }, defaultServingG: 75, unit: 'g', emoji: '🍚' },
  { id: 'mym2-016', name: 'Espaguetis', brand: 'Mas y Mas', supermarket: 'masymas', category: 'cereales', nutritionPer100g: { kcal: 350, proteins: 12, carbs: 72, fats: 1.5 }, defaultServingG: 80, unit: 'g', emoji: '🍝' },
  { id: 'mym2-017', name: 'Copos de avena', brand: 'Mas y Mas', supermarket: 'masymas', category: 'cereales', nutritionPer100g: { kcal: 367, proteins: 13, carbs: 58, fats: 7 }, defaultServingG: 40, unit: 'g', emoji: '🥣' },
  { id: 'mym2-018', name: 'Lentejas cocidas', brand: 'Mas y Mas', supermarket: 'masymas', category: 'legumbres', nutritionPer100g: { kcal: 93, proteins: 7, carbs: 13, fats: 0.5 }, defaultServingG: 250, unit: 'g', emoji: '🫘' },
  { id: 'mym2-019', name: 'Garbanzos cocidos', brand: 'Mas y Mas', supermarket: 'masymas', category: 'legumbres', nutritionPer100g: { kcal: 128, proteins: 7.2, carbs: 18, fats: 2.5 }, defaultServingG: 250, unit: 'g', emoji: '🫘' },
  // Frutas y verduras
  { id: 'mym2-020', name: 'Plátano', brand: 'Mas y Mas', supermarket: 'masymas', category: 'frutas', nutritionPer100g: { kcal: 89, proteins: 1.1, carbs: 20, fats: 0.3 }, defaultServingG: 120, unit: 'g', emoji: '🍌' },
  { id: 'mym2-021', name: 'Naranja de mesa', brand: 'Mas y Mas', supermarket: 'masymas', category: 'frutas', nutritionPer100g: { kcal: 43, proteins: 0.8, carbs: 8.5, fats: 0.1 }, defaultServingG: 200, unit: 'g', emoji: '🍊' },
  { id: 'mym2-022', name: 'Tomate', brand: 'Mas y Mas', supermarket: 'masymas', category: 'verduras', nutritionPer100g: { kcal: 18, proteins: 0.9, carbs: 3.5, fats: 0.2 }, defaultServingG: 150, unit: 'g', emoji: '🍅' },
  { id: 'mym2-023', name: 'Lechuga', brand: 'Mas y Mas', supermarket: 'masymas', category: 'verduras', nutritionPer100g: { kcal: 14, proteins: 0.9, carbs: 2, fats: 0.1 }, defaultServingG: 100, unit: 'g', emoji: '🥬' },
  { id: 'mym2-024', name: 'Cebolla', brand: 'Mas y Mas', supermarket: 'masymas', category: 'verduras', nutritionPer100g: { kcal: 40, proteins: 1.1, carbs: 9, fats: 0.1 }, defaultServingG: 100, unit: 'g', emoji: '🧅' },
  // Bebidas
  { id: 'mym2-025', name: 'Agua mineral', brand: 'Mas y Mas', supermarket: 'masymas', category: 'bebidas', nutritionPer100g: { kcal: 0, proteins: 0, carbs: 0, fats: 0 }, defaultServingG: 250, unit: 'ml', emoji: '💧' },
  { id: 'mym2-026', name: 'Zumo de naranja', brand: 'Mas y Mas', supermarket: 'masymas', category: 'bebidas', nutritionPer100g: { kcal: 42, proteins: 0.5, carbs: 10, fats: 0.1 }, defaultServingG: 250, unit: 'ml', emoji: '🍊' },
  // Snacks, dulces, conservas, salsas
  { id: 'mym2-027', name: 'Patatas fritas', brand: 'Mas y Mas', supermarket: 'masymas', category: 'snacks', nutritionPer100g: { kcal: 536, proteins: 6, carbs: 52, fats: 34 }, defaultServingG: 30, unit: 'g', emoji: '🥔' },
  { id: 'mym2-028', name: 'Chocolate con leche', brand: 'Mas y Mas', supermarket: 'masymas', category: 'dulces', nutritionPer100g: { kcal: 535, proteins: 7.5, carbs: 56, fats: 31 }, defaultServingG: 25, unit: 'g', emoji: '🍫' },
  { id: 'mym2-029', name: 'Atún en aceite de oliva', brand: 'Mas y Mas', supermarket: 'masymas', category: 'conservas', nutritionPer100g: { kcal: 190, proteins: 26, carbs: 0, fats: 10 }, defaultServingG: 52, unit: 'g', emoji: '🐟' },
  { id: 'mym2-030', name: 'Tomate frito', brand: 'Mas y Mas', supermarket: 'masymas', category: 'salsas', nutritionPer100g: { kcal: 68, proteins: 1.2, carbs: 8, fats: 3.5 }, defaultServingG: 50, unit: 'g', emoji: '🍅' },
  // Aceites, huevos, congelados
  { id: 'mym2-031', name: 'Aceite de oliva virgen extra', brand: 'Mas y Mas', supermarket: 'masymas', category: 'aceites', nutritionPer100g: { kcal: 884, proteins: 0, carbs: 0, fats: 100 }, defaultServingG: 10, unit: 'ml', emoji: '🫒' },
  { id: 'mym2-032', name: 'Huevos frescos M (6 uds)', brand: 'Mas y Mas', supermarket: 'masymas', category: 'huevos', nutritionPer100g: { kcal: 143, proteins: 12.5, carbs: 0.7, fats: 10 }, defaultServingG: 60, unit: 'g', emoji: '🥚' },
  { id: 'mym2-033', name: 'Pizza barbacoa congelada', brand: 'Mas y Mas', supermarket: 'masymas', category: 'congelados', nutritionPer100g: { kcal: 250, proteins: 11, carbs: 28, fats: 11 }, defaultServingG: 175, unit: 'g', emoji: '🍕' },
];
