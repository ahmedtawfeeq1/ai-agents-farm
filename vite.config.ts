import path from "path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import Pages from "vite-plugin-pages";

export default defineConfig({
  plugins: [react(), Pages()],
  base: "/", // Root path for a custom domain
  build: {
    outDir: "dist", // Use "dist" for output when hosting on a custom domain
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"), // Resolve "@" as the "src" directory
    },
  },
  server: {
    port: 5173, // Local development port
    open: true, // Automatically opens the browser
  },
});


// CODE TO HOST ON GITHUB PAGES

// import path from "path";
// import { defineConfig } from "vite";
// import react from "@vitejs/plugin-react-swc";
// import Pages from "vite-plugin-pages";
// import getRepoName from "git-repo-name";

// export default defineConfig(({ command, mode }) => {
//     const isGitHubPages = mode === 'github-pages'
//     const base = isGitHubPages ? `/${getRepoName.sync()}/` : '/'
  
//     return {
//       plugins: [react(), Pages()],
//       base: base,
//       build: {
//         outDir: isGitHubPages ? 'dist-github' : 'dist'
//       },
//       resolve: {
//         alias: {
//           "@": path.resolve(__dirname, "./src"),
//         },
//       },
//     }
//   })