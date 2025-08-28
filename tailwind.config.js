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
        border: '#f2ff30',
        blackground: '#0E0E11',
        background: '#0E0E11',
        subbackground: '#18181B',
        high: '#093ADB',
        text: '#f0f1f5',
        textocean: '#2632D9',
        subtext: '#0075ff',
        select: '#CCD2D3',
        btn: '#103AC5',
        btn2: '#FBA518',
        umber: {
          50: '#fcffe5',
          100: '#f6ffbc',
          200: '#f1ff7c',
          300: '#f2ff30',
          400: '#feff00',
          500: '#ffe400',
          600: '#e3b200',
          700: '#b47e00',
          800: '#946200',
          900: '#7a4d06',
          950: '#492900'
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
