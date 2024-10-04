import * as universal from '../entries/pages/_layout.js';

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+layout.js";
export const imports = ["_app/immutable/nodes/0.CGjnj_9w.js","_app/immutable/chunks/scheduler.Ce_0Mfso.js","_app/immutable/chunks/index.Cc7T5gXE.js"];
export const stylesheets = ["_app/immutable/assets/0.DJBKFdjl.css"];
export const fonts = [];
