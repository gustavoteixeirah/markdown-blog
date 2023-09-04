

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.51687b1c.js","_app/immutable/chunks/scheduler.934c1f23.js","_app/immutable/chunks/index.9e7b4402.js","_app/immutable/chunks/singletons.74f58a43.js","_app/immutable/chunks/index.c369590d.js"];
export const stylesheets = ["_app/immutable/assets/1.85e19638.css"];
export const fonts = [];
