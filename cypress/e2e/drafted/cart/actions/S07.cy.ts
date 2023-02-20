/// <reference types="cypress" />
const { faker } = require('@faker-js/faker')
import SingUpPage from '../../../pageObject/signupPage'
import { NavbarPage } from '../../../pageObject/navbarPage'
import AddProductPage from '../../../pageObject/addProductPage'
const signupPage = new SingUpPage()
const navbarPage = new NavbarPage()
const addProduct = new AddProductPage()

const phoneNumber = faker.phone.number()
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min)
}
const randomUserNumber = getRandomInt(0, 19)
let randomRadioButton: string
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

describe('S07: WEL-T911: When I fill in the "CVC" and "Expiration" fields only numeric characters must be accepted', () => {
  beforeEach(() => {
    cy.fixture('data.json').then((item) => {
      ;(randomRadioButton = item[randomUserNumber].gender[0]),
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
        (zipCode = item[randomUserNumber].zipCode)
    })
  })
  it('S07: WEL-T911: When I fill in the "CVC" and "Expiration" fields only numeric characters must be accepted', () => {
    cy.visit('https://automationexercise.com')
    cy.url().should('eq', 'https://automationexercise.com/')
    cy.get('#slider').should('be.visible')
    navbarPage.goToSignup()
    cy.get('.signup-form > h2').contains('New User Signup!')
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
    navbarPage.goToProduct()
    addProduct.addRandomProduct()
    navbarPage.goToCart()
    cy.get('.check_out').click()
    cy.get('.check_out').click()
    cy.get('[name="card_number"]').type('abc123').should('have.value', '123') //FIXME : doit contenir seulement des nombres
    cy.get('[name="cvc"]').type('abc123').should('have.value', '123') //FIXME : doit contenir seulement des nombres
    cy.get('[name="expiry_month"]').type('abc123').should('have.value', '123') //FIXME : doit contenir seulement des nombres
    cy.get('[name="expiry_year"]').type('abc123').should('have.value', '123') //FIXME : doit contenir seulement des nombres
  })
})
