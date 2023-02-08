/// <reference types="cypress" />

describe('Test Case 13', () => {
  it('Test Case 13', () => {
    cy.visit('https://automationexercise.com')
    cy.url().should('eq', 'https://automationexercise.com/')
    cy.get('a').contains('Home').should('have.css', 'color', 'rgb(255, 165, 0)')
    cy.get('li').contains('Products').click()
    cy.get('a')
      .contains('Products')
      .should('have.css', 'color', 'rgb(255, 165, 0)')
    cy.get('.features_items .col-sm-4:first a:contains("View Product")').click()
    cy.url().should('eq', 'https://automationexercise.com/product_details/1')
    cy.get('input[name="quantity"]').clear().type('4')
    cy.get('button').contains('Add to cart').click()
    cy.get('a').contains('View Cart').click()
    cy.get('#product-1').should('exist')
    cy.get('#product-1 .cart_quantity .disabled').contains('4').should('exist')
  })
})
