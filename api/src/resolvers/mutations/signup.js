const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const { getUserId } = require('../../utils');

const signup = async (parent, args, ctx, info) => {
  const password = await bcrypt.hash(args.password, 10);
  const user = await ctx.db.mutation.createUser({
    data: { ...args, password },
  });

  return {
    token: jwt.sign({ userId: user.id }, APP_SECRET),
    user,
  };
};

module.exports = signup;
