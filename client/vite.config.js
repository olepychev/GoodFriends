import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

// import { fileURLToPath, URL } from 'node:url'

export default defineConfig({
	plugins: [sveltekit()],
	test: {
		include: ['src/**/*.{test,spec}.{js,ts}']
	},
	// resolve: {
	// 	alias: {
	// 	  'imgs': fileURLToPath(new URL('./src/assets/imgs', import.meta.url))
	// 	}
	//   }
});
