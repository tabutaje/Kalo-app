import { useRef, useState } from 'react';
import { useApp } from '@/context/AppContext';
import { UserProfile } from '@/types';

const PROFILE_EMOJIS = [
  '👤', '👨', '👩', '👧', '👦', '🧑', '👶',
  '💪', '🏃', '🧘', '🏋️', '⚽', '🚴', '🏊',
  '🥗', '🍎', '🌱', '🔥', '⭐', '🎯', '🏆',
  '🐱', '🐶', '🦁', '🐻', '🐼', '🦊', '🐯',
];

interface ProfileSelectPageProps {
  onProfileSelected: () => void;
}

export default function ProfileSelectPage({ onProfileSelected }: ProfileSelectPageProps) {
  const {
    profiles,
    switchProfile,
    addProfile,
    updateProfilePhoto,
    renameProfile,
    removeProfile,
  } = useApp();

  const [editingId, setEditingId] = useState<string | null>(null);
  const [editName, setEditName] = useState('');
  const [editEmoji, setEditEmoji] = useState('👤');
  const [creating, setCreating] = useState(false);
  const [newName, setNewName] = useState('');
  const [newEmoji, setNewEmoji] = useState('👤');
  const [confirmDelete, setConfirmDelete] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [photoTargetId, setPhotoTargetId] = useState<string | null>(null);

  function handleSelect(profileId: string) {
    switchProfile(profileId);
    onProfileSelected();
  }

  function handleCreate() {
    if (!newName.trim()) return;
    const id = addProfile(newName.trim(), newEmoji);
    setCreating(false);
    setNewName('');
    setNewEmoji('👤');
    // Auto-enter the newly created profile
    switchProfile(id);
    onProfileSelected();
  }

  function startEdit(p: UserProfile) {
    setEditingId(p.id);
    setEditName(p.name);
    setEditEmoji(p.emoji);
  }

  function saveEdit() {
    if (!editingId || !editName.trim()) return;
    renameProfile(editingId, editName.trim(), editEmoji);
    setEditingId(null);
  }

  function openPhotoPicker(profileId: string) {
    setPhotoTargetId(profileId);
    fileInputRef.current?.click();
  }

  function handlePhotoChange(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    const target = photoTargetId;
    // Clear immediately so the same file can be picked again later
    if (fileInputRef.current) fileInputRef.current.value = '';
    setPhotoTargetId(null);
    if (!file || !target) return;

    // Basic size guard ~4MB so localStorage doesn't explode
    if (file.size > 4 * 1024 * 1024) {
      alert('La imagen es demasiado grande (máx. 4 MB).');
      return;
    }

    const reader = new FileReader();
    reader.onload = () => {
      const dataUrl = reader.result as string;
      // Re-encode through canvas at max 256x256 to keep storage small
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
      img.onerror = () => {
        updateProfilePhoto(target, dataUrl);
      };
      img.src = dataUrl;
    };
    reader.readAsDataURL(file);
  }

  function removePhoto(profileId: string) {
    updateProfilePhoto(profileId, undefined);
  }

  function handleDelete(id: string) {
    removeProfile(id);
    setConfirmDelete(null);
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-primary-50 via-white to-primary-50">
      {/* Hidden file input reused for any profile */}
      <input
        ref={fileInputRef}
        type="file"
        accept="image/*"
        className="hidden"
        onChange={handlePhotoChange}
      />

      <div className="max-w-lg mx-auto px-4 pt-10 pb-10 flex flex-col items-center">
        {/* Brand header */}
        <div className="flex flex-col items-center gap-2 mb-6">
          <div className="w-20 h-20 rounded-3xl bg-white shadow-md flex items-center justify-center p-2.5">
            <img src="/logo.png" alt="Kalo" className="w-full h-full object-contain" />
          </div>
          <h1 className="text-2xl font-bold text-gray-800 mt-1">¿Quién usa Kalo?</h1>
          <p className="text-sm text-gray-500 text-center">
            Elige tu perfil para continuar
          </p>
        </div>

        {/* Profile grid */}
        <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-3 mb-4">
          {profiles.map((p) => {
            const isEditing = editingId === p.id;
            const isConfirming = confirmDelete === p.id;

            if (isEditing) {
              return (
                <div
                  key={p.id}
                  className="col-span-2 sm:col-span-3 bg-white border-2 border-primary-300 rounded-2xl p-4 space-y-3 shadow-sm"
                >
                  <p className="text-sm font-semibold text-gray-700">Editar perfil</p>
                  <input
                    type="text"
                    value={editName}
                    onChange={(e) => setEditName(e.target.value)}
                    placeholder="Nombre del perfil"
                    className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-primary-500 outline-none"
                    autoFocus
                  />
                  <div>
                    <p className="text-xs text-gray-600 mb-1">Icono</p>
                    <div className="flex flex-wrap gap-1 max-h-28 overflow-y-auto">
                      {PROFILE_EMOJIS.map((e) => (
                        <button
                          key={e}
                          onClick={() => setEditEmoji(e)}
                          className={`text-xl w-9 h-9 rounded-lg flex items-center justify-center transition-colors ${
                            editEmoji === e ? 'bg-primary-100 ring-2 ring-primary-500' : 'bg-gray-50 hover:bg-gray-100'
                          }`}
                        >
                          {e}
                        </button>
                      ))}
                    </div>
                  </div>
                  <div className="flex gap-2 flex-wrap">
                    <button
                      onClick={() => openPhotoPicker(p.id)}
                      className="text-sm py-2 px-3 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200"
                    >
                      📷 Cambiar foto
                    </button>
                    {p.photoDataUrl && (
                      <button
                        onClick={() => removePhoto(p.id)}
                        className="text-sm py-2 px-3 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200"
                      >
                        Quitar foto
                      </button>
                    )}
                  </div>
                  <div className="flex gap-2">
                    <button
                      onClick={() => setEditingId(null)}
                      className="flex-1 text-sm py-2 border border-gray-300 rounded-lg text-gray-600 hover:bg-gray-50"
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
              <div key={p.id} className="relative group">
                <button
                  onClick={() => handleSelect(p.id)}
                  className="w-full aspect-square bg-white rounded-2xl border-2 border-gray-200 hover:border-primary-400 hover:shadow-md active:scale-95 transition-all flex flex-col items-center justify-center gap-2 p-3"
                >
                  <div className="w-20 h-20 rounded-2xl bg-primary-50 flex items-center justify-center overflow-hidden ring-2 ring-primary-100">
                    {p.photoDataUrl ? (
                      <img
                        src={p.photoDataUrl}
                        alt={p.name}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <span className="text-5xl leading-none">{p.emoji}</span>
                    )}
                  </div>
                  <p className="text-sm font-semibold text-gray-800 truncate max-w-full">
                    {p.name}
                  </p>
                </button>

                {/* Action buttons overlay */}
                {isConfirming ? (
                  <div className="absolute inset-x-2 bottom-2 flex gap-1 bg-white/95 rounded-lg p-1 border border-red-200 shadow-sm">
                    <button
                      onClick={(e) => { e.stopPropagation(); handleDelete(p.id); }}
                      className="flex-1 text-xs py-1 bg-red-500 text-white rounded font-medium"
                    >
                      Borrar
                    </button>
                    <button
                      onClick={(e) => { e.stopPropagation(); setConfirmDelete(null); }}
                      className="flex-1 text-xs py-1 bg-gray-100 text-gray-600 rounded"
                    >
                      No
                    </button>
                  </div>
                ) : (
                  <div className="absolute top-1.5 right-1.5 flex gap-0.5">
                    <button
                      onClick={(e) => { e.stopPropagation(); startEdit(p); }}
                      className="w-7 h-7 rounded-full bg-white/95 text-gray-500 hover:text-primary-600 hover:bg-white shadow-sm border border-gray-200 flex items-center justify-center text-xs"
                      title="Editar"
                    >
                      ✏️
                    </button>
                    {profiles.length > 1 && (
                      <button
                        onClick={(e) => { e.stopPropagation(); setConfirmDelete(p.id); }}
                        className="w-7 h-7 rounded-full bg-white/95 text-gray-500 hover:text-red-600 hover:bg-white shadow-sm border border-gray-200 flex items-center justify-center text-xs"
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

          {/* Add new profile card */}
          {!creating && (
            <button
              onClick={() => setCreating(true)}
              className="w-full aspect-square bg-white/60 rounded-2xl border-2 border-dashed border-gray-300 hover:border-primary-400 hover:bg-white active:scale-95 transition-all flex flex-col items-center justify-center gap-2 p-3 text-gray-500 hover:text-primary-600"
            >
              <div className="w-20 h-20 rounded-2xl bg-gray-50 flex items-center justify-center">
                <span className="text-4xl leading-none">➕</span>
              </div>
              <p className="text-sm font-semibold">Nuevo perfil</p>
            </button>
          )}
        </div>

        {/* Create profile form */}
        {creating && (
          <div className="w-full bg-white border-2 border-primary-300 rounded-2xl p-4 space-y-3 shadow-sm">
            <p className="text-sm font-semibold text-gray-700">Crear nuevo perfil</p>
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
                      newEmoji === e ? 'bg-primary-100 ring-2 ring-primary-500' : 'bg-gray-50 hover:bg-gray-100'
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
                className="flex-1 text-sm py-2 border border-gray-300 rounded-lg text-gray-600 hover:bg-gray-50"
              >
                Cancelar
              </button>
              <button
                onClick={handleCreate}
                disabled={!newName.trim()}
                className="flex-1 text-sm py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 disabled:opacity-40"
              >
                Crear y entrar
              </button>
            </div>
          </div>
        )}

        <p className="text-xs text-gray-400 text-center mt-6">
          Cada perfil guarda sus comidas, productos y recetas por separado.
        </p>
      </div>
    </div>
  );
}
