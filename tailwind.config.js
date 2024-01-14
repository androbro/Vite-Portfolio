/** @type {import('tailwindcss').Config} */
import colors, { blue, green } from "tailwindcss/colors";
export const content = [
	"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
	"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
	"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
];
export const theme = {
	extend: {
		backgroundImage: {
			"gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
			"gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
		},
		fontSize: {
			'7.5xl': '5.5rem',
		},
	},
	colors: {
		...colors,
		primary: blue,
		secondary: green,
	},
};
export const plugins = [];
