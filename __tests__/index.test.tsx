import * as React from 'react';
import { render, screen } from '@testing-library/react';
import Index from '../pages/index';

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

describe('Home page', () => {
  it('should render', () => {
    // Arrange

    // Act
    render(<Index />);

    // Assert
    expect(screen).toBeDefined();
  });
});
