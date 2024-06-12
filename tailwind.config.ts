import { type Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";
import { default as flattenColorPalette } from "tailwindcss/lib/util/flattenColorPalette";

export default {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Montserrat", ...fontFamily.sans],
      },
      colors: {
        white: "#ECECEC",
        bluePrimary: "#591ddd",
        purplePrimary: "#9526c9",
        purpleSecondary: "#9f3ccf",
        pinkPrimary: "#cc2eaf",
        pinkSecondary: "#cc2eaf",
      },
      backgroundImage: {
        "hero-bg": "url('/background.jpeg')",
        "white-gradient":
          "linear-gradient(145.55deg, #ECECEC 20.35%, rgba(236, 236, 236, 0) 128.73%)",
        features:
          "linear-gradient(180deg, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0) 100%)",
      },
      boxShadow: {
        purple: "0 0 30px 10px rgba(89, 28, 225, 0.7)",
        pink: "0 0 30px 10px rgba(159, 60, 207, 0.7)",
        lightPrimary: "0px 0.5px 0px 0px rgba(255, 255, 255, 0.5) inset",
        lightSecondary: "0px -2px 40px 0px rgba(187, 155, 255, 0.15)",
        lightThird: "0px -2px 10px 0px rgba(233, 223, 255, 0.3)",
      },
      animation: {
        "border-beam": "border-beam calc(var(--duration)*1s) infinite linear",
      },
      keyframes: {
        "border-beam": {
          "100%": {
            "offset-distance": "100%",
          },
        },
      },
    },
  },
  plugins: [addVariablesForColors],
} satisfies Config;

function addVariablesForColors({ addBase, theme }: any) {
  let allColors = flattenColorPalette(theme("colors"));
  let newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
  );

  addBase({
    ":root": newVars,
  });
}
