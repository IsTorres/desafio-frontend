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
        product: resolve(root, "pages/product/index.html"),
        shopping_cart: resolve(root, "pages/shopping-cart/index.html"),
        checkout: resolve(root, "pages/checkout/index.html"),
        //outher pages -> pageName: resolve(root, 'page-path/index.html'),
      },
    },
  },
  plugins: [react()],
});
