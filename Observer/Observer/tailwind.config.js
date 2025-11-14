module.exports = {
  content: [
    "./pages/*.{html,js}",
    "./index.html",
    "./js/*.js",
    "./components/*.html"
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#0066CC", // blue-600
          50: "#E6F2FF", // blue-50
          100: "#CCE5FF", // blue-100
          500: "#0066CC", // blue-600
          600: "#0052A3", // blue-700
          700: "#003D7A", // blue-800
        },
        secondary: {
          DEFAULT: "#FFD700", // yellow-400
          50: "#FFFBEB", // yellow-50
          100: "#FFF3C4", // yellow-100
          400: "#FFD700", // yellow-400
          500: "#F59E0B", // yellow-500
          600: "#D97706", // yellow-600
        },
        accent: {
          DEFAULT: "#FFA500", // orange-500
          50: "#FFF7ED", // orange-50
          100: "#FFEDD5", // orange-100
          400: "#FB923C", // orange-400
          500: "#FFA500", // orange-500
          600: "#EA580C", // orange-600
        },
        background: "#FFFFFF", // white
        surface: {
          DEFAULT: "#F8F9FA", // gray-50
          100: "#F1F3F4", // gray-100
          200: "#E9ECEF", // gray-200
        },
        text: {
          primary: "#212529", // gray-800
          secondary: "#6C757D", // gray-500
          muted: "#ADB5BD", // gray-400
        },
        success: {
          DEFAULT: "#28A745", // green-600
          50: "#F0FDF4", // green-50
          100: "#DCFCE7", // green-100
          500: "#22C55E", // green-500
          600: "#28A745", // green-600
        },
        warning: {
          DEFAULT: "#FFC107", // yellow-500
          50: "#FFFBEB", // yellow-50
          100: "#FEF3C7", // yellow-100
          400: "#FBBF24", // yellow-400
          500: "#FFC107", // yellow-500
        },
        error: {
          DEFAULT: "#DC3545", // red-600
          50: "#FEF2F2", // red-50
          100: "#FEE2E2", // red-100
          500: "#EF4444", // red-500
          600: "#DC3545", // red-600
        },
      },
      fontFamily: {
        sans: ['Source Sans Pro', 'sans-serif'],
        heading: ['Inter', 'sans-serif'],
        mono: ['Roboto Mono', 'monospace'],
        inter: ['Inter', 'sans-serif'],
        'source-sans': ['Source Sans Pro', 'sans-serif'],
        'roboto-mono': ['Roboto Mono', 'monospace'],
      },
      fontSize: {
        'xs': ['0.75rem', { lineHeight: '1rem' }],
        'sm': ['0.875rem', { lineHeight: '1.25rem' }],
        'base': ['1rem', { lineHeight: '1.5rem' }],
        'lg': ['1.125rem', { lineHeight: '1.75rem' }],
        'xl': ['1.25rem', { lineHeight: '1.75rem' }],
        '2xl': ['1.5rem', { lineHeight: '2rem' }],
        '3xl': ['1.875rem', { lineHeight: '2.25rem' }],
        '4xl': ['2.25rem', { lineHeight: '2.5rem' }],
        '5xl': ['3rem', { lineHeight: '1' }],
        '6xl': ['3.75rem', { lineHeight: '1' }],
      },
      boxShadow: {
        'card': '0 2px 8px rgba(0, 0, 0, 0.1)',
        'card-hover': '0 4px 16px rgba(0, 0, 0, 0.15)',
        'subtle': '0 1px 3px rgba(0, 0, 0, 0.1)',
      },
      borderRadius: {
        'DEFAULT': '0.5rem',
        'lg': '0.75rem',
        'xl': '1rem',
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
      },
      transitionDuration: {
        '300': '300ms',
      },
      transitionTimingFunction: {
        'smooth': 'ease-in-out',
      },
      animation: {
        'fade-in': 'fadeIn 300ms ease-in-out',
        'slide-up': 'slideUp 300ms ease-in-out',
        'scale-in': 'scaleIn 300ms ease-in-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(10px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        scaleIn: {
          '0%': { transform: 'scale(0.95)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}