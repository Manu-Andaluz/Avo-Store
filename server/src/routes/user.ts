import express from "express";
import { Request, Response } from "express";
export const userRouter = express();
import { pool } from "./index";
import bcrypt from "bcrypt";
import { User, UserError, UserResponse } from "../../types";
import {
  loginController,
  registerController,
} from "../controllers/userController";

userRouter.get("/", (req: Request, res: Response) => {
  res.send("Hola");
});

userRouter.post("/register", registerController);

userRouter.post("/loggin", loginController);
