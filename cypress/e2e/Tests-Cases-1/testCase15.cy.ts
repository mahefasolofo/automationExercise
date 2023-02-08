///<reference types="cypress" />

describe('Test Case 15: Place Order: Register before Checkout', () => {
  beforeEach(() => {
    cy.visit('https://automationexercise.com')
    cy.url().should('eq', 'https://automationexercise.com/')
    // cy.get('a').contains('Home').should('have.css', 'color', 'rgb(255, 165, 0)')
  })

  it('test case 15', () => {
    //Fill all details in Signup and create account
    cy.get('li').contains('Signup / Login').click()
    cy.get('h2').should('contain', 'New User Signup!')
    cy.get('[data-qa="signup-name"]').type('rick')
    cy.get('[data-qa="signup-email"]').type('rick@example.com')
    cy.get('[data-qa="signup-button"]').click()
    cy.get('.title').should('contain', 'Enter Account Information')
    cy.get('input[name="title"][value="Mr"]').check()
    cy.get('#password').type('123456')
    cy.get('#first_name').type('Ulrick')
    cy.get('#last_name').type('rick')
    cy.get('#company').type('Independant Inc.')
    cy.get('#address1').type('2nd Rd trendart')
    cy.get('#address2').type('nothing')
    cy.get('#country').select('India')
    cy.get('#state').type('Mumbay')
    cy.get('#city').type('Mumbay')
    cy.get('#zipcode').type('254')
    cy.get('#mobile_number').type('555555555')
    cy.get('[data-qa="create-account"]').click()
    cy.get('[data-qa="account-created"]').should('contain', 'Account Created!')
    cy.get('[data-qa="continue-button"]').click()
    cy.get('.navbar-nav').should('contain', 'Logged in as rick')

    //Add product to cart
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
      'Mr. Ulrick rick',
    )
    cy.get('#address_delivery .address_address1 ').should(
      'contain',
      '2nd Rd trendart',
    )
    cy.get('#address_delivery .address_city').should('contain', 'Mumbay Mumbay')
    cy.get('#address_delivery .address_country_name').should('contain', 'India')
    cy.get('#address_delivery .address_phone').should('contain', '555555555')

    //address_invoice
    cy.get('#address_invoice .address_lastname').should(
      'contain',
      'Mr. Ulrick rick',
    )
    cy.get('#address_invoice .address_address1 ').should(
      'contain',
      '2nd Rd trendart',
    )
    cy.get('#address_invoice .address_city').should('contain', 'Mumbay Mumbay')
    cy.get('#address_invoice .address_country_name').should('contain', 'India')
    cy.get('#address_invoice .address_phone').should('contain', '555555555')

    //message
    cy.get('[name="message"]').type('Checked OK to Place order')
    cy.get('a').contains('Place Order').click()
    cy.get('[data-qa="name-on-card"]').type('Rick Ulrick')
    cy.get('[data-qa="card-number"]').type('12345678')
    cy.get('[data-qa="cvc"]').type('212')
    cy.get('[data-qa="expiry-month"]').type('12')
    cy.get('[data-qa="expiry-year"]').type('2025')
    cy.get('button').contains('Pay and Confirm Order').click()
    cy.get('p')
      .contains('Congratulations! Your order has been confirmed!')
      .should('exist')
  })
  afterEach(() => {
    //Delete account
    cy.get('li').contains('Delete Account').click()
    cy.get('[data-qa="continue-button"]').click()
  })
})
