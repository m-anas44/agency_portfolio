<<<<<<<<< Temporary merge branch 1
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path'; // Import the path module
=========
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
>>>>>>>>> Temporary merge branch 2

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
<<<<<<<<< Temporary merge branch 1
      '@': path.resolve(__dirname, './src'), // Add alias for `@` to point to `src`
=========
      "@": path.resolve(__dirname, "./src"),
>>>>>>>>> Temporary merge branch 2
    },
  },
});
