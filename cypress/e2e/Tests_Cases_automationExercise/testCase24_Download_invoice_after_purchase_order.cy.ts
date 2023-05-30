/// <reference types="cypress" />

import { SingUpPage } from '../pageObject/signupPage'
const signUpPage = new SingUpPage()
import AddProductPage from '../pageObject/addProductPage'
const addProductPage = new AddProductPage()
import { NavbarPage } from '../pageObject/navbarPage'
const navbarPage = new NavbarPage()
import VerificationPage from '../pageObject/verificationPage'
const verificationPage = new VerificationPage()
import PaymentPage from '../pageObject/payementPage'
const paymentPage = new PaymentPage()

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min)
}
const randomUserNumber = getRandomInt(0, 99)
let randomRadioButton: string
let gender: string
let name: string
let email: string
let password: string
let lastName: string
let companyName: string
let address1: string
let address2: string
let country: string
let state: string
let city: string
let zipCode: string
let phoneNumber: string
let cardNumber: string
let cvc: string
let cardMonth: string
let cardYear: string

describe('Test Case 24: Download Invoice after purchase order', () => {
  beforeEach(() => {
    cy.fixture('data.json').then((item) => {
      ;(randomRadioButton = item[randomUserNumber].gender[0]),
        (gender = item[randomUserNumber].gender[1]),
        (name = item[randomUserNumber].name),
        (email = item[randomUserNumber].email),
        (password = item[randomUserNumber].password),
        (lastName = item[randomUserNumber].lastName),
        (companyName = item[randomUserNumber].companyName),
        (address1 = item[randomUserNumber].address1),
        (address2 = item[randomUserNumber].address2),
        (country = item[randomUserNumber].country),
        (state = item[randomUserNumber].state),
        (city = item[randomUserNumber].city),
        (zipCode = item[randomUserNumber].zipCode),
        (phoneNumber = item[randomUserNumber].phoneNumber),
        (cardNumber = item[randomUserNumber].cardNumber),
        (cvc = item[randomUserNumber].cvc),
        (cardMonth = item[randomUserNumber].cardMonth),
        (cardYear = item[randomUserNumber].cardYear)
    })
    cy.visit('/')
    cy.url().should('eq', 'https://automationexercise.com/')
    //Verify that home page is visible successfully
    cy.get('#slider').should('be.visible')
  })

  it('Tests Case 24: Download Invoice after purchase order', () => {
    // 4. Add products to cart
    navbarPage.goToProduct()
    addProductPage.addRandomProduct()
    // 5. Click 'Cart' button
    navbarPage.goToCart()
    // 7. Click Proceed To Checkout
    cy.get('.btn:contains("Proceed To Checkout")').click()
    // 8. Click 'Register / Login' button
    cy.get('u:contains("Register / Login")').click()
    // 9. Fill all details in Signup and create account

    signUpPage.fillSignupForm(name, email)
    cy.get('.title').should('contain', 'Enter Account Information')
    signUpPage.fillSignupAccountInformation(
      randomRadioButton,
      password,
      name,
      lastName,
      companyName,
      address1,
      address2,
      country,
      state,
      city,
      zipCode,
      phoneNumber,
    )
    //verification
    cy.get('.navbar-nav').should('contain', 'Logged in as ' + name)

    // 12. Click Cart button
    navbarPage.goToCart()
    cy.get('.btn:contains("Proceed To Checkout")').click()
    // 14. Verify that the delivery address is same address filled at the time registration of account
    //Address Details Verification
    verificationPage.addressDelivery(
      gender,
      name,
      lastName,
      state,
      city,
      zipCode,
      phoneNumber,
    )
    //address_invoice
    verificationPage.addressBilling(
      gender,
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
    //FIXME:  cy.get('[href="/download_invoice/1900"').click()
  })
  afterEach(() => {
    cy.deleteUser(email, password)
  })
})
