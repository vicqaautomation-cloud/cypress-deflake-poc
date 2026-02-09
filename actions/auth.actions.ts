import LoginPage from '../pages/auth/LoginPage';

class AuthActions {
  private readonly loginPage = new LoginPage();

  // Reusable happy-path login flow for UI tests.
  loginAsStandardUser(): void {
    this.loginPage.open();
    this.loginPage.loginAsStandardUser();
    this.loginPage.assertLoginSuccess();
  }

  // Negative-path login flow used by error handling tests.
  loginAsLockedUser(): void {
    const { lockedUser, password } = Cypress.env('ui');
    this.loginPage.open();
    this.loginPage.login(lockedUser, password);
  }
}

export default AuthActions;
