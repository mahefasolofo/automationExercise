/// <reference types="cypress" />
import { NavbarPage } from '../../../../pageObject/navbarPage'
const navbarPage = new NavbarPage()
import AddProductPage from '../../../../pageObject/addProductPage'
const addProduct = new AddProductPage()

describe('Add Products in Cart', () => {
  beforeEach(() => {
    cy.visit('https://automationexercise.com')
    cy.url().should('eq', 'https://automationexercise.com/')
    cy.get('#slider').should('be.visible')
  })
  it('S01: WEL-T816: When I click on "Add to cart" of a product then I should have this product in the shopping list (cart) and an "Added" pop-up window is displayed', () => {
    navbarPage.goToProduct()
    addProduct.addRandomProduct()
    navbarPage.goToCart()
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
