/// <reference types="cypress" />

describe('Test Case 1', () => {
  it('Test Case 1', () => {
    cy.request({
      method: 'POST',
      url: 'https://automationexercise.com/api/createAccount',
      body: {
        name: 'John Snow',
        email: 'john.doe@example.com',
        password: '123456',
        title: 'Mr',
        birth_date: '27',
        birth_month: '06',
        birth_year: '1992',
        firstname: 'John',
        lastname: 'Snow',
        company: 'Acme Inc',
        address1: '123 Main St',
        address2: 'Apt 4B',
        country: 'United States',
        zipcode: '12345',
        state: 'California',
        city: 'Los Angeles',
        mobile_number: '+222111555',
      },
    }).then((response) => {
      expect(response.status).to.eq(200)
      expect(response.body).to.have.property('message', 'User created!')
    })
  })
})
