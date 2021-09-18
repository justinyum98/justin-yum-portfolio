import * as React from 'react';
import { render, screen } from '@testing-library/react';
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
});
