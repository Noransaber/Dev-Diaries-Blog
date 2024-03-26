import flowbitePlugin from 'flowbite/plugin';
import tailwindScrollbar from 'tailwind-scrollbar';
import lineClamp from '@tailwindcss/line-clamp'; // Add import statement for lineClamp
/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}', './src/pages/**/*.{js,ts,jsx,tsx}', './src/components/**/*.{js,ts,jsx,tsx}', 'node_modules/flowbite-react/lib/esm/**/*.js'],
  theme: {
    extend: {},
  },
  plugins: [flowbitePlugin, tailwindScrollbar, lineClamp], // Update plugins array
};
