import Note from "../model/note";

export const getNote = async (
  req: { body: { user: string; email: string } },
  res: {
    status: (arg0: number) => {
      (): any;
      new (): any;
      json: { (arg0: { success: boolean; message: string }): any; new (): any };
    };
  }
) => {
  const { user, email } = req.body;
  const note = Note.create({ title: user, note: email });
  console.log(note);

  return res
    .status(200)
    .json({ success: true, message: "note fetched successfully" });
};
