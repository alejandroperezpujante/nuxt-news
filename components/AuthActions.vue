<script lang="ts" setup>
import { LogOut, Settings, User } from 'lucide-vue-next'

const user = useUser()
</script>

<template>
	<LazyDropdownMenu v-if="user">
		<DropdownMenuTrigger as-child>
			<Button
				size="icon"
				class="rounded-full"
			>
				<Avatar>
					<AvatarImage
						src="https://avatars.githubusercontent.com/u/51539289?v=4"
						alt="User avatar"
					/>
					<AvatarFallback>
						<User class="size-4" />
					</AvatarFallback>
				</Avatar>
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
	</LazyDropdownMenu>

	<Button
		v-else
		as-child
	>
		<NuxtLink to="/login">
			Sign in
		</NuxtLink>
	</Button>
</template>
