exports.seed = function(knex, Promise) {
  return knex("recipe").insert([
    { id: 1, dish_id: 1 },
    { id: 2, dish_id: 2 },
    { id: 3, dish_id: 3 }
  ]);
};
