// db is a configured instance of knex that knows how to talk to the database
const db = require("../../data/dbConfig.js");

function getDishes() {
  return db("dish");
}

const getDish = async id => {
  const dish = await getDishes()
    .where({ id })
    .first();
  const recipe = await getRecipes().where({ dish_id: id });
  return {
    ...dish,
    recipe
  };
};

function addDish(dish) {
  return db("dish")
    .insert(dish, "id")
    .then(([id]) => {
      return getDish(id);
    });
}

function getRecipes() {
  return db("recipe")
    .select(
      "recipe.id as recipe_id",
      "recipe.recipe_name",
      "dish.name as dish_name"
    )
    .join("dish", "dish.id", "recipe.dish_id");
}

function addRecipe(recipe) {
  return db("recipe").insert(recipe);
}

module.exports = {
  getDishes,
  getDish,
  addDish,
  getRecipes,
  addRecipe
};
