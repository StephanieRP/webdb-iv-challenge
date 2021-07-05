exports.seed = function(knex, Promise) {
  return knex("recipe").insert([
    { id: 1, dish_id: 1, recipe_name: "How to make Meat Lovers Pizza" },
    { id: 2, dish_id: 2, recipe_name: "How to make the best Tacos" },
    {
      id: 3,
      dish_id: 3,
      recipe_name: "How to make Vegan Chicken Fettuccine Alfredo"
    }
  ]);
};
