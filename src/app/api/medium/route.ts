import { NextResponse } from 'next/server';
import { parseString } from 'xml2js';

const RSS_FEED_URL = 'https://medium.com/feed/@pramudithajayarathna';

interface Article {
  title: string;
  description: string;
  image: string;
  pubDate: string;
  link: string;
}

interface RssFeed {
  rss: {
    channel: {
      item: RssItem[];
    };
  };
}

interface RssItem {
  title: string;
  description: string;
  'content:encoded'?: string; // Optional field for content with images
  pubDate: string;
  link: string;
}

const fetchArticles = async (): Promise<Article[]> => {
  const response = await fetch(RSS_FEED_URL);
  const xmlData = await response.text();

  return new Promise((resolve, reject) => {
    parseString(xmlData, { explicitArray: false, mergeAttrs: true }, (err: Error | null, result: RssFeed) => {
      if (err) {
        reject('Error parsing RSS feed');
        return;
      }

      // Extract articles from the RSS feed
      const items = result.rss.channel.item;
      const articles: Article[] = items.map((item: RssItem) => ({
        title: item.title,
        description: item.description,
        image: item['content:encoded']?.match(/<img[^>]+src="([^">]+)"/)?.[1] || '', // Extract first image from content
        pubDate: item.pubDate,
        link: item.link,
      }));

      resolve(articles);
    });
  });
};

export async function GET() {
  try {
    const articles = await fetchArticles();
    return NextResponse.json(articles);
  } catch (error) {
    if (error instanceof Error) {
        return NextResponse.json({ error: error.message }, { status: 500 });
      } else {
        return NextResponse.json({ error: "An unknown error occurred" }, { status: 500 });
      }
  }
}