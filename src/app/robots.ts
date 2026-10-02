import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
      },
      {
        userAgent: [
          "GPTBot",
          "ClaudeBot",
          "PerplexityBot",
          "Google-Extended",
          "CCBot",
          "anthropic-ai",
        ],
        allow: "/",
      },
    ],
    sitemap: "https://www.pranajayatech.online/sitemap.xml",
  };
}
