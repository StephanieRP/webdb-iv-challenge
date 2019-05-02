// db is a configured instance of knex that knows how to talk to the database
const db = require("../../data/dbConfig.js");

module.exports = {
  getDishes,
  getDish,
  addDish,
  getRecipes,
  addRecipe
};

function getDishes() {
  return db("dish");
}

function getDish(id) {
  return db("dish")
    .select(
      "dish.id as dish_id",
      "dish.name as dish_name",
      "recipe.recipe_name as recipe_name"
    )
    .where({ "recipe.dish_id": id })
    .join("recipe", "dish.id", "recipe.dish_id")
    .first();
}

function addDish(dish) {
  return db("dish")
    .insert(dish, "id")
    .then(([id]) => {
      return getDish(id);
    });
}

function getRecipes() {
  return db("recipe")
    .select("recipe.id as id", "dish.name as dish_name")
    .join("dish", "dish.id", "recipe.dish_id");
}

function addRecipe(recipe) {
  return db("recipe").insert(recipe);
}
