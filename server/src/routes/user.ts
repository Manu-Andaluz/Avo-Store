import express from "express";
import { Request, Response } from "express";
export const userRouter = express();
import { pool } from "./index";
import bcrypt from "bcrypt";

type User = {
  email: string;
  password: string;
  name: string;
  isAdmin: Boolean;
  googleId: string | null;
};

type UserResponse = {
  command: string;
  rowCount: number;
  oid: null;
  rows: User[];
  fields: [];
  _parsers: [];
  _types: {};
  RowCtor: null;
  rowAsArray: boolean;
};

userRouter.get("/", (req: Request, res: Response) => {
  res.send("Hola");
});

userRouter.post("/register", async (req: Request, res: Response) => {
  try {
    const { email, name } = req.body;
    let { password } = req.body;

    password = await bcrypt.hash(password, 8);

    pool.query(
      `INSERT INTO users (email,password,name)
      VALUES(
        '${email}','${password}','${name}'
      );
      `,
      (error: object, response: any) => {
        if (error) {
          res.status(404).send(error);
        }
        res.send(response);
      }
    );
  } catch (error) {
    console.log(error);
    res.status(404).send(error);
  }
});

userRouter.get("/loggin", async (req: Request, res: Response) => {
  try {
    const { id, password } = req.body;

    pool.query(
      `SELECT * FROM users WHERE email = '${id}' `,
      async (error: object, response: UserResponse) => {
        if (error) {
          res.status(404).send(error);
        }
        const validatePassword = await bcrypt.compare(
          password,
          response.rows[0].password
        );
        if (validatePassword) {
          res.status(200).send(response.rows[0]);
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
