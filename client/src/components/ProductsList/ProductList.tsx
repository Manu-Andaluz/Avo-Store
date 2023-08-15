import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import React, { useEffect } from "react";
import ProductCard from "../ProductCard/ProductCard";
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from "@mui/material/Typography";
import ConsoleIcon from "../SVGIcons/AvoIcon";
import { fetchProducts } from "@/redux/features/productsSlice";
import { loadUser } from "@/redux/features/userSlice";

function ProductList() {
  const products = useAppSelector((state) => state.productReducer.data)
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(fetchProducts())
    dispatch(loadUser())
  },[])

  return (
  <Box sx={{ flexGrow: 1 }} style={{margin: "20vh 4rem"}}>
    <Box sx={{display:{xs:"none",md:"grid"}, placeContent:"center", margin:"10vh 0"}}>
    <Typography variant="h1" sx={{ fontSize:"1.6rem"}} style={{fontWeight:"500"}}>Welcome to Avo <ConsoleIcon style={{margin:"0 10px",}} size="45"/> Store</Typography>
    </Box>
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
