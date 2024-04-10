/** @type {import('tailwindcss').Config} */
export const content = ["./src/**/*.{html,js,jsx}"]
export const theme = {
  extend: {
    height: {
      "calc-full-minus-60": "calc(100vh-60px)",
    },
  },
}
export const plugins = []
