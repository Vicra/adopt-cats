const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

require("dotenv").config();

const app = express();
app.use(cors());
app.use(bodyParser.json());

// instancias de routes
const authRouter = require("./routes/authRouter");

// Definicion de routes
app.use("/auth", authRouter);

app.listen(3001);
