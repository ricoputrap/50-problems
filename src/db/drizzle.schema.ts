import { integer, sqliteTable, text } from "drizzle-orm/sqlite-core";

export const problem = sqliteTable('problem', {
  id: integer('id').primaryKey({ autoIncrement: true }),
  content: text('content').notNull(),
  upvote_count: integer('upvote_count').default(0),
  username: text('username').notNull(),
  twitter_username: text('twitter_username'),
  created_at: integer('created_at').notNull().$defaultFn(() => Math.floor(new Date().getTime() / 1000))
});

export const report = sqliteTable('report', {
  id: integer('id').primaryKey({ autoIncrement: true }),
  problem_id: integer('problem_id').notNull().references(() => problem.id),
  created_at: integer('created_at').notNull().$defaultFn(() => Math.floor(new Date().getTime() / 1000))
});