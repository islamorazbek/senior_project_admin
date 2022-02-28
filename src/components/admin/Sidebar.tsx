import LogoutIcon from '@mui/icons-material/Logout';
import { Box, Drawer, List, ListItemButton, ListItemIcon, ListItemText, Typography } from '@mui/material';
import * as React from 'react';
import { useDispatch } from 'react-redux';
import { Link, useLocation } from 'react-router-dom';
import { logout } from '../../redux/auth/auth.action';
import { menuRoutes } from '../../route';

const drawerWidth = 240;

export default function ResponsiveDrawer() {
  const location = useLocation();
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout())
  }

  const drawer = (
    <div style={{ padding: '15px' }}>
      <Typography variant="h5" textAlign="center" sx={{ fontWeight: 500, lineHeight: '24px', padding: '10%' }}>ONE Aviation</Typography>
      <List style={{ textAlign: 'center' }}>
        {menuRoutes.map((route, index) => (
          <Link
            to={route.path}
            key={index}
            style={{
              textDecoration: 'none',
              color: 'black'
            }}
          >
            <ListItemButton
              style={
                location.pathname === route.path ?
                  {
                    textDecoration: 'none',
                    color: '#0076BD',
                    background: 'rgba(0, 118, 189, 0.1)',
                    borderRadius: '10px'
                  } :
                  {
                    textDecoration: 'none',
                    color: 'black',
                  }}
            >
              {route.icon &&
                <ListItemIcon>
                  {React.createElement(route.icon, { color: location.pathname === route.path ? "primary" : undefined })}
                </ListItemIcon>
              }
              <ListItemText primary={route.name} />
            </ListItemButton>
          </Link>
        ))}
      </List>
      <ListItemButton onClick={handleLogout}>
        <ListItemIcon>
          <LogoutIcon />
        </ListItemIcon>
        <ListItemText primary="Log Out" />
      </ListItemButton>
    </div>
  );

  return (
    <Box
      component="nav"
      sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
    >
      <Drawer
        variant="permanent"
        sx={{
          display: { xs: 'none', sm: 'block' },
          '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
        }}
        open
        elevation={16}
      >
        {drawer}
      </Drawer>
    </Box>
  );
}