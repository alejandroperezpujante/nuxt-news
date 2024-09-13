import type { H3Event } from 'h3'
import type { SelectedOptional } from './types'
import { isEmpty } from './requestParsers'

export interface SearchPostsOptions {
	title: string
	pageSize: number
}

export const searchPosts = defineCachedFunction(
	async (event: H3Event, searchOptions: SelectedOptional<SearchPostsOptions, 'title'>) => {
		const { title, pageSize } = searchOptions

		return db.query.post.findMany({
			where: (posts, { ilike }) => ilike(posts.title, isEmpty(title) ? '%%' : `%${title}%`),
			limit: pageSize,
		})
	},
	{
		maxAge: 60 * 1000 /* 60 seconds */,
		name: 'searchPosts',
		getKey: (event: H3Event, searchOptions: SelectedOptional<SearchPostsOptions, 'title'>) =>
			new URLSearchParams(
				Object.entries(searchOptions).map(([key, value]) => [key, value?.toString() ?? '']),
			).toString(),
	},
)
