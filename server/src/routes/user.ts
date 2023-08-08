import express from "express";
import { Request, Response } from "express";
export const userRouter = express();
import { pool } from "./index";
import bcrypt from "bcrypt";
import { User, UserError, UserResponse } from "../../types";
import { generatheAuthToken } from "../utils/jwt/generateAuthToken";

userRouter.get("/", (req: Request, res: Response) => {
  res.send("Hola");
});

userRouter.post("/register", async (req: Request, res: Response) => {
  try {
    const { email, name } = req.body;
    let { password } = req.body;

    if (!email || !name || !password) {
      return res.status(500).send("Missing data");
    }

    password = await bcrypt.hash(password, 8);

    pool.query(
      `INSERT INTO users (email,password,name)
      VALUES(
        '${email}','${password}','${name}'
      );
      `,
      (error: UserError, response: UserResponse) => {
        if (error) {
          return res
            .status(404)
            .send({ error: error, errorMessage: error.detail });
        }
        return res.status(201).send("User created");
      }
    );
  } catch (error) {
    console.log(error);
    res.status(404).send(error);
  }
});

userRouter.post("/loggin", async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      console.log(email, password);
      return res.status(500).send("Missing data");
    }

    pool.query(
      `SELECT * FROM users WHERE email = '${email}' `,
      async (error: UserError, response: UserResponse) => {
        if (error) {
          return res.status(404).send(error);
        }
        const validatePassword = await bcrypt.compare(
          password,
          response.rows[0].password
        );
        if (validatePassword) {
          const token = await generatheAuthToken(response.rows[0]);
          res.status(200).send(token);
        } else {
          res.send("Incorrect user or password");
        }
      }
    );
  } catch (error) {
    console.log(error);
    res.status(404).send(error);
  }
});
