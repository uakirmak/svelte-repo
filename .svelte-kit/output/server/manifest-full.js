export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "svelte-repo/_app",
	assets: new Set([".nojekyll","favicon.png","hero-img.webp","logo.png"]),
	mimeTypes: {".png":"image/png",".webp":"image/webp"},
	_: {
		client: {"start":"_app/immutable/entry/start.ztt4IBG2.js","app":"_app/immutable/entry/app.Cb9ZT8CM.js","imports":["_app/immutable/entry/start.ztt4IBG2.js","_app/immutable/chunks/entry.fKKOnnkl.js","_app/immutable/chunks/scheduler.Ce_0Mfso.js","_app/immutable/entry/app.Cb9ZT8CM.js","_app/immutable/chunks/scheduler.Ce_0Mfso.js","_app/immutable/chunks/index.Cc7T5gXE.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/2.js')),
			__memo(() => import('./nodes/3.js')),
			__memo(() => import('./nodes/4.js')),
			__memo(() => import('./nodes/5.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			},
			{
				id: "/about",
				pattern: /^\/about\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 3 },
				endpoint: null
			},
			{
				id: "/contact",
				pattern: /^\/contact\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 4 },
				endpoint: null
			},
			{
				id: "/quiz",
				pattern: /^\/quiz\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 5 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();
