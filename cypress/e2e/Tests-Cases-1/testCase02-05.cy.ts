/// <reference types="cypress" />
import LoginPage from '../pageObject/loginPage'
const loginPage = new LoginPage()
import NavbarPage from '../pageObject/navbarPage'
const navbarPage = new NavbarPage()
import SingUpPage from '../pageObject/signupPage'
const signUpPage = new SingUpPage()

let emailUser
let nameUser
let passwordUser
let emailUserError
let passwordUserError

describe('Test Cases Login Logout Signup with error', () => {
  beforeEach(() => {
    //chargement de fixtures
    cy.fixture('userDefault.json')
      .its('users')
      .then((item) => {
        emailUser = item[0].email
        nameUser = item[0].name.toLowerCase()
        passwordUser = item[0].password
        emailUserError = item[1].email
        passwordUserError = item[1].password
      })
    cy.visit('https://automationexercise.com')
    cy.url().should('eq', 'https://automationexercise.com/')
    cy.get('#slider').should('be.visible')
    navbarPage.goToSignup()
  })

  it('Tests Case 2 : Login User with correct email and password', () => {
    cy.get('.login-form > h2').should('contain', 'Login to your account')
    loginPage.fillLoginData(emailUser, passwordUser)
    cy.get('.navbar-nav').should('contain', 'Logged in as ' + nameUser)
    navbarPage.goToLogout()
  })

  it('Test case 3 : Login User with incorrect email and password', () => {
    cy.get('.login-form > h2').should('contain', 'Login to your account')
    loginPage.fillLoginData(emailUserError, passwordUserError)
    cy.get('.login-form > form > p').contains(
      'Your email or password is incorrect!',
    )
  })

  it('Test case 4 : Logout User', () => {
    cy.get('.login-form > h2').should('contain', 'Login to your account')
    loginPage.fillLoginData(emailUser, passwordUser)
    cy.get('.navbar-nav').should('contain', 'Logged in as ' + nameUser)
    navbarPage.goToLogout
  })

  it('Test case 5 : Register User with existing email', () => {
    cy.get('.signup-form > h2').should('contain', 'New User Signup!')
    signUpPage.fillSignupForm(nameUser, emailUser)
    cy.get('.signup-form > form > p').contains('Email Address already exist!')
  })
})
