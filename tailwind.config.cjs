/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
	theme: {
		extend: {
			colors: {
				primary: "#F7F7F7",
				black: "#1E1E1E",
                grayLight: "#1E1E1E66",
				yellowPrimary: "#FF842B",
                grayLight2: "#77777780"
			},
		},
	},
	plugins: [require("@tailwindcss/forms")],
};
