# Cypress Deflake POC

Cypress + TypeScript proof of concept using:
- Page Object Model (POM)
- Smoke, sanity/regression, and API test suites
- Environment-based configuration (`dev`, `qa`, `prod`)

## Stack
- Cypress 15
- TypeScript
- Deflake (optional)

## Project structure
- `pages/`: page objects
- `actions/`: reusable business flows
- `components/`: reusable UI component abstractions
- `api/`: API clients and schemas
- `support/`: custom commands and test helpers
- `cypress/e2e/smoke`: smoke tests
- `cypress/e2e/sanity`: sanity tests
- `cypress/e2e/regression`: regression tests
- `cypress/e2e/api`: API tests
- `config/environments`: environment config files

## Install
```bash
npm install
```

## Type check
```bash
npm run typecheck
```

## Run suites
```bash
npm run smoke
npm run sanity
npm run api
npm run regression
```

## Environment selection
By default tests use `dev`. You can override with `TEST_ENV`:
```bash
TEST_ENV=qa npm run smoke
```

## Target systems
- UI: `https://www.saucedemo.com`
- API: `https://reqres.in/api`
