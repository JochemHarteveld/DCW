import adapter from '@sveltejs/adapter-static';

const dev = process.env.NODE_ENV === "development";


/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter({
			pages: "docs",
			assets: "docs",
			fallback: "index.html",
			precompress: false
		}),
		trailingSlash: 'always',
		paths: {
			base: dev ? "" : "/DCW",
		},
		prerender: { entries: []}
	}
};

export default config;
