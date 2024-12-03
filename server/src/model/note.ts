import mongoose from "mongoose";
import { Schema } from "mongoose";

interface Note {
  title: string;
  text: string;
}

const noteModel = new Schema<Note>(
  {
    title: {
      type: String,
      required: true,
    },
    text: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

const Notes = mongoose.model<Note>("Note", noteModel);
export default Notes;
