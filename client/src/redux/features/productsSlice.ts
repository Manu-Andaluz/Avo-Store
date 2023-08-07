import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Dispatch } from 'redux'
import axios from "axios";

export type TProduct = {
    id: string | number
    name: string
    price: number
    image_url: string
    description: string
    stock: number
    quantity: number
}

const initialState = {
    data: new Array<TProduct>,
    status:"empty"
}

const productsSlice = createSlice({
    name:"product",
    initialState,
    reducers:{
        setProducts: (state,action) => {
            state.data = action.payload
        },
        setStatus(state, action){
            state.status = action.payload;
        },
    }
})

export const {setProducts, setStatus} = productsSlice.actions;
export default productsSlice.reducer;

export const fetchProducts = () => {
    return async function fetchProductsThunk(dispatch:Dispatch) {
        try {
            const {data,status} = await axios.get<TProduct>('http://localhost:5000/product/allProducts')
            dispatch(setProducts(data))
            dispatch(setStatus('fullfield'))
        } catch (error) {
            dispatch(setStatus(error))
        }
    }
}