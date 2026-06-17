import { b as QueryClient } from "../_libs/tanstack__query-core.mjs";
import { Q as QueryClientProvider, u as useQueryClient, q as queryOptions } from "../_libs/tanstack__react-query.mjs";
import { c as createRouter, a as createRootRouteWithContext, u as useRouter, L as Link, O as Outlet, H as HeadContent, S as Scripts, b as createFileRoute, l as lazyRouteComponent, d as useNavigate } from "../_libs/tanstack__react-router.mjs";
import { I as notFound, J as redirect } from "../_libs/tanstack__router-core.mjs";
import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { s as supabase } from "./client-BbevmGls.mjs";
import { S as Slot } from "../_libs/radix-ui__react-slot.mjs";
import { c as cva } from "../_libs/class-variance-authority.mjs";
import { c as clsx } from "../_libs/clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
import { R as Root2, T as Trigger, P as Portal2, C as Content2, L as Label2, S as Separator2, I as Item2, a as SubTrigger2, b as SubContent2, c as CheckboxItem2, d as ItemIndicator2, e as RadioItem2 } from "../_libs/radix-ui__react-dropdown-menu.mjs";
import { R as Root, I as Image, F as Fallback } from "../_libs/radix-ui__react-avatar.mjs";
import { T as Toaster$1 } from "../_libs/sonner.mjs";
import { c as createServerFn, T as TSS_SERVER_FUNCTION, g as getServerFnById } from "./server-CGdutTFm.mjs";
import { r as requireSupabaseAuth } from "./auth-middleware-Cn61DVxk.mjs";
import { P as PenLine, L as LayoutDashboard, S as Shield, a as LogOut, C as ChevronRight, b as Check, c as Circle } from "../_libs/lucide-react.mjs";
import { o as objectType, s as stringType, b as booleanType, l as literalType, a as arrayType, e as enumType } from "../_libs/zod.mjs";
import "../_libs/react-dom.mjs";

import "../_libs/isbot.mjs";
import "../_libs/tanstack__history.mjs";
import "../_libs/cookie-es.mjs";
import "../_libs/seroval.mjs";
import "../_libs/unenv.mjs";



import "../_libs/seroval-plugins.mjs";

import "../_libs/supabase__supabase-js.mjs";
import "../_libs/supabase__postgrest-js.mjs";
import "../_libs/supabase__realtime-js.mjs";
import "../_libs/supabase__phoenix.mjs";
import "../_libs/supabase__storage-js.mjs";
import "../_libs/iceberg-js.mjs";
import "../_libs/supabase__auth-js.mjs";
import "../_libs/tslib.mjs";
import "../_libs/supabase__functions-js.mjs";
import "../_libs/radix-ui__react-compose-refs.mjs";
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
import "../_libs/@radix-ui/react-use-is-hydrated+[...].mjs";
import "../_libs/use-sync-external-store.mjs";

import "../_libs/h3-v2.mjs";
import "../_libs/rou3.mjs";
import "../_libs/srvx.mjs";




