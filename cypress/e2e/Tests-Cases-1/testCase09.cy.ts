/// <reference types="cypress" />

const search_item = 'Jeans'
describe('Test Case 9: Search Product', () => {
  it('Test Case 9', () => {
    cy.visit('https://automationexercise.com')
    cy.url().should('eq', 'https://automationexercise.com/')
    cy.get('a').contains('Home').should('have.css', 'color', 'rgb(255, 165, 0)')
    cy.get('li').contains('Products').click()
    cy.get('a')
      .contains('Products')
      .should('have.css', 'color', 'rgb(255, 165, 0)')
    cy.get('#search_product').type(search_item)
    cy.get('#submit_search').click()
    cy.get(
      '.features_items .col-sm-4:first p:contains("' + search_item + '")',
    ).should('exist')
  })
})
