import mongoose from "mongoose";
import { Schema } from "mongoose";

const noteModel = new Schema({
  title: {
    type: String,
    required: true,
  },
  text: {
    type: String,
  },
});
const Note = mongoose.model("Note", noteModel);

export default Note;
