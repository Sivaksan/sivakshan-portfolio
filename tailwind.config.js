/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                'cyber-black': '#0a0a0f',
                'cyber-dark': '#13131a',
                'cyber-cyan': '#00ff9f',
                'cyber-magenta': '#ff006e',
                'cyber-purple': '#8b5cf6',
                'border': '#1f1f2e',
            },
            animation: {
                'glow-pulse': 'glow-pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
                'fade-in': 'fade-in 1s ease-out forwards',
                'slide-up': 'slide-up 0.8s ease-out forwards',
            },
            keyframes: {
                'glow-pulse': {
                    '0%, 100%': {
                        textShadow: '0 0 10px rgba(0, 255, 159, 0.5), 0 0 20px rgba(0, 255, 159, 0.3)',
                    },
                    '50%': {
                        textShadow: '0 0 20px rgba(0, 255, 159, 0.8), 0 0 30px rgba(0, 255, 159, 0.5)',
                    },
                },
                'fade-in': {
                    from: { opacity: '0' },
                    to: { opacity: '1' },
                },
                'slide-up': {
                    from: {
                        opacity: '0',
                        transform: 'translateY(30px)'
                    },
                    to: {
                        opacity: '1',
                        transform: 'translateY(0)'
                    },
                },
            },
        },
    },
    plugins: [],
}
