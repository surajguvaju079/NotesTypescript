import express, { NextFunction, Request, Response } from "express";
import morgan from "morgan";
import { isHttpError } from "http-errors";
//import Notes from "./model/note";
import notesRoute from "./routes/notes";
import createHttpError from "http-errors";
const app = express();

app.use(morgan("dev"));
app.use(express.json());
app.use("/api/notes", notesRoute);
app.use((req, res, next) => {
  next(createHttpError(404, "Endpoint not found"));
});

// eslint-disable-next-line @typescript-eslint/no-unused-vars
app.use((error: unknown, req: Request, res: Response, next: NextFunction) => {
  console.error(error);
  let errorMessage = "An unknown error occurred";
  let statusCode = 500;
  if (isHttpError(error)) {
    statusCode = error.status;
    errorMessage = error.message;
  }
  res.status(statusCode).json({
    error: errorMessage,
  });
});
export default app;
