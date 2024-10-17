import "./Contact.css";
import { ContactLinksList } from "../../utils/ContactLinksList";
import ContactForm from "../../components/ContactForm/ContactForm.jsx";
import { useTranslation } from "react-i18next";

function Contact() {
  const { t } = useTranslation();

  return (
    <section id="contact" className="contact-section my-4">
      <div className="contact">
        <div className="container">
          <div className="row d-flex align-items-center justify-content-center card0 py-3">
            <div className="col-10 d-flex align-items-center justify-content-center  card2-wrapper">
              <div className="card2 border-0 pt-3 ">
                <div>
                  <h6 className="d-flex justify-content-center align-items-center gap-2 text-center">
                    {t("contact.title.1")}
                    <ul className="d-flex gap-2">
                      {ContactLinksList.map((link) => (
                        <li key={link._id}>
                          <a href={link.href} rel="noreferrer" target="_blank">
                            <link.icon
                              color={link.color || link.colorContact}
                              className={link.className}
                              size={30}
                            />
                          </a>
                        </li>
                      ))}
                    </ul>
                    {t("contact.title.2")}
                  </h6>
                </div>

                <div className="row px-3 m-2 justify-content-center">
                  <small className="or">{t("contact.word")}</small>
                </div>
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
