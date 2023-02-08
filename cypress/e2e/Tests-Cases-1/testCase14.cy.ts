///<reference types="cypress" />
const { faker } = require('@faker-js/faker')
import SingUpPage from '../pageObject/signupPage'
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
const zipcode = faker.address.zipCode()
const phoneNumber = faker.phone.number()
describe('Test Case 14: Place Order: Register while Checkout', () => {
  beforeEach(() => {
    cy.visit('https://automationexercise.com')
    cy.url().should('eq', 'https://automationexercise.com/')
    cy.get('#slider').should('be.visible')
  })

  it('test case 14', () => {
    //Add product to cart
    cy.get('.overlay-content [data-product-id="1"]').click({ force: true })
    cy.get('button:contains("Continue Shopping")').click()
    cy.get('.overlay-content [data-product-id="2"]').click({ force: true })
    cy.get('button:contains("Continue Shopping")').click()
    cy.get('.overlay-content [data-product-id="3"]').click({ force: true })
    cy.get('button:contains("Continue Shopping")').click()
    cy.get('li').contains('Cart').click()
    //verify that cart page is displayed
    cy.get('.active:contains("Shopping Cart")').should('be.visible')
    //Proceed to checkout
    cy.get('.btn:contains("Proceed To Checkout")').click()
    // Click 'Register / Login' button
    cy.get('a').contains('Register / Login').click()
    //Fill all details in Signup and create account
    signupPage.fillSignup1(name, email)
    cy.get('.title').should('contain', 'Enter Account Information')
    //
    signupPage.fillSignup2(
      password,
      name,
      lastName,
      companyName,
      address1,
      address2,
      state,
      city,
      zipcode,
      phoneNumber,
    )
    cy.get('[data-qa="account-created"]').should('contain', 'Account Created!')
    cy.get('[data-qa="continue-button"]').click()
    cy.get('.navbar-nav').should(
      'contain',
      'Logged in as ',
      faker.name.firstName(),
    )
    cy.get('li').contains('Cart').click()
    //Proceed to checkout
    cy.get('.btn:contains("Proceed To Checkout")').click()
    //Address Details
    //address_delivery
    cy.get('#address_delivery .address_lastname')
      .should('contain', 'Mr. ')
      .should('contain', name)
      .should('contain', lastName)
    // cy.get('#address_delivery .address_address1 ').should(
    //   'contain',
    //   faker.address.city(),
    // )
    cy.get('#address_delivery .address_city')
      .should('contain', state)
      .should('contain', city)
      .should('contain', zipcode)
    cy.get('#address_delivery .address_phone').should('contain', phoneNumber)

    //address_invoice
    cy.get('#address_invoice .address_lastname')
      .should('contain', 'Mr. ')
      .should('contain', name)
      .should('contain', lastName)

    // cy.get('#address_invoice .address_address1 ').should(
    //   'contain',
    //   faker.address.city(),
    // )
    cy.get('#address_invoice .address_city')
      .should('contain', state)
      .should('contain', city)
      .should('contain', zipcode)
    //TODO: vérifier country
    // cy.get('#address_invoice .address_country_name').should(
    //   'contain',
    //   signupPage.ville,
    // )
    cy.get('#address_invoice .address_phone').should('contain', phoneNumber)
    //message
    cy.get('[name="message"]').type('Checked OK to Place order')
    cy.get('a').contains('Place Order').click()
    cy.get('[data-qa="name-on-card"]').type(name + lastName)
    cy.get('[data-qa="card-number"]').type('12345678')
    cy.get('[data-qa="cvc"]').type('212')
    cy.get('[data-qa="expiry-month"]').type('12')
    cy.get('[data-qa="expiry-year"]').type('2025')
    cy.get('button').contains('Pay and Confirm Order').click()
    // cy.pause()
    cy.get('p')
      .contains('Congratulations! Your order has been confirmed!')
      .should('be.visible')
  })
  afterEach(() => {
    //Delete account
    cy.request('DELETE', 'https://automationexercise.com/api/deleteAccount', {
      email,
      password,
    }).then((response) => {
      expect(response.status).to.eq(200) // true
    })
  })
})
