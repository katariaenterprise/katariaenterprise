export default function sitemap() {
  const base = "https://www.katariaenterprise.duckdns.org";

  const routes = [
    { url: base,                    priority: 1.0,  changeFrequency: "monthly" },
    { url: `${base}/about`,         priority: 0.8,  changeFrequency: "monthly" },
    { url: `${base}/services`,      priority: 0.8,  changeFrequency: "monthly" },
    { url: `${base}/network`,       priority: 0.8,  changeFrequency: "monthly" },
    { url: `${base}/management`,    priority: 0.7,  changeFrequency: "monthly" },
    { url: `${base}/awards`,        priority: 0.7,  changeFrequency: "monthly" },
    { url: `${base}/media`,         priority: 0.6,  changeFrequency: "monthly" },
    { url: `${base}/dealer-login`,  priority: 0.4,  changeFrequency: "yearly"  },
  ];

  return routes.map((route) => ({
    ...route,
    lastModified: new Date(),
  }));
}
