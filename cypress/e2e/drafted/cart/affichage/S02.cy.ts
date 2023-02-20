/// <reference types="cypress" />
import { NavbarPage } from '../../../pageObject/navbarPage'
const navbar = new NavbarPage()
describe('S02: WEL-T839 : When I arrive on the "view_cart" page and I have never added items to the cart then I should have a message "Cart is empty! Click here to buy products."', () => {
  beforeEach(() => {
    cy.visit('https://automationexercise.com')
    cy.url().should('eq', 'https://automationexercise.com/')
    cy.get('#slider').should('be.visible')
  })

  it('S02: WEL-T839 : When I arrive on the "view_cart" page and I have never added items to the cart then I should have a message "Cart is empty! Click here to buy products."', () => {
    navbar.goToCart()
    cy.get('#empty_cart').should('have.css', 'display', 'block')
  })
})
