/// <reference types="cypress" />

import SingUpPage from '../../../pageObject/signupPage'
import { NavbarPage } from '../../../pageObject/navbarPage'
const signupPage = new SingUpPage()
const navbar = new NavbarPage()

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min)
}
const randomUserNumber = getRandomInt(0, 19)
let name: string
let email: string

describe('S07 :WEL-T907 : When I fill in the "ZipCode" and "Mobile number" fields, only numeric characters must be accepted', () => {
  beforeEach(() => {
    cy.visit('https://automationexercise.com')
    cy.url().should('eq', 'https://automationexercise.com/')
    cy.get('#slider').should('be.visible')
    cy.fixture('data.json').then((item) => {
      ;(name = item[randomUserNumber].name),
        (email = item[randomUserNumber].email)
    })
  })

  it('S07 :WEL-T907 : When I fill in the "ZipCode" and "Mobile number" fields, only numeric characters must be accepted', () => {
    navbar.goToSignup()
    signupPage.fillSignupForm(name, email)
    cy.get('.title').should('contain', 'Enter Account Information')
    // cy.get('#password').type(password)
    // cy.get('#last_name').type(lastName)
    cy.get('#zipcode').type('abc123').should('have.value', '123') //FIXME : seul les caractères numériques doivent être acceptés
    cy.get('#mobile_number').type('abc123').should('have.value', '123') //FIXME : seul les caractères numériques doivent être acceptés
  })
})
