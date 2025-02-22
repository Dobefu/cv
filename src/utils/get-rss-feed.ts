import getProjects from './get-projects'

export default function getRssFeed(locale: string): Response {
  const projects = getProjects(locale)

  let response = '<?xml version="1.0" encoding="utf-8"?>'
  response += '<rss version="2.0" xmlns:media="http://search.yahoo.com/mrss/">'
  response += '<channel>'
  response += `<title>${process.env.APP_NAME}</title>`
  response += `<link>${process.env.NEXT_PUBLIC_APP_URL}/${locale}</link>`
  response += `<language>${locale}</language>`

  for (const project of projects) {
    response += '<item>'
    response += `<title>${project.title}</title>`
    response += `<description>${project.subtext}</description>`
    response += `<link>${process.env.NEXT_PUBLIC_APP_URL}/${locale}/projects/${project.path}</link>`
    response += `<guid>${project.path}</guid>`
    response += `<media:content medium="image" url="${process.env.NEXT_PUBLIC_APP_URL}/img/projects/${project.image.src}" />`
    response += `<pubDate>${project.updated}</pubDate>`
    response += '</item>'
  }

  response += '</channel>'
  response += '</rss>'

  return new Response(response, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
    },
  })
}
