import { useState } from "react";
import NavItems from "./NavItems";
import {
  AppBar,
  Container,
  Drawer,
  IconButton,
  Toolbar,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import AdbIcon from "@mui/icons-material/Adb";
import useNavigateTo from "../../hooks/useNavigateTo";

const NavBar = () => {
  const navigate = useNavigateTo();
  const container =
    window !== undefined ? () => window.document.body : undefined;

  const [isDrawerOpen, setIsDrawerOpen] = useState<boolean>(false);

  const handleDrawerToggle = () => {
    setIsDrawerOpen((prevState: any) => !prevState);
  };
  const theme = useTheme();
  const isMdUp = useMediaQuery(theme.breakpoints.up("md"));

  return (
    <AppBar position="static" component="nav">
      <Container sx={{ display: "flex" }}>
        <Toolbar
          sx={{
            justifyContent: { xs: "center", md: "flex-start" },
            alignItems: "center",
            flexGrow: 1,
          }}
        >
          <AdbIcon color="inherit" />
          <Typography
            noWrap
            component="a"
            variant="h6"
            onClick={() => navigate("")}
            sx={{ cursor: "pointer", userSelect: "none" }}
          >
            Code With XYZ
          </Typography>
        </Toolbar>
        {isMdUp ? (
          <NavItems />
        ) : (
          <>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              sx={{ display: { xs: "flex", md: "none" }, ml: "auto" }}
              onClick={() => setIsDrawerOpen(!isDrawerOpen)}
            >
              <MenuIcon />
            </IconButton>
            <Drawer
              container={container}
              variant="temporary"
              open={isDrawerOpen}
              anchor="right"
              ModalProps={{
                keepMounted: true,
              }}
              sx={{
                display: { sm: "flex", md: "none" },
                "& .MuiDrawer-paper": { boxSizing: "border-box", width: 240 },
              }}
              onClose={handleDrawerToggle}
            >
              <NavItems />
            </Drawer>
          </>
        )}
      </Container>
    </AppBar>
  );
};

export default NavBar;
