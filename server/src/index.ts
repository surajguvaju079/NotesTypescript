//import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import app from "./app";
dotenv.config();

const port = process.env.PORT || 3000;

if (!process.env.MONGO_DB_URI_PASSWORD) {
  throw new Error("MONGO_DB_URI is not defined in environment variables.");
}

mongoose
  .connect(
    `mongodb+srv://surajguvaju0:${process.env.MONGO_DB_URI_PASSWORD}@cluster0.u4wiv.mongodb.net/cool_notes_app?retryWrites=true&w=majority&appName=Cluster0`
  )
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
