/// <reference types="cypress" />
import NavbarPage from '../../../pageObject/navbarPage'
const navbar = new NavbarPage()

describe('S01: WEL-T829 : The Footer section should be at the end of every page on the site', () => {
  beforeEach(() => {
    cy.visit('https://automationexercise.com')
    cy.url().should('eq', 'https://automationexercise.com/')
    cy.get('#slider').should('be.visible')
  })

  it('S01: WEL-T829 : Home', () => {
    cy.window().scrollTo('bottom')
    cy.get('#footer').should('be.visible')
    cy.get('#footer h2:contains("Subscription")').should('be.visible')
    cy.get('#footer .searchform input').should('be.visible')
    cy.get('#footer .searchform #subscribe').should('be.visible')
  })

  it('S01: WEL-T829 : Products page', () => {
    navbar.goToProduct()
    cy.window().scrollTo('bottom')
    cy.get('#footer').should('be.visible')
    cy.get('#footer h2:contains("Subscription")').should('be.visible')
    cy.get('#footer .searchform input').should('be.visible')
    cy.get('#footer .searchform #subscribe').should('be.visible')
  })
  it('S01: WEL-T829 : Cart page', () => {
    navbar.goToCart()
    cy.window().scrollTo('bottom')
    cy.get('#footer').should('be.visible')
    cy.get('#footer h2:contains("Subscription")').should('be.visible')
    cy.get('#footer .searchform input').should('be.visible')
    cy.get('#footer .searchform #subscribe').should('be.visible')
  })

  it('S01: WEL-T829 : SignUp/Login page', () => {
    navbar.goToSignup()
    cy.window().scrollTo('bottom')
    cy.get('#footer').should('be.visible')
    cy.get('#footer h2:contains("Subscription")').should('be.visible')
    cy.get('#footer .searchform input').should('be.visible')
    cy.get('#footer .searchform #subscribe').should('be.visible')
  })
  it('S01: WEL-T829 : Test cases page', () => {
    navbar.goToTestCases()
    cy.window().scrollTo('bottom')
    cy.get('#footer').should('be.visible')
    cy.get('#footer h2:contains("Subscription")').should('be.visible')
    cy.get('#footer .searchform input').should('be.visible')
    cy.get('#footer .searchform #subscribe').should('be.visible')
  })
  it('S01: WEL-T829 : API testing page', () => {
    navbar.goToAPITesting()
    cy.window().scrollTo('bottom')
    cy.get('#footer').should('be.visible')
    cy.get('#footer h2:contains("Subscription")').should('be.visible')
    cy.get('#footer .searchform input').should('be.visible')
    cy.get('#footer .searchform #subscribe').should('be.visible')
  })
  it('S01: WEL-T829 : Contact us page', () => {
    navbar.goToContactUs()
    cy.window().scrollTo('bottom')
    cy.get('#footer').should('be.visible')
    cy.get('#footer h2:contains("Subscription")').should('be.visible')
    cy.get('#footer .searchform input').should('be.visible')
    cy.get('#footer .searchform #subscribe').should('be.visible')
  })
})
