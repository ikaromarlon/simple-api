const uuidValidate = require('uuid-validate');
const UserFactory = require('../factories/UserFactory');

describe('User', () => {

  it('should create a user with a valid uuid', () => {
    const user = UserFactory();
    expect(uuidValidate(user._id)).toBe(true);
  });

});