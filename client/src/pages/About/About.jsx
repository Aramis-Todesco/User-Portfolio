import CvButton from "../../components/CvButton/CvButton.jsx";
import { useTranslation } from "react-i18next";
import "./About.css";

function About() {
  const { t } = useTranslation();

  return (
    <section
      id="about"
      className="d-flex flex-column align-items-center justify-content-center about-wrapper my-4"
    >
      <div className="row">
        <div className="col-12 col-md-5 col-lg-4">
          <div className="d-flex justify-content-center align-items-center about-img">
            <img src="./foto.svg" className="about-foto" alt="profile_pic" />
          </div>
        </div>
        <div className="col-12 col-md-7 col-lg-8 gx-2">
          <div className="d-flex flex-column justify-content center align-items-center about-content">
            <div className="d-flex justify-content-center align-items-center gap-2 title-wrapper">
              <h1>{t("about.title")}</h1>
              <CvButton />
            </div>

            <p
              dangerouslySetInnerHTML={{
                __html: t("about.text").replace(/\n/g, "<br />"),
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;

{
  /* <motion.div
      className="about d-flex justify-content-center "
      initial="hidden"
      animate="visible"
      variants={VariantsList.scaleUp}
      transition={{
        duration: 0.85, // Durata dell'animazione
        ease: "easeInOut", // Easing per una transizione più naturale
        delay: 0.15,
      }}
    > */
  /* </motion.div> */
}
