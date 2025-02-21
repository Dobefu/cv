import OpengraphImage, {
  contentType as opengraphContentType,
  size as opengraphSize,
} from '@/components/utils/opengraph-image'

export const alt = 'Connor van Spronssen - a Full-stack web engineer'
export const size = opengraphSize
export const contentType = opengraphContentType

export default async function Image() {
  return await OpengraphImage({
    title: 'Connor van Spronssen - a Full-stack web engineer',
  })
}
