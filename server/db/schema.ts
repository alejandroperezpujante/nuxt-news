import { pgTable, text, timestamp } from 'drizzle-orm/pg-core'
import { nanoid } from 'nanoid'

export const post = pgTable('posts', {
	id: text('id').primaryKey().$defaultFn(nanoid),
	userId: text('user_id').notNull(),
	title: text('title').notNull(),
	content: text('content').notNull(),
	createdAt: timestamp('created_at', { mode: 'date', withTimezone: true })
		.notNull()
		.defaultNow(),
	updatedAt: timestamp('updated_at', { mode: 'date', withTimezone: true })
		.notNull()
		.defaultNow()
})
export type Post = typeof post.$inferSelect
export type NewPost = typeof post.$inferInsert

export const schema = { post }
