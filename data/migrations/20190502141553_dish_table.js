exports.up = function(knex, Promise) {
  return knex.schema.createTable("dish", table => {
    //each table needs a primary key
    // we'll call it id, integer, auto-increment
    table.increments("id");
    table
      .string("name", 128)
      .notNullable()
      .unique();
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists("dish");
};
