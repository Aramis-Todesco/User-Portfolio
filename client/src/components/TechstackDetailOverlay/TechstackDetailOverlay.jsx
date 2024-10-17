import { AiFillCloseSquare } from "react-icons/ai";
import PropTypes from "prop-types";
import { useTranslation } from "react-i18next";
import "./TechstackDetailOverlay.css";
import { TbWorldSearch } from "react-icons/tb";

function TechstackDetailOverlay({ item, onClose }) {
  const { t } = useTranslation();
  if (!item) return null;

  return (
    <div className="techstack-detail-overlay d-flex align-items-center justify-content-center">
      <div className="rounded p-3 row techstack-detail-content">
        <div>
          <button className="m-0 p-0 techstack-close-button" onClick={onClose}>
            <AiFillCloseSquare className="m-0 p-0" size={30} />
          </button>
          <div className="col-12 d-flex align-items-center justify-content-center gap-2">
            <div className="techstack-icon-container">
              <item.icon
                size={50}
                className="techstack-icon"
                style={{ color: item.color }}
              />
            </div>
            <h2 className="techstack-title">{item.name}</h2>
          </div>
        </div>
        <hr className="mt-1" />
        <div className="mt-2">
          <div>
            <p>{item.name + " " + t(item.description)}</p>
          </div>
          <div className="p-2">
            <button className="techstack-web-btn border-0">
              <a target="_blank" href={item.url}>
                <TbWorldSearch size={45} />
              </a>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

TechstackDetailOverlay.propTypes = {
  item: PropTypes.shape({
    icon: PropTypes.elementType.isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired,
    url: PropTypes.string,
  }),
  onClose: PropTypes.func.isRequired,
};

export default TechstackDetailOverlay;
