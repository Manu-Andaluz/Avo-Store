import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./features/productsSlice";
import cartReducer from "./features/cartSlice";
import userReducer from "./features/userSlice";

export const store = configureStore({
  reducer: {
    productReducer,
    cartReducer,
    userReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
