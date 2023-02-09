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
describe('Test Case 23: Verify address details in checkout page', () => {
  beforeEach(() => {
    cy.visit('https://automationexercise.com')
    cy.url().should('eq', 'https://automationexercise.com/')
    //Verify that home page is visible successfully
    cy.get('#slider').should('exist')
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
    // 6. Verify 'ACCOUNT CREATED!' and click 'Continue' button
    cy.get('[data-qa="account-created"]').should('contain', 'Account Created!')
    cy.get('[data-qa="continue-button"]').click()
    // 7. Verify ' Logged in as username' at top
    cy.get('.navbar-nav').should('contain', 'Logged in as ', name)

    // 8. Add products to cart
    cy.get('.overlay-content [data-product-id="1"]').click({ force: true })
    cy.get('button:contains("Continue Shopping")').click()
    cy.get('.overlay-content [data-product-id="2"]').click({ force: true })
    cy.get('button:contains("Continue Shopping")').click()
    cy.get('.overlay-content [data-product-id="3"]').click({ force: true })
    cy.get('button:contains("Continue Shopping")').click()
    // 9. Click 'Cart' button
    cy.get('li').contains('Cart').click()
    // 10. Verify that cart page is displayed
    cy.get('.active:contains("Shopping Cart")').should('exist')
    // 11. Click Proceed To Checkout
    cy.get('.btn:contains("Proceed To Checkout")').click()
    // 12. Verify that the delivery address is same address filled at the time registration of account
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
    // 14. Click 'Delete Account' button
    cy.get('li').contains('Delete Account').click()

    // 15. Verify 'ACCOUNT DELETED!' and click 'Continue' button
    cy.get('[data-qa="account-deleted"]').should('contain', 'Account Deleted!')
    cy.get('[data-qa="continue-button"]').click()
  })
})
