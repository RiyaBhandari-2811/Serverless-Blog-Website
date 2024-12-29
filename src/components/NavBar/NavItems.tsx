import { List, ListItem, ListItemButton, ListItemText } from "@mui/material";
import useNavigateTo from "../../hooks/useNavigateTo";
import { FC } from "react";
import { navItems } from "@/constants";

const NavItems: FC = () => {
  const navigate = useNavigateTo();

  return (
    <List className="navItemList">
      {navItems.map((item) => (
        <ListItem key={item} disablePadding>
          <ListItemButton
            onClick={() => {
              navigate(item);
              console.log(window.location.pathname.split("/")[1], item);
            }}
            className={
              window.location.pathname.split("/")[1] === item.toLowerCase()
                ? "active"
                : ""
            }
          >
            <ListItemText sx={{textAlign: {sm: 'center'}}} className="navItemText" primary={item} />
          </ListItemButton>
        </ListItem>
      ))}
    </List>
  );
};

export default NavItems;
