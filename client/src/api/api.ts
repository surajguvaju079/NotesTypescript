import axios from "axios";

export const getAllNotes = async () => {
  try {
    const response = axios.get("http://localhost:8000/api/notes");
    return response;
  } catch (error) {
    console.error(error);
    alert(error);
  }
};
