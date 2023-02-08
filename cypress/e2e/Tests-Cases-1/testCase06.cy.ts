/// <reference types="cypress" />
import ContactPage from '../pageObject/contactPage'
const contactPage = new ContactPage()

describe('Test Case 6 : Contact Us Form', () => {
  it('Test Case 6', () => {
    cy.visit('https://automationexercise.com')
    cy.url().should('eq', 'https://automationexercise.com/')
    cy.get('#slider').should('be.visible')
    cy.get('li').contains('Contact us').click() //TODO: change the locator
    cy.get('h2').should('contain', 'Get In Touch') //TODO: change the locator
    contactPage.fillContactUs('John', 'john@example.com', 'invoice.txt')
    cy.get('div').contains(
      'Success! Your details have been submitted successfully.',
    )
    cy.get('li').contains('Home').click() //TODO: change the locator
    cy.get('#slider').should('be.visible')
  })
})
