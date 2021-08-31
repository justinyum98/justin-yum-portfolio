import * as React from 'react';
import Link from 'next/link';
import { AiFillLinkedin } from 'react-icons/ai';
import { GoMarkGithub } from 'react-icons/go';

const HeaderNavbar = () => {
  const navLinks = [
    {
      key: '0',
      id: 'header-navbar-navlinks-about',
      name: 'About',
      route: '/about',
      ariaLabel: 'About page link',
    },
    {
      key: '1',
      id: 'header-navbar-navlinks-work',
      name: 'Work',
      route: '/work',
      ariaLabel: 'Work page link',
    },
    {
      key: '2',
      id: 'header-navbar-navlinks-projects',
      name: 'Projects',
      route: '/projects',
      ariaLabel: 'Projects page link',
    },
    {
      key: '3',
      id: 'header-navbar-navlinks-contact',
      name: 'Contact',
      route: '/contact',
      ariaLabel: 'Contact page link',
    },
  ];

  const socialLinks = [
    {
      key: '0',
      id: 'header-navbar-socials-linkedin',
      icon: <AiFillLinkedin size={28} />,
      link: 'https://www.linkedin.com/in/justinyum98',
      ariaLabel: 'Linkedin social link',
    },
    {
      key: '1',
      id: 'header-navbar-socials-github',
      icon: <GoMarkGithub size={28} />,
      link: 'https://github.com/justinyum98',
      ariaLabel: 'Github social link',
    },
  ];

  return (
    <nav
      id="header-navbar"
      className="sticky top-0 bg-white w-full flex flex-row justify-between items-center py-5"
      role="navigation"
      aria-label="Header navigation bar"
    >
      <div
        id="header-navbar-navlinks"
        className="flex flex-1 flex-row justify-between"
      >
        {navLinks.map(({ key, id, name, route, ariaLabel }) => (
          <Link key={key} href={route}>
            <a id={id} role="link" aria-label={ariaLabel}>
              {name}
            </a>
          </Link>
        ))}
      </div>
      <div id="header-navbar-logo" className="flex flex-1 justify-center">
        (Logo)
      </div>
      <div
        id="header-navbar-socials"
        className="flex flex-1 flex-row-reverse justify-between"
      >
        {socialLinks.map(({ key, id, icon, link, ariaLabel }) => (
          <a key={key} id={id} href={link} role="link" aria-label={ariaLabel}>
            {icon}
          </a>
        ))}
        <div />
        <div />
      </div>
    </nav>
  );
};

export default HeaderNavbar;
