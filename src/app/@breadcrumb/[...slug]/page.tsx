export async function generateMetadata(props: {
  params: Promise<{ slug: string[] }>
}) {
  const params = await props.params
  const url = process.env.APP_URL

  if (!url) {
    console.warn('APP_URL is not set!')
    return {}
  }

  const pathPartsWithoutLocale = params.slug.splice(1)

  if (pathPartsWithoutLocale.length > 0) {
    pathPartsWithoutLocale.unshift('')
  }

  return {
    metadataBase: new URL(url),
    alternates: {
      canonical: params.slug.join('/'),
      languages: {
        en: `/en${pathPartsWithoutLocale.join('/')}`,
        nl: `/nl${pathPartsWithoutLocale.join('/')}`,
      },
    },
  }
}

export default async function BreadCrumb() {
  return
}
