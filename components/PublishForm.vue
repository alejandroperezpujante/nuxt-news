<script lang="ts" setup>
import type { Config } from './ui/auto-form'
import { toTypedSchema } from '@vee-validate/zod'
import { useForm } from 'vee-validate'
import { z } from 'zod'

const schema = z.object({
	title: z.string().min(1, 'Title is required'),
	content: z.string().min(1, 'Content is required'),
	acceptTerms: z
		.boolean()
		.refine(value => value, {
			message: 'You must accept the terms and conditions.',
			path: ['acceptTerms'],
		}),
})

const fieldConfig: Config<z.infer<typeof schema>> = {
	title: {
		inputProps: {
			'aria-required': true,
		},
	},
	content: {
		component: 'textarea',
		inputProps: {
			'rows': 10,
			'class': 'resize-none',
			'aria-required': true,
		},
	},
	acceptTerms: {
		label: 'Accept terms and conditions of publishing',
		inputProps: {
			required: true,
		},
	},
}

const form = useForm({
	validationSchema: toTypedSchema(schema),
	initialValues: {
		title: '',
		content: '',
	},
})
</script>

<template>
	<AutoForm
		class="space-y-6"
		:schema="schema"
		:field-config="fieldConfig"
	>
		<template #acceptTerms="slotProps">
			<AutoFormField v-bind="slotProps" />
			<div class="!mt-2 text-sm text-muted-foreground">
				I agree to the
				<NuxtLink to="/publising-policy" class="underline">
					publising policy
				</NuxtLink>.
			</div>
		</template>

		<div class="md:flex md:justify-end">
			<Button
				type="submit"
				class="w-full md:w-auto"
				:disabled="form.isSubmitting.value"
			>
				<template v-if="form.isSubmitting.value">
					<div class="flex items-center gap-2">
						<Icon name="lucide-loader-circle" class="animate-spin" />
						Publishing...
					</div>
				</template>
				<template v-else>
					Publish
				</template>
			</Button>
		</div>
	</AutoForm>
</template>
