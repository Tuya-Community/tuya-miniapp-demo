import { View, WebView, nativeDisabled, createWebviewContext } from '@ray-js/ray'
import React, { FC, useEffect } from 'react'

import styles from './index.module.less'
let Id
const Home: FC = () => {
  const webviewContext = React.useRef(null)

  const handleEvent = (type: string) => (e) => {
    console.log('webview event' + type + ' ' + e.detail.msg)
  }
  const postToWebview = () => {
    webviewContext.current.postMessage({
      data: {
        msg: 'miniapp send to html ' + Date.now(),
      },
    })
  }
  useEffect(() => {
    nativeDisabled(true)
    webviewContext.current = createWebviewContext('w1')
    Id = setInterval(postToWebview, 5000)
    return () => {
      clearInterval(Id)
    }
  }, [])
  return (
    <View className={styles['container']}>
      <WebView
        id="w1"
        src="https://images.tuyacn.com/rms-static/5db84a50-e5c9-11ee-9eac-b120705c4c0c-1710836351861.html?tyName=postmessage2.html?t=5"
        onMessage={handleEvent('onMessage')}
        onLoad={handleEvent('onLoad')}
        onError={handleEvent('onError')}
      ></WebView>
    </View>
  )
}

export default Home
