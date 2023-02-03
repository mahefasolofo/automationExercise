/// <reference types="cypress" />

describe('Test Case 6 : Contact Us Form', () => {
  it('Test Case 6', () => {
    cy.visit('https://automationexercise.com')
    cy.url().should('eq', 'https://automationexercise.com/')
    cy.get('a').contains('Home').should('have.css', 'color', 'rgb(255, 165, 0)')
    cy.get('li').contains('Contact us').click()
    cy.get('h2').should('contain', 'Get In Touch')
    cy.get('[data-qa="name"]').type('John')
    cy.get('[data-qa="email"]').type('john@example.com')
    cy.get('[data-qa="subject"]').type('Message for admin')
    cy.get('[data-qa="message"]').type(
      "Ceci est un message d'essai pour les admins",
    )
    cy.get('input[type="file"]').selectFile('invoice.txt')
    cy.get('[data-qa="submit-button"]').click()
    cy.get('div').contains(
      'Success! Your details have been submitted successfully.',
    )
    cy.get('li').contains('Home').click()
    cy.get('a').contains('Home').should('have.css', 'color', 'rgb(255, 165, 0)')
  })
})
