<script setup lang="ts">
import { toTypedSchema } from '@vee-validate/zod'
import { useForm } from 'vee-validate'
import { z } from 'zod'

definePageMeta({ layout: 'auth' })

const form = useForm({
	validationSchema: toTypedSchema(validation.createUser),
	initialValues: {
		email: '',
		username: '',
		password: '',
		confirm: '',
	},
})
</script>

<template>
	<Card>
		<CardHeader>
			<CardTitle class="text-2xl">
				Create Account
			</CardTitle>
			<CardDescription>
				Enter your details below to create your account.
			</CardDescription>
		</CardHeader>

		<CardContent>
			<AutoForm class="space-y-8" :form :schema>
				<Button type="submit" class="w-full">
					Create Account
				</Button>
			</AutoForm>
		</CardContent>

		<CardFooter>
			<div class="mt-4 mx-auto text-sm text-muted-foreground">
				Already have an account?
				<NuxtLink to="/login" class="underline">
					Login here
				</NuxtLink>
			</div>
		</CardFooter>
	</Card>
</template>
