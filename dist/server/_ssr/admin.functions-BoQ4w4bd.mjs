import { l as createSsrRpc } from "./router-Dl0oPtZv.mjs";
import { r as requireSupabaseAuth } from "./auth-middleware-Cn61DVxk.mjs";
import { c as createServerFn } from "./server-CGdutTFm.mjs";
import { o as objectType, e as enumType, s as stringType, b as booleanType } from "../_libs/zod.mjs";
const adminDashboard = createServerFn({
  method: "GET"
}).middleware([requireSupabaseAuth]).handler(createSsrRpc("9ff7ac682d569ace29ac9f4c109dfff01a123caf2fc3a87d7b131f0a854906ad"));
const adminListArticles = createServerFn({
  method: "GET"
}).middleware([requireSupabaseAuth]).inputValidator((d) => objectType({
  status: stringType().optional()
}).parse(d)).handler(createSsrRpc("34a31ade313c18d5c6c21e83cad948e870ac5e3521a9ffa64f8cce35880a8756"));
const adminUpdateArticle = createServerFn({
  method: "POST"
}).middleware([requireSupabaseAuth]).inputValidator((d) => objectType({
  id: stringType().uuid(),
  status: enumType(["draft", "pending", "published", "rejected", "archived"]).optional(),
  is_featured: booleanType().optional(),
  link_policy: enumType(["dofollow", "nofollow"]).optional()
}).parse(d)).handler(createSsrRpc("546171a97634419c95d40616d8e8e6cafd86379c9722a699d74e58976f1de2b3"));
const adminListUsers = createServerFn({
  method: "GET"
}).middleware([requireSupabaseAuth]).handler(createSsrRpc("35cf6cc28f61c798a570ec39672552de8ed250f60706565e25b34a66f0c5b240"));
const adminToggleRole = createServerFn({
  method: "POST"
}).middleware([requireSupabaseAuth]).inputValidator((d) => objectType({
  user_id: stringType().uuid(),
  role: enumType(["admin", "editor", "author", "reader"])
}).parse(d)).handler(createSsrRpc("854d1be6452ea29ff22809ac0418cb9979d5f84b7a9e1fb1a906a63fd64b1049"));
const adminListSubmissions = createServerFn({
  method: "GET"
}).middleware([requireSupabaseAuth]).handler(createSsrRpc("f7cb4f36ca6b1736293532e9375e5e0f66e9982dea905b88e87abdea4fe1dba0"));
const adminUpdateSubmission = createServerFn({
  method: "POST"
}).middleware([requireSupabaseAuth]).inputValidator((d) => objectType({
  id: stringType().uuid(),
  status: enumType(["pending_payment", "paid_pending_review", "approved", "rejected", "published"]).optional(),
  admin_notes: stringType().optional()
}).parse(d)).handler(createSsrRpc("bb5473d75bde18bdd302527cc59292d9091259a2f9b9b7c500aedb666bd44391"));
const adminListComments = createServerFn({
  method: "GET"
}).middleware([requireSupabaseAuth]).handler(createSsrRpc("041edda5bad3e8b83429c688f7fbe59e6c6dbe398445ee4624099f4b361b1a74"));
const adminToggleCommentHidden = createServerFn({
  method: "POST"
}).middleware([requireSupabaseAuth]).inputValidator((d) => objectType({
  id: stringType().uuid(),
  hidden: booleanType()
}).parse(d)).handler(createSsrRpc("2dec6bc76df69550b854e186eca41d9ccccf62dc731f453c7c498b28ca051006"));
export {
  adminDashboard as a,
  adminToggleRole as b,
  adminListUsers as c,
  adminUpdateSubmission as d,
  adminListSubmissions as e,
  adminToggleCommentHidden as f,
  adminListComments as g,
  adminUpdateArticle as h,
  adminListArticles as i
};
