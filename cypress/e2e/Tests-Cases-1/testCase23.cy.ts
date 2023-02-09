/// <reference types="cypress" />
const { faker } = require('@faker-js/faker')
import SingUpPage from '../pageObject/signupPage'
import AddProductPage from '../pageObject/addProductPage'
const addProductPage = new AddProductPage()
import VerificationPage from '../pageObject/verificationPage'
const verificationPage = new VerificationPage()
import NavbarPage from '../pageObject/navbarPage'
const navbarPage = new NavbarPage()

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
describe('Test Case 23: Verify address details in checkout page', () => {
  beforeEach(() => {
    cy.visit('https://automationexercise.com')
    cy.url().should('eq', 'https://automationexercise.com/')
    //Verify that home page is visible successfully
    cy.get('#slider').should('be.visible')
  })

  it('Tests Case 23: Verify address details in checkout page', () => {
    // 4. Click 'Signup / Login' button
    cy.get('li').contains('Signup').click()
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
    // 7. Verify ' Logged in as username' at top
    cy.get('.navbar-nav').should('contain', 'Logged in as ', name)

    // 8. Add products to cart
    addProductPage.addRandomProduct()
    // 9. Click 'Cart' button
    cy.get('li').contains('Cart').click()
    // 10. Verify that cart page is displayed
    cy.get('.active:contains("Shopping Cart")').should('be.visible')
    // 11. Click Proceed To Checkout
    cy.get('.btn:contains("Proceed To Checkout")').click()
    // 12. Verify that the delivery address is same address filled at the time registration of account
    //address_delivery
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
  })
  afterEach(() => {
    navbarPage.goToDelete()
    cy.window().scrollTo('top')
    cy.get('#slider').should('be.visible')
  })
})
