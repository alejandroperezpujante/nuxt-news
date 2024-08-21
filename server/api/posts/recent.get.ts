export default defineCachedEventHandler(() => {
	// Get the posts that:
	return db.query.post.findMany({
		// Were created in the last 24 hours
		where: (posts, { gt }) => gt(posts.createdAt, new Date(Date.now() - 24 * 60 * 60 * 1000)),
		// Order by creation date, descending
		orderBy: (posts, { desc }) => [desc(posts.id)],
		// Limit the number of posts to 30
		limit: 30,
		// Return only the `id`, `title` and `createdAt` columns
		columns: { id: true, title: true, createdAt: true }
	})
}, {
	maxAge: 60 * 1000, /* 60 seconds */
	name: 'getRecentPosts',
	getKey: () => 'default'
})
