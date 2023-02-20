/// <reference types="cypress" />
import { NavbarPage } from '../../../pageObject/navbarPage'
const navbar = new NavbarPage()

describe('mailto', () => {
  beforeEach(() => {
    cy.visit('https://automationexercise.com')
    cy.url().should('eq', 'https://automationexercise.com/')
    cy.get('#slider').should('be.visible')
  })

  it('S05 : WEL-T909 : mandatory fields must be marked with an asterisk', () => {
    navbar.goToContactUs()
    cy.get('[required="required"]').should('contain', '*') //FIXME:
  })
})

//
