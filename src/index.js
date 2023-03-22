import app from "./app.js";
import ip from "ip";
import dotenv from "dotenv";

dotenv.config();

const protocol = process.env.PROTOCOL || "http";
const address = ip.address();
const port = process.env.PORT || 3000;

app.listen(port, () => console.log(`Server started at "http://localhost:${port}" or "${protocol}://${address}:${port}"`));