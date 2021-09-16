import * as React from 'react';
import { render, screen } from '@testing-library/react';
import HeaderNavbar from '../../src/components/HeaderNavbar';

describe('HeaderNavbar', () => {
  it('renders the header navbar', () => {
    // Arrange
    render(<HeaderNavbar />);

    // Act
    const navbar = screen.getByRole('navigation', {
      name: 'Header navigation bar',
    });

    // Assert
    expect(navbar).toBeDefined();
  });

  it('renders navigation links', () => {
    // Arrrange
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
    render(<HeaderNavbar />);

    // Act
    const links = screen.getAllByRole('link', {
      name: /page link/,
    });

    // Assert
    expect(links.length).toBe(4);
    links.forEach((link, index) => {
      const navLink = navLinks[index];
      expect(link.id).toEqual(navLink.id);
      expect(link.textContent).toEqual(navLink.name);
      expect(link.getAttribute('href')).toEqual(navLink.route);
    });
  });

  it('renders social links', () => {
    // Arrange
    const socialLinks = [
      {
        key: '0',
        id: 'header-navbar-socials-linkedin',
        link: 'https://www.linkedin.com/in/justinyum98',
        ariaLabel: 'Linkedin link',
      },
      {
        key: '1',
        id: 'header-navbar-socials-github',
        link: 'https://github.com/justinyum98',
        ariaLabel: 'Github link',
      },
    ];
    render(<HeaderNavbar />);

    // Act
    const links = screen.getAllByRole('link', {
      name: /social link/,
    });

    // Assert
    expect(links.length).toBe(2);
    links.forEach((link, index) => {
      const socialLink = socialLinks[index];
      expect(link.id).toEqual(socialLink.id);
      expect(link.children[0].tagName).toEqual('svg');
      expect(link.getAttribute('href')).toEqual(socialLink.link);
    });
  });
});
