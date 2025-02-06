export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string[] }>
}) {
  const url = process.env.APP_URL
  const slug = (await params).slug

  if (!url) {
    console.warn('APP_URL is not set!')
    return {}
  }

  const pathPartsWithoutLocale = slug.slice(1)

  if (pathPartsWithoutLocale.length > 0) {
    pathPartsWithoutLocale.unshift('')
  }

  return {
    metadataBase: new URL(url),
    alternates: {
      canonical: slug.join('/'),
      languages: {
        en: `/en${pathPartsWithoutLocale.join('/')}`,
        nl: `/nl${pathPartsWithoutLocale.join('/')}`,
      },
    },
  }
}

export default function BreadCrumb() {
  return null
}
