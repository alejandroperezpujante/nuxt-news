// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	compatibilityDate: '2024-04-03',

	runtimeConfig: {
		logto: {
			endpoint: '',
			appId: '',
			appSecret: '',
			cookieEncryptionKey: ''
		}
	},

	modules: [
		'@logto/nuxt',
		'@nuxtjs/tailwindcss',
		'shadcn-nuxt',
		'@nuxtjs/color-mode',
		'@nuxt/eslint',
		'@nuxt/fonts',
		'@vueuse/nuxt'
	],
	fonts: {
		defaults: { weights: [400, 600] },
		providers: { google: false }
	},
	colorMode: { classSuffix: '' },
	eslint: {
		config: {
			stylistic: {
				indent: 'tab',
				commaDangle: 'never'
			}
		}
	},

	devtools: { enabled: true }
})
