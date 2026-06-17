import { c as createServerRpc } from "./createServerRpc-De8tHJPE.mjs";
import { r as requireSupabaseAuth } from "./auth-middleware-Cn61DVxk.mjs";
import { c as createServerFn } from "./server-CGdutTFm.mjs";

import "../_libs/seroval.mjs";
import "../_libs/react.mjs";
import { o as objectType, s as stringType, b as booleanType, l as literalType, a as arrayType, e as enumType } from "../_libs/zod.mjs";

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
const ARTICLE_LIST = `
  id, slug, title, subtitle, excerpt, cover_image_url, status, reading_time,
  view_count, like_count, comment_count, published_at, created_at, is_featured,
  category:categories(id, slug, name),
  author:profiles!articles_author_id_fkey(id, username, display_name, avatar_url, bio)
`;
const listHomeArticles_createServerFn_handler = createServerRpc({
  id: "f7f81015ee3789a318310c65d82db2fe90bae34aef8cabac006a1e336db5b40a",
  name: "listHomeArticles",
  filename: "src/lib/articles.functions.ts"
}, (opts) => listHomeArticles.__executeServer(opts));
const listHomeArticles = createServerFn({
  method: "GET"
}).handler(listHomeArticles_createServerFn_handler, async () => {
  const {
    publicClient
  } = await import("./supabase-public.server-BOBxxuMr.mjs");
  const sb = publicClient();
  const [featured, latest, trending] = await Promise.all([sb.from("articles").select(ARTICLE_LIST).eq("status", "published").eq("is_featured", true).order("published_at", {
    ascending: false
  }).limit(1), sb.from("articles").select(ARTICLE_LIST).eq("status", "published").order("published_at", {
    ascending: false
  }).limit(8), sb.from("articles").select(ARTICLE_LIST).eq("status", "published").order("view_count", {
    ascending: false
  }).limit(6)]);
  const {
    data: categories
  } = await sb.from("categories").select("*").order("name");
  const {
    data: topAuthors
  } = await sb.from("profiles").select("id, username, display_name, avatar_url, bio, reputation").order("reputation", {
    ascending: false
  }).limit(5);
  return {
    featured: featured.data?.[0] ?? latest.data?.[0] ?? null,
    latest: latest.data ?? [],
    trending: trending.data ?? [],
    categories: categories ?? [],
    topAuthors: topAuthors ?? []
  };
});
const getArticleBySlug_createServerFn_handler = createServerRpc({
  id: "56247e6ee3d304c48058f8d110f119240330676c76ca2e2c888dd810ae82630f",
  name: "getArticleBySlug",
  filename: "src/lib/articles.functions.ts"
}, (opts) => getArticleBySlug.__executeServer(opts));
const getArticleBySlug = createServerFn({
  method: "GET"
}).inputValidator((d) => objectType({
  slug: stringType()
}).parse(d)).handler(getArticleBySlug_createServerFn_handler, async ({
  data
}) => {
  const {
    publicClient
  } = await import("./supabase-public.server-BOBxxuMr.mjs");
  const sb = publicClient();
  const {
    data: article
  } = await sb.from("articles").select(`
      id, slug, title, subtitle, excerpt, content, cover_image_url, status,
      meta_title, meta_description, canonical_url, og_image_url, link_policy,
      reading_time, view_count, like_count, comment_count, published_at, created_at, is_sponsored,
      category:categories(id, slug, name),
      author:profiles!articles_author_id_fkey(id, username, display_name, avatar_url, bio, website_url, twitter_handle, linkedin_url)
    `).eq("slug", data.slug).eq("status", "published").maybeSingle();
  if (!article) return null;
  const [{
    data: tags
  }, {
    data: comments
  }] = await Promise.all([sb.from("article_tags").select("tag:tags(id, slug, name)").eq("article_id", article.id), sb.from("comments").select("id, content, created_at, author:profiles!comments_author_id_fkey(username, display_name, avatar_url)").eq("article_id", article.id).eq("is_hidden", false).order("created_at", {
    ascending: false
  })]);
  sb.from("article_views").insert({
    article_id: article.id
  }).then(() => {
  });
  sb.rpc;
  await sb.from("articles").update({
    view_count: (article.view_count ?? 0) + 1
  }).eq("id", article.id);
  return {
    ...article,
    tags: tags?.map((t) => t.tag) ?? [],
    comments: comments ?? []
  };
});
const listByCategory_createServerFn_handler = createServerRpc({
  id: "c2b8a8bc7954647241400f9e2a6c5f50e533c1a24a83b85fe9b66049775e6357",
  name: "listByCategory",
  filename: "src/lib/articles.functions.ts"
}, (opts) => listByCategory.__executeServer(opts));
const listByCategory = createServerFn({
  method: "GET"
}).inputValidator((d) => objectType({
  slug: stringType()
}).parse(d)).handler(listByCategory_createServerFn_handler, async ({
  data
}) => {
  const {
    publicClient
  } = await import("./supabase-public.server-BOBxxuMr.mjs");
  const sb = publicClient();
  const {
    data: category
  } = await sb.from("categories").select("*").eq("slug", data.slug).maybeSingle();
  if (!category) return null;
  const {
    data: articles
  } = await sb.from("articles").select(ARTICLE_LIST).eq("status", "published").eq("category_id", category.id).order("published_at", {
    ascending: false
  }).limit(30);
  return {
    category,
    articles: articles ?? []
  };
});
const listByAuthor_createServerFn_handler = createServerRpc({
  id: "f4beb373092b23b59832940dff11c0bd4e64de3730d485087e2bb8cde688f9e4",
  name: "listByAuthor",
  filename: "src/lib/articles.functions.ts"
}, (opts) => listByAuthor.__executeServer(opts));
const listByAuthor = createServerFn({
  method: "GET"
}).inputValidator((d) => objectType({
  username: stringType()
}).parse(d)).handler(listByAuthor_createServerFn_handler, async ({
  data
}) => {
  const {
    publicClient
  } = await import("./supabase-public.server-BOBxxuMr.mjs");
  const sb = publicClient();
  const {
    data: profile
  } = await sb.from("profiles").select("*").eq("username", data.username).maybeSingle();
  if (!profile) return null;
  const {
    data: articles
  } = await sb.from("articles").select(ARTICLE_LIST).eq("status", "published").eq("author_id", profile.id).order("published_at", {
    ascending: false
  });
  return {
    profile,
    articles: articles ?? []
  };
});
const articleSaveSchema = objectType({
  id: stringType().uuid().optional().nullable(),
  title: stringType().min(3).max(200),
  subtitle: stringType().max(300).optional().nullable(),
  excerpt: stringType().max(500).optional().nullable(),
  content: stringType().default(""),
  cover_image_url: stringType().url().optional().nullable().or(literalType("")),
  category_id: stringType().uuid().optional().nullable(),
  tags: arrayType(stringType()).default([]),
  meta_title: stringType().max(70).optional().nullable(),
  meta_description: stringType().max(180).optional().nullable(),
  canonical_url: stringType().url().optional().nullable().or(literalType("")),
  submit: booleanType().default(false)
});
const saveArticle_createServerFn_handler = createServerRpc({
  id: "974c53e9c39bdbac0e2f1c6a5f7e04b7d77cff5bebf8dbe7ff250205637e0e79",
  name: "saveArticle",
  filename: "src/lib/articles.functions.ts"
}, (opts) => saveArticle.__executeServer(opts));
const saveArticle = createServerFn({
  method: "POST"
}).middleware([requireSupabaseAuth]).inputValidator((d) => articleSaveSchema.parse(d)).handler(saveArticle_createServerFn_handler, async ({
  data,
  context
}) => {
  const {
    supabase,
    userId
  } = context;
  const status = data.submit ? "pending" : "draft";
  const payload = {
    author_id: userId,
    title: data.title,
    subtitle: data.subtitle || null,
    excerpt: data.excerpt || null,
    content: data.content,
    cover_image_url: data.cover_image_url || null,
    category_id: data.category_id || null,
    meta_title: data.meta_title || null,
    meta_description: data.meta_description || null,
    canonical_url: data.canonical_url || null,
    status
  };
  let id = data.id;
  if (id) {
    const {
      error
    } = await supabase.from("articles").update(payload).eq("id", id);
    if (error) throw new Error(error.message);
  } else {
    const {
      data: row,
      error
    } = await supabase.from("articles").insert(payload).select("id").single();
    if (error) throw new Error(error.message);
    id = row.id;
  }
  if (data.tags.length) {
    const tagIds = [];
    for (const name of data.tags) {
      const slug = name.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
      if (!slug) continue;
      const {
        data: existing
      } = await supabase.from("tags").select("id").eq("slug", slug).maybeSingle();
      if (existing) tagIds.push(existing.id);
      else {
        const {
          data: created
        } = await supabase.from("tags").insert({
          slug,
          name
        }).select("id").single();
        if (created) tagIds.push(created.id);
      }
    }
    await supabase.from("article_tags").delete().eq("article_id", id);
    if (tagIds.length) await supabase.from("article_tags").insert(tagIds.map((t) => ({
      article_id: id,
      tag_id: t
    })));
  }
  return {
    id
  };
});
const getMyArticle_createServerFn_handler = createServerRpc({
  id: "fc0b54c30fa6d2ed5ec71c58f8346a07913e7001e132861d54485c6bae3c83de",
  name: "getMyArticle",
  filename: "src/lib/articles.functions.ts"
}, (opts) => getMyArticle.__executeServer(opts));
const getMyArticle = createServerFn({
  method: "GET"
}).middleware([requireSupabaseAuth]).inputValidator((d) => objectType({
  id: stringType().uuid()
}).parse(d)).handler(getMyArticle_createServerFn_handler, async ({
  data,
  context
}) => {
  const {
    data: article
  } = await context.supabase.from("articles").select("*, article_tags(tag:tags(name))").eq("id", data.id).maybeSingle();
  return article;
});
const listMyArticles_createServerFn_handler = createServerRpc({
  id: "5980e3461ebb14456b01158b6c14ee9f03eb64b35cf28a4e4bdbccf412ebcda0",
  name: "listMyArticles",
  filename: "src/lib/articles.functions.ts"
}, (opts) => listMyArticles.__executeServer(opts));
const listMyArticles = createServerFn({
  method: "GET"
}).middleware([requireSupabaseAuth]).handler(listMyArticles_createServerFn_handler, async ({
  context
}) => {
  const {
    data
  } = await context.supabase.from("articles").select("id, title, status, view_count, like_count, comment_count, created_at, published_at, slug").eq("author_id", context.userId).order("created_at", {
    ascending: false
  });
  return data ?? [];
});
const deleteMyArticle_createServerFn_handler = createServerRpc({
  id: "8f60ed66cb3c64c9d8f219fb14aff3baf8a5d9242e4eaee072c6824341602764",
  name: "deleteMyArticle",
  filename: "src/lib/articles.functions.ts"
}, (opts) => deleteMyArticle.__executeServer(opts));
const deleteMyArticle = createServerFn({
  method: "POST"
}).middleware([requireSupabaseAuth]).inputValidator((d) => objectType({
  id: stringType().uuid()
}).parse(d)).handler(deleteMyArticle_createServerFn_handler, async ({
  data,
  context
}) => {
  const {
    error
  } = await context.supabase.from("articles").delete().eq("id", data.id);
  if (error) throw new Error(error.message);
  return {
    ok: true
  };
});
const toggleLike_createServerFn_handler = createServerRpc({
  id: "6db7c8a3537bd9238475af8d32ed3e693f0b334a65e22320cd5b98d6b5565beb",
  name: "toggleLike",
  filename: "src/lib/articles.functions.ts"
}, (opts) => toggleLike.__executeServer(opts));
const toggleLike = createServerFn({
  method: "POST"
}).middleware([requireSupabaseAuth]).inputValidator((d) => objectType({
  article_id: stringType().uuid()
}).parse(d)).handler(toggleLike_createServerFn_handler, async ({
  data,
  context
}) => {
  const {
    data: existing
  } = await context.supabase.from("likes").select("article_id").eq("user_id", context.userId).eq("article_id", data.article_id).maybeSingle();
  if (existing) {
    await context.supabase.from("likes").delete().eq("user_id", context.userId).eq("article_id", data.article_id);
    return {
      liked: false
    };
  }
  await context.supabase.from("likes").insert({
    user_id: context.userId,
    article_id: data.article_id
  });
  return {
    liked: true
  };
});
const addComment_createServerFn_handler = createServerRpc({
  id: "eb6d610105595061a50a2c1345251b7a1082da6bd585f4f862fdee8130e5f1f8",
  name: "addComment",
  filename: "src/lib/articles.functions.ts"
}, (opts) => addComment.__executeServer(opts));
const addComment = createServerFn({
  method: "POST"
}).middleware([requireSupabaseAuth]).inputValidator((d) => objectType({
  article_id: stringType().uuid(),
  content: stringType().min(2).max(2e3)
}).parse(d)).handler(addComment_createServerFn_handler, async ({
  data,
  context
}) => {
  const {
    error
  } = await context.supabase.from("comments").insert({
    article_id: data.article_id,
    author_id: context.userId,
    content: data.content
  });
  if (error) throw new Error(error.message);
  return {
    ok: true
  };
});
const toggleFollow_createServerFn_handler = createServerRpc({
  id: "0898f266f135eb28b19a711a0f7d1cb195af20139abdacc6b1c9f99af2732554",
  name: "toggleFollow",
  filename: "src/lib/articles.functions.ts"
}, (opts) => toggleFollow.__executeServer(opts));
const toggleFollow = createServerFn({
  method: "POST"
}).middleware([requireSupabaseAuth]).inputValidator((d) => objectType({
  user_id: stringType().uuid()
}).parse(d)).handler(toggleFollow_createServerFn_handler, async ({
  data,
  context
}) => {
  if (data.user_id === context.userId) throw new Error("Cannot follow yourself");
  const {
    data: existing
  } = await context.supabase.from("follows").select("follower_id").eq("follower_id", context.userId).eq("following_id", data.user_id).maybeSingle();
  if (existing) {
    await context.supabase.from("follows").delete().eq("follower_id", context.userId).eq("following_id", data.user_id);
    return {
      following: false
    };
  }
  await context.supabase.from("follows").insert({
    follower_id: context.userId,
    following_id: data.user_id
  });
  return {
    following: true
  };
});
const subscribeNewsletter_createServerFn_handler = createServerRpc({
  id: "0bd1d1bd5fbee8184b58dabdde6c99056d09cf4afa7cfec67309ae5145076e58",
  name: "subscribeNewsletter",
  filename: "src/lib/articles.functions.ts"
}, (opts) => subscribeNewsletter.__executeServer(opts));
const subscribeNewsletter = createServerFn({
  method: "POST"
}).inputValidator((d) => objectType({
  email: stringType().email()
}).parse(d)).handler(subscribeNewsletter_createServerFn_handler, async ({
  data
}) => {
  const {
    publicClient
  } = await import("./supabase-public.server-BOBxxuMr.mjs");
  const sb = publicClient();
  const {
    error
  } = await sb.from("newsletter_subscribers").insert({
    email: data.email.toLowerCase()
  });
  if (error && !error.message.includes("duplicate")) throw new Error(error.message);
  return {
    ok: true
  };
});
const submitGuestPost_createServerFn_handler = createServerRpc({
  id: "1a31922b8f3d72d22be102fed306d97dcb9346ca7f64913003a96d7dd4e3bfef",
  name: "submitGuestPost",
  filename: "src/lib/articles.functions.ts"
}, (opts) => submitGuestPost.__executeServer(opts));
const submitGuestPost = createServerFn({
  method: "POST"
}).inputValidator((d) => objectType({
  name: stringType().min(2).max(100),
  email: stringType().email(),
  website_url: stringType().url().optional().or(literalType("")),
  proposed_title: stringType().min(5).max(200),
  pitch: stringType().min(20).max(2e3),
  draft_content: stringType().optional(),
  tier: enumType(["standard", "featured", "premium"]).default("standard")
}).parse(d)).handler(submitGuestPost_createServerFn_handler, async ({
  data
}) => {
  const {
    publicClient
  } = await import("./supabase-public.server-BOBxxuMr.mjs");
  const sb = publicClient();
  const price = data.tier === "premium" ? 19900 : data.tier === "featured" ? 9900 : 4900;
  const {
    data: row,
    error
  } = await sb.from("guest_post_submissions").insert({
    name: data.name,
    email: data.email,
    website_url: data.website_url || null,
    proposed_title: data.proposed_title,
    pitch: data.pitch,
    draft_content: data.draft_content || null,
    tier: data.tier,
    price_cents: price
  }).select("id").single();
  if (error) throw new Error(error.message);
  return {
    id: row.id
  };
});
export {
  addComment_createServerFn_handler,
  deleteMyArticle_createServerFn_handler,
  getArticleBySlug_createServerFn_handler,
  getMyArticle_createServerFn_handler,
  listByAuthor_createServerFn_handler,
  listByCategory_createServerFn_handler,
  listHomeArticles_createServerFn_handler,
  listMyArticles_createServerFn_handler,
  saveArticle_createServerFn_handler,
  submitGuestPost_createServerFn_handler,
  subscribeNewsletter_createServerFn_handler,
  toggleFollow_createServerFn_handler,
  toggleLike_createServerFn_handler
};
