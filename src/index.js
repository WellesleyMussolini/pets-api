import app from "./app.js";
import ip from "ip";
import dotenv from "dotenv";

dotenv.config();

const protocol = process.env.PROTOCOL || "http";
const address = ip.address();
const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log("Compiled successfully!");
    console.log("You can now view your app in the browser.");
    console.log(`Local:            "http://localhost:${port}"`);
    console.log(`On Your Network:  "${protocol}://${address}:${port}"`);
});