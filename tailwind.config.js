/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{vue,js,ts,jsx,tsx}", // The /**/* is the "Deep Penetration" it needs
    ],
    theme: {
        extend: {},
    },
    plugins: [],
}