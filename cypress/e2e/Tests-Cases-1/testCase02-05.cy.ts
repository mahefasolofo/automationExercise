/// <reference types="cypress" />

describe('Test Cases Login Logout Signup with error', () => {
  beforeEach(() => {
    cy.visit('https://automationexercise.com')
    cy.url().should('eq', 'https://automationexercise.com/')
    cy.get('a').contains('Home').should('have.css', 'color', 'rgb(255, 165, 0)')
  })

  it('Tests Case 2 : Login User with correct email and password', () => {
    cy.get('li').contains('Signup').click()
    cy.get('h2').should('contain', 'Login to your account')
    cy.get('[data-qa="login-email"]').type('john@example.com')
    cy.get('[data-qa="login-password"]').type('123456')
    cy.get('[data-qa="login-button"]').click()
    cy.get('.navbar-nav').should('contain', 'Logged in as john')
    cy.get('li').contains('Logout').click()
  })

  it('Test case 3 : Login User with incorrect email and password', () => {
    cy.get('li').contains('Signup').click()
    cy.get('h2').should('contain', 'Login to your account')
    cy.get('[data-qa="login-email"]').type('error@example.com')
    cy.get('[data-qa="login-password"]').type('123456')
    cy.get('[data-qa="login-button"]').click()
    cy.get('p').contains('Your email or password is incorrect!')
  })

  it('Test case 4 : Logout User', () => {
    cy.get('li').contains('Signup').click()
    cy.get('h2').should('contain', 'Login to your account')
    cy.get('[data-qa="login-email"]').type('john@example.com')
    cy.get('[data-qa="login-password"]').type('123456')
    cy.get('[data-qa="login-button"]').click()
    cy.get('.navbar-nav').should('contain', 'Logged in as john')
    cy.get('li').contains('Logout').click()
    cy.get('a')
      .contains('Signup')
      .should('have.css', 'color', 'rgb(255, 165, 0)')
  })

  it('Test case 5 : Register User with existing email', () => {
    cy.get('li').contains('Signup').click()
    cy.get('h2').should('contain', 'New User Signup!')
    cy.get('[data-qa="signup-name"]').type('john')
    cy.get('[data-qa="signup-email"]').type('john@example.com')
    cy.get('[data-qa="signup-button"]').click()
    cy.get('p').contains('Email Address already exist!')
  })
})
