import * as React from 'react';
import { render, screen } from '@testing-library/react';
import Link from '../Link';

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

describe('Link component', () => {
  it('renders the Link component with internal link', () => {
    // Arrange
    render(<Link href="/" aria-label="Home" />);

    // Act
    const link = screen.getByRole('link', {
      name: 'Home',
    });

    // Assert
    expect(link).toBeDefined();
  });

  it('renders the Link component with internal link and no link style', () => {
    // Arrange
    render(<Link href="/" aria-label="Home" noLinkStyle />);

    // Act
    const link = screen.getByRole('link', {
      name: 'Home',
    });

    // Assert
    expect(link).toBeDefined();
  });

  it('renders the Link component with external link', () => {
    // Arrange
    render(
      <Link
        href="https://github.com/justinyum98"
        aria-label="Justin's Github"
      />
    );

    // Act
    const link = screen.getByRole('link', {
      name: "Justin's Github",
    });

    // Assert
    expect(link).toBeDefined();
  });

  it('renders the Link component with external link and no link style', () => {
    // Arrange
    render(
      <Link
        href="https://github.com/justinyum98"
        aria-label="Justin's Github"
        noLinkStyle
      />
    );

    // Act
    const link = screen.getByRole('link', {
      name: "Justin's Github",
    });

    // Assert
    expect(link).toBeDefined();
  });

  /*
  Note on code coverage:
  Lines 76 to 78 are uncovered because Link's "href" prop accepts either a string or a UrlObject.
  Haven't tested passing in UrlObject, but I think it's unnecessary as passing in string works just fine.
  */
});
