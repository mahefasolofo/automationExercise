/// <reference types="cypress" />

describe('Test Case 10 11: Subscription', () => {
  beforeEach(() => {
    cy.visit('https://automationexercise.com')
    cy.url().should('eq', 'https://automationexercise.com/')
    cy.get('a').contains('Home').should('have.css', 'color', 'rgb(255, 165, 0)')
  })
  it('Test Case 10: Verify Subscription in home page', () => {
    cy.get('#footer').scrollIntoView()
    cy.get('h2').contains('Subscription').should('exist')
    cy.get('#susbscribe_email').type('john@example.com')
    cy.get('#subscribe').click()
    cy.get('.alert')
      .contains('You have been successfully subscribed')
      .should('exist')
  })
  it('Test Case 11: Verify Subscription in Cart page', () => {
    cy.get('li').contains('Cart').click()
    cy.get('#footer').scrollIntoView()
    cy.get('h2').contains('Subscription').should('exist')
    cy.get('#susbscribe_email').type('john@example.com')
    cy.get('#subscribe').click()
    cy.get('.alert')
      .contains('You have been successfully subscribed')
      .should('exist')
  })
})
