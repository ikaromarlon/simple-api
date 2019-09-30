const uuidValidate = require('uuid-validate');
const jwt = require('jsonwebtoken');
const { promisify } = require('util');
const UserFactory = require('../factories/UserFactory');

describe('User', () => {

  it('should create a user with a valid uuid', () => {
    const user = UserFactory();
    expect(uuidValidate(user._id)).toBe(true);
  });

  it('should generate a valid jwt token', async () => {
    const user = UserFactory();

    await user.generateToken();

    const result = await promisify(jwt.verify)(user.token, 'gJ6JlxgWKj21swOsv7vm5Q');

    expect(result.sub).toBe(user._id);
  });

});