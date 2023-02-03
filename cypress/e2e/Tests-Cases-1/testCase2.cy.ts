/// <reference types="cypress" />

describe('Test Case 2: Login User with correct email and password', () => {
  it('Tests Case 1', () => {
    cy.visit('https://automationexercise.com')
    cy.url().should('eq', 'https://automationexercise.com/')
    cy.get('body').should('be.visible')
    cy.get('li').contains('Signup').click()
    cy.get('h2').should('contain', 'Login to your account')
    cy.get('[data-qa="login-email"]').type('rakoto@example.com')
    cy.get('[data-qa="login-password"]').type('123')
    cy.get('[data-qa="login-button"]').click()
    cy.get('.navbar-nav').should('contain', 'Logged in as rakoto')
    cy.get('li').contains('Delete Account').click()
    cy.get('[data-qa="account-deleted"]').should('contain', 'Account Deleted!')
    cy.get('[data-qa="continue-button"]').click()
  })
})
