const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
//const rateLimit = require("express-rate-limit");
require("dotenv").config();

const PORT = process.env.PORT || 5000;

const app = express();

app.use(cors());

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
//Routes
app.use("/api/", require("."));

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
