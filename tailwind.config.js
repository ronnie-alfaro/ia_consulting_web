/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      colors: {
        void: '#05070d',
        ink: '#0b1020',
        plasma: '#7c3cff',
        cyan: '#2ee9ff',
        mint: '#6dffbf',
        ember: '#ffb86b',
      },
      boxShadow: {
        glow: '0 0 48px rgba(46, 233, 255, 0.18)',
        violet: '0 0 60px rgba(124, 60, 255, 0.22)',
      },
      backgroundImage: {
        'radial-grid':
          'radial-gradient(circle at 50% 0%, rgba(46,233,255,.16), transparent 28rem), radial-gradient(circle at 85% 12%, rgba(124,60,255,.2), transparent 28rem), radial-gradient(circle at 12% 28%, rgba(109,255,191,.12), transparent 24rem)',
      },
    },
  },
  plugins: [],
};
