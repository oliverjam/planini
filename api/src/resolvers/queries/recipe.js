const recipe = (parent, { name }, ctx, info) => {
  return {
    id: '123456',
    name: 'Cheeseburger',
    cuisine: 'American',
    instructions: [
      'Thinly slice the onion, iceberg lettuce, tomato and gherkin',
      'Lightly toast the two halves of the bun in butter',
      'Sear the beef patty over high heat on one side',
      'While the burger is cooking spread mayonnaise on both halves of the bun, and ketchup & mustard on the top half',
      'Place sliced lettuce, onion and gherkin on the bottom half',
      'Flip the burger when the bottom is crisp and caramelised. Immediately place a slice of American cheese on top',
      'Once the burger is done to your liking place on the bottom bun, top with a tomato slice and serve',
    ],
    ingredients: [
      { type: { name: 'american cheese' }, quantity: 1 },
      { type: { name: 'burger bun' }, quantity: 1 },
      { type: { name: 'beef patty' }, quantity: 1 },
      { type: { name: 'iceburg lettuce' }, quantity: 1 },
      { type: { name: 'tomato' }, quantity: 1 },
      { type: { name: 'white onion' }, quantity: 1 },
      { type: { name: 'gherkin' }, quantity: 1 },
      { type: { name: 'ketchup' }, quantity: 1 },
      { type: { name: 'mustard' }, quantity: 1 },
      { type: { name: 'mayonnaise' }, quantity: 1 },
    ],
  };
};

module.exports = recipe;
