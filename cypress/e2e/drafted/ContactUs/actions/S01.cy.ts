/// <reference types="cypress" />
import { NavbarPage } from '../../../pageObject/navbarPage'
const navbar = new NavbarPage()

describe('mailto', () => {
  beforeEach(() => {
    cy.visit('https://automationexercise.com')
    cy.url().should('eq', 'https://automationexercise.com/')
    cy.get('#slider').should('be.visible')
  })

  it('S01: WEL-T858 : When I click on the email address I should be redirected to the messaging application to send an email to the address', () => {
    navbar.goToContactUs()
    cy.get('.contact-info address u').click()
  })
})
