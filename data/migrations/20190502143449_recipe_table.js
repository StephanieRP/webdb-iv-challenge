exports.up = function(knex, Promise) {
  return knex.schema.createTable("recipe", table => {
    //each table needs a primary key
    // we'll call it id, integer, auto-increment
    table.increments("id");

    table
      .integer("dish_id")
      .unsigned()
      .notNullable()
      .references("id")
      .inTable("dish")
      .onDelete("RESTRICT")
      .onUpdate("CASCADE");

    table.string("recipe_name", 128).notNullable();
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists("recipe");
};
