const router = require("express").Router();

const db = require("../router/dish-model.js");

// get all dishes in the database
router.get("/", async (req, res) => {
  try {
    const dishes = await db.getDishes();
    res.status(200).json(dishes);
  } catch (error) {
    res
      .status(500)
      .json({ message: "We ran into an error retrieving the dishes" });
  }
});

// get dish by id
router.get("/recipe-:id", async (req, res) => {
  const { id } = req.params;
  try {
    const dish = await db.getDish(id);
    dish
      ? res.status(200).json(dish)
      : res
          .status(404)
          .json({ message: "Sorry could not find a dish with that ID" });
    console.log(id);
  } catch (error) {
    res
      .status(500)
      .json({ message: "We ran into an error retrieving the dishes" });
    console.log(error);
  }
});

// add a new dish to the database
router.post("/", async (req, res) => {
  const { body } = req;
  try {
    const dish = await db.addDish(body);
    dish
      ? res.status(201).json(dish)
      : res.status(400).json({
          message: "Sorry, could not add this dish"
        });
  } catch (error) {
    res
      .status(500)
      .json({ message: "We ran into an error retrieving the dishes" });
  }
});

// get list of current recipes in the database
router.get("/recipe", async (req, res) => {
  try {
    const recipe = await db.getRecipes();
    res.status(200).json(recipe);
    console.log(recipe);
  } catch (error) {
    res
      .status(500)
      .json({ message: "We ran into an error retrieving the dishes" });
    console.log(error);
  }
});

// add a new recipe in the database
router.post("/recipe", async (req, res) => {
  const { body } = req;
  try {
    const recipe = await db.addRecipe(body);
    recipe
      ? res.status(201).json(recipe)
      : res.status(400).json({
          message: "Could not add new recipe"
        });
    console.log(recipe);
  } catch (error) {
    res
      .status(500)
      .json({ message: "We ran into an error retrieving the dishes" });
    console.log(error);
  }
});

module.exports = router;
