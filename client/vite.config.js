import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
    server: {
        port: 80
    },
    preview: {
        port: 80
    },	
	plugins: [sveltekit()]
});