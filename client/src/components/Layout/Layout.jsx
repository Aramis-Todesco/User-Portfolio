import Home from "../../pages/Home/Home";
import "./Layout.css";
import Menus from "../Menus/Menus";
import { motion } from "framer-motion";
import { VariantsList } from "../../utils/VariantsList";

function Layout() {
  return (
    <section id="home">
      <div className="d-flex sidebar-section">
        <motion.div
          className="d-flex text-align-center justify-content-center sidebar"
          initial="hidden" // Stato iniziale
          animate="visible" // Stato finale
          variants={VariantsList.toRight} // Varianti dell'animazione
          transition={{
            duration: 0.85, // Durata dell'animazione
            ease: "easeInOut", // Easing per una transizione più naturale
            delay: 0.15,
          }}
        >
          <Menus />
        </motion.div>
        <div className="sidebar-home">
          <Home />
        </div>
      </div>
    </section>
  );
}

export default Layout;
