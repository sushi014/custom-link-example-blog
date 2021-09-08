import { unified } from "unified";
import remarkParse from "remark-parse";
import remarkRehype from "remark-rehype";
import rehypeStringify from "rehype-stringify";

export default async (markdown: string) => {
  const result = await unified()
    .use(remarkParse) // markdown to mdast
    .use(remarkRehype) // mdast to hast
    .use(rehypeStringify) // hast to html
    .process(markdown);
  return result.toString();
};
