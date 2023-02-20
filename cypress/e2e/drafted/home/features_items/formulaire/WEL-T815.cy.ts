/// <reference types="cypress" />

describe('S02: WEL-T815: when I fill in the Review form and one is empty then I should have a Message displayed on the field', () => {
  beforeEach(() => {
    cy.visit('https://automationexercise.com')
    cy.url().should('eq', 'https://automationexercise.com/')
    cy.get('#slider').should('be.visible')
  })

  it('S02: WEL-T815: Review verification', () => {
    cy.get(
      ':nth-child(3) > .product-image-wrapper > .choose > .nav > li > a',
    ).click()
    cy.get('#button-review').click() //FIXME : impossible d'atteindre le message d'erreur
  })
})
