<template>
	<NuxtRouteAnnouncer />

	<SiteHeader />
	<main class="flex-1 max-w-screen-md mx-auto place-content-center">
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
