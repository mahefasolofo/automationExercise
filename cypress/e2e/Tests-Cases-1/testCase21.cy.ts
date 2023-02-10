/// <reference types="cypress" />
import ContactPage from '../pageObject/contactPage'
const contactPage = new ContactPage()
import NavbarPage from '../pageObject/navbarPage'
const navbarPage = new NavbarPage()

let email
let name
describe('Test Case 21: Add review on product', () => {
  beforeEach(() => {
    cy.fixture('userDefault.json')
      .its('users')
      .then((item) => {
        email = item[0].email
        name = item[0].name
      })
    cy.visit('https://automationexercise.com')
    cy.url().should('eq', 'https://automationexercise.com/')
  })

  it('Tests Case 21: Add review on product', () => {
    // 3. Click on 'Products' button
    navbarPage.goToProduct()

    // 5. Click on 'View Product' button
    cy.get(
      ':nth-child(3) > .product-image-wrapper > .choose > .nav > li > a',
    ).click()
    // 6. Verify 'Write Your Review' is visible
    cy.get('a:contains("Write Your Review")').should('be.visible')
    // 7. Enter name, email and review
    contactPage.fillReview(name, email)
    // 9. Verify success message 'Thank you for your review.
    cy.get('#review-section .alert-success > span').contains(
      'Thank you for your review.',
    )
  })
})
