/// <reference types="cypress" />
import { NavbarPage } from '../../../../pageObject/navbarPage'
const navbarPage = new NavbarPage()

describe('S07: WEL-T813: When I click on the View Product button then I should arrive on the "product_details/*" page with the image of the product its descriptions a quantity field and an add to cart button as well as a Review form', () => {
  it('S07: WEL-T813: When I click on the View Product button then I should arrive on the "product_details/*" page with the image of the product its descriptions a quantity field and an add to cart button as well as a Review form', () => {
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
