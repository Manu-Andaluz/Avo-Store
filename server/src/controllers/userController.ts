import { pool } from "../routes/index";
import { User, UserError, UserResponse } from "../../types";
import { generatheAuthToken } from "../utils/jwt/generateAuthToken";
import bcrypt from "bcrypt";
import { Request, Response } from "express";

export const loginController = async (req: Request, res: Response) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(500).send("Missing data");
  }

  try {
    pool.query(
      `SELECT * FROM users WHERE email = '${email}' `,
      async (error: UserError, response: UserResponse) => {
        if (error) {
          return error;
        }
        const validatePassword = await bcrypt.compare(
          password,
          response.rows[0].password
        );
        if (validatePassword) {
          const token = await generatheAuthToken(response.rows[0]);
          res.status(200).send(token);
        } else {
          throw Error("Incorrect user or password");
        }
      }
    );
  } catch (error) {
    console.log(error);
    res.status(400).json(error);
  }
};

export const registerController = async (req: Request, res: Response) => {
  const { email, name, password } = req.body;

  if (!email || !name || !password) {
    return res.status(500).send("Missing data");
  }

  let hashedPassword = await bcrypt.hash(password, 8);

  try {
    pool.query(
      `INSERT INTO users (email,password,name)
      VALUES(
        '${email}','${hashedPassword}','${name}'
      ) RETURNING *;
      `,
      async (error: UserError, response: UserResponse) => {
        if (error) {
          console.log(res);
          return res
            .status(404)
            .send({ error: error, errorMessage: error.detail });
        }
        const token = await generatheAuthToken(response.rows[0]);
        res.status(201).send(token);
      }
    );
  } catch (error) {
    console.log(error);
    res.status(400).json(error);
  }
};
