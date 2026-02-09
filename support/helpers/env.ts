interface UiEnvironment {
  basePath: string;
  username: string;
  password: string;
  lockedUser: string;
}

interface ApiEnvironment {
  baseUrl: string;
  email: string;
  password: string;
}

const getUiEnv = (): UiEnvironment => Cypress.env('ui');
const getApiEnv = (): ApiEnvironment => Cypress.env('api');

export { getUiEnv, getApiEnv };
export type { UiEnvironment, ApiEnvironment };
