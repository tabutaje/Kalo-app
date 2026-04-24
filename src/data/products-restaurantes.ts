import { Product } from '@/types';

// ═══════════════════════════════════════════════════
// Productos de RESTAURANTES Y COMIDA PARA LLEVAR
// ═══════════════════════════════════════════════════

export const productsRestaurantes: Product[] = [

  // ─── McDONALD'S ───
  { id: 'mcd-big-mac', name: 'Big Mac', brand: "McDonald's", supermarket: 'mercadona', category: 'otros', nutritionPer100g: { kcal: 247, proteins: 12.3, carbs: 20.3, fats: 13.0 }, defaultServingG: 212, unit: 'g', emoji: '🍔' },
  { id: 'mcd-mcpollo', name: 'McPollo', brand: "McDonald's", supermarket: 'mercadona', category: 'otros', nutritionPer100g: { kcal: 228, proteins: 14.0, carbs: 26.0, fats: 7.5 }, defaultServingG: 172, unit: 'g', emoji: '🍔' },
  { id: 'mcd-mcchicken', name: 'McChicken', brand: "McDonald's", supermarket: 'mercadona', category: 'otros', nutritionPer100g: { kcal: 258, proteins: 12.0, carbs: 27.0, fats: 11.0 }, defaultServingG: 160, unit: 'g', emoji: '🍔' },
  { id: 'mcd-cuarto-libra', name: 'Cuarto de Libra con Queso', brand: "McDonald's", supermarket: 'mercadona', category: 'otros', nutritionPer100g: { kcal: 273, proteins: 16.0, carbs: 24.0, fats: 11.5 }, defaultServingG: 200, unit: 'g', emoji: '🍔' },
  { id: 'mcd-mcrispy', name: 'McRoyal Bacon', brand: "McDonald's", supermarket: 'mercadona', category: 'otros', nutritionPer100g: { kcal: 283, proteins: 15.0, carbs: 25.0, fats: 13.0 }, defaultServingG: 212, unit: 'g', emoji: '🍔' },
  { id: 'mcd-mcnuggets-6', name: 'McNuggets 6 piezas', brand: "McDonald's", supermarket: 'mercadona', category: 'otros', nutritionPer100g: { kcal: 247, proteins: 14.0, carbs: 16.0, fats: 13.5 }, defaultServingG: 100, unit: 'g', emoji: '🍗' },
  { id: 'mcd-mcnuggets-9', name: 'McNuggets 9 piezas', brand: "McDonald's", supermarket: 'mercadona', category: 'otros', nutritionPer100g: { kcal: 247, proteins: 14.0, carbs: 16.0, fats: 13.5 }, defaultServingG: 150, unit: 'g', emoji: '🍗' },
  { id: 'mcd-patatas-pequenas', name: 'Patatas Fritas Pequeñas', brand: "McDonald's", supermarket: 'mercadona', category: 'otros', nutritionPer100g: { kcal: 323, proteins: 4.3, carbs: 42.1, fats: 15.5 }, defaultServingG: 70, unit: 'g', emoji: '🍟' },
  { id: 'mcd-patatas-medianas', name: 'Patatas Fritas Medianas', brand: "McDonald's", supermarket: 'mercadona', category: 'otros', nutritionPer100g: { kcal: 323, proteins: 4.3, carbs: 42.1, fats: 15.5 }, defaultServingG: 114, unit: 'g', emoji: '🍟' },
  { id: 'mcd-patatas-grandes', name: 'Patatas Fritas Grandes', brand: "McDonald's", supermarket: 'mercadona', category: 'otros', nutritionPer100g: { kcal: 323, proteins: 4.3, carbs: 42.1, fats: 15.5 }, defaultServingG: 154, unit: 'g', emoji: '🍟' },
  { id: 'mcd-mcflurry-oreo', name: 'McFlurry Oreo', brand: "McDonald's", supermarket: 'mercadona', category: 'dulces', nutritionPer100g: { kcal: 208, proteins: 4.5, carbs: 30.0, fats: 7.5 }, defaultServingG: 162, unit: 'g', emoji: '🍦' },
  { id: 'mcd-sundae-chocolate', name: 'Sundae Chocolate', brand: "McDonald's", supermarket: 'mercadona', category: 'dulces', nutritionPer100g: { kcal: 177, proteins: 3.8, carbs: 27.0, fats: 5.8 }, defaultServingG: 150, unit: 'g', emoji: '🍦' },
  { id: 'mcd-happy-meal-nuggets', name: 'Happy Meal McNuggets', brand: "McDonald's", supermarket: 'mercadona', category: 'otros', nutritionPer100g: { kcal: 222, proteins: 9.0, carbs: 27.0, fats: 8.5 }, defaultServingG: 220, unit: 'g', emoji: '🍗' },
  { id: 'mcd-cafe-mediano', name: 'Café con Leche Mediano', brand: "McDonald's", supermarket: 'mercadona', category: 'bebidas', nutritionPer100g: { kcal: 52, proteins: 2.5, carbs: 5.8, fats: 2.2 }, defaultServingG: 300, unit: 'ml', emoji: '☕' },
  { id: 'mcd-mcmuffin-huevo', name: 'Egg McMuffin', brand: "McDonald's", supermarket: 'mercadona', category: 'otros', nutritionPer100g: { kcal: 259, proteins: 15.0, carbs: 27.0, fats: 10.0 }, defaultServingG: 145, unit: 'g', emoji: '🥚' },
  { id: 'mcd-wrap-pollo', name: 'Wrap Pollo Crujiente', brand: "McDonald's", supermarket: 'mercadona', category: 'otros', nutritionPer100g: { kcal: 236, proteins: 12.0, carbs: 25.0, fats: 9.5 }, defaultServingG: 180, unit: 'g', emoji: '🌯' },
  { id: 'mcd-ensalada-pollo', name: 'Ensalada Pollo a la Plancha', brand: "McDonald's", supermarket: 'mercadona', category: 'otros', nutritionPer100g: { kcal: 79, proteins: 10.5, carbs: 4.0, fats: 2.5 }, defaultServingG: 250, unit: 'g', emoji: '🥗' },

  // ─── BURGER KING ───
  { id: 'bk-whopper', name: 'Whopper', brand: 'Burger King', supermarket: 'mercadona', category: 'otros', nutritionPer100g: { kcal: 234, proteins: 11.9, carbs: 18.8, fats: 13.0 }, defaultServingG: 270, unit: 'g', emoji: '🍔' },
  { id: 'bk-whopper-queso', name: 'Whopper con Queso', brand: 'Burger King', supermarket: 'mercadona', category: 'otros', nutritionPer100g: { kcal: 274, proteins: 13.0, carbs: 22.0, fats: 15.0 }, defaultServingG: 285, unit: 'g', emoji: '🍔' },
  { id: 'bk-doble-whopper', name: 'Doble Whopper', brand: 'Burger King', supermarket: 'mercadona', category: 'otros', nutritionPer100g: { kcal: 300, proteins: 17.0, carbs: 18.0, fats: 18.0 }, defaultServingG: 360, unit: 'g', emoji: '🍔' },
  { id: 'bk-big-king', name: 'Big King XXL', brand: 'Burger King', supermarket: 'mercadona', category: 'otros', nutritionPer100g: { kcal: 295, proteins: 16.0, carbs: 21.0, fats: 17.0 }, defaultServingG: 250, unit: 'g', emoji: '🍔' },
  { id: 'bk-crispy-chicken', name: 'Crispy Chicken', brand: 'Burger King', supermarket: 'mercadona', category: 'otros', nutritionPer100g: { kcal: 255, proteins: 14.0, carbs: 25.0, fats: 11.0 }, defaultServingG: 200, unit: 'g', emoji: '🍔' },
  { id: 'bk-chicken-fries', name: 'Chicken Fries', brand: 'Burger King', supermarket: 'mercadona', category: 'otros', nutritionPer100g: { kcal: 254, proteins: 15.0, carbs: 20.0, fats: 12.0 }, defaultServingG: 110, unit: 'g', emoji: '🍗' },
  { id: 'bk-onion-rings', name: 'Onion Rings', brand: 'Burger King', supermarket: 'mercadona', category: 'otros', nutritionPer100g: { kcal: 352, proteins: 4.5, carbs: 43.0, fats: 18.0 }, defaultServingG: 95, unit: 'g', emoji: '🧅' },
  { id: 'bk-patatas-medianas', name: 'Patatas Fritas Medianas', brand: 'Burger King', supermarket: 'mercadona', category: 'otros', nutritionPer100g: { kcal: 282, proteins: 3.5, carbs: 38.0, fats: 13.0 }, defaultServingG: 115, unit: 'g', emoji: '🍟' },
  { id: 'bk-plant-whopper', name: 'Plant-Based Whopper', brand: 'Burger King', supermarket: 'mercadona', category: 'otros', nutritionPer100g: { kcal: 221, proteins: 12.0, carbs: 22.0, fats: 9.0 }, defaultServingG: 270, unit: 'g', emoji: '🍔' },
  { id: 'bk-sundae-oreo', name: 'Sundae Oreo', brand: 'Burger King', supermarket: 'mercadona', category: 'dulces', nutritionPer100g: { kcal: 198, proteins: 4.0, carbs: 29.0, fats: 7.0 }, defaultServingG: 155, unit: 'g', emoji: '🍦' },

  // ─── KFC ───
  { id: 'kfc-pollo-original', name: 'Pollo Original Muslo', brand: 'KFC', supermarket: 'mercadona', category: 'otros', nutritionPer100g: { kcal: 261, proteins: 19.0, carbs: 9.0, fats: 16.0 }, defaultServingG: 130, unit: 'g', emoji: '🍗' },
  { id: 'kfc-pollo-pechuga', name: 'Pechuga Original', brand: 'KFC', supermarket: 'mercadona', category: 'otros', nutritionPer100g: { kcal: 218, proteins: 22.0, carbs: 8.0, fats: 11.0 }, defaultServingG: 160, unit: 'g', emoji: '🍗' },
  { id: 'kfc-hot-wings', name: 'Hot Wings (5 piezas)', brand: 'KFC', supermarket: 'mercadona', category: 'otros', nutritionPer100g: { kcal: 306, proteins: 18.0, carbs: 12.0, fats: 20.0 }, defaultServingG: 110, unit: 'g', emoji: '🍗' },
  { id: 'kfc-nuggets-6', name: 'Popcorn Nuggets 6', brand: 'KFC', supermarket: 'mercadona', category: 'otros', nutritionPer100g: { kcal: 268, proteins: 14.0, carbs: 22.0, fats: 13.0 }, defaultServingG: 95, unit: 'g', emoji: '🍗' },
  { id: 'kfc-twister', name: 'Twister', brand: 'KFC', supermarket: 'mercadona', category: 'otros', nutritionPer100g: { kcal: 238, proteins: 12.0, carbs: 24.0, fats: 10.0 }, defaultServingG: 220, unit: 'g', emoji: '🌯' },
  { id: 'kfc-torre', name: 'Torre Burger', brand: 'KFC', supermarket: 'mercadona', category: 'otros', nutritionPer100g: { kcal: 260, proteins: 14.0, carbs: 22.0, fats: 13.0 }, defaultServingG: 220, unit: 'g', emoji: '🍔' },
  { id: 'kfc-patatas-medianas', name: 'Patatas Fritas Medianas', brand: 'KFC', supermarket: 'mercadona', category: 'otros', nutritionPer100g: { kcal: 267, proteins: 3.5, carbs: 36.0, fats: 12.0 }, defaultServingG: 115, unit: 'g', emoji: '🍟' },
  { id: 'kfc-coleslaw', name: 'Coleslaw', brand: 'KFC', supermarket: 'mercadona', category: 'otros', nutritionPer100g: { kcal: 156, proteins: 1.5, carbs: 12.0, fats: 12.0 }, defaultServingG: 135, unit: 'g', emoji: '🥗' },

  // ─── TELEPIZZA ───
  { id: 'tel-pizza-bbq-familiar', name: 'Pizza BBQ Familiar', brand: 'Telepizza', supermarket: 'mercadona', category: 'otros', nutritionPer100g: { kcal: 258, proteins: 12.0, carbs: 29.0, fats: 10.0 }, defaultServingG: 150, unit: 'g', emoji: '🍕' },
  { id: 'tel-pizza-4q-familiar', name: 'Pizza 4 Quesos Familiar', brand: 'Telepizza', supermarket: 'mercadona', category: 'otros', nutritionPer100g: { kcal: 267, proteins: 13.0, carbs: 27.0, fats: 12.0 }, defaultServingG: 145, unit: 'g', emoji: '🍕' },
  { id: 'tel-pizza-pollo-familiar', name: 'Pizza Pollo Familiar', brand: 'Telepizza', supermarket: 'mercadona', category: 'otros', nutritionPer100g: { kcal: 243, proteins: 14.0, carbs: 28.0, fats: 8.5 }, defaultServingG: 148, unit: 'g', emoji: '🍕' },
  { id: 'tel-pizza-jamon-familiar', name: 'Pizza Jamón y Queso Familiar', brand: 'Telepizza', supermarket: 'mercadona', category: 'otros', nutritionPer100g: { kcal: 252, proteins: 13.0, carbs: 28.0, fats: 9.5 }, defaultServingG: 148, unit: 'g', emoji: '🍕' },
  { id: 'tel-pizza-margarita', name: 'Pizza Margarita Mediana', brand: 'Telepizza', supermarket: 'mercadona', category: 'otros', nutritionPer100g: { kcal: 238, proteins: 10.5, carbs: 30.0, fats: 8.5 }, defaultServingG: 130, unit: 'g', emoji: '🍕' },
  { id: 'tel-pizza-vegetal', name: 'Pizza Vegetal Mediana', brand: 'Telepizza', supermarket: 'mercadona', category: 'otros', nutritionPer100g: { kcal: 218, proteins: 9.0, carbs: 29.0, fats: 7.0 }, defaultServingG: 140, unit: 'g', emoji: '🍕' },
  { id: 'tel-alitas-bbq', name: 'Alitas BBQ (8 piezas)', brand: 'Telepizza', supermarket: 'mercadona', category: 'otros', nutritionPer100g: { kcal: 220, proteins: 16.0, carbs: 12.0, fats: 12.0 }, defaultServingG: 240, unit: 'g', emoji: '🍗' },
  { id: 'tel-costillas', name: 'Costillas BBQ', brand: 'Telepizza', supermarket: 'mercadona', category: 'otros', nutritionPer100g: { kcal: 235, proteins: 18.0, carbs: 7.0, fats: 15.0 }, defaultServingG: 200, unit: 'g', emoji: '🍖' },

  // ─── PIZZA HUT ───
  { id: 'ph-pizza-margarita', name: 'Pizza Margarita', brand: 'Pizza Hut', supermarket: 'mercadona', category: 'otros', nutritionPer100g: { kcal: 249, proteins: 11.0, carbs: 29.0, fats: 9.5 }, defaultServingG: 130, unit: 'g', emoji: '🍕' },
  { id: 'ph-pizza-pepperoni', name: 'Pizza Pepperoni', brand: 'Pizza Hut', supermarket: 'mercadona', category: 'otros', nutritionPer100g: { kcal: 271, proteins: 12.0, carbs: 27.0, fats: 13.0 }, defaultServingG: 138, unit: 'g', emoji: '🍕' },
  { id: 'ph-pizza-hawaiana', name: 'Pizza Hawaiana', brand: 'Pizza Hut', supermarket: 'mercadona', category: 'otros', nutritionPer100g: { kcal: 245, proteins: 12.0, carbs: 29.0, fats: 9.0 }, defaultServingG: 138, unit: 'g', emoji: '🍕' },
  { id: 'ph-pan-ajo', name: 'Pan de Ajo', brand: 'Pizza Hut', supermarket: 'mercadona', category: 'otros', nutritionPer100g: { kcal: 339, proteins: 8.0, carbs: 38.0, fats: 17.0 }, defaultServingG: 50, unit: 'g', emoji: '🧄' },

  // ─── TACO BELL ───
  { id: 'tb-taco-crunchy', name: 'Taco Crunchy', brand: 'Taco Bell', supermarket: 'mercadona', category: 'otros', nutritionPer100g: { kcal: 220, proteins: 10.0, carbs: 17.0, fats: 12.0 }, defaultServingG: 85, unit: 'g', emoji: '🌮' },
  { id: 'tb-taco-soft', name: 'Taco Soft', brand: 'Taco Bell', supermarket: 'mercadona', category: 'otros', nutritionPer100g: { kcal: 213, proteins: 11.0, carbs: 21.0, fats: 9.0 }, defaultServingG: 98, unit: 'g', emoji: '🌮' },
  { id: 'tb-burrito-clasico', name: 'Burrito Clásico', brand: 'Taco Bell', supermarket: 'mercadona', category: 'otros', nutritionPer100g: { kcal: 230, proteins: 10.0, carbs: 28.0, fats: 8.0 }, defaultServingG: 175, unit: 'g', emoji: '🌯' },
  { id: 'tb-quesadilla-pollo', name: 'Quesadilla de Pollo', brand: 'Taco Bell', supermarket: 'mercadona', category: 'otros', nutritionPer100g: { kcal: 256, proteins: 14.0, carbs: 23.0, fats: 12.0 }, defaultServingG: 184, unit: 'g', emoji: '🫓' },
  { id: 'tb-nachos-queso', name: 'Nachos con Queso', brand: 'Taco Bell', supermarket: 'mercadona', category: 'otros', nutritionPer100g: { kcal: 340, proteins: 6.0, carbs: 42.0, fats: 17.0 }, defaultServingG: 125, unit: 'g', emoji: '🌮' },
  { id: 'tb-crunch-wrap', name: 'Crunch Wrap Supreme', brand: 'Taco Bell', supermarket: 'mercadona', category: 'otros', nutritionPer100g: { kcal: 244, proteins: 11.0, carbs: 27.0, fats: 10.0 }, defaultServingG: 240, unit: 'g', emoji: '🌯' },
  { id: 'tb-cinnabon-bites', name: 'Cinnabon Delights 2', brand: 'Taco Bell', supermarket: 'mercadona', category: 'dulces', nutritionPer100g: { kcal: 438, proteins: 5.0, carbs: 42.0, fats: 27.0 }, defaultServingG: 46, unit: 'g', emoji: '🍩' },

  // ─── SUBWAY ───
  { id: 'sub-italiano-bmt', name: 'Italiano BMT 30cm', brand: 'Subway', supermarket: 'mercadona', category: 'otros', nutritionPer100g: { kcal: 250, proteins: 12.0, carbs: 27.0, fats: 10.0 }, defaultServingG: 329, unit: 'g', emoji: '🥖' },
  { id: 'sub-pollo-teriyaki', name: 'Pollo Teriyaki 30cm', brand: 'Subway', supermarket: 'mercadona', category: 'otros', nutritionPer100g: { kcal: 213, proteins: 14.0, carbs: 30.0, fats: 4.0 }, defaultServingG: 312, unit: 'g', emoji: '🥖' },
  { id: 'sub-atun', name: 'Atún 30cm', brand: 'Subway', supermarket: 'mercadona', category: 'otros', nutritionPer100g: { kcal: 247, proteins: 11.0, carbs: 27.0, fats: 11.0 }, defaultServingG: 297, unit: 'g', emoji: '🥖' },
  { id: 'sub-veggie', name: 'Veggie Delite 30cm', brand: 'Subway', supermarket: 'mercadona', category: 'otros', nutritionPer100g: { kcal: 165, proteins: 7.0, carbs: 32.0, fats: 2.0 }, defaultServingG: 262, unit: 'g', emoji: '🥗' },
  { id: 'sub-meatball', name: 'Meatball Marinara 30cm', brand: 'Subway', supermarket: 'mercadona', category: 'otros', nutritionPer100g: { kcal: 254, proteins: 11.0, carbs: 30.0, fats: 10.0 }, defaultServingG: 381, unit: 'g', emoji: '🥖' },
  { id: 'sub-cookie-choc', name: 'Cookie Chocolate Chip', brand: 'Subway', supermarket: 'mercadona', category: 'dulces', nutritionPer100g: { kcal: 452, proteins: 5.5, carbs: 58.0, fats: 22.0 }, defaultServingG: 45, unit: 'g', emoji: '🍪' },

  // ─── VIPS ───
  { id: 'vip-hamburguesa-clasica', name: 'Hamburguesa Clásica', brand: 'VIPS', supermarket: 'mercadona', category: 'otros', nutritionPer100g: { kcal: 270, proteins: 14.0, carbs: 23.0, fats: 13.0 }, defaultServingG: 220, unit: 'g', emoji: '🍔' },
  { id: 'vip-club-sandwich', name: 'Club Sandwich', brand: 'VIPS', supermarket: 'mercadona', category: 'otros', nutritionPer100g: { kcal: 225, proteins: 14.0, carbs: 20.0, fats: 10.0 }, defaultServingG: 280, unit: 'g', emoji: '🥪' },
  { id: 'vip-ensalada-cesar', name: 'Ensalada César con Pollo', brand: 'VIPS', supermarket: 'mercadona', category: 'otros', nutritionPer100g: { kcal: 145, proteins: 11.0, carbs: 7.0, fats: 9.0 }, defaultServingG: 300, unit: 'g', emoji: '🥗' },
  { id: 'vip-pancakes', name: 'Pancakes con Sirope', brand: 'VIPS', supermarket: 'mercadona', category: 'otros', nutritionPer100g: { kcal: 285, proteins: 7.0, carbs: 42.0, fats: 10.0 }, defaultServingG: 220, unit: 'g', emoji: '🥞' },
  { id: 'vip-patatas-frites', name: 'Patatas Fritas', brand: 'VIPS', supermarket: 'mercadona', category: 'otros', nutritionPer100g: { kcal: 290, proteins: 4.0, carbs: 38.0, fats: 14.0 }, defaultServingG: 200, unit: 'g', emoji: '🍟' },
  { id: 'vip-cheesecake', name: 'Cheesecake', brand: 'VIPS', supermarket: 'mercadona', category: 'dulces', nutritionPer100g: { kcal: 320, proteins: 5.5, carbs: 30.0, fats: 20.0 }, defaultServingG: 150, unit: 'g', emoji: '🍰' },
  { id: 'vip-brownie', name: 'Brownie con Helado', brand: 'VIPS', supermarket: 'mercadona', category: 'dulces', nutritionPer100g: { kcal: 360, proteins: 5.0, carbs: 42.0, fats: 19.0 }, defaultServingG: 200, unit: 'g', emoji: '🍫' },

  // ─── RODILLA ───
  { id: 'rod-sandwich-reina', name: 'Sandwich Reina', brand: 'Rodilla', supermarket: 'mercadona', category: 'otros', nutritionPer100g: { kcal: 195, proteins: 10.0, carbs: 22.0, fats: 7.0 }, defaultServingG: 130, unit: 'g', emoji: '🥪' },
  { id: 'rod-sandwich-york', name: 'Sandwich York y Queso', brand: 'Rodilla', supermarket: 'mercadona', category: 'otros', nutritionPer100g: { kcal: 212, proteins: 11.0, carbs: 23.0, fats: 8.5 }, defaultServingG: 120, unit: 'g', emoji: '🥪' },
  { id: 'rod-sandwich-vegetal', name: 'Sandwich Vegetal', brand: 'Rodilla', supermarket: 'mercadona', category: 'otros', nutritionPer100g: { kcal: 170, proteins: 6.5, carbs: 22.0, fats: 6.5 }, defaultServingG: 130, unit: 'g', emoji: '🥗' },
  { id: 'rod-bocata-lomo', name: 'Bocata de Lomo', brand: 'Rodilla', supermarket: 'mercadona', category: 'otros', nutritionPer100g: { kcal: 235, proteins: 13.0, carbs: 25.0, fats: 9.0 }, defaultServingG: 180, unit: 'g', emoji: '🥖' },
  { id: 'rod-ensalada-pasta', name: 'Ensalada de Pasta', brand: 'Rodilla', supermarket: 'mercadona', category: 'otros', nutritionPer100g: { kcal: 158, proteins: 6.0, carbs: 18.0, fats: 7.0 }, defaultServingG: 200, unit: 'g', emoji: '🥗' },

  // ─── FOSTER'S HOLLYWOOD ───
  { id: 'fh-hamburguesa-classic', name: 'Classic Burger', brand: "Foster's Hollywood", supermarket: 'mercadona', category: 'otros', nutritionPer100g: { kcal: 280, proteins: 15.0, carbs: 22.0, fats: 15.0 }, defaultServingG: 250, unit: 'g', emoji: '🍔' },
  { id: 'fh-costillas-bbq', name: 'Costillas BBQ', brand: "Foster's Hollywood", supermarket: 'mercadona', category: 'otros', nutritionPer100g: { kcal: 298, proteins: 22.0, carbs: 9.0, fats: 19.0 }, defaultServingG: 350, unit: 'g', emoji: '🍖' },
  { id: 'fh-patatas-frites', name: 'Patatas Fritas', brand: "Foster's Hollywood", supermarket: 'mercadona', category: 'otros', nutritionPer100g: { kcal: 310, proteins: 4.0, carbs: 40.0, fats: 15.0 }, defaultServingG: 200, unit: 'g', emoji: '🍟' },
  { id: 'fh-onion-rings', name: 'Aros de Cebolla', brand: "Foster's Hollywood", supermarket: 'mercadona', category: 'otros', nutritionPer100g: { kcal: 345, proteins: 5.0, carbs: 42.0, fats: 18.0 }, defaultServingG: 150, unit: 'g', emoji: '🧅' },
  { id: 'fh-brownie', name: 'Brownie con Helado', brand: "Foster's Hollywood", supermarket: 'mercadona', category: 'dulces', nutritionPer100g: { kcal: 375, proteins: 5.5, carbs: 45.0, fats: 20.0 }, defaultServingG: 180, unit: 'g', emoji: '🍫' },

  // ─── DOMINO'S PIZZA ───
  { id: 'dom-pizza-exotica', name: 'Pizza Exótica Mediana', brand: "Domino's", supermarket: 'mercadona', category: 'otros', nutritionPer100g: { kcal: 263, proteins: 12.5, carbs: 28.0, fats: 11.0 }, defaultServingG: 145, unit: 'g', emoji: '🍕' },
  { id: 'dom-pizza-pepperoni', name: 'Pizza Pepperoni Mediana', brand: "Domino's", supermarket: 'mercadona', category: 'otros', nutritionPer100g: { kcal: 278, proteins: 13.0, carbs: 27.0, fats: 13.0 }, defaultServingG: 145, unit: 'g', emoji: '🍕' },
  { id: 'dom-pizza-bbq', name: 'Pizza BBQ Chicken Mediana', brand: "Domino's", supermarket: 'mercadona', category: 'otros', nutritionPer100g: { kcal: 255, proteins: 14.0, carbs: 28.0, fats: 9.5 }, defaultServingG: 148, unit: 'g', emoji: '🍕' },
  { id: 'dom-palitos-pan', name: 'Palitos de Pan', brand: "Domino's", supermarket: 'mercadona', category: 'otros', nutritionPer100g: { kcal: 315, proteins: 9.0, carbs: 38.0, fats: 13.0 }, defaultServingG: 100, unit: 'g', emoji: '🧄' },

  // ─── CINCO JOTAS / RESTAURANTES ESPAÑOLES ───
  { id: 'pans-club-salmón', name: 'Club Salmón', brand: "Pans & Company", supermarket: 'mercadona', category: 'otros', nutritionPer100g: { kcal: 210, proteins: 12.0, carbs: 22.0, fats: 8.5 }, defaultServingG: 200, unit: 'g', emoji: '🥪' },
  { id: 'pans-bikini-york', name: 'Bikini York y Queso', brand: "Pans & Company", supermarket: 'mercadona', category: 'otros', nutritionPer100g: { kcal: 245, proteins: 12.0, carbs: 26.0, fats: 10.0 }, defaultServingG: 150, unit: 'g', emoji: '🥪' },
  { id: 'pans-patatas-bravas', name: 'Patatas Bravas', brand: "Pans & Company", supermarket: 'mercadona', category: 'otros', nutritionPer100g: { kcal: 175, proteins: 2.5, carbs: 22.0, fats: 8.5 }, defaultServingG: 200, unit: 'g', emoji: '🥔' },
  { id: 'mad-pizza-bufala', name: 'Pizza Búfala', brand: 'Mad Spaghetteria', supermarket: 'mercadona', category: 'otros', nutritionPer100g: { kcal: 240, proteins: 11.0, carbs: 28.0, fats: 9.0 }, defaultServingG: 350, unit: 'g', emoji: '🍕' },

  // ─── SUSHIS / ASIÁTICOS ───
  { id: 'sushi-nigiri-salmon', name: 'Nigiri de Salmón (1u)', brand: 'SushiSamba', supermarket: 'mercadona', category: 'otros', nutritionPer100g: { kcal: 170, proteins: 9.0, carbs: 22.0, fats: 3.5 }, defaultServingG: 30, unit: 'g', emoji: '🍣' },
  { id: 'sushi-maki-pepino', name: 'Maki Pepino (6u)', brand: 'SushiSamba', supermarket: 'mercadona', category: 'otros', nutritionPer100g: { kcal: 130, proteins: 3.0, carbs: 27.0, fats: 1.0 }, defaultServingG: 120, unit: 'g', emoji: '🍱' },
  { id: 'sushi-california-roll', name: 'California Roll (8u)', brand: 'SushiSamba', supermarket: 'mercadona', category: 'otros', nutritionPer100g: { kcal: 188, proteins: 7.0, carbs: 28.0, fats: 5.5 }, defaultServingG: 170, unit: 'g', emoji: '🍱' },
  { id: 'wok-chow-mein', name: 'Chow Mein de Pollo', brand: 'Wok to Walk', supermarket: 'mercadona', category: 'otros', nutritionPer100g: { kcal: 142, proteins: 9.0, carbs: 16.0, fats: 4.5 }, defaultServingG: 350, unit: 'g', emoji: '🍜' },
  { id: 'wok-arroz-frito', name: 'Arroz Frito Pollo', brand: 'Wok to Walk', supermarket: 'mercadona', category: 'otros', nutritionPer100g: { kcal: 158, proteins: 8.0, carbs: 22.0, fats: 4.5 }, defaultServingG: 350, unit: 'g', emoji: '🍚' },
  { id: 'chi-pollo-general', name: 'Pollo del General Tso', brand: 'China Crown', supermarket: 'mercadona', category: 'otros', nutritionPer100g: { kcal: 185, proteins: 10.0, carbs: 20.0, fats: 7.0 }, defaultServingG: 300, unit: 'g', emoji: '🍗' },
  { id: 'chi-dim-sum', name: 'Dim Sum Cerdo (4u)', brand: 'China Crown', supermarket: 'mercadona', category: 'otros', nutritionPer100g: { kcal: 145, proteins: 8.0, carbs: 14.0, fats: 5.5 }, defaultServingG: 120, unit: 'g', emoji: '🥟' },

  // ─── KEBAB ───
  { id: 'keb-kebab-pollo', name: 'Kebab de Pollo', brand: 'Doner Kebab', supermarket: 'mercadona', category: 'otros', nutritionPer100g: { kcal: 220, proteins: 14.0, carbs: 22.0, fats: 8.0 }, defaultServingG: 350, unit: 'g', emoji: '🌯' },
  { id: 'keb-kebab-ternera', name: 'Kebab de Ternera', brand: 'Doner Kebab', supermarket: 'mercadona', category: 'otros', nutritionPer100g: { kcal: 245, proteins: 15.0, carbs: 21.0, fats: 10.0 }, defaultServingG: 350, unit: 'g', emoji: '🌯' },
  { id: 'keb-durum-mixto', name: 'Durum Mixto', brand: 'Doner Kebab', supermarket: 'mercadona', category: 'otros', nutritionPer100g: { kcal: 238, proteins: 14.5, carbs: 22.0, fats: 9.5 }, defaultServingG: 400, unit: 'g', emoji: '🌯' },
  { id: 'keb-doner-box', name: 'Döner Box (sin pan)', brand: 'Doner Kebab', supermarket: 'mercadona', category: 'otros', nutritionPer100g: { kcal: 185, proteins: 17.0, carbs: 5.0, fats: 11.0 }, defaultServingG: 300, unit: 'g', emoji: '🥩' },
  { id: 'keb-patatas-kebab', name: 'Patatas con Salsa Kebab', brand: 'Doner Kebab', supermarket: 'mercadona', category: 'otros', nutritionPer100g: { kcal: 210, proteins: 4.0, carbs: 28.0, fats: 9.5 }, defaultServingG: 250, unit: 'g', emoji: '🍟' },

  // ─── TAPAS / BAR TÍPICO ───
  { id: 'bar-tortilla-espanola', name: 'Tortilla Española', brand: 'Bar / Restaurante', supermarket: 'mercadona', category: 'otros', nutritionPer100g: { kcal: 173, proteins: 6.9, carbs: 10.0, fats: 12.0 }, defaultServingG: 150, unit: 'g', emoji: '🥚' },
  { id: 'bar-croquetas-jamon', name: 'Croquetas de Jamón (2u)', brand: 'Bar / Restaurante', supermarket: 'mercadona', category: 'otros', nutritionPer100g: { kcal: 218, proteins: 7.0, carbs: 22.0, fats: 11.0 }, defaultServingG: 60, unit: 'g', emoji: '🟤' },
  { id: 'bar-patatas-bravas', name: 'Patatas Bravas', brand: 'Bar / Restaurante', supermarket: 'mercadona', category: 'otros', nutritionPer100g: { kcal: 168, proteins: 2.5, carbs: 22.0, fats: 8.0 }, defaultServingG: 200, unit: 'g', emoji: '🥔' },
  { id: 'bar-pimientos-padron', name: 'Pimientos de Padrón', brand: 'Bar / Restaurante', supermarket: 'mercadona', category: 'otros', nutritionPer100g: { kcal: 98, proteins: 2.0, carbs: 4.0, fats: 8.0 }, defaultServingG: 150, unit: 'g', emoji: '🫑' },
  { id: 'bar-gambas-ajillo', name: 'Gambas al Ajillo', brand: 'Bar / Restaurante', supermarket: 'mercadona', category: 'otros', nutritionPer100g: { kcal: 175, proteins: 16.0, carbs: 2.0, fats: 12.0 }, defaultServingG: 150, unit: 'g', emoji: '🦐' },
  { id: 'bar-bocata-calamares', name: 'Bocata de Calamares', brand: 'Bar / Restaurante', supermarket: 'mercadona', category: 'otros', nutritionPer100g: { kcal: 255, proteins: 10.0, carbs: 28.0, fats: 11.0 }, defaultServingG: 200, unit: 'g', emoji: '🦑' },
  { id: 'bar-montadito-lomo', name: 'Montadito de Lomo', brand: 'Bar / Restaurante', supermarket: 'mercadona', category: 'otros', nutritionPer100g: { kcal: 228, proteins: 12.0, carbs: 24.0, fats: 8.5 }, defaultServingG: 70, unit: 'g', emoji: '🥪' },
  { id: 'bar-pinchos-tortilla', name: 'Pincho de Tortilla', brand: 'Bar / Restaurante', supermarket: 'mercadona', category: 'otros', nutritionPer100g: { kcal: 184, proteins: 9.5, carbs: 12.0, fats: 11.0 }, defaultServingG: 70, unit: 'g', emoji: '🥚' },

  // ─── STARBUCKS ───
  { id: 'sbx-latte-medium', name: 'Caffè Latte Medium (leche entera)', brand: 'Starbucks', supermarket: 'mercadona', category: 'bebidas', nutritionPer100g: { kcal: 67, proteins: 3.3, carbs: 6.7, fats: 3.1 }, defaultServingG: 354, unit: 'ml', emoji: '☕' },
  { id: 'sbx-frappuccino-caramelo', name: 'Frappuccino Caramelo', brand: 'Starbucks', supermarket: 'mercadona', category: 'bebidas', nutritionPer100g: { kcal: 147, proteins: 2.5, carbs: 25.0, fats: 4.5 }, defaultServingG: 354, unit: 'ml', emoji: '🧋' },
  { id: 'sbx-capuccino', name: 'Cappuccino Grande', brand: 'Starbucks', supermarket: 'mercadona', category: 'bebidas', nutritionPer100g: { kcal: 74, proteins: 4.0, carbs: 7.8, fats: 2.8 }, defaultServingG: 473, unit: 'ml', emoji: '☕' },
  { id: 'sbx-muffin-chocolate', name: 'Muffin Doble Chocolate', brand: 'Starbucks', supermarket: 'mercadona', category: 'dulces', nutritionPer100g: { kcal: 380, proteins: 5.5, carbs: 48.0, fats: 18.0 }, defaultServingG: 110, unit: 'g', emoji: '🧁' },
  { id: 'sbx-croissant', name: 'Croissant de Mantequilla', brand: 'Starbucks', supermarket: 'mercadona', category: 'panaderia', nutritionPer100g: { kcal: 430, proteins: 8.0, carbs: 40.0, fats: 27.0 }, defaultServingG: 75, unit: 'g', emoji: '🥐' },
];
