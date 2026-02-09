class BasePage {
  // Generic navigation helper reused by all pages.
  visit(path: string = '/'): void {
    cy.visit(path);
  }

  // Wraps common input behavior with visibility checks.
  type(selector: string, value: string): void {
    cy.get(selector).should('be.visible').clear().type(value);
  }

  // Wraps common click behavior with visibility checks.
  click(selector: string): void {
    cy.get(selector).should('be.visible').click();
  }

  // Utility assertion for text content.
  contains(selector: string, text: string): Cypress.Chainable<JQuery<HTMLElement>> {
    return cy.get(selector).should('contain.text', text);
  }

  // Utility assertion for URL path validation.
  assertUrlIncludes(path: string): void {
    cy.url().should('include', path);
  }
}

export default BasePage;
