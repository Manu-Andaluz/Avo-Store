import express from "express";
import { Request, Response } from "express";
export const productRouter = express();
import { pool } from "./index";
import { TProduct, ProductResponse } from "../../types";

productRouter.get("/allProducts", async (req: Request, res: Response) => {
  try {
    pool.query(
      "SELECT * FROM product",
      (error: object, results: ProductResponse) => {
        if (error) {
          throw error;
        }
        results.rows.map((data) => {
          data.id = `${data.id}`;
        });
        return res.send(results.rows);
      }
    );
  } catch (error) {
    return res.status(404).send(error);
  }
});

productRouter.get("/productById/:id", async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    pool.query(
      `SELECT * FROM product WHERE id = ${id}`,
      (error: object, results: ProductResponse) => {
        if (error || !results.rows[0]) {
          return [];
        }
        return res.status(200).send(results.rows[0]);
      }
    );
  } catch (error) {
    console.log(error);
    return res.status(404).send(error);
  }
});
