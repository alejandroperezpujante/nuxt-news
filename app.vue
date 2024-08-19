<template>
  <NuxtRouteAnnouncer />

	<main class="flex-1 max-w-screen-md mx-auto place-content-center">
    <NuxtPage />
  </main>
</template>

<style>
#__nuxt {
	@apply contents;
}

body {
	@apply min-h-dvh flex flex-col;
}
</style>
