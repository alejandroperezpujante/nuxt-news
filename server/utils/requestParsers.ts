import type { H3Event } from 'h3'
import type { z } from 'zod'

const DEFAULT_ERROR_STATUS = 400
const DEFAULT_ERROR_MESSAGE = 'Validation Error'

function createValidationError(error: any) {
	return createError({
		statusCode: DEFAULT_ERROR_STATUS,
		statusMessage: DEFAULT_ERROR_MESSAGE,
		message: error?.message || DEFAULT_ERROR_MESSAGE,
		data: error,
	})
}

export async function useValidatedPath<
	T extends z.ZodType,
>(event: H3Event, schema: T): Promise<z.infer<T>> {
	try {
		const params = getRouterParams(event)
		return await schema.parseAsync(params)
	}
	catch (error) {
		console.error(error)
		throw createValidationError(error)
	}
}

export async function useValidatedQuery<
	T extends z.ZodType,
>(event: H3Event, schema: T): Promise<z.infer<T>> {
	try {
		const query = getQuery(event)
		return await schema.parseAsync(query)
	}
	catch (error) {
		console.error(error)
		throw createValidationError(error)
	}
}

export async function useValidatedBody<
	T extends z.ZodType,
>(event: H3Event, schema: T): Promise<z.infer<T>> {
	try {
		const body = await readBody(event)
		return await schema.parseAsync(body)
	}
	catch (error) {
		console.error(error)
		throw createValidationError(error)
	}
}
