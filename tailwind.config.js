/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        bg: '#FFF8F5',        // page
        card: '#FFE9DE',      // bento card fill
        card2: '#FFEFE3',     // lighter card / nested
        deep: '#FFD2BE',      // hover fill, pills
        brown: '#99470F',     // ALL headings + card titles
        brownDeep: '#7A380B',
        orange: '#FF5722',    // logo mark, accents, icons
        ink: '#27140A',       // nav links, strong body
        body: '#505050',      // paragraph text
        mute: '#7A7A7A',      // secondary / captions
      },
      fontFamily: {
        display: ['Satoshi', 'Inter', 'system-ui', 'sans-serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
        serif: ['"IBM Plex Serif"', 'Georgia', 'serif'],
      },
      fontSize: {
        micro: ['0.6875rem', { lineHeight: '1.1', letterSpacing: '0.14em' }],
        hero: ['clamp(1.9rem, 3.4vw, 3rem)', { lineHeight: '1.14', letterSpacing: '-0.03em' }],
        heroLarge: ['clamp(2.3rem,3.7vw,3.5rem)', { lineHeight: '1.1', letterSpacing: '-0.03em' }],
        sect: ['clamp(1.5rem, 2.4vw, 2rem)', { lineHeight: '1.15', letterSpacing: '-0.02em' }],
        cardTitle: ['clamp(1.4rem, 2.1vw, 2rem)', { lineHeight: '1.18', letterSpacing: '-0.025em' }],
        closing: ['clamp(2rem, 3.9vw, 3.4rem)', { lineHeight: '1.16', letterSpacing: '-0.03em' }],
      },
      borderRadius: {
        card: '18px',
        inner: '14px',
        pill: '999px',
      },
      maxWidth: { shell: '1480px' },
      transitionTimingFunction: { smooth: 'cubic-bezier(0.22, 1, 0.36, 1)' },
      keyframes: {
        spinSlow: { to: { transform: 'rotate(360deg)' } },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-6px)' },
        },
      },
      animation: {
        spinSlow: 'spinSlow 22s linear infinite',
        float: 'float 6s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
