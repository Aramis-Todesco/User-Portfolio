import { AiFillCloseSquare } from "react-icons/ai";
import "./ProjectsDetailOverlay.css";
import { FaGithub } from "react-icons/fa";
import PropTypes from "prop-types";
import { useTranslation } from "react-i18next";

function ProjectsDetailOverlay({ item, onClose }) {
  const { t } = useTranslation();
  if (!item) return null;

  return (
    <div className="project-detail-overlay">
      <div className="project-detail-content d-flex  justify-content-center align-items-center gap-3">
        <div className="button-wrapper">
          <AiFillCloseSquare
            className="m-0 p-0 project-close-button"
            size={30}
            onClick={onClose}
          />
        </div>

        <div className="detail-image-container">
          <div className="detail-image-wrapper">
            <img
              className="detail-image"
              src={item.image || "./default.svg"}
              alt="project-image"
            />
            <div className="d-flex align-items-center justify-content-center py-1 px-1 detail-programs-wrapper">
              {item.programs.map((program) => (
                <program.icon
                  key={program.id}
                  className="detail-program-icon"
                  size={20}
                  style={{ color: program.color }}
                />
              ))}
            </div>
          </div>
        </div>

        <div className="px-3">
          <div className="text-center">
            <h2>{item.title}</h2>
            <hr />
            <p>{t(item.description)}</p>
          </div>

          <div className="d-flex align-items-center justify-content-center gap-4">
            <button className="border-0 detail-project-github-btn">
              <a href={item.url} target="_blank" rel="noopener noreferrer">
                <FaGithub size={40} />
              </a>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

ProjectsDetailOverlay.propTypes = {
  item: PropTypes.shape({
    image: PropTypes.string,
    title: PropTypes.string,
    description: PropTypes.string,
    url: PropTypes.string,
    programs: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        icon: PropTypes.elementType.isRequired,
        color: PropTypes.string.isRequired,
      })
    ),
  }),
  onClose: PropTypes.func.isRequired,
};

export default ProjectsDetailOverlay;
