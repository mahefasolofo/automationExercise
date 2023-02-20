/// <reference types="cypress" />

describe('Pop-up card modal', () => {
  beforeEach(() => {
    cy.visit('https://automationexercise.com')
    cy.url().should('eq', 'https://automationexercise.com/')
    cy.get('#slider').should('be.visible')
  })
  it.only('S08: WEL-T817 : On the "Added!" I should have a "Continue Shopping" button and a "View Cart" button', () => {
    cy.get(
      '.features_items :nth-child(3) .product-image-wrapper .single-products .add-to-cart',
    )
      .first()
      .click()
    cy.get('#cartModal').should('be.visible')
    cy.get('.modal-footer > .btn').should('be.visible')
    cy.get('.text-center [href="/view_cart"]').should('be.visible')
  })

  it('S09: WEL-T818 : Pop-up card modal disappear after click on "Continue shopping" button', () => {
    cy.get(
      '.features_items :nth-child(3) .product-image-wrapper .single-products .add-to-cart',
    )
      .first()
      .click()
    cy.get('#cartModal').should('be.visible')
    cy.get('.modal-footer > .btn').click()
    cy.get('#cartModal').should('have.css', 'display', 'none')
  })
  it('S10: WEL-T819 : On click on the Pop-up card modal button "View cart" I am redirected to', () => {
    cy.get(
      '.features_items :nth-child(4) .product-image-wrapper .single-products .add-to-cart',
    )
      .first()
      .click()
    cy.get('#cartModal').should('be.visible')
    cy.get('.text-center [href="/view_cart"]').click()
    cy.get('.active:contains("Shopping Cart")').should('be.visible')
  })
})
