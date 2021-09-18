exports.up = function (knex) {
  return knex.schema
    .createTable("products", (table) => {
      table.increments(),
        table.string("name").notNullable(),
        table.string("description").notNullable(),
        table.string("urlPhoto").notNullable(),
        table.timestamp("created_at").defaultTo(knex.fn.now()),
        table.integer("price").notNullable().unsigned(),
        table.integer("stock").notNullable().unsigned();
    })
    .createTable("cart", (table) => {
      table.increments(),
        table.timestamp("created_at").defaultTo(knex.fn.now()),
        table
          .integer("product_id")
          .unsigned()
          .references("id")
          .inTable("products");
    });
};

exports.down = function (knex) {
  return knex.schema.dropTable("cart").dropTable("products");
};
