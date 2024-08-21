<script lang="ts" setup>
const route = useRoute('post-id')
const { status, data, error } = useLazyFetch(`/api/posts/${route.params.id}`)
watchEffect(() => {
	if (status.value === 'error') {
		console.log(
			JSON.stringify(error.value, null, 2)
		)
	}
})
</script>

<template>
	<div v-if="status === 'pending'">
		Loading...
	</div>
	<div v-else-if="data?.post">
		<h1>{{ data?.post.title }}</h1>
		<p>{{ data?.post.content }}</p>
	</div>
	<div v-else>
		<p>Error: {{ error?.message }}</p>
	</div>
</template>
