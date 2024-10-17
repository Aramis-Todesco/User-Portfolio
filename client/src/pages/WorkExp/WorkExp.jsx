import "./WorkExp.css";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { MdWork } from "react-icons/md";
import { WorkExpList } from "../../utils/WorkExpList.js";
import { useTranslation } from "react-i18next";

function WorkExp() {
  const { t } = useTranslation();
  return (
    <section className="my-4 work-exp-section" id="work-exp">
      <div className="container work">
        <div className="work-exp py-2">
          <h2 className="col-12 my-1 text-center text-uppercase">
            {t("work.title")}
          </h2>
          <hr />
          <VerticalTimeline lineColor="#1e1e2c">
            {WorkExpList.map((work) => (
              <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{ background: "#fff", color: "#1e1e2c" }}
                contentArrowStyle={{ borderRight: "7px solid  #fff" }}
                date={
                  work.date ||
                  `${work.progressDate} -
                   ${t("work.progress")}`
                }
                iconStyle={{ background: "#1e1e2c", color: "#fff" }}
                icon={<MdWork />}
                key={work._id}
              >
                <work.icon className="work-exp-icon" size={30} />
                <h3 className="vertical-timeline-element-title">
                  {t(work.name)}
                </h3>
                <h4 className="vertical-timeline-element-subtitle">
                  {work.address}
                </h4>
                <p>{t(work.info)}</p>
              </VerticalTimelineElement>
            ))}
          </VerticalTimeline>
        </div>
      </div>
    </section>
  );
}

export default WorkExp;
