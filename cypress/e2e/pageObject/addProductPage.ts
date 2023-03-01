import { productSelectors } from './productPage'

class AddProductPage {
  addRandomProduct() {
    // eslint-disable-next-line cypress/no-unnecessary-waiting
    cy.wait(1000)
    cy.get(productSelectors.productAdd).eq(0).click()
    cy.get(productSelectors.modalContent).should('be.visible', {
      timeout: 10000,
    })
    cy.get(productSelectors.continueButton).click()
    cy.get(productSelectors.productAdd).eq(1).click()
    cy.get(productSelectors.modalContent).should('be.visible', {
      timeout: 10000,
    })
    cy.get(productSelectors.continueButton).click()
    cy.get(productSelectors.productAdd).eq(2).click()
    cy.get(productSelectors.modalContent).should('be.visible', {
      timeout: 10000,
    })
    cy.get(productSelectors.continueButton).click()
  }
}

export default AddProductPage
