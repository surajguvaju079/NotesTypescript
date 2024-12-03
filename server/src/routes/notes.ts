import express from "express";
import * as NotesController from "../controller/noteController";
const router = express.Router();
router.get("/", NotesController.getNotes);
router.post("/create", NotesController.createNotes);

export default router;
