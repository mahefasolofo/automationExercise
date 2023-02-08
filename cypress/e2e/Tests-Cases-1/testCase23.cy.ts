/// <reference types="cypress" />

describe('Test Case 23: Verify address details in checkout page', () => {
  beforeEach(() => {
    cy.visit('https://automationexercise.com')
    cy.url().should('eq', 'https://automationexercise.com/')
    //Verify that home page is visible successfully
    cy.get('#slider').should('exist')
  })

  it('Tests Case 23', () => {
    // 4. Click 'Signup / Login' button
    cy.get('li').contains('Signup').click()
    // 5. Fill all details in Signup and create account
    cy.get('[data-qa="signup-name"]').type('mahefa')
    cy.get('[data-qa="signup-email"]').type('mahefa@gmail.com')
    cy.get('[data-qa="signup-button"]').click()
    cy.get('.title').should('contain', 'Enter Account Information')
    cy.get('input[name="title"][value="Mr"]').check()
    cy.get('#password').type('123456')
    cy.get('#first_name').type('Randria')
    cy.get('#last_name').type('Mahefa')
    cy.get('#company').type('Independant Inc.')
    cy.get('#address1').type('Iavoloha')
    cy.get('#address2').type('Mahazo')
    cy.get('#country').select('India')
    cy.get('#state').type('Mumbay')
    cy.get('#city').type('Mumbay')
    cy.get('#zipcode').type('101')
    cy.get('#mobile_number').type('0320714589')
    cy.get('[data-qa="create-account"]').click()
    // 6. Verify 'ACCOUNT CREATED!' and click 'Continue' button
    cy.get('[data-qa="account-created"]').should('contain', 'Account Created!')
    cy.get('[data-qa="continue-button"]').click()
    // 7. Verify ' Logged in as username' at top
    cy.get('.navbar-nav').should('contain', 'Logged in as mahefa')

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
    cy.get('#address_delivery .address_lastname').should(
      'contain',
      'Mr. Randria Mahefa',
    )
    cy.get('#address_delivery .address_address1 ').should(
      'contain',
      'Independant Inc.',
    )
    cy.get('#address_delivery .address_address1 ').should('contain', 'Iavoloha')
    cy.get('#address_delivery .address_address1 ').should('contain', 'Mahazo')
    cy.get('#address_delivery .address_city').should('contain', 'Mumbay Mumbay')
    cy.get('#address_delivery .address_country_name').should('contain', 'India')
    cy.get('#address_delivery .address_phone').should('contain', '0320714589')
    // 13. Verify that the billing address is same address filled at the time registration of account
    cy.get('#address_invoice .address_lastname').should(
      'contain',
      'Mr. Randria Mahefa',
    )
    cy.get('#address_invoice .address_address1 ').should(
      'contain',
      'Independant Inc.',
    )
    cy.get('#address_invoice .address_address1 ').should('contain', 'Iavoloha')
    cy.get('#address_invoice .address_address1 ').should('contain', 'Mahazo')
    cy.get('#address_invoice .address_city').should('contain', 'Mumbay Mumbay')
    cy.get('#address_invoice .address_country_name').should('contain', 'India')
    cy.get('#address_invoice .address_phone').should('contain', '0320714589')
    // 14. Click 'Delete Account' button
    cy.get('li').contains('Delete Account').click()

    // 15. Verify 'ACCOUNT DELETED!' and click 'Continue' button
    cy.get('[data-qa="account-deleted"]').should('contain', 'Account Deleted!')
    cy.get('[data-qa="continue-button"]').click()
  })
})
