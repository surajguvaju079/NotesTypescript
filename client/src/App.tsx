import React, { useEffect, useState } from "react";

import { addNote, getAllNotes } from "./api/api";
import { NoteForm, Note as NoteModel } from "./model/note";

import Note from "./components/Note";
import { Button, Container } from "react-bootstrap";
import AddNote from "./components/AddNote";

const formData: NoteForm = {
  title: "",
  text: "",
};

function App() {
  const [dataForm, setDataForm] = useState<NoteForm>(formData);
  const [show, setShow] = useState<boolean>(false);
  const [notes, setNotes] = useState<NoteModel[]>([]);
  const submitHandler = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(dataForm);
    addNote(dataForm)
      .then((data) => {
        console.log(data);
        setDataForm(formData);
        setShow(false);

        getAllNotes()
          .then((response) => setNotes(response?.data))
          .catch((error) => console.log(error));
      })
      .catch((error) => console.log(error));
  };
  useEffect(() => {
    getAllNotes()
      .then((response) => setNotes(response?.data))
      .catch((error) => console.log(error));
  }, []);
  return (
    <Container>
      <div className="mx-3 text-green-700 font-bold">
        <Button
          variant="primary"
          className="text-white hover:font-extrabold"
          onClick={() => setShow(true)}
        >
          ADD NOTE
        </Button>
      </div>
      <AddNote
        submitHandler={submitHandler}
        setShow={setShow}
        show={show}
        dataForm={dataForm}
        setDataForm={setDataForm}
      />

      <div className="mt-3 mx-3 grid md:grid-cols-2 sm:grid-cols-1 lg:grid-cols-3 xl:grid-cols-4 gap-3">
        {notes?.map((note) => (
          <Note notes={note} />
        ))}
      </div>
    </Container>
  );
}

export default App;
