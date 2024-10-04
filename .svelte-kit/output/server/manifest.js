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
		client: {"start":"_app/immutable/entry/start.33WR6rgQ.js","app":"_app/immutable/entry/app.OITDHhtz.js","imports":["_app/immutable/entry/start.33WR6rgQ.js","_app/immutable/chunks/entry.aPvLRqI-.js","_app/immutable/chunks/scheduler.Ce_0Mfso.js","_app/immutable/entry/app.OITDHhtz.js","_app/immutable/chunks/scheduler.Ce_0Mfso.js","_app/immutable/chunks/index.DBSdQAmt.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js'))
		],
		routes: [
			
		],
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();
