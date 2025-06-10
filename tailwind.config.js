module.exports = {
    
    theme: {
      extend: {
        typography: (theme) => ({
          DEFAULT: {
            css: {
              color: theme('colors.gray.800'),
              h1: {
                color: theme('colors.green.900'),
              },
              h2: {
                color: theme('colors.green.700'),
              },
              h3: {
                color: theme('colors.green.700'),
              },
              strong: {
                color: theme('colors.gray.800'),
              },
             
            },
          },
        })
      }
    },
      
    
    variants: {
      aspectRatio: ['responsive', 'hover']
    },
    brightness: ['hover', 'focus'],
    plugins: [
      require('@tailwindcss/typography'),
      require('@tailwindcss/aspect-ratio'),
      require('@tailwindcss/forms'),
    ],
  }