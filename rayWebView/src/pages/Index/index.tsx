import { Button, View, router } from '@ray-js/ray'
import React, { FC } from 'react'

import styles from './index.module.less'

const Home: FC = () => {
  return (
    <View className={styles['container']}>
      <Button
        type="primary"
        className={styles.btn}
        onClick={() => {
          router.push('/webView')
        }}
      >
        webView
      </Button>
      <Button
        type="primary"
        className={styles.btn}
        onClick={() => {
          router.push('/webViewError')
        }}
      >
        webView Error
      </Button>
    </View>
  )
}

export default Home
