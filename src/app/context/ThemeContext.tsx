import { createContext, useContext, useState, ReactNode } from 'react';

type ThemeType = 'cool' | 'warm' | 'mixed';

interface ThemeContextType {
  theme: ThemeType;
  toggleTheme: () => void;
  colors: {
    primary: string;
    secondary: string;
    primaryRgb: string;
    secondaryRgb: string;
  };
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<ThemeType>('cool');

  const toggleTheme = () => {
    setTheme((current) => {
      if (current === 'cool') return 'warm';
      if (current === 'warm') return 'mixed';
      return 'cool';
    });
  };

  const getColors = () => {
    switch (theme) {
      case 'cool':
        return {
          primary: '#22d3ee', // cyan-400
          secondary: '#e879f9', // magenta-400
          primaryRgb: '34, 211, 238',
          secondaryRgb: '232, 121, 249',
        };
      case 'warm':
        return {
          primary: '#ef4444', // red-500
          secondary: '#e879f9', // magenta-400
          primaryRgb: '239, 68, 68',
          secondaryRgb: '232, 121, 249',
        };
      case 'mixed':
        return {
          primary: '#ef4444', // red-500
          secondary: '#3b82f6', // blue-500
          primaryRgb: '239, 68, 68',
          secondaryRgb: '59, 130, 246',
        };
    }
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, colors: getColors() }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}