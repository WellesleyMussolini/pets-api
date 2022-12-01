const express = require("express");
const cors = require("cors");
const body_parser = require("body-parser");
const dotenv = require("dotenv");

dotenv.config();

const APP = express();

const PORT = process.env.PORT;

APP.use(body_parser.urlencoded({extended: false}));
APP.use(express.json());
APP.use(cors());
APP.listen(PORT, () => {
    console.log("server is up!");
    return;
});