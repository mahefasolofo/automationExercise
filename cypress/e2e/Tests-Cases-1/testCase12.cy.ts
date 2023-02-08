/// <reference types="cypress" />

describe('Test Case 12: Add Products in Cart', () => {
  beforeEach(() => {
    cy.visit('https://automationexercise.com')
    cy.url().should('eq', 'https://automationexercise.com/')
    cy.get('a').contains('Home').should('have.css', 'color', 'rgb(255, 165, 0)')
  })
  it('Test case 12', () => {
    //TODO: rajouter un bon titre pour chaque it
    cy.get('li').contains('Products').click()
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
    cy.get('#product-1').should('exist')
    cy.get('#product-2').should('exist')
    // 10. Verify their prices, quantity and total price
    cy.get('#product-1 .cart_price').should('exist') //TODO: changer en be visible
    cy.get('#product-1 .cart_quantity').should('exist')
    cy.get('#product-1 .cart_total').should('exist')
    cy.get('#product-2 .cart_price').should('exist')
    cy.get('#product-2 .cart_quantity').should('exist')
    cy.get('#product-2 .cart_total').should('exist')
  })
})
