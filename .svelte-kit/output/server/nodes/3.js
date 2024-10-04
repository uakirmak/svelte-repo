

export const index = 3;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/about/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/3.6JNuMt2a.js","_app/immutable/chunks/scheduler.Ce_0Mfso.js","_app/immutable/chunks/index.DBSdQAmt.js"];
export const stylesheets = [];
export const fonts = [];
