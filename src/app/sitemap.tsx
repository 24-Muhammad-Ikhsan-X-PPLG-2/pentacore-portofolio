import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://www.pentacorelabs.biz.id",
      lastModified: new Date(),
    },
  ];
}
