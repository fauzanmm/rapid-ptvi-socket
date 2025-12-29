import express from "express";
import cors from "cors";
import { errorMiddleware } from "../middleware/error-middleware.js";

export const web = express();
web.use(cors());
web.use(express.json());

web.use(errorMiddleware);
