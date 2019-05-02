exports.seed = function(knex, Promise) {
  return knex("ingredient_recipe").insert([
    { id: 1, recipe_id: 1, ingredient_id: 1, ingredient_quantity: 2 },
    { id: 2, recipe_id: 2, ingredient_id: 2, ingredient_measurement: "2 cups" },
    { id: 3, recipe_id: 3, ingredient_id: 3, ingredient_measurement: "2 packs" }
  ]);
};
