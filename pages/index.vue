<script setup lang="ts">
const user = useUser()
const { status, data: posts, error } = useFetch('/api/posts/recent')
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

	<div v-else-if="status === 'success'" class="h-dvh">
		<header>
			<h1 class="text-4xl font-bold mb-4">
				Recent Posts
			</h1>
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
		<div class="text-center text-lg">
			<pre>Error: {{ JSON.stringify(error, null, 2) }}</pre>
		</div>
	</div>
</template>
