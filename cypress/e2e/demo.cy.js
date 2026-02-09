/// <reference types="cypress" />

describe('Cypress E2E Testing Demo', () => {
  beforeEach(() => {
    cy.visit('https://example.cypress.io')
  })
  afterEach(() => {
    cy.log('Executed after each Test is completed')
  })
  it('Assert URL', () => {

    cy.url().should('include', 'cypress.io')
  })
  it('Assert Title', () => {

    cy.title().should('eq', 'Cypress.io: Kitchen Sink')
  })
  it('Find Element and Click', () => {

    cy.get('.container').should('be.visible')
    cy.contains('type').click()
  })
  it('Fill Input Field', () => {

    cy.log('Navigated to Cypress example page')
    cy.reload()
    cy.log('Page reloaded')
  })
})