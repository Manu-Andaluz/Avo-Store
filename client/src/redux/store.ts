import { configureStore } from "@reduxjs/toolkit";
import productReducer from './features/productsSlice'
import cartReducer from './features/cartSlice'

export const store = configureStore({
    reducer:{
        productReducer,
        cartReducer
    }
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;