import { getCdnUrl } from 'ray'
import React from 'react'
import { Image, View, Text } from '@ray-js/components'
import cdnImage from '@/cdn/cdnImage.json'

const imageStyles = {
  base: {
    display: 'block',
  },
  logo: {
    width: 100,
    height: 100,
    marginBottom: 20,
    borderRadius: 8,
    boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
  },
  banner: {
    width: 200,
    height: 200,
    borderRadius: 12,
    boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
    border: '1px solid #eee',
  },
}

export default function Home() {
  // 预先处理CDN URL,避免重复调用
  const logoUrl = getCdnUrl('/cdn/logo.png', cdnImage)
  const bannerUrl = getCdnUrl('/cdn/1.png', cdnImage)

  return (
    <View style={{ padding: 20, backgroundColor: '#f5f5f5', minHeight: '100vh' }}>
      <Text style={{ fontSize: 48, color: '#333', textAlign: 'center' }}>Hello CDN</Text>
      <Image src={logoUrl} style={{ ...imageStyles.base, ...imageStyles.logo }} />
      <Image src={bannerUrl} style={{ ...imageStyles.base, ...imageStyles.banner }} />
    </View>
  )
}
