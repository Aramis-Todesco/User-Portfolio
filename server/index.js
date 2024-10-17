const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const helmet = require("helmet");
const portfolioRoute = require("./routes/portfolioRoute.js");

//dotenv configuration
dotenv.config();

//rest object
const app = express();

//middleware
app.use(helmet());
app.use(
  cors({
    origin: ["http://127.0.0.1:5173", "http://localhost:5173"],
    credentials: true,
  })
);
app.use(express.json());

//routes
app.use("/api", portfolioRoute);

//port
const PORT = process.env.PORT || 8080;

//listen
app.listen(PORT, () => {
  console.log(`Server running on ${PORT}`);
});
