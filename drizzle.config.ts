import { defineConfig } from 'drizzle-kit'

export default defineConfig({
	dialect: 'postgresql',

	schema: './server/db/schema.ts',
	out: './server/db/migrations',

	strict: true,
	verbose: true
})
