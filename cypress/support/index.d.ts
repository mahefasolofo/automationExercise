/// <reference types="cypress" />

// eslint-disable-next-line no-unused-vars
declare namespace Cypress {
  // eslint-disable-next-line no-unused-vars
  interface Chainable<Subject = any> {
    /**
     * Custom command to ... add your description here
     * @example cy.clickOnMyJourneyInCandidateCabinet()
     */
    // eslint-disable-next-line no-unused-vars
    deleteUser(email: string, password: string): Chainable<null>
  }
}
