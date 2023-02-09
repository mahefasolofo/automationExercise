/// <reference types="cypress" />

describe('Test Case 18: View Category Products', () => {
  beforeEach(() => {
    cy.visit('https://automationexercise.com')
    cy.url().should('eq', 'https://automationexercise.com/')
    cy.get('a').contains('Home').should('have.css', 'color', 'rgb(255, 165, 0)')
  })

  it('Tests Case 18: View Category Products', () => {
    //Verify that categories are visible on left side bar
    cy.get('.left-sidebar h2:contains("Category")').should('exist')
    cy.get('#accordian .panel .panel-heading [href="#Women"]').click()
    cy.get('#Women > .panel-body > ul > :nth-child(1) > a').click()
    // 6. Verify that category page is displayed and confirm text 'WOMEN - TOPS PRODUCTS'
    cy.get('.features_items > h2')
      .contains('Women - Dress Products')
      .should('exist')
    // 7. On left side bar, click on any sub-category link of 'Men' category
    cy.get('#accordian .panel .panel-heading [href="#Men"]').click()
    cy.get('#Men > .panel-body > ul > :nth-child(2) > a').click()
    // 8. Verify that user is navigated to that category page
    cy.get('.features_items > h2')
      .contains('Men - Jeans Products')
      .should('exist')
  })
})
