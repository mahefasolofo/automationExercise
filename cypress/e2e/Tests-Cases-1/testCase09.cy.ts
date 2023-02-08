/// <reference types="cypress" />

const search_item = 'Jeans'
describe('Test Case 9: Search Product', () => {
  it('Test Case 9', () => {
    cy.visit('https://automationexercise.com')
    cy.url().should('eq', 'https://automationexercise.com/')
    cy.get('#slider').should('be.visible')
    cy.get('li').contains('Products').click() //TODO : change locator
    cy.get('a') //TODO : change locator
      .contains('Products')
      .should('have.css', 'color', 'rgb(255, 165, 0)') //TODO : change locator
    cy.get('#search_product').type(search_item)
    cy.get('#submit_search').click()
    cy.get(
      '.features_items .col-sm-4:first p:contains("' + search_item + '")',
    ).should('be.visible')
  })
})
