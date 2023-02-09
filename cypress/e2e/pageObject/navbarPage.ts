const selectors = {
  navHome: '[href="/"]:first',
  navProduct: '[href="/products"]',
  navCart: '[href="/view_cart"]:first',
  navSignup: '[href="/login"]',
  navTestCases: '[href="/test_cases"]',
  navAPITesting: '[href="/api_list"]',
  navVideo: '[href="https://www.youtube.com/c/AutomationExercise"]',
  navContactUs: '[href="/contact_us"]',
  navLogout: '[href="/logout"]',
  navDelete: '[href="/delete_account"]',
}
class NavbarPage {
  goToHome() {
    cy.get(selectors.navHome).click()
    //verification
    cy.get('#slider').should('be.visible')
  }
  goToProduct() {
    cy.get(selectors.navProduct).click()
    //verification
    cy.get('#sale_image').should('be.visible')
  }
  goToCart() {
    cy.get(selectors.navCart).click()
    //verification
    cy.get('.active:contains("Shopping Cart")').should('be.visible')
  }
  goToSignup() {
    cy.get(selectors.navSignup).click()
    cy.get('.login-form').should('be.visible')
  }
  goToTestCases() {
    cy.get(selectors.navTestCases).click()
    cy.get('.title:contains("Test Cases")').should('be.visible')
  }
  goToAPITesting() {
    cy.get(selectors.navAPITesting).click()
    cy.get('.title:contains("APIs List for practice")').should('be.visible')
  }
  goToVideo() {
    cy.get(selectors.navVideo).click()
    cy.url().should('eq', 'https://www.youtube.com/c/AutomationExercise')
  }
  goToContactUs() {
    cy.get(selectors.navContactUs).click()
    cy.get('.title:contains("Contact")').should('be.visible')
  }
  goToLogout() {
    cy.get(selectors.navLogout).click()
    cy.get(selectors.navSignup).should('be.visible')
  }
  goToDelete() {
    cy.get(selectors.navDelete).click()
    cy.get('[data-qa="account-deleted"]').should('contain', 'Account Deleted!')
    cy.get('[data-qa="continue-button"]').click()
  }
}

export default NavbarPage
