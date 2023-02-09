const selectors = {
  navHome: '.navbar-nav [href="/"]',
  navProduct: '.navbar-nav [href="/products"]',
  navCart: '.navbar-nav [href="/view_cart"]:first',
  navSignup: '.navbar-nav [href="/login"]',
  navTestCases: '.navbar-nav [href="/test_cases"]',
  navAPITesting: '.navbar-nav [href="/api_list"]',
  navVideo: '.navbar-nav [href="https://www.youtube.com/c/AutomationExercise"]',
  navContactUs: '.navbar-nav [href="/contact_us"]',
  navLogout: '.navbar-nav [href="/logout"]',
  navDelete: '.navbar-nav [href="/delete_account"]',
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
