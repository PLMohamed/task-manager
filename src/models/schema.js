const { sql } = require("drizzle-orm");
const {
    mysqlTable,
    serial,
    varchar,
    timestamp,
} = require("drizzle-orm/mysql-core");
const { blob } = require("drizzle-orm/sqlite-core");

const Users = mysqlTable("users", {
    id: serial("id").primaryKey().autoincrement().notNull(),
    first_name: varchar("first_name", { length: 50 }).notNull(),
    last_name: varchar("last_name", { length: 50 }).notNull(),
    email: varchar("email", { length: 100 }).notNull(),
    m2p: varchar("m2p", { length: 100 }).notNull(),
    image: blob("image"),
    created_at: timestamp("created_at")
        .notNull()
        .default(sql`CURRENT_TIMESTAMP`),
});

module.exports = { Users };
