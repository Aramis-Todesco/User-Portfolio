import { useTranslation } from "react-i18next";
import { TechstackList } from "../../utils/TechstackList";
import "./Techstack.css";
import { useState } from "react";
import { IoSearch, IoClose } from "react-icons/io5";
import TechstackDetailOverlay from "../../components/TechstackDetailOverlay/TechstackDetailOverlay";

function Techstack() {
  const { t } = useTranslation();
  const [selectedTech, setSelectedTech] = useState(null); // Stato per la tecnologia selezionata
  const [showDetail, setShowDetail] = useState(false); // Stato per visualizzare il componente aggiuntivo

  const handleIconClick = (tech) => {
    setSelectedTech(tech);
    setShowDetail(true); // Cambia lo stato di visualizzazione
  };

  const handleCloseDetail = () => {
    setShowDetail(false);
    setSelectedTech(null);
  };

  return (
    <section
      id="tech"
      className="d-flex text-align-center justify-content-center my-4"
    >
      <div className={`tech ${showDetail ? "tech-blurred-background" : ""}`}>
        <h1 className="col-12 mt-3 mb-1 text-center text-uppercase">
          {t("tech.title")}
        </h1>
        <hr />
        <p className="pb-3 text-center">{t("tech.text")}</p>

        <div className="row d-flex flex-column justify-content-center align-items-center">
          {TechstackList.map((tech) => (
            <div
              key={tech._id}
              className="row d-flex justify-content-center align-items-center tech-item"
            >
              <h2 className="col-12 text-center mt-2">{t(tech.title)}</h2>
              <hr className="mb-4" />
              <ul className="d-flex justify-content-center align-items-center gap-3 tech-wrapper">
                <div className="row gap-3 tech-list d-flex align-items-center justify-content-center">
                  {tech.list.map((program) => (
                    <li key={program._id} className="tech-card">
                      <div className="d-flex gap-2 justify-content-center align-items-center">
                        {showDetail && selectedTech === program ? (
                          <IoClose
                            className="tech-search-icon"
                            size={15}
                            onClick={handleCloseDetail}
                          />
                        ) : (
                          <IoSearch
                            className="tech-search-icon"
                            size={15}
                            onClick={() => handleIconClick(program)}
                          />
                        )}
                        <div>
                          <program.icon
                            className="tech-icon"
                            style={{ color: program.color }}
                          />
                        </div>
                        <div>
                          <h5 className="p-0 m-0 text-center">
                            {program.name}
                          </h5>
                        </div>
                      </div>
                    </li>
                  ))}
                </div>
              </ul>
            </div>
          ))}
        </div>

        {showDetail && selectedTech && (
          <TechstackDetailOverlay
            item={selectedTech}
            onClose={handleCloseDetail}
          />
        )}
      </div>
    </section>
  );
}

export default Techstack;
