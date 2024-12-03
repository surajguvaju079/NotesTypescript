import { RequestHandler } from "express";
import Notes from "../model/note";

export const getNotes: RequestHandler = async (req, res, next) => {
  try {
    //throw Error("Bazinga");
    const notes = await Notes.find().exec();
    res.status(200).json(notes);
  } catch (error) {
    next(error);
  }
};

export const getNote: RequestHandler = async (req, res, next) => {
  const { id } = req.params;
  try {
    const noteExist = await Notes.findById(id).exec();
    if (noteExist) res.status(201).json(noteExist);
  } catch (error) {
    next(error);
  }
};

export const createNotes: RequestHandler = async (req, res, next) => {
  const { title, text } = req.body;
  try {
    const newNote = await Notes.create({ title, text });
    res.status(201).json(newNote);
  } catch (error) {
    next(error);
  }
};
