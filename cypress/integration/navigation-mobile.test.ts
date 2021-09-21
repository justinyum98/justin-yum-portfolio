describe('Navigation mobile', () => {
  beforeEach(() => {
    cy.viewport(768, 1000);
    cy.visit('http://localhost:3000');
  });

  it("should open a collapsible sidebar when clicking the header navbar's menu button", () => {
    // Arrange

    // Act
    cy.get('button#header-navbar-open-sidebar-button').click();

    // Assert
    cy.get('div#mobile-sidebar-menu');
  });

  it('should navigate to the About section and close the sidebar menu when clicking the About link', () => {
    // Arrange
    cy.get('button#header-navbar-open-sidebar-button').click();

    // Act
    cy.get('a#mobile-sidebar-menu-navlinks-about').click();

    // Assert
    cy.url().should('include', '/#about');
    cy.get('div#mobile-sidebar-menu').should('not.exist');
  });

  it('should close the sidebar menu when clicking the close sidebar menu button', () => {
    // Arrange
    cy.get('button#header-navbar-open-sidebar-button').click();

    // Act
    cy.get('button#mobile-sidebar-menu-close-button').click();

    // Assert
    cy.get('div#mobile-sidebar-menu').should('not.exist');
  });
});

export {};
