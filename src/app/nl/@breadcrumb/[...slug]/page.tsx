import BreadcrumbBase, {
  Props as BreadcrumbMetadataProps,
  generateMetadata as breadcrumbGenerateMetadata,
} from '@/components/layout/breadcrumbs'

export async function generateMetadata(params: BreadcrumbMetadataProps) {
  return breadcrumbGenerateMetadata(params)
}

export default function Breadcrumb({ params }: BreadcrumbMetadataProps) {
  return <BreadcrumbBase params={params} />
}
