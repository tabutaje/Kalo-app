import { useEffect, useMemo, useState } from 'react';
import Modal from '@/components/common/Modal';
import { useApp } from '@/context/AppContext';

interface ShareToProfilesModalProps {
  isOpen: boolean;
  onClose: () => void;
  itemEmoji: string;
  itemTitle: string;
  itemSubtitle?: string;
  itemKind: 'product' | 'recipe';
  onShare: (targetProfileIds: string[]) => void;
}

export default function ShareToProfilesModal({
  isOpen,
  onClose,
  itemEmoji,
  itemTitle,
  itemSubtitle,
  itemKind,
  onShare,
}: ShareToProfilesModalProps) {
  const { profiles, activeProfileId } = useApp();
  const otherProfiles = useMemo(
    () => profiles.filter((p) => p.id !== activeProfileId),
    [profiles, activeProfileId]
  );
  const [selected, setSelected] = useState<Set<string>>(new Set());
  const [shared, setShared] = useState(false);

  useEffect(() => {
    if (!isOpen) return;
    setShared(false);
    setSelected(otherProfiles.length === 1 ? new Set([otherProfiles[0].id]) : new Set());
  }, [isOpen, otherProfiles]);

  function toggle(id: string) {
    setSelected((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  }

  function selectAll() {
    setSelected((prev) =>
      prev.size === otherProfiles.length ? new Set() : new Set(otherProfiles.map((p) => p.id))
    );
  }

  function handleShare() {
    if (selected.size === 0) return;
    onShare(Array.from(selected));
    setShared(true);
    setTimeout(() => onClose(), 1200);
  }

  const kindLabel = itemKind === 'product' ? 'producto' : 'receta';

  return (
    <Modal isOpen={isOpen} onClose={onClose} title={`Compartir ${kindLabel}`}>
      <div className="p-4 space-y-4">
        {/* Item summary */}
        <div className="flex items-center gap-3 bg-primary-50 rounded-xl p-3">
          <span className="text-3xl">{itemEmoji}</span>
          <div className="flex-1 min-w-0">
            <p className="font-medium text-gray-800 truncate">{itemTitle}</p>
            {itemSubtitle && <p className="text-xs text-gray-500 truncate">{itemSubtitle}</p>}
          </div>
        </div>

        {otherProfiles.length === 0 ? (
          <div className="text-center py-6">
            <span className="text-4xl">🧑‍🤝‍🧑</span>
            <p className="text-gray-700 mt-2 font-medium">Solo tienes un perfil</p>
            <p className="text-sm text-gray-400 mt-1">
              Para compartir un {kindLabel}, primero crea otro perfil desde el selector de perfiles.
            </p>
            <button
              onClick={onClose}
              className="mt-4 px-4 py-2 text-sm bg-gray-100 text-gray-600 rounded-lg hover:bg-gray-200"
            >
              Entendido
            </button>
          </div>
        ) : shared ? (
          <div className="text-center py-6">
            <span className="text-4xl">✅</span>
            <p className="text-gray-700 mt-2 font-medium">
              Compartido con {selected.size} {selected.size === 1 ? 'perfil' : 'perfiles'}
            </p>
          </div>
        ) : (
          <>
            <div>
              <div className="flex items-center justify-between mb-2">
                <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide">
                  Compartir con
                </p>
                {otherProfiles.length > 1 && (
                  <button
                    onClick={selectAll}
                    className="text-xs text-primary-600 hover:underline"
                  >
                    {selected.size === otherProfiles.length ? 'Deseleccionar todos' : 'Seleccionar todos'}
                  </button>
                )}
              </div>
              <div className="space-y-1">
                {otherProfiles.map((profile) => {
                  const isSel = selected.has(profile.id);
                  return (
                    <button
                      key={profile.id}
                      onClick={() => toggle(profile.id)}
                      className={`w-full flex items-center gap-3 p-3 rounded-lg border transition-colors ${
                        isSel
                          ? 'bg-primary-50 border-primary-300'
                          : 'bg-white border-gray-200 hover:bg-gray-50'
                      }`}
                    >
                      {profile.photoDataUrl ? (
                        <img
                          src={profile.photoDataUrl}
                          alt={profile.name}
                          className="w-10 h-10 rounded-full object-cover"
                        />
                      ) : (
                        <span className="text-2xl w-10 h-10 flex items-center justify-center rounded-full bg-gray-100">
                          {profile.emoji}
                        </span>
                      )}
                      <span className="flex-1 text-left font-medium text-gray-800 truncate">
                        {profile.name}
                      </span>
                      <span
                        className={`w-5 h-5 rounded border-2 flex items-center justify-center shrink-0 ${
                          isSel ? 'bg-primary-600 border-primary-600' : 'border-gray-300'
                        }`}
                      >
                        {isSel && <span className="text-white text-xs leading-none">✓</span>}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            <p className="text-xs text-gray-400 leading-relaxed">
              Si el otro perfil ya tiene un {kindLabel} con el mismo nombre{itemKind === 'product' ? ' y marca' : ''}, se actualizará con estos datos. Cada perfil sigue manteniendo su copia de forma independiente.
            </p>

            <button
              onClick={handleShare}
              disabled={selected.size === 0}
              className="w-full btn-primary py-3 disabled:opacity-40 disabled:cursor-not-allowed"
            >
              Compartir con {selected.size} {selected.size === 1 ? 'perfil' : 'perfiles'}
            </button>
          </>
        )}
      </div>
    </Modal>
  );
}
