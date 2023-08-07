import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type TProductCart = {
  id: string | number;
  name: string;
  price: number;
  image_url: string;
  description: string;
  quantity: number;
};

const initialState = {
  cartItems:
    typeof window !== "undefined" && localStorage.getItem("cartItems")
      ? JSON.parse(localStorage.getItem("cartItems") || "")
      : new Array<TProductCart>(),
  cartQuantity:
    typeof window !== "undefined" && localStorage.getItem("cartItems")
      ? JSON.parse(localStorage.getItem("cartItems") || "").length
      : 0,
  cartAmount: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const item = state.cartItems.find(
        (item: TProductCart) => item.id === action.payload.id
      );

      if (item?.quantity && item.quantity > 9) return;

      if (item) {
        item.quantity++;
        state.cartAmount += item.price;
      } else {
        state.cartItems.push({ ...action.payload, quantity: 1 });
        state.cartQuantity++;
        state.cartAmount += action.payload.price;
      }

      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
    },

    removeFromCart: (state, action) => {
      const item = state.cartItems.find(
        (item: TProductCart) => item.id === action.payload.id
      );

      if (item && item.quantity > 1) {
        item.quantity -= 1;
        state.cartAmount -= item.price;
      } else {
        const newCart = state.cartItems.filter(
          (item: TProductCart) => item.id !== action.payload.id
        );
        state.cartItems = newCart;
        state.cartQuantity--;
        state.cartAmount -= action.payload.price;
      }

      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
    },

    getTotal: (state) => {},

    emptyCart: (state) => {
      state.cartItems.length = 0;
      (state.cartQuantity = 0), (state.cartAmount = 0);

      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
    },
  },
});

export const { addToCart, removeFromCart, emptyCart } = cartSlice.actions;
export default cartSlice.reducer;
