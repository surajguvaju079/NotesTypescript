import Note from "../model/note";

export const getNote = async (req, res) => {
  const { user, email } = req.body;
  const note = Note.create({ title: user, note: email });
  console.log(note);

  return res
    .status(200)
    .json({ success: true, message: "note fetched successfully" });
};
