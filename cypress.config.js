const { defineConfig } = require('cypress');
const fs = require('fs');
const path = require('path');

// Loads the selected environment JSON and exposes it through Cypress.env().
function readEnvironmentFile(environment) {
  const envFilePath = path.join(__dirname, 'config', 'environments', `${environment}.json`);

  if (!fs.existsSync(envFilePath)) {
    throw new Error(`Environment file not found: ${envFilePath}`);
  }

  const raw = fs.readFileSync(envFilePath, 'utf-8');
  return JSON.parse(raw);
}

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://www.saucedemo.com',
    specPattern: 'cypress/e2e/**/*.cy.ts',
    supportFile: 'support/e2e.ts',
    setupNodeEvents(on, config) {
      // TEST_ENV controls which config file is loaded: dev, qa, or prod.
      const selectedEnvironment = process.env.TEST_ENV || config.env.TEST_ENV || 'dev';
      const fileEnvironment = readEnvironmentFile(selectedEnvironment);

      // Merge runtime env + file env so tests can use Cypress.env('ui') and Cypress.env('api').
      config.env = {
        ...config.env,
        ...fileEnvironment,
        TEST_ENV: selectedEnvironment,
      };

      return config;
    },
  },
});
