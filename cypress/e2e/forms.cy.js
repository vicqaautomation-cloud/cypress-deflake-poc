/// <reference types="cypress" />

describe('Forms, Buttons, & Checkbox', () => {
  beforeEach(() => {
    cy.visit('https://practice-automation.com/form-fields/')
  })

  it('passes', () => {
    //fill form
    cy.url().should('include', 'form-fields')
    cy.get('input[name="first_name"]').should('be.visible').type('John') 

    //assert form details
    
    
  })
})