describe('Navigation mobile', () => {
  it("should open a collapsible sidebar when clicking the header navbar's menu button", () => {
    // ARRANGE
    cy.viewport(768, 1000);
    cy.visit('http://localhost:3000/');

    // ACT
    cy.get('button[id="header-navbar-open-sidebar-button"]').click();

    // ASSERT
    cy.get('div[id="mobile-sidebar-menu"]')
  });
});

export {};
