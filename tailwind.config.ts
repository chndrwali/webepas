import type { Config } from 'tailwindcss';

export default {
  darkMode: ['class'],
  content: ['./pages/**/*.{js,ts,jsx,tsx,mdx}', './components/**/*.{js,ts,jsx,tsx,mdx}', './app/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        chart: {
          '1': 'hsl(var(--chart-1))',
          '2': 'hsl(var(--chart-2))',
          '3': 'hsl(var(--chart-3))',
          '4': 'hsl(var(--chart-4))',
          '5': 'hsl(var(--chart-5))',
        },
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      keyframes: {
        shine: {
          '0%': { backgroundPosition: '200% 0' },
          '25%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '-200% 0' },
        },
      },
      animation: {
        shine: 'shine 3s ease-out infinite',
      },
      backgroundImage: {
        pattern: "url('/images/pattern.webp')",
        desktop: "url('/images/background.webp')",
        mobile: "url('/images/background-mobile.webp')",
        desktop_cair: "url('/materi/cair/background.png')",
        mobile_cair: "url('/materi/cair/background-mobile.png')",
        desktop_padat_1: "url('/materi/padat/background-1.png')",
        desktop_padat_2: "url('/materi/padat/background-2.png')",
        desktop_padat_3: "url('/materi/padat/background-3.png')",
        desktop_padat_4: "url('/materi/padat/background-4.png')",
        mobile_padat_1: "url('/materi/padat/background-mobile-1.png')",
        mobile_padat_2: "url('/materi/padat/background-mobile-2.png')",
        mobile_padat_3: "url('/materi/padat/background-mobile-3.png')",
        mobile_padat_4: "url('/materi/padat/background-mobile-4.png')",
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
} satisfies Config;
