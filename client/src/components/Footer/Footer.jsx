import { useState } from "react";
import { useTranslation } from "react-i18next";
import CvButton from "../CvButton/CvButton.jsx";
import TermsCondOverlay from "../TermsCondOverlay/TermCondOverlay.jsx";
import "./Footer.css";

function Footer() {
  const { t } = useTranslation();
  const [isTermsOpen, setTermsOpen] = useState(false);

  const handleOpenTerms = () => {
    setTermsOpen(true);
  };

  const handleCloseTerms = () => {
    setTermsOpen(false);
  };

  return (
    <>
      <div className="footer d-flex flex-column align-items-center justify-content-center mt-4 text-center">
        <p>&copy; 2024 Aramis Todesco{t("footer.copyright")} </p>
        <p>{t("footer.paragraph")}Aramis Todesco</p>

        <button className="border-0" onClick={handleOpenTerms}>
          {t("footer.terms-cond")}
        </button>

        <div className="cv-container">
          <CvButton />
        </div>
      </div>

      {isTermsOpen && <TermsCondOverlay onClose={handleCloseTerms} />}
    </>
  );
}

export default Footer;
