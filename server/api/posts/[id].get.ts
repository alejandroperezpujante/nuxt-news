export default defineCachedEventHandler(async (event) => {
	const postId = getRouterParam(event, 'id')

	if (!postId) {
		throw createError({
			statusCode: 400,
			statusMessage: 'Bad Request',
			message: 'The post ID is required'
		})
	}

	const post = await db.query.post.findFirst({
		where: (posts, { eq }) => eq(posts.id, postId)
	})
	if (!post) {
		throw createError({
			statusCode: 404,
			statusMessage: 'Not Found',
			message: 'The requested post does not exist'
		})
	}

	return { post }
}, {})
