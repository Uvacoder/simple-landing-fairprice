const colors = require("tailwindcss/colors");

module.exports = {
	purge: ["./public/**/*.html"],
	darkMode: false, // or 'media' or 'class'
	theme: {
		fontFamily: {
			"sans": "Public Sans, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, Noto Sans, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol, Noto Color Emoji",
		},
		extend: {
			colors: {
				gray: colors.blueGray,
				cyan: colors.cyan,
			},
		},
	},
	variants: {
		extend: {},
	},
	plugins: [require("@tailwindcss/forms"), require("@tailwindcss/typography"), require("@tailwindcss/aspect-ratio")],
	corePlugins: {
		animation: false,
	},
};
