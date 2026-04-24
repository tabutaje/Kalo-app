export const dailyTips: { emoji: string; text: string; category: string }[] = [
  { emoji: '💧', text: 'Beber 2 litros de agua al día ayuda a controlar el apetito y mejora el metabolismo.', category: 'hidratación' },
  { emoji: '🥗', text: 'Llena la mitad de tu plato con verduras para reducir calorías sin pasar hambre.', category: 'nutrición' },
  { emoji: '🍳', text: 'Un desayuno rico en proteínas te mantiene saciado hasta el almuerzo.', category: 'desayuno' },
  { emoji: '🥑', text: 'Las grasas saludables (aguacate, frutos secos, aceite de oliva) son esenciales para tu cuerpo.', category: 'nutrición' },
  { emoji: '🏃', text: 'Caminar 30 minutos al día quema unas 150 kcal extra.', category: 'ejercicio' },
  { emoji: '🍌', text: 'El plátano es una excelente fuente de potasio y energía rápida antes del ejercicio.', category: 'nutrición' },
  { emoji: '🛌', text: 'Dormir 7-8 horas ayuda a regular las hormonas del hambre (grelina y leptina).', category: 'descanso' },
  { emoji: '🥩', text: 'La proteína es clave para mantener masa muscular. Intenta incluirla en cada comida.', category: 'nutrición' },
  { emoji: '🍫', text: 'No elimines los alimentos que te gustan. La moderación es más sostenible que la restricción.', category: 'motivación' },
  { emoji: '📏', text: 'Pesar los alimentos las primeras semanas te ayuda a calibrar las porciones a ojo.', category: 'consejos' },
  { emoji: '🥣', text: 'Los copos de avena son una fuente excelente de fibra y carbohidratos complejos.', category: 'desayuno' },
  { emoji: '🫘', text: 'Las legumbres son baratas, saciantes y ricas en proteínas vegetales y fibra.', category: 'nutrición' },
  { emoji: '🥚', text: 'El huevo es uno de los alimentos más completos: proteínas, vitaminas y minerales.', category: 'nutrición' },
  { emoji: '⏰', text: 'Masticar despacio (20-30 min por comida) mejora la digestión y la saciedad.', category: 'consejos' },
  { emoji: '🎯', text: 'No te obsesiones con un día malo. Lo que importa es la consistencia a largo plazo.', category: 'motivación' },
  { emoji: '🥦', text: 'El brócoli tiene más proteínas por caloría que la mayoría de verduras.', category: 'nutrición' },
  { emoji: '🐟', text: 'Come pescado azul 2-3 veces por semana para obtener omega-3.', category: 'nutrición' },
  { emoji: '🍎', text: 'Una manzana tiene solo 52 kcal por 100g y es rica en fibra soluble.', category: 'nutrición' },
  { emoji: '💪', text: 'La proteína ayuda a la recuperación muscular. Toma 20-30g después del ejercicio.', category: 'ejercicio' },
  { emoji: '🥤', text: 'Las bebidas azucaradas son calorías vacías. Sustituye por agua con limón o infusiones.', category: 'hidratación' },
  { emoji: '📊', text: 'Llevar un registro de comidas aumenta un 50% las probabilidades de alcanzar tu objetivo.', category: 'motivación' },
  { emoji: '🧀', text: 'El queso fresco batido 0% es alto en proteínas y bajo en calorías. Ideal como snack.', category: 'snacks' },
  { emoji: '🌙', text: 'Evita comidas pesadas antes de dormir. Una cena ligera mejora la calidad del sueño.', category: 'cena' },
  { emoji: '🥜', text: '30g de frutos secos al día aportan grasas saludables sin exceso calórico.', category: 'snacks' },
  { emoji: '🍝', text: 'La pasta no engorda: lo importante es la cantidad y la salsa que le pongas.', category: 'nutrición' },
  { emoji: '🔥', text: 'Un déficit de 500 kcal/día equivale a perder ~0.5kg por semana de forma saludable.', category: 'pérdida' },
  { emoji: '🍽️', text: 'Planificar las comidas del día siguiente reduce las decisiones impulsivas.', category: 'consejos' },
  { emoji: '🫒', text: 'El aceite de oliva virgen extra es la grasa más saludable de la dieta mediterránea.', category: 'nutrición' },
  { emoji: '🏋️', text: 'El entrenamiento de fuerza quema calorías incluso en reposo al aumentar masa muscular.', category: 'ejercicio' },
  { emoji: '🥕', text: 'Las verduras crudas como snack (zanahoria, pepino) sacian sin apenas calorías.', category: 'snacks' },
];

export function getTipOfDay(): { emoji: string; text: string; category: string } {
  const dayOfYear = Math.floor(
    (Date.now() - new Date(new Date().getFullYear(), 0, 0).getTime()) / 86400000
  );
  return dailyTips[dayOfYear % dailyTips.length];
}
