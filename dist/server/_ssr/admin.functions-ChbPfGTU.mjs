import { c as createServerRpc } from "./createServerRpc-De8tHJPE.mjs";
import { r as requireSupabaseAuth } from "./auth-middleware-Cn61DVxk.mjs";
import { c as createServerFn } from "./server-CGdutTFm.mjs";

import "../_libs/seroval.mjs";
import "../_libs/react.mjs";
import { o as objectType, s as stringType, e as enumType, b as booleanType } from "../_libs/zod.mjs";

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
async function ensureAdmin(supabase, userId) {
  const {
    data
  } = await supabase.rpc("has_role", {
    _user_id: userId,
    _role: "admin"
  });
  if (!data) throw new Error("Forbidden");
}
const adminDashboard_createServerFn_handler = createServerRpc({
  id: "9ff7ac682d569ace29ac9f4c109dfff01a123caf2fc3a87d7b131f0a854906ad",
  name: "adminDashboard",
  filename: "src/lib/admin.functions.ts"
}, (opts) => adminDashboard.__executeServer(opts));
const adminDashboard = createServerFn({
  method: "GET"
}).middleware([requireSupabaseAuth]).handler(adminDashboard_createServerFn_handler, async ({
  context
}) => {
  await ensureAdmin(context.supabase, context.userId);
  const [{
    count: usersCount
  }, {
    count: articlesCount
  }, {
    count: pendingCount
  }, {
    count: subsCount
  }] = await Promise.all([context.supabase.from("profiles").select("*", {
    count: "exact",
    head: true
  }), context.supabase.from("articles").select("*", {
    count: "exact",
    head: true
  }).eq("status", "published"), context.supabase.from("articles").select("*", {
    count: "exact",
    head: true
  }).eq("status", "pending"), context.supabase.from("guest_post_submissions").select("*", {
    count: "exact",
    head: true
  }).neq("status", "rejected")]);
  const {
    data: recent
  } = await context.supabase.from("articles").select("id, slug, title, status, created_at, author:profiles!articles_author_id_fkey(username, display_name)").order("created_at", {
    ascending: false
  }).limit(10);
  return {
    stats: {
      users: usersCount ?? 0,
      articles: articlesCount ?? 0,
      pending: pendingCount ?? 0,
      submissions: subsCount ?? 0
    },
    recent: recent ?? []
  };
});
const adminListArticles_createServerFn_handler = createServerRpc({
  id: "34a31ade313c18d5c6c21e83cad948e870ac5e3521a9ffa64f8cce35880a8756",
  name: "adminListArticles",
  filename: "src/lib/admin.functions.ts"
}, (opts) => adminListArticles.__executeServer(opts));
const adminListArticles = createServerFn({
  method: "GET"
}).middleware([requireSupabaseAuth]).inputValidator((d) => objectType({
  status: stringType().optional()
}).parse(d)).handler(adminListArticles_createServerFn_handler, async ({
  data,
  context
}) => {
  await ensureAdmin(context.supabase, context.userId);
  let q = context.supabase.from("articles").select("id, slug, title, status, view_count, created_at, published_at, link_policy, is_featured, author:profiles!articles_author_id_fkey(username, display_name)").order("created_at", {
    ascending: false
  });
  if (data.status) q = q.eq("status", data.status);
  const {
    data: rows
  } = await q.limit(100);
  return rows ?? [];
});
const adminUpdateArticle_createServerFn_handler = createServerRpc({
  id: "546171a97634419c95d40616d8e8e6cafd86379c9722a699d74e58976f1de2b3",
  name: "adminUpdateArticle",
  filename: "src/lib/admin.functions.ts"
}, (opts) => adminUpdateArticle.__executeServer(opts));
const adminUpdateArticle = createServerFn({
  method: "POST"
}).middleware([requireSupabaseAuth]).inputValidator((d) => objectType({
  id: stringType().uuid(),
  status: enumType(["draft", "pending", "published", "rejected", "archived"]).optional(),
  is_featured: booleanType().optional(),
  link_policy: enumType(["dofollow", "nofollow"]).optional()
}).parse(d)).handler(adminUpdateArticle_createServerFn_handler, async ({
  data,
  context
}) => {
  await ensureAdmin(context.supabase, context.userId);
  const update = {};
  if (data.status) update.status = data.status;
  if (typeof data.is_featured === "boolean") update.is_featured = data.is_featured;
  if (data.link_policy) update.link_policy = data.link_policy;
  const {
    error
  } = await context.supabase.from("articles").update(update).eq("id", data.id);
  if (error) throw new Error(error.message);
  return {
    ok: true
  };
});
const adminListUsers_createServerFn_handler = createServerRpc({
  id: "35cf6cc28f61c798a570ec39672552de8ed250f60706565e25b34a66f0c5b240",
  name: "adminListUsers",
  filename: "src/lib/admin.functions.ts"
}, (opts) => adminListUsers.__executeServer(opts));
const adminListUsers = createServerFn({
  method: "GET"
}).middleware([requireSupabaseAuth]).handler(adminListUsers_createServerFn_handler, async ({
  context
}) => {
  await ensureAdmin(context.supabase, context.userId);
  const {
    data: profiles
  } = await context.supabase.from("profiles").select("id, username, display_name, avatar_url, reputation, is_verified, created_at").order("created_at", {
    ascending: false
  }).limit(200);
  const {
    data: roles
  } = await context.supabase.from("user_roles").select("user_id, role");
  const rolesByUser = /* @__PURE__ */ new Map();
  (roles ?? []).forEach((r) => {
    const arr = rolesByUser.get(r.user_id) ?? [];
    arr.push(r.role);
    rolesByUser.set(r.user_id, arr);
  });
  return (profiles ?? []).map((p) => ({
    ...p,
    roles: rolesByUser.get(p.id) ?? []
  }));
});
const adminToggleRole_createServerFn_handler = createServerRpc({
  id: "854d1be6452ea29ff22809ac0418cb9979d5f84b7a9e1fb1a906a63fd64b1049",
  name: "adminToggleRole",
  filename: "src/lib/admin.functions.ts"
}, (opts) => adminToggleRole.__executeServer(opts));
const adminToggleRole = createServerFn({
  method: "POST"
}).middleware([requireSupabaseAuth]).inputValidator((d) => objectType({
  user_id: stringType().uuid(),
  role: enumType(["admin", "editor", "author", "reader"])
}).parse(d)).handler(adminToggleRole_createServerFn_handler, async ({
  data,
  context
}) => {
  await ensureAdmin(context.supabase, context.userId);
  const {
    data: existing
  } = await context.supabase.from("user_roles").select("id").eq("user_id", data.user_id).eq("role", data.role).maybeSingle();
  if (existing) await context.supabase.from("user_roles").delete().eq("id", existing.id);
  else await context.supabase.from("user_roles").insert({
    user_id: data.user_id,
    role: data.role
  });
  return {
    ok: true
  };
});
const adminListSubmissions_createServerFn_handler = createServerRpc({
  id: "f7cb4f36ca6b1736293532e9375e5e0f66e9982dea905b88e87abdea4fe1dba0",
  name: "adminListSubmissions",
  filename: "src/lib/admin.functions.ts"
}, (opts) => adminListSubmissions.__executeServer(opts));
const adminListSubmissions = createServerFn({
  method: "GET"
}).middleware([requireSupabaseAuth]).handler(adminListSubmissions_createServerFn_handler, async ({
  context
}) => {
  await ensureAdmin(context.supabase, context.userId);
  const {
    data
  } = await context.supabase.from("guest_post_submissions").select("*").order("created_at", {
    ascending: false
  }).limit(200);
  return data ?? [];
});
const adminUpdateSubmission_createServerFn_handler = createServerRpc({
  id: "bb5473d75bde18bdd302527cc59292d9091259a2f9b9b7c500aedb666bd44391",
  name: "adminUpdateSubmission",
  filename: "src/lib/admin.functions.ts"
}, (opts) => adminUpdateSubmission.__executeServer(opts));
const adminUpdateSubmission = createServerFn({
  method: "POST"
}).middleware([requireSupabaseAuth]).inputValidator((d) => objectType({
  id: stringType().uuid(),
  status: enumType(["pending_payment", "paid_pending_review", "approved", "rejected", "published"]).optional(),
  admin_notes: stringType().optional()
}).parse(d)).handler(adminUpdateSubmission_createServerFn_handler, async ({
  data,
  context
}) => {
  await ensureAdmin(context.supabase, context.userId);
  const update = {};
  if (data.status) update.status = data.status;
  if (data.admin_notes !== void 0) update.admin_notes = data.admin_notes;
  const {
    error
  } = await context.supabase.from("guest_post_submissions").update(update).eq("id", data.id);
  if (error) throw new Error(error.message);
  return {
    ok: true
  };
});
const adminListComments_createServerFn_handler = createServerRpc({
  id: "041edda5bad3e8b83429c688f7fbe59e6c6dbe398445ee4624099f4b361b1a74",
  name: "adminListComments",
  filename: "src/lib/admin.functions.ts"
}, (opts) => adminListComments.__executeServer(opts));
const adminListComments = createServerFn({
  method: "GET"
}).middleware([requireSupabaseAuth]).handler(adminListComments_createServerFn_handler, async ({
  context
}) => {
  await ensureAdmin(context.supabase, context.userId);
  const {
    data
  } = await context.supabase.from("comments").select("id, content, is_hidden, created_at, article:articles(slug, title), author:profiles!comments_author_id_fkey(username, display_name)").order("created_at", {
    ascending: false
  }).limit(100);
  return data ?? [];
});
const adminToggleCommentHidden_createServerFn_handler = createServerRpc({
  id: "2dec6bc76df69550b854e186eca41d9ccccf62dc731f453c7c498b28ca051006",
  name: "adminToggleCommentHidden",
  filename: "src/lib/admin.functions.ts"
}, (opts) => adminToggleCommentHidden.__executeServer(opts));
const adminToggleCommentHidden = createServerFn({
  method: "POST"
}).middleware([requireSupabaseAuth]).inputValidator((d) => objectType({
  id: stringType().uuid(),
  hidden: booleanType()
}).parse(d)).handler(adminToggleCommentHidden_createServerFn_handler, async ({
  data,
  context
}) => {
  await ensureAdmin(context.supabase, context.userId);
  await context.supabase.from("comments").update({
    is_hidden: data.hidden
  }).eq("id", data.id);
  return {
    ok: true
  };
});
export {
  adminDashboard_createServerFn_handler,
  adminListArticles_createServerFn_handler,
  adminListComments_createServerFn_handler,
  adminListSubmissions_createServerFn_handler,
  adminListUsers_createServerFn_handler,
  adminToggleCommentHidden_createServerFn_handler,
  adminToggleRole_createServerFn_handler,
  adminUpdateArticle_createServerFn_handler,
  adminUpdateSubmission_createServerFn_handler
};
