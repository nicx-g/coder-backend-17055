exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("products")
    .del()
    .then(function () {
      return knex("products").insert({
        name: "regla",
        description: "larga",
        urlPhoto: "unlink",
        price: 500,
        stock: 2,
      });
    });
};
