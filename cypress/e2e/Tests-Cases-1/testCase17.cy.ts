/// <reference types="cypress" />

describe('Test Case 17: Remove Products From Cart', () => {
  beforeEach(() => {
    cy.visit('https://automationexercise.com')
    cy.url().should('eq', 'https://automationexercise.com/')
    cy.get('#slider').should('be.visible')
  })

  it('Tests Case 17', () => {
    //Add product to cart
    cy.get('.overlay-content [data-product-id="1"]').click({ force: true })
    cy.get('button:contains("Continue Shopping")').click()
    cy.get('.overlay-content [data-product-id="2"]').click({ force: true })
    cy.get('button:contains("Continue Shopping")').click()
    cy.get('.overlay-content [data-product-id="3"]').click({ force: true })
    cy.get('button:contains("Continue Shopping")').click()
    //Click cart button
    cy.get('li').contains('Cart').click() //TODO: change locator
    //verify that cart page is displayed
    cy.get('.active:contains("Shopping Cart")').should('exist')
    //Click X button corresponding to particular product
    cy.get('#product-2 .cart_quantity_delete').click()
    cy.get('#product-2').its('length').should('equal', 0)
  })
})
