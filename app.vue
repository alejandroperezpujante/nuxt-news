<script lang="ts" setup>

</script>

<template>
	<NuxtRouteAnnouncer />

	<SiteHeader />
	<main class="flex-1 max-w-screen-lg w-full mx-auto mt-24 md:mt-8">
		<NuxtPage />
	</main>
</template>

<style>
#__nuxt {
	@apply contents;
}

body {
	@apply p-4 min-h-dvh flex flex-col;
}
</style>
