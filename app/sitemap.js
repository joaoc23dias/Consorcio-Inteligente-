const SITE_URL = 'https://joaodias.engenheirodoconsorcio.com.br';

export default function sitemap() {
  return [
    { url: SITE_URL, lastModified: new Date(), changeFrequency: 'weekly', priority: 1 },
    { url: `${SITE_URL}/privacidade`, lastModified: new Date(), changeFrequency: 'yearly', priority: 0.2 },
  ];
}
