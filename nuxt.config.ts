// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
	compatibilityDate: '2024-04-03',

	runtimeConfig: {
		pg: {
			host: '',
			port: 0,
			user: '',
			password: '',
			database: '',
		},

		public: {
			themeKey: 'theme',
		},
	},

	modules: [
		'@nuxtjs/tailwindcss',
		'shadcn-nuxt',
		'@nuxt/eslint',
		'@nuxt/fonts',
		'@vueuse/nuxt',
		'@nuxtjs/seo',
		'@nuxt/icon',
		'@formkit/auto-animate',
	],
	fonts: {
		defaults: { weights: [400, 600] },
		providers: { google: false },
	},
	site: {
		url: 'https://nuxtnews.perezpujantealejandro.dev',
		name: 'Nuxt News',
		description: 'Clone of Hacker News built with Nuxt',
		defaultLocale: 'en',
	},
	eslint: {
		config: {
			// Delegate JS, TS, and Vue config to @antfu/eslint-config.
			standalone: false,
		},
	},
	icon: {
		size: '1.2em',
	},

	experimental: {
		watcher: 'parcel',
		typedPages: true,
	},
	devtools: { enabled: true },
})
