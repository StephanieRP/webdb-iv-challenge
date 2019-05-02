exports.seed = function(knex, Promise) {
  return knex("dish").insert([
    { id: 1, name: "Meat Lovers Pizza" },
    { id: 2, name: "Tacos" },
    { id: 3, name: "Chicken Fettuccine Alfredo" }
  ]);
};
