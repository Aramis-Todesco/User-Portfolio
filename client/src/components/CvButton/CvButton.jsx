import "./CvButton.css";
import EN from "../../assets/docs/MyCV.pdf";
import IT from "../../assets/docs/IT.pdf";
import ZH from "../../assets/docs/zh.pdf";
import i18n from "../../utils/i18n";
import { TbFileCv } from "react-icons/tb";
import { useTranslation } from "react-i18next";

function CvButton() {
  const { t } = useTranslation();
  const cvMap = {
    en: EN,
    it: IT,
    zh: ZH,
  };

  const currentCV = cvMap[i18n.language] || EN;

  return (
    <button className="btn-cv d-flex align-items-center justify-content-center">
      <a className="cv" href={currentCV} download={t("home.cv")}>
        <TbFileCv size={30} />
      </a>
    </button>
  );
}

export default CvButton;
