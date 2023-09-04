import { c as create_ssr_component, e as escape, a as subscribe, v as validate_component } from "../../chunks/ssr.js";
import { t as title } from "../../chunks/config.js";
import { B as BROWSER, w as writable } from "../../chunks/index.js";
const browser = BROWSER;
const Footer_svelte_svelte_type_style_lang = "";
const css$4 = {
  code: "footer.svelte-k2ae0s{padding-block:var(--size-7);border-top:1px solid var(--border)}p.svelte-k2ae0s{color:var(--text-2)}",
  map: null
};
const Footer = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$4);
  return ` <footer class="svelte-k2ae0s"><p class="svelte-k2ae0s">${escape(title)} © ${escape((/* @__PURE__ */ new Date()).getFullYear())}</p> </footer>`;
});
const userTheme = browser;
const theme = writable(userTheme);
const Toggle_svelte_svelte_type_style_lang = "";
const css$3 = {
  code: "button.svelte-118bkwu.svelte-118bkwu{padding:0;font-weight:inherit;background:none;border:none;box-shadow:none;overflow:hidden}button.svelte-118bkwu>.svelte-118bkwu{display:flex;gap:var(--size-2)}",
  map: null
};
const Toggle = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $theme, $$unsubscribe_theme;
  $$unsubscribe_theme = subscribe(theme, (value) => $theme = value);
  $$result.css.add(css$3);
  $$unsubscribe_theme();
  return `<button aria-label="Toggle theme" class="svelte-118bkwu">${$theme === "dark" ? `<div class="svelte-118bkwu" data-svelte-h="svelte-uy5ah2"> <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-sun"><circle cx="12" cy="12" r="4"></circle><path d="M12 2v2"></path><path d="M12 20v2"></path><path d="m4.93 4.93 1.41 1.41"></path><path d="m17.66 17.66 1.41 1.41"></path><path d="M2 12h2"></path><path d="M20 12h2"></path><path d="m6.34 17.66-1.41 1.41"></path><path d="m19.07 4.93-1.41 1.41"></path></svg> <span>Light</span></div>` : `<div class="svelte-118bkwu" data-svelte-h="svelte-1efc049"> <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-moon"><path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"></path></svg> <span>Dark</span></div>`} </button>`;
});
const Header_svelte_svelte_type_style_lang = "";
const css$2 = {
  code: "nav.svelte-scea26{padding-block:var(--size-7)}.links.svelte-scea26{margin-block:var(--size-7)}a.svelte-scea26{color:inherit;text-decoration:none}@media(min-width: 768px){nav.svelte-scea26{display:flex;justify-content:space-between}.links.svelte-scea26{display:flex;gap:var(--size-7);margin-block:0}}",
  map: null
};
const Header = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$2);
  return `<nav class="svelte-scea26"> <a href="/" class="title svelte-scea26"><b>${escape(title)}</b></a>  <ul class="links svelte-scea26" data-svelte-h="svelte-n57lqe"><li><a href="/about" class="svelte-scea26">About</a></li> <li><a href="/contact" class="svelte-scea26">Contact</a></li>   </ul>  ${validate_component(Toggle, "Toggle").$$render($$result, {}, {}, {})} </nav>`;
});
const openProps_min = "";
const normalize_min = "";
const buttons_min = "";
const app = "";
const Transition_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: ".transition.svelte-18kqe58{height:100%}",
  map: null
};
const Transition = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { url = "" } = $$props;
  if ($$props.url === void 0 && $$bindings.url && url !== void 0)
    $$bindings.url(url);
  $$result.css.add(css$1);
  return `<div class="transition svelte-18kqe58">${slots.default ? slots.default({}) : ``}</div>`;
});
const _layout_svelte_svelte_type_style_lang = "";
const css = {
  code: ".layout.svelte-7ffmcz{height:100%;max-inline-size:1440px;display:grid;grid-template-rows:auto 1fr auto;margin-inline:auto;padding-inline:var(--size-7)}main.svelte-7ffmcz{padding-block:var(--size-9)}@media(min-width: 1440px){.layout.svelte-7ffmcz{padding-inline:0}}",
  map: null
};
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$result.css.add(css);
  return `<div class="layout svelte-7ffmcz"> ${validate_component(Header, "Header").$$render($$result, {}, {}, {})} <main class="svelte-7ffmcz">${validate_component(Transition, "PageTransition").$$render($$result, { url: data.url }, {}, {
    default: () => {
      return `${slots.default ? slots.default({}) : ``}`;
    }
  })}</main>  ${validate_component(Footer, "Footer").$$render($$result, {}, {}, {})} </div>`;
});
export {
  Layout as default
};
