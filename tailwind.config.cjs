/** @type {import('tailwindcss').Config}*/
const config = {
	content: [
		"./src/**/*.{html,js,svelte,ts}",
		"./node_modules/flowbite-svelte/**/*.{html,js,svelte,ts}",
	],

	plugins: [
		require('flowbite/plugin')
	],

	darkMode: 'class',

	theme: {
		extend: {
			colors: {
				// flowbite-svelte
				primary: { 400: '#76A9FA', 500: '#3F83F8', 600: '#1C64F2', 700: '#1A56DB', 800: '#1E429F', 900: '#233876' },
				gray: { 700: '#374151', 800: '#1F2A37', 900: '#111928' },
				white: '#ffffff',
			}
		}
	}
};

module.exports = config;