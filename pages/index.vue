<script setup lang="ts">
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

	<div v-else-if="status === 'success'">
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
			Error: <pre>{{ JSON.stringify(error, null, 2) }}</pre>
		</p>
	</div>
</template>
