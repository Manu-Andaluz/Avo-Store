import React, { useState } from 'react'
import { TProduct } from "@/redux/features/productsSlice";
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import Image from 'next/image'
import { useAppDispatch } from '@/redux/hooks';
import { addToCart } from '@/redux/features/cartSlice';
import Link from 'next/link'
import { Alert } from '@mui/material';

function ProductCard({id,name,price,image_url,description,quantity}: TProduct) {
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
    <Grid item style={{textAlign:"center"}}>
    <Card sx={{ minWidth:250 }} variant='outlined'>
      <Link href={`/product/${id}`}>
      <CardMedia
        title={name}
        style={{paddingTop:"1rem"}}
      >
        <Image
        width={200}
        height={250}
        src={image_url}
        alt={name}
    />
      </CardMedia>
      </Link>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {name}
        </Typography>
      </CardContent>
      <CardActions style={{display:"flex", justifyContent:"center"}}>
        <Typography variant="h6"> {price}</Typography>
        
      { toCart ? <Alert severity="success">Added to cart</Alert> : <Button size="large" onClick={handleClick} style={{position:"inherit"}}><AddShoppingCartIcon /></Button>}
      </CardActions>
    </Card>
    </Grid>
  )
}

export default ProductCard