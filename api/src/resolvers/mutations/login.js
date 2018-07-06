const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

const login = async (parent, { email, password }, ctx, info) => {
  const user = await ctx.db.query.user({ where: { email } });
  if (!user) {
    throw new Error(`No user found for email: ${email}`);
  }

  const valid = await bcrypt.compare(password, user.password);
  if (!valid) {
    throw new Error('Invalid password');
  }

  return {
    token: jwt.sign({ userId: user.id }, APP_SECRET),
    user,
  };
};

module.exports = login;
