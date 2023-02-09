/// <reference types="cypress" />
const { faker } = require('@faker-js/faker')
import SingUpPage from '../pageObject/signupPage'
import NavbarPage from '../pageObject/navbarPage'
const signupPage = new SingUpPage()
const navbarPage = new NavbarPage()
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
describe('Test Case 1: Register User', () => {
  it('Test Case 1:Register User', () => {
    cy.visit('https://automationexercise.com')
    cy.url().should('eq', 'https://automationexercise.com/')
    cy.get('#slider').should('be.visible')
    navbarPage.goToSignup()
    cy.get('.signup-form > h2').contains('New User Signup!')
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
    //verification
    cy.get('.navbar-nav').should('contain', 'Logged in as ' + name)
    // Delete account
    navbarPage.goToDelete()
    cy.window().scrollTo('top')
    cy.get('#slider').should('be.visible')
  })
})
