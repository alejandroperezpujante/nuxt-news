<script lang="ts" setup>
import { LogOut, Settings, User } from 'lucide-vue-next'

const user = useLogtoUser() as undefined | Record<string, string | number>
const isAuthenticated = computed(() => user !== undefined)
</script>

<template>
	<DropdownMenu v-if="isAuthenticated">
		<DropdownMenuTrigger as-child>
			<Button variant="outline">
				Open
			</Button>
		</DropdownMenuTrigger>

		<DropdownMenuContent class="w-56">
			<DropdownMenuLabel>My Account</DropdownMenuLabel>
			<DropdownMenuSeparator />
			<DropdownMenuGroup>
				<DropdownMenuItem as-child>
					<NuxtLink to="/my-profile">
						<User class="mr-2 size-4" />
						Profile
					</NuxtLink>
				</DropdownMenuItem>
				<DropdownMenuItem as-child>
					<NuxtLink to="/settings">
						<Settings class="mr-2 size-4" />
						Settings
					</NuxtLink>
				</DropdownMenuItem>
			</DropdownMenuGroup>
			<DropdownMenuSeparator />
			<DropdownMenuItem as-child>
				<a href="/sign-out">
					<LogOut class="mr-2 size-4" />
					Sign out
				</a>
			</DropdownMenuItem>
		</DropdownMenuContent>
	</DropdownMenu>

	<Button
		v-else
		href="/sign-in"
		as="a"
	>
		Sign in
	</Button>
</template>
