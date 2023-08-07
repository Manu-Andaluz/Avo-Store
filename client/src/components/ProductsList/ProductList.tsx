import { useAppSelector } from "@/redux/hooks";
import React from "react";
import ProductCard from "../ProductCard/ProductCard";
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';

function ProductList() {
  const products = useAppSelector((state) => state.productReducer.data)

  return (
  <Box sx={{ flexGrow: 1 }} style={{margin: "20vh 4rem"}}>
    <Grid container spacing={8} justifyContent="center" alignItems="center">
    {products && products.map((product) => {
    return(
        <ProductCard key={product.id} id={product.id} name={product.name} price={product.price} image_url={product.image_url} description={product.description} quantity={0}  stock={0}/>
    )
  })}
  </Grid>
  </Box>
  )
}

export default ProductList;
