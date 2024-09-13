<script lang="ts" setup>
import { ChevronsDown, ChevronsUp, Share, Bookmark, Flag } from 'lucide-vue-next'

defineProps<{
	post: {
		id: string
		title: string
		createdAt: string
	}
}>()

/**
 * Calculate the time ago since the post was created and return a human-readable string
 * @param timestamp Creation date (max 24 hours ago)
 */
function calculateTimeAgo(timestamp: string): string {
	const now = Date.now()
	const createdAt = new Date(timestamp).getTime()
	const diff = now - createdAt

	if (diff < 1000 * 60) {
		return 'less than a minute ago'
	}

	if (diff < 1000 * 60 * 60) {
		const minutes = Math.floor(diff / (1000 * 60))
		return `${minutes} minute${minutes > 1 ? 's' : ''} ago`
	}

	const hours = Math.floor(diff / (1000 * 60 * 60))
	if (hours < 24) {
		return `${hours} hour${hours > 1 ? 's' : ''} ago`
	}

	const days = Math.floor(diff / (1000 * 60 * 60 * 24))
	if (days < 21) {
		return `${days} day${days > 1 ? 's' : ''} ago`
	}

	return new Date(createdAt).toLocaleDateString()
}
</script>

<template>
	<PostResumeContainer>
		<template #content>
			<!-- TODO: API for this: Up/Down vote posts -->
			<div class="flex flex-col">
				<Button
					size="icon"
					variant="ghost"
				>
					<ChevronsUp />
				</Button>
				<Button
					size="icon"
					variant="ghost"
				>
					<ChevronsDown />
				</Button>
			</div>

			<div>
				<h3 class="text-2xl font-semibold">
					{{ post.title }}
				</h3>
				<p class="text-sm text-gray-500">
					Published at {{ calculateTimeAgo(post.createdAt) }}.
				</p>
			</div>
		</template>

		<!-- TODO: API for all this actions -->
		<template #actions>
			<Button
				size="icon"
				variant="outline"
				aria-label="Share post"
			>
				<Share :size="18" />
			</Button>
			<Button
				size="icon"
				variant="outline"
				arial-label="Bookmark post"
			>
				<Bookmark :size="18" />
			</Button>
			<Button
				size="icon"
				variant="destructive"
				aria-label="Report post"
			>
				<Flag :size="18" />
			</Button>
		</template>
	</PostResumeContainer>
</template>
