import { defineConfig } from "vite";
import uni from "@dcloudio/vite-plugin-uni";
// 加上下面这一行
import AutoImport from "unplugin-auto-import/vite";
import * as path from "path";

export default defineConfig({
	resolve: {
		alias: {
			"@": path.resolve("./src"),
		},
		extensions: [".js", ".json", ".vue"],
	},
	plugins: [
		uni(),
		// 加上下面的配置
		AutoImport({
			include: [
				/\.[tj]sx?$/, // .ts, .tsx, .js, .jsx
				/\.vue$/,
				/\.vue\?vue/, // .vue
			],
			imports: ["vue", "uni-app"],
			dts: "typings/auto-imports.d.ts",
		}),
	],
	server: {
		host: "0.0.0.0",
		port: 80,
		open: false,
	},
});
