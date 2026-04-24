import { useState } from 'react';
import { useApp } from '@/context/AppContext';
import { useShell } from '@/context/ShellContext';
import ProfileManagerModal from './ProfileManagerModal';

function Avatar({ emoji, photoDataUrl, size = 24 }: { emoji: string; photoDataUrl?: string; size?: number }) {
  if (photoDataUrl) {
    return (
      <img
        src={photoDataUrl}
        alt=""
        style={{ width: size, height: size }}
        className="rounded-full object-cover shrink-0"
      />
    );
  }
  return <span className="text-base leading-none shrink-0">{emoji}</span>;
}

export default function ProfileSwitcher() {
  const { profiles, activeProfileId, switchProfile } = useApp();
  const { goToProfileSelector } = useShell();
  const [managerOpen, setManagerOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const active = profiles.find((p) => p.id === activeProfileId);

  if (!active) return null;

  return (
    <>
      <div className="relative">
        <button
          onClick={() => setDropdownOpen(!dropdownOpen)}
          className="flex items-center gap-1.5 px-2 py-1 rounded-full bg-white/80 hover:bg-white border border-gray-200 text-sm font-medium text-gray-700 transition-colors"
          title="Cambiar perfil"
        >
          <Avatar emoji={active.emoji} photoDataUrl={active.photoDataUrl} size={20} />
          <span className="max-w-[80px] truncate">{active.name}</span>
          <span className="text-[10px] text-gray-400">▼</span>
        </button>

        {dropdownOpen && (
          <>
            <div
              className="fixed inset-0 z-40"
              onClick={() => setDropdownOpen(false)}
            />
            <div className="absolute right-0 mt-1 w-56 bg-white border border-gray-200 rounded-lg shadow-lg z-50 overflow-hidden">
              <div className="px-3 py-2 border-b border-gray-100">
                <p className="text-xs font-semibold text-gray-500 uppercase">Perfiles</p>
              </div>
              <div className="max-h-64 overflow-y-auto">
                {profiles.map((p) => (
                  <button
                    key={p.id}
                    onClick={() => {
                      switchProfile(p.id);
                      setDropdownOpen(false);
                    }}
                    className={`w-full text-left flex items-center gap-2 px-3 py-2 hover:bg-gray-50 transition-colors ${
                      p.id === activeProfileId ? 'bg-primary-50' : ''
                    }`}
                  >
                    <Avatar emoji={p.emoji} photoDataUrl={p.photoDataUrl} size={28} />
                    <span className="flex-1 text-sm font-medium text-gray-800 truncate">
                      {p.name}
                    </span>
                    {p.id === activeProfileId && (
                      <span className="text-primary-600 text-sm">✓</span>
                    )}
                  </button>
                ))}
              </div>
              <button
                onClick={() => {
                  setDropdownOpen(false);
                  goToProfileSelector();
                }}
                className="w-full text-left px-3 py-2 text-sm font-medium text-primary-600 hover:bg-primary-50 border-t border-gray-100"
              >
                👥 Cambiar de usuario
              </button>
              <button
                onClick={() => {
                  setDropdownOpen(false);
                  setManagerOpen(true);
                }}
                className="w-full text-left px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 border-t border-gray-100"
              >
                ⚙️ Gestionar perfiles
              </button>
            </div>
          </>
        )}
      </div>

      <ProfileManagerModal isOpen={managerOpen} onClose={() => setManagerOpen(false)} />
    </>
  );
}
