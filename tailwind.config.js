/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./*.{html,js}"],
    theme: {
        extend: {},
        screens: {
            sm: "400px",
            // => @media (min-width: 640px) { ... }

            md: "500px",
            // => @media (min-width: 768px) { ... }

            lg: "600px",
            // => @media (min-width: 1024px) { ... }

            xl: "700px",
            // => @media (min-width: 1280px) { ... }

            "2xl": "800px",
            // => @media (min-width: 1536px) { ... }
        },
    },
    plugins: [],
};
