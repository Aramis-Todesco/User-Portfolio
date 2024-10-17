import { BsFillMoonStarsFill, BsFillSunFill } from "react-icons/bs";
import useTheme from "../../content/useTheme";
import "./ThemeButton.css";

function ThemeButton() {
  const [theme, setTheme] = useTheme();
  const handleTheme = () => {
    setTheme((prevState) => (prevState === "light" ? "dark" : "light"));
  };
  return (
    <div className="theme-btn-wrapper">
      <div
        className={`theme-btn ${
          theme === "light" ? "light-theme" : "dark-theme"
        }`}
        onClick={handleTheme}
      >
        {theme === "light" ? (
          <BsFillMoonStarsFill size={30} />
        ) : (
          <BsFillSunFill size={30} />
        )}
      </div>
    </div>
  );
}

export default ThemeButton;
