import adapter from '@sveltejs/adapter-auto';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import { mdsvex } from "mdsvex"; 

const mdsvexOptions = {
	extensions: ['.md',".svx",".mdx"],
}	

/** @type {import('@sveltejs/kit').Config} */
const config = {

	extensions: ['.svelte', '.svx','.md'],
	preprocess: [vitePreprocess(), mdsvex(mdsvexOptions)],

	kit: {
		adapter: adapter()
	}
};

export default config;
