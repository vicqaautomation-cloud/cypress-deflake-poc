import LoginPage from '../../../pages/auth/LoginPage';
import selectors from '../../../support/helpers/selectors';

describe('Smoke - Login', () => {
  // Core user journey: valid user can log in.
  it('logs in with standard user', () => {
    const loginPage = new LoginPage();

    loginPage.open();
    loginPage.loginAsStandardUser();
    cy.get(selectors.inventoryTitle).should('contain.text', 'Products');
  });

  // Core negative check: locked user sees expected error.
  it('shows error for locked user', () => {
    const loginPage = new LoginPage();
    const { lockedUser, password } = Cypress.env('ui');

    loginPage.open();
    loginPage.login(lockedUser, password);
    loginPage.assertErrorMessage('Epic sadface: Sorry, this user has been locked out.');
  });
});
