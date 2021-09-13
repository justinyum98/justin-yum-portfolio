describe('Navigation', () => {
  it('should navigate to about page from the home page', () => {
    // ARRANGE
    cy.viewport(1024, 1000)
    cy.visit('http://localhost:3000/');

    // ACT
    cy.get('a[id="header-navbar-navlinks-about"]').click();

    // ASSERT
    cy.url().should('include', '/#about');
  });
});

export {};
