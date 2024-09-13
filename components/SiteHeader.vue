<script lang="ts" setup>
const LINKS = Object.freeze([
	{ to: '/', label: 'Recent', icon: 'lucide-newspaper' },
	{ to: '/search', label: 'Search', icon: 'lucide-search' },
	{ to: '/publish', label: 'Publish', icon: 'lucide-plus' },
])
</script>

<template>
	<header class="sticky z-40 py-4 top-0 bg-background/80 backdrop-blur-lg border-b border-border">
		<div class="flex flex-col md:flex-row items-center gap-4">
			<SiteTitle />

			<nav class="hidden md:flex gap-4">
				<Button
					v-for="({ to, label, icon }, key) in LINKS" :key
					variant="link" size="xs" as-child
				>
					<NuxtLink :to class="md:gap-2">
						<Icon :name="icon" size="1.8em" />
						<span class="sr-only lg:not-sr-only">{{ label }}</span>
					</NuxtLink>
				</Button>
			</nav>

			<div class="w-full flex flex-1 items-center justify-between gap-4 md:justify-end">
				<ClientOnly>
					<ThemeSelect />
					<template #fallback>
						<Skeleton class="w-12 h-10" />
					</template>
				</ClientOnly>
				<CommandMenu />
				<AuthActions />
			</div>
		</div>
	</header>
</template>
