/** @type {import('tailwindcss').Config} */
export default {
  content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
    
  ],
  theme: {
    extend: {
      keyframes: {
        customBounce: {
          '0%, 100%': {
            transform: 'translateY(0)',
            animationTimingFunction: 'cubic-bezier(1, 1, 1, 1)',
          },
          '50%': {
            transform: 'translateY(-10%)',
            animationTimingFunction: 'cubic-bezier(1,1,1,1)',
          },
        },
        
        customFlip: {
          '0%': {
            transform: 'rotateY(0deg)',
          },
          '50%': {
            transform: 'rotateY(180deg)',
          },
          '100%': {
            transform: 'rotateY(360deg)',
          },
        },

      },
      animation: {
        'custom-bounce': 'customBounce 3s infinite',
        'custom-flip': 'customFlip 1s 1'
      },
    },
  },
  plugins: [],
}

 