module.exports = {
  content: [
    './src/**/*.{astro,html,js,jsx,ts,tsx,vue}', // O ajusta según tu estructura
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/typography'), // Agregar el plugin Typography
  ],
};
