/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ['class'],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}'
  ],
  prefix: '',
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px'
      }
    },

    extend: {
      fontFamily: {
        inter: ['var(--font-inter)', 'sans-serif'],
        titan: ['var(--font-titan-one)', 'sans-serif'],
        poppins: ['var(--font-poppins)', 'sans-serif']
      },
      cursor: {
        yellow: 'url("/cursor.png"), auto'
      },
      colors: {
        border: '#77fe81',
        blackground: '#0E0E11',
        background: '#0E0E11',
        subbackground: '#18181B',
        high: '#093ADB',
        text: '#f0f1f5',
        textocean: '#2632D9',
        subtext: '#0075ff',
        select: '#CCD2D3',
        btn: '#068f11',
        btn2: '#FBA518',
        umber: {
          50: '#eeffee',
          100: '#d7ffda',
          200: '#b2ffb7',
          300: '#77fe81',
          400: '#55f561',
          500: '#0bdc1b',
          600: '#02b711',
          700: '#068f11',
          800: '#0b7014',
          900: '#0b5c14',
          950: '#003406'
        },

        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        foreground: 'hsl(var(--foreground))',
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))'
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))'
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))'
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))'
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))'
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))'
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))'
        }
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)'
      }
    }
  },
  plugins: [require('tailwindcss-animate')]
};
