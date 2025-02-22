import getRssFeed from '@/utils/get-rss-feed'

export function GET() {
  return getRssFeed('en')
}
