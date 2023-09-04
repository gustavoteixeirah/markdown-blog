import * as universal from '../entries/pages/_layout.js';

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+layout.js";
export const imports = ["_app/immutable/nodes/0.da167a54.js","_app/immutable/chunks/scheduler.934c1f23.js","_app/immutable/chunks/index.9e7b4402.js","_app/immutable/chunks/config.7e8d42f2.js","_app/immutable/chunks/index.c369590d.js"];
export const stylesheets = ["_app/immutable/assets/0.0bd523a1.css"];
export const fonts = ["_app/immutable/assets/manrope-cyrillic-400-normal.f0b06df6.woff2","_app/immutable/assets/manrope-cyrillic-400-normal.394592f7.woff","_app/immutable/assets/manrope-greek-400-normal.4e4ac432.woff2","_app/immutable/assets/manrope-greek-400-normal.d2196015.woff","_app/immutable/assets/manrope-vietnamese-400-normal.f6db16a3.woff2","_app/immutable/assets/manrope-vietnamese-400-normal.386ab594.woff","_app/immutable/assets/manrope-latin-ext-400-normal.b1e1ff2c.woff2","_app/immutable/assets/manrope-latin-ext-400-normal.7fb28c2f.woff","_app/immutable/assets/manrope-latin-400-normal.87b933c1.woff2","_app/immutable/assets/manrope-latin-400-normal.b90aafb6.woff","_app/immutable/assets/jetbrains-mono-cyrillic-400-normal.9f48e746.woff2","_app/immutable/assets/jetbrains-mono-cyrillic-400-normal.9fbeb3ad.woff","_app/immutable/assets/jetbrains-mono-greek-400-normal.4e44607d.woff2","_app/immutable/assets/jetbrains-mono-greek-400-normal.f95fabcf.woff","_app/immutable/assets/jetbrains-mono-vietnamese-400-normal.42e6680f.woff","_app/immutable/assets/jetbrains-mono-latin-ext-400-normal.a6e389bf.woff2","_app/immutable/assets/jetbrains-mono-latin-ext-400-normal.3087ce38.woff","_app/immutable/assets/jetbrains-mono-latin-400-normal.7c53386f.woff2","_app/immutable/assets/jetbrains-mono-latin-400-normal.f1ba9869.woff"];
