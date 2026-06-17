import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { u as useServerFn } from "./useServerFn-DL2oePlL.mjs";
import { s as submitGuestPost, S as SiteHeader, B as Button, a as SiteFooter } from "./router-Dl0oPtZv.mjs";
import { L as Label, I as Input } from "./label-BzsE0uIJ.mjs";
import { T as Textarea } from "./textarea-BXuwJmSW.mjs";
import { t as toast } from "../_libs/sonner.mjs";

import "../_libs/seroval.mjs";
import { b as Check } from "../_libs/lucide-react.mjs";

import "../_libs/tanstack__react-router.mjs";
import "../_libs/tanstack__router-core.mjs";
import "../_libs/tanstack__history.mjs";
import "../_libs/cookie-es.mjs";
import "../_libs/seroval-plugins.mjs";


import "../_libs/react-dom.mjs";
import "../_libs/isbot.mjs";
import "../_libs/tanstack__query-core.mjs";
import "../_libs/tanstack__react-query.mjs";
import "./client-BbevmGls.mjs";
import "../_libs/supabase__supabase-js.mjs";
import "../_libs/supabase__postgrest-js.mjs";
import "../_libs/supabase__realtime-js.mjs";
import "../_libs/unenv.mjs";


import "../_libs/supabase__phoenix.mjs";
import "../_libs/supabase__storage-js.mjs";
import "../_libs/iceberg-js.mjs";
import "../_libs/supabase__auth-js.mjs";
import "../_libs/tslib.mjs";
import "../_libs/supabase__functions-js.mjs";
import "../_libs/radix-ui__react-slot.mjs";
import "../_libs/radix-ui__react-compose-refs.mjs";
import "../_libs/class-variance-authority.mjs";
import "../_libs/clsx.mjs";
import "../_libs/tailwind-merge.mjs";
import "../_libs/radix-ui__react-dropdown-menu.mjs";
import "../_libs/radix-ui__primitive.mjs";
import "../_libs/radix-ui__react-context.mjs";
import "../_libs/@radix-ui/react-use-controllable-state+[...].mjs";
import "../_libs/@radix-ui/react-use-layout-effect+[...].mjs";
import "../_libs/radix-ui__react-primitive.mjs";
import "../_libs/radix-ui__react-menu.mjs";
import "../_libs/radix-ui__react-collection.mjs";
import "../_libs/radix-ui__react-direction.mjs";
import "../_libs/@radix-ui/react-dismissable-layer+[...].mjs";
import "../_libs/@radix-ui/react-use-callback-ref+[...].mjs";
import "../_libs/@radix-ui/react-use-escape-keydown+[...].mjs";
import "../_libs/radix-ui__react-focus-guards.mjs";
import "../_libs/radix-ui__react-focus-scope.mjs";
import "../_libs/radix-ui__react-popper.mjs";
import "../_libs/floating-ui__react-dom.mjs";
import "../_libs/floating-ui__dom.mjs";
import "../_libs/floating-ui__core.mjs";
import "../_libs/floating-ui__utils.mjs";
import "../_libs/radix-ui__react-arrow.mjs";
import "../_libs/radix-ui__react-use-size.mjs";
import "../_libs/radix-ui__react-portal.mjs";
import "../_libs/radix-ui__react-presence.mjs";
import "../_libs/radix-ui__react-roving-focus.mjs";
import "../_libs/radix-ui__react-id.mjs";
import "../_libs/aria-hidden.mjs";
import "../_libs/react-remove-scroll.mjs";
import "../_libs/react-remove-scroll-bar.mjs";
import "../_libs/react-style-singleton.mjs";
import "../_libs/get-nonce.mjs";
import "../_libs/use-sidecar.mjs";
import "../_libs/use-callback-ref.mjs";
import "../_libs/radix-ui__react-avatar.mjs";
import "../_libs/@radix-ui/react-use-is-hydrated+[...].mjs";
import "../_libs/use-sync-external-store.mjs";
import "./server-CGdutTFm.mjs";
import "../_libs/h3-v2.mjs";
import "../_libs/rou3.mjs";
import "../_libs/srvx.mjs";




