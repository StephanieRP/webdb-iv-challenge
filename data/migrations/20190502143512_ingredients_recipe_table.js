exports.up = function(knex, Promise) {
  return knex.schema.createTable("ingredient_recipe", table => {
    //each table needs a primary key
    // we'll call it id, integer, auto-increment
    table.increments("id");

    table
      .integer("recipe_id")
      .unsigned()
      .notNullable()
      .references("id")
      .inTable("recipe")
      .onDelete("RESTRICT")
      .onUpdate("CASCADE");

    table
      .integer("ingredient_id")
      .unsigned()
      .notNullable()
      .references("id")
      .inTable("ingredients")
      .onDelete("RESTRICT")
      .onUpdate("CASCADE");

    table.integer("ingredient_quantity");
    table.string("ingredient_measurement", 128);
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists("ingredient_recipe");
};
