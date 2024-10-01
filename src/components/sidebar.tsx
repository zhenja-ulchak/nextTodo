"use client"
import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import MenuIcon from '@mui/icons-material/Menu';
import CssBaseline from '@mui/material/CssBaseline';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';


import { useTranslations } from 'next-intl';

import { useRouter } from 'next/navigation';
import { Url } from 'next/dist/shared/lib/router/router';
const SideBar = () => {
  const router = useRouter();
   const t = useTranslations();
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };
  const handleNavigation = (path: Url) => {
    // @ts-ignore
    router.push(path); // Використовуйте router.push для навігації
  };


  const DrawerList = (
    <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(false)}>
      <List>
      <ListItem disablePadding>
        <ListItemButton>
          {/* <Logout /> */}
          <ListItemText />
        </ListItemButton>
      </ListItem>
      {['/dashboard', '/todo', '/users', '/todos', '/account'].map((path, index) => (
        <ListItem disablePadding key={index}>
          <ListItemButton onClick={() => handleNavigation(path)}>
            <ListItemIcon>
              <InboxIcon />
            </ListItemIcon>
            <ListItemText primary={`${path}`} />
          </ListItemButton>
        </ListItem>
      ))}
    </List>
    </Box>
  );

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <Box sx={{ flexGrow: 1, width: '100%' }}>
        <AppBar position="static">
          <Toolbar>
            <Button onClick={toggleDrawer(true)}>
              <MenuIcon sx={{ color: '#fff' }} />
            </Button>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              {t('sideBar.TASK')}
            </Typography>
            <Button
              sx={{ padding: '5px 40px', background: '#ffffff', color: '#000000' }}
              onClick={() => router.push('/setting')}
              variant="contained"
            >
              {t('sideBar.SETTING')}
            </Button>
          </Toolbar>
        </AppBar>
      </Box>
      <Drawer open={open} onClose={toggleDrawer(false)}>
        {DrawerList}
      </Drawer>
    </Box>
  );
};


export default SideBar;
