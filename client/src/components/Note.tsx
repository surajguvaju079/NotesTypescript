import React from "react";
import {
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  CardTitle,
} from "react-bootstrap";
import { Note as NoteModel } from "../model/note";

interface NoteProps {
  notes: NoteModel;
}

const Note = ({ notes }: NoteProps) => {
  return (
    <Card>
      <CardHeader className="text-bold flex justify-center bg-blue-900 text-white">
        <CardTitle>{notes?.title}</CardTitle>
      </CardHeader>
      <CardBody className="bg-slate-500 text-white">{notes?.text}</CardBody>
      <CardFooter className="bg-blue-700 text-white flex justify-between">
        <div>Created At:{notes?.createdAt}</div>
        <div>Updated At:{notes?.updatedAt}</div>
      </CardFooter>
    </Card>
  );
};

export default Note;
