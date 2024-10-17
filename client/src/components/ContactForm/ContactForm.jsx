import { useForm } from "react-hook-form";
import axios from "axios";
import { toast } from "react-toastify";
import "./ContactForm.css";
import { useTranslation } from "react-i18next";
import i18n from "../../utils/i18n.js";
import TermsCondOverlay from "../TermsCondOverlay/TermCondOverlay.jsx";
import { useState } from "react";

const ContactForm = () => {
  const [isTermsOpen, setTermsOpen] = useState(false);
  const { t } = useTranslation();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const language = i18n.language;

  // handle submit function
  const onSubmit = async (data) => {
    try {
      const response = await axios.post("http://localhost:8080/api/sendEmail", {
        ...data,
        language,
      });

      // validation success
      if (!response.data.success) {
        toast.error(response.data.message);
      } else {
        toast.success(response.data.message);
        reset();
      }
    } catch (err) {
      console.log(err);
    }
  };

  const handleOpenTerms = () => {
    setTermsOpen(true);
  };

  const handleCloseTerms = () => {
    setTermsOpen(false);
  };

  return (
    <form className="p-3" onSubmit={handleSubmit(onSubmit)}>
      <div className="d-flex gap-2 align-items-center justify-content-center name-surname">
        <div
          className="d-flex flex-column align-items-center justify-content-center"
          style={{ width: "100%" }}
        >
          <input
            type="text"
            placeholder={t("form.placeholder.name")}
            {...register("name", {
              required: { value: true, message: t("form.errors.name") },
            })}
            autoComplete="given-name"
          />
          {errors.name && <p className="text-danger">{errors.name.message}</p>}
        </div>
        <div
          className="d-flex flex-column align-items-center justify-content-center"
          style={{ width: "100%" }}
        >
          <input
            type="text"
            placeholder={t("form.placeholder.surname")}
            {...register("surname", {
              required: { value: true, message: t("form.errors.surname") },
            })}
            autoComplete="family-name"
          />
          {errors.surname && (
            <p className="text-danger">{errors.surname.message}</p>
          )}
        </div>
      </div>
      <div className="d-flex flex-column align-items-center justify-content-center">
        <input
          type="email"
          placeholder={t("form.placeholder.email")}
          {...register("email", {
            required: {
              value: true,
              message: t("form.errors.email.1"),
            },
            pattern: {
              value: /^[^@]+@[^@]+\.[^@]+$/,
              message: t("form.errors.email.2"),
            },
          })}
          autoComplete="email"
        />
        {errors.email && <p className="text-danger">{errors.email.message}</p>}
      </div>
      <div className="d-flex flex-column align-items-center justify-content-center">
        <textarea
          placeholder={t("form.placeholder.text")}
          {...register("msg", {
            required: {
              value: true,
              message: t("form.errors.text"),
            },
          })}
          autoComplete="off"
        />
        {errors.msg && <p className="text-danger">{errors.msg.message}</p>}
      </div>
      <div className="mt-1">
        <label className="col-12 text-center">
          <input
            type="checkbox"
            {...register("terms", {
              required: {
                value: true,
                message: t("form.errors.terms"),
              },
            })}
            className="m-1 checkbox"
            autoComplete="off"
          />
          {t("form.accept")}
          <span className="m-1 border-0 terms-cond" onClick={handleOpenTerms}>
            {t("form.terms_conditions")}
          </span>
        </label>
        {errors.terms && (
          <p className="m-0 text-danger text-center">{errors.terms.message}</p>
        )}
      </div>

      <div className="d-flex justify-content-center">
        <button className="button" type="submit">
          {t("form.btn")}
        </button>
      </div>
      {isTermsOpen && <TermsCondOverlay onClose={handleCloseTerms} />}
    </form>
  );
};

export default ContactForm;
