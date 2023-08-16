import express from "express";
export const orderRouter = express();
import { Request, Response } from "express";
import { Stripe } from "stripe";
import { TProduct, CheckoutProducts } from "../../types";
import { makeCheckoutProducts } from "../controllers/orderController";

orderRouter.get("/", async (req: Request, res: Response) => {
  res.send("Hola");
});

orderRouter.post("/checkout", async (req: Request, res: Response) => {
  try {
    const key = process.env.STRIPE_API_KEY || "";
    const data = <TProduct[]>req.body;

    const products = await (<CheckoutProducts[]>makeCheckoutProducts(data));

    const stripe = new Stripe(key, {
      apiVersion: "2022-11-15",
    });

    const session = await stripe.checkout.sessions.create({
      mode: "payment",
      payment_method_types: ["card"],
      line_items: products,
      success_url: "https://avo-store-manu-andaluz.vercel.app",
      cancel_url: "https://avo-store-manu-andaluz.vercel.app",
    });

    res.send({ totalSession: session, checkoutUrl: session.url });
  } catch (error) {
    console.log(error);
    res.status(404).send(error);
  }
});
