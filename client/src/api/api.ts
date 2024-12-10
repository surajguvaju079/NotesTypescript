import axios from "axios";
import { NoteForm } from "../model/note";

export const getAllNotes = async () => {
  try {
    const response = axios.get("http://localhost:8000/api/notes");
    return response;
  } catch (error) {
    console.error(error);
    alert(error);
  }
};

export const addNote = async (dataForm: NoteForm) => {
  try {
    const response = axios.post(
      `http://localhost:8000/api/notes/create`,
      dataForm
    );
    return response;
  } catch (error) {
    console.error(error);
    alert(error);
  }
};
