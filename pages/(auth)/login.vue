<script setup lang="ts">
import { toTypedSchema } from '@vee-validate/zod'
import { useForm } from 'vee-validate'
import { z } from 'zod'

definePageMeta({ layout: 'auth' })

const schema = z.object({
	email: z.string().min(1, 'Email is required').email('Must be a valid email'),
	password: z.string().min(1, 'Password is required').min(12, 'Password must be at least 12 characters').max(100, 'Password must be at most 100 characters'),
})

const form = useForm({
	validationSchema: toTypedSchema(schema),
	initialValues: {
		email: '',
		password: '',
	},
})
</script>

<template>
	<Card class="w-full max-w-sm">
		<CardHeader>
			<CardTitle class="text-2xl">
				Login
			</CardTitle>
			<CardDescription>
				Enter your email below to login to your account.
			</CardDescription>
		</CardHeader>

		<CardContent>
			<AutoForm class="space-y-6" :form :schema>
				<Button type="submit" class="w-full">
					Enter to your account
				</Button>
			</AutoForm>
		</CardContent>

		<CardFooter>
			<div class="mt-4 mx-auto text-sm text-muted-foreground">
				Don't have an account?
				<NuxtLink to="/create-account" class="underline">
					Create one here
				</NuxtLink>
			</div>
		</CardFooter>
	</Card>
</template>
