const { getUserId } = require('../../utils');

const me = (parent, args, ctx, info) => {
  console.log('resolver');
  const id = getUserId(ctx);
  return ctx.db.query.user({ where: { id } }, info);
};

module.exports = me;
