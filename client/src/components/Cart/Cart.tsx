import { Drawer, Button, Typography, Box } from "@mui/material";
import { styled } from "@mui/material/styles";
import { useEffect, useState } from "react";
import ShoppingCartIcon from "../NavBar/ShoppingCartIcon";
import CloseIcon from "@mui/icons-material/Close";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import CartItem from "../CartItems/CartItem";
import Grid from "@mui/material/Grid";
import { emptyCart, getTotal } from "@/redux/features/cartSlice";
import { TProduct } from "@/redux/features/productsSlice";
import ProductionQuantityLimitsIcon from "@mui/icons-material/ProductionQuantityLimits";
import axios from "axios";
import { TransitionGroup } from "react-transition-group";
import Collapse from "@mui/material/Collapse";
import styles from "./Cart.module.css";

const drawerWidth = 240;

const DrawerContainer = styled(Drawer)({
  width: drawerWidth,
  flexShrink: 0,
});

const DrawerPaper = styled("div")({
  width: drawerWidth,
});

const Cart = () => {
  const [sideBar, setSideBar] = useState(false);
  const [mounted, setMounted] = useState(false);

  const dispatch = useAppDispatch();
  const cart = useAppSelector((state) => state.cartReducer);

  useEffect(() => {
    setMounted(true);
    dispatch(getTotal());
  }, []);

  const handleCheckout = () => {
    axios
      .post(`${process.env.NEXT_PUBLIC_API_URL}/order/checkout`, cart.cartItems)
      .then((res) => {
        if (res) {
          window.location.href = res.data.checkoutUrl;
        }
      });
  };

  if (mounted) {
    return (
      <div>
        <div
          className={`${styles.cart} ${
            sideBar ? styles.open_navbar : styles.closed_navbar
          }`}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "1rem",
              justifyContent: "space-between",
              color: "black",
              padding: "2rem 10px",
              width: "100%",
            }}
          >
            <Typography
              component="h4"
              variant="h5"
              style={{ fontSize: "1.5rem" }}
            >
              Shopping cart
            </Typography>
            <Button onClick={() => setSideBar(false)}>
              <CloseIcon />
            </Button>
          </div>
          {cart.cartItems.length > 0 ? (
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                flexWrap: "wrap",
                width: { xs: "100%", md: "100%", lg: "500px" },
              }}
            >
              <TransitionGroup>
                {cart.cartItems &&
                  cart.cartItems.map((item: TProduct) => {
                    return (
                      <Collapse key={item.id}>
                        <CartItem
                          id={item.id}
                          name={item.name}
                          image_url={item.image_url}
                          price={item.price}
                          quantity={item.quantity}
                        />
                      </Collapse>
                    );
                  })}
              </TransitionGroup>
              <Grid
                container
                direction="column"
                spacing={0}
                gap={2}
                style={{ margin: "2rem 0", textAlign: "center" }}
              >
                <Typography
                  style={{ width: "50%", margin: " auto", fontSize: "1.2rem" }}
                >
                  Total: ${cart.cartAmount.toFixed(2)} USD
                </Typography>
                <Button
                  style={{ color: "red", width: "50%", margin: " auto" }}
                  onClick={() => dispatch(emptyCart())}
                >
                  Clear cart
                </Button>
                <Button
                  variant="contained"
                  style={{ width: "50%", margin: "auto" }}
                  onClick={handleCheckout}
                >
                  Checkout
                </Button>
              </Grid>
            </Box>
          ) : (
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <Typography
                variant="h4"
                style={{ fontSize: "1.5rem", margin: "2rem 1rem" }}
              >
                Empty cart{" "}
              </Typography>
              <ProductionQuantityLimitsIcon sx={{ fontSize: "1.5rem" }} />
            </Box>
          )}
        </div>
        {
          <Button
            style={{ position: "inherit" }}
            onClick={() => setSideBar(true)}
          >
            <ShoppingCartIcon cartCount={cart.cartQuantity} />
          </Button>
        }
      </div>
    );
  } else {
    return <p>Loading ...</p>;
  }
};

export default Cart;
