import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { M as Markdown$1 } from "../_libs/react-markdown.mjs";
import { r as rehypeRaw } from "../_libs/rehype-raw.mjs";
import { r as rehypeSanitize } from "../_libs/rehype-sanitize.mjs";
import { r as remarkGfm } from "../_libs/remark-gfm.mjs";
function Markdown({ children, linkPolicy = "nofollow" }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "prose-editorial", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
    Markdown$1,
    {
      remarkPlugins: [remarkGfm],
      rehypePlugins: [rehypeRaw, rehypeSanitize],
      components: {
        a: ({ href, children: children2, ...rest }) => {
          const external = href?.startsWith("http");
          const rel = external ? linkPolicy === "dofollow" ? "noopener" : "nofollow noopener ugc" : void 0;
          return /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href, rel, target: external ? "_blank" : void 0, ...rest, children: children2 });
        }
      },
      children
    }
  ) });
}
export {
  Markdown as M
};
