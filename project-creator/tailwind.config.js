const { nextui } = require("@nextui-org/react");

/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",

        "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            backgroundImage: {
                close: "url('./assets/close.svg')",
            },
            backgroundSize: {
                24: "24px",
            },
        },
    },
    darkMode: "class",
    plugins: [nextui()],
};
