import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { addToCart, removeFromCart } from "@/redux/features/cartSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { Box } from "@mui/material";

type CartProduct = {
  id: string | number;
  name: string;
  price: number;
  image_url: string;
  quantity: number;
};

export default function CartItem({
  id,
  name,
  image_url,
  price,
  quantity,
}: CartProduct) {
  const dispatch = useAppDispatch();
  const cart = useAppSelector((state) => state.cartReducer);

  const handleAddItem = () => {
    dispatch(addToCart({ id, name, price, image_url, quantity }));
  };

  const handleRemoveItem = () => {
    dispatch(removeFromCart({ id, name, price, image_url, quantity }));
  };

  React.useEffect(() => {}, [dispatch, cart]);
  return (
    <Grid
      item
      sx={{
        display: "flex",
        justifyContent: "center",
        placeContent: { sm: "center", md: "start" },
        width: "100%",
        margin: "1rem auto",
        padding: "10px",
      }}
    >
      <Card
        sx={{
          display: { xs: "grid", sm: "flex" },
          border: "none",
          width: "100%",
          alignItems: "center",
          placeContent: "center",
        }}
        variant="outlined"
        key={id}
      >
        <CardContent
          sx={{
            textAlign: { xs: "center", sm: "start" },
            display: "grid",
            gap: "10px",
            placeContent: "center",
          }}
        >
          <Typography
            component="h5"
            variant="h4"
            sx={{ fontSize: { xs: "0.8rem", sm: "1rem" } }}
          >
            {name}
          </Typography>
          <CardActions style={{}}>
            <Typography style={{ fontSize: "14px" }}>${price}</Typography>

            <Box style={{ display: "flex", alignItems: "center" }}>
              <Box style={{ display: "flex", alignItems: "center" }}>
                <Button onClick={handleRemoveItem}>
                  <RemoveIcon style={{ fontSize: "14px" }} />
                </Button>{" "}
                <p style={{ fontSize: "14px" }}>{quantity}</p>{" "}
                <Button onClick={handleAddItem}>
                  <AddIcon style={{ fontSize: "14px" }} />
                </Button>
              </Box>
            </Box>
          </CardActions>
        </CardContent>
        <CardMedia
          sx={{ width: "100px", margin: { xs: "auto", sm: "0" } }}
          component="img"
          alt={name}
          image={image_url}
        />
      </Card>
    </Grid>
  );
}
