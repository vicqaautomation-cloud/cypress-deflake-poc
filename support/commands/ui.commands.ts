// Safe click wrapper with built-in visibility assertion.
Cypress.Commands.add('safeClick', (selector: string) => {
  cy.get(selector).should('be.visible').click();
});
