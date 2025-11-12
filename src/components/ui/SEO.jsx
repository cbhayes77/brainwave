import { useEffect } from "react";

export default function SEO({ title, description, image = "/vite.svg", url = window.location.href, type = "website" }) {
  const siteName = "Christopher Hayes - Portfolio";
  const fullTitle = title ? `${title} | ${siteName}` : siteName;

  useEffect(() => {
    // Update document title
    document.title = fullTitle;

    // Update or create meta tags
    const updateMetaTag = (name, content, property = false) => {
      const selector = property ? `meta[property="${name}"]` : `meta[name="${name}"]`;
      let meta = document.querySelector(selector);

      if (!meta) {
        meta = document.createElement("meta");
        if (property) {
          meta.setAttribute("property", name);
        } else {
          meta.setAttribute("name", name);
        }
        document.head.appendChild(meta);
      }
      meta.setAttribute("content", content);
    };

    // Basic Meta Tags
    updateMetaTag("description", description);
    updateMetaTag("robots", "index, follow");
    updateMetaTag("author", "Christopher Hayes");

    // Open Graph / Facebook
    updateMetaTag("og:type", type, true);
    updateMetaTag("og:title", fullTitle, true);
    updateMetaTag("og:description", description, true);
    updateMetaTag("og:image", image, true);
    updateMetaTag("og:url", url, true);
    updateMetaTag("og:site_name", siteName, true);

    // Twitter
    updateMetaTag("twitter:card", "summary_large_image");
    updateMetaTag("twitter:title", fullTitle);
    updateMetaTag("twitter:description", description);
    updateMetaTag("twitter:image", image);

    // Update canonical link
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.setAttribute("rel", "canonical");
      document.head.appendChild(canonical);
    }
    canonical.setAttribute("href", url);
  }, [fullTitle, description, image, url, type, siteName]);

  return null;
}
