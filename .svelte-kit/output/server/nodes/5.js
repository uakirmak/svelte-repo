

export const index = 5;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/quiz/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/5.Dhr6RFYH.js","_app/immutable/chunks/scheduler.Ce_0Mfso.js","_app/immutable/chunks/index.Cc7T5gXE.js"];
export const stylesheets = ["_app/immutable/assets/5.-Zu569Aj.css"];
export const fonts = [];
