/// <reference types="cypress" />
import NavbarPage from '../pageObject/navbarPage'
const navbarPage = new NavbarPage()

describe('Test Case 8: Verify All Products and product detail page', () => {
  it('Test Case 8: Verify All Products and product detail page', () => {
    cy.visit('https://automationexercise.com')
    cy.url().should('eq', 'https://automationexercise.com/')
    cy.get('#slider').should('be.visible')
    navbarPage.goToProduct()
    cy.get('.features_items .col-sm-4:first a:contains("View Product")').click()
    cy.url().should('eq', 'https://automationexercise.com/product_details/1')
    //verify details are visible: product name, category, price, availability, condition, brand
    cy.get('.product-information h2').should('be.visible')
    cy.get('.product-information p:contains("Category")').should('be.visible')
    cy.get('.product-information span:contains("Rs")').should('be.visible')
    cy.get('.product-information p:contains("Availability")').should(
      'be.visible',
    )
    cy.get('.product-information p:contains("Condition")').should('be.visible')
    cy.get('.product-information p:contains("Brand")').should('be.visible')
  })
})
