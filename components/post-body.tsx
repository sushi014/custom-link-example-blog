import React from "react";
import { unified } from "unified";
import rehypeParse from "rehype-parse";
import rehypeReact from "rehype-react";
import CustomLink from "./custom-link";

const processor = unified()
  // html to hast
  .use(rehypeParse, { fragment: true })

  // hast to react
  .use(rehypeReact, {
    createElement: React.createElement,
    components: {
      a: CustomLink, // aタグをCustomLinkへ置き換える
    },
  });

export default function PostBody({ content }: { content: string }) {
  return <div id="post">{processor.processSync(content).result}</div>;
}