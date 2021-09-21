import * as React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import HeaderNavbar from '../HeaderNavbar';

jest.mock('next/router', () => ({
  useRouter() {
    return {
      route: '/',
      pathname: '',
      query: '',
      asPath: '',
    };
  },
}));

describe('HeaderNavbar component', () => {
  it('renders the header navbar', () => {
    // Arrange
    render(<HeaderNavbar />);

    // Act
    const navbar = screen.getByRole('banner', {
      name: 'Header navigation bar',
    });

    // Assert
    expect(navbar).toBeDefined();
  });

  it('opens the sidebar menu when the open menu button is clicked', () => {
    // Arrange
    render(<HeaderNavbar />);
    const openMenuButton = screen.getByRole('button', {
      name: 'Open sidebar menu',
    });

    // Act
    fireEvent.click(openMenuButton);
    const drawerContent = screen.getByRole('presentation', {
      name: 'Sidebar menu',
    });

    // Assert
    expect(drawerContent).toBeDefined();
  });

  it('closes the sidebar menu when the close menu button is clicked', () => {
    // Arrange
    render(<HeaderNavbar />);
    const openMenuButton = screen.getByRole('button', {
      name: 'Open sidebar menu',
    });
    fireEvent.click(openMenuButton);
    const closeMenuButton = screen.getByRole('button', {
      name: 'Close sidebar menu',
    });

    // Act
    fireEvent.click(closeMenuButton);

    // Assert
    expect(
      screen.queryByRole('presentation', { name: 'Sidebar menu' })
    ).toBeNull();
  });

  it('closes the sidebar menu when any open space on the drawer is clicked', () => {
    // Arrange
    render(<HeaderNavbar />);
    const openMenuButton = screen.getByRole('button', {
      name: 'Open sidebar menu',
    });
    fireEvent.click(openMenuButton);
    const sidebarMenu = screen.getByRole('presentation', {
      name: 'Sidebar menu',
    });

    // Act
    fireEvent.click(sidebarMenu);

    // Assert
    expect(
      screen.queryByRole('presentation', { name: 'Sidebar menu' })
    ).toBeNull();
  });

  /*
  Line 173 is uncovered, cannot test case to close sidebar menu by clicking outside the drawer.
  */
});
