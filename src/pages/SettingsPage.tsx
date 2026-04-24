import { useRef, useState } from 'react';
import { useApp } from '@/context/AppContext';
import Header from '@/components/layout/Header';
import { DietType, DIET_LABELS } from '@/types';
import { downloadCSV, exportToJSON } from '@/utils/storage';
import ProfileManagerModal from '@/components/profiles/ProfileManagerModal';

const DIET_OPTIONS = Object.entries(DIET_LABELS) as [DietType, string][];

export default function SettingsPage() {
  const { state, updateSettings, profiles, activeProfile } = useApp();
  const { settings } = state;
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [importMsg, setImportMsg] = useState<string | null>(null);
  const [profileManagerOpen, setProfileManagerOpen] = useState(false);

  const handleImportJSON = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (ev) => {
      try {
        const data = JSON.parse(ev.target?.result as string);
        if (data && data.settings && data.dailyLogs) {
          localStorage.setItem('calorapp_state', JSON.stringify(data));
          setImportMsg('Backup importado correctamente. Recarga la app para aplicar.');
        } else {
          setImportMsg('Archivo no valido: no contiene datos esperados.');
        }
      } catch {
        setImportMsg('Error al leer el archivo JSON.');
      }
    };
    reader.readAsText(file);
    e.target.value = '';
  };

  const inputClass =
    'w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-primary-500 outline-none';

  const totalDays = Object.keys(state.dailyLogs).length;
  const totalProducts = state.customProducts.length;
  const totalFavorites = state.favoriteProductIds.length;
  const totalBadges = state.badges.length;

  return (
    <div className="pb-20">
      <Header title="Ajustes" showLogo />
      <div className="max-w-lg mx-auto px-4 py-4 space-y-4">
        {/* Perfiles */}
        <div className="card">
          <div className="flex items-center justify-between mb-3">
            <h3 className="font-semibold text-gray-800">Perfiles de usuario</h3>
            <span className="text-xs text-gray-400">{profiles.length} {profiles.length === 1 ? 'perfil' : 'perfiles'}</span>
          </div>
          {activeProfile && (
            <div className="flex items-center gap-3 p-3 bg-primary-50 border border-primary-200 rounded-lg mb-3">
              <span className="text-3xl">{activeProfile.emoji}</span>
              <div className="flex-1 min-w-0">
                <p className="font-medium text-gray-800 truncate">{activeProfile.name}</p>
                <p className="text-xs text-gray-500">Perfil activo</p>
              </div>
            </div>
          )}
          <button
            onClick={() => setProfileManagerOpen(true)}
            className="w-full text-sm py-2 px-3 bg-primary-50 text-primary-700 border border-primary-200 rounded-lg hover:bg-primary-100 transition-colors font-medium"
          >
            Gestionar perfiles
          </button>
          <p className="text-xs text-gray-400 mt-2">
            Cambia entre perfiles desde el icono de la cabecera. Cada perfil tiene su seguimiento propio.
          </p>
        </div>

        {/* Perfil (nombre del perfil activo) */}
        <div className="card">
          <h3 className="font-semibold text-gray-800 mb-3">Tu nombre</h3>
          <label className="block text-sm text-gray-600 mb-1">Nombre</label>
          <input
            type="text"
            value={settings.name}
            onChange={(e) => updateSettings({ name: e.target.value })}
            placeholder="Tu nombre"
            className={inputClass}
          />
        </div>

        {/* Tipo de dieta */}
        <div className="card">
          <h3 className="font-semibold text-gray-800 mb-3">Tipo de dieta</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
            {DIET_OPTIONS.map(([value, label]) => (
              <button
                key={value}
                onClick={() => updateSettings({ dietType: value })}
                className={`text-sm p-2 rounded-lg border transition-colors ${
                  settings.dietType === value
                    ? 'bg-primary-100 border-primary-400 text-primary-700 font-semibold'
                    : 'border-gray-200 hover:bg-primary-50 hover:border-primary-300'
                }`}
              >
                {label}
              </button>
            ))}
          </div>
        </div>

        {/* Objetivos diarios */}
        <div className="card">
          <h3 className="font-semibold text-gray-800 mb-3">Objetivos diarios</h3>
          <div className="space-y-3">
            <div>
              <label className="block text-sm text-gray-600 mb-1">Calorias (kcal)</label>
              <input
                type="number"
                value={settings.dailyKcalGoal}
                onChange={(e) => updateSettings({ dailyKcalGoal: Number(e.target.value) || 0 })}
                className={inputClass}
              />
            </div>
            <div>
              <label className="block text-sm text-gray-600 mb-1">Proteinas (g)</label>
              <input
                type="number"
                value={settings.dailyProteinGoalG}
                onChange={(e) => updateSettings({ dailyProteinGoalG: Number(e.target.value) || 0 })}
                className={inputClass}
              />
            </div>
            <div>
              <label className="block text-sm text-gray-600 mb-1">Carbohidratos (g)</label>
              <input
                type="number"
                value={settings.dailyCarbsGoalG}
                onChange={(e) => updateSettings({ dailyCarbsGoalG: Number(e.target.value) || 0 })}
                className={inputClass}
              />
            </div>
            <div>
              <label className="block text-sm text-gray-600 mb-1">Grasas (g)</label>
              <input
                type="number"
                value={settings.dailyFatsGoalG}
                onChange={(e) => updateSettings({ dailyFatsGoalG: Number(e.target.value) || 0 })}
                className={inputClass}
              />
            </div>
            <div>
              <label className="block text-sm text-gray-600 mb-1">Agua (ml)</label>
              <input
                type="number"
                value={settings.waterGoalMl}
                onChange={(e) => updateSettings({ waterGoalMl: Number(e.target.value) || 0 })}
                className={inputClass}
              />
            </div>
          </div>
        </div>

        {/* Objetivos rapidos */}
        <div className="card">
          <h3 className="font-semibold text-gray-800 mb-3">Objetivos rapidos</h3>
          <div className="grid grid-cols-3 gap-2">
            {[
              { label: 'Perder peso', kcal: 1500, prot: 120, carbs: 150, fats: 50 },
              { label: 'Mantener', kcal: 2000, prot: 120, carbs: 250, fats: 65 },
              { label: 'Ganar masa', kcal: 2500, prot: 160, carbs: 300, fats: 80 },
            ].map((preset) => (
              <button
                key={preset.label}
                onClick={() =>
                  updateSettings({
                    dailyKcalGoal: preset.kcal,
                    dailyProteinGoalG: preset.prot,
                    dailyCarbsGoalG: preset.carbs,
                    dailyFatsGoalG: preset.fats,
                  })
                }
                className="text-sm p-2 border border-gray-200 rounded-lg hover:bg-primary-50 hover:border-primary-300 transition-colors"
              >
                <p className="font-medium">{preset.label}</p>
                <p className="text-xs text-gray-500">{preset.kcal} kcal</p>
              </button>
            ))}
          </div>
        </div>

        {/* Unidad de peso */}
        <div className="card">
          <h3 className="font-semibold text-gray-800 mb-3">Unidad de peso</h3>
          <div className="flex gap-2">
            {(['kg', 'lb'] as const).map((unit) => (
              <button
                key={unit}
                onClick={() => updateSettings({ weightUnit: unit })}
                className={`flex-1 text-sm py-2 rounded-lg border transition-colors ${
                  settings.weightUnit === unit
                    ? 'bg-primary-100 border-primary-400 text-primary-700 font-semibold'
                    : 'border-gray-200 hover:bg-primary-50 hover:border-primary-300'
                }`}
              >
                {unit === 'kg' ? 'Kilogramos (kg)' : 'Libras (lb)'}
              </button>
            ))}
          </div>
        </div>

        {/* Exportar / Importar datos */}
        <div className="card">
          <h3 className="font-semibold text-gray-800 mb-3">Exportar e importar datos</h3>
          <div className="space-y-3">
            <div className="flex gap-2">
              <button
                onClick={() => downloadCSV(state, activeProfile?.name)}
                className="flex-1 text-sm py-2 px-3 bg-green-50 text-green-700 border border-green-200 rounded-lg hover:bg-green-100 transition-colors font-medium"
              >
                Exportar CSV
              </button>
              <button
                onClick={() => exportToJSON(state, activeProfile?.name)}
                className="flex-1 text-sm py-2 px-3 bg-blue-50 text-blue-700 border border-blue-200 rounded-lg hover:bg-blue-100 transition-colors font-medium"
              >
                Exportar JSON
              </button>
            </div>
            <div>
              <button
                onClick={() => fileInputRef.current?.click()}
                className="w-full text-sm py-2 px-3 bg-amber-50 text-amber-700 border border-amber-200 rounded-lg hover:bg-amber-100 transition-colors font-medium"
              >
                Importar backup JSON
              </button>
              <input
                ref={fileInputRef}
                type="file"
                accept=".json"
                onChange={handleImportJSON}
                className="hidden"
              />
            </div>
            {importMsg && (
              <p className="text-sm text-center text-gray-600 bg-gray-50 rounded-lg p-2">
                {importMsg}
              </p>
            )}
          </div>
        </div>

        {/* Estadisticas totales */}
        <div className="card">
          <h3 className="font-semibold text-gray-800 mb-3">Tus estadisticas</h3>
          <div className="grid grid-cols-2 gap-3">
            <div className="bg-gray-50 rounded-lg p-3 text-center">
              <p className="text-2xl font-bold text-primary-600">{totalDays}</p>
              <p className="text-xs text-gray-500">Dias registrados</p>
            </div>
            <div className="bg-gray-50 rounded-lg p-3 text-center">
              <p className="text-2xl font-bold text-primary-600">{totalProducts}</p>
              <p className="text-xs text-gray-500">Productos creados</p>
            </div>
            <div className="bg-gray-50 rounded-lg p-3 text-center">
              <p className="text-2xl font-bold text-primary-600">{totalFavorites}</p>
              <p className="text-xs text-gray-500">Favoritos</p>
            </div>
            <div className="bg-gray-50 rounded-lg p-3 text-center">
              <p className="text-2xl font-bold text-primary-600">{totalBadges}</p>
              <p className="text-xs text-gray-500">Insignias ganadas</p>
            </div>
          </div>
        </div>
      </div>

      <ProfileManagerModal isOpen={profileManagerOpen} onClose={() => setProfileManagerOpen(false)} />
    </div>
  );
}
