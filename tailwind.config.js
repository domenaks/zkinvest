/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: '#D4AF37', // Gold
                secondary: '#141414', // Dark Gray
                accent: '#F2C94C', // Lighter Gold
                dark: '#0a0a0a', // Black
                light: '#E5E5E5', // Silver/Light Gray
                // Override slate to be neutral (remove blue tint)
                slate: {
                    50: '#fafafa',
                    100: '#f5f5f5',
                    200: '#e5e5e5',
                    300: '#d4d4d4', // Used for text-secondary
                    400: '#a3a3a3',
                    500: '#737373',
                    600: '#525252',
                    700: '#404040',
                    800: '#262626', // Used for borders
                    900: '#141414', // Used for backgrounds
                    950: '#0a0a0a',
                }
            },
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
                heading: ['Outfit', 'sans-serif'],
            },
        },
    },
    plugins: [],
}
