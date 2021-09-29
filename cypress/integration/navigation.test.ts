describe('Navigation', () => {
  beforeEach(() => {
    // Set viewport to 'lg'
    cy.viewport(1024, 800);
    cy.visit('http://localhost:3000');
  });

  it('should navigate to the intro section on the home page when clicking the logo', () => {
    // Arrange

    // Act
    cy.get('a#header-navbar-navlinks-home').click();

    // Assert
    cy.url().should('include', '/#home');
  });

  it('should navigate to about section on the home page when clicking "About" link', () => {
    // Arrange

    // Act
    cy.get('a#header-navbar-navlinks-about').click();

    // Assert
    cy.url().should('include', '/#about');
  });

  it('should navigate to work section from the home page when clicking "Work" link', () => {
    // Arrange

    // Act
    cy.get('a#header-navbar-navlinks-work').click();

    // Assert
    cy.url().should('include', '/#work');
  });

  it('should navigate to projects section from the home page when clicking "Projects" link', () => {
    // Arrange

    // Act
    cy.get('a#header-navbar-navlinks-projects').click();

    // Assert
    cy.url().should('include', '/#projects');
  });

  it('should navigate to projects section from the home page when clicking "Contact" link', () => {
    // Arrange

    // Act
    cy.get('a#header-navbar-navlinks-contact').click();

    // Assert
    cy.url().should('include', '/#contact');
  });

  it('should navigate to Github profile page from the home page when clicking the Github icon', () => {
    // Arrange

    // Act
    cy.get('a#header-navbar-socials-github').click();

    // Assert
    cy.url().should('eq', 'https://github.com/justinyum98');
  });

  it('should navigate to LinkedIn profile page from the home page when clicking the LinkedIn icon', () => {
    // Arrange

    // Act
    cy.get('a#header-navbar-socials-linkedin').click();

    // Assert
    cy.url().should('eq', 'https://www.linkedin.com/in/justinyum98');
  });

  it('should hide header navbar when scrolling down', () => {
    // Arrange

    // Act
    cy.scrollTo('bottom');

    // Assert
    cy.get('header#header-navbar').should('be.hidden');
  });
});

export {};
