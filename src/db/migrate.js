const { migrate } = require("drizzle-orm/mysql2/migrator");
const db = require("./database");

(async () => {
    try {
        await migrate(db, { migrationsFolder: "./migrations" });
        console.log("Database migrated");
    } catch (error) {
        console.error("Error migrating database", error);
    }
})();
