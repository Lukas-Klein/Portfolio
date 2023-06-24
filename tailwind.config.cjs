const config = {
  content: [
    "./src/**/*.{html,js,svelte,ts}",
    "./node_modules/flowbite-svelte/**/*.{html,js,svelte,ts}",
  ],

  plugins: [
    require('flowbite/plugin')
  ],

  darkMode: 'class',

  theme: {
    extend: {
      colors: {
        // emerald
        primary: {"50":"#ecfdf5","100":"#d1fae5","200":"#a7f3d0","300":"#6ee7b7","400":"#34d399","500":"#10b981","600":"#059669","700":"#047857","800":"#065f46","900":"#064e3b"}
}
    }
  }
};

module.exports = config;