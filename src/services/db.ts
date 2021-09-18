import knex from "knex";
const dbConfig = require("../../knexfile.js");

class DB {
  connection: any;
  constructor() {
    const enviroment = process.env.NODE_ENV || "development";
    const options = dbConfig[enviroment];
    this.connection = knex(options);
  }

  init() {
    this.connection.schema.hasTable("products", (exists: boolean) => {
      if (exists) return;
      return this.connection.schema.createTable("products", (table: any) => {
        table.increments(),
          table.string("name").notNullable(),
          table.string("description").notNullable(),
          table.string("urlPhoto").notNullable(),
          table.timestamp("created_at").defaultTo(new Date().toLocaleString()),
          table.integer("price").notNullable().unsigned(),
          table.integer("stock").notNullable().unsigned();
      });
    });
    this.connection.schema.hasTable("cart", (exists: boolean) => {
      if (exists) return;
      return this.connection.schema.createTable("cart", (table: any) => {
        table.increments(),
          table.timestamp("created_at").defaultTo(new Date().toLocaleString()),
          table
            .integer("product_id")
            .unsigned()
            .references("id")
            .inTable("products");
      });
    });
  }

  async get(tableName: string, id?: number) {
    if (id) return await this.connection(tableName).where("id", id);
    return await this.connection(tableName);
  }
  async create(tableName: string, data: Object) {
    return await this.connection(tableName).insert(data);
  }
  async update(tableName: string, id: number, newData: any) {
    return await this.connection(tableName).where("id", id).update(newData);
  }
  async delete(tableName: string, id: number) {
    return await this.connection(tableName).where("id", id).del();
  }
}

const db = new DB();
export default db;
