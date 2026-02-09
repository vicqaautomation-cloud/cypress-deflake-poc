#!/usr/bin/env bash
set -euo pipefail

TEST_ENV="${1:-dev}"
echo "Running smoke suite with TEST_ENV=${TEST_ENV}"
TEST_ENV="$TEST_ENV" npx cypress run --spec "cypress/e2e/smoke/**/*.cy.ts"
