/// <reference types="cypress" />
const { faker } = require('@faker-js/faker')
import SingUpPage from '../pageObject/signupPage'
import AddProductPage from '../pageObject/addProductPage'
const addProductPage = new AddProductPage()
import NavbarPage from '../pageObject/navbarPage'
const navbarPage = new NavbarPage()
import VerificationPage from '../pageObject/verificationPage'
const verificationPage = new VerificationPage()
import PaymentPage from '../pageObject/payementPage'
const paymentPage = new PaymentPage()

let title = 'Mr.'
const signupPage = new SingUpPage()
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
//we use faker for others payment information
const cardNumber = faker.finance.creditCardNumber()
const cvc = faker.finance.creditCardCVV()
const cardMonth = faker.datatype.number({ min: 1, max: 12 }).toString()
let futureDate = faker.date.future(5)
const cardYear = futureDate.getFullYear()

describe('Test Case 24: Download Invoice after purchase order', () => {
  beforeEach(() => {
    cy.visit('https://automationexercise.com')
    cy.url().should('eq', 'https://automationexercise.com/')
    //Verify that home page is visible successfully
    cy.get('#slider').should('be.visible')
  })

  it('Tests Case 24: Download Invoice after purchase order', () => {
    // 4. Add products to cart
    addProductPage.addRandomProduct()
    // 5. Click 'Cart' button
    navbarPage.goToCart()
    // 7. Click Proceed To Checkout
    cy.get('.btn:contains("Proceed To Checkout")').click()
    // 8. Click 'Register / Login' button
    cy.get('u:contains("Register / Login")').click()
    // 9. Fill all details in Signup and create account
    signupPage.fillSignupForm(name, email)
    //Account informations
    cy.get('.title').should('contain', 'Enter Account Information')
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
    // 11. Verify ' Logged in as username' at top
    cy.get('.navbar-nav').should('contain', 'Logged in as ', name)
    // 12. Click Cart button
    navbarPage.goToCart()
    cy.get('.btn:contains("Proceed To Checkout")').click()
    // 14. Verify that the delivery address is same address filled at the time registration of account
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

    //18. Verify success message 'Your order has been placed successfully!'
  })
  afterEach(() => {
    //Delete account
    navbarPage.goToLogout()
    cy.get('.login-form').should('be.visible')
  })
})
