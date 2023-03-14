const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const serverless = require("serverless-http");

require("dotenv").config();

const app = express();
app.use(cors());
app.use(bodyParser.json());

const authRouter = require("../routes/authRouter");
app.use("/.netlify/functions/api/auth", authRouter);

app.listen(3001);

module.exports.handler = serverless(app);
