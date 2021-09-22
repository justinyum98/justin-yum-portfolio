import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import ListItemIcon from '@mui/material/ListItemIcon';
import IconButton from '@mui/material/IconButton';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import DialogTitle from '@mui/material/DialogTitle';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import Slide from '@mui/material/Slide';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

import Link from './Link';
import LogoIcon from '../icons/LogoIcon';

const HeaderNavbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  const trigger = useScrollTrigger();

  const navLinks = [
    {
      key: '0',
      id: 'header-navbar-navlinks-about',
      mobileId: 'mobile-sidebar-menu-navlinks-about',
      name: 'About',
      route: '/#about',
      ariaLabel: 'About page link',
    },
    {
      key: '1',
      id: 'header-navbar-navlinks-work',
      mobileId: 'mobile-sidebar-menu-navlinks-work',
      name: 'Work',
      route: '/#work',
      ariaLabel: 'Work page link',
    },
    {
      key: '2',
      id: 'header-navbar-navlinks-projects',
      mobileId: 'mobile-sidebar-menu-navlinks-projects',
      name: 'Projects',
      route: '/#projects',
      ariaLabel: 'Projects page link',
    },
    {
      key: '3',
      id: 'header-navbar-navlinks-contact',
      mobileId: 'mobile-sidebar-menu-navlinks-contact',
      name: 'Contact',
      route: '/#contact',
      ariaLabel: 'Contact page link',
    },
  ];

  const socialLinks = [
    {
      key: '0',
      id: 'header-navbar-socials-linkedin',
      mobileId: 'mobile-sidebar-menu-socials-linkedin',
      icon: <LinkedInIcon />,
      link: 'https://www.linkedin.com/in/justinyum98',
      ariaLabel: 'LinkedIn social link',
    },
    {
      key: '1',
      id: 'header-navbar-socials-github',
      mobileId: 'mobile-sidebar-menu-socials-github',
      icon: <GitHubIcon />,
      link: 'https://github.com/justinyum98',
      ariaLabel: 'Github social link',
    },
  ];

  return (
    <>
      <Slide appear={false} direction="down" in={!trigger}>
        <AppBar
          id="header-navbar"
          position="sticky"
          color="inherit"
          elevation={0}
          sx={{
            paddingY: 1,
            paddingX: {
              lg: 3,
            },
          }}
          role="banner"
          aria-label="Header navigation bar"
        >
          <Toolbar
            sx={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}
          >
            <IconButton color="primary" size="large">
              <LogoIcon />
            </IconButton>
            <IconButton
              id="header-navbar-open-sidebar-button"
              sx={{
                display: {
                  lg: 'none',
                },
              }}
              color="primary"
              size="large"
              onClick={() => setIsOpen(true)}
              aria-label="Open sidebar menu"
            >
              <MenuIcon />
            </IconButton>
            <Box
              sx={{
                display: {
                  xs: 'none',
                  lg: 'flex',
                },
                ml: 5,
                flexGrow: 1,
                flexDirection: 'row',
                gap: '4rem',
              }}
            >
              {navLinks.map(({ key, id, name, route, ariaLabel }) => (
                <Link
                  key={key}
                  id={id}
                  href={route}
                  color="primary"
                  fontWeight="medium"
                  underline="hover"
                  aria-label={ariaLabel}
                >
                  {name}
                </Link>
              ))}
            </Box>
            <Box
              sx={{
                display: {
                  xs: 'none',
                  lg: 'flex',
                },
                flexDirection: 'row-reverse',
                gap: '2rem',
              }}
            >
              {socialLinks.map(({ key, id, icon, link, ariaLabel }) => (
                <IconButton
                  key={key}
                  id={id}
                  href={link}
                  color="primary"
                  size="large"
                  aria-label={ariaLabel}
                >
                  {icon}
                </IconButton>
              ))}
            </Box>
          </Toolbar>
        </AppBar>
      </Slide>
      <Drawer
        id="mobile-sidebar-menu"
        sx={{
          display: {
            xs: 'flex',
            lg: 'none',
          },
        }}
        anchor="right"
        open={isOpen}
        onClose={() => setIsOpen(false)}
      >
        <Box
          role="presentation"
          aria-label="Sidebar menu"
          onClick={() => setIsOpen(false)}
        >
          <DialogTitle
            sx={{ display: 'flex', justifyContent: 'flex-end', pb: '20%' }}
          >
            <IconButton
              id="mobile-sidebar-menu-close-button"
              aria-label="Close sidebar menu"
              color="primary"
              onClick={() => setIsOpen(false)}
            >
              <CloseIcon />
            </IconButton>
          </DialogTitle>
          <List sx={{ px: 8 }}>
            {navLinks.map(({ key, mobileId, name, route, ariaLabel }) => (
              <Link
                key={key}
                id={mobileId}
                href={route}
                aria-label={ariaLabel}
                underline="none"
              >
                <ListItemButton sx={{ px: 7, py: 2 }}>
                  <ListItemText primary={name} />
                </ListItemButton>
              </Link>
            ))}
            <Divider sx={{ my: 4 }} />
            {socialLinks.map(({ key, mobileId, icon, link, ariaLabel }) => (
              <Link key={key} id={mobileId} href={link} aria-label={ariaLabel}>
                <ListItemButton sx={{ pl: 9, py: 2 }}>
                  <ListItemIcon sx={{ color: 'primary.main' }}>
                    {icon}
                  </ListItemIcon>
                </ListItemButton>
              </Link>
            ))}
          </List>
        </Box>
      </Drawer>
    </>
  );
};

export default HeaderNavbar;
