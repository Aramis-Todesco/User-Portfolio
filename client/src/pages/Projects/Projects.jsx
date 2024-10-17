import { useTranslation } from "react-i18next";
import { ProjectsList } from "../../utils/ProjectsList";
import "./Projects.css";
import { useState } from "react";
import { CgNotes } from "react-icons/cg";
import ProjectsDetailOverlay from "../../components/ProjectsDetailOverlay/ProjectsDetailOverlay.jsx";
import { FaGithub } from "react-icons/fa";

function Projects() {
  const { t } = useTranslation();
  const [selectedProject, setSelectedProject] = useState(null);
  const [showDetail, setShowDetail] = useState(false);

  const handleIconClick = (project) => {
    setSelectedProject(project);
    setShowDetail(true);
  };

  const handleCloseDetail = () => {
    setShowDetail(false);
    setSelectedProject(null);
  };

  return (
    <section id="projects" className="my-4 projects-section">
      <div className={`projects ${showDetail ? "blurred-background" : ""}`}>
        <h2 className="col-12 mt-3 mb-1 text-center text-uppercase">
          {t("projects.title")}
        </h2>
        <hr />
        <p className="pb-3 text-center">{t("projects.text")}</p>

        <div>
          <ul className="row d-flex justify-content-center ">
            {ProjectsList.map((project) => (
              <div
                key={project._id}
                className=" col-sm-6 col-md-6 col-lg-4 gy-4 project-item"
              >
                <li className="d-flex justify-content-center align-items-center">
                  <div className="project-card">
                    <div className="px-1 project-badge">
                      <p className="m-0">{project.badge}</p>
                    </div>
                    <div className="d-flex justify-content-center project-image-wrapper">
                      <img
                        src={project.image || "./default.svg"}
                        className="project-image"
                      />
                    </div>
                    <div className="d-flex flex-column align-items-center my-2  project-details-wrapper">
                      <div className="d-flex gap-2 ">
                        {project.programs.map((program) => (
                          <program.icon
                            key={program.id}
                            className="pro gram-icon"
                            size={35}
                            style={{ color: program.color }}
                          />
                        ))}
                      </div>
                      <div className="text-center">
                        <h3 className="p-0 m-0 project-title">
                          {project.title}
                        </h3>
                      </div>

                      <div className="d-flex gap-3 my-2">
                        <button className="border-0 project-github-btn">
                          <a target="_blank" href={project.url}>
                            <FaGithub size={40} />
                          </a>
                        </button>
                        <button
                          className="border-0 project-note-btn"
                          onClick={() => handleIconClick(project)}
                        >
                          <div>
                            <CgNotes size={40} />
                          </div>
                        </button>
                      </div>
                    </div>
                  </div>
                </li>
              </div>
            ))}
          </ul>
        </div>

        <ProjectsDetailOverlay
          item={selectedProject}
          onClose={handleCloseDetail}
        />
      </div>
    </section>
  );
}

export default Projects;
