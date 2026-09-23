import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

// https://vite.dev/config/
export default defineConfig({
	base: "/CurlysCarpentry/", // must match your repo name exactly
	plugins: [react()],
});
