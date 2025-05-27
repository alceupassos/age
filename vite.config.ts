
import { defineConfig } from 'vitest/config'; // Import defineConfig from vitest/config
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(),
    mode === 'development' &&
    componentTagger(),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  test: { // Add Vitest/Jest configuration
    globals: true, // Enable Jest global APIs
    environment: 'jsdom', // Set test environment to JSDOM
    setupFiles: './src/setupTests.ts', // Specify setup file
    // If you encounter issues with CSS imports in tests, you might need:
    // css: true, 
  },
}));

