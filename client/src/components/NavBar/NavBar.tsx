import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import Avocado from "../SVGIcons/avocado";
import Stack from "@mui/material/Stack";
import Cart from "../Cart/Cart";
import Link from "next/link";

function NavBar() {

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed" className="navbar" style={{padding: "10px 0", backgroundColor:"white", color:"black"}}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 1 }}
          >
           <Link href={'/'}> <Avocado /></Link>
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Avo Store
          </Typography>
          <Stack
            spacing={{ xs: 1, sm: 2 }}
            direction="row"
            useFlexGap
            flexWrap="wrap"
          >
            <Button color="inherit">Login</Button>
            <Cart />
          </Stack>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default NavBar;
