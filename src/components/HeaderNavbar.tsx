import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

import Link from './Link';
import LogoIcon from '../icons/LogoIcon';

const HeaderNavbar = () => {
  const navLinks = [
    {
      key: '0',
      id: 'header-navbar-navlinks-about',
      name: 'About',
      route: '/#about',
      ariaLabel: 'About page link',
    },
    {
      key: '1',
      id: 'header-navbar-navlinks-work',
      name: 'Work',
      route: '/#work',
      ariaLabel: 'Work page link',
    },
    {
      key: '2',
      id: 'header-navbar-navlinks-projects',
      name: 'Projects',
      route: '/#projects',
      ariaLabel: 'Projects page link',
    },
    {
      key: '3',
      id: 'header-navbar-navlinks-contact',
      name: 'Contact',
      route: '/#contact',
      ariaLabel: 'Contact page link',
    },
  ];

  const socialLinks = [
    {
      key: '0',
      id: 'header-navbar-socials-linkedin',
      icon: <LinkedInIcon />,
      link: 'https://www.linkedin.com/in/justinyum98',
      ariaLabel: 'Linkedin social link',
    },
    {
      key: '1',
      id: 'header-navbar-socials-github',
      icon: <GitHubIcon />,
      link: 'https://github.com/justinyum98',
      ariaLabel: 'Github social link',
    },
  ];

  return (
    <AppBar
      position="sticky"
      color="inherit"
      elevation={0}
      sx={{
        paddingY: 1,
        paddingX: {
          lg: 3,
        },
      }}
      aria-label="Header navigation bar"
    >
      <Toolbar
        sx={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}
      >
        <IconButton sx={{ mr: 5 }} color="primary" size="large">
          <LogoIcon />
        </IconButton>
        <Box
          sx={{
            display: {
              xs: 'none',
              lg: 'flex',
            },
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
            >
              {icon}
            </IconButton>
          ))}
        </Box>
      </Toolbar>
    </AppBar>
  );

  // return (
  //   <div className="bg-fwTan text-fwOrange sticky top-0 w-full">
  //     <nav
  //       id="header-navbar"
  //       className="w-full flex flex-row justify-between items-center px-4 py-2 lg:px-12 lg:py-4 lg:gap-x-4"
  //       role="navigation"
  //       aria-label="Header navigation bar"
  //     >
  //       <Link href="/">
  //         <a className="pt-2 px-2 rounded-full hover:bg-white">
  //           <img src="/logo.svg" alt="(Logo)" width={48} height={48} />
  //         </a>
  //       </Link>
  //       <button
  //         id="header-navbar-open-sidebar-button"
  //         className="p-2 lg:hidden"
  //         onClick={onMenuClick}
  //       >
  //         <BiMenuAltRight size={48} />
  //       </button>
  //       <div
  //         id="header-navbar-navlinks"
  //         className="hidden font-sans lg:flex lg:flex-auto lg:gap-x-12 lg:ml-6"
  //       >
  //         {navLinks.map(({ key, id, name, route, ariaLabel }) => (
  //           <Link key={key} href={route}>
  //             <a
  //               id={id}
  //               role="link"
  //               aria-label={ariaLabel}
  //               className="lg:px-2 lg:py-1 lg:text-base hover:text-fwRed"
  //             >
  //               {name}
  //             </a>
  //           </Link>
  //         ))}
  //       </div>
  //       <div
  //         id="header-navbar-socials"
  //         className="hidden lg:flex lg:flex-auto lg:flex-row-reverse lg:gap-x-12"
  //       >
  //         {socialLinks.map(({ key, id, icon, link, ariaLabel }) => (
  //           <a
  //             key={key}
  //             id={id}
  //             href={link}
  //             role="link"
  //             aria-label={ariaLabel}
  //             className="p-1"
  //           >
  //             {icon}
  //           </a>
  //         ))}
  //       </div>
  //     </nav>
  //   </div>
  // );
};

export default HeaderNavbar;
