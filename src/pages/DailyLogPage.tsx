import { useState } from 'react';
import { useApp } from '@/context/AppContext';
import Header from '@/components/layout/Header';
import MealSection from '@/components/meals/MealSection';
import AddMealEntryModal from '@/components/meals/AddMealEntryModal';
import AddRecipeToMealModal from '@/components/meals/AddRecipeToMealModal';
import CreateRecipeModal from '@/components/meals/CreateRecipeModal';
import ProgressBar from '@/components/common/ProgressBar';
import { MealType, MEAL_ORDER } from '@/types';
import { calculateDayTotal } from '@/utils/nutrition';
import { formatDateLong, addDays, isToday, today } from '@/utils/dates';
import { getTipOfDay } from '@/data/tips';

export default function DailyLogPage() {
  const {
    selectedDate,
    setSelectedDate,
    getDailyLog,
    removeMealEntry,
    state,
    updateDayWeight,
    updateDayWater,
    updateDayBurnedKcal,
  } = useApp();
  const [modalOpen, setModalOpen] = useState(false);
  const [recipeModalOpen, setRecipeModalOpen] = useState(false);
  const [createRecipeOpen, setCreateRecipeOpen] = useState(false);
  const [activeMealType, setActiveMealType] = useState<MealType>('comida');

  const log = getDailyLog(selectedDate);
  const dayTotal = calculateDayTotal(log.meals);
  const goal = state.settings.dailyKcalGoal;
  const remaining = goal - dayTotal.kcal;
  const waterGoal = state.settings.waterGoalMl;
  const currentWater = log.waterMl ?? 0;
  const burnedKcal = log.burnedKcal ?? 0;
  const tip = getTipOfDay();

  function openAddModal(mealType: MealType) {
    setActiveMealType(mealType);
    setModalOpen(true);
  }

  function openRecipeModal(mealType: MealType) {
    setActiveMealType(mealType);
    setRecipeModalOpen(true);
  }

  function handleAddWater() {
    updateDayWater(selectedDate, currentWater + 250);
  }

  function handleRemoveWater() {
    if (currentWater >= 250) {
      updateDayWater(selectedDate, currentWater - 250);
    }
  }

  function handleWeightChange(e: React.ChangeEvent<HTMLInputElement>) {
    const value = e.target.value;
    if (value === '') {
      updateDayWeight(selectedDate, undefined);
    } else {
      const num = parseFloat(value);
      if (!isNaN(num) && num > 0) {
        updateDayWeight(selectedDate, num);
      }
    }
  }

  function handleBurnedChange(e: React.ChangeEvent<HTMLInputElement>) {
    const value = e.target.value;
    if (value === '') {
      updateDayBurnedKcal(selectedDate, undefined);
    } else {
      const num = parseInt(value);
      if (!isNaN(num) && num >= 0) {
        updateDayBurnedKcal(selectedDate, num);
      }
    }
  }

  const waterPercent = waterGoal > 0 ? Math.min((currentWater / waterGoal) * 100, 100) : 0;
  const waterGlasses = Math.floor(currentWater / 250);

  return (
    <div className="pb-32">
      <Header
        title="Kalo"
        subtitle={formatDateLong(selectedDate)}
        showLogo
        leftAction={
          <button
            onClick={() => setSelectedDate(addDays(selectedDate, -1))}
            className="p-2 hover:bg-gray-100 rounded-lg text-gray-500"
          >
            ◀
          </button>
        }
        rightAction={
          <div className="flex items-center gap-1">
            {!isToday(selectedDate) && (
              <button
                onClick={() => setSelectedDate(today())}
                className="text-xs px-2 py-1 bg-primary-100 text-primary-700 rounded-lg hover:bg-primary-200"
              >
                Hoy
              </button>
            )}
            <button
              onClick={() => setSelectedDate(addDays(selectedDate, 1))}
              className="p-2 hover:bg-gray-100 rounded-lg text-gray-500"
            >
              ▶
            </button>
          </div>
        }
      />

      <div className="max-w-lg mx-auto px-4 py-4 space-y-4">
        {/* Tip del día */}
        <div className="bg-gradient-to-r from-amber-50 to-orange-50 border border-amber-200 rounded-2xl p-4">
          <div className="flex items-start gap-3">
            <span className="text-2xl flex-shrink-0">{tip.emoji}</span>
            <div>
              <p className="text-xs font-semibold text-amber-700 uppercase tracking-wide mb-1">
                Tip del día — {tip.category}
              </p>
              <p className="text-sm text-gray-700 leading-relaxed">{tip.text}</p>
            </div>
          </div>
        </div>

        {/* Daily summary bar */}
        <div className="card">
          <div className="flex items-center justify-between mb-2">
            <div>
              <span className="text-2xl font-bold text-gray-900">{dayTotal.kcal}</span>
              <span className="text-sm text-gray-500 ml-1">/ {goal} kcal</span>
            </div>
            <div className={`text-sm font-medium ${remaining >= 0 ? 'text-primary-600' : 'text-red-500'}`}>
              {remaining >= 0 ? `${remaining} restantes` : `${Math.abs(remaining)} excedidas`}
            </div>
          </div>
          <ProgressBar value={dayTotal.kcal} max={goal} showLabel={false} />
          <div className="flex justify-between mt-3 text-xs">
            <div className="text-center">
              <p className="text-gray-500">Proteínas</p>
              <p className="font-bold text-blue-600">{dayTotal.proteins}g</p>
            </div>
            <div className="text-center">
              <p className="text-gray-500">Carbos</p>
              <p className="font-bold text-amber-600">{dayTotal.carbs}g</p>
            </div>
            <div className="text-center">
              <p className="text-gray-500">Grasas</p>
              <p className="font-bold text-red-600">{dayTotal.fats}g</p>
            </div>
          </div>
        </div>

        {/* Water tracker */}
        <div className="card">
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-2">
              <span className="text-xl">💧</span>
              <h3 className="font-semibold text-gray-900">Agua</h3>
            </div>
            <span className="text-sm text-gray-500">
              {currentWater} / {waterGoal} ml
            </span>
          </div>

          {/* Water progress bar */}
          <div className="w-full bg-gray-100 rounded-full h-3 mb-3 overflow-hidden">
            <div
              className="h-full rounded-full bg-blue-400 transition-all duration-300"
              style={{ width: `${waterPercent}%` }}
            />
          </div>

          {/* Glasses visual */}
          <div className="flex items-center justify-between">
            <div className="flex gap-1 flex-wrap">
              {Array.from({ length: Math.ceil(waterGoal / 250) }).map((_, i) => (
                <div
                  key={i}
                  className={`w-6 h-8 rounded-md border-2 transition-colors duration-200 ${
                    i < waterGlasses
                      ? 'bg-blue-400 border-blue-500'
                      : 'bg-gray-50 border-gray-200'
                  }`}
                />
              ))}
            </div>
            <div className="flex items-center gap-2 flex-shrink-0 ml-3">
              <button
                onClick={handleRemoveWater}
                disabled={currentWater < 250}
                className="w-9 h-9 flex items-center justify-center rounded-full bg-gray-100 text-gray-500 hover:bg-gray-200 disabled:opacity-30 disabled:cursor-not-allowed transition-colors text-lg font-bold"
              >
                −
              </button>
              <button
                onClick={handleAddWater}
                className="w-9 h-9 flex items-center justify-center rounded-full bg-blue-500 text-white hover:bg-blue-600 transition-colors text-lg font-bold"
              >
                +
              </button>
            </div>
          </div>
          <p className="text-xs text-gray-400 mt-2 text-center">
            Cada vaso = 250 ml
          </p>
        </div>

        {/* Weight input */}
        <div className="card">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="text-xl">⚖️</span>
              <h3 className="font-semibold text-gray-900">Peso del día</h3>
            </div>
            <div className="flex items-center gap-2">
              <input
                type="number"
                step="0.1"
                min="0"
                placeholder="—"
                value={log.weight ?? ''}
                onChange={handleWeightChange}
                className="w-20 text-right text-sm font-medium bg-gray-50 border border-gray-200 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary-300 focus:border-primary-300 placeholder-gray-300"
              />
              <span className="text-sm text-gray-500">kg</span>
            </div>
          </div>
        </div>

        {/* Burned kcal + Balance */}
        <div className="card space-y-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="text-xl">🔥</span>
              <h3 className="font-semibold text-gray-900">Kcal gastadas</h3>
            </div>
            <div className="flex items-center gap-2">
              <input
                type="number"
                min="0"
                step="50"
                placeholder="0"
                value={burnedKcal || ''}
                onChange={handleBurnedChange}
                className="w-24 text-right text-sm font-medium bg-gray-50 border border-gray-200 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary-300 focus:border-primary-300 placeholder-gray-300"
              />
              <span className="text-sm text-gray-500">kcal</span>
            </div>
          </div>

        </div>

        {/* Meal sections */}
        {MEAL_ORDER.map((mealType) => (
          <MealSection
            key={mealType}
            mealType={mealType}
            entries={log.meals[mealType]}
            onAddEntry={() => openAddModal(mealType)}
            onAddRecipe={() => openRecipeModal(mealType)}
            onRemoveEntry={(entryId) => removeMealEntry(selectedDate, mealType, entryId)}
          />
        ))}

        {/* Create recipe button */}
        <button
          onClick={() => setCreateRecipeOpen(true)}
          className="w-full py-3 bg-amber-50 border-2 border-dashed border-amber-300 rounded-xl text-sm font-medium text-amber-700 hover:bg-amber-100 transition-colors"
        >
          🍳 Crear nueva comida elaborada
        </button>
      </div>

      <AddMealEntryModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        mealType={activeMealType}
        date={selectedDate}
      />

      <AddRecipeToMealModal
        isOpen={recipeModalOpen}
        onClose={() => setRecipeModalOpen(false)}
        mealType={activeMealType}
        date={selectedDate}
      />

      <CreateRecipeModal
        isOpen={createRecipeOpen}
        onClose={() => setCreateRecipeOpen(false)}
      />
    </div>
  );
}
