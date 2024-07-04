import type {Config} from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      screens: {
        '2xl': '1440px',
      },
      colors: {
        primary: '#00C1FE',
        secondary: '#F4F3E4',
      },
    },
  },
  plugins: [require('tailwindcss-multi')],
};
export default config;
