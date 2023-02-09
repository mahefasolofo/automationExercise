///<reference types="cypress" />
const { faker } = require('@faker-js/faker')
import SingUpPage from '../pageObject/signupPage'
const signupPage = new SingUpPage()
import NavbarPage from '../pageObject/navbarPage'
const navbarPage = new NavbarPage()
import VerificationPage from '../pageObject/verificationPage'
const verificationPage = new VerificationPage()
import PaymentPage from '../pageObject/payementPage'
const paymentPage = new PaymentPage()
import AddProductPage from '../pageObject/addProductPage'
const addProductPage = new AddProductPage()

const title = 'Mr.'
const name = faker.name.firstName()
const email = faker.internet.email()
const password = faker.internet.password()
const lastName = faker.name.lastName()
const companyName = faker.company.companyName()
const address1 = faker.address.city()
const address2 = faker.address.city()
const state = faker.address.state()
const city = faker.address.cityName()
const zipCode = faker.address.zipCode()
const phoneNumber = faker.phone.number()
const cardNumber = faker.finance.creditCardNumber()
const cvc = faker.finance.creditCardCVV()
const cardMonth = faker.datatype.number({ min: 1, max: 12 }).toString()
let futureDate = faker.date.future(5)
const cardYear = futureDate.getFullYear()
describe('Test Case 14: Place Order: Register while Checkout', () => {
  beforeEach(() => {
    cy.visit('https://automationexercise.com')
    cy.url().should('eq', 'https://automationexercise.com/')
    cy.get('#slider').should('be.visible')
  })

  it('test case 14', () => {
    //Add product to cart
    addProductPage.addRandomProduct()
    navbarPage.goToCart()
    //verify that cart page is displayed
    cy.get('.active:contains("Shopping Cart")').should('be.visible')
    //Proceed to checkout
    cy.get('.btn:contains("Proceed To Checkout")').click()
    // Click 'Register / Login' button
    cy.get('a').contains('Register / Login').click()
    //Fill all details in Signup and create account
    signupPage.fillSignupForm(name, email)
    cy.get('.title').should('contain', 'Enter Account Information')
    //
    signupPage.fillSignupAccountInformation(
      password,
      name,
      lastName,
      companyName,
      address1,
      address2,
      state,
      city,
      zipCode,
      phoneNumber,
    )

    cy.get('.navbar-nav').should('contain', 'Logged in as ' + name)
    navbarPage.goToCart()
    //Proceed to checkout
    cy.get('.btn:contains("Proceed To Checkout")').click()
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
    navbarPage.goToDelete()
    cy.window().scrollTo('top')
    cy.get('#slider').should('be.visible')
  })
})
