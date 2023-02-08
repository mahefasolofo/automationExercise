const { faker } = require('@faker-js/faker')
const selectors = {
  contactName: '[data-qa="name"]',
  contactEmail: '[data-qa="email"]',
  contactSubject: '[data-qa="subject"]',
  contactMessage: '[data-qa="message"]',
  contactFile: 'input[type="file"]',
  contactButton: '[data-qa="submit-button"]',
  reviewName: '#name',
  reviewEmail: '#email',
  reviewMessage: '#review',
  reviewButton: '#button-review',
}
class ContactPage {
  fillContactUs(name: string, email: string, file: string) {
    cy.get(selectors.contactName).type(name)
    cy.get(selectors.contactEmail).type(email)
    cy.get(selectors.contactSubject).type(faker.lorem.sentence(5))
    cy.get(selectors.contactMessage).type(faker.lorem.paragraph())
    cy.get(selectors.contactFile).selectFile(file)
    cy.get(selectors.contactButton).click()
  }

  fillReview(name: string, email: string) {
    cy.get(selectors.reviewName).type(name)
    cy.get(selectors.reviewEmail).type(email)
    cy.get(selectors.reviewMessage).type(faker.lorem.paragraph())
    // 8. Click 'Submit' button
    cy.get(selectors.reviewButton).click()
  }
}

export default ContactPage
