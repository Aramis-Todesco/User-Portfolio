import { AiFillCloseSquare } from "react-icons/ai";
import "./TermsCondOverlay.css";
import PropTypes from "prop-types";
import { useTranslation } from "react-i18next";

function TermsCondOverlay({ onClose }) {
  const { t } = useTranslation();
  return (
    <div className="terms-cond-overlay d-flex align-items-center justify-content-center">
      <div className="rounded p-4 terms-cond-content text-center">
        <button className="m-0 p-0 border-0 close-button" onClick={onClose}>
          <AiFillCloseSquare className="m-0 p-0" size={30} />
        </button>
        <h1>{t("terms-cond.title")}</h1>
        <p>{t("terms-cond.update")} 17/10/2024</p>
        <div>
          <h2>{t("terms-cond.introduction.title")}</h2>
          <p>{t("terms-cond.introduction.paragraph")}</p>
        </div>
        <div>
          <h2>{t("terms-cond.info.title")}</h2>

          <p>{t("terms-cond.info.paragraph")}</p>
          <div className="term-cond-list d-flex justify-content-center">
            <ul>
              <li>{t("terms-cond.info.list.1")}</li>
              <li>{t("terms-cond.info.list.2")}</li>
              <li>{t("terms-cond.info.list.3")}</li>
              <li>{t("terms-cond.info.list.4")}</li>
              <li>{t("terms-cond.info.list.5")}</li>
            </ul>
          </div>
        </div>
        <div>
          <h2>{t("terms-cond.usage.title")}</h2>
          <p>{t("terms-cond.usage.paragraph")}</p>
        </div>
        <div>
          <h2>{t("terms-cond.module.title")}</h2>
          <p>{t("terms-cond.module.paragraph")}</p>
        </div>
        <div>
          <h2>{t("terms-cond.rights.title")}</h2>
          <p>{t("terms-cond.rights.paragraph")}</p>
        </div>
        <div>
          <h2>{t("terms-cond.resp.title")}</h2>
          <p>{t("terms-cond.resp.paragraph")}</p>
        </div>

        <div>
          <h2>{t("terms-cond.contact.title")}</h2>
          <p>{t("terms-cond.contact.paragraph")}</p>
          <div className="term-cond-list d-flex justify-content-center">
            <ul>
              <li>{t("terms-cond.contact.list.1")} tod.aramis@gmail.com</li>
              <li>{t("terms-cond.contact.list.2")} +39 334 159 1594</li>
              <li>Instagram: @aramis.dev</li>
              <li>LinkedIn/Github: Aramis Todesco</li>
            </ul>
          </div>
        </div>

        <div>
          <h2>{t("terms-cond.accept.title")}</h2>
          <p>{t("terms-cond.accept.paragraph")}</p>
        </div>
        <div>
          <h2>{t("terms-cond.modif.title")}</h2>
          <p>{t("terms-cond.modif.paragraph")}</p>
        </div>

        <div>
          <h2>{t("terms-cond.law.title")}</h2>
          <p>{t("terms-cond.law.paragraph")}</p>
        </div>
      </div>
    </div>
  );
}

TermsCondOverlay.propTypes = {
  onClose: PropTypes.func.isRequired,
};

export default TermsCondOverlay;
