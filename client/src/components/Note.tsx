import {
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  CardTitle,
} from "react-bootstrap";
import { Note as NoteModel } from "../model/note";
import { formatDate } from "../utils/formatDate";

interface NoteProps {
  notes: NoteModel;
}

let createdUpdatedText: string;
const Note = ({ notes }: NoteProps) => {
  if (notes.createdAt > notes.updatedAt) {
    createdUpdatedText = "Created At:" + formatDate(notes.createdAt);
  } else {
    createdUpdatedText = "Updated At:" + notes.updatedAt;
  }

  return (
    <Card>
      <CardHeader className="text-bold flex justify-center bg-blue-900 text-white">
        <CardTitle>{notes?.title}</CardTitle>
      </CardHeader>
      <CardBody className="bg-slate-500 text-white">{notes?.text}</CardBody>
      <CardFooter className="bg-blue-700 text-white flex justify-between">
        {/* <div>Created At:{formatDate(notes?.createdAt)}</div>
        <div>Updated At:{formatDate(notes?.updatedAt)}</div> */}
        <div>{createdUpdatedText}</div>
      </CardFooter>
    </Card>
  );
};

export default Note;
