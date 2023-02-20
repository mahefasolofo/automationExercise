/// <reference types="cypress" />

describe('Testing the Carousel movement', () => {
  beforeEach(() => {
    cy.visit('https://automationexercise.com')
    cy.url().should('eq', 'https://automationexercise.com/')
    cy.get('#slider').should('be.visible')
  })

  it('S01: WEL-T802 : auto scroll', () => {
    cy.get('.carousel-inner .item').first().should('have.class', 'active')
    // eslint-disable-next-line cypress/no-unnecessary-waiting
    cy.wait(3000)
    cy.get('.carousel-inner .item').first().should('not.have.class', 'active')
    cy.get('.carousel-inner .item').eq(1).should('have.class', 'active')
  })

  it('S02: WEL-T803 : right carousel button', () => {
    cy.get('.carousel-inner .item').first().should('have.class', 'active')
    cy.get('#slider-carousel .fa-angle-right').click()
    cy.get('.carousel-inner .item').first().should('not.have.class', 'active')
    cy.get('.carousel-inner .item').eq(1).should('have.class', 'active')
  })
  it('S03: WEL-T804 : left carousel button', () => {
    cy.get('.carousel-inner .item').first().should('have.class', 'active')
    cy.get('#slider-carousel .fa-angle-left').click()
    cy.get('.carousel-inner .item').last().should('have.class', 'active')
  })
  it('S04: WEL-T805: Go to Test Cases page from Carousel', () => {
    cy.get('.active [href="/test_cases"]').click()
    cy.get('.title').contains('Test Cases')
  })
  it('S05: WEL-T806: Go to API Testing page from Carousel', () => {
    cy.get('.active [href="/api_list"]').click()
    cy.get('.title').contains('APIs List for practice')
  })

  it('S07: WEL-T864: no scrolling when hovering the mouse over the carousel', () => {
    cy.get('.carousel-inner .item').first().should('have.class', 'active')
    cy.get('.carousel-inner').first().trigger('mouseover')
    // eslint-disable-next-line cypress/no-unnecessary-waiting
    cy.wait(3000)
    cy.get('.carousel-inner .item').first().should('have.class', 'active')
  })
})
