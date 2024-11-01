import path from "path";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

export default defineConfig({
	plugins: [react()],
	resolve: {
		alias: {
			"@components": path.resolve(__dirname, "./src/components"),
			"@lib": path.resolve(__dirname, "./src/lib"),
			"@features": path.resolve(__dirname, "./src/features"),
			"@app": path.resolve(__dirname, "./src/app"),
			"@hooks": path.resolve(__dirname, "./src/hooks"),
			"@src": path.resolve(__dirname, "./src"),
		},
	},
});
