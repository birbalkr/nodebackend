import connectDB from "./db/index.js";
import dotenv from "dotenv";

// Load environment variables from .env file
dotenv.config({
    path: "./env"
});

// call database connection
connectDB();