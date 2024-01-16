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
                logo: "url('/src/assets/logo.svg')",
                menu: "url('/src/assets/menu.svg')",
                image: "url('/src/assets/image.png')",
                arrow_right: "url('/src/assets/arrow_right.svg')",
                dribbble: "url('/src/assets/dribbble.svg')",
                linkedin: "url('/src/assets/linkedin.svg')",
                instagram: "url('/src/assets/instagram.svg')",
                twitter: "url('/src/assets/twitter.svg')",
                search: "url('/src/assets/search.svg')",
                profilePic: "url('/src/assets/profile-pic.jpg')",
            },
            borderColor: {
                "sky-blue-transparent": "rgba(135, 206, 235, 0.5)",
            },
            backgroundSize: {
                24: "24px 24px",
                32: "32px 32px",
            },
            fontFamily: {
                inter: ["Inter", "sans-serif"],
                gt: ["GT", "sans-serif"],
            },
            maxWidth: {
                maxScreen: "1300px",
            },
            listStyleImage: {
                arrow_right: 'url("/src/assets/arrow_right_1.svg")',
            },
        },
    },
    safelist: [
        "bg-orange-500",
        "bg-teal-500",
        "bg-purple-500",
        "text-orange-500",
        "text-teal-500",
        "text-purple-500",
    ],
    darkMode: "class",
    plugins: [
        nextui({
            themes: {
                light: {
                    // ...
                    colors: {
                        software: {
                            DEFAULT: "#0ea5e9",
                        },
                        primary: {
                            //... 50 to 900
                            foreground: "#ffffff",
                            DEFAULT: "#0ea5e9",
                        },
                        secondary: {
                            //... 50 to 900
                            foreground: "#ffffff",
                            DEFAULT: "#14b8a6",
                        },
                    },
                    dark: {
                        // ...
                        colors: {},
                    },
                    // ... custom themes
                },
            },
        }),
    ],
};