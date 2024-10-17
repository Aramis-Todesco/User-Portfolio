import { useContext } from "react";
import ThemeContext from "./ThemeContext";

//custom hook
const useTheme = () => {
  return useContext(ThemeContext);
};

export default useTheme;
