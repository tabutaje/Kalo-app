import ProfileSwitcher from '@/components/profiles/ProfileSwitcher';

interface HeaderProps {
  title: string;
  subtitle?: string;
  leftAction?: React.ReactNode;
  rightAction?: React.ReactNode;
  showLogo?: boolean;
  showProfile?: boolean;
}

export default function Header({ title, subtitle, leftAction, rightAction, showLogo = false, showProfile = true }: HeaderProps) {
  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-30">
      <div className="max-w-lg mx-auto px-4 py-3 flex items-center justify-between gap-2">
        <div className="flex items-center gap-2 min-w-0 flex-1">
          {leftAction}
          {showLogo && (
            <img src="/logo.png" alt="Kalo" className="w-8 h-8 object-contain shrink-0" />
          )}
          <div className="min-w-0">
            <h1 className="text-lg font-bold text-gray-900 truncate">{title}</h1>
            {subtitle && <p className="text-sm text-gray-500 truncate">{subtitle}</p>}
          </div>
        </div>
        <div className="flex items-center gap-2 shrink-0">
          {rightAction}
          {showProfile && <ProfileSwitcher />}
        </div>
      </div>
    </header>
  );
}
