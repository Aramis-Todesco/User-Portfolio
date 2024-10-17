const nodemailer = require("nodemailer");
const validateEmailData = require("../validators/emailValidator");
const Mailgen = require("mailgen");
const fs = require("fs");
const path = require("path");

// Funzione per caricare le traduzioni
const loadTranslations = (language) => {
  try {
    const filePath = path.resolve(
      __dirname,
      `../locales/${language}/translation.json`
    );
    const translations = fs.readFileSync(filePath, "utf-8");
    return JSON.parse(translations);
  } catch (error) {
    console.log(
      "Errore nel caricamento delle traduzioni, utilizzo fallback EN:",
      error
    );
    const defaultFilePath = path.resolve(
      __dirname,
      `../locales/en/translation.json`
    );
    return JSON.parse(fs.readFileSync(defaultFilePath, "utf-8"));
  }
};

const sendEmailController = async (req, res) => {
  try {
    const { name, surname, email, msg, language } = req.body;

    const translations = loadTranslations(language);

    // Validazione dei dati dell'email
    const validationErrors = await validateEmailData(req.body);
    if (validationErrors) {
      return res.status(400).send({
        success: false,
        message: translations.validationFailed,
        errors: validationErrors,
      });
    }

    // Configurazione del trasportatore email
    let config = {
      service: "gmail",
      pool: true,
      maxConnections: 2,
      maxMessages: Infinity,
      port: 465,
      secure: true,
      auth: {
        user: process.env.EMAIL,
        pass: process.env.PASSWORD,
      },
    };

    let transporter = nodemailer.createTransport(config);

    // Configurazione del Mailgen per creare email HTML
    let MailGenerator = new Mailgen({
      theme: "cerberus",
      product: {
        name: "Aramis Todesco",
        link: "http://localhost:5173",
        logo: "URL",
        logoHeight: "100px",
      },
    });

    // Creazione del contenuto dell'email per l'utente
    let userResponse = {
      body: {
        greeting: translations.userGreeting,
        signature: translations.userSignature,
        name: name + " " + surname,
        intro: [translations.userIntro, msg],
        action: [
          {
            instructions: translations.userInstructions,
            button: {
              color: "#22bc66",
              text: translations.btnText,
              link: "http://localhost:5173",
              fallback: true,
            },
          },
        ],
        outro: translations.userOutro,
      },
    };

    let userMail = MailGenerator.generate(userResponse);

    // Creazione del contenuto dell'email per te stesso (l'amministratore)
    let adminResponse = {
      body: {
        greeting: "Ciao",
        signature: false,
        name: "Aramis",
        intro: [
          `Hai ricevuto un nuovo messaggio da: ${name} ${surname} (${email})`,
          msg,
        ],
        outro: "Ricordati di rispondere al più presto!",
      },
    };

    let adminMail = MailGenerator.generate(adminResponse);

    // Messaggio per inviare l'email all'utente
    let userMessage = {
      from: process.env.EMAIL,
      to: email,
      subject: translations.userSubject,
      html: userMail,
    };

    // Messaggio per inviare l'email a te stesso
    let adminMessage = {
      from: process.env.EMAIL,
      to: "tod.aramis@gmail.com",
      subject: `Nuovo messaggio da ${name} ${surname}`,
      html: adminMail,
    };

    // Invia entrambe le Promise in parallelo
    await Promise.all([
      transporter.sendMail(userMessage),
      transporter.sendMail(adminMessage),
    ]);

    return res.status(201).json({
      success: true,
      message: translations.successMessage,
    });
  } catch (err) {
    console.log(err);
    return res.status(500).send({
      success: false,
      message: translations.emailError,
    });
  }
};

module.exports = { sendEmailController };
