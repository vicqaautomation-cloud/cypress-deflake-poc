import BasePage from '../base/BasePage';

// Centralized selectors for the login screen.
const LoginSelectors = {
  username: '[data-test="username"]',
  password: '[data-test="password"]',
  submitButton: '[data-test="login-button"]',
  error: '[data-test="error"]',
};

class LoginPage extends BasePage {
  // Opens the login page.
  open(): void {
    this.visit('/');
  }

  // Performs login with provided credentials.
  login(username: string, password: string): void {
    this.type(LoginSelectors.username, username);
    this.type(LoginSelectors.password, password);
    this.click(LoginSelectors.submitButton);
  }

  // Submits login form without filling credentials.
  submit(): void {
    this.click(LoginSelectors.submitButton);
  }

  // Uses environment credentials for the happy path login.
  loginAsStandardUser(): void {
    const { username, password } = Cypress.env('ui');
    this.login(username, password);
  }

  // Confirms the user reached inventory after successful login.
  assertLoginSuccess(): void {
    this.assertUrlIncludes('/inventory.html');
  }

  // Validates error text shown by the application.
  assertErrorMessage(expectedMessage: string): void {
    this.contains(LoginSelectors.error, expectedMessage);
  }
}

export { LoginSelectors };
export default LoginPage;
