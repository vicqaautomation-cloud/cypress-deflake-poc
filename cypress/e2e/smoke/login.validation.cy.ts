import LoginPage from '../../../pages/auth/LoginPage';

describe('Smoke - Login validations', () => {
  const loginPage = new LoginPage();

  beforeEach(() => {
    loginPage.open();
  });

  it('shows required credentials message when form is empty', () => {
    loginPage.submit();
    loginPage.assertErrorMessage('Epic sadface: Username is required');
  });

  it('shows required password message when password is missing', () => {
    const { username } = Cypress.env('ui');

    loginPage.login(username, '');
    loginPage.assertErrorMessage('Epic sadface: Password is required');
  });

  it('shows invalid credentials message with wrong password', () => {
    const { username } = Cypress.env('ui');

    loginPage.login(username, 'wrong_password');
    loginPage.assertErrorMessage('Epic sadface: Username and password do not match any user in this service');
  });
});
