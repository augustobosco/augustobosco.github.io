import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: vitePreprocess(),

	kit: {
		adapter: adapter(),

		// ============================================================
		// PRERENDER DE VERSIONES MULTIIDIOMA
		// ============================================================
		// '*' mantiene las URLs inglesas actuales.
		//
		// Las rutas japonesas se declaran explícitamente para que
		// adapter-static genere sus archivos HTML durante el build.
		prerender: {
			entries: [
				'*',
				'/ja',
				'/ja/about',
				'/ja/media',
				'/ja/contact'
			]
		}
	}
};

export default config;