// tailwind.config.js
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Include JavaScript and TypeScript files in your source directory
    "./node_modules/flowbite/**/*.js", // Include JavaScript files from the 'flowbite' module
  ],
  theme: {
    extend: {
      // You can extend the Tailwind CSS theme here if needed
    },
  },
  plugins: [
    require('flowbite/plugin'), // Ensure that the 'flowbite' plugin is installed
  ],
};
