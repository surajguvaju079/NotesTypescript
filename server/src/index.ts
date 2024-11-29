import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
dotenv.config();
const app = express();
const port = process.env.PORT || 3000;

if (!process.env.MONGO_DB_URI) {
  throw new Error("MONGO_DB_URI is not defined in environment variables.");
}

mongoose
  .connect(process.env.MONGO_DB_URI)
  .then(() => {
    console.log("Database is connected...");
    app.listen(port, () => {
      console.log(`Server is listening at port:${port}`);
    });
  })
  .catch((err) => {
    console.error("Database connection failed:", err);
    process.exit(1); // Exit the process if database connection fails
  });
