// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	compatibilityDate: "2024-11-01",

    css: [ 
        "~/main.css"
    ],

	future: {
		compatibilityVersion: 4,
	},

	devtools: { enabled: true },

	experimental: {
		scanPageMeta: "after-resolve",
		sharedPrerenderData: false,
		compileTemplate: true,
		resetAsyncDataToUndefined: true,
		templateUtils: true,
		relativeWatchPaths: true,
		normalizeComponentNames: false,
		defaults: {
			useAsyncData: {
				deep: true,
			},
		},
	},

	unhead: {
		renderSSRHeadOptions: {
			omitLineBreaks: false,
		},
	},

	modules: [
		"@nuxtjs/tailwindcss",
		"@nuxtjs/google-fonts",
		"@nuxt/icon",
		"@nuxt/image",
	],

    googleFonts: {
        families: {
            Montserrat: true,
        },
    },
});
