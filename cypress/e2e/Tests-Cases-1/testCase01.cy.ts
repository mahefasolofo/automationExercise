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
const zipcode = faker.address.zipCode()
const phoneNumber = faker.phone.number()
describe('Test Case 1', () => {
  it('Test Case 1', () => {
    cy.visit('https://automationexercise.com')
    cy.url().should('eq', 'https://automationexercise.com/')
    cy.get('#slider').should('be.visible')
    cy.get('[href="/login"]').click()
    cy.get('.signup-form > h2').contains('New User Signup!')
    signupPage.fillSignup1(name, email)
    //Account informations
    cy.get('.title').should('contain', 'Enter Account Information')
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
    cy.get('.navbar-nav').should('contain', 'Logged in as ', name)
    cy.get('li').contains('Delete Account').click()
    cy.get('[data-qa="account-deleted"]').should('contain', 'Account Deleted!')
    cy.get('[data-qa="continue-button"]').click()
  })
})
