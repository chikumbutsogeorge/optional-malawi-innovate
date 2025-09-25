import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  base: "/",
  server: {
    host: "::",
    port: 8000,
    // Proxy backend PHP during local development so Vite doesn't serve .php files as static text
    proxy: {
      '/server': 'http://127.0.0.1:8080'
    },
  },
  plugins: [react(), mode === "development" && componentTagger()].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    outDir: "dist",
    sourcemap: true,
    assetsDir: "assets",
    rollupOptions: {
        // Treat some optional packages as external to avoid hard build failures
        external: [
          '@radix-ui/react-icons'
        ],
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom', 'react-router-dom'],
          ui: ['lucide-react', '@radix-ui/react-dialog', '@radix-ui/react-slot', '@radix-ui/react-toast'],
          animations: ['framer-motion', '@react-spring/web'],
          query: ['@tanstack/react-query']
        }
      }
    }
  }
}));
