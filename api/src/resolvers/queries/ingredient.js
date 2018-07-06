const ingredient = (parent, { name }, ctx, info) => {
  return ctx.db.query.ingredient({ where: { name } }, info);
};

module.exports = ingredient;
