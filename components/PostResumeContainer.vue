<template>
	<div class="p-4 flex items-center gap-2 justify-between border rounded-lg">
		<div class="flex-1 flex items-center gap-2">
			<slot name="content" />
		</div>

		<div class="flex items-center gap-2">
			<slot name="actions" />
		</div>
	</div>
</template>
