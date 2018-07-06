const { getUserId } = require('../../utils');

const createRecipe = async (parent, args, ctx, info) => {
  const id = getUserId(ctx);
  const { name, cuisine, instructions, ingredients } = args;
  const dbIngredients = ingredients.map(({ name, quantity }) => {
    const dbIngredient = ctx.db.query.ingredient({ where: { name } }, info);
    if (!dbIngredient) {
      const newIngredient = ctx.db.ctx.db.mutation.createIngredient({
        data: { name, owner: { connect: { id } } },
      });
      return { type: newIngredient, quantity };
    }
    return { type: dbIngredient, quantity };
  });
  console.log({ name, cuisine, instructions, dbIngredients });
  const createdIngredient = ctx.db.mutation.createRecipe({
    data: {
      name,
      cuisine,
      instructions,
      ingredients: dbIngredients,
      owner: { connect: { id } },
    },
  });
  return createdIngredient;
};

module.exports = createRecipe;
