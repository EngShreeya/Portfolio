export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        display: ['Sora', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      colors: {
        ink: '#07080c',
      },
      boxShadow: {
        glow:
          '0 0 0 1px rgba(255,255,255,0.06), 0 0 30px rgba(168,85,247,0.22), 0 0 90px rgba(34,211,238,0.12)',
      },
      keyframes: {
        floaty: {
          '0%, 100%': { transform: 'translate3d(0,0,0)' },
          '50%': { transform: 'translate3d(0,-12px,0)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '0% 50%' },
          '100%': { backgroundPosition: '100% 50%' },
        },
        grain: {
          '0%, 100%': { transform: 'translate3d(0,0,0)' },
          '10%': { transform: 'translate3d(-5%,-10%,0)' },
          '20%': { transform: 'translate3d(-15%,5%,0)' },
          '30%': { transform: 'translate3d(7%,-25%,0)' },
          '40%': { transform: 'translate3d(-5%,25%,0)' },
          '50%': { transform: 'translate3d(-15%,10%,0)' },
          '60%': { transform: 'translate3d(15%,0%,0)' },
          '70%': { transform: 'translate3d(0%,15%,0)' },
          '80%': { transform: 'translate3d(3%,35%,0)' },
          '90%': { transform: 'translate3d(-10%,10%,0)' },
        },
      },
      animation: {
        floaty: 'floaty 6s ease-in-out infinite',
        shimmer: 'shimmer 6s ease infinite',
        grain: 'grain 8s steps(8) infinite',
      },
    },
  },
}

