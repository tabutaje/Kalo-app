import { createContext, useContext } from 'react';

/**
 * Shell-level context: lets nested UI send the user back to the profile
 * selection landing page without prop-drilling. Lives in its own module to
 * avoid circular imports with App.tsx (which imports the whole page tree).
 */
export interface ShellContextValue {
  goToProfileSelector: () => void;
}

export const ShellContext = createContext<ShellContextValue | null>(null);

export function useShell(): ShellContextValue {
  const ctx = useContext(ShellContext);
  if (!ctx) throw new Error('useShell must be used within AppShell');
  return ctx;
}
