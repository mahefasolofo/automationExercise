/// <reference types="cypress" />
import { NavbarPage } from '../../../pageObject/navbarPage'
const navbar = new NavbarPage()
describe('S01: WEL-T840 : When I don\'t have an item in my cart yet and I click on "here" in "Cart is empty! Click here to buy products. I should be redirected to the "products" page"', () => {
  beforeEach(() => {
    cy.visit('https://automationexercise.com')
    cy.url().should('eq', 'https://automationexercise.com/')
    cy.get('#slider').should('be.visible')
  })

  it('S01: WEL-T840 ', () => {
    navbar.goToCart()
    cy.get('#empty_cart').should('have.css', 'display', 'block')
    cy.get('#empty_cart .text-center a:contains("here")').click()
    cy.get('#sale_image').should('be.visible')
  })
})
