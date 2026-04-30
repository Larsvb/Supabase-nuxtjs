/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './app/**/*.{js,ts,vue}',
    './app/**/**/*.{js,ts,vue}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#667eea',
        secondary: '#764ba2',
        accent: '#f472b6',
        success: '#10b981',
        warning: '#f59e0b',
        error: '#ef4444',
        neutral: {
          50: '#f9fafb',
          100: '#f3f4f6',
          200: '#e5e7eb',
          300: '#d1d5db',
          400: '#9ca3af',
          500: '#6b7280',
          600: '#4b5563',
          700: '#374151',
          800: '#1f2937',
          900: '#111827',
        },
      },
      spacing: {
        xs: '0.25rem',
        sm: '0.5rem',
        md: '1rem',
        lg: '1.5rem',
        xl: '2rem',
        '2xl': '2.5rem',
        '3xl': '3rem',
        '4xl': '4rem',
        '5xl': '5rem',
        '6xl': '6rem',
      },
      width: {
        xs: '20rem',
        sm: '24rem',
        md: '28rem',
        lg: '32rem',
        xl: '36rem',
        '2xl': '42rem',
        '3xl': '48rem',
        '4xl': '56rem',
        '5xl': '64rem',
        '6xl': '72rem',
      },
      maxWidth: {
        container: '1200px',
      },
    },
  },
  plugins: [],
}

