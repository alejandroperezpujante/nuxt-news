// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	compatibilityDate: '2024-04-03',

	runtimeConfig: {
		logto: {
			endpoint: '',
			appId: '',
			appSecret: '',
			cookieEncryptionKey: ''
		},
		pg: {
			host: '',
			port: 0,
			user: '',
			password: '',
			database: ''
		}
	},

	modules: [
		'@logto/nuxt',
		'@nuxtjs/tailwindcss',
		'shadcn-nuxt',
		'@nuxtjs/color-mode',
		'@nuxt/eslint',
		'@nuxt/fonts',
		'@vueuse/nuxt',
		'@nuxtjs/seo'
	],
	fonts: {
		defaults: { weights: [400, 600] },
		providers: { google: false }
	},
	site: {
		url: 'https://nuxtnews.perezpujantealejandro.dev',
		name: 'Nuxt News',
		description: 'Clone of Hacker News built with Nuxt',
		defaultLocale: 'en'
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

	experimental: {
		watcher: 'parcel',
		typedPages: true
	},
	devtools: { enabled: true }
})
