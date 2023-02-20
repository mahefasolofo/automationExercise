/// <reference types="cypress" />

describe('Product card content', () => {
  beforeEach(() => {
    cy.visit('https://automationexercise.com')
    cy.url().should('eq', 'https://automationexercise.com/')
    cy.get('#slider').should('be.visible')
  })
  it('S01: WEL-T807 : Section Feature Items', () => {
    cy.window().scrollTo(0, 500)
    cy.get('.title:contains("Features Items")').should('be.visible')
  })

  it('S02: WEL-T808 : Detail of product cards', () => {
    cy.get('.features_items').scrollIntoView()
    cy.get('.product-image-wrapper .single-products img').should('be.visible')
    cy.get('.product-image-wrapper .single-products h2:contains("Rs.")').should(
      'be.visible',
    )
    cy.get('.product-image-wrapper .single-products p').should('be.visible')
    cy.get('.product-image-wrapper .single-products .add-to-cart').should(
      'be.visible',
    )
    cy.get('.product-image-wrapper .nav-justified').should('be.visible')
  })

  it('S03: WEL-T809 : overlay product', () => {
    //product-overlay
    cy.get('.features_items').scrollIntoView()
    cy.get('.features_items .product-image-wrapper')
      .first()
      .trigger('mousedown')
    cy.get('.features_items .product-image-wrapper')
      .first()
      .should('be.visible')
  })
})
