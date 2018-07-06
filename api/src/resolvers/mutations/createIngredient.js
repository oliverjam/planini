const createIngredient = async (parent, { ingredient }, ctx, info) => {
  const id = getUserId(ctx);
  const { name } = ingredient;
  const createdIngredient = ctx.db.mutation.createIngredient({
    data: { name, owner: { connect: { id } } },
  });
  return createdIngredient;
};

module.exports = createIngredient;
