export default function robots() {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/dealer-login", "/_next/", "/api/"],
      },
    ],
    sitemap: "https://www.katariaenterprise.duckdns.org/sitemap.xml",
    host: "https://www.katariaenterprise.duckdns.org",
  };
}
