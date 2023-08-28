/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors:{
      'title-highlight': '#8B8B91',
      'light-grey': '#8491A0',
      'dark': '#181823',
      'dark-grey': '#5B6876',
      'active-purple': '#5221E6',
      'black': '#000000',
      'blue-text': '#609BFF',
      'pink-text': '#E95D90',
      'grey': '#252525',
      'active-grey': '#414141'
    },
    extend: {},
  },
  plugins: [],
}

