/// <reference types="cypress" />

describe('Test Case 7: Verify Test Cases Page', () => {
  it('Test Case 7', () => {
    cy.visit('https://automationexercise.com')
    cy.url().should('eq', 'https://automationexercise.com/')
    cy.get('#slider').should('be.visible')
    cy.get('li').contains('Test Cases').click()

    cy.get('li')
      .contains('Test Cases')
      .should('have.css', 'color', 'rgb(255, 165, 0)') //TODO : remplacer par les éléments qui doivent être présents
  })
})
