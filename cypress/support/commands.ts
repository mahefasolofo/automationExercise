/// <reference types="cypress" />

Cypress.Commands.add('deleteUser', (email, password) => {
  cy.request({
    method: 'DELETE',
    url: 'https://automationexercise.com/api/deleteAccount',
    form: true,
    body: { email: email, password: password },
  })
})
