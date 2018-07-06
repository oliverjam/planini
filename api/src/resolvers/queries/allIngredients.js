const allIngredients = (parent, args, ctx, info) => {
  return ctx.db.query.ingredients({}, info);
};

module.exports = allIngredients;
