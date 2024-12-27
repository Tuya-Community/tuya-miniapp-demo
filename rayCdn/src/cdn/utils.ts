import cdnMap from '@/cdn/cdnImage.json'
import { getCdnUrlAsync } from '@ray-js/ray'

export function getCdnPath(path: string): Promise<string> {
  return getCdnUrlAsync(path, cdnMap)
}
