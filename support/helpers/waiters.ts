const waitForPageReady = (): void => {
  cy.document().its('readyState').should('equal', 'complete');
};

export { waitForPageReady };
