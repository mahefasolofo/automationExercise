const selectors = {
  productN1: '.overlay-content [data-product-id="1"]',
  productN2: '.overlay-content [data-product-id="2"]',
  productN3: '.overlay-content [data-product-id="3"]',
  continueButton: 'button:contains("Continue Shopping")',
}

class AddProductPage {
  addRandomProduct() {
    cy.get(selectors.productN1).click({ force: true })
    cy.get(selectors.continueButton).click()
    cy.get(selectors.productN2).click({ force: true })
    cy.get(selectors.continueButton).click()
    cy.get(selectors.productN3).click({ force: true })
    cy.get(selectors.continueButton).click()
  }
}

export default AddProductPage
