const readingTime = require("reading-time");
const mdxPrism = require("mdx-prism");
const withMdxEnhanced = require("next-mdx-enhanced");

module.exports = withMdxEnhanced({
  layoutPath: "components/layouts",
  defaultLayout: true,
  fileExtensions: ["mdx"],
  usesSrc: false,
  reExportDataFetching: false,
  remarkPlugins: [
    require("remark-autolink-headings"),
    require("remark-slug"),
    require("remark-code-titles"),
  ],
  rehypePlugins: [mdxPrism],
  extendFrontMatter: {
    process: (mdxContent) => ({
      wordCount: mdxContent.split(/\s+/gu).length,
      readingTime: readingTime(mdxContent),
    }),
    phase: "prebuild|loader|both",
  },
})({
  target: "serverless",
  webpack: (config, { isServer }) => {
    if (isServer) {
      require("./scripts/generate-sitemap");
    }

    return config;
  },
});
