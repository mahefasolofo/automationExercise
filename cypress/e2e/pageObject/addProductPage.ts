import { productSelectors } from './productPage'

class AddProductPage {
  addRandomProduct() {
    // eslint-disable-next-line cypress/no-unnecessary-waiting
    cy.wait(1000)
    cy.get(productSelectors.productN1Add).click()
    cy.get(productSelectors.modalContent).should('be.visible', {
      timeout: 10000,
    })
    cy.get(productSelectors.continueButton).click()
    cy.get(productSelectors.productN2Add).click()
    cy.get(productSelectors.modalContent).should('be.visible', {
      timeout: 10000,
    })
    cy.get(productSelectors.continueButton).click()
    cy.get(productSelectors.productN3Add).click()
    cy.get(productSelectors.modalContent).should('be.visible', {
      timeout: 10000,
    })
    cy.get(productSelectors.continueButton).click()
  }
}

export default AddProductPage
