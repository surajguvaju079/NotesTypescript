import express from "express";
import * as NotesController from "../controller/noteController";
const router = express.Router();
router.get("/", NotesController.getNotes);
router.post("/create", NotesController.createNotes);
router.get("/getone/:id", NotesController.getNote);
router.put("/update/:id", NotesController.updateNotes);
router.delete("/delete/:id", NotesController.deleteNotes);

export default router;
