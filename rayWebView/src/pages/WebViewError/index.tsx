import { View, WebView } from '@ray-js/ray'
import React, { FC } from 'react'

import styles from './index.module.less'

const Home: FC = () => {
  const handleEvent = (type: string) => (e) => {
    console.log('webview event' + type, e)
  }
  return (
    <View className={styles['container']}>
      <View>webview before</View>
      <WebView
        src="https://path"
        onMessage={handleEvent('onMessage')}
        onLoad={handleEvent('onLoad')}
        onError={handleEvent('onError')}
      ></WebView>
      <View>webview after</View>
    </View>
  )
}

export default Home
