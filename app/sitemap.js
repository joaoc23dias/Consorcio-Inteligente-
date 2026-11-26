const SITE_URL = 'https://www.consorciointeligente.com.br';

export default function sitemap() {
  const p = (path, priority, changeFrequency = 'monthly') => ({ url: `${SITE_URL}${path}`, lastModified: new Date(), changeFrequency, priority });
  return [
    p('', 1, 'weekly'),
    p('/simulador', 0.9),
    p('/cartas-contempladas', 0.9),
    p('/sobre', 0.7),
    p('/duvidas', 0.7),
    p('/privacidade', 0.2, 'yearly'),
  ];
}
