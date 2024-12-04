import { useEffect, useState } from "react";

import { getAllNotes } from "./api/api";
import { Note as NoteModel } from "./model/note";

import Note from "./components/note";
import { Container } from "react-bootstrap";

function App() {
  const [notes, setNotes] = useState<NoteModel[]>([]);
  useEffect(() => {
    getAllNotes()
      .then((response) => setNotes(response?.data))
      .catch((error) => console.log(error));
  }, []);
  return (
    <Container>
      <div className="mt-3 mx-3 grid md:grid-cols-2 sm:grid-cols-1 lg:grid-cols-3 xl:grid-cols-4 gap-3">
        {notes?.map((note) => (
          <Note notes={note} />
        ))}
      </div>
    </Container>
  );
}

export default App;
