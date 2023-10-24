// Example model schema from the Drizzle docs
// https://orm.drizzle.team/docs/sql-schema-declaration

import { relations, sql } from "drizzle-orm";
import {
  int,
  bigint,
  index,
  mysqlTableCreator,
  text,
  timestamp,
  varchar,
} from "drizzle-orm/mysql-core";

/**
 * This is an example of how to use the multi-project schema feature of Drizzle ORM. Use the same
 * database instance for multiple projects.
 *
 * @see https://orm.drizzle.team/docs/goodies#multi-project-schema
 */
export const mysqlTable = mysqlTableCreator((name) => `notely_${name}`);

export const notes = mysqlTable(
  "note",
  {
    id: bigint("id", { mode: "number" }).primaryKey().autoincrement(),
    title: varchar("title", { length: 256 }),
    details: text("details"),
    createdAt: timestamp("created_at").default(sql`CURRENT_TIMESTAMP`).notNull(),
    updatedAt: timestamp("updated_at").onUpdateNow(),

    user_id: text("user_id")
  }
)