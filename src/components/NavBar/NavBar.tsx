import { useState } from "react";
import NavItems from "./NavItems";
import {
  AppBar,
  Container,
  Drawer,
  FormControlLabel,
  IconButton,
  Switch,
  Toolbar,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import AdbIcon from "@mui/icons-material/Adb";
import useNavigateTo from "../../hooks/useNavigateTo";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import CloseIcon from "@mui/icons-material/Close";

interface NavBarProps {
  isDarkMode: boolean;
  toggleTheme: () => void;
}

const NavBar: React.FC<NavBarProps> = ({ isDarkMode, toggleTheme }) => {
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
    <AppBar position="static" component="nav" className="navbar" elevation={0}>
      <Container className="container">
        <Toolbar className="logo">
          <AdbIcon color="inherit" />
          <Typography
            className="logoText"
            component="a"
            onClick={() => navigate("")}
          >
            Aher <b>Manoj</b>
          </Typography>
        </Toolbar>
        {isMdUp ? (
          <NavItems />
        ) : (
          <>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              className="menuBtn"
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
                "& .MuiDrawer-paper": { boxSizing: "border-box", width: 240 },
              }}
              onClose={handleDrawerToggle}
              className="drawer"
            >
              <Toolbar sx={{ justifyContent: "space-between" }}>
                <IconButton onClick={toggleTheme} color="inherit">
                  {isDarkMode ? <LightModeIcon /> : <DarkModeIcon />}
                </IconButton>
                <IconButton
                  aria-label="close drawer"
                  color="inherit"
                  onClick={handleDrawerToggle}
                >
                  <CloseIcon />
                </IconButton>
              </Toolbar>
              <NavItems />
            </Drawer>
          </>
        )}
        {isMdUp && (
          <IconButton onClick={toggleTheme} color="inherit">
            {isDarkMode ? <LightModeIcon /> : <DarkModeIcon />}
          </IconButton>
        )}
      </Container>
    </AppBar>
  );
};

export default NavBar;
