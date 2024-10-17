import { useState } from "react";
import { useTranslation } from "react-i18next";
import "./LanguageSelector.css";

function LanguageSelector() {
  const { i18n } = useTranslation();
  const [selectedLang, setSelectedLang] = useState(i18n.language);

  const languages = [
    { code: "en", name: "EN", flag: "https://flagcdn.com/w20/gb.png" },
    { code: "it", name: "IT", flag: "https://flagcdn.com/w20/it.png" },
    { code: "zh", name: "中文", flag: "https://flagcdn.com/w20/cn.png" },
  ];

  const changeLanguage = (code) => {
    i18n.changeLanguage(code);
    setSelectedLang(code);
  };

  return (
    <section>
      <div className="dropdown">
        <button className="d-flex align-items-center dropdown-toggle">
          <img
            src={languages.find((lang) => lang.code === selectedLang)?.flag}
            alt={selectedLang}
          />
        </button>
        <ul className="dropdown-menu">
          {languages.map((lang) => (
            <li
              key={lang.code}
              onClick={() => changeLanguage(lang.code)}
              className="d-flex  p-2 flags-list"
            >
              <div className="d-flex align-items-center">
                <img src={lang.flag} alt={lang.code} className="flag-icon" />
              </div>

              <p className="p-0 m-0   text-center  flag-name">{lang.name}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default LanguageSelector;
