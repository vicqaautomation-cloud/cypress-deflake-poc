import type { ReqresCreateUserResponse, ReqresLoginResponse, ReqresUsersResponse } from '../schemas/login.schema';

class AuthClient {
  private readonly baseUrl: string;

  constructor() {
    this.baseUrl = Cypress.env('api').baseUrl;
  }

  // Sends login credentials and expects a token response.
  login(email: string, password: string): Cypress.Chainable<Cypress.Response<ReqresLoginResponse>> {
    return cy.request<ReqresLoginResponse>({
      method: 'POST',
      url: `${this.baseUrl}/login`,
      body: { email, password },
    });
  }

  // Retrieves paginated user data.
  listUsers(page: number = 2): Cypress.Chainable<Cypress.Response<ReqresUsersResponse>> {
    return cy.request<ReqresUsersResponse>({
      method: 'GET',
      url: `${this.baseUrl}/users?page=${page}`,
    });
  }

  // Creates a new user in the API test environment.
  createUser(name: string, job: string): Cypress.Chainable<Cypress.Response<ReqresCreateUserResponse>> {
    return cy.request<ReqresCreateUserResponse>({
      method: 'POST',
      url: `${this.baseUrl}/users`,
      body: { name, job },
    });
  }
}

export default AuthClient;
