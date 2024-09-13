<template>
	<div class="relative">
		<div class="space-y-6">
			<div class="flex flex-col gap-4">
				<Skeleton class="h-8 w-1/2" />
				<Skeleton class="h-64 w-full" />
			</div>
			<div class="flex justify-end">
				<Skeleton class="h-10 w-48" />
			</div>
		</div>

		<div class="absolute inset-0 flex items-center justify-center bg-background/50">
			<div class="flex flex-col gap-2">
				<p class="text-xl font-bold">
					You must be logged in to publish!
				</p>
				<Button as-child>
					<NuxtLink to="/login">
						Click here to login.
					</NuxtLink>
				</Button>
			</div>
		</div>
	</div>
</template>
