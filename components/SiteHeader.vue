<script lang="ts" setup>
import { Newspaper, History } from 'lucide-vue-next'

const LINKS = [
	{ to: '/', label: 'Recent', icon: Newspaper },
	{ to: '/all-posts', label: 'All posts', icon: History }
]
</script>

<template>
	<header class="sticky z-40 top-0 bg-background/80 backdrop-blur-lg border-b border-border">
		<div class="h-14 max-w-screen-2xl flex flex-col md:flex-row items-center gap-8">
			<h2 class="text-4xl font-semibold">
				NuxtNews
			</h2>

			<nav class="hidden md:flex gap-4">
				<Button
					v-for="({ to, label, icon }, key) in LINKS"
					:key
					variant="link"
					size="xs"
					as-child
				>
					<NuxtLink
						:to
						class="gap-2"
					>
						<component :is="icon" />
						{{ label }}
					</NuxtLink>
				</Button>
			</nav>

			<div class="w-full flex flex-1 items-center justify-between gap-2 md:justify-end">
				<ColorModelToggle />
				<CommandMenu />
				<AuthActions />
			</div>
		</div>
	</header>
</template>

<style scoped>
h2 {
	font-family: Chillax, sans-serif;
}
</style>
