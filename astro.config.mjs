import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
    site: "https://yanchengzhao.com",
    integrations: [],

    prefetch: {
        prefetchAll: true, // prefetch every link, not just ones you tag
        defaultStrategy: "hover", // start fetching when the cursor hovers/focuses a link
    },

    vite: {
        plugins: [tailwindcss()],
    },
});