import "./createMiddleware-BvN2ghIY.mjs";
const appCss = "/assets/styles-evAYcpPp.css";
function reportLovableError(error, context = {}) {
  if (typeof window === "undefined") return;
  window.__lovableEvents?.captureException?.(
    error,
    {
      source: "react_error_boundary",
      route: window.location.pathname,
      ...context
    },
    {
      mechanism: "react_error_boundary",
      handled: false,
      severity: "error"
    }
  );
}
function useAuth() {
  const [session, setSession] = reactExports.useState(null);
  const [user, setUser] = reactExports.useState(null);
  const [loading, setLoading] = reactExports.useState(true);
  reactExports.useEffect(() => {
    const { data: sub } = supabase.auth.onAuthStateChange((_event, sess) => {
      setSession(sess);
      setUser(sess?.user ?? null);
    });
    supabase.auth.getSession().then(({ data }) => {
      setSession(data.session);
      setUser(data.session?.user ?? null);
      setLoading(false);
    });
    return () => sub.subscription.unsubscribe();
  }, []);
  return { session, user, loading };
}
function cn(...inputs) {
  return twMerge(clsx(inputs));
}
const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium cursor-pointer transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 disabled:cursor-not-allowed [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground shadow hover:bg-primary/90",
        destructive: "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",
        outline: "border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",
        secondary: "bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline"
      },
      size: {
        default: "h-9 px-4 py-2",
        sm: "h-8 rounded-md px-3 text-xs",
        lg: "h-10 rounded-md px-8",
        icon: "h-9 w-9"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default"
    }
  }
);
const Button = reactExports.forwardRef(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return /* @__PURE__ */ jsxRuntimeExports.jsx(Comp, { className: cn(buttonVariants({ variant, size, className })), ref, ...props });
  }
);
Button.displayName = "Button";
const DropdownMenu = Root2;
const DropdownMenuTrigger = Trigger;
const DropdownMenuSubTrigger = reactExports.forwardRef(({ className, inset, children, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
  SubTrigger2,
  {
    ref,
    className: cn(
      "flex cursor-default select-none items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent data-[state=open]:bg-accent [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
      inset && "pl-8",
      className
    ),
    ...props,
    children: [
      children,
      /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronRight, { className: "ml-auto" })
    ]
  }
));
DropdownMenuSubTrigger.displayName = SubTrigger2.displayName;
const DropdownMenuSubContent = reactExports.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx(
  SubContent2,
  {
    ref,
    className: cn(
      "z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 origin-(--radix-dropdown-menu-content-transform-origin)",
      className
    ),
    ...props
  }
));
DropdownMenuSubContent.displayName = SubContent2.displayName;
const DropdownMenuContent = reactExports.forwardRef(({ className, sideOffset = 4, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx(Portal2, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
  Content2,
  {
    ref,
    sideOffset,
    className: cn(
      "z-50 max-h-[var(--radix-dropdown-menu-content-available-height)] min-w-[8rem] overflow-y-auto overflow-x-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md",
      "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 origin-(--radix-dropdown-menu-content-transform-origin)",
      className
    ),
    ...props
  }
) }));
DropdownMenuContent.displayName = Content2.displayName;
const DropdownMenuItem = reactExports.forwardRef(({ className, inset, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx(
  Item2,
  {
    ref,
    className: cn(
      "relative flex cursor-default select-none items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&>svg]:size-4 [&>svg]:shrink-0",
      inset && "pl-8",
      className
    ),
    ...props
  }
));
DropdownMenuItem.displayName = Item2.displayName;
const DropdownMenuCheckboxItem = reactExports.forwardRef(({ className, children, checked, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
  CheckboxItem2,
  {
    ref,
    className: cn(
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      className
    ),
    checked,
    ...props,
    children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ItemIndicator2, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Check, { className: "h-4 w-4" }) }) }),
      children
    ]
  }
));
DropdownMenuCheckboxItem.displayName = CheckboxItem2.displayName;
const DropdownMenuRadioItem = reactExports.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
  RadioItem2,
  {
    ref,
    className: cn(
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      className
    ),
    ...props,
    children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ItemIndicator2, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Circle, { className: "h-2 w-2 fill-current" }) }) }),
      children
    ]
  }
));
DropdownMenuRadioItem.displayName = RadioItem2.displayName;
const DropdownMenuLabel = reactExports.forwardRef(({ className, inset, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx(
  Label2,
  {
    ref,
    className: cn("px-2 py-1.5 text-sm font-semibold", inset && "pl-8", className),
    ...props
  }
));
DropdownMenuLabel.displayName = Label2.displayName;
const DropdownMenuSeparator = reactExports.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx(
  Separator2,
  {
    ref,
    className: cn("-mx-1 my-1 h-px bg-muted", className),
    ...props
  }
));
DropdownMenuSeparator.displayName = Separator2.displayName;
const Avatar = reactExports.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx(
  Root,
  {
    ref,
    className: cn("relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full", className),
    ...props
  }
));
Avatar.displayName = Root.displayName;
const AvatarImage = reactExports.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx(
  Image,
  {
    ref,
    className: cn("aspect-square h-full w-full", className),
    ...props
  }
));
AvatarImage.displayName = Image.displayName;
const AvatarFallback = reactExports.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx(
  Fallback,
  {
    ref,
    className: cn(
      "flex h-full w-full items-center justify-center rounded-full bg-muted",
      className
    ),
    ...props
  }
));
AvatarFallback.displayName = Fallback.displayName;
function SiteHeader() {
  const { user } = useAuth();
  const navigate = useNavigate();
  const [isAdmin, setIsAdmin] = reactExports.useState(false);
  const [profile, setProfile] = reactExports.useState(null);
  reactExports.useEffect(() => {
    if (!user) {
      setIsAdmin(false);
      setProfile(null);
      return;
    }
    supabase.from("profiles").select("username,display_name,avatar_url").eq("id", user.id).maybeSingle().then(({ data }) => setProfile(data));
    supabase.rpc("has_role", { _user_id: user.id, _role: "admin" }).then(({ data }) => setIsAdmin(!!data));
  }, [user]);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("nav", { className: "sticky top-0 z-50 bg-paper/80 backdrop-blur-md border-b border-ink/5 px-4 md:px-6 py-3.5 flex items-center justify-between", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/", className: "font-serif text-xl md:text-2xl font-bold tracking-tighter uppercase", children: "HSS" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "hidden md:flex gap-6 text-xs font-medium text-ink/60 uppercase tracking-widest", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/category/$slug", params: { slug: "success-stories" }, className: "hover:text-accent transition-colors", children: "Success stories" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/category/$slug", params: { slug: "interviews" }, className: "hover:text-accent transition-colors", children: "Interviews" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/category/$slug", params: { slug: "entrepreneurship" }, className: "hover:text-accent transition-colors", children: "Entrepreneurship" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/submit", className: "hover:text-accent transition-colors", children: "Guest Post" })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center gap-2", children: user ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { asChild: true, size: "sm", className: "rounded-full bg-ink text-white hover:bg-accent", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/write", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(PenLine, { className: "size-3.5" }),
        "Write"
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(DropdownMenu, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(DropdownMenuTrigger, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Avatar, { className: "size-9 cursor-pointer ring-1 ring-ink/10", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(AvatarImage, { src: profile?.avatar_url ?? void 0 }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(AvatarFallback, { children: (profile?.display_name ?? user.email ?? "?").slice(0, 1).toUpperCase() })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(DropdownMenuContent, { align: "end", className: "w-56", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(DropdownMenuLabel, { className: "font-normal", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm font-medium", children: profile?.display_name ?? "Reader" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-xs text-muted-foreground", children: [
              "@",
              profile?.username ?? "—"
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(DropdownMenuSeparator, {}),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(DropdownMenuItem, { onClick: () => navigate({ to: "/dashboard" }), children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(LayoutDashboard, { className: "size-4" }),
            " Dashboard"
          ] }),
          profile?.username && /* @__PURE__ */ jsxRuntimeExports.jsx(DropdownMenuItem, { onClick: () => navigate({ to: "/author/$username", params: { username: profile.username } }), children: "My profile" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(DropdownMenuItem, { onClick: () => navigate({ to: "/settings" }), children: "Settings" }),
          isAdmin && /* @__PURE__ */ jsxRuntimeExports.jsxs(DropdownMenuItem, { onClick: () => navigate({ to: "/admin" }), children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Shield, { className: "size-4" }),
            " Admin"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(DropdownMenuSeparator, {}),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(DropdownMenuItem, { onClick: async () => {
            await supabase.auth.signOut();
            navigate({ to: "/" });
          }, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(LogOut, { className: "size-4" }),
            " Sign out"
          ] })
        ] })
      ] })
    ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { asChild: true, variant: "ghost", size: "sm", className: "rounded-full", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/auth", children: "Sign in" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { asChild: true, size: "sm", className: "rounded-full bg-ink text-white hover:bg-accent", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/auth", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(PenLine, { className: "size-3.5" }),
        "Write"
      ] }) })
    ] }) })
  ] });
}
function SiteFooter() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("footer", { className: "border-t border-ink/5 mt-20 py-12 bg-paper", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-serif text-xl font-bold tracking-tighter", children: "HINDI SUCCESS STORIES" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-8 text-[10px] font-bold uppercase tracking-[0.2em] text-ink/40", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/about", className: "hover:text-accent", children: "About" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/submit", className: "hover:text-accent", children: "Advertise" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/privacy", className: "hover:text-accent", children: "Privacy" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/terms", className: "hover:text-accent", children: "Terms" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-[10px] text-ink/30 uppercase tracking-widest", children: [
      "© ",
      (/* @__PURE__ */ new Date()).getFullYear(),
      " HSS Editorial"
    ] })
  ] }) });
}
const Toaster = ({ ...props }) => {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    Toaster$1,
    {
      className: "toaster group",
      toastOptions: {
        classNames: {
          toast: "group toast group-[.toaster]:bg-background group-[.toaster]:text-foreground group-[.toaster]:border-border group-[.toaster]:shadow-lg",
          description: "group-[.toast]:text-muted-foreground",
          actionButton: "group-[.toast]:bg-primary group-[.toast]:text-primary-foreground",
          cancelButton: "group-[.toast]:bg-muted group-[.toast]:text-muted-foreground"
        }
      },
      ...props
    }
  );
};
function AuthListener() {
  const router2 = useRouter();
  const qc = useQueryClient();
  reactExports.useEffect(() => {
    const { data } = supabase.auth.onAuthStateChange((event) => {
      if (event !== "SIGNED_IN" && event !== "SIGNED_OUT" && event !== "USER_UPDATED") return;
      router2.invalidate();
      if (event !== "SIGNED_OUT") qc.invalidateQueries();
    });
    return () => data.subscription.unsubscribe();
  }, [router2, qc]);
  return null;
}
function NotFoundComponent() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex min-h-screen flex-col", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(SiteHeader, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-1 items-center justify-center px-6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-md text-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-serif text-7xl font-bold", children: "404" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-muted-foreground", children: "This story doesn't exist — yet." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/", className: "mt-6 inline-block rounded-full bg-ink px-5 py-2 text-sm font-medium text-white hover:bg-accent transition-colors", children: "Back to home" })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(SiteFooter, {})
  ] });
}
function ErrorComponent({ error, reset }) {
  console.error(error);
  const router2 = useRouter();
  reactExports.useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex min-h-screen items-center justify-center bg-background px-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-md text-center", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-serif text-2xl font-bold", children: "Something went wrong" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: error.message }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6 flex gap-2 justify-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => {
        router2.invalidate();
        reset();
      }, className: "rounded-full bg-ink px-4 py-2 text-sm text-white hover:bg-accent", children: "Try again" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "/", className: "rounded-full border px-4 py-2 text-sm", children: "Home" })
    ] })
  ] }) });
}
const Route$k = createRootRouteWithContext()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Hindi Success Stories — Premium Publishing Platform" },
      { name: "description", content: "A premium editorial platform for Hindi and English writers to publish success stories, interviews and essays." },
      { property: "og:site_name", content: "Hindi Success Stories" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" }
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;0,800;1,700&family=Inter:wght@400;500;600;700&display=swap" },
      { rel: "stylesheet", href: appCss },
      { rel: "icon", href: "/favicon.ico" }
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebSite",
          name: "Hindi Success Stories",
          url: "https://hindisuccessstories.in"
        })
      }
    ]
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent
});
function RootShell({ children }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("html", { lang: "en", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("head", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(HeadContent, {}) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("body", { children: [
      children,
      /* @__PURE__ */ jsxRuntimeExports.jsx(Scripts, {})
    ] })
  ] });
}
function RootComponent() {
  const { queryClient } = Route$k.useRouteContext();
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(QueryClientProvider, { client: queryClient, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(AuthListener, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Outlet, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Toaster, { position: "top-center" })
  ] });
}
const $$splitComponentImporter$i = () => import("./terms-3N28K4jf.mjs");
const Route$j = createFileRoute("/terms")({
  head: () => ({
    meta: [{
      title: "Terms — HSS"
    }, {
      name: "description",
      content: "Terms of use for Hindi Success Stories."
    }, {
      property: "og:url",
      content: "/terms"
    }],
    links: [{
      rel: "canonical",
      href: "/terms"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$i, "component")
});
const $$splitComponentImporter$h = () => import("./submit-CJAFHZg7.mjs");
const Route$i = createFileRoute("/submit")({
  head: () => ({
    meta: [{
      title: "Submit a guest post — Hindi Success Stories"
    }, {
      name: "description",
      content: "Pitch us your story. Standard, featured and premium guest-post placements available with contextual backlinks."
    }, {
      property: "og:title",
      content: "Submit a guest post — HSS"
    }, {
      property: "og:description",
      content: "Pitch a guest post — standard, featured or premium placement with backlinks."
    }, {
      property: "og:url",
      content: "/submit"
    }],
    links: [{
      rel: "canonical",
      href: "/submit"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$h, "component")
});
const BASE_URL = "";
const Route$h = createFileRoute("/sitemap.xml")({
  server: {
    handlers: {
      GET: async () => {
        const { publicClient } = await import("./supabase-public.server-BOBxxuMr.mjs");
        const sb = publicClient();
        const [{ data: articles }, { data: categories }, { data: profiles }] = await Promise.all([
          sb.from("articles").select("slug, published_at, updated_at").eq("status", "published"),
          sb.from("categories").select("slug"),
          sb.from("profiles").select("username, updated_at")
        ]);
        const entries = [
          { path: "/", changefreq: "daily", priority: "1.0" },
          { path: "/about", changefreq: "monthly", priority: "0.5" },
          { path: "/submit", changefreq: "weekly", priority: "0.7" },
          { path: "/privacy", changefreq: "yearly", priority: "0.3" },
          { path: "/terms", changefreq: "yearly", priority: "0.3" },
          ...(categories ?? []).map((c) => ({ path: `/category/${c.slug}`, changefreq: "daily", priority: "0.7" })),
          ...(articles ?? []).map((a) => ({ path: `/article/${a.slug}`, lastmod: a.updated_at ?? a.published_at, changefreq: "weekly", priority: "0.8" })),
          ...(profiles ?? []).map((p) => ({ path: `/author/${p.username}`, lastmod: p.updated_at, changefreq: "weekly", priority: "0.5" }))
        ];
        const urls = entries.map((e) => [
          `  <url>`,
          `    <loc>${BASE_URL}${e.path}</loc>`,
          e.lastmod ? `    <lastmod>${e.lastmod}</lastmod>` : null,
          e.changefreq ? `    <changefreq>${e.changefreq}</changefreq>` : null,
          e.priority ? `    <priority>${e.priority}</priority>` : null,
          `  </url>`
        ].filter(Boolean).join("\n"));
        const xml = [`<?xml version="1.0" encoding="UTF-8"?>`, `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`, ...urls, `</urlset>`].join("\n");
        return new Response(xml, { headers: { "Content-Type": "application/xml", "Cache-Control": "public, max-age=3600" } });
      }
    }
  }
});
const $$splitComponentImporter$g = () => import("./privacy-DVDBx4zT.mjs");
const Route$g = createFileRoute("/privacy")({
  head: () => ({
    meta: [{
      title: "Privacy Policy — HSS"
    }, {
      name: "description",
      content: "How we handle your data on Hindi Success Stories."
    }, {
      property: "og:url",
      content: "/privacy"
    }],
    links: [{
      rel: "canonical",
      href: "/privacy"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$g, "component")
});
const $$splitComponentImporter$f = () => import("./auth-GosYa_xA.mjs");
const Route$f = createFileRoute("/auth")({
  head: () => ({
    meta: [{
      title: "Sign in — Hindi Success Stories"
    }, {
      name: "description",
      content: "Sign in or create a free account to read and publish stories on Hindi Success Stories."
    }, {
      property: "og:title",
      content: "Sign in — Hindi Success Stories"
    }, {
      property: "og:url",
      content: "/auth"
    }, {
      name: "robots",
      content: "noindex"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$f, "component")
});
const $$splitComponentImporter$e = () => import("./about-CaxNC_I8.mjs");
const Route$e = createFileRoute("/about")({
  head: () => ({
    meta: [{
      title: "About — Hindi Success Stories"
    }, {
      name: "description",
      content: "Hindi Success Stories is a premium publishing platform for Hindi and English writers — focused on success, grit and entrepreneurship."
    }, {
      property: "og:title",
      content: "About — Hindi Success Stories"
    }, {
      property: "og:url",
      content: "/about"
    }],
    links: [{
      rel: "canonical",
      href: "/about"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$e, "component")
});
const $$splitComponentImporter$d = () => import("./route-BFsOu0JM.mjs");
const Route$d = createFileRoute("/_authenticated")({
  ssr: false,
  beforeLoad: async () => {
    const {
      data,
      error
    } = await supabase.auth.getUser();
    if (error || !data.user) throw redirect({
      to: "/auth"
    });
    return {
      user: data.user
    };
  },
  component: lazyRouteComponent($$splitComponentImporter$d, "component")
});
var createSsrRpc = (functionId) => {
  const url = "/_serverFn/" + functionId;
  const serverFnMeta = { id: functionId };
  const fn = async (...args) => {
    return (await getServerFnById(functionId))(...args);
  };
  return Object.assign(fn, {
    url,
    serverFnMeta,
    [TSS_SERVER_FUNCTION]: true
  });
};
const listHomeArticles = createServerFn({
  method: "GET"
}).handler(createSsrRpc("f7f81015ee3789a318310c65d82db2fe90bae34aef8cabac006a1e336db5b40a"));
const getArticleBySlug = createServerFn({
  method: "GET"
}).inputValidator((d) => objectType({
  slug: stringType()
}).parse(d)).handler(createSsrRpc("56247e6ee3d304c48058f8d110f119240330676c76ca2e2c888dd810ae82630f"));
const listByCategory = createServerFn({
  method: "GET"
}).inputValidator((d) => objectType({
  slug: stringType()
}).parse(d)).handler(createSsrRpc("c2b8a8bc7954647241400f9e2a6c5f50e533c1a24a83b85fe9b66049775e6357"));
const listByAuthor = createServerFn({
  method: "GET"
}).inputValidator((d) => objectType({
  username: stringType()
}).parse(d)).handler(createSsrRpc("f4beb373092b23b59832940dff11c0bd4e64de3730d485087e2bb8cde688f9e4"));
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
const saveArticle = createServerFn({
  method: "POST"
}).middleware([requireSupabaseAuth]).inputValidator((d) => articleSaveSchema.parse(d)).handler(createSsrRpc("974c53e9c39bdbac0e2f1c6a5f7e04b7d77cff5bebf8dbe7ff250205637e0e79"));
const getMyArticle = createServerFn({
  method: "GET"
}).middleware([requireSupabaseAuth]).inputValidator((d) => objectType({
  id: stringType().uuid()
}).parse(d)).handler(createSsrRpc("fc0b54c30fa6d2ed5ec71c58f8346a07913e7001e132861d54485c6bae3c83de"));
const listMyArticles = createServerFn({
  method: "GET"
}).middleware([requireSupabaseAuth]).handler(createSsrRpc("5980e3461ebb14456b01158b6c14ee9f03eb64b35cf28a4e4bdbccf412ebcda0"));
const deleteMyArticle = createServerFn({
  method: "POST"
}).middleware([requireSupabaseAuth]).inputValidator((d) => objectType({
  id: stringType().uuid()
}).parse(d)).handler(createSsrRpc("8f60ed66cb3c64c9d8f219fb14aff3baf8a5d9242e4eaee072c6824341602764"));
const toggleLike = createServerFn({
  method: "POST"
}).middleware([requireSupabaseAuth]).inputValidator((d) => objectType({
  article_id: stringType().uuid()
}).parse(d)).handler(createSsrRpc("6db7c8a3537bd9238475af8d32ed3e693f0b334a65e22320cd5b98d6b5565beb"));
const addComment = createServerFn({
  method: "POST"
}).middleware([requireSupabaseAuth]).inputValidator((d) => objectType({
  article_id: stringType().uuid(),
  content: stringType().min(2).max(2e3)
}).parse(d)).handler(createSsrRpc("eb6d610105595061a50a2c1345251b7a1082da6bd585f4f862fdee8130e5f1f8"));
const toggleFollow = createServerFn({
  method: "POST"
}).middleware([requireSupabaseAuth]).inputValidator((d) => objectType({
  user_id: stringType().uuid()
}).parse(d)).handler(createSsrRpc("0898f266f135eb28b19a711a0f7d1cb195af20139abdacc6b1c9f99af2732554"));
const subscribeNewsletter = createServerFn({
  method: "POST"
}).inputValidator((d) => objectType({
  email: stringType().email()
}).parse(d)).handler(createSsrRpc("0bd1d1bd5fbee8184b58dabdde6c99056d09cf4afa7cfec67309ae5145076e58"));
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
}).parse(d)).handler(createSsrRpc("1a31922b8f3d72d22be102fed306d97dcb9346ca7f64913003a96d7dd4e3bfef"));
const homeQO = queryOptions({
  queryKey: ["home"],
  queryFn: () => listHomeArticles()
});
const $$splitNotFoundComponentImporter$3 = () => import("./index-DkKe5V7c.mjs");
const $$splitErrorComponentImporter$3 = () => import("./index-DKuahxQU.mjs");
const $$splitComponentImporter$c = () => import("./index-DBk0JxpW.mjs");
const Route$c = createFileRoute("/")({
  head: () => ({
    meta: [{
      title: "Hindi Success Stories — Where Ideas Find Their Voice"
    }, {
      name: "description",
      content: "A premium publishing platform for Hindi and English writers. Read success stories, interviews, essays and entrepreneurial journeys."
    }, {
      property: "og:title",
      content: "Hindi Success Stories — Premium Publishing Platform"
    }, {
      property: "og:description",
      content: "Read and publish success stories, interviews and essays from India's most thoughtful voices."
    }, {
      property: "og:url",
      content: "/"
    }, {
      property: "og:type",
      content: "website"
    }],
    links: [{
      rel: "canonical",
      href: "/"
    }]
  }),
  loader: ({
    context
  }) => context.queryClient.ensureQueryData(homeQO),
  component: lazyRouteComponent($$splitComponentImporter$c, "component"),
  errorComponent: lazyRouteComponent($$splitErrorComponentImporter$3, "errorComponent"),
  notFoundComponent: lazyRouteComponent($$splitNotFoundComponentImporter$3, "notFoundComponent")
});
const $$splitComponentImporter$b = () => import("./category._slug-Bc719yWT.mjs");
const $$splitErrorComponentImporter$2 = () => import("./category._slug-9fh-Zqil.mjs");
const $$splitNotFoundComponentImporter$2 = () => import("./category._slug-DI4lh1kV.mjs");
const Route$b = createFileRoute("/category/$slug")({
  loader: async ({
    params
  }) => {
    const r = await listByCategory({
      data: {
        slug: params.slug
      }
    });
    if (!r) throw notFound();
    return r;
  },
  head: ({
    params,
    loaderData
  }) => {
    const c = loaderData?.category;
    const title = c ? `${c.name} — HSS` : "Category";
    const desc = c?.description || `Articles in ${c?.name} on Hindi Success Stories.`;
    return {
      meta: [{
        title
      }, {
        name: "description",
        content: desc
      }, {
        property: "og:title",
        content: title
      }, {
        property: "og:description",
        content: desc
      }, {
        property: "og:url",
        content: `/category/${params.slug}`
      }, {
        property: "og:type",
        content: "website"
      }],
      links: [{
        rel: "canonical",
        href: `/category/${params.slug}`
      }]
    };
  },
  notFoundComponent: lazyRouteComponent($$splitNotFoundComponentImporter$2, "notFoundComponent"),
  errorComponent: lazyRouteComponent($$splitErrorComponentImporter$2, "errorComponent"),
  component: lazyRouteComponent($$splitComponentImporter$b, "component")
});
const $$splitComponentImporter$a = () => import("./author._username-CgMFWZ2r.mjs");
const $$splitErrorComponentImporter$1 = () => import("./author._username-DwZ_mWoj.mjs");
const $$splitNotFoundComponentImporter$1 = () => import("./author._username-BwpAnnZa.mjs");
const Route$a = createFileRoute("/author/$username")({
  loader: async ({
    params
  }) => {
    const r = await listByAuthor({
      data: {
        username: params.username
      }
    });
    if (!r) throw notFound();
    return r;
  },
  head: ({
    params,
    loaderData
  }) => {
    const p = loaderData?.profile;
    const title = p ? `${p.display_name} (@${p.username}) — HSS` : "Author";
    const desc = p?.bio || `Articles by ${p?.display_name} on Hindi Success Stories.`;
    return {
      meta: [{
        title
      }, {
        name: "description",
        content: desc
      }, {
        property: "og:title",
        content: title
      }, {
        property: "og:description",
        content: desc
      }, {
        property: "og:type",
        content: "profile"
      }, {
        property: "og:url",
        content: `/author/${params.username}`
      }, ...p?.avatar_url ? [{
        property: "og:image",
        content: p.avatar_url
      }] : []],
      links: [{
        rel: "canonical",
        href: `/author/${params.username}`
      }],
      scripts: [{
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ProfilePage",
          mainEntity: {
            "@type": "Person",
            name: p?.display_name,
            url: p?.website_url,
            sameAs: [p?.twitter_handle && `https://twitter.com/${p.twitter_handle.replace("@", "")}`, p?.linkedin_url, p?.github_url].filter(Boolean)
          }
        })
      }]
    };
  },
  notFoundComponent: lazyRouteComponent($$splitNotFoundComponentImporter$1, "notFoundComponent"),
  errorComponent: lazyRouteComponent($$splitErrorComponentImporter$1, "errorComponent"),
  component: lazyRouteComponent($$splitComponentImporter$a, "component")
});
const $$splitComponentImporter$9 = () => import("./article._slug-D_NOW4Sy.mjs");
const $$splitErrorComponentImporter = () => import("./article._slug-Caye37Te.mjs");
const $$splitNotFoundComponentImporter = () => import("./article._slug-C5oVa3jk.mjs");
const Route$9 = createFileRoute("/article/$slug")({
  loader: ({
    params
  }) => getArticleBySlug({
    data: {
      slug: params.slug
    }
  }),
  head: ({
    params,
    loaderData
  }) => {
    const a = loaderData;
    if (!a) return {
      meta: [{
        title: "Story not found"
      }, {
        name: "robots",
        content: "noindex"
      }]
    };
    const title = a.meta_title || a.title;
    const desc = a.meta_description || a.excerpt || a.subtitle || "";
    return {
      meta: [{
        title: `${title} — HSS`
      }, {
        name: "description",
        content: desc
      }, {
        name: "author",
        content: a.author?.display_name ?? "HSS"
      }, {
        property: "og:title",
        content: title
      }, {
        property: "og:description",
        content: desc
      }, {
        property: "og:type",
        content: "article"
      }, {
        property: "og:url",
        content: `/article/${params.slug}`
      }, ...a.cover_image_url ? [{
        property: "og:image",
        content: a.cover_image_url
      }, {
        name: "twitter:image",
        content: a.cover_image_url
      }] : [], {
        name: "twitter:card",
        content: "summary_large_image"
      }, {
        name: "twitter:title",
        content: title
      }, {
        name: "twitter:description",
        content: desc
      }, {
        name: "article:published_time",
        content: a.published_at ?? a.created_at
      }],
      links: [{
        rel: "canonical",
        href: a.canonical_url || `/article/${params.slug}`
      }],
      scripts: [{
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Article",
          headline: a.title,
          description: desc,
          image: a.cover_image_url ? [a.cover_image_url] : void 0,
          datePublished: a.published_at,
          dateModified: a.published_at ?? a.created_at,
          author: a.author ? {
            "@type": "Person",
            name: a.author.display_name,
            url: `/author/${a.author.username}`
          } : void 0,
          publisher: {
            "@type": "Organization",
            name: "Hindi Success Stories"
          },
          mainEntityOfPage: {
            "@type": "WebPage",
            "@id": `/article/${params.slug}`
          }
        })
      }]
    };
  },
  notFoundComponent: lazyRouteComponent($$splitNotFoundComponentImporter, "notFoundComponent"),
  errorComponent: lazyRouteComponent($$splitErrorComponentImporter, "errorComponent"),
  component: lazyRouteComponent($$splitComponentImporter$9, "component")
});
const $$splitComponentImporter$8 = () => import("./write-B0aoGPfK.mjs");
const Route$8 = createFileRoute("/_authenticated/write")({
  validateSearch: (s) => ({
    id: typeof s.id === "string" ? s.id : void 0
  }),
  head: () => ({
    meta: [{
      title: "Write a story — HSS"
    }, {
      name: "robots",
      content: "noindex"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$8, "component")
});
const $$splitComponentImporter$7 = () => import("./settings-BKEPls2u.mjs");
const Route$7 = createFileRoute("/_authenticated/settings")({
  head: () => ({
    meta: [{
      title: "Settings — HSS"
    }, {
      name: "robots",
      content: "noindex"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$7, "component")
});
const $$splitComponentImporter$6 = () => import("./dashboard-BKBmekg2.mjs");
const Route$6 = createFileRoute("/_authenticated/dashboard")({
  head: () => ({
    meta: [{
      title: "Dashboard — HSS"
    }, {
      name: "robots",
      content: "noindex"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$6, "component")
});
const $$splitComponentImporter$5 = () => import("./admin-DHlTaMFt.mjs");
const Route$5 = createFileRoute("/_authenticated/admin")({
  head: () => ({
    meta: [{
      title: "Admin — HSS"
    }, {
      name: "robots",
      content: "noindex"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$5, "component")
});
const $$splitComponentImporter$4 = () => import("./admin.index-CfMf0_rI.mjs");
const Route$4 = createFileRoute("/_authenticated/admin/")({
  component: lazyRouteComponent($$splitComponentImporter$4, "component")
});
const $$splitComponentImporter$3 = () => import("./admin.users-DO4lxgQj.mjs");
const Route$3 = createFileRoute("/_authenticated/admin/users")({
  component: lazyRouteComponent($$splitComponentImporter$3, "component")
});
const $$splitComponentImporter$2 = () => import("./admin.submissions-wvr-JrNP.mjs");
const Route$2 = createFileRoute("/_authenticated/admin/submissions")({
  component: lazyRouteComponent($$splitComponentImporter$2, "component")
});
const $$splitComponentImporter$1 = () => import("./admin.comments-DdanE1Mc.mjs");
const Route$1 = createFileRoute("/_authenticated/admin/comments")({
  component: lazyRouteComponent($$splitComponentImporter$1, "component")
});
const $$splitComponentImporter = () => import("./admin.articles-B3vN2_wN.mjs");
const Route = createFileRoute("/_authenticated/admin/articles")({
  component: lazyRouteComponent($$splitComponentImporter, "component")
});
const TermsRoute = Route$j.update({
  id: "/terms",
  path: "/terms",
  getParentRoute: () => Route$k
});
const SubmitRoute = Route$i.update({
  id: "/submit",
  path: "/submit",
  getParentRoute: () => Route$k
});
const SitemapDotxmlRoute = Route$h.update({
  id: "/sitemap.xml",
  path: "/sitemap.xml",
  getParentRoute: () => Route$k
});
const PrivacyRoute = Route$g.update({
  id: "/privacy",
  path: "/privacy",
  getParentRoute: () => Route$k
});
const AuthRoute = Route$f.update({
  id: "/auth",
  path: "/auth",
  getParentRoute: () => Route$k
});
const AboutRoute = Route$e.update({
  id: "/about",
  path: "/about",
  getParentRoute: () => Route$k
});
const AuthenticatedRouteRoute = Route$d.update({
  id: "/_authenticated",
  getParentRoute: () => Route$k
});
const IndexRoute = Route$c.update({
  id: "/",
  path: "/",
  getParentRoute: () => Route$k
});
const CategorySlugRoute = Route$b.update({
  id: "/category/$slug",
  path: "/category/$slug",
  getParentRoute: () => Route$k
});
const AuthorUsernameRoute = Route$a.update({
  id: "/author/$username",
  path: "/author/$username",
  getParentRoute: () => Route$k
});
const ArticleSlugRoute = Route$9.update({
  id: "/article/$slug",
  path: "/article/$slug",
  getParentRoute: () => Route$k
});
const AuthenticatedWriteRoute = Route$8.update({
  id: "/write",
  path: "/write",
  getParentRoute: () => AuthenticatedRouteRoute
});
const AuthenticatedSettingsRoute = Route$7.update({
  id: "/settings",
  path: "/settings",
  getParentRoute: () => AuthenticatedRouteRoute
});
const AuthenticatedDashboardRoute = Route$6.update({
  id: "/dashboard",
  path: "/dashboard",
  getParentRoute: () => AuthenticatedRouteRoute
});
const AuthenticatedAdminRoute = Route$5.update({
  id: "/admin",
  path: "/admin",
  getParentRoute: () => AuthenticatedRouteRoute
});
const AuthenticatedAdminIndexRoute = Route$4.update({
  id: "/",
  path: "/",
  getParentRoute: () => AuthenticatedAdminRoute
});
const AuthenticatedAdminUsersRoute = Route$3.update({
  id: "/users",
  path: "/users",
  getParentRoute: () => AuthenticatedAdminRoute
});
const AuthenticatedAdminSubmissionsRoute = Route$2.update({
  id: "/submissions",
  path: "/submissions",
  getParentRoute: () => AuthenticatedAdminRoute
});
const AuthenticatedAdminCommentsRoute = Route$1.update({
  id: "/comments",
  path: "/comments",
  getParentRoute: () => AuthenticatedAdminRoute
});
const AuthenticatedAdminArticlesRoute = Route.update({
  id: "/articles",
  path: "/articles",
  getParentRoute: () => AuthenticatedAdminRoute
});
const AuthenticatedAdminRouteChildren = {
  AuthenticatedAdminArticlesRoute,
  AuthenticatedAdminCommentsRoute,
  AuthenticatedAdminSubmissionsRoute,
  AuthenticatedAdminUsersRoute,
  AuthenticatedAdminIndexRoute
};
const AuthenticatedAdminRouteWithChildren = AuthenticatedAdminRoute._addFileChildren(AuthenticatedAdminRouteChildren);
const AuthenticatedRouteRouteChildren = {
  AuthenticatedAdminRoute: AuthenticatedAdminRouteWithChildren,
  AuthenticatedDashboardRoute,
  AuthenticatedSettingsRoute,
  AuthenticatedWriteRoute
};
const AuthenticatedRouteRouteWithChildren = AuthenticatedRouteRoute._addFileChildren(AuthenticatedRouteRouteChildren);
const rootRouteChildren = {
  IndexRoute,
  AuthenticatedRouteRoute: AuthenticatedRouteRouteWithChildren,
  AboutRoute,
  AuthRoute,
  PrivacyRoute,
  SitemapDotxmlRoute,
  SubmitRoute,
  TermsRoute,
  ArticleSlugRoute,
  AuthorUsernameRoute,
  CategorySlugRoute
};
const routeTree = Route$k._addFileChildren(rootRouteChildren)._addFileTypes();
const getRouter = () => {
  const queryClient = new QueryClient();
  const router2 = createRouter({
    routeTree,
    context: { queryClient },
    scrollRestoration: true,
    defaultPreloadStaleTime: 0
  });
  return router2;
};
const router = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  getRouter
}, Symbol.toStringTag, { value: "Module" }));
export {
  Button as B,
  Route$b as R,
  SiteHeader as S,
  SiteFooter as a,
  subscribeNewsletter as b,
  Route$a as c,
  Route$9 as d,
  addComment as e,
  toggleFollow as f,
  cn as g,
  homeQO as h,
  Route$8 as i,
  saveArticle as j,
  getMyArticle as k,
  createSsrRpc as l,
  listMyArticles as m,
  deleteMyArticle as n,
  router as r,
  submitGuestPost as s,
  toggleLike as t,
  useAuth as u
};
