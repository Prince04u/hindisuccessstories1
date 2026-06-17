import { c as createServerRpc } from "./createServerRpc-De8tHJPE.mjs";
import { r as requireSupabaseAuth } from "./auth-middleware-Cn61DVxk.mjs";
import { c as createServerFn } from "./server-CGdutTFm.mjs";

import "../_libs/seroval.mjs";
import "../_libs/react.mjs";
import { o as objectType, s as stringType, l as literalType } from "../_libs/zod.mjs";

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
import "./createMiddleware-BvN2ghIY.mjs";
import "../_libs/h3-v2.mjs";
import "../_libs/rou3.mjs";
import "../_libs/srvx.mjs";





import "../_libs/tanstack__router-core.mjs";
import "../_libs/tanstack__history.mjs";
import "../_libs/cookie-es.mjs";
import "../_libs/seroval-plugins.mjs";

import "../_libs/tanstack__react-router.mjs";
import "../_libs/react-dom.mjs";
import "../_libs/isbot.mjs";
const getMyProfile_createServerFn_handler = createServerRpc({
  id: "5dbf46616266e7bfe81c82694a91090a42de6200b3efc1b9d156faf41ac3a479",
  name: "getMyProfile",
  filename: "src/lib/profile.functions.ts"
}, (opts) => getMyProfile.__executeServer(opts));
const getMyProfile = createServerFn({
  method: "GET"
}).middleware([requireSupabaseAuth]).handler(getMyProfile_createServerFn_handler, async ({
  context
}) => {
  const {
    data
  } = await context.supabase.from("profiles").select("*").eq("id", context.userId).maybeSingle();
  const {
    data: roles
  } = await context.supabase.from("user_roles").select("role").eq("user_id", context.userId);
  return {
    profile: data,
    roles: (roles ?? []).map((r) => r.role)
  };
});
const updateMyProfile_createServerFn_handler = createServerRpc({
  id: "af00eb763dce352dc2f42ef901ef426a138feb40fdc7f79166552837a77fae5f",
  name: "updateMyProfile",
  filename: "src/lib/profile.functions.ts"
}, (opts) => updateMyProfile.__executeServer(opts));
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
}).parse(d)).handler(updateMyProfile_createServerFn_handler, async ({
  data,
  context
}) => {
  const clean = {
    ...data
  };
  Object.keys(clean).forEach((k) => clean[k] = clean[k] === "" ? null : clean[k]);
  const {
    error
  } = await context.supabase.from("profiles").update(clean).eq("id", context.userId);
  if (error) throw new Error(error.message);
  return {
    ok: true
  };
});
export {
  getMyProfile_createServerFn_handler,
  updateMyProfile_createServerFn_handler
};
