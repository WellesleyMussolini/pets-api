import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const database = process.env.MONGODB_USER;
const password = process.env.MONGODB_PASSWORD;

export const connection = async () => {
    try {
        await mongoose.connect(`mongodb+srv://${database}:${password}@cluster0.7xdbvva.mongodb.net/?retryWrites=true&w=majority`);
        console.log({database: "connected"});
    } catch (error) {
        console.log({ error: error })
    };
};