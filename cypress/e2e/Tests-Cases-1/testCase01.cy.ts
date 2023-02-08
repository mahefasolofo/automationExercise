/// <reference types="cypress" />
const { faker } = require('@faker-js/faker')

describe('Test Case 1', () => {
  it('Test Case 1', () => {
    cy.visit('https://automationexercise.com')
    cy.url().should('eq', 'https://automationexercise.com/')
    cy.get('a').contains('Home').should('have.css', 'color', 'rgb(255, 165, 0)')
    cy.get('li').contains('Signup').click()
    cy.get('h2').should('contain', 'New User Signup!')
    //utilisation de faker pour les données
    cy.get('[data-qa="signup-name"]').type(faker.name.firstName())
    cy.get('[data-qa="signup-email"]').type(faker.internet.email())
    cy.get('[data-qa="signup-button"]').click()
    cy.get('.title').should('contain', 'Enter Account Information')
    cy.get('input[name="title"][value="Mr"]').check()
    cy.get('#password').type(faker.internet.password())
    cy.get('#first_name').type(faker.name.firstName())
    cy.get('#last_name').type(faker.name.lastName())
    cy.get('#company').type(faker.company.companyName())
    cy.get('#address1').type(faker.address.city())
    cy.get('#address2').type(faker.address.city())
    //adresse aléatoire
    cy.get('#country option').then((options) => {
      const randomIndex = Math.floor(Math.random() * options.length)
      const randomOption = options.eq(randomIndex).text()
      cy.get('#country').select(randomOption)
    })
    cy.get('#state').type(faker.address.state())
    cy.get('#city').type(faker.address.cityName())
    cy.get('#zipcode').type(faker.address.zipCode())
    cy.get('#mobile_number').type(faker.phone.number())
    cy.get('[data-qa="create-account"]').click()
    cy.get('[data-qa="account-created"]').should('contain', 'Account Created!')
    cy.get('[data-qa="continue-button"]').click()
    cy.get('.navbar-nav').should(
      'contain',
      'Logged in as ',
      faker.name.firstName(),
    )
    cy.get('li').contains('Delete Account').click()
    cy.get('[data-qa="account-deleted"]').should('contain', 'Account Deleted!')
    cy.get('[data-qa="continue-button"]').click()
  })
})
