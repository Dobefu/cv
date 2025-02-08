import BreadcrumbBase, {
  Props as BreadcrumbMetadataProps,
  generateMetadata as breadcrumbGenerateMetadata,
} from '@/components/layout/breadcrumbs'

export async function generateMetadata(params: BreadcrumbMetadataProps) {
  return breadcrumbGenerateMetadata(params)
}

export default function Breadcrumb(props: BreadcrumbMetadataProps) {
  return <BreadcrumbBase {...props} />
}
