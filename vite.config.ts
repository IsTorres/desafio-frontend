import { resolve } from "path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

const root = resolve(__dirname, "src");
const outDir = resolve(__dirname, "dist");

// https://vitejs.dev/config/
export default defineConfig({
  root,
  build: {
    outDir,
    emptyOutDir: true,
    rollupOptions: {
      input: {
        main: resolve(root, "index.html"),
        product: resolve(root, "product", "index.html"),
        //outher pages -> pageName: resolve(root, 'pageName', 'index.html'),
      },
    },
  },
  plugins: [react()],
});
