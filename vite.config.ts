import { resolve } from "path";
import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react-swc";

const root = resolve(__dirname, "src");
const outDir = resolve(__dirname, "dist");

// https://vitejs.dev/config/
export default defineConfig(({ command, mode }) => {
  // Load env file based on `mode` in the current working directory.
  // Set the third parameter to '' to load all env regardless of the `VITE_` prefix.
  const env = loadEnv(mode, process.cwd(), "");
  return {
    // vite config
    root,
    build: {
      outDir,
      emptyOutDir: true,
      rollupOptions: {
        input: {
          main: resolve(root, "index.html"),
        },
      },
    },
    plugins: [react()],
    define: {
      __APP_ENV__: JSON.stringify(env.APP_ENV),
    },
  };
});
