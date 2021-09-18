import knex from "knex";
class MessagesDB {
  connection: any;
  constructor() {
    this.connection = knex({
      client: "sqlite3",
      connection: { filename: "./DB/messages.sqlite" },
      useNullAsDefault: true,
    });
  }

  init() {
    this.connection.schema.hasTable("messages").then((exists: boolean) => {
      if (exists) return;
      return this.connection.schema.createTable("messages", (table: any) => {
        table.increments("id"),
          table.string("email").notNullable(),
          table.string("message").notNullable(),
          table.timestamp("created_at").defaultTo(new Date().toLocaleString());
      });
    });
  }

  async get(tableName: string) {
    return await this.connection(tableName);
  }
  async create(data: any) {
    return await this.connection("messages").insert(data);
  }
}

const messagesDB = new MessagesDB();
export default messagesDB;
