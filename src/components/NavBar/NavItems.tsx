import React from 'react';
import { List, ListItem, ListItemButton, ListItemText } from '@mui/material';
import { FC } from 'react';
import routes from '@/routing/routes';
import { useLocation } from 'react-router-dom';
import useNavigateTo from '@/hooks/useNavigateTo';

const NavItems: FC = () => {
  const navigate = useNavigateTo();
  const location = useLocation();
  return (
    <List className="navItemList">
      {routes.map(
        ({ path, name, hidden }) =>
          !hidden && (
            <ListItem key={name} disablePadding>
              <ListItemButton
                onClick={() => navigate(path)}
                className={location.pathname === path ? 'active' : ''}
              >
                <ListItemText
                  sx={{ textAlign: { sm: 'center' } }}
                  className="navItemText"
                  primary={name}
                />
              </ListItemButton>
            </ListItem>
          )
      )}
    </List>
  );
};

export default NavItems;
