import { defineConfig } from "cypress";

export default defineConfig({
  component: {
    devServer: {
      framework: "vue",
      bundler: "vite",
    },
  },
  reporter: 'reporters/custom.js',

  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
