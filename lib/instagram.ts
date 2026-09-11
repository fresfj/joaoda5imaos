export type InstagramPost = {
  id: string;
  permalink: string;
  caption?: string;
  timestamp?: string;
};

type InstagramApiResponse = {
  data?: InstagramPost[];
};

const fallbackPermalinks = () =>
  (process.env.INSTAGRAM_POST_URLS ?? '')
    .split(',')
    .map((url) => url.trim())
    .filter((url) => url.startsWith('https://www.instagram.com/'))
    .slice(0, 6)
    .map((permalink, index) => ({ id: `fallback-${index}`, permalink }));

export async function getInstagramPosts(): Promise<InstagramPost[]> {
  const accessToken = process.env.INSTAGRAM_ACCESS_TOKEN;
  if (!accessToken) return fallbackPermalinks();

  const fields = 'id,caption,permalink,timestamp';
  try {
    const response = await fetch(`https://graph.instagram.com/me/media?fields=${fields}&limit=6`, {
      headers: { Authorization: `Bearer ${accessToken}` },
      next: { revalidate: 3600 },
    });

    if (!response.ok) return fallbackPermalinks();
    const payload = (await response.json()) as InstagramApiResponse;
    return payload.data?.filter((post) => post.permalink).slice(0, 6) ?? fallbackPermalinks();
  } catch {
    return fallbackPermalinks();
  }
}
