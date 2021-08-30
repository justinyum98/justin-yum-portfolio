import * as React from 'react';
import Link from 'next/link';
import { AiFillLinkedin } from 'react-icons/ai';
import { GoMarkGithub } from 'react-icons/go';

const HeaderNavbar = () => {
  const navLinks = [
    {
      key: '0',
      id: 'header-navbar-navlinks-about',
      name: 'about',
      route: '/about',
    },
    {
      key: '1',
      id: 'header-navbar-navlinks-work',
      name: 'work',
      route: '/work',
    },
    {
      key: '2',
      id: 'header-navbar-navlinks-projects',
      name: 'projects',
      route: '/projects',
    },
    {
      key: '3',
      id: 'header-navbar-navlinks-contact',
      name: 'contact',
      route: '/contact',
    },
  ];

  const socialLinks = [
    {
      key: '0',
      id: 'header-navbar-socials-linkedin',
      icon: <AiFillLinkedin size={28} />,
      link: 'https://www.linkedin.com/in/justinyum98',
    },
    {
      key: '1',
      id: 'header-navbar-socials-github',
      icon: <GoMarkGithub size={28} />,
      link: 'https://github.com/justinyum98',
    },
  ];

  return (
    <nav
      id="header-navbar"
      className="sticky top-0 bg-white w-full flex flex-row justify-between items-center py-5"
    >
      <div
        id="header-navbar-navlinks"
        className="flex flex-1 flex-row justify-between"
      >
        {navLinks.map(({ key, id, name, route }) => (
          <Link key={key} href={route}>
            <a id={id}>{name}</a>
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
        {socialLinks.map(({ key, id, icon, link }) => (
          <a key={key} id={id} href={link}>
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
