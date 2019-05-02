// db is a configured instance of knex that knows how to talk to the database
const db = require("../../data/dbConfig.js");

module.exports = {
  getDishes,
  getDish,
  addDish
  //   getRecipes,
  //   addRecipe
};

function getDishes() {
  return db("dish");
}

function getDish(id) {
  return db("dish")
    .where({ id })
    .first();
}

function addDish(dish) {
  // passing 'id' as the second parameter is recommended to ensure the id is returned
  // when connecting to other database management systems like Postgres
  return db("dish")
    .insert(dish, "id")
    .then(([id]) => {
      return getDish(id);
    });
}

// function getRecipes() {}
