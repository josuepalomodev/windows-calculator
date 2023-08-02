/** @type {import('tailwindcss').Config} */
export default {
	content: [
		"./index.html",
		"./src/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		extend: {},
		colors: {
			'dark-charcoal': "#202020",
			'dim-gray': "#323232",
			'meteor-gray': "#3b3b3b",
			'spanish-gray': "#717171",
			'silver-sand': "#bdb9b8",
			'white': "#ffffff",
		},
	},
	plugins: [],
}