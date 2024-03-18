import { Button, View, openInnerH5 } from '@ray-js/ray'
import React, { FC } from 'react'

import styles from './index.module.less'

const Home: FC = () => {
  const openH5 = () => {
    openInnerH5({
      url: 'https://images.tuyacn.com/rms-static/5320c160-9990-11ee-8bb1-51351f353ef3-1702455564406.html?tyName=postmessage.html?t=1',
      title: '测试标题',
      success: () => {
        console.log('openInnerH5 success')
      },
      fail: (err) => {
        console.log('openInnerH5 fail', err)
      },
      complete: () => {},
    })
  }
  return (
    <View className={styles['container']}>
      <Button onClick={openH5} type="primary" className={styles['btn']}>
        打开外部H5链接
      </Button>
    </View>
  )
}

export default Home
