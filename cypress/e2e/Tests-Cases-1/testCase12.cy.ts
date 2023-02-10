/// <reference types="cypress" />
import NavbarPage from '../pageObject/navbarPage'
const navbarPage = new NavbarPage()

describe('Test Case 12: Add Products in Cart', () => {
  beforeEach(() => {
    cy.visit('https://automationexercise.com')
    cy.url().should('eq', 'https://automationexercise.com/')
    cy.get('#slider').should('be.visible')
  })
  it('Test case 12: Add Products in Cart', () => {
    navbarPage.goToProduct()
    cy.get('.features_items .col-sm-4:first')
      .trigger('mouseover')
      .get('.overlay-content [data-product-id="1"]')
      .click({ force: true })
    cy.get('button:contains("Continue Shopping")').click()
    cy.get('.col-sm-4')
      .eq(1)
      .trigger('mouseover')
      .get('.overlay-content [data-product-id="2"]')
      .click({ force: true })
    cy.get('a:contains("View Cart")').click()
    //     9. Verify both products are added to Cart
    cy.get('#product-1').should('be.visible')
    cy.get('#product-2').should('be.visible')
    // 10. Verify their prices, quantity and total price
    cy.get('#product-1 .cart_price').should('be.visible')
    cy.get('#product-1 .cart_quantity').should('be.visible')
    cy.get('#product-1 .cart_total').should('be.visible')
    cy.get('#product-2 .cart_price').should('be.visible')
    cy.get('#product-2 .cart_quantity').should('be.visible')
    cy.get('#product-2 .cart_total').should('be.visible')
  })
})
