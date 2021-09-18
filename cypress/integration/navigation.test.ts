describe('Navigation', () => {
  beforeEach(() => {
    // Set viewport to 'lg' 
    cy.viewport(1024, 1000);
  });

  it('should navigate to about section on the home page when clicking "About" button', () => {
    // Arrange
    cy.visit('http://localhost:3000/');

    // Act
    cy.get('a[id="header-navbar-navlinks-about"]').click();

    // Assert
    cy.url().should('include', '/#about');
  });

  it('should navigate to work section from the home page when clicking "Work" button', () => {
    // Arrange
    cy.visit('http://localhost:3000/');

    // Act
    cy.get('a[id="header-navbar-navlinks-work"]').click();

    // Assert
    cy.url().should('include', '/#work');
  });
});

export {};
