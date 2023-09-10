/** @type {import('tailwindcss').Config}*/
const config = {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {
			colors: {
				primary: "#090164",
				secondary: "#ee1924",
				tertiary: "#e8dc0e",
				background: "#bceaff"
			}
		}
	},

	plugins: []
};

module.exports = config;
