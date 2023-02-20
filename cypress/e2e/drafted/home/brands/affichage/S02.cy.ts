/// <reference types="cypress" />

let number
// eslint-disable-next-line no-unused-vars
let count
describe('S02:WEL-T825 The number in brackets to the right of each brand name must be identical to the number of items corresponding to the brand', () => {
  beforeEach(() => {
    cy.visit('https://automationexercise.com')
    cy.url().should('eq', 'https://automationexercise.com/')
    cy.get('#slider').should('be.visible')
    cy.get('h2:contains("Brands")').scrollIntoView()
  })

  it('S02:WEL-T825', () => {
    cy.get('.brands-name > .nav > :nth-child(1) > a > .pull-right')
      .invoke('text')
      .then((value) => {
        number = value.slice(1, -1)

        cy.get('.brands-name > .nav > :nth-child(1) > a').click()
        cy.get('.features_items')
          .find('.col-sm-4')
          .its('length')
          .invoke('valueOf')
          .as('count')
          .then((val) => {
            expect(val.toString()).to.equal(number)
          })
      })
  })
})
