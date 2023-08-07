"use client"
import NavBar from '@/components/NavBar/NavBar';
import ProductList from '@/components/ProductsList/ProductList';
import { fetchProducts } from '@/redux/features/productsSlice';
import { useAppDispatch, useAppSelector } from '@/redux/hooks'
import { useEffect } from 'react';
import "./globals.css"

type LayoutProps = {
  children?: React.ReactNode
}

function HomePage() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchProducts())
  },[])

  return (
    <>
    <NavBar />
    <ProductList />
    </>
  )
}

export default HomePage