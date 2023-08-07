import express from "express";
import { Request, Response } from "express";
export const productRouter = express();
import { pool } from "./index";

type Url = string;

type TProduct = {
  id: string | number;
  name: string;
  price: number;
  image: Url;
  desciption: string;
  stock: number;
  quantity: number;
};

type ProductResponse = {
  command: string;
  rowCount: number;
  oid: null;
  rows: TProduct[];
  fields: [];
  _parsers: [];
  _types: {};
  RowCtor: null;
  rowAsArray: boolean;
};

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
        res.send(results.rows);
      }
    );
  } catch (error) {
    res.status(404).send(error);
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
        res.status(200).send(results.rows[0]);
      }
    );
  } catch (error) {
    console.log(error);
    res.status(404).send(error);
  }
});
