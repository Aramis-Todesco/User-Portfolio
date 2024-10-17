import PropTypes from "prop-types";
import { useState, useEffect } from "react";
import ThemeContext from "./ThemeContext";

const ThemeProvider = ({ children }) => {
  // Funzione per rilevare il tema del sistema operativo
  const getPreferredTheme = () => {
    if (
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches
    ) {
      return "dark"; // Se il tema del sistema è scuro
    }
    return "light"; // Altrimenti tema chiaro
  };
  const [theme, setTheme] = useState(getPreferredTheme);

  // Usa l'effetto per ascoltare i cambiamenti nel tema del sistema
  useEffect(() => {
    const handleThemeChange = (e) => {
      setTheme(e.matches ? "dark" : "light");
    };

    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    mediaQuery.addEventListener("change", handleThemeChange);

    return () => {
      mediaQuery.removeEventListener("change", handleThemeChange);
    };
  }, []);

  return (
    <ThemeContext.Provider value={[theme, setTheme]}>
      {children}
    </ThemeContext.Provider>
  );
};

ThemeProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ThemeProvider;
