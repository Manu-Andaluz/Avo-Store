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
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { logOutUser } from "@/redux/features/userSlice";
import { useRouter } from "next/navigation";

function NavBar() {
  const dispatch = useAppDispatch()
  const {userStatus} = useAppSelector(state => state.userReducer)
  const [anchorEl, setAnchorEl] = React.useState(null);
  const { push } = useRouter();

  React.useEffect(() => {
  },[userStatus])

  const handleMenu = (event: any) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    dispatch(logOutUser())
    push('/login')
  }

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
              userStatus ? 
              (
              <Box>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
              >
                <AccountBoxIcon sx={{fontSize:"2rem"}} />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >
                <MenuItem onClick={handleClose}>Profile</MenuItem>
                <MenuItem onClick={handleLogout}>Log out</MenuItem>
              </Menu>
            </Box>
              
              ) 
              
              : (<Button color="inherit"><Link style={{textDecoration:"none", color:"black"}} href={'/login'}>Login</Link></Button>)
              }
            <Cart />
          </Stack>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default NavBar;