import "./auth-middleware-Cn61DVxk.mjs";
import "./createMiddleware-BvN2ghIY.mjs";
import "../_libs/zod.mjs";
import "../_libs/radix-ui__react-label.mjs";
const TIERS = [{
  id: "standard",
  name: "Standard",
  price: 49,
  perks: ["1 dofollow author backlink", "Standard placement", "Published within 7 days"]
}, {
  id: "featured",
  name: "Featured",
  price: 99,
  perks: ["Up to 2 contextual dofollow links", "Featured for 7 days", "Newsletter inclusion", "Published within 3 days"]
}, {
  id: "premium",
  name: "Premium",
  price: 199,
  perks: ["Up to 3 contextual dofollow links", "Permanent featured tag", "Newsletter + social push", "Published within 24h"]
}];
function Submit() {
  const sub = useServerFn(submitGuestPost);
  const [busy, setBusy] = reactExports.useState(false);
  const [tier, setTier] = reactExports.useState("featured");
  const [form, setForm] = reactExports.useState({
    name: "",
    email: "",
    website_url: "",
    proposed_title: "",
    pitch: "",
    draft_content: ""
  });
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen flex flex-col bg-paper", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(SiteHeader, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("main", { className: "flex-1 max-w-4xl mx-auto px-6 py-12 w-full", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("header", { className: "text-center mb-12", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[11px] font-bold uppercase tracking-widest text-accent mb-3", children: "For Brands & Writers" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-serif text-5xl mb-4", children: "Place a story on HSS" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-lg text-ink/60 max-w-2xl mx-auto", children: "Reach our audience of founders, creators and readers across India. All placements include contextual author backlinks." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid md:grid-cols-3 gap-4 mb-12", children: TIERS.map((t) => /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { type: "button", onClick: () => setTier(t.id), className: `text-left rounded-2xl border-2 p-6 transition-all ${tier === t.id ? "border-accent bg-accent/5" : "border-ink/10 hover:border-ink/30"}`, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm font-bold uppercase tracking-widest mb-2", children: t.name }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "font-serif text-4xl mb-4", children: [
          "$",
          t.price
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "space-y-1.5 text-sm text-ink/70", children: t.perks.map((p) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Check, { className: "size-4 text-accent shrink-0 mt-0.5" }),
          " ",
          p
        ] }, p)) })
      ] }, t.id)) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit: async (e) => {
        e.preventDefault();
        setBusy(true);
        try {
          await sub({
            data: {
              ...form,
              tier
            }
          });
          toast.success("Pitch submitted! We'll email you a payment link shortly.");
          setForm({
            name: "",
            email: "",
            website_url: "",
            proposed_title: "",
            pitch: "",
            draft_content: ""
          });
        } catch (err) {
          toast.error(err?.message ?? "Failed");
        } finally {
          setBusy(false);
        }
      }, className: "border rounded-2xl p-8 space-y-5 bg-card", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid md:grid-cols-2 gap-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "mb-1.5 block", children: "Your name" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { required: true, value: form.name, onChange: (e) => setForm({
              ...form,
              name: e.target.value
            }) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "mb-1.5 block", children: "Email" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { type: "email", required: true, value: form.email, onChange: (e) => setForm({
              ...form,
              email: e.target.value
            }) })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "mb-1.5 block", children: "Website (optional)" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { type: "url", value: form.website_url, onChange: (e) => setForm({
            ...form,
            website_url: e.target.value
          }), placeholder: "https://yourbrand.com" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "mb-1.5 block", children: "Proposed title" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { required: true, value: form.proposed_title, onChange: (e) => setForm({
            ...form,
            proposed_title: e.target.value
          }) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "mb-1.5 block", children: "Pitch (min 20 chars)" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Textarea, { required: true, minLength: 20, rows: 4, value: form.pitch, onChange: (e) => setForm({
            ...form,
            pitch: e.target.value
          }), placeholder: "What's the angle, who is it for, why now?" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "mb-1.5 block", children: "Draft content (optional, markdown)" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Textarea, { rows: 6, value: form.draft_content, onChange: (e) => setForm({
            ...form,
            draft_content: e.target.value
          }) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { type: "submit", disabled: busy, className: "w-full rounded-full bg-ink hover:bg-accent", children: [
          "Submit ",
          TIERS.find((t) => t.id === tier)?.name,
          " pitch ($",
          TIERS.find((t) => t.id === tier)?.price,
          ")"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-ink/50 text-center", children: "Payment processing will be enabled by an admin. No charge yet." })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(SiteFooter, {})
  ] });
}
export {
  Submit as component
};
