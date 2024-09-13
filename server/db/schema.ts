import { relations } from 'drizzle-orm'
import { pgTable, type PgTimestampConfig, text, timestamp } from 'drizzle-orm/pg-core'
import { nanoid } from 'nanoid'

const TIMESTAMP_OPTIONS: PgTimestampConfig = { mode: 'date', withTimezone: true }
function provideAuditColumns() {
	return {
		createdAt: timestamp('created_at', TIMESTAMP_OPTIONS)
			.notNull()
			.defaultNow(),
		updatedAt: timestamp('updated_at', TIMESTAMP_OPTIONS)
			.notNull()
			.defaultNow(),
	}
}

export const userTable = pgTable('users', {
	id: text('id').primaryKey(),
	email: text('email').notNull().unique(),
	username: text('username').notNull().unique(),
	passwordHash: text('password_hash').notNull(),
	...provideAuditColumns(),
})
export type User = typeof userTable.$inferSelect
export type NewUser = typeof userTable.$inferInsert

export const sessionTable = pgTable('sessions', {
	id: text('id').primaryKey(),
	userId: text('user_id')
		.notNull()
		.references(() => userTable.id),
	expiresAt: timestamp('expires_at', TIMESTAMP_OPTIONS).notNull(),
})
export type Session = typeof sessionTable.$inferSelect
export type NewSession = typeof sessionTable.$inferInsert

export const postTable = pgTable('posts', {
	id: text('id').primaryKey().$defaultFn(nanoid),
	userId: text('user_id').notNull().references(() => userTable.id),
	title: text('title').notNull(),
	content: text('content').notNull(),
	...provideAuditColumns(),
})
export type Post = typeof postTable.$inferSelect
export type NewPost = typeof postTable.$inferInsert

export const userRelations = relations(userTable, ({ many }) => ({
	posts: many(postTable),
}))
export const sessionRelations = relations(sessionTable, ({ one }) => ({
	user: one(userTable, {
		fields: [sessionTable.userId],
		references: [userTable.id],
	}),
}))
export const postRelations = relations(postTable, ({ one }) => ({
	user: one(userTable, {
		fields: [postTable.userId],
		references: [userTable.id],
	}),
}))

export const schema = {
	user: userTable,
	session: sessionTable,
	post: postTable,
	userRelations,
	sessionRelations,
	postRelations,
}
