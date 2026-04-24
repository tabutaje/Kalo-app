import { useMemo } from 'react';
import { useApp } from '@/context/AppContext';
import Header from '@/components/layout/Header';
import ProgressBar from '@/components/common/ProgressBar';
import { ALL_BADGES } from '@/data/badges';
import { calculateDayTotal, EMPTY_NUTRITION } from '@/utils/nutrition';
import { today, getWeekDates, formatDateShort, toDateKey } from '@/utils/dates';

export default function DashboardPage() {
  const { getDailyLog, state } = useApp();
  const { settings, badges, currentStreak, longestStreak } = state;
  const todayLog = getDailyLog(today());
  const dayTotal = calculateDayTotal(todayLog.meals);

  // --- Week data ---
  const weekData = useMemo(() => {
    const dates = getWeekDates(today());
    return dates.map((d) => {
      const log = state.dailyLogs[d];
      const total = log ? calculateDayTotal(log.meals) : EMPTY_NUTRITION;
      return { date: d, label: formatDateShort(d), ...total };
    });
  }, [state.dailyLogs]);

  const weekAvg = useMemo(() => {
    const daysWithData = weekData.filter((d) => d.kcal > 0);
    if (daysWithData.length === 0) return 0;
    return Math.round(daysWithData.reduce((a, d) => a + d.kcal, 0) / daysWithData.length);
  }, [weekData]);

  const maxWeekKcal = Math.max(...weekData.map((d) => d.kcal), settings.dailyKcalGoal);

  // --- Weekly balance ---
  const weekBalance = useMemo(() => {
    const dates = getWeekDates(today());
    let totalConsumed = 0;
    let totalBurned = 0;
    let daysWithData = 0;
    for (const d of dates) {
      const log = state.dailyLogs[d];
      if (!log) continue;
      const dayTot = calculateDayTotal(log.meals);
      if (dayTot.kcal > 0 || (log.burnedKcal ?? 0) > 0) {
        totalConsumed += dayTot.kcal;
        totalBurned += log.burnedKcal ?? 0;
        daysWithData++;
      }
    }
    return { totalConsumed, totalBurned, balance: totalConsumed - totalBurned, daysWithData };
  }, [state.dailyLogs]);

  // --- Monthly balance (current month) ---
  const monthBalance = useMemo(() => {
    const now = new Date();
    const year = now.getFullYear();
    const month = now.getMonth();
    let totalConsumed = 0;
    let totalBurned = 0;
    let daysWithData = 0;
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    for (let day = 1; day <= daysInMonth; day++) {
      const key = toDateKey(new Date(year, month, day));
      const log = state.dailyLogs[key];
      if (!log) continue;
      const dayTot = calculateDayTotal(log.meals);
      if (dayTot.kcal > 0 || (log.burnedKcal ?? 0) > 0) {
        totalConsumed += dayTot.kcal;
        totalBurned += log.burnedKcal ?? 0;
        daysWithData++;
      }
    }
    return { totalConsumed, totalBurned, balance: totalConsumed - totalBurned, daysWithData };
  }, [state.dailyLogs]);

  // --- Macro percentages ---
  const macroTotal = dayTotal.proteins + dayTotal.carbs + dayTotal.fats;
  const proteinPct = macroTotal > 0 ? Math.round((dayTotal.proteins / macroTotal) * 100) : 0;
  const carbsPct = macroTotal > 0 ? Math.round((dayTotal.carbs / macroTotal) * 100) : 0;
  const fatsPct = macroTotal > 0 ? 100 - proteinPct - carbsPct : 0;

  // --- Macro alerts ---
  const macroAlerts = useMemo(() => {
    const alerts: { label: string; message: string; type: 'over' | 'under' }[] = [];
    const checks = [
      { label: 'Proteinas', value: dayTotal.proteins, goal: settings.dailyProteinGoalG },
      { label: 'Carbohidratos', value: dayTotal.carbs, goal: settings.dailyCarbsGoalG },
      { label: 'Grasas', value: dayTotal.fats, goal: settings.dailyFatsGoalG },
    ] as const;

    for (const c of checks) {
      if (c.goal <= 0) continue;
      const ratio = c.value / c.goal;
      if (ratio > 1.2) {
        alerts.push({ label: c.label, message: `${c.label}: ${c.value}g superan el 120% de tu objetivo (${c.goal}g)`, type: 'over' });
      } else if (ratio < 0.5 && dayTotal.kcal > 0) {
        alerts.push({ label: c.label, message: `${c.label}: ${c.value}g estan por debajo del 50% de tu objetivo (${c.goal}g)`, type: 'under' });
      }
    }
    return alerts;
  }, [dayTotal, settings]);

  // --- Weight progress (last 30 days) ---
  const weightData = useMemo(() => {
    const entries: { date: string; label: string; weight: number }[] = [];
    const now = new Date(today());
    for (let i = 29; i >= 0; i--) {
      const d = new Date(now);
      d.setDate(d.getDate() - i);
      const key = d.toISOString().slice(0, 10);
      const log = state.dailyLogs[key];
      if (log?.weight) {
        entries.push({ date: key, label: formatDateShort(key), weight: log.weight });
      }
    }
    return entries;
  }, [state.dailyLogs]);

  const weightMin = weightData.length > 0 ? Math.min(...weightData.map((w) => w.weight)) : 0;
  const weightMax = weightData.length > 0 ? Math.max(...weightData.map((w) => w.weight)) : 0;
  const weightRange = weightMax - weightMin || 1;

  // --- Badges ---
  const earnedSet = new Set(badges);
  const earnedBadges = ALL_BADGES.filter((b) => earnedSet.has(b.id));
  const lockedBadges = ALL_BADGES.filter((b) => !earnedSet.has(b.id));

  return (
    <div className="pb-20">
      <Header title="Resumen" showLogo />
      <div className="max-w-lg mx-auto px-4 py-4 space-y-4">

        {/* Streak banner */}
        <div className="card bg-gradient-to-r from-orange-500 to-amber-500 text-white">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-xs font-medium opacity-80">Racha actual</p>
              <p className="text-3xl font-bold">{currentStreak} dias</p>
            </div>
            <div className="text-4xl">&#128293;</div>
          </div>
          {longestStreak > 0 && (
            <p className="text-xs opacity-75 mt-1">Mejor racha: {longestStreak} dias</p>
          )}
        </div>

        {/* Today's summary + balance */}
        {(() => {
          const burned = todayLog.burnedKcal ?? 0;
          const balance = dayTotal.kcal - burned;
          return (
            <div className="card">
              <h3 className="text-sm font-medium text-gray-500 mb-3">Hoy</h3>
              <div className="grid grid-cols-2 gap-3">
                <div className="bg-orange-50 rounded-lg p-3 text-center">
                  <p className="text-2xl font-bold text-orange-600">{dayTotal.kcal}</p>
                  <p className="text-xs text-gray-500">kcal consumidas</p>
                </div>
                <div className="bg-primary-50 rounded-lg p-3 text-center">
                  <p className="text-2xl font-bold text-primary-600">
                    {Math.max(0, settings.dailyKcalGoal - dayTotal.kcal)}
                  </p>
                  <p className="text-xs text-gray-500">kcal restantes</p>
                </div>
              </div>

              {/* Caloric balance */}
              {(dayTotal.kcal > 0 || burned > 0) && (
                <div className={`mt-3 rounded-xl p-3 text-center ${balance > 0 ? 'bg-red-50' : balance < 0 ? 'bg-green-50' : 'bg-gray-50'}`}>
                  <div className="flex items-center justify-center gap-4">
                    <div className="text-center">
                      <p className="text-xs text-gray-500">Consumidas</p>
                      <p className="font-bold text-gray-700">{dayTotal.kcal}</p>
                    </div>
                    <span className="text-gray-400 text-lg">−</span>
                    <div className="text-center">
                      <p className="text-xs text-gray-500">Gastadas</p>
                      <p className="font-bold text-gray-700">{burned}</p>
                    </div>
                    <span className="text-gray-400 text-lg">=</span>
                    <div className="text-center">
                      <p className="text-xs text-gray-500">Balance</p>
                      <p className={`font-bold text-lg ${balance > 0 ? 'text-red-600' : balance < 0 ? 'text-green-600' : 'text-gray-600'}`}>
                        {balance > 0 ? '+' : ''}{balance}
                      </p>
                    </div>
                  </div>
                  <p className={`text-xs mt-2 font-medium ${balance > 0 ? 'text-red-500' : balance < 0 ? 'text-green-500' : 'text-gray-500'}`}>
                    {balance > 0 ? 'Superávit calórico' : balance < 0 ? 'Déficit calórico' : 'Equilibrado'}
                  </p>
                </div>
              )}
            </div>
          );
        })()}

        {/* Weekly balance */}
        {weekBalance.daysWithData > 0 && (
          <div className="card">
            <h3 className="text-sm font-medium text-gray-500 mb-3">Esta semana</h3>
            <div className="grid grid-cols-3 gap-2 text-center mb-3">
              <div className="bg-orange-50 rounded-lg p-2">
                <p className="text-lg font-bold text-orange-600">{weekBalance.totalConsumed.toLocaleString('es')}</p>
                <p className="text-xs text-gray-500">Consumidas</p>
              </div>
              <div className="bg-blue-50 rounded-lg p-2">
                <p className="text-lg font-bold text-blue-600">{weekBalance.totalBurned.toLocaleString('es')}</p>
                <p className="text-xs text-gray-500">Gastadas</p>
              </div>
              <div className={`rounded-lg p-2 ${weekBalance.balance > 0 ? 'bg-red-50' : weekBalance.balance < 0 ? 'bg-green-50' : 'bg-gray-50'}`}>
                <p className={`text-lg font-bold ${weekBalance.balance > 0 ? 'text-red-600' : weekBalance.balance < 0 ? 'text-green-600' : 'text-gray-600'}`}>
                  {weekBalance.balance > 0 ? '+' : ''}{weekBalance.balance.toLocaleString('es')}
                </p>
                <p className="text-xs text-gray-500">Balance</p>
              </div>
            </div>
            <p className={`text-xs text-center font-medium ${weekBalance.balance > 0 ? 'text-red-500' : weekBalance.balance < 0 ? 'text-green-500' : 'text-gray-500'}`}>
              {weekBalance.balance > 0 ? '📈 Superávit semanal' : weekBalance.balance < 0 ? '📉 Déficit semanal' : '⚖️ Equilibrado'} · {weekBalance.daysWithData} {weekBalance.daysWithData === 1 ? 'día' : 'días'} registrados
            </p>
          </div>
        )}

        {/* Monthly balance */}
        {monthBalance.daysWithData > 0 && (
          <div className="card">
            <h3 className="text-sm font-medium text-gray-500 mb-3">Este mes</h3>
            <div className="grid grid-cols-3 gap-2 text-center mb-3">
              <div className="bg-orange-50 rounded-lg p-2">
                <p className="text-lg font-bold text-orange-600">{monthBalance.totalConsumed.toLocaleString('es')}</p>
                <p className="text-xs text-gray-500">Consumidas</p>
              </div>
              <div className="bg-blue-50 rounded-lg p-2">
                <p className="text-lg font-bold text-blue-600">{monthBalance.totalBurned.toLocaleString('es')}</p>
                <p className="text-xs text-gray-500">Gastadas</p>
              </div>
              <div className={`rounded-lg p-2 ${monthBalance.balance > 0 ? 'bg-red-50' : monthBalance.balance < 0 ? 'bg-green-50' : 'bg-gray-50'}`}>
                <p className={`text-lg font-bold ${monthBalance.balance > 0 ? 'text-red-600' : monthBalance.balance < 0 ? 'text-green-600' : 'text-gray-600'}`}>
                  {monthBalance.balance > 0 ? '+' : ''}{monthBalance.balance.toLocaleString('es')}
                </p>
                <p className="text-xs text-gray-500">Balance</p>
              </div>
            </div>
            <p className={`text-xs text-center font-medium ${monthBalance.balance > 0 ? 'text-red-500' : monthBalance.balance < 0 ? 'text-green-500' : 'text-gray-500'}`}>
              {monthBalance.balance > 0 ? '📈 Superávit mensual' : monthBalance.balance < 0 ? '📉 Déficit mensual' : '⚖️ Equilibrado'} · {monthBalance.daysWithData} {monthBalance.daysWithData === 1 ? 'día' : 'días'} registrados
            </p>
          </div>
        )}

        {/* Macro alerts */}
        {macroAlerts.length > 0 && (
          <div className="space-y-2">
            {macroAlerts.map((alert) => (
              <div
                key={alert.label}
                className={`rounded-lg px-4 py-3 text-sm font-medium ${
                  alert.type === 'over'
                    ? 'bg-red-50 text-red-700 border border-red-200'
                    : 'bg-yellow-50 text-yellow-700 border border-yellow-200'
                }`}
              >
                {alert.type === 'over' ? '⚠️' : '⬇️'} {alert.message}
              </div>
            ))}
          </div>
        )}

        {/* Macro goals */}
        <div className="card">
          <h3 className="text-sm font-medium text-gray-500 mb-3">Macros de hoy</h3>
          <div className="space-y-3">
            <div>
              <div className="flex justify-between text-sm mb-1">
                <span className="text-blue-600 font-medium">Proteinas</span>
                <span>{dayTotal.proteins}g / {settings.dailyProteinGoalG}g</span>
              </div>
              <ProgressBar value={dayTotal.proteins} max={settings.dailyProteinGoalG} color="bg-blue-500" showLabel={false} size="sm" />
            </div>
            <div>
              <div className="flex justify-between text-sm mb-1">
                <span className="text-amber-600 font-medium">Carbohidratos</span>
                <span>{dayTotal.carbs}g / {settings.dailyCarbsGoalG}g</span>
              </div>
              <ProgressBar value={dayTotal.carbs} max={settings.dailyCarbsGoalG} color="bg-amber-500" showLabel={false} size="sm" />
            </div>
            <div>
              <div className="flex justify-between text-sm mb-1">
                <span className="text-red-600 font-medium">Grasas</span>
                <span>{dayTotal.fats}g / {settings.dailyFatsGoalG}g</span>
              </div>
              <ProgressBar value={dayTotal.fats} max={settings.dailyFatsGoalG} color="bg-red-500" showLabel={false} size="sm" />
            </div>
          </div>

          {/* Macro breakdown bar */}
          {macroTotal > 0 && (
            <div className="mt-4">
              <p className="text-xs text-gray-500 mb-1">Distribucion</p>
              <div className="flex h-4 rounded-full overflow-hidden">
                <div className="bg-blue-500" style={{ width: `${proteinPct}%` }} />
                <div className="bg-amber-500" style={{ width: `${carbsPct}%` }} />
                <div className="bg-red-500" style={{ width: `${fatsPct}%` }} />
              </div>
              <div className="flex justify-between text-xs mt-1 text-gray-500">
                <span className="text-blue-600">P: {proteinPct}%</span>
                <span className="text-amber-600">C: {carbsPct}%</span>
                <span className="text-red-600">G: {fatsPct}%</span>
              </div>
            </div>
          )}
        </div>

        {/* Weekly chart */}
        <div className="card">
          <div className="flex items-center justify-between mb-3">
            <h3 className="text-sm font-medium text-gray-500">Esta semana</h3>
            {weekAvg > 0 && (
              <span className="text-xs text-gray-400">Media: {weekAvg} kcal/dia</span>
            )}
          </div>
          <div className="flex items-end justify-between gap-1 h-32">
            {weekData.map((d) => {
              const height = maxWeekKcal > 0 ? (d.kcal / maxWeekKcal) * 100 : 0;
              const isToday = d.date === today();
              const isOverGoal = d.kcal > settings.dailyKcalGoal;
              return (
                <div key={d.date} className="flex-1 flex flex-col items-center">
                  <div className="w-full flex flex-col items-center justify-end h-24">
                    {d.kcal > 0 && (
                      <span className="text-[10px] text-gray-500 mb-0.5">{d.kcal}</span>
                    )}
                    <div
                      className={`w-full max-w-8 rounded-t transition-all ${
                        isOverGoal ? 'bg-red-400' : isToday ? 'bg-primary-500' : 'bg-primary-300'
                      }`}
                      style={{ height: `${Math.max(height, d.kcal > 0 ? 4 : 0)}%` }}
                    />
                  </div>
                  <span className={`text-xs mt-1 ${isToday ? 'font-bold text-primary-600' : 'text-gray-400'}`}>
                    {d.label}
                  </span>
                </div>
              );
            })}
          </div>
          {/* Goal line reference */}
          <div className="flex items-center gap-2 mt-2 text-xs text-gray-400">
            <span className="w-4 h-0.5 bg-gray-300" /> Objetivo: {settings.dailyKcalGoal} kcal
          </div>
        </div>

        {/* Weight progress chart */}
        <div className="card">
          <h3 className="text-sm font-medium text-gray-500 mb-3">Peso - ultimos 30 dias</h3>
          {weightData.length === 0 ? (
            <p className="text-sm text-gray-400 text-center py-4">
              Sin registros de peso aun. Agrega tu peso desde el registro diario.
            </p>
          ) : (
            <>
              <div className="flex items-end gap-[2px] h-32">
                {weightData.map((w, i) => {
                  const normalised = ((w.weight - weightMin) / weightRange) * 80 + 20;
                  return (
                    <div
                      key={w.date}
                      className="flex-1 flex flex-col items-center justify-end"
                      title={`${w.label}: ${w.weight} ${settings.weightUnit}`}
                    >
                      <div
                        className={`w-full max-w-3 rounded-t ${
                          i === weightData.length - 1 ? 'bg-primary-600' : 'bg-primary-300'
                        }`}
                        style={{ height: `${normalised}%` }}
                      />
                    </div>
                  );
                })}
              </div>
              <div className="flex justify-between text-xs text-gray-400 mt-2">
                <span>{weightData[0].label}</span>
                <span>
                  Actual: {weightData[weightData.length - 1].weight} {settings.weightUnit}
                </span>
                <span>{weightData[weightData.length - 1].label}</span>
              </div>
              {weightData.length >= 2 && (
                <p className="text-xs text-center mt-1 text-gray-500">
                  {(() => {
                    const diff = +(weightData[weightData.length - 1].weight - weightData[0].weight).toFixed(1);
                    if (diff > 0) return `+${diff} ${settings.weightUnit} en el periodo`;
                    if (diff < 0) return `${diff} ${settings.weightUnit} en el periodo`;
                    return 'Sin cambios en el periodo';
                  })()}
                </p>
              )}
            </>
          )}
        </div>

        {/* Logros (Badges) */}
        <div className="card">
          <h3 className="text-sm font-medium text-gray-500 mb-3">
            Logros ({earnedBadges.length}/{ALL_BADGES.length})
          </h3>

          {earnedBadges.length > 0 && (
            <div className="mb-4">
              <p className="text-xs text-gray-400 mb-2">Desbloqueados</p>
              <div className="grid grid-cols-3 gap-2">
                {earnedBadges.map((b) => (
                  <div key={b.id} className="bg-primary-50 border border-primary-200 rounded-lg p-2 text-center">
                    <span className="text-2xl">{b.emoji}</span>
                    <p className="text-xs font-medium text-primary-700 mt-1 leading-tight">{b.name}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {lockedBadges.length > 0 && (
            <div>
              <p className="text-xs text-gray-400 mb-2">Bloqueados</p>
              <div className="grid grid-cols-3 gap-2">
                {lockedBadges.map((b) => (
                  <div key={b.id} className="bg-gray-50 border border-gray-200 rounded-lg p-2 text-center opacity-50">
                    <span className="text-2xl grayscale">&#128274;</span>
                    <p className="text-xs font-medium text-gray-500 mt-1 leading-tight">{b.name}</p>
                    <p className="text-[10px] text-gray-400 leading-tight">{b.description}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

      </div>
    </div>
  );
}
