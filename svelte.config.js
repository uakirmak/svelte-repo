import adapter from "@sveltejs/adapter-static";

export default {
  kit: {
    adapter: adapter({
      pages: "docs", // Output directory for GitHub Pages
      assets: "docs",
      fallback: null,
    }),
    paths: {
      base: "/svelte-repo", // Base path for GitHub Pages
      relative: true, // Explicitly set to `false` for absolute paths
    },
  },
};
