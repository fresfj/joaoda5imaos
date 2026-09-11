export type InstagramPost = {
  id: string;
  permalink: string;
  caption?: string;
  timestamp?: string;
};

type InstagramApiResponse = {
  data?: InstagramPost[];
};

const instagramPostPattern = /https:\/\/www\.instagram\.com\/(?:p|reel|tv)\/[A-Za-z0-9_-]+\/?/g;

const normalizeInstagramPermalink = (value: string) => {
  const [withoutQuery] = value.trim().split(/[?#]/);
  const match = withoutQuery.match(instagramPostPattern);
  const permalink = match?.[0];

  if (!permalink) return null;
  return permalink.endsWith('/') ? permalink : `${permalink}/`;
};

const fallbackPermalinks = () =>
  (process.env.INSTAGRAM_POST_URLS ?? '')
    .split(',')
    .map(normalizeInstagramPermalink)
    .filter((url): url is string => Boolean(url))
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
