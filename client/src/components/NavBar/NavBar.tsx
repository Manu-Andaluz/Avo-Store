import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import Stack from "@mui/material/Stack";
import Cart from "../Cart/Cart";
import Link from "next/link";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { logOutUser } from "@/redux/features/userSlice";
import { useRouter } from "next/navigation";
import { Modal } from "@mui/material";
import ConsoleIcon from "../SVGIcons/AvoIcon";

function NavBar() {
  const dispatch = useAppDispatch();
  const { userStatus } = useAppSelector((state) => state.userReducer);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const { push } = useRouter();

  React.useEffect(() => {}, [userStatus]);

  const handleMenu = (event: any) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    dispatch(logOutUser());
    push("/login");
  };

  const [open, setOpen] = React.useState(false);
  const handleOpenModal = () => setOpen(true);
  const handleCloseModal = () => setOpen(false);

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="fixed"
        className="navbar"
        style={{
          width: "100%",
          padding: "3px 0",
          backgroundColor: "white",
          color: "black",
        }}
      >
        <Toolbar
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: { xs: "space-around", md: "space-evenly" },
          }}
        >
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 1 }}
            >
              <Link href={"/"}>
                {" "}
                <ConsoleIcon />
              </Link>
            </IconButton>
            <Typography
              variant="h6"
              component="div"
              sx={{ flexGrow: 1, fontSize: { xs: "15px", md: "1.3rem" } }}
            >
              Avo Store
            </Typography>
          </Box>

          <Stack
            spacing={{ xs: 1, sm: 3 }}
            sx={{ alignItems: "center" }}
            direction="row"
            useFlexGap
            flexWrap="wrap"
          >
            {userStatus ? (
              <Box>
                <IconButton
                  size="large"
                  aria-label="account of current user"
                  aria-controls="menu-appbar"
                  aria-haspopup="true"
                  onClick={handleMenu}
                  color="inherit"
                >
                  <AccountBoxIcon sx={{ fontSize: "2rem" }} />
                </IconButton>
                <Menu
                  id="menu-appbar"
                  anchorEl={anchorEl}
                  anchorOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  open={Boolean(anchorEl)}
                  onClose={handleClose}
                >
                  <MenuItem onClick={handleClose}>Profile</MenuItem>
                  <MenuItem onClick={handleOpenModal}>Log out</MenuItem>
                  <Modal
                    open={open}
                    onClose={handleCloseModal}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                  >
                    <div className="modal">
                      <Typography
                        id="modal-modal-title"
                        variant="h6"
                        component="h2"
                      >
                        Confirmation Logout
                      </Typography>
                      <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                        Are you sure do you want to logout?
                      </Typography>
                      <Button variant="contained" onClick={handleLogout}>
                        YES
                      </Button>
                    </div>
                  </Modal>
                </Menu>
              </Box>
            ) : (
              <Link
                style={{ textDecoration: "none", color: "black" }}
                href={"/login"}
              >
                <Typography sx={{ fontSize: { xs: "15px", md: "1.1rem" } }}>
                  Login
                </Typography>
              </Link>
            )}
            <Cart />
          </Stack>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default NavBar;
