exports.seed = function(knex, Promise) {
  return knex("ingredients").insert([
    { id: 1, name: "Tomato" },
    { id: 2, name: "Cheese" },
    { id: 3, name: "Pasta" }
  ]);
};
