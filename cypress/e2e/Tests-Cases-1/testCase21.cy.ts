/// <reference types="cypress" />
import ContactPage from '../pageObject/contactPage'
const contactpage = new ContactPage()
describe('Test Case 21: Add review on product', () => {
  beforeEach(() => {
    cy.visit('https://automationexercise.com')
    cy.url().should('eq', 'https://automationexercise.com/')
  })

  it('Tests Case 21: Add review on product', () => {
    // 3. Click on 'Products' button
    cy.get('li').contains('Products').click()
    // 4. Verify user is navigated to ALL PRODUCTS page successfully
    cy.get('.features_items > h2').contains('All Products').should('exist')
    // 5. Click on 'View Product' button
    cy.get(
      ':nth-child(3) > .product-image-wrapper > .choose > .nav > li > a',
    ).click()
    // 6. Verify 'Write Your Review' is visible
    cy.get('a:contains("Write Your Review")').should('exist')
    // 7. Enter name, email and review
    contactpage.fillReview('John', 'john@example.com')
    // 9. Verify success message 'Thank you for your review.
    cy.get('#review-section .alert-success > span').contains(
      'Thank you for your review.',
    )
  })
})
