import "./Education.css";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { MdSchool } from "react-icons/md";
import { EducationList } from "../../utils/EducationList";
import { useTranslation } from "react-i18next";

function Education() {
  const { t } = useTranslation();
  return (
    <section id="education" className="education-section my-4">
      <div className="education">
        <h2 className="col-12 pt-3 pb-1 text-center text-uppercase">
          {t("education.title")}
        </h2>
        <hr />
        <VerticalTimeline>
          {EducationList.map((education) => (
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ background: "white", color: "#000" }}
              contentArrowStyle={{ borderRight: "7px solid  white" }}
              date={
                education.date ||
                `${education.progressDate} -
                 ${t("education.progress")}`
              }
              iconStyle={{ background: "#138781", color: "#fff" }}
              icon={<MdSchool />}
              key={education._id}
            >
              <education.icon className="education-icon" size={30} />
              <a
                href={education.href}
                target="_blank"
                className="vertical-timeline-element-title"
              >
                {education.name}
              </a>
              <h4 className="vertical-timeline-element-subtitle">
                {education.address || t(education.remote)}
              </h4>
              <p>{t(education.info)}</p>
            </VerticalTimelineElement>
          ))}
        </VerticalTimeline>
      </div>
    </section>
  );
}

export default Education;
