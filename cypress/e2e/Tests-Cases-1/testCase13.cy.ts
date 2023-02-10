/// <reference types="cypress" />
import NavbarPage from '../pageObject/navbarPage'
const navbarPage = new NavbarPage()
describe('Test Case 13', () => {
  it('Test Case 13: Verify Product quantity in Cart', () => {
    cy.visit('https://automationexercise.com')
    cy.url().should('eq', 'https://automationexercise.com/')
    cy.get('#slider').should('be.visible')
    navbarPage.goToProduct()
    cy.get('.features_items .col-sm-4:first a:contains("View Product")').click()
    cy.url().should('eq', 'https://automationexercise.com/product_details/1')
    cy.get('input[name="quantity"]').clear().type('4')
    cy.get('button').contains('Add to cart').click()
    cy.get('a').contains('View Cart').click() //TODO : change locator
    cy.get('#product-1').should('be.visible')
    cy.get('#product-1 .cart_quantity .disabled')
      .contains('4')
      .should('be.visible')
  })
})
