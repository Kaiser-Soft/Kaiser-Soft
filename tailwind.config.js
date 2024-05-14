/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/pages/**/*.{js,ts,jsx,tsx,mdx}", "./src/components/**/*.{js,ts,jsx,tsx,mdx}", "./src/app/**/*.{js,ts,jsx,tsx,mdx}"],
	plugins: [require("daisyui")],
	daisyui: {
		themes: [
			{
				mytheme: {
					primary: "#9B5DE5", // Un tono morado como el principal del logo
					secondary: "#F15BB5", // Un tono rosado como un color secundario en el logo
					accent: "#00BBF9", // Un azul claro como el color de acento visible en el logo
					neutral: "#070D0D", // Un negro o gris muy oscuro para los neutros
					"base-100": "#FFFFFF", // Blanco para el fondo base, podría ajustarse si es necesario
					info: "#00F5D4", // Un cian brillante para información
					success: "#8AC926", // Un verde vivo para éxitos
					warning: "#FFCA3A", // Amarillo para advertencias
					error: "#EF476F", // Rojo para errores
				},
			},
		],
	},
};
