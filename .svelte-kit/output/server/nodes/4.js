

export const index = 4;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/contact/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/4.Cu-rsiQ5.js","_app/immutable/chunks/scheduler.Ce_0Mfso.js","_app/immutable/chunks/index.Cc7T5gXE.js"];
export const stylesheets = ["_app/immutable/assets/4.CxKqNnNp.css"];
export const fonts = [];
