#!/usr/bin/env bash
set -euo pipefail

TEST_ENV="${1:-qa}"
echo "Running regression + api suites with TEST_ENV=${TEST_ENV}"
TEST_ENV="$TEST_ENV" npx cypress run --spec "cypress/e2e/regression/**/*.cy.ts,cypress/e2e/api/**/*.cy.ts"
