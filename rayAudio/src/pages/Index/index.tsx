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
          router.push('/audio')
        }}
      >
        Audio 用法
      </Button>
      <Button
        type="primary"
        className={styles.btn}
        onClick={() => {
          router.push('/getAudioDuration')
        }}
      >
        相关信息获取
      </Button>
    </View>
  )
}

export default Home
