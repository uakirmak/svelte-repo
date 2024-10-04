import { c as create_ssr_component, e as escape, v as validate_component } from "../../chunks/ssr.js";
const css$2 = {
  code: ".header-container.svelte-19b3zv1.svelte-19b3zv1{display:flex;flex-direction:column;align-items:center}.logo.svelte-19b3zv1.svelte-19b3zv1{max-width:100px}.nav.svelte-19b3zv1 ul.svelte-19b3zv1{display:flex;list-style-type:none;padding:0}.nav.svelte-19b3zv1 ul li.svelte-19b3zv1{margin:0 1rem}@media(min-width: 768px){.header-container.svelte-19b3zv1.svelte-19b3zv1{flex-direction:row;justify-content:space-between}}",
  map: '{"version":3,"file":"Header.svelte","sources":["Header.svelte"],"sourcesContent":["<header class=\\"header\\">\\n\\t<div class=\\"header-container\\">\\n\\t\\t<img src=\\"./logo.png\\" alt=\\"logo\\" class=\\"logo\\" />\\n\\t\\t<nav class=\\"nav\\">\\n\\t\\t\\t<ul>\\n\\t\\t\\t\\t<li><a href=\\"./\\">Home</a></li>\\n\\t\\t\\t\\t<li><a href=\\"./about\\">About</a></li>\\n\\t\\t\\t\\t<li><a href=\\"./contact\\">Contact</a></li>\\n\\t\\t\\t</ul>\\n\\t\\t</nav>\\n\\t</div>\\n</header>\\n\\n<style>\\n\\t.header-container {\\n\\t\\tdisplay: flex;\\n\\t\\tflex-direction: column;\\n\\t\\talign-items: center;\\n\\t}\\n\\n\\t.logo {\\n\\t\\tmax-width: 100px;\\n\\t}\\n\\n\\t.nav ul {\\n\\t\\tdisplay: flex;\\n\\t\\tlist-style-type: none;\\n\\t\\tpadding: 0;\\n\\t}\\n\\n\\t.nav ul li {\\n\\t\\tmargin: 0 1rem;\\n\\t}\\n\\n\\t@media (min-width: 768px) {\\n\\t\\t.header-container {\\n\\t\\t\\tflex-direction: row;\\n\\t\\t\\tjustify-content: space-between;\\n\\t\\t}\\n\\t}\\n</style>\\n"],"names":[],"mappings":"AAcC,+CAAkB,CACjB,OAAO,CAAE,IAAI,CACb,cAAc,CAAE,MAAM,CACtB,WAAW,CAAE,MACd,CAEA,mCAAM,CACL,SAAS,CAAE,KACZ,CAEA,mBAAI,CAAC,iBAAG,CACP,OAAO,CAAE,IAAI,CACb,eAAe,CAAE,IAAI,CACrB,OAAO,CAAE,CACV,CAEA,mBAAI,CAAC,EAAE,CAAC,iBAAG,CACV,MAAM,CAAE,CAAC,CAAC,IACX,CAEA,MAAO,YAAY,KAAK,CAAE,CACzB,+CAAkB,CACjB,cAAc,CAAE,GAAG,CACnB,eAAe,CAAE,aAClB,CACD"}'
};
const Header = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$2);
  return `<header class="header" data-svelte-h="svelte-1te3skg"><div class="header-container svelte-19b3zv1"><img src="./logo.png" alt="logo" class="logo svelte-19b3zv1"> <nav class="nav svelte-19b3zv1"><ul class="svelte-19b3zv1"><li class="svelte-19b3zv1"><a href="./">Home</a></li> <li class="svelte-19b3zv1"><a href="./about">About</a></li> <li class="svelte-19b3zv1"><a href="./contact">Contact</a></li></ul></nav></div> </header>`;
});
const css$1 = {
  code: ".footer.svelte-a8bun7{text-align:center;padding:1rem;background-color:#f8f9fa;color:#333;margin-bottom:2rem}",
  map: `{"version":3,"file":"Footer.svelte","sources":["Footer.svelte"],"sourcesContent":["<script>\\n\\tconst now = new Date();\\n\\tconst options = {\\n\\t\\tweekday: 'long',\\n\\t\\tyear: 'numeric',\\n\\t\\tmonth: 'long',\\n\\t\\tday: 'numeric'\\n\\t};\\n\\tconst currentDateTime = now.toLocaleString('en-CA', options);\\n<\/script>\\n\\n<footer class=\\"footer\\">\\n\\t<p>&copy; EasyPath</p>\\n\\n\\t<p>{currentDateTime}</p>\\n</footer>\\n\\n<style>\\n\\t.footer {\\n\\t\\ttext-align: center;\\n\\t\\tpadding: 1rem;\\n\\t\\tbackground-color: #f8f9fa;\\n\\t\\tcolor: #333;\\n\\t\\tmargin-bottom: 2rem;\\n\\t}\\n</style>\\n"],"names":[],"mappings":"AAkBC,qBAAQ,CACP,UAAU,CAAE,MAAM,CAClB,OAAO,CAAE,IAAI,CACb,gBAAgB,CAAE,OAAO,CACzB,KAAK,CAAE,IAAI,CACX,aAAa,CAAE,IAChB"}`
};
const Footer = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const now = /* @__PURE__ */ new Date();
  const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric"
  };
  const currentDateTime = now.toLocaleString("en-CA", options);
  $$result.css.add(css$1);
  return `<footer class="footer svelte-a8bun7"><p data-svelte-h="svelte-a9vmb1">© EasyPath</p> <p>${escape(currentDateTime)}</p> </footer>`;
});
const css = {
  code: ".layout-wrapper.svelte-jjjir6{display:flex;flex-direction:column;min-height:100vh;padding:1rem;max-width:1000px;margin:2rem auto;width:100%}.main-content.svelte-jjjir6{flex-grow:1;padding:2rem;margin:2rem auto;max-width:1200px;width:100%}",
  map: `{"version":3,"file":"+layout.svelte","sources":["+layout.svelte"],"sourcesContent":["<script>\\n\\timport '../app.css';\\n\\timport Header from '$lib/Header.svelte';\\n\\timport Footer from '$lib/Footer.svelte';\\n<\/script>\\n\\n<div class=\\"layout-wrapper\\">\\n\\t<!-- Header Component -->\\n\\t<Header />\\n\\n\\t<!-- Main Content Area -->\\n\\t<main class=\\"main-content\\">\\n\\t\\t<slot />\\n\\t</main>\\n\\n\\t<!-- Footer Component -->\\n\\t<Footer />\\n</div>\\n\\n<style>\\n\\t.layout-wrapper {\\n\\t\\tdisplay: flex;\\n\\t\\tflex-direction: column;\\n\\t\\tmin-height: 100vh;\\n\\t\\tpadding: 1rem;\\n\\t\\tmax-width: 1000px;\\n\\t\\tmargin: 2rem auto;\\n\\t\\twidth: 100%;\\n\\t}\\n\\n\\t.main-content {\\n\\t\\tflex-grow: 1;\\n\\t\\tpadding: 2rem;\\n\\t\\tmargin: 2rem auto;\\n\\t\\tmax-width: 1200px;\\n\\t\\twidth: 100%;\\n\\t}\\n</style>\\n"],"names":[],"mappings":"AAoBC,6BAAgB,CACf,OAAO,CAAE,IAAI,CACb,cAAc,CAAE,MAAM,CACtB,UAAU,CAAE,KAAK,CACjB,OAAO,CAAE,IAAI,CACb,SAAS,CAAE,MAAM,CACjB,MAAM,CAAE,IAAI,CAAC,IAAI,CACjB,KAAK,CAAE,IACR,CAEA,2BAAc,CACb,SAAS,CAAE,CAAC,CACZ,OAAO,CAAE,IAAI,CACb,MAAM,CAAE,IAAI,CAAC,IAAI,CACjB,SAAS,CAAE,MAAM,CACjB,KAAK,CAAE,IACR"}`
};
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<div class="layout-wrapper svelte-jjjir6"> ${validate_component(Header, "Header").$$render($$result, {}, {}, {})}  <main class="main-content svelte-jjjir6">${slots.default ? slots.default({}) : ``}</main>  ${validate_component(Footer, "Footer").$$render($$result, {}, {}, {})} </div>`;
});
export {
  Layout as default
};
