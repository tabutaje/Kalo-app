import { useState, ReactNode } from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import { AppProvider } from '@/context/AppContext';
import { ShellContext, ShellContextValue } from '@/context/ShellContext';
import BottomNav from '@/components/layout/BottomNav';
import DailyLogPage from '@/pages/DailyLogPage';
import CalendarPage from '@/pages/CalendarPage';
import DashboardPage from '@/pages/DashboardPage';
import ProductsPage from '@/pages/ProductsPage';
import SettingsPage from '@/pages/SettingsPage';
import ProfileSelectPage from '@/pages/ProfileSelectPage';

function AppShell({ children }: { children: ReactNode }) {
  // `hasEntered` is NOT persisted across full-app restarts on purpose:
  // every new launch lands back on the "who's using Kalo?" screen.
  const [hasEntered, setHasEntered] = useState(false);

  const shellValue: ShellContextValue = {
    goToProfileSelector: () => setHasEntered(false),
  };

  return (
    <ShellContext.Provider value={shellValue}>
      {!hasEntered ? (
        <ProfileSelectPage onProfileSelected={() => setHasEntered(true)} />
      ) : (
        <HashRouter>
          <div className="min-h-screen bg-gray-50">
            {children}
            <BottomNav />
          </div>
        </HashRouter>
      )}
    </ShellContext.Provider>
  );
}

export default function App() {
  return (
    <AppProvider>
      <AppShell>
        <Routes>
          <Route path="/" element={<DailyLogPage />} />
          <Route path="/calendario" element={<CalendarPage />} />
          <Route path="/resumen" element={<DashboardPage />} />
          <Route path="/productos" element={<ProductsPage />} />
          <Route path="/ajustes" element={<SettingsPage />} />
        </Routes>
      </AppShell>
    </AppProvider>
  );
}
