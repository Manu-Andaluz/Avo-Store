import React, { useState } from 'react'
import Card from '@mui/material/Card';
import Button from '@mui/material/Button';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import { TProduct } from '@/redux/features/productsSlice';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { useAppDispatch } from '@/redux/hooks';
import { addToCart } from '@/redux/features/cartSlice';
import Box from "@mui/material/Box";
import { Alert } from '@mui/material';

export default function ProductDetails({id,name,image_url,price,description,quantity} : TProduct) {
  const [toCart, setToCart] = useState(false)
  const dispatch = useAppDispatch()

  const handleClick = () => {
    dispatch(addToCart({id,name,price,image_url,quantity}))
    setToCart(true)
    setTimeout(() => {
      setToCart(false)
    },3000)
  }

  return (
    <Box  sx={{ display: 'flex', width:"80%", margin: "0 auto", flexWrap:"wrap",placeContent:"center", textAlign:"center" }} key={id}>
        <CardMedia
        component="img"
        sx={{ width: 200 }}
        image={image_url}
        alt="Live from space album cover"
      />
      <Grid container direction="column" spacing={0} gap={2} style={{margin: "2rem 0", placeContent:"center"}}>
          <Typography component="div" variant="h5">
            {name}
          </Typography>
          <Typography>${price}</Typography>
          <Typography variant="subtitle1" color="text.secondary" component="div">
            {description}
          </Typography>
          { toCart ? <Alert variant='outlined' severity="success" style={{width:"40vh", margin:"auto"}}>Added to cart</Alert> : <Button onClick={handleClick} variant='contained' style={{width:"40vh", margin:"auto"}}>Add to cart <AddShoppingCartIcon sx={{fontSize:"1.2rem", marginLeft: "10px"}}/></Button>}
          
      </Grid>
      
    </Box>
  );
}