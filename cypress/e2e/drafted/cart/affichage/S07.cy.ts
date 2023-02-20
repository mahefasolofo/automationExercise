/// <reference types="cypress" />
import { NavbarPage } from '../../../pageObject/navbarPage'
const navbar = new NavbarPage()
import AddProductPage from '../../../pageObject/addProductPage'
const addProduct = new AddProductPage()

describe('S07: WEL-T912: When I click on product photos I should be redirected to the "product_details" page', () => {
  beforeEach(() => {
    cy.visit('https://automationexercise.com')
    cy.url().should('eq', 'https://automationexercise.com/')
    cy.get('#slider').should('be.visible')
  })

  it('S07: WEL-T912: When I click on product photos I should be redirected to the "product_details" page', () => {
    navbar.goToProduct()
    addProduct.addRandomProduct()
    navbar.goToCart()
    cy.get('#product-1 > .cart_product > a > .product_image').click()
    cy.get('.product-details').should('be.visible') //FIXME: la page product_details doit s'afficher
  })
})
