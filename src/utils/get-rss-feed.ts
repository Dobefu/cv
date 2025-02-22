import getProjects from './get-projects'

export default function getRssFeed(locale: string): Response {
  const projects = getProjects(locale)

  let response = '<?xml version="1.0" encoding="utf-8"?>'
  response += '<rss version="2.0">'
  response += '<channel>'
  response += `<title>${process.env.APP_NAME}</title>`
  response += `<link>${process.env.NEXT_PUBLIC_APP_URL}/${locale}</link>`

  for (const project of projects) {
    response += '<item>'
    response += `<title>${project.title}</title>`
    response += `<description>${project.subtext}</description>`
    response += `<link>${process.env.NEXT_PUBLIC_APP_URL}/${locale}/projects/${project.path}</link>`
    response += `<guid>${project.path}</guid>`
    response += '<image>'
    response += `<url>${process.env.NEXT_PUBLIC_APP_URL}/img/projects/${project.image.src}</url>`
    response += `<link>${process.env.NEXT_PUBLIC_APP_URL}/${locale}/projects/${project.path}</link>`
    response += '</image>'
    response += `<language>${locale}</language>`
    response += `<pubDate>${project.updated}</pubDate>`
    response += '</item>'
  }

  response += '</channel>'
  response += '</rss>'

  return new Response(response, {
    headers: {
      'Content-Type': 'text/xml; charset=utf-8',
    },
  })
}
