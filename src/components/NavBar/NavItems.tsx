import {
  List,
  ListItem,
  ListItemButton,
  ListItemText
} from "@mui/material";
import useNavigateTo from "../../hooks/useNavigateTo";
import { FC } from "react";

const navItems: string[] = ["About", "Articles", "Tags", "Contact"];

const NavItems: FC = () => {
  const navigate = useNavigateTo();

  return (
    <List sx={{ display: "flex", flexDirection: { xs: "column", md: "row" } }}>
      {navItems.map((item) => (
        <ListItem key={item} disablePadding>
          <ListItemButton
            sx={{ textAlign: "center" }}
            onClick={() => navigate(item)}
          >
            <ListItemText
              primary={item}
              slotProps={{
                primary: { fontFamily: "Lora", fontWeight: 400 },
              }}
            />
          </ListItemButton>
        </ListItem>
      ))}
    </List>
  );
};

export default NavItems;
