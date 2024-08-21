<template>
	<PostResumeContainer>
		<template #content>
			<div class="flex gap-2">
				<Skeleton class="size-6" />
				<Skeleton class="h-6 w-1/2" />
			</div>
			<div class="flex gap-2">
				<Skeleton class="size-6" />
				<Skeleton class="h-6 w-3/4" />
			</div>
		</template>

		<template #actions>
			<Skeleton
				v-for="index in 3"
				:key="index"
				class="size-8"
			/>
		</template>
	</PostResumeContainer>
</template>
