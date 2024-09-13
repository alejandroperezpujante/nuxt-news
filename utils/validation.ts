import { z } from 'zod'

const emailSchema = z.string().min(1, 'Email is required').email('Must be a valid email')
const usernameSchema = z.string().min(1, 'Username is required').min(3, 'Username must be at least 3 characters').max(32, 'Username must be at most 32 characters')
const passwordSchema = z.string().min(1, 'Password is required').min(12, 'Password must be at least 12 characters').max(100, 'Password must be at most 100 characters')

const createUserSchema = z.object({
	email: emailSchema,
	username: usernameSchema,
	password: passwordSchema,
	confirm: passwordSchema,
}).refine(data => data.password === data.confirm, {
	message: 'Passwords do not match',
	path: ['confirm'],
})

export const validation = {
	email: emailSchema,
	password: passwordSchema,
	username: usernameSchema,
	createUser: createUserSchema,
}
