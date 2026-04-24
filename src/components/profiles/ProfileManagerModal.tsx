import { useRef, useState } from 'react';
import Modal from '@/components/common/Modal';
import { useApp } from '@/context/AppContext';

const PROFILE_EMOJIS = [
  '👤', '👨', '👩', '👧', '👦', '🧑', '👶',
  '💪', '🏃', '🧘', '🏋️', '⚽', '🚴', '🏊',
  '🥗', '🍎', '🌱', '🔥', '⭐', '🎯', '🏆',
  '🐱', '🐶', '🦁', '🐻', '🐼', '🦊', '🐯',
];

interface ProfileManagerModalProps {
  isOpen: boolean;
  onClose: () => void;
}

function AvatarPreview({ emoji, photoDataUrl, size = 48 }: { emoji: string; photoDataUrl?: string; size?: number }) {
  if (photoDataUrl) {
    return (
      <img
        src={photoDataUrl}
        alt=""
        style={{ width: size, height: size }}
        className="rounded-xl object-cover"
      />
    );
  }
  return <span style={{ fontSize: size * 0.6, lineHeight: 1 }}>{emoji}</span>;
}

export default function ProfileManagerModal({ isOpen, onClose }: ProfileManagerModalProps) {
  const {
    profiles,
    activeProfileId,
    addProfile,
    renameProfile,
    removeProfile,
    switchProfile,
    updateProfilePhoto,
  } = useApp();
  const [editingId, setEditingId] = useState<string | null>(null);
  const [editName, setEditName] = useState('');
  const [editEmoji, setEditEmoji] = useState('👤');
  const [confirmDelete, setConfirmDelete] = useState<string | null>(null);
  const [creating, setCreating] = useState(false);
  const [newName, setNewName] = useState('');
  const [newEmoji, setNewEmoji] = useState('👤');
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [photoTargetId, setPhotoTargetId] = useState<string | null>(null);

  function startEdit(id: string) {
    const p = profiles.find((x) => x.id === id);
    if (!p) return;
    setEditingId(id);
    setEditName(p.name);
    setEditEmoji(p.emoji);
  }

  function saveEdit() {
    if (!editingId || !editName.trim()) return;
    renameProfile(editingId, editName.trim(), editEmoji);
    setEditingId(null);
  }

  function handleCreate() {
    if (!newName.trim()) return;
    addProfile(newName.trim(), newEmoji);
    setCreating(false);
    setNewName('');
    setNewEmoji('👤');
    onClose();
  }

  function handleDelete(id: string) {
    removeProfile(id);
    setConfirmDelete(null);
  }

  function openPhotoPicker(profileId: string) {
    setPhotoTargetId(profileId);
    fileInputRef.current?.click();
  }

  function handlePhotoChange(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    const target = photoTargetId;
    if (fileInputRef.current) fileInputRef.current.value = '';
    setPhotoTargetId(null);
    if (!file || !target) return;

    if (file.size > 4 * 1024 * 1024) {
      alert('La imagen es demasiado grande (máx. 4 MB).');
      return;
    }

    const reader = new FileReader();
    reader.onload = () => {
      const dataUrl = reader.result as string;
      const img = new Image();
      img.onload = () => {
        const MAX = 256;
        const ratio = Math.min(MAX / img.width, MAX / img.height, 1);
        const w = Math.round(img.width * ratio);
        const h = Math.round(img.height * ratio);
        const canvas = document.createElement('canvas');
        canvas.width = w;
        canvas.height = h;
        const ctx = canvas.getContext('2d');
        if (!ctx) {
          updateProfilePhoto(target, dataUrl);
          return;
        }
        ctx.drawImage(img, 0, 0, w, h);
        const compact = canvas.toDataURL('image/jpeg', 0.85);
        updateProfilePhoto(target, compact);
      };
      img.onerror = () => updateProfilePhoto(target, dataUrl);
      img.src = dataUrl;
    };
    reader.readAsDataURL(file);
  }

  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Gestionar perfiles">
      <input
        ref={fileInputRef}
        type="file"
        accept="image/*"
        className="hidden"
        onChange={handlePhotoChange}
      />
      <div className="p-4 space-y-4">
        {/* Lista de perfiles */}
        <div className="space-y-2">
          {profiles.map((p) => {
            const isActive = p.id === activeProfileId;
            const isEditing = editingId === p.id;
            const isConfirming = confirmDelete === p.id;

            if (isEditing) {
              return (
                <div key={p.id} className="border-2 border-primary-300 rounded-xl p-3 space-y-2 bg-primary-50">
                  <div className="flex items-center gap-3">
                    <div className="w-14 h-14 rounded-xl bg-white flex items-center justify-center overflow-hidden shrink-0">
                      <AvatarPreview emoji={editEmoji} photoDataUrl={p.photoDataUrl} size={56} />
                    </div>
                    <div className="flex-1 flex flex-col gap-1">
                      <button
                        onClick={() => openPhotoPicker(p.id)}
                        className="text-xs py-1.5 px-2 bg-white text-gray-700 border border-gray-200 rounded-lg hover:bg-gray-50"
                      >
                        📷 Subir foto
                      </button>
                      {p.photoDataUrl && (
                        <button
                          onClick={() => updateProfilePhoto(p.id, undefined)}
                          className="text-xs py-1.5 px-2 bg-white text-gray-700 border border-gray-200 rounded-lg hover:bg-gray-50"
                        >
                          Quitar foto
                        </button>
                      )}
                    </div>
                  </div>
                  <input
                    type="text"
                    value={editName}
                    onChange={(e) => setEditName(e.target.value)}
                    placeholder="Nombre del perfil"
                    className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-primary-500 outline-none"
                    autoFocus
                  />
                  <div>
                    <p className="text-xs text-gray-600 mb-1">Icono (se usa si no hay foto)</p>
                    <div className="flex flex-wrap gap-1 max-h-28 overflow-y-auto">
                      {PROFILE_EMOJIS.map((e) => (
                        <button
                          key={e}
                          onClick={() => setEditEmoji(e)}
                          className={`text-xl w-9 h-9 rounded-lg flex items-center justify-center transition-colors ${
                            editEmoji === e ? 'bg-primary-100 ring-2 ring-primary-500' : 'bg-white hover:bg-gray-100'
                          }`}
                        >
                          {e}
                        </button>
                      ))}
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <button
                      onClick={() => setEditingId(null)}
                      className="flex-1 text-sm py-2 border border-gray-300 rounded-lg text-gray-600 hover:bg-white"
                    >
                      Cancelar
                    </button>
                    <button
                      onClick={saveEdit}
                      disabled={!editName.trim()}
                      className="flex-1 text-sm py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 disabled:opacity-40"
                    >
                      Guardar
                    </button>
                  </div>
                </div>
              );
            }

            return (
              <div
                key={p.id}
                className={`flex items-center gap-3 p-3 rounded-xl border ${
                  isActive ? 'border-primary-400 bg-primary-50' : 'border-gray-200 bg-white'
                }`}
              >
                <div className="w-12 h-12 rounded-xl bg-gray-50 flex items-center justify-center overflow-hidden shrink-0">
                  <AvatarPreview emoji={p.emoji} photoDataUrl={p.photoDataUrl} size={48} />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="font-medium text-gray-800 truncate">{p.name}</p>
                  <p className="text-xs text-gray-500">
                    {Object.keys(p.state.dailyLogs).length} días · {p.state.customProducts.length} productos · {p.state.recipes.length} recetas
                  </p>
                </div>
                {isConfirming ? (
                  <div className="flex gap-1">
                    <button
                      onClick={() => handleDelete(p.id)}
                      className="text-xs px-2 py-1 bg-red-500 text-white rounded-lg font-medium"
                    >
                      Borrar
                    </button>
                    <button
                      onClick={() => setConfirmDelete(null)}
                      className="text-xs px-2 py-1 bg-gray-100 text-gray-600 rounded-lg"
                    >
                      No
                    </button>
                  </div>
                ) : (
                  <div className="flex gap-0.5">
                    {!isActive && (
                      <button
                        onClick={() => switchProfile(p.id)}
                        className="text-gray-400 hover:text-primary-500 p-1.5"
                        title="Activar"
                      >
                        ✓
                      </button>
                    )}
                    <button
                      onClick={() => startEdit(p.id)}
                      className="text-gray-400 hover:text-primary-500 p-1.5"
                      title="Editar"
                    >
                      ✏️
                    </button>
                    {profiles.length > 1 && (
                      <button
                        onClick={() => setConfirmDelete(p.id)}
                        className="text-gray-400 hover:text-red-500 p-1.5"
                        title="Eliminar"
                      >
                        🗑️
                      </button>
                    )}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Create new profile */}
        {creating ? (
          <div className="border-2 border-primary-300 rounded-xl p-3 space-y-2 bg-primary-50">
            <p className="text-sm font-semibold text-gray-700">Nuevo perfil</p>
            <input
              type="text"
              value={newName}
              onChange={(e) => setNewName(e.target.value)}
              placeholder="Nombre (ej: María)"
              className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-primary-500 outline-none"
              autoFocus
            />
            <div>
              <p className="text-xs text-gray-600 mb-1">Icono</p>
              <div className="flex flex-wrap gap-1 max-h-28 overflow-y-auto">
                {PROFILE_EMOJIS.map((e) => (
                  <button
                    key={e}
                    onClick={() => setNewEmoji(e)}
                    className={`text-xl w-9 h-9 rounded-lg flex items-center justify-center transition-colors ${
                      newEmoji === e ? 'bg-primary-100 ring-2 ring-primary-500' : 'bg-white hover:bg-gray-100'
                    }`}
                  >
                    {e}
                  </button>
                ))}
              </div>
            </div>
            <div className="flex gap-2">
              <button
                onClick={() => { setCreating(false); setNewName(''); setNewEmoji('👤'); }}
                className="flex-1 text-sm py-2 border border-gray-300 rounded-lg text-gray-600 hover:bg-white"
              >
                Cancelar
              </button>
              <button
                onClick={handleCreate}
                disabled={!newName.trim()}
                className="flex-1 text-sm py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 disabled:opacity-40"
              >
                Crear perfil
              </button>
            </div>
          </div>
        ) : (
          <button
            onClick={() => setCreating(true)}
            className="w-full flex items-center justify-center gap-2 py-3 px-4 bg-primary-600 text-white rounded-xl text-sm font-semibold hover:bg-primary-700 active:bg-primary-800 transition-colors"
          >
            <span className="text-base">➕</span> Añadir nuevo perfil
          </button>
        )}

        <p className="text-xs text-gray-400 text-center">
          Cada perfil tiene su propio seguimiento: comidas, productos, recetas e insignias.
        </p>
      </div>
    </Modal>
  );
}
