import { useStorage } from '@vueuse/core'

const THEME_MAP = Object.freeze({
	light: 'light',
	dark: 'dark',
	system: 'system',
})
type Theme = (typeof THEME_MAP)[keyof typeof THEME_MAP]

const THEME_ICON_MAP = Object.freeze<Record<Theme, string>>({
	[THEME_MAP.light]: 'lucide-sun',
	[THEME_MAP.dark]: 'lucide-moon',
	[THEME_MAP.system]: 'lucide-laptop',
})

export default function () {
	const themeKey = useRuntimeConfig().public.themeKey
	const theme = useStorage<Theme>(themeKey, THEME_MAP.system)
	const themeIconName = computed<string>(() => THEME_ICON_MAP[theme.value])

	watchEffect(() => {
		const currentTheme = theme.value
		if (currentTheme === THEME_MAP.system) {
			delete document.documentElement.dataset[themeKey]
		}
		else {
			document.documentElement.dataset[themeKey] = theme.value
		}
	})

	return {
		theme,
		themeIconName,

		THEME_MAP,
		THEME_ICON_MAP,
	}
}
