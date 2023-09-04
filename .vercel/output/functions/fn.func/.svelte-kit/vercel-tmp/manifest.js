export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png"]),
	mimeTypes: {".png":"image/png"},
	_: {
		client: {"start":"_app/immutable/entry/start.4979f786.js","app":"_app/immutable/entry/app.f4ae8b7f.js","imports":["_app/immutable/entry/start.4979f786.js","_app/immutable/chunks/scheduler.934c1f23.js","_app/immutable/chunks/singletons.74f58a43.js","_app/immutable/chunks/index.c369590d.js","_app/immutable/chunks/control.f5b05b5f.js","_app/immutable/entry/app.f4ae8b7f.js","_app/immutable/chunks/preload-helper.a4192956.js","_app/immutable/chunks/scheduler.934c1f23.js","_app/immutable/chunks/index.9e7b4402.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			__memo(() => import('../output/server/nodes/0.js')),
			__memo(() => import('../output/server/nodes/1.js'))
		],
		routes: [
			
		],
		matchers: async () => {
			
			return {  };
		}
	}
}
})();
