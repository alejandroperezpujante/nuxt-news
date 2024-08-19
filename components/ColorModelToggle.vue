<script setup lang="ts">
import { MoonIcon, SunIcon, LaptopIcon } from 'lucide-vue-next'
</script>

<template>
	<DropdownMenu>
		<DropdownMenuTrigger as-child>
			<Button
				variant="outline"
				size="icon"
			>
				<LaptopIcon
					v-if="$colorMode.preference === 'system'"
					:size="20"
				/>
				<MoonIcon
					v-else-if="$colorMode.preference === 'dark'"
					:size="20"
				/>
				<SunIcon
					v-else
					:size="20"
				/>
				<span class="sr-only">Toggle theme</span>
			</Button>
		</DropdownMenuTrigger>
		<DropdownMenuContent align="end">
			<DropdownMenuItem @click="$colorMode.preference = 'light'">
				Light
			</DropdownMenuItem>
			<DropdownMenuItem @click="$colorMode.preference = 'dark'">
				Dark
			</DropdownMenuItem>
			<DropdownMenuItem @click="$colorMode.preference = 'system'">
				System
			</DropdownMenuItem>
		</DropdownMenuContent>
	</DropdownMenu>
</template>
