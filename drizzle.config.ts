import { defineConfig } from 'drizzle-kit'

export default defineConfig({
	dialect: 'postgresql',

	dbCredentials: {
		host: 'localhost',
		port: 5432,
		user: 'aperepuj',
		password: 'AlecAlex0429144588',
		database: 'nuxt_news'
	},

	schema: './server/db/schema.ts',
	out: './server/db/migrations',

	strict: true,
	verbose: true
})
