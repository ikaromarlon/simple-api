const faker = require('faker');
const User = require('../../src/app/models/User');

module.exports = () => {

  faker.locale = 'pt_BR';

  const firtName = faker.name.firstName();
  const lastName = faker.name.lastName();
  const email = firtName + '.' + lastName + '@' + faker.internet.email().split('@')[1];
  const nPhones = Math.floor(Math.random() * 3);
  const phones = [];

  for (let i = 0; i < nPhones; i++) {
    const phone = faker.phone.phoneNumber().split(' ').map(value => value.replace(/[^0-9]+/g, ''));

    phones.push({
      areaCode: phone[phone.length -2],
      number: phone[phone.length -1]
    });
  }

  return new User({
    name: firtName + ' ' + lastName,
    email,
    password: faker.internet.password(),
    phones
  })

};