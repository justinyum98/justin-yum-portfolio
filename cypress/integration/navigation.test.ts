describe('Navigation', () => {
  it('should navigate to about page from the home page', () => {
    // ARRANGE
    cy.visit('http://localhost:3000/');

    // ACT
    cy.get('a[id="header-navbar-navlinks-about"]').click();

    // ASSERT
    cy.url().should('include', '/about');
    cy.get('div').contains('About page content here');
  });
});

export {};
