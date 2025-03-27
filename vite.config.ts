import { defineConfig, UserConfig } from "vite";
import react from "@vitejs/plugin-react";

const config: UserConfig = {
	plugins: [react()],
	server: {
		port: 3000,
		proxy: {
			"/api": {
				target: "http://localhost:8000",
				changeOrigin: true,
				secure: false,
			},
		},
	},
};

export default defineConfig(config);
