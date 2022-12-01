const express = require("express");
const cors = require("cors");
const body_parser = require("body-parser");
const dotenv = require("dotenv");

const APP = express();

const pet_router = require("./src/routers/pet");

APP.use(body_parser.json());
APP.use(cors());

dotenv.config();

const PORT = process.env.PORT;

APP.use(pet_router);

APP.listen(PORT, () => console.log("server is up!"));