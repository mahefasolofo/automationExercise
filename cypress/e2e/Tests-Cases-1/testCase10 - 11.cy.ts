/// <reference types="cypress" />

describe('Test Case 10 11: Subscription', () => {
  beforeEach(() => {
    cy.visit('https://automationexercise.com')
    cy.url().should('eq', 'https://automationexercise.com/')
    cy.get('#slider').should('be.visible')
  })
  it('Test Case 10: Verify Subscription in home page', () => {
    cy.get('#footer').scrollIntoView()
    cy.get('h2').contains('Subscription').should('be.visible')
    cy.get('#susbscribe_email').type('john@example.com')
    cy.get('#subscribe').click()
    cy.get('.alert')
      .contains('You have been successfully subscribed')
      .should('be.visible')
  })
  it('Test Case 11: Verify Subscription in Cart page', () => {
    cy.get('li').contains('Cart').click()
    cy.get('#footer').scrollIntoView()
    cy.get('h2').contains('Subscription').should('be.visible')
    cy.get('#susbscribe_email').type('john@example.com')
    cy.get('#subscribe').click()
    cy.get('.alert')
      .contains('You have been successfully subscribed')
      .should('be.visible')
  })
})
