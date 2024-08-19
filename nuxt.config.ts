if (import.meta.env.PROD) {
	import('dotenv/config').then(() => { console.log('dotenv loaded') })
}

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
  devtools: { enabled: true }
})
