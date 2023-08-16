import { TProduct } from "../../types";

export const makeCheckoutProducts = (products: TProduct[]) => {
  const arr = products.map((item) => {
    return {
      price_data: {
        currency: "usd",
        product_data: {
          name: item.name,
          images: [item.image_url],
        },
        unit_amount: Math.round(item.price * 100),
      },
      quantity: item.quantity,
    };
  });
  return arr;
};
