import AuthClient from '../../api/clients/AuthClient';
import { getApiEnv } from '../helpers/env';

// Custom command that authenticates against the API and returns token.
Cypress.Commands.add('apiLogin', () => {
  const { email, password } = getApiEnv();
  const authClient = new AuthClient();

  return authClient.login(email, password).its('body.token');
});
