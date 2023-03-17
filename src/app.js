import express from "express";
import routes from "./routes.js";
import bodyParser from "body-parser";
import cors from "cors";
import { connection } from "./database/connection.js";

const app = express();

connection();

app.use(cors());
app.use(bodyParser.json());
app.use(routes);

export default app;