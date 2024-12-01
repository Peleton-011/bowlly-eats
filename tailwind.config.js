/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}", "./app/**/*.{vue,js,ts,jsx,tsx}"],
	theme: {
		extend: {
			colors: {
				"metallic-blue": "#305979",
				"chinese-black": "#121212",
				"emerald": "61D095",
			},
		},
		fontFamily: {
			Montserrat: "Montserrat, sans-serif",
		},
		container: {
			center: true,
			padding: "2rem",
		},
	},
	plugins: [],
};
