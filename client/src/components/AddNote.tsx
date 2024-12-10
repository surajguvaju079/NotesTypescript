import { Button, Form, Modal } from "react-bootstrap";
import { NoteForm } from "../model/note";

interface props {
  dataForm: NoteForm;
  setDataForm: (value: NoteForm) => void;
  show: boolean;
  setShow: (value: boolean) => void;
  submitHandler: (e: React.FormEvent) => void;
}

const AddNote = ({
  dataForm,
  setDataForm,
  show,
  setShow,
  submitHandler,
}: props) => {
  console.log(dataForm);

  return (
    <Modal show={show} onHide={() => setShow(false)}>
      <Modal.Header className="grid place-content-center">
        <Modal.Title>Add Note</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={(e) => submitHandler(e)}>
          <Form.Group>
            <Form.Label>Title</Form.Label>
            <Form.Control
              type="text"
              value={dataForm.title}
              name="title"
              onChange={(e) => {
                setDataForm({
                  ...dataForm,
                  title: e.target.value,
                });
              }}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Text</Form.Label>
            <Form.Control
              as="textarea"
              rows={5}
              value={dataForm.text}
              name="text"
              onChange={(e) => {
                setDataForm({
                  ...dataForm,
                  text: e.target.value,
                });
              }}
            />
          </Form.Group>
          <Form.Group className="mt-2 ">
            <Button type="submit" className="w-full">
              Submit
            </Button>
          </Form.Group>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

export default AddNote;
