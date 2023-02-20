/// <reference types="cypress" />
import { NavbarPage } from '../../../pageObject/navbarPage'
const navbar = new NavbarPage()
describe('Search on Products page', () => {
  beforeEach(() => {
    cy.visit('https://automationexercise.com')
    cy.url().should('eq', 'https://automationexercise.com/')
    cy.get('#slider').should('be.visible')
  })

  it('S02: WEL-T837 : When I click on the "Search" button and the field is empty "All products" is displayed', () => {
    navbar.goToProduct()
    cy.get('#search_product').clear({ force: true })
    cy.get('#submit_search').click()
    cy.get('.features_items .title').should('contain', 'All Products')
  })
})
