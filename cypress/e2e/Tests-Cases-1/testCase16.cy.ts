/// <reference types="cypress" />
import LoginPage from '../pageObject/loginPage'
const loginPage = new LoginPage()

describe('Test Case 16: Place Order: Login before Checkout', () => {
  beforeEach(() => {
    cy.visit('https://automationexercise.com')
    cy.url().should('eq', 'https://automationexercise.com/')
    cy.get('a').contains('Home').should('have.css', 'color', 'rgb(255, 165, 0)')
  })

  it('Tests Case 16: Place Order: Login before Checkout', () => {
    cy.get('li').contains('Signup').click()
    cy.get('h2').should('contain', 'Login to your account')
    loginPage.fillLoginData('john@example.com', '123456')
    //Add product to Cart
    cy.get('.overlay-content [data-product-id="1"]').click({ force: true })
    cy.get('button:contains("Continue Shopping")').click()
    cy.get('.overlay-content [data-product-id="2"]').click({ force: true })
    cy.get('button:contains("Continue Shopping")').click()
    cy.get('.overlay-content [data-product-id="3"]').click({ force: true })
    cy.get('button:contains("Continue Shopping")').click()
    //Click cart button
    cy.get('li').contains('Cart').click()
    //verify that cart page is displayed
    cy.get('.active:contains("Shopping Cart")').should('exist')
    //Proceed to checkout
    cy.get('.btn:contains("Proceed To Checkout")').click()
    //Address Details
    //address_delivery
    cy.get('#address_delivery .address_lastname').should(
      'contain',
      'Mr. John Snow',
    )
    cy.get('#address_delivery .address_address1 ').should(
      'contain',
      '125th Str belle vue',
    )
    cy.get('#address_delivery .address_city').should('contain', 'Mumbay Mumbay')
    cy.get('#address_delivery .address_country_name').should('contain', 'India')
    cy.get('#address_delivery .address_phone').should('contain', '222000555')

    //address_invoice
    cy.get('#address_invoice .address_lastname').should(
      'contain',
      'Mr. John Snow',
    )
    cy.get('#address_invoice .address_address1 ').should(
      'contain',
      '125th Str belle vue',
    )
    cy.get('#address_invoice .address_city').should('contain', 'Mumbay Mumbay')
    cy.get('#address_invoice .address_country_name').should('contain', 'India')
    cy.get('#address_invoice .address_phone').should('contain', '222000555')

    //message
    cy.get('[name="message"]').type('Checked OK to Place order')

    //Enter payment details:
    cy.get('a').contains('Place Order').click()
    cy.get('[data-qa="name-on-card"]').type('John Snow')
    cy.get('[data-qa="card-number"]').type('12345678')
    cy.get('[data-qa="cvc"]').type('212')
    cy.get('[data-qa="expiry-month"]').type('12')
    cy.get('[data-qa="expiry-year"]').type('2025')
    cy.get('button').contains('Pay and Confirm Order').click()
    //Verify message
    cy.get('p')
      .contains('Congratulations! Your order has been confirmed!')
      .should('exist')
  })
})
