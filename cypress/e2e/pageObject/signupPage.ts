const selectors = {
  signupName: '[data-qa="signup-name"]',
  signupEmail: '[data-qa="signup-email"]',
  signupButton: '[data-qa="signup-button"]',
  signupTitle: 'input[name="title"][value="Mr"]',
  signupPassword: '#password',
  signupFirstName: '#first_name',
  signupLastName: '#last_name',
  signupCompany: '#company',
  signupAddress1: '#address1',
  signupAddress2: '#address2',
  signupCountry: '#country',
  signupCountryOption: '#country option',
  signupState: '#state',
  signupCity: '#city',
  signupZipCode: '#zipcode',
  signupMobile: '#mobile_number',
  signupButtonCreate: '[data-qa="create-account"]',
}
class SingUpPage {
  fillSignupForm(name: string, email: string) {
    cy.get(selectors.signupName).type(name)
    cy.get(selectors.signupEmail).type(email)
    cy.get(selectors.signupButton).click()
  }

  fillSignupAccountInformation(
    password: string,
    firstName: string,
    lastName: string,
    companyName: string,
    address1: string,
    address2: string,
    state: string,
    city: string,
    zipCode: string,
    phoneNumber: string,
  ) {
    cy.get(selectors.signupTitle).check()
    cy.get(selectors.signupPassword).type(password)
    cy.get(selectors.signupFirstName).type(firstName)
    cy.get(selectors.signupLastName).type(lastName)
    cy.get(selectors.signupCompany).type(companyName)
    cy.get(selectors.signupAddress1).type(address1)
    cy.get(selectors.signupAddress2).type(address2)
    cy.get('#country option').then((options) => {
      const randomIndex = Math.floor(Math.random() * options.length)
      const randomOption = options.eq(randomIndex).text()
      cy.get('#country').select(randomOption)
    })
    cy.get(selectors.signupState).type(state)
    cy.get(selectors.signupCity).type(city)
    cy.get(selectors.signupZipCode).type(zipCode)
    cy.get(selectors.signupMobile).type(phoneNumber)
    cy.get(selectors.signupButtonCreate).click()
    cy.get('[data-qa="account-created"]').should('contain', 'Account Created!')
    // eslint-disable-next-line cypress/no-unnecessary-waiting
    cy.wait(500)
    cy.get('[data-qa="continue-button"]').click()
  }
}

export default SingUpPage
