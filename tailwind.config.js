/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: '#E11D48', // Rose-600
                secondary: '#0F172A', // Slate-900
                accent: '#F43F5E', // Rose-500
                dark: '#020617', // Slate-950
                light: '#F8FAFC', // Slate-50
            },
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
            },
        },
    },
    plugins: [],
}
