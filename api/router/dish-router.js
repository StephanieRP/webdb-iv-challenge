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

module.exports = router;
