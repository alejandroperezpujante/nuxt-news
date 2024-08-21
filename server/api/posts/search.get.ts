import { searchPosts, type SearchPostsOptions } from '~/server/utils/searchPosts'

export default defineCachedEventHandler((event) => {
	const { title = '', pageSize = 30 } = getQuery<Partial<SearchPostsOptions>>(event)

	return searchPosts(event, { title, pageSize })
})
