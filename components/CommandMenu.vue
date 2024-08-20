<script setup lang="ts">
const open = ref(false)
const { Meta_K } = useMagicKeys({
	passive: false,
	onEventFired(e) {
		if (e.key === 'k' && (e.metaKey || e.ctrlKey)) {
			e.preventDefault()
		}
	}
})
watchEffect(() => {
	if (Meta_K.value) {
		open.value = !open.value
	}
})

function runCommand(cmd: () => void) {
	open.value = false
	cmd()
}
</script>

<template>
	<div class="w-full flex-1 md:w-auto md:flex-none">
		<Button
			variant="outline"
			class="text-muted-foreground relative w-full justify-start text-sm sm:pr-12 md:w-40 lg:w-64"
			@click="open = true"
		>
			<span class="hidden lg:inline-flex"> Search commands... </span>
			<span class="inline-flex lg:hidden">Search...</span>
			<kbd
				class="bg-muted pointer-events-none absolute right-1.5 top-2.3 h-5 select-none items-center gap-1 rounded border px-1.5 font-mono text-[10px] font-medium opacity-100 sm:flex"
			>
				<span class="text-xs">⌘</span>K
			</kbd>
		</Button>
	</div>

	<CommandDialog v-model:open="open">
		<CommandInput placeholder="Type a command to search..." />
		<CommandList>
			<CommandEmpty>
				No results found.
			</CommandEmpty>
			<CommandGroup header="Most visited">
				<CommandItem value="my-profile">
					My Profile
				</CommandItem>
			</CommandGroup>
		</CommandList>
	</CommandDialog>
</template>
