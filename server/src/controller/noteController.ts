import mongoose from "mongoose";
import { RequestHandler } from "express";
import Notes from "../model/note";
import createHttpError from "http-errors";

export const getNotes: RequestHandler = async (req, res, next) => {
  try {
    //throw Error("Bazinga");
    const notes = await Notes.find().exec();
    res.status(200).json(notes);
  } catch (error) {
    next(error);
  }
};

export const getNote: RequestHandler<{ id: string }> = async (
  req,
  res,
  next
) => {
  const { id } = req.params;
  try {
    if (!mongoose.isValidObjectId(id)) {
      throw createHttpError(400, "note id is not valid");
    }
    const noteExist = await Notes.findById(id).exec();
    if (!noteExist) {
      throw createHttpError(404, "notes not found");
    }
    res.status(201).json(noteExist);
  } catch (error) {
    next(error);
  }
};

interface CreateNoteBody {
  title?: string;
  text?: string;
}

export const createNotes: RequestHandler<
  unknown,
  unknown,
  CreateNoteBody,
  unknown
> = async (req, res, next) => {
  const { title, text } = req.body;
  try {
    if (!title) {
      throw createHttpError(400, "title was not found");
    }
    const newNote = await Notes.create({ title, text });
    res.status(201).json(newNote);
  } catch (error) {
    next(error);
  }
};

interface UpdateNoteBody {
  title?: string;
  text?: string;
}

export const updateNotes: RequestHandler<
  { id: string },
  unknown,
  UpdateNoteBody,
  unknown
> = async (req, res, next) => {
  const { title, text } = req.body;
  const { id } = req.params;
  console.log(id);

  try {
    if (!mongoose.isValidObjectId(id)) {
      throw createHttpError(400, "note it is not valid");
    }
    const noteExist = await Notes.findById(id).exec();
    if (!noteExist) {
      throw createHttpError(404, "notes not found");
    }
    //    noteExist.title = title;
    //  noteExist.text = text;
    //await noteExist.save();
    const noteUpdate = await Notes.findByIdAndUpdate(
      id,
      { title, text },
      { new: true, runValidators: true }
    ).exec();
    // If no note is updated (rare case)
    if (!noteUpdate) {
      throw createHttpError(500, "Failed to update the note");
    }

    res.status(200).json(noteUpdate);
  } catch (error) {
    next(error);
  }
};

export const deleteNotes: RequestHandler<{ id: string }> = async (
  req,
  res,
  next
) => {
  const { id } = req.params;
  try {
    if (!mongoose.isValidObjectId(id)) {
      throw createHttpError(400, "Note id is not valid");
    }

    const noteExist = await Notes.findById(id);
    if (!noteExist) {
      throw createHttpError(404, "notes not found");
    }

    await Notes.findByIdAndDelete(id);
    res.sendStatus(204);
  } catch (error) {
    next(error);
  }
};
