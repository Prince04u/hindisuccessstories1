globalThis.__nitro_main__ = import.meta.url;
import "./_libs/unenv.mjs";

import { H as HookableCore } from "./_libs/hookable.mjs";
import { d as defineLazyEventHandler, H as HTTPError, a as H3Core } from "./_libs/h3.mjs";
import { a as FastResponse } from "./_libs/srvx.mjs";


import "./_libs/rou3.mjs";





function lazyService(loader) {
  let promise, mod;
  return {
    fetch(req) {
      if (mod) {
        return mod.fetch(req);
      }
      if (!promise) {
        promise = loader().then((_mod) => mod = _mod.default || _mod);
      }
      return promise.then((mod2) => mod2.fetch(req));
    }
  };
}
const services = {
  ["ssr"]: lazyService(() => import("./_ssr/index.mjs"))
};
globalThis.__nitro_vite_envs__ = services;
const assets = {
  "/robots.txt": {
    "type": "text/plain; charset=utf-8",
    "etag": '"73-Yki5l3Oj0hcZhCUSUEh5IU+ILVQ"',
    "mtime": "2026-06-17T04:34:32.769Z",
    "size": 115,
    "path": "../client/robots.txt"
  },
  "/assets/admin-Da4z3CQ7.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"536-zW/vFmFleGHbX4JEyvEV9374dow"',
    "mtime": "2026-06-17T04:34:31.657Z",
    "size": 1334,
    "path": "../client/assets/admin-Da4z3CQ7.js"
  },
  "/assets/about-BMexgTzM.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"4b3-6ku+U0yj2LqbKoth02w27cKLbwk"',
    "mtime": "2026-06-17T04:34:31.657Z",
    "size": 1203,
    "path": "../client/assets/about-BMexgTzM.js"
  },
  "/assets/admin.articles-DYv9PoVJ.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"b71-6Lb5fJC7J4PCJk0vNi+j/EiCRTc"',
    "mtime": "2026-06-17T04:34:31.657Z",
    "size": 2929,
    "path": "../client/assets/admin.articles-DYv9PoVJ.js"
  },
  "/assets/admin.comments-DnFkvoFW.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"68f-itefvpQrvwmNOtlEuUXfnmB40Ic"',
    "mtime": "2026-06-17T04:34:31.657Z",
    "size": 1679,
    "path": "../client/assets/admin.comments-DnFkvoFW.js"
  },
  "/assets/admin.functions-49LSikcd.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"493-900XmpRLfrVfEtMSgbqE0UHkBBY"',
    "mtime": "2026-06-17T04:34:31.657Z",
    "size": 1171,
    "path": "../client/assets/admin.functions-49LSikcd.js"
  },
  "/assets/admin.index-D5BbIWrI.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"68e-yFjuj5NyTsNmWjXVx/18nRaB61g"',
    "mtime": "2026-06-17T04:34:31.657Z",
    "size": 1678,
    "path": "../client/assets/admin.index-D5BbIWrI.js"
  },
  "/assets/admin.submissions-C_shGxYa.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"89b-FVVkrVfmMYm7pm2qeLyRr4irKDQ"',
    "mtime": "2026-06-17T04:34:31.657Z",
    "size": 2203,
    "path": "../client/assets/admin.submissions-C_shGxYa.js"
  },
  "/assets/article-card-BsDWErib.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"6e9-Hdb0s2/BQFllIzLh7u0dh1nYwRk"',
    "mtime": "2026-06-17T04:34:31.657Z",
    "size": 1769,
    "path": "../client/assets/article-card-BsDWErib.js"
  },
  "/assets/admin.users-BVnH-CK_.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"603-L+NKIETuJE13Zw1ScgxNeRDQFNk"',
    "mtime": "2026-06-17T04:34:31.657Z",
    "size": 1539,
    "path": "../client/assets/admin.users-BVnH-CK_.js"
  },
  "/assets/article._slug-DCAZFGvX.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"90-c0fHdF207Z3FuqbRoqitrv4T/f0"',
    "mtime": "2026-06-17T04:34:31.657Z",
    "size": 144,
    "path": "../client/assets/article._slug-DCAZFGvX.js"
  },
  "/assets/article._slug-Bq6ux_zk.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"1a3b-MoXN8xSVxUwQi2VyOlWOHX0eILc"',
    "mtime": "2026-06-17T04:34:31.657Z",
    "size": 6715,
    "path": "../client/assets/article._slug-Bq6ux_zk.js"
  },
  "/assets/article._slug-SXAXDuur.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"8d-JkM2OS41U+ANUZw6sxEtRkCKx3g"',
    "mtime": "2026-06-17T04:34:31.657Z",
    "size": 141,
    "path": "../client/assets/article._slug-SXAXDuur.js"
  },
  "/assets/article._slug-Dw_gNIUk.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"1c7-yTSZCfXakdTNIoAJAWd5rlFWEXI"',
    "mtime": "2026-06-17T04:34:31.657Z",
    "size": 455,
    "path": "../client/assets/article._slug-Dw_gNIUk.js"
  },
  "/assets/auth-DiDboTR5.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"1b2f-wnFH1qfoE39wYVwzaFkoVGCala0"',
    "mtime": "2026-06-17T04:34:31.657Z",
    "size": 6959,
    "path": "../client/assets/auth-DiDboTR5.js"
  },
  "/assets/author._username-BNfU7bTx.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"7c2-vuoz5jWGyZgD38eSi9pacef0yMc"',
    "mtime": "2026-06-17T04:34:31.657Z",
    "size": 1986,
    "path": "../client/assets/author._username-BNfU7bTx.js"
  },
  "/assets/badge-BXypMLuw.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"2d1-QwpDFeej6CMUcMl+yqN/x4ScS0g"',
    "mtime": "2026-06-17T04:34:31.657Z",
    "size": 721,
    "path": "../client/assets/badge-BXypMLuw.js"
  },
  "/assets/author._username-BScCZJW5.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"cd-7x0dYwQ/hEWI7t919G9lPDZ2Vp8"',
    "mtime": "2026-06-17T04:34:31.657Z",
    "size": 205,
    "path": "../client/assets/author._username-BScCZJW5.js"
  },
  "/assets/author._username-CG17l59P.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"cb-YbYSdU2Epiljwlnc/CuJ9nm8cps"',
    "mtime": "2026-06-17T04:34:31.657Z",
    "size": 203,
    "path": "../client/assets/author._username-CG17l59P.js"
  },
  "/assets/category._slug-DA9EvW9h.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"c6-QF7ZkEB/8ZZ8sLs6AZsb11lbuc0"',
    "mtime": "2026-06-17T04:34:31.657Z",
    "size": 198,
    "path": "../client/assets/category._slug-DA9EvW9h.js"
  },
  "/assets/category._slug-p65vwPvQ.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"39e-dzAtqCbQlDSuUyr1C7a+I2ZSmYM"',
    "mtime": "2026-06-17T04:34:31.657Z",
    "size": 926,
    "path": "../client/assets/category._slug-p65vwPvQ.js"
  },
  "/assets/category._slug-CKfdqd7x.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"cd-MMfkfK4oj1Oa+bW2TOIdEARTDEM"',
    "mtime": "2026-06-17T04:34:31.657Z",
    "size": 205,
    "path": "../client/assets/category._slug-CKfdqd7x.js"
  },
  "/assets/dashboard-BVeXFgyP.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"f30-Jl+D56IKpCruqLTF9qe+RZgxuUU"',
    "mtime": "2026-06-17T04:34:31.657Z",
    "size": 3888,
    "path": "../client/assets/dashboard-BVeXFgyP.js"
  },
  "/assets/formatDistanceToNow-Ctx6mZEP.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"2622-dWDyzyVmEsKS77t38iMPKzWKiCo"',
    "mtime": "2026-06-17T04:34:31.657Z",
    "size": 9762,
    "path": "../client/assets/formatDistanceToNow-Ctx6mZEP.js"
  },
  "/assets/index-B7aplET0.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"1ba8-2eWeR+Rx5u0Na4lZKVVV5QBnLwU"',
    "mtime": "2026-06-17T04:34:31.657Z",
    "size": 7080,
    "path": "../client/assets/index-B7aplET0.js"
  },
  "/assets/index-BsVcMEhw.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"95-UyIxy8ekXmHbS63berXrZWfwAKU"',
    "mtime": "2026-06-17T04:34:31.657Z",
    "size": 149,
    "path": "../client/assets/index-BsVcMEhw.js"
  },
  "/assets/message-square-B_yKGlfu.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"1bc-al3hH0OGl0Hw7teBrtMwQ+uZ+TE"',
    "mtime": "2026-06-17T04:34:31.657Z",
    "size": 444,
    "path": "../client/assets/message-square-B_yKGlfu.js"
  },
  "/assets/privacy-9CLAPwJZ.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"25a-ByDV2fvtORGK8mjWqNx7qT+UToo"',
    "mtime": "2026-06-17T04:34:31.657Z",
    "size": 602,
    "path": "../client/assets/privacy-9CLAPwJZ.js"
  },
  "/assets/route-B83IcUba.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"5f-V0Mj8BcCIEFGcuTlqTQ2f8Es6YI"',
    "mtime": "2026-06-17T04:34:31.657Z",
    "size": 95,
    "path": "../client/assets/route-B83IcUba.js"
  },
  "/assets/label-DFKkorRV.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"560-1h7grDXsmMq6WTCLwS8Qn609Q38"',
    "mtime": "2026-06-17T04:34:31.657Z",
    "size": 1376,
    "path": "../client/assets/label-DFKkorRV.js"
  },
  "/assets/select-e-_hxxCp.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"58d1-1N75FHdM4Ji8zdDlsTwAJYm2v6A"',
    "mtime": "2026-06-17T04:34:31.657Z",
    "size": 22737,
    "path": "../client/assets/select-e-_hxxCp.js"
  },
  "/assets/settings-DhdgcD6m.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"e20-x1S1oZYeJKlF0VHLoCSuK5mA2VY"',
    "mtime": "2026-06-17T04:34:31.657Z",
    "size": 3616,
    "path": "../client/assets/settings-DhdgcD6m.js"
  },
  "/assets/submit-8pqZPJI_.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"1009-Sx0rMZy55oGrlbAsD8U8EPRcocY"',
    "mtime": "2026-06-17T04:34:31.656Z",
    "size": 4105,
    "path": "../client/assets/submit-8pqZPJI_.js"
  },
  "/assets/terms-Cf6jBuYJ.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"221-aj+5Go7A8VSpfNqWe/cVX71Esgw"',
    "mtime": "2026-06-17T04:34:31.656Z",
    "size": 545,
    "path": "../client/assets/terms-Cf6jBuYJ.js"
  },
  "/assets/styles-evAYcpPp.css": {
    "type": "text/css; charset=utf-8",
    "etag": '"151a2-NSe6vXo40PMFjW8C15fVKMf8GoI"',
    "mtime": "2026-06-17T04:34:31.649Z",
    "size": 86434,
    "path": "../client/assets/styles-evAYcpPp.css"
  },
  "/assets/textarea-X1enlG5G.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"1c7-RVL2wcBn5UQpVlgpw4MQ/79KL+0"',
    "mtime": "2026-06-17T04:34:31.657Z",
    "size": 455,
    "path": "../client/assets/textarea-X1enlG5G.js"
  },
  "/assets/useBaseQuery-eoOwV79b.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"228c-DsY7kPeHnVakIcA75uW7ly+bAnU"',
    "mtime": "2026-06-17T04:34:31.657Z",
    "size": 8844,
    "path": "../client/assets/useBaseQuery-eoOwV79b.js"
  },
  "/assets/useMutation-D8cTF9fP.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"8a2-w0FDpw1r1NQtMuet26gnXPwi/Fg"',
    "mtime": "2026-06-17T04:34:31.657Z",
    "size": 2210,
    "path": "../client/assets/useMutation-D8cTF9fP.js"
  },
  "/assets/markdown-FqgRG67H.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"51bcd-sN2lOHXJ/ZCJZaBjUlMlU3U569E"',
    "mtime": "2026-06-17T04:34:31.657Z",
    "size": 334797,
    "path": "../client/assets/markdown-FqgRG67H.js"
  },
  "/assets/useQuery-BNj21acz.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"64-+lV/N7AR6sXWK9dt6/46Z7wyGBQ"',
    "mtime": "2026-06-17T04:34:31.657Z",
    "size": 100,
    "path": "../client/assets/useQuery-BNj21acz.js"
  },
  "/assets/useServerFn-B4KFIA6B.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"139-sN95/+5BETUIQFqovc9ZHr75V1I"',
    "mtime": "2026-06-17T04:34:31.657Z",
    "size": 313,
    "path": "../client/assets/useServerFn-B4KFIA6B.js"
  },
  "/assets/write-C61Oj-iX.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"2136-ukT242KMb4wvK7WoPFd48BcVnJo"',
    "mtime": "2026-06-17T04:34:31.657Z",
    "size": 8502,
    "path": "../client/assets/write-C61Oj-iX.js"
  },
  "/assets/index-CajrEvKM.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"98-2KDAr65abBuEVdhcd9TRBtAQe0U"',
    "mtime": "2026-06-17T04:34:31.657Z",
    "size": 152,
    "path": "../client/assets/index-CajrEvKM.js"
  },
  "/assets/index-IGdi1vmz.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"b388d-9RUizbymbcMmf/pbmweFLvbBE3o"',
    "mtime": "2026-06-17T04:34:31.657Z",
    "size": 735373,
    "path": "../client/assets/index-IGdi1vmz.js"
  }
};
const publicAssetBases = {};
function isPublicAssetURL(id = "") {
  if (assets[id]) {
    return true;
  }
  for (const base in publicAssetBases) {
    if (id.startsWith(base)) {
      return true;
    }
  }
  return false;
}
const headers = ((m) => function headersRouteRule(event) {
  for (const [key, value] of Object.entries(m.options || {})) {
    event.res.headers.set(key, value);
  }
});
const findRouteRules = /* @__PURE__ */ (() => {
  const $0 = [{ name: "headers", route: "/assets/**", handler: headers, options: { "cache-control": "public, max-age=31536000, immutable" } }];
  return (m, p) => {
    let r = [];
    if (p.charCodeAt(p.length - 1) === 47) p = p.slice(0, -1) || "/";
    let s = p.split("/"), l = s.length;
    if (l > 1) {
      if (s[1] === "assets") {
        r.unshift({ data: $0, params: { "_": s.slice(2).join("/") } });
      }
    }
    return r;
  };
})();
const _lazy_j21Qvj = defineLazyEventHandler(() => import("./_chunks/ssr-renderer.mjs"));
const findRoute = /* @__PURE__ */ (() => {
  const data = { route: "/**", handler: _lazy_j21Qvj };
  return ((_m, p) => {
    return { data, params: { "_": p.slice(1) } };
  });
})();
const errorHandler$1 = (error, event) => {
  const res = defaultHandler(error, event);
  return new FastResponse(typeof res.body === "string" ? res.body : JSON.stringify(res.body, null, 2), res);
};
function defaultHandler(error, event) {
  const unhandled = error.unhandled ?? !HTTPError.isError(error);
  const { status = 500, statusText = "" } = unhandled ? {} : error;
  if (status === 404) {
    const url = event.url || new URL(event.req.url);
    const baseURL = "/";
    if (/^\/[^/]/.test(baseURL) && !url.pathname.startsWith(baseURL)) {
      return {
        status: 302,
        headers: new Headers({ location: `${baseURL}${url.pathname.slice(1)}${url.search}` })
      };
    }
  }
  const headers2 = new Headers(unhandled ? {} : error.headers);
  headers2.set("content-type", "application/json; charset=utf-8");
  const jsonBody = unhandled ? {
    status,
    unhandled: true
  } : typeof error.toJSON === "function" ? error.toJSON() : {
    status,
    statusText,
    message: error.message
  };
  return {
    status,
    statusText,
    headers: headers2,
    body: {
      error: true,
      ...jsonBody
    }
  };
}
const errorHandlers = [errorHandler$1];
async function errorHandler(error, event) {
  for (const handler of errorHandlers) {
    try {
      const response = await handler(error, event, { defaultHandler });
      if (response) {
        return response;
      }
    } catch (error2) {
      console.error(error2);
    }
  }
}
function createNitroApp() {
  const captureError = (error, errorCtx) => {
    if (errorCtx?.event) {
      const errors = errorCtx.event.req.context?.nitro?.errors;
      if (errors) {
        errors.push({ error, context: errorCtx });
      }
    }
  };
  const h3App = createH3App({
    onError(error, event) {
      return errorHandler(error, event);
    }
  });
  let appHandler = (req) => {
    req.context ||= {};
    req.context.nitro = req.context.nitro || { errors: [] };
    return h3App.fetch(req);
  };
  return {
    fetch: appHandler,
    h3: h3App,
    hooks: void 0,
    captureError
  };
}
function createH3App(config) {
  const h3App = new H3Core(config);
  h3App["~findRoute"] = (event) => findRoute(event.req.method, event.url.pathname);
  h3App["~getMiddleware"] = (event, route) => {
    const pathname = event.url.pathname;
    const method = event.req.method;
    const middleware = [];
    const routeRules = getRouteRules(method, pathname);
    event.context.routeRules = routeRules?.routeRules;
    if (routeRules?.routeRuleMiddleware.length) {
      middleware.push(...routeRules.routeRuleMiddleware);
    }
    if (route?.data?.middleware?.length) {
      middleware.push(...route.data.middleware);
    }
    return middleware;
  };
  return h3App;
}
const APP_ID = "default";
function useNitroApp() {
  let instance = useNitroApp._instance;
  if (instance) {
    return instance;
  }
  instance = useNitroApp._instance = createNitroApp();
  globalThis.__nitro__ = globalThis.__nitro__ || {};
  globalThis.__nitro__[APP_ID] = instance;
  return instance;
}
function useNitroHooks() {
  const nitroApp = useNitroApp();
  const hooks = nitroApp.hooks;
  if (hooks) {
    return hooks;
  }
  return nitroApp.hooks = new HookableCore();
}
function getRouteRules(method, pathname) {
  const m = findRouteRules(method, pathname);
  if (!m?.length) {
    return { routeRuleMiddleware: [] };
  }
  const routeRules = {};
  for (const layer of m) {
    for (const rule of layer.data) {
      const currentRule = routeRules[rule.name];
      if (currentRule) {
        if (rule.options === false) {
          delete routeRules[rule.name];
          continue;
        }
        if (typeof currentRule.options === "object" && typeof rule.options === "object") {
          currentRule.options = {
            ...currentRule.options,
            ...rule.options
          };
        } else {
          currentRule.options = rule.options;
        }
        currentRule.route = rule.route;
        currentRule.params = {
          ...currentRule.params,
          ...layer.params
        };
      } else if (rule.options !== false) {
        routeRules[rule.name] = {
          ...rule,
          params: layer.params
        };
      }
    }
  }
  const middleware = [];
  const orderedRules = Object.values(routeRules).sort((a, b) => (a.handler?.order || 0) - (b.handler?.order || 0));
  for (const rule of orderedRules) {
    if (rule.options === false || !rule.handler) {
      continue;
    }
    middleware.push(rule.handler(rule));
  }
  return {
    routeRules,
    routeRuleMiddleware: middleware
  };
}
function createHandler(hooks) {
  const nitroApp = useNitroApp();
  const nitroHooks = useNitroHooks();
  return {
    async fetch(request, env, context) {
      globalThis.__env__ = env;
      augmentReq(request, {
        env,
        context
      });
      const ctxExt = {};
      const url = new URL(request.url);
      if (hooks.fetch) {
        const res = await hooks.fetch(request, env, context, url, ctxExt);
        if (res) {
          return res;
        }
      }
      return await nitroApp.fetch(request);
    },
    scheduled(controller, env, context) {
      globalThis.__env__ = env;
      context.waitUntil(nitroHooks.callHook("cloudflare:scheduled", {
        controller,
        env,
        context
      }) || Promise.resolve());
    },
    email(message, env, context) {
      globalThis.__env__ = env;
      context.waitUntil(nitroHooks.callHook("cloudflare:email", {
        message,
        event: message,
        env,
        context
      }) || Promise.resolve());
    },
    queue(batch, env, context) {
      globalThis.__env__ = env;
      context.waitUntil(nitroHooks.callHook("cloudflare:queue", {
        batch,
        event: batch,
        env,
        context
      }) || Promise.resolve());
    },
    tail(traces, env, context) {
      globalThis.__env__ = env;
      context.waitUntil(nitroHooks.callHook("cloudflare:tail", {
        traces,
        env,
        context
      }) || Promise.resolve());
    },
    trace(traces, env, context) {
      globalThis.__env__ = env;
      context.waitUntil(nitroHooks.callHook("cloudflare:trace", {
        traces,
        env,
        context
      }) || Promise.resolve());
    }
  };
}
function augmentReq(cfReq, ctx) {
  const req = cfReq;
  req.ip = cfReq.headers.get("cf-connecting-ip") || void 0;
  req.runtime ??= { name: "cloudflare" };
  req.runtime.cloudflare = {
    ...req.runtime.cloudflare,
    ...ctx
  };
  req.waitUntil = ctx.context?.waitUntil.bind(ctx.context);
}
const cloudflareModule = createHandler({ fetch(cfRequest, env, context, url) {
  if (env.ASSETS && isPublicAssetURL(url.pathname)) {
    return env.ASSETS.fetch(cfRequest);
  }
} });
export {
  cloudflareModule as default
};
