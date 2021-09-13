"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.sqliteDB = void 0;
var knex_1 = __importDefault(require("knex"));
exports.sqliteDB = knex_1.default({
    client: "sqlite3",
    connection: { filename: "./DB/messages.sqlite" },
    useNullAsDefault: true,
});
exports.sqliteDB.schema.hasTable("messages").then(function (exists) {
    if (exists)
        return;
    exports.sqliteDB.schema.createTable("messages", function (table) {
        table.increments("id"),
            table.string("email").notNullable(),
            table.string("message").notNullable(),
            table.timestamp("created_at").defaultTo(new Date());
    });
    console.log("te cree la tabla pa");
});
