/// <reference types="cypress" />
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
const zipCode = faker.address.zipCode()
const phoneNumber = faker.phone.number()
describe('Test Case 24: Download Invoice after purchase order', () => {
  beforeEach(() => {
    cy.visit('https://automationexercise.com')
    cy.url().should('eq', 'https://automationexercise.com/')
    //Verify that home page is visible successfully
    cy.get('#slider').should('exist')
  })

  it('Tests Case 24: Download Invoice after purchase order', () => {
    // 4. Add products to cart
    cy.get('.overlay-content [data-product-id="1"]').click({ force: true })
    cy.get('button:contains("Continue Shopping")').click()
    cy.get('.overlay-content [data-product-id="2"]').click({ force: true })
    cy.get('button:contains("Continue Shopping")').click()
    cy.get('.overlay-content [data-product-id="3"]').click({ force: true })
    cy.get('button:contains("Continue Shopping")').click()
    // 5. Click 'Cart' button
    cy.get('li').contains('Cart').click()
    // 6. Verify that cart page is displayed
    cy.get('.active:contains("Shopping Cart")').should('exist')
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
    // // 10. Verify 'ACCOUNT CREATED!' and click 'Continue' button
    cy.get('[data-qa="account-created"]').should('contain', 'Account Created!')
    cy.get('[data-qa="continue-button"]').click()
    // 11. Verify ' Logged in as username' at top
    cy.get('.navbar-nav').should('contain', 'Logged in as ', name)
    // 12. Click Cart button
    cy.get('li').contains('Cart').click()
    cy.get('.btn:contains("Proceed To Checkout")').click()
    // 14. Verify that the delivery address is same address filled at the time registration of account
    //address_delivery
    cy.get('#address_delivery .address_lastname')
      .should('contain', 'Mr. ')
      .should('contain', name)
      .should('contain', lastName)
    cy.get('#address_delivery .address_city')
      .should('contain', state)
      .should('contain', city)
      .should('contain', zipCode)
    cy.get('#address_delivery .address_phone').should('contain', phoneNumber)
    //address_invoice
    cy.get('#address_invoice .address_lastname')
      .should('contain', 'Mr. ')
      .should('contain', name)
      .should('contain', lastName)
    cy.get('#address_invoice .address_city')
      .should('contain', state)
      .should('contain', city)
      .should('contain', zipCode)
    cy.get('#address_invoice .address_phone').should('contain', phoneNumber)
    cy.get('[name="message"]').type('Checked OK to Place order')
    cy.get('a').contains('Place Order').click()
    cy.get('[data-qa="name-on-card"]').type(name + lastName)
    cy.get('[data-qa="card-number"]').type('12345678')
    cy.get('[data-qa="cvc"]').type('212')
    cy.get('[data-qa="expiry-month"]').type('12')
    cy.get('[data-qa="expiry-year"]').type('2025')
    cy.get('button').contains('Pay and Confirm Order').click()

    //18. Verify success message 'Your order has been placed successfully!'
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
