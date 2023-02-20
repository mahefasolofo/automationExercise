/// <reference types="cypress" />
import { NavbarPage } from '../../../pageObject/navbarPage'
const navBarPage = new NavbarPage()

describe('Carousel content test', () => {
  beforeEach(() => {
    cy.visit('https://automationexercise.com')
    cy.url().should('eq', 'https://automationexercise.com/')
    cy.get('#slider').should('be.visible')
  })

  it('S06: WEL-T863: existence of buttons', () => {
    cy.get(
      '#slider-carousel .active .btn-success:contains("Test Cases")',
    ).should('be.visible')
    cy.get(
      '#slider-carousel .active .btn-success:contains("APIs list for practice")',
    ).should('be.visible')
  })
  it('S04: WEL-T805 - WEL-T806 :  button operation', () => {
    cy.get(
      '#slider-carousel .active .btn-success:contains("Test Cases")',
    ).click()
    cy.get('.title:contains("Test Cases")').should('be.visible')
    navBarPage.goToHome()
    cy.get(
      '#slider-carousel .active .btn-success:contains("APIs list for practice")',
    ).click()
    cy.get('.title:contains("APIs List for practice")').should('be.visible')
  })
})
