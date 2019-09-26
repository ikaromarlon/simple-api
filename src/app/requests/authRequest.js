module.exports = {

  postSignUp (req, res, next) {

    const { name, email, password, phones } = req.body;
    const errors = [];

    if (!name) errors.push(`Parameter 'name' is required`);
    if (name && name.length < 3) errors.push(`Parameter 'name' should have at least 3 characters`);
    if (!email) errors.push(`Parameter 'email' is required`);
    // eslint-disable-next-line no-useless-escape
    if (email && !(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/).test(email))
      errors.push(`Parameter 'email' is not valid`);
    if (!password) errors.push(`Parameter 'password' is required`);
    if (password && password.length < 6) errors.push(`Parameter 'password' should have at least 6 characters`);
    if (phones) {
      if (phones.length === 0) {
        errors.push(`Parameter 'phones' should be a list with at least 1 object`);
      } else {
        phones.forEach((el, i) => {
          if (!el.areaCode || !el.number)
            errors.push(`Parameter 'phones[${i}]' should have \`areaCode\` and \`number\` attributes`);
          if (el.areaCode && !Number.isInteger(el.areaCode) && el.areaCode.length !== 2)
            errors.push(`Parameter 'phones[${i}].areaCode' should be a number with 2 characters`);
          if (el.number && !Number.isInteger(el.number) && ![8,9].includes(el.number.length))
            errors.push(`Parameter 'phones[${i}].number' should be a number with 8 or 9 characters`);
        });
      }
    }

    if (errors.length) return res.status(400).json({ errors });

    next()
  },

  postSignIn (req, res, next) {

    const { email, password } = req.body;
    const errors = [];

    if (!email) errors.push(`Parameter 'email' is required`);
    if (!password) errors.push(`Parameter 'password' is required`);

    if (errors.length) return res.status(400).json({ errors });

    next()
  }

};
