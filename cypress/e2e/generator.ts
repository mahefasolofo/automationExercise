const { faker } = require('@faker-js/faker')
const fs = require('fs')

let data = []
for (let i = 0; i < 100; i++) {
  data.push({
    name: faker.name.firstName(),
    email: faker.internet.email(),
    password: faker.internet.password(),
    lastName: faker.name.lastName(),
    companyName: faker.company.companyName(),
    address1: faker.address.city(),
    address2: faker.address.city(),
    state: faker.address.state(),
    city: faker.address.cityName(),
    zipCode: faker.address.zipCode(),
    phoneNumber: faker.phone.number(),
  })
}

fs.writeFile('../fixtures/data.json', JSON.stringify(data), function (err) {
  if (err) throw err
  console.log('Fichier créé !')
})
