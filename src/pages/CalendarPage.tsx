import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useApp } from '@/context/AppContext';
import Header from '@/components/layout/Header';
import { getMonthDays, getFirstDayOfWeek, getMonthName, today, getWeekDates, formatDateLong } from '@/utils/dates';
import { calculateDayTotal, calculateMealTotal, EMPTY_NUTRITION } from '@/utils/nutrition';
import { MEAL_LABELS, MealType } from '@/types';

const WEEKDAYS = ['L', 'M', 'X', 'J', 'V', 'S', 'D'];
const MEAL_ORDER: MealType[] = ['desayuno', 'almuerzo', 'comida', 'merienda', 'cena'];

export default function CalendarPage() {
  const now = new Date();
  const [year, setYear] = useState(now.getFullYear());
  const [month, setMonth] = useState(now.getMonth());
  const [selectedDay, setSelectedDay] = useState<string | null>(null);
  const [copyFromDate, setCopyFromDate] = useState<string | null>(null);
  const [copyToDate, setCopyToDate] = useState<string>(today());
  const [showCopyModal, setShowCopyModal] = useState(false);
  const [copySuccess, setCopySuccess] = useState<string | null>(null);

  const { state, setSelectedDate, getDailyLog, copyDayMeals } = useApp();
  const navigate = useNavigate();

  const days = getMonthDays(year, month);
  const firstDayOffset = getFirstDayOfWeek(year, month);
  const todayKey = today();
  const goal = state.settings.dailyKcalGoal;

  // --- Month navigation ---
  function prevMonth() {
    if (month === 0) { setMonth(11); setYear(year - 1); }
    else setMonth(month - 1);
  }
  function nextMonth() {
    if (month === 11) { setMonth(0); setYear(year + 1); }
    else setMonth(month + 1);
  }

  // --- Day status helpers ---
  function getDayStatus(dateKey: string): 'none' | 'green' | 'yellow' | 'red' {
    const log = state.dailyLogs[dateKey];
    if (!log) return 'none';
    const total = calculateDayTotal(log.meals);
    if (total.kcal === 0) return 'none';
    const ratio = total.kcal / goal;
    if (ratio <= 0.9) return 'green';
    if (ratio <= 1.1) return 'yellow';
    return 'red';
  }

  function getDayKcal(dateKey: string): number {
    const log = state.dailyLogs[dateKey];
    if (!log) return 0;
    return calculateDayTotal(log.meals).kcal;
  }

  function dayHasEntries(dateKey: string): boolean {
    const log = state.dailyLogs[dateKey];
    if (!log) return false;
    return Object.values(log.meals).some((entries) => entries.length > 0);
  }

  const statusColors = {
    none: '',
    green: 'bg-green-100 text-green-800',
    yellow: 'bg-amber-100 text-amber-800',
    red: 'bg-red-100 text-red-800',
  };

  // --- Click day: show summary or navigate ---
  function handleDayClick(dateKey: string) {
    if (dayHasEntries(dateKey)) {
      setSelectedDay(selectedDay === dateKey ? null : dateKey);
    } else {
      setSelectedDate(dateKey);
      navigate('/');
    }
  }

  // --- Copy day meals ---
  function openCopyModal(fromDate: string) {
    setCopyFromDate(fromDate);
    setCopyToDate(todayKey);
    setShowCopyModal(true);
    setCopySuccess(null);
  }

  function handleCopy() {
    if (!copyFromDate) return;
    copyDayMeals(copyFromDate, copyToDate);
    setShowCopyModal(false);
    setCopySuccess(`Comidas copiadas a ${formatDateLong(copyToDate)}`);
    setTimeout(() => setCopySuccess(null), 3000);
  }

  // --- Weekly comparison ---
  const weekDates = getWeekDates(todayKey);
  const todayLog = getDailyLog(todayKey);
  const todayTotal = calculateDayTotal(todayLog.meals);

  const weekTotals = weekDates
    .map((d) => {
      const log = state.dailyLogs[d];
      if (!log) return null;
      const t = calculateDayTotal(log.meals);
      return t.kcal > 0 ? t : null;
    })
    .filter(Boolean);

  const weekCount = weekTotals.length || 1;
  const weekAvg = {
    kcal: Math.round(weekTotals.reduce((s, t) => s + (t?.kcal ?? 0), 0) / weekCount),
    proteins: Math.round(weekTotals.reduce((s, t) => s + (t?.proteins ?? 0), 0) / weekCount * 10) / 10,
    carbs: Math.round(weekTotals.reduce((s, t) => s + (t?.carbs ?? 0), 0) / weekCount * 10) / 10,
    fats: Math.round(weekTotals.reduce((s, t) => s + (t?.fats ?? 0), 0) / weekCount * 10) / 10,
  };

  // --- Selected day summary data ---
  const selectedLog = selectedDay ? getDailyLog(selectedDay) : null;
  const selectedTotal = selectedLog ? calculateDayTotal(selectedLog.meals) : EMPTY_NUTRITION;

  return (
    <div className="pb-20">
      <Header title="Calendario" showLogo />
      <div className="max-w-lg mx-auto px-4 py-4">

        {/* Month navigation */}
        <div className="flex items-center justify-between mb-4">
          <button onClick={prevMonth} className="p-2 hover:bg-gray-100 rounded-lg text-gray-500">
            &#9664;
          </button>
          <h2 className="text-lg font-bold text-gray-800">
            {getMonthName(month)} {year}
          </h2>
          <button onClick={nextMonth} className="p-2 hover:bg-gray-100 rounded-lg text-gray-500">
            &#9654;
          </button>
        </div>

        {/* Weekday headers */}
        <div className="grid grid-cols-7 gap-1 mb-1">
          {WEEKDAYS.map((d) => (
            <div key={d} className="text-center text-xs font-medium text-gray-500 py-1">
              {d}
            </div>
          ))}
        </div>

        {/* Calendar grid */}
        <div className="grid grid-cols-7 gap-1">
          {Array.from({ length: firstDayOffset }).map((_, i) => (
            <div key={`empty-${i}`} />
          ))}
          {days.map((dateKey) => {
            const dayNum = Number(dateKey.split('-')[2]);
            const status = getDayStatus(dateKey);
            const kcal = getDayKcal(dateKey);
            const isTodayCell = dateKey === todayKey;
            const isSelected = dateKey === selectedDay;

            return (
              <button
                key={dateKey}
                onClick={() => handleDayClick(dateKey)}
                className={`aspect-square flex flex-col items-center justify-center rounded-lg text-sm transition-colors hover:ring-2 hover:ring-primary-300
                  ${isTodayCell ? 'ring-2 ring-primary-500 font-bold' : ''}
                  ${isSelected ? 'ring-2 ring-indigo-500 bg-indigo-50' : ''}
                  ${!isSelected && status !== 'none' ? statusColors[status] : ''}
                  ${!isSelected && status === 'none' ? 'hover:bg-gray-50' : ''}
                `}
              >
                <span>{dayNum}</span>
                {kcal > 0 && (
                  <span className="text-[10px] leading-tight">{kcal}</span>
                )}
              </button>
            );
          })}
        </div>

        {/* Legend */}
        <div className="flex justify-center gap-4 mt-4 text-xs text-gray-500">
          <div className="flex items-center gap-1">
            <span className="w-3 h-3 rounded bg-green-100" /> Bajo objetivo
          </div>
          <div className="flex items-center gap-1">
            <span className="w-3 h-3 rounded bg-amber-100" /> En objetivo
          </div>
          <div className="flex items-center gap-1">
            <span className="w-3 h-3 rounded bg-red-100" /> Sobre objetivo
          </div>
        </div>

        {/* Copy success toast */}
        {copySuccess && (
          <div className="mt-3 p-3 bg-green-50 border border-green-200 rounded-xl text-sm text-green-700 text-center">
            {copySuccess}
          </div>
        )}

        {/* --- Day Summary Card --- */}
        {selectedDay && selectedLog && (
          <div className="mt-4 bg-white border border-gray-200 rounded-2xl shadow-sm p-4 space-y-3">
            <div className="flex items-center justify-between">
              <h3 className="font-semibold text-gray-800">{formatDateLong(selectedDay)}</h3>
              <button
                onClick={() => setSelectedDay(null)}
                className="text-gray-400 hover:text-gray-600 text-lg leading-none"
              >
                &times;
              </button>
            </div>

            {/* Total kcal */}
            <div className="flex items-center justify-between bg-gray-50 rounded-xl px-3 py-2">
              <span className="text-sm text-gray-600">Total kcal</span>
              <span className="font-bold text-lg text-gray-800">{selectedTotal.kcal}</span>
            </div>

            {/* Macros row */}
            <div className="grid grid-cols-3 gap-2 text-center text-xs">
              <div className="bg-blue-50 rounded-lg p-2">
                <div className="font-semibold text-blue-700">{selectedTotal.proteins}g</div>
                <div className="text-blue-500">Prote</div>
              </div>
              <div className="bg-amber-50 rounded-lg p-2">
                <div className="font-semibold text-amber-700">{selectedTotal.carbs}g</div>
                <div className="text-amber-500">Carbs</div>
              </div>
              <div className="bg-red-50 rounded-lg p-2">
                <div className="font-semibold text-red-700">{selectedTotal.fats}g</div>
                <div className="text-red-500">Grasas</div>
              </div>
            </div>

            {/* Meals breakdown */}
            <div className="space-y-1">
              {MEAL_ORDER.map((meal) => {
                const entries = selectedLog.meals[meal];
                if (!entries || entries.length === 0) return null;
                const mealTotal = calculateMealTotal(entries);
                return (
                  <div key={meal} className="flex items-center justify-between text-sm py-1 border-b border-gray-100 last:border-0">
                    <span className="text-gray-600">{MEAL_LABELS[meal]}</span>
                    <div className="flex items-center gap-3 text-gray-500 text-xs">
                      <span>{entries.length} item{entries.length > 1 ? 's' : ''}</span>
                      <span className="font-medium text-gray-700">{mealTotal.kcal} kcal</span>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Weight if recorded */}
            {selectedLog.weight && (
              <div className="flex items-center justify-between text-sm bg-purple-50 rounded-xl px-3 py-2">
                <span className="text-purple-600">Peso registrado</span>
                <span className="font-semibold text-purple-700">
                  {selectedLog.weight} {state.settings.weightUnit}
                </span>
              </div>
            )}

            {/* Action buttons */}
            <div className="flex gap-2 pt-1">
              <button
                onClick={() => openCopyModal(selectedDay)}
                className="flex-1 py-2 px-3 bg-indigo-50 text-indigo-700 rounded-xl text-sm font-medium hover:bg-indigo-100 transition-colors"
              >
                Copiar dia
              </button>
              <button
                onClick={() => {
                  setSelectedDate(selectedDay);
                  navigate('/');
                }}
                className="flex-1 py-2 px-3 bg-primary-50 text-primary-700 rounded-xl text-sm font-medium hover:bg-primary-100 transition-colors"
              >
                Ver detalle
              </button>
            </div>
          </div>
        )}

        {/* --- Copy Modal --- */}
        {showCopyModal && copyFromDate && (
          <div className="fixed inset-0 bg-black/40 z-50 flex items-center justify-center px-4">
            <div className="bg-white rounded-2xl shadow-xl p-5 w-full max-w-sm space-y-4">
              <h3 className="font-bold text-gray-800 text-lg">Copiar dia</h3>
              <p className="text-sm text-gray-500">
                Copiar comidas de <span className="font-medium text-gray-700">{formatDateLong(copyFromDate)}</span> a:
              </p>
              <div className="space-y-2">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="radio"
                    name="copyTarget"
                    checked={copyToDate === todayKey}
                    onChange={() => setCopyToDate(todayKey)}
                    className="accent-indigo-600"
                  />
                  <span className="text-sm text-gray-700">Hoy ({formatDateLong(todayKey)})</span>
                </label>
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="radio"
                    name="copyTarget"
                    checked={copyToDate !== todayKey}
                    onChange={() => setCopyToDate('')}
                    className="accent-indigo-600"
                  />
                  <span className="text-sm text-gray-700">Otra fecha</span>
                </label>
                {copyToDate !== todayKey && (
                  <input
                    type="date"
                    value={copyToDate}
                    onChange={(e) => setCopyToDate(e.target.value)}
                    className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-300"
                  />
                )}
              </div>
              <div className="flex gap-2">
                <button
                  onClick={() => setShowCopyModal(false)}
                  className="flex-1 py-2 px-3 border border-gray-300 text-gray-600 rounded-xl text-sm font-medium hover:bg-gray-50 transition-colors"
                >
                  Cancelar
                </button>
                <button
                  onClick={handleCopy}
                  disabled={!copyToDate || copyToDate === copyFromDate}
                  className="flex-1 py-2 px-3 bg-indigo-600 text-white rounded-xl text-sm font-medium hover:bg-indigo-700 transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
                >
                  Copiar
                </button>
              </div>
            </div>
          </div>
        )}

        {/* --- Hoy vs Media Semanal comparison --- */}
        <div className="mt-6 bg-white border border-gray-200 rounded-2xl shadow-sm p-4">
          <h3 className="font-semibold text-gray-800 mb-3">Hoy vs. Media Semanal</h3>
          <div className="space-y-3">
            {/* Kcal */}
            <ComparisonRow
              label="Kcal"
              todayVal={todayTotal.kcal}
              avgVal={weekAvg.kcal}
              unit=""
              color="gray"
            />
            {/* Protein */}
            <ComparisonRow
              label="Proteina"
              todayVal={todayTotal.proteins}
              avgVal={weekAvg.proteins}
              unit="g"
              color="blue"
            />
            {/* Carbs */}
            <ComparisonRow
              label="Carbos"
              todayVal={todayTotal.carbs}
              avgVal={weekAvg.carbs}
              unit="g"
              color="amber"
            />
            {/* Fats */}
            <ComparisonRow
              label="Grasas"
              todayVal={todayTotal.fats}
              avgVal={weekAvg.fats}
              unit="g"
              color="red"
            />
          </div>
          <p className="text-[11px] text-gray-400 mt-3 text-center">
            Media basada en {weekTotals.length} dia{weekTotals.length !== 1 ? 's' : ''} con registro esta semana
          </p>
        </div>
      </div>
    </div>
  );
}

// --- Comparison Row Component ---
function ComparisonRow({
  label,
  todayVal,
  avgVal,
  unit,
  color,
}: {
  label: string;
  todayVal: number;
  avgVal: number;
  unit: string;
  color: string;
}) {
  const max = Math.max(todayVal, avgVal, 1);
  const todayPct = (todayVal / max) * 100;
  const avgPct = (avgVal / max) * 100;

  const barColors: Record<string, string> = {
    gray: 'bg-gray-400',
    blue: 'bg-blue-400',
    amber: 'bg-amber-400',
    red: 'bg-red-400',
  };
  const barBg: Record<string, string> = {
    gray: 'bg-gray-100',
    blue: 'bg-blue-100',
    amber: 'bg-amber-100',
    red: 'bg-red-100',
  };

  return (
    <div>
      <div className="flex items-center justify-between text-xs text-gray-500 mb-1">
        <span className="font-medium text-gray-700">{label}</span>
        <div className="flex gap-4">
          <span>Hoy: <span className="font-semibold text-gray-800">{todayVal}{unit}</span></span>
          <span>Media: <span className="font-semibold text-gray-800">{avgVal}{unit}</span></span>
        </div>
      </div>
      <div className="flex gap-1">
        <div className={`h-2 rounded-full flex-1 ${barBg[color]}`}>
          <div
            className={`h-2 rounded-full ${barColors[color]} transition-all`}
            style={{ width: `${todayPct}%` }}
          />
        </div>
        <div className={`h-2 rounded-full flex-1 ${barBg[color]} opacity-60`}>
          <div
            className={`h-2 rounded-full ${barColors[color]} opacity-60 transition-all`}
            style={{ width: `${avgPct}%` }}
          />
        </div>
      </div>
      <div className="flex gap-1 text-[10px] text-gray-400">
        <span className="flex-1">Hoy</span>
        <span className="flex-1">Media</span>
      </div>
    </div>
  );
}
