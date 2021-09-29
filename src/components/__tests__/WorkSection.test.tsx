import * as React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import WorkSection from '../WorkSection';

describe('WorkSection component', () => {
  it('should handle tab change', () => {
    // Arrange
    render(<WorkSection />);

    // Act
    const tab = screen.getByRole('tab', {
      name: 'Dexcom',
    });
    fireEvent.click(tab);
    const tabPanel = screen.getByRole('tabpanel', {
      name: 'Dexcom',
    });

    // Assert
    expect(tabPanel).toHaveTextContent('Dexcom');
    expect(tabPanel).not.toHaveTextContent('ASML');
  });
});
