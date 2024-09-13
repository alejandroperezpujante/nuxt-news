import { nanoid } from 'nanoid'
import { schema } from '~/server/db/schema'
import { useValidatedBody } from '~/server/utils/requestParsers'
import { validation } from '~/utils/validation'

export default defineEventHandler(async (event) => {
	const form = await useValidatedBody(event, validation.createUser)

	const existingUser = await db.query.user.findFirst({
		where: (users, { or, eq }) => or(eq(users.email, form.email), eq(users.username, form.username)),
	})

	if (existingUser) {
		throw createError({
			statusCode: 400,
			statusMessage: 'User already exists',
		})
	}

	const userId = nanoid()
	const passwordHash = await argon2.hash(form.password)
	const user = await db.insert(schema.user).values({
		id: userId,
		email: form.email,
		username: form.username,
		passwordHash,
	})
})
