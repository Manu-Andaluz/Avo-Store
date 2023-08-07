import { useAppSelector } from "@/redux/hooks";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import axios from "axios";
import { TProduct } from "@/redux/features/productsSlice";
import ProductDetails from "@/components/ProductDetails/ProductDetails";
import "../../app/globals.css"
import HomePage from '../../app/page'
import NavBar from "@/components/NavBar/NavBar";

export default function Page({params} : {params: {id: string}}) {
  const [product, setProduct] = useState(new Array <TProduct>);
  const router = useRouter()

  const fetchProduct = async () => {
    try {
      const { data, status } = await axios.get<TProduct>(
        `http://localhost:5000/product//productById/${router.query.id}`
      );
      setProduct([data])
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (router.isReady) {
    fetchProduct()
    }
  }, [router.isReady,setProduct]);

  return(
   <>
   <NavBar />
   <div style={{marginTop:"20vh"}}>
     {product[0] ? (
     <ProductDetails id={product[0].id} stock={product[0].stock} name={product[0].name} price={product[0].price} image_url={product[0].image_url} description={product[0].description} quantity={product[0].quantity}/>
     ) : (<p>El producto que buscas no existe</p>)}
   </div>
   </>
  )
}

