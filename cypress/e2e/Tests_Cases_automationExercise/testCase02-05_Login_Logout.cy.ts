/// <reference types="cypress" />
import LoginPage from '../pageObject/loginPage'
const loginPage = new LoginPage()
import { NavbarPage } from '../pageObject/navbarPage'
const navbarPage = new NavbarPage()
import { SingUpPage } from '../pageObject/signupPage'
const signUpPage = new SingUpPage()

// let emailUser
// let nameUser
// let passwordUser
let emailUserError
let passwordUserError
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min)
}
const randomUserNumber = getRandomInt(0, 19)
let title: string
let name: string
let email: string
let password: string
let birth_date: string
let birth_month: string
let birth_year: string
let lastName: string
let companyName: string
let address1: string
let address2: string
let country: string
let state: string
let city: string
let zipCode: string
let phoneNumber: string

describe('Test Cases Login Logout Signup with error', () => {
  beforeEach(() => {
    cy.fixture('data.json').then((item) => {
      ;(title = item[randomUserNumber].gender[1]),
        (name = item[randomUserNumber].name),
        (email = item[randomUserNumber].email),
        (password = item[randomUserNumber].password),
        (birth_date = item[randomUserNumber].birthDate),
        (birth_month = item[randomUserNumber].birthMonth),
        (birth_year = item[randomUserNumber].birthYear),
        (lastName = item[randomUserNumber].lastName),
        (companyName = item[randomUserNumber].companyName),
        (address1 = item[randomUserNumber].address1),
        (address2 = item[randomUserNumber].address2),
        (country = item[randomUserNumber].country),
        (state = item[randomUserNumber].state),
        (city = item[randomUserNumber].city),
        (zipCode = item[randomUserNumber].zipCode),
        (phoneNumber = item[randomUserNumber].phoneNumber),
        (emailUserError = item[randomUserNumber + 1].email),
        (passwordUserError = item[randomUserNumber + 1].password)

      cy.createUser(
        name,
        email,
        password,
        title,
        birth_date,
        birth_month,
        birth_year,
        lastName,
        companyName,
        address1,
        address2,
        country,
        zipCode,
        state,
        city,
        phoneNumber,
      )
      //chargement de fixtures
      cy.visit('https://automationexercise.com')
      cy.url().should('eq', 'https://automationexercise.com/')
      cy.get('#slider').should('be.visible')
      navbarPage.goToSignup()
    })
  })

  it('Tests Case 2 : Login User with correct email and password', () => {
    cy.get('.login-form > h2').should('contain', 'Login to your account')
    loginPage.fillLoginData(email, password)
    cy.get('.navbar-nav').should('contain', 'Logged in as ' + name)
    navbarPage.goToDelete()
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
    loginPage.fillLoginData(email, password)
    cy.get('.navbar-nav').should('contain', 'Logged in as ' + name)
    navbarPage.goToLogout
  })

  it('Test case 5 : Register User with existing email', () => {
    cy.get('.signup-form > h2').should('contain', 'New User Signup!')
    signUpPage.fillSignupForm(name, email)
    cy.get('.signup-form > form > p').contains('Email Address already exist!')
  })
  afterEach(() => {
    cy.deleteUser(email, password)
  })
})
