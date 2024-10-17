import "./Menus.css";
import { Link } from "react-scroll";
import { MenuList } from "../../utils/MenuList";
import LanguageSelector from "../LanguageSelector/LanguageSelector";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { VariantsList } from "../../utils/VariantsList";

function Menus() {
  const { t } = useTranslation();
  return (
    <>
      <motion.div
        className="d-flex flex-column align-items-center
             nav-items"
        initial="hidden" // Stato iniziale
        animate="visible" // Stato finale
        variants={VariantsList.popIn} // Varianti dell'animazione
        transition={{
          duration: 0.85, // Durata dell'animazione
          ease: "easeInOut", // Easing per una transizione più naturale
          delay: 0.15,
        }}
      >
        <div>
          <img className="nav-logo border-0" src="./logo.png" alt="logo_pic" />
        </div>

        <LanguageSelector />
        {MenuList.map((menu) => (
          <div className="nav-item" key={menu._id}>
            <div className="nav-link">
              <Link
                to={menu.to}
                spy={true}
                smooth={true}
                offset={100}
                duration={100}
              >
                <menu.icon title={t(menu.name)} />
              </Link>
            </div>
          </div>
        ))}
      </motion.div>
    </>
  );
}

export default Menus;
