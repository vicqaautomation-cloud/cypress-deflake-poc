import AuthActions from '../../actions/auth.actions';

// Custom command that logs in through the UI flow.
Cypress.Commands.add('uiLogin', () => {
  const authActions = new AuthActions();
  authActions.loginAsStandardUser();
});
