import './commands/auth.commands';
import './commands/api.commands';
import './commands/ui.commands';

// Global setup applied before each test.
beforeEach(() => {
  cy.viewport(1280, 720);
});
