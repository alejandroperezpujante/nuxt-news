import { Lucia } from 'lucia'
import { DrizzlePostgreSQLAdapter } from '@lucia-auth/adapter-drizzle'
import { schema, User } from '../db/schema';
import { Argon2id } from 'oslo/password';

const adapter = new DrizzlePostgreSQLAdapter(db, schema.session, schema.user)
export const auth = new Lucia(adapter, {
	sessionCookie: {
		attributes: {
			secure: !import.meta.dev
		}
	},
	getUserAttributes: (user) => ({
		email: user.email,
		username: user.username
	})
})

export const argon2 = new Argon2id()

declare module 'lucia' {
	interface Register {
		Lucia: typeof auth;
		DatabaseUserAttributes: Omit<User, 'id'>;
		DatabaseSessionAttributes: Record<string, never>;
	}
}
