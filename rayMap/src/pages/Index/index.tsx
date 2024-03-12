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
          router.push('/background')
        }}
      >
        背景
      </Button>
      <Button
        type="primary"
        className={styles.btn}
        onClick={() => {
          router.push('/scroll')
        }}
      >
        滚动
      </Button>
      <Button
        type="primary"
        className={styles.btn}
        onClick={() => {
          router.push('/polygonCircle')
        }}
      >
        图形
      </Button>
      <Button
        type="primary"
        className={styles.btn}
        onClick={() => {
          router.push('/scale')
        }}
      >
        缩放
      </Button>
      <Button
        type="primary"
        className={styles.btn}
        onClick={() => {
          router.push('/marker')
        }}
      >
        标记点
      </Button>
      <Button
        type="primary"
        className={styles.btn}
        onClick={() => {
          router.push('/dialog')
        }}
      >
        弹窗
      </Button>
      <Button
        type="primary"
        className={styles.btn}
        onClick={() => {
          router.push('/coverView')
        }}
      >
        CoverView
      </Button>
    </View>
  )
}

export default Home
