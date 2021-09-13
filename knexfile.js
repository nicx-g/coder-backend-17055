// Update with your config settings.

module.exports = {
  development: {
    client: "mysql",
    connection: {
      database: "para_reventar",
      user: "root",
      password: "",
    },
    migrations: {
      directory: __dirname + "/DB/migrations",
    },
    seeds: {
      directory: __dirname + "/DB/seeds",
    },
  },

  staging: {
    client: "mysql",
    connection: {
      database: "para_reventar",
      user: "root",
      password: "",
    },
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      directory: __dirname + "/DB/migrations",
    },
    seeds: {
      directory: __dirname + "/DB/seeds",
    },
  },

  production: {
    client: "mysql",
    connection: {
      database: "ecommerce",
      user: "root",
      password: "",
    },
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      directory: __dirname + "/DB/migrations",
    },
    seeds: {
      directory: __dirname + "/DB/seeds",
    },
  },
};
