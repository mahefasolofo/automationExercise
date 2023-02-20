/// <reference types="cypress" />

describe('Scrollup button', () => {
  beforeEach(() => {
    cy.visit('https://automationexercise.com')
    cy.url().should('eq', 'https://automationexercise.com/')
    cy.get('#slider').should('be.visible')
  })

  it('S03: WEL-T833 : When I scroll a page a scroll up should appear on the lower right part of the screen', () => {
    cy.window().scrollTo(0, 500)
    cy.get('#scrollUp').should('be.visible')
    cy.get('#scrollUp').should('have.css', 'bottom', '0px')
    cy.get('#scrollUp').should('have.css', 'right', '10px')
  })
  it.only('S04 : WEL-T834 :  When I click on the "scrollup" I should be redirected to the top of the page', () => {
    cy.window().scrollTo('bottom')
    cy.get('#scrollUp').should('be.visible')
    cy.get('#scrollUp').click()
    cy.get('.header-middle > .container > .row').should('be.visible')
  })
})
