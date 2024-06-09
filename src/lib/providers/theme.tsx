"use client";

import React, { createContext, useState } from "react";

// -- Theme type
type Theme = "light" | "dark";

/**
 * Interface for the ThemeContext
 *
 * @interface ThemeContextProps
 * @property {Theme} theme - The current theme
 * @property {() => void} toggleTheme - Function to toggle the theme
 */
interface ThemeContextProps {
  theme: Theme;
  toggleTheme: () => void;
}

/**
 * Interface for the ThemeProvider
 *
 * @interface IThemeProviderProps
 * @property {React.ReactNode} children - The children of the component
 * @returns {React.FC} - The ThemeProvider component
 */
interface IThemeProviderProps {
  children: React.ReactNode;
}

// -- Create the context for the theme
const ThemeContext = createContext<ThemeContextProps | undefined>(undefined);

/**
 * ThemeProvider component to provide the theme context
 *
 * @param {IThemeProviderProps} props - The props of the component
 * @returns {React.FC} - The ThemeProvider component
 */
const ThemeProvider: React.FC<IThemeProviderProps> = ({ children }) => {
  const [theme, setTheme] = useState<Theme>("light");

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
    document.documentElement.classList.toggle("dark");
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

/**
 * Hook to use the theme context
 *
 * @returns {ThemeContextProps} - The theme context
 */
function useTheme(): ThemeContextProps {
  const context = React.useContext(ThemeContext);
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
}

export { ThemeProvider, useTheme };
