import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { u as useServerFn } from "./useServerFn-DL2oePlL.mjs";
import { u as useQueryClient, c as useQuery, b as useMutation } from "../_libs/tanstack__react-query.mjs";
import { S as SiteHeader, B as Button, a as SiteFooter, l as createSsrRpc } from "./router-Dl0oPtZv.mjs";
import { r as requireSupabaseAuth } from "./auth-middleware-Cn61DVxk.mjs";
import { c as createServerFn } from "./server-CGdutTFm.mjs";
import { L as Label, I as Input } from "./label-BzsE0uIJ.mjs";
import { T as Textarea } from "./textarea-BXuwJmSW.mjs";
import { t as toast } from "../_libs/sonner.mjs";

import "../_libs/seroval.mjs";
import { o as objectType, s as stringType, l as literalType } from "../_libs/zod.mjs";

import "../_libs/tanstack__react-router.mjs";
import "../_libs/tanstack__router-core.mjs";
import "../_libs/tanstack__history.mjs";
import "../_libs/cookie-es.mjs";
import "../_libs/seroval-plugins.mjs";


import "../_libs/react-dom.mjs";
import "../_libs/isbot.mjs";
import "../_libs/tanstack__query-core.mjs";
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
import "../_libs/lucide-react.mjs";
import "../_libs/h3-v2.mjs";
import "../_libs/rou3.mjs";
import "../_libs/srvx.mjs";




import "./createMiddleware-BvN2ghIY.mjs";
import "../_libs/radix-ui__react-label.mjs";
const getMyProfile = createServerFn({
  method: "GET"
}).middleware([requireSupabaseAuth]).handler(createSsrRpc("5dbf46616266e7bfe81c82694a91090a42de6200b3efc1b9d156faf41ac3a479"));
const updateMyProfile = createServerFn({
  method: "POST"
}).middleware([requireSupabaseAuth]).inputValidator((d) => objectType({
  display_name: stringType().min(2).max(80),
  bio: stringType().max(500).optional().nullable(),
  avatar_url: stringType().url().optional().nullable().or(literalType("")),
  website_url: stringType().url().optional().nullable().or(literalType("")),
  twitter_handle: stringType().max(50).optional().nullable(),
  linkedin_url: stringType().url().optional().nullable().or(literalType("")),
  github_url: stringType().url().optional().nullable().or(literalType("")),
  location: stringType().max(100).optional().nullable()
}).parse(d)).handler(createSsrRpc("af00eb763dce352dc2f42ef901ef426a138feb40fdc7f79166552837a77fae5f"));
function Settings() {
  const get = useServerFn(getMyProfile);
  const upd = useServerFn(updateMyProfile);
  const qc = useQueryClient();
  const {
    data
  } = useQuery({
    queryKey: ["my-profile"],
    queryFn: () => get()
  });
  const p = data?.profile;
  const [form, setForm] = reactExports.useState({
    display_name: "",
    bio: "",
    avatar_url: "",
    website_url: "",
    twitter_handle: "",
    linkedin_url: "",
    github_url: "",
    location: ""
  });
  reactExports.useEffect(() => {
    if (p) setForm({
      display_name: p.display_name ?? "",
      bio: p.bio ?? "",
      avatar_url: p.avatar_url ?? "",
      website_url: p.website_url ?? "",
      twitter_handle: p.twitter_handle ?? "",
      linkedin_url: p.linkedin_url ?? "",
      github_url: p.github_url ?? "",
      location: p.location ?? ""
    });
  }, [p?.id]);
  const m = useMutation({
    mutationFn: (data2) => upd({
      data: data2
    }),
    onSuccess: () => {
      qc.invalidateQueries({
        queryKey: ["my-profile"]
      });
      toast.success("Saved");
    },
    onError: (e) => toast.error(e?.message ?? "Failed")
  });
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen flex flex-col bg-paper", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(SiteHeader, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("main", { className: "flex-1 max-w-2xl mx-auto px-6 py-10 w-full", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-serif text-4xl mb-1", children: "Profile settings" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-ink/50 mb-8 text-sm", children: "Your bio and links appear under every article you publish." }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { className: "space-y-5", onSubmit: (e) => {
        e.preventDefault();
        m.mutate(form);
      }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "mb-1.5 block", children: "Display name" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { value: form.display_name, onChange: (e) => setForm({
            ...form,
            display_name: e.target.value
          }), required: true })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Label, { className: "mb-1.5 block", children: [
            "Username ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-ink/40", children: "(can't change)" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { value: p?.username ?? "", readOnly: true, disabled: true })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "mb-1.5 block", children: "Avatar URL" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { value: form.avatar_url, onChange: (e) => setForm({
            ...form,
            avatar_url: e.target.value
          }) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "mb-1.5 block", children: "Bio" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Textarea, { value: form.bio, onChange: (e) => setForm({
            ...form,
            bio: e.target.value
          }), rows: 3, maxLength: 500 })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "mb-1.5 block", children: "Location" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { value: form.location, onChange: (e) => setForm({
            ...form,
            location: e.target.value
          }) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid md:grid-cols-2 gap-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "mb-1.5 block", children: "Website" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { value: form.website_url, onChange: (e) => setForm({
              ...form,
              website_url: e.target.value
            }), placeholder: "https://..." })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "mb-1.5 block", children: "Twitter handle" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { value: form.twitter_handle, onChange: (e) => setForm({
              ...form,
              twitter_handle: e.target.value
            }), placeholder: "@you" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "mb-1.5 block", children: "LinkedIn" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { value: form.linkedin_url, onChange: (e) => setForm({
              ...form,
              linkedin_url: e.target.value
            }), placeholder: "https://linkedin.com/in/..." })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "mb-1.5 block", children: "GitHub" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { value: form.github_url, onChange: (e) => setForm({
              ...form,
              github_url: e.target.value
            }), placeholder: "https://github.com/..." })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { type: "submit", disabled: m.isPending, className: "rounded-full bg-ink hover:bg-accent", children: "Save changes" })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(SiteFooter, {})
  ] });
}
export {
  Settings as component
};
