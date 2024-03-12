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
          router.push('/recorder')
        }}
      >
        开始录音
      </Button>
      <Button
        type="primary"
        className={styles.btn}
        onClick={() => {
          router.push('/continuousRecording')
        }}
      >
        开始持续录音
      </Button>
    </View>
  )
}

export default Home
