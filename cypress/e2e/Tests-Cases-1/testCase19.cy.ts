/// <reference types="cypress" />

describe('Test Case 19: View & Cart Brand Products', () => {
  beforeEach(() => {
    cy.visit('https://automationexercise.com')
    cy.url().should('eq', 'https://automationexercise.com/')
    cy.get('a').contains('Home').should('have.css', 'color', 'rgb(255, 165, 0)')
  })

  it('Tests Case 19', () => {
    // 3. Click on 'Products' button
    cy.get('li').contains('Products').click()
    // 4. Verify that Brands are visible on left side bar
    cy.get('.left-sidebar .brands_products h2:contains("Brands")').should(
      'exist',
    )
    // 5. Click on any brand name
    cy.get('.brands-name li a:contains("Allen Solly Junior")').click()
    // 6. Verify that user is navigated to brand page and brand products are displayed
    cy.get('.features_items > h2')
      .contains('Brand - Allen Solly Junior Products')
      .should('exist')
    // 7. On left side bar, click on any other brand link
    cy.get('.brands-name li a:contains("H&M")').click()
    // 8. Verify that user is navigated to that brand page and can see products
    cy.get('.features_items > h2')
      .contains('Brand - H&M Products')
      .should('exist')
  })
})
