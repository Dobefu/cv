import BreadCrumbBase, {
  MetadataParams as BreadCrumbMetadataParams,
  generateMetadata as breadcrumbGenerateMetadata,
} from '@/components/layout/breadcrumbs'

export async function generateMetadata(params: BreadCrumbMetadataParams) {
  return breadcrumbGenerateMetadata(params)
}

export default function BreadCrumb() {
  return BreadCrumbBase()
}
