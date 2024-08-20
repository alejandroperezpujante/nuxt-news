<script setup lang="ts">
const client = useLogtoClient()
const user = useLogtoUser()
</script>

<template>
	<div class="container mx-auto">
		<h1 class="text-3xl font-bold">
			My Profile
		</h1>
		<p class="text-lg text-gray-500">
			Welcome back, {{ user?.username }}
		</p>
	</div>
</template>
