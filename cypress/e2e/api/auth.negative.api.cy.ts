import AuthClient from '../../../api/clients/AuthClient';
import { getApiEnv } from '../../../support/helpers/env';

describe('API - Reqres negative scenarios', () => {
  const authClient = new AuthClient();

  it('returns 400 when password is missing', () => {
    const { email } = getApiEnv();

    authClient.loginWithPayload({ email }).then((response) => {
      expect(response.status).to.eq(400);
      expect(response.body).to.deep.eq({ error: 'Missing password' });
    });
  });

  it('returns 400 when email is missing', () => {
    const { password } = getApiEnv();

    authClient.loginWithPayload({ password }).then((response) => {
      expect(response.status).to.eq(400);
      expect(response.body).to.deep.eq({ error: 'Missing email or username' });
    });
  });

  it('returns 404 for a non-existing user', () => {
    authClient.getUser(23).then((response) => {
      expect(response.status).to.eq(404);
      expect(response.body).to.deep.eq({});
    });
  });
});
