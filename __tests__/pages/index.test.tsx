import * as React from 'react';
import { render } from '@testing-library/react';
import Home from '../../pages/index';

describe('Home page', () => {
  it('renders correctly', () => {
    // Arrange
    const { container } = render(<Home />);

    // Act
    
    // Assert
    expect(container).toMatchSnapshot();
  });
});
