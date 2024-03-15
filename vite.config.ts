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
    //   rollupOptions: {
    //     input: {
    //       main: resolve(root, "index.html"),
    //       product: resolve(__dirname, 'product/index.html'),
    //       shoppingCart: resolve(__dirname, 'shoppingCart/index.html'),
    //       checkout: resolve(__dirname, 'checkout/index.html'),
    //     },
    // },
  },
  plugins: [react()],
});
