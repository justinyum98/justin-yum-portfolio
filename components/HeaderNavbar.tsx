import * as React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { AiFillLinkedin } from 'react-icons/ai';
import { GoMarkGithub } from 'react-icons/go';
import { BiMenuAltRight } from 'react-icons/bi';

const HeaderNavbar = () => {
  // const [isOpen, setIsOpen] = React.useState(false);

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
    <div className="bg-fwTan text-fwOrange sticky top-0 w-full ">
      <nav
        id="header-navbar"
        className="w-full flex flex-row justify-between items-center px-4 py-2 lg:px-12 lg:py-4 lg:gap-x-4"
        role="navigation"
        aria-label="Header navigation bar"
      >
        <Link href="/">
          <a className="pt-2 px-2 rounded-full hover:bg-white">
            <Image src="/logo.svg" alt="(Logo)" width={48} height={48} />
          </a>
        </Link>
        <button
          id="header-navbar-open-sidebar-button"
          className="p-2 lg:hidden"
          // onClick={() => setIsOpen(true)}
        >
          <BiMenuAltRight size={48} />
        </button>
        <div
          id="header-navbar-navlinks"
          className="hidden font-sans lg:flex lg:flex-auto lg:gap-x-12 lg:ml-6"
        >
          {navLinks.map(({ key, id, name, route, ariaLabel }) => (
            <Link key={key} href={route}>
              <a
                id={id}
                role="link"
                aria-label={ariaLabel}
                className="lg:px-2 lg:py-1 lg:text-base hover:text-fwRed"
              >
                {name}
              </a>
            </Link>
          ))}
        </div>
        <div
          id="header-navbar-socials"
          className="hidden lg:flex lg:flex-auto lg:flex-row-reverse lg:gap-x-12"
        >
          {socialLinks.map(({ key, id, icon, link, ariaLabel }) => (
            <a
              key={key}
              id={id}
              href={link}
              role="link"
              aria-label={ariaLabel}
              className="p-1"
            >
              {icon}
            </a>
          ))}
        </div>
      </nav>
    </div>
  );
};

export default HeaderNavbar;
