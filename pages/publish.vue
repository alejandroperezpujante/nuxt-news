<template>
	<Card class="mb-4">
		<CardHeader>
			<CardTitle>Publish</CardTitle>
			<CardDescription>Let's write a new post!</CardDescription>
		</CardHeader>

		<CardContent>
			<LazyPublishForm v-if="$user" />
			<LazyPublishFormSkeleton v-else />
		</CardContent>
	</Card>
</template>
