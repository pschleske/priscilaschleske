/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
        extend: {
            animation: {
                blob: "blob infinite 7s"
            },
            keyframes: {
                blob: {
                    "0%": {
                        transform: "translate(0px, 0px) scale(1.5)",
                    },
                    "33%": {
                        transform: "translate(30px, -50px) scale(1.8)",
                    },
                    "66%": {
                        transform: "translate(-20px, 20px) scale(1)",
                    },
                    "100%": {
                        transform: "translate(0px, 0px) scale(1.5)",
                    }
                }
            }
        },
    },
    plugins: [],
}