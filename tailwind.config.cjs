/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
      colors: {
        primary: '#0f172a',
        secondary: '#6b21a8',
      }
    },
	},
	plugins: [require('@tailwindcss/typography')],
}
