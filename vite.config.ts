// The shared TanStack/Vite preset already includes the following - do NOT add them manually
// or the app will break with duplicate plugins:
//   - tanstackStart, viteReact, tailwindcss, tsConfigPaths, nitro,
//     componentTagger, VITE_* env injection, @ path alias, React/TanStack dedupe,
//     error logger plugins, and sandbox detection.
// You can pass additional config via defineConfig({ vite: { ... }, etc... }) if needed.
import { defineConfig } from "@lovable.dev/vite-tanstack-config";

const pagesBase = process.env.GITHUB_PAGES === "true"
  ? "/ontario-college-of-family-physicians/"
  : "/";

export default defineConfig({
  vite: {
    base: pagesBase,
  },
  tanstackStart: {
    // Redirect TanStack Start's bundled server entry to src/server.ts.
    server: { entry: "server" },
  },
});
