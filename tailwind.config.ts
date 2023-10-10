import type { Config } from 'tailwindcss'

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
    },
    colors: {
      blue: "#345FF6",
      gunmetal:"#253347",
      darkElectricBlue:"#5E6E85",
    },
    borderColor: {
      grey:"#D8E2E7",
    },
    fontSize: {
      xl: "64px",
      l: "48px",
      m: "24px",
      s: "20px",
      bold: "16px"
    },
    lineHeight: {
      default: "70px"
    },
    fontFamily:{
      inter: ['Inter', 'sans-serif']
    }
  },
  plugins: [],
}
export default config
