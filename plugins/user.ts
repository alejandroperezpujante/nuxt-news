export default defineNuxtPlugin(() => {
	const user = useUser()

	return { provide: { user } }
})
