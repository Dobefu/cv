import BreadcrumbBase, {
  Props as BreadcrumbMetadataProps,
  generateMetadata as breadcrumbGenerateMetadata,
  viewport as breadcrumbViewport,
} from '@/components/layout/breadcrumbs'

export const viewport = breadcrumbViewport

export async function generateMetadata(params: BreadcrumbMetadataProps) {
  return breadcrumbGenerateMetadata(params)
}

export default function Breadcrumb({ params }: BreadcrumbMetadataProps) {
  return <BreadcrumbBase params={params} />
}
