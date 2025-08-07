import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    // port: 5174, // Replace with your desired port number
    proxy: {
      "/api": {
        target: "https://gev-cvri.onrender.com/", // Replace with your backend API URL
        changeOrigin: true, // Needed for virtual hosted sites
        rewrite: (path) => path.replace(/^\/api/, ""), // Remove '/api' prefix when forwarding
      },
    },
  },
});
