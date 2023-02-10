/// <reference types="cypress" />
const { faker } = require('@faker-js/faker')
import LoginPage from '../pageObject/loginPage'
const loginPage = new LoginPage()
import NavbarPage from '../pageObject/navbarPage'
const navbarPage = new NavbarPage()
import VerificationPage from '../pageObject/verificationPage'
const verificationPage = new VerificationPage()
import PaymentPage from '../pageObject/payementPage'
const paymentPage = new PaymentPage()
import AddProductPage from '../pageObject/addProductPage'
const addProductPage = new AddProductPage()

let title = 'Mr.'
let email
let name
let password
let lastName
let state
let city
let zipCode
let phoneNumber
//we use faker for others payment information
const cardNumber = faker.finance.creditCardNumber()
const cvc = faker.finance.creditCardCVV()
const cardMonth = faker.datatype.number({ min: 1, max: 12 }).toString()
let futureDate = faker.date.future(5)
const cardYear = futureDate.getFullYear()

describe('Test Case 16: Place Order: Login before Checkout', () => {
  beforeEach(() => {
    cy.fixture('userDefault.json')
      .its('users')
      .then((item) => {
        email = item[0].email
        name = item[0].name
        password = item[0].password
        lastName = item[0].lastName
        state = item[0].state
        city = item[0].city
        zipCode = item[0].zipCode
        phoneNumber = item[0].phoneNumber
      })
    cy.visit('https://automationexercise.com')
    cy.url().should('eq', 'https://automationexercise.com/')
    cy.get('#slider').should('be.visible')
  })

  it('Tests Case 16: Place Order: Login before Checkout', () => {
    navbarPage.goToSignup()
    cy.get('h2').should('contain', 'Login to your account')
    loginPage.fillLoginData(email, password)
    cy.get('.navbar-nav').should(
      'contain',
      'Logged in as ' + name.toLowerCase(),
    )
    //Add product to Cart
    addProductPage.addRandomProduct()
    //Click cart button
    navbarPage.goToCart()

    //Proceed to checkout
    cy.get('.btn:contains("Proceed To Checkout")').click()
    //Address Details Verification
    verificationPage.addressDelivery(
      title,
      name,
      lastName,
      state,
      city,
      zipCode,
      phoneNumber,
    )
    //address_invoice
    verificationPage.addressBilling(
      title,
      name,
      lastName,
      state,
      city,
      zipCode,
      phoneNumber,
    )

    //message
    cy.get('[name="message"]').type('Checked OK to Place order')

    //Enter payment details:
    cy.get('a').contains('Place Order').click()
    paymentPage.fillPaymentForm(
      name,
      lastName,
      cardNumber,
      cvc,
      cardMonth,
      cardYear,
    )
  })
  afterEach(() => {
    navbarPage.goToLogout()
    cy.get('.login-form').should('be.visible')
  })
})
