<script lang="ts" setup>
import type { SearchPostsOptions } from '~/server/utils/searchPosts'

const titleQuery = ref<SearchPostsOptions['title']>('')
const debouncedQueryParams = refDebounced(
	// Workaround until https://github.com/vueuse/vueuse/pull/3969 is resolved
	computed(() => ({ title: titleQuery.value })),
	1000,
	{ maxWait: 2000 }
)
const { status, data: posts, error } = useFetch('/api/posts/search', {
	query: debouncedQueryParams
})
</script>

<template>
	<div
		v-if="status === 'pending'"
		class="space-y-4"
	>
		<PostResumeSkeleton
			v-for="index in 30"
			:key="index"
		/>
	</div>

	<div
		v-else-if="status === 'success'"
		class="space-y-8"
	>
		<header class="space-y-4">
			<h1 class="text-4xl font-bold">
				Search for posts
			</h1>
			<form
				class="space-x-4"
				@submit.prevent
			>
				<Input
					v-model="titleQuery"
					type="text"
					placeholder="Post title"
				/>
			</form>
		</header>

		<ul class="space-y-4">
			<li
				v-for="post in posts"
				:key="post.id"
				class="text-2xl font-bold"
			>
				<PostResume :post />
			</li>
		</ul>
	</div>

	<div v-else>
		<p class="text-center text-lg">
			Error:
			<pre>{{ JSON.stringify(error, null, 2) }}</pre>
		</p>
	</div>
</template>
