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

  const [isUser, setIsUser] = React.useState(false)

  React.useEffect(() => {
    if(typeof window !== "undefined" && localStorage.getItem('userToken')){
      setIsUser(true)
    }
  },[isUser])

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
            {
              isUser ? (<Button color="inherit"><Link href={'/account'} style={{textDecoration:"none",color:"black"}}>Account</Link></Button>) : (<Button color="inherit"><Link style={{textDecoration:"none", color:"black"}} href={'/login'}>Login</Link></Button>)
              }
            <Cart />
          </Stack>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default NavBar;
