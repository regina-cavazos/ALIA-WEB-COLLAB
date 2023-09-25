import { type Config } from "tailwindcss";

export default {
    content: ["./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            backgroundImage: {
                'perrito': 'url(/perrito.jpg)'
            }

        },
    },
    plugins: [],
} satisfies Config;
