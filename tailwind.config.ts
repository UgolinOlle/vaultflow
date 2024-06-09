import { type Config } from 'tailwindcss';
import { default as flattenColorPalette } from 'tailwindcss/lib/util/flattenColorPalette';
import { fontFamily } from 'tailwindcss/defaultTheme';

export default {
  content: ['./src/**/*.tsx'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Montserrat', ...fontFamily.sans],
      },
      colors: {
        white: '#ECECEC',
      },
      backgroundImage: {
        'hero-bg': "url('/background.jpeg')",
        'white-gradient':
          'linear-gradient(145.55deg, #ECECEC 20.35%, rgba(236, 236, 236, 0) 128.73%)',
      },
    },
  },
  plugins: [addVariablesForColors],
} satisfies Config;

function addVariablesForColors({ addBase, theme }: any) {
  let allColors = flattenColorPalette(theme('colors'));
  let newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
  );

  addBase({
    ':root': newVars,
  });
}
