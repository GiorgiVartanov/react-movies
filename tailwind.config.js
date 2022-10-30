const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        extend: {
            fontFamily: {
                poppins: ["Poppins", ...defaultTheme.fontFamily.sans],
                roboto: ["roboto", ...defaultTheme.fontFamily.sans],
            },
        },
    },
    plugins: [],
};
