<template>
	<NuxtRouteAnnouncer />

	<div class="flex-1 place-content-center mx-auto space-y-8">
		<header class="text-center">
			<SiteTitle class="text-5xl" />
		</header>
		<main>
			<slot />
		</main>
	</div>
</template>
