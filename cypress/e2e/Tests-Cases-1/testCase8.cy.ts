/// <reference types="cypress" />

describe('Test Case 8: Verify All Products and product detail page', () => {
  it('Test Case 8', () => {
    cy.visit('https://automationexercise.com')
    cy.url().should('eq', 'https://automationexercise.com/')
    cy.get('a').contains('Home').should('have.css', 'color', 'rgb(255, 165, 0)')
    cy.get('li').contains('Products').click()
    cy.get('a')
      .contains('Products')
      .should('have.css', 'color', 'rgb(255, 165, 0)')
    cy.get('.features_items .col-sm-4:first a:contains("View Product")').click()
    cy.url().should('eq', 'https://automationexercise.com/product_details/1')
    //verify details are visible: product name, category, price, availability, condition, brand
    cy.get('.product-information h2').should('exist')
    cy.get('.product-information p:contains("Category")').should('exist')
    cy.get('.product-information span:contains("Rs")').should('exist')
    cy.get('.product-information p:contains("Availability")').should('exist')
    cy.get('.product-information p:contains("Condition")').should('exist')
    cy.get('.product-information p:contains("Brand")').should('exist')
  })
})
