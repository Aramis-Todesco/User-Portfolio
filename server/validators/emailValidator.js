const yup = require("yup");

const emailSchema = yup.object().shape({
  name: yup.string().max(50).required("Name is required"),
  surname: yup.string().max(50).required("Surname is required"),
  email: yup
    .string()
    .email("Invalid email format")
    .required("Email is required"),
  msg: yup.string().required("Message is required"),
  terms: yup
    .boolean()
    .oneOf([true], "Terms must be accepted")
    .required("Terms are required"),
});

const validateEmailData = async (data) => {
  try {
    await emailSchema.validate(data, { abortEarly: false }); // Abort early set to false to get all validation errors
    return null; // Nessun errore
  } catch (err) {
    // Restituisce gli errori in un oggetto
    return err.errors.reduce((acc, error) => {
      const [key] = error.split(" "); // Ottieni la chiave dall'errore
      acc[key] = error; // Mappa l'errore alla chiave
      return acc;
    });
  }
};

module.exports = validateEmailData;
