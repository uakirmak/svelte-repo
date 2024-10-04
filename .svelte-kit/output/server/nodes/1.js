

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.D2jiNoM0.js","_app/immutable/chunks/scheduler.Ce_0Mfso.js","_app/immutable/chunks/index.Cc7T5gXE.js","_app/immutable/chunks/entry.fKKOnnkl.js"];
export const stylesheets = [];
export const fonts = [];
