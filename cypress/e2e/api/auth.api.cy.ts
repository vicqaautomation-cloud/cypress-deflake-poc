import AuthClient from '../../../api/clients/AuthClient';
import { getApiEnv } from '../../../support/helpers/env';
import { makeApiUser } from '../../../support/helpers/dataFactory';

describe('API - Reqres', () => {
  const authClient = new AuthClient();

  // Verifies login endpoint returns a valid token.
  it('authenticates and returns token', () => {
    const { email, password } = getApiEnv();

    authClient.login(email, password).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body).to.have.property('token');
      expect(response.body.token).to.be.a('string').and.not.be.empty;
    });
  });

  // Validates response structure for users listing endpoint.
  it('lists users and validates contract basics', () => {
    authClient.listUsers(2).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body.page).to.eq(2);
      expect(response.body.data).to.be.an('array').and.have.length.greaterThan(0);
      expect(response.body.data[0]).to.include.all.keys('id', 'email', 'first_name', 'last_name', 'avatar');
    });
  });

  // Verifies user creation endpoint with generated payload.
  it('creates a user', () => {
    const user = makeApiUser();

    authClient.createUser(user.name, user.job).then((response) => {
      expect(response.status).to.eq(201);
      expect(response.body.name).to.eq(user.name);
      expect(response.body.job).to.eq(user.job);
      expect(response.body).to.have.property('id');
      expect(response.body).to.have.property('createdAt');
    });
  });
});
