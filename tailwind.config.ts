import type { Config } from 'tailwindcss';
import colors from 'tailwindcss/colors';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        paletteText: {
          primary: '#444B55',
          secondary: '#686E76',
          inactive: '#808C92',
          placeholder: '#8F95B2',
          error: '#EE3124',
          active: '#0092AC',
        },
      },
    },
    colors: {
      ...colors,
      'eastern-blue': {
        50: '#f2fafb',
        100: '#e6f5f6',
        200: '#bfe7ea',
        300: '#99d8dd',
        400: '#4dbbc3',
        500: '#009ea9',
        600: '#008e98',
        700: '#00777f',
        800: '#005f65',
        900: '#004d53',
      },
    },
  },
  plugins: [],
};
export default config;
