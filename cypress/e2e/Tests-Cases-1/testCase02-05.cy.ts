/// <reference types="cypress" />
import LoginPage from '../pageObject/loginPage'
const loginPage = new LoginPage()

describe('Test Cases Login Logout Signup with error', () => {
  beforeEach(() => {
    cy.visit('https://automationexercise.com')
    cy.url().should('eq', 'https://automationexercise.com/')
    cy.get('#slider').should('be.visible')
    cy.get('[href="/login"]').click()
  })

  it('Tests Case 2 : Login User with correct email and password', () => {
    cy.get('h2').should('contain', 'Login to your account') //TODO: change the locator
    loginPage.fillLoginData('john@example.com', '123456')
    cy.get('.navbar-nav').should('contain', 'Logged in as john')
    cy.get('li').contains('Logout').click()
  })

  it('Test case 3 : Login User with incorrect email and password', () => {
    cy.get('h2').should('contain', 'Login to your account') //TODO: change the locator
    loginPage.fillLoginData('error@example.com', '123456')
    cy.get('p').contains('Your email or password is incorrect!')
  })

  it('Test case 4 : Logout User', () => {
    cy.get('h2').should('contain', 'Login to your account')
    loginPage.fillLoginData('john@example.com', '123456')
    cy.get('.navbar-nav').should('contain', 'Logged in as john')
    cy.get('li').contains('Logout').click() //TODO: change the locator
    cy.get('a') //TODO: change the locator
      .contains('Signup')
      .should('have.css', 'color', 'rgb(255, 165, 0)')
  })

  it('Test case 5 : Register User with existing email', () => {
    cy.get('h2').should('contain', 'New User Signup!')
    cy.get('[data-qa="signup-name"]').type('john')
    cy.get('[data-qa="signup-email"]').type('john@example.com')
    cy.get('[data-qa="signup-button"]').click()
    cy.get('p').contains('Email Address already exist!')
  })
})
