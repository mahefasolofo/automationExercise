///<reference types="cypress" />
import SingUpPage from '../pageObject/signupPage'
const signupPage = new SingUpPage()
import { NavbarPage } from '../pageObject/navbarPage'
const navbarPage = new NavbarPage()
import VerificationPage from '../pageObject/verificationPage'
const verificationPage = new VerificationPage()
import PaymentPage from '../pageObject/payementPage'
const paymentPage = new PaymentPage()
import AddProductPage from '../pageObject/addProductPage'
const addProductPage = new AddProductPage()

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min)
}
const randomUserNumber = getRandomInt(0, 19)
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
describe('Test Case 14: Place Order: Register while Checkout', () => {
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
    cy.visit('https://automationexercise.com')
    cy.url().should('eq', 'https://automationexercise.com/')
    cy.get('#slider').should('be.visible')
  })

  it('test case 14: Place Order: Register while Checkout', () => {
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
    signupPage.fillSignupAccountInformation(
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
    navbarPage.goToCart()
    //Proceed to checkout
    cy.get('.btn:contains("Proceed To Checkout")').click()
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
    cy.deleteUser(email, password)
    navbarPage.goToHome()
    cy.window().scrollTo('top')
    cy.get('.navbar-nav [href="/login"]').should('be.visible')
  })
})
