<script setup lang="ts">
const { theme, themeIconName, THEME_MAP, THEME_ICON_MAP } = useTheme()
</script>

<template>
	<DropdownMenu>
		<DropdownMenuTrigger as-child>
			<Button variant="outline" aria-label="Select theme">
				<Icon :name="themeIconName" />
			</Button>
		</DropdownMenuTrigger>

		<DropdownMenuContent align="end">
			<DropdownMenuItem
				v-for="themeKey in THEME_MAP"
				:key="themeKey"
				class="flex items-center gap-2"
				@click="theme = themeKey"
			>
				<Icon :name="THEME_ICON_MAP[themeKey]" />
				<span class="capitalize">{{ themeKey }}</span>
			</DropdownMenuItem>
		</DropdownMenuContent>
	</DropdownMenu>
</template>
