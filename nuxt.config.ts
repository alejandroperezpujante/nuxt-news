// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	compatibilityDate: '2024-04-03',
	runtimeConfig: {
		logto: {
			endpoint: '',
			appId: '',
			appSecret: '',
			cookieEncryptionKey: '',
		},
	},
	modules: ['@logto/nuxt', "@nuxtjs/tailwindcss", "shadcn-nuxt", "@nuxt/eslint"],
	eslint: {
		config: {
			stylistic: {
				indent: 'tab',
				commaDangle: 'never',
			}
		}
	},
  devtools: { enabled: true }
})
