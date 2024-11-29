import express from "express";
import Note from "./model/note";
const app = express();
app.get("/", async (req, res) => {
  const note = await Note.find().exec();
  res.status(200).json({ note });
});
export default app;
