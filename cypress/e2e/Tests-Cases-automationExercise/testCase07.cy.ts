/// <reference types="cypress" />
import { NavbarPage } from '../pageObject/navbarPage'
const navbarPage = new NavbarPage()
describe('Test Case 7: Verify Test Cases Page', () => {
  it('Test Case 7: Verify Test Cases Page', () => {
    cy.visit('https://automationexercise.com')
    cy.url().should('eq', 'https://automationexercise.com/')
    cy.get('#slider').should('be.visible')
    navbarPage.goToTestCases()
  })
})
