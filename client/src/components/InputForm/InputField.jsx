import PropTypes from "prop-types";

const InputField = ({ type, placeholder, register, errors, termsLabel }) => {
  return (
    <div className="row">
      {type === "checkbox" ? (
        <label className="col-12 d-flex align-items-center justify-content-center">
          <input
            type="checkbox"
            {...register} // Passa l'oggetto di registrazione
            className="m-1 checkbox"
          />
          {placeholder}
          {termsLabel && (
            <a
              href="/terms-and-conditions"
              target="_blank"
              rel="noopener noreferrer"
              className="m-1"
            >
              {termsLabel}
            </a>
          )}
        </label>
      ) : (
        <input
          type={type}
          placeholder={placeholder}
          className="mb-3"
          {...register} // Passa l'oggetto di registrazione
        />
      )}
      {errors[register.name] && (
        <p className="text-danger">{errors[register.name].message}</p>
      )}
    </div>
  );
};

InputField.propTypes = {
  type: PropTypes.oneOf(["text", "email", "checkbox", "textarea"]).isRequired,
  placeholder: PropTypes.string.isRequired,
  register: PropTypes.object.isRequired, // Cambiato in oggetto
  errors: PropTypes.object.isRequired,
  termsLabel: PropTypes.string,
};

export default InputField;
