import React from "react";
import {
  title,
  description,
  ogImage,
  baseURL,
} from "../../content/config.json";

export default function SEO({ children, ...rest }) {
  return (
    <>
      {/* <!-- HTML Meta Tags --> */}
      <meta name="title" content={title} />
      <meta name="description" content={description} />

      {/* <!-- Google / Search Engine Tags --> */}
      <meta itemprop="name" content={title} />
      <meta itemprop="description" content={description} />
      <meta itemprop="image" content={ogImage} />

      {/* <!-- Facebook Meta Tags --> */}
      <meta property="og:url" content={baseURL} />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} key="title" />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />

      {/* <!-- Twitter Meta Tags --> */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />

      <link rel="icon" href="/favicon.ico" />
    </>
  );
}
