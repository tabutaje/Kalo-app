import { NavLink } from 'react-router-dom';

const navItems = [
  { to: '/', label: 'Hoy', icon: '📋' },
  { to: '/calendario', label: 'Calendario', icon: '📅' },
  { to: '/resumen', label: 'Resumen', icon: '📊' },
  { to: '/productos', label: 'Productos', icon: '🔍' },
  { to: '/ajustes', label: 'Ajustes', icon: '⚙️' },
];

export default function BottomNav() {
  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 z-40">
      <div className="max-w-lg mx-auto flex justify-around">
        {navItems.map((item) => (
          <NavLink
            key={item.to}
            to={item.to}
            className={({ isActive }) =>
              `flex flex-col items-center py-2 px-3 text-xs transition-colors ${
                isActive ? 'text-primary-600 font-semibold' : 'text-gray-500'
              }`
            }
          >
            <span className="text-xl mb-0.5">{item.icon}</span>
            {item.label}
          </NavLink>
        ))}
      </div>
    </nav>
  );
}
