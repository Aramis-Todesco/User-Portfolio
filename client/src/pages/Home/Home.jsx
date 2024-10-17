import "./Home.css";
import Typewriter from "typewriter-effect";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { VariantsList } from "../../utils/VariantsList";
import { ContactLinksList } from "../../utils/ContactLinksList";

function Home() {
  const { t } = useTranslation();

  return (
    <section id="home">
      <div className="home-container">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={VariantsList.toBottom}
          transition={{
            duration: 0.85,
            ease: "easeInOut",
            delay: 0.15,
          }}
          className="home-content"
        >
          <div className="home-text">
            <h1>
              <Typewriter
                options={{
                  strings: [t("home.options.1"), t("home.options.2")],
                  autoStart: true,
                  loop: true,
                }}
              />
            </h1>
          </div>

          <div className="mt-2">
            <ul className="d-flex gap-3 ">
              {ContactLinksList.map((link) => (
                <li key={link._id}>
                  <a href={link.href} rel="noreferrer" target="_blank">
                    <link.icon
                      style={{
                        backgroundColor: link.bgHome,
                        borderRadius: link.borderHome,
                      }}
                      color={link.color || link.colorHome}
                      className={link.className}
                      size={35}
                    />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Home;
