import { location, router, usePageEvent } from 'ray'
import React, { useEffect, useState } from 'react'

import { Image, View, Text } from '@ray-js/components'

import styles from './index.module.less'
import { getCdnPath } from '@/cdn/utils'

export default function Home() {
  const [cdnPath, setCdnPath] = useState('')
  const [cdnPath2, setCdnPath2] = useState('')

  useEffect(() => {
    getCdnPath('/cdn/logo.png').then((path) => {
      setCdnPath(path)
    })
    getCdnPath('/cdn/1.png').then((path) => {
      setCdnPath2(path)
    })
  }, [])

  return (
    <View className={styles.view}>
      <Text className={styles.title}>Hello CDN</Text>
      <Image
        src={cdnPath}
        style={{
          display: 'block',
          width: 100,
          height: 100,
          marginBottom: 20,
          borderRadius: 8,
          boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
        }}
      />
      <Image
        src={cdnPath2}
        style={{
          display: 'block',
          width: 200,
          height: 200,
          borderRadius: 12,
          boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
          border: '1px solid #eee',
        }}
      />
    </View>
  )
}
