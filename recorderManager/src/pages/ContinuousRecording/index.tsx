import {
  Button,
  View,
  getRecorderManager,
  onRecordingEvent,
  offRecordingEvent,
  authorize,
} from '@ray-js/ray'
import React, { FC, useRef, useEffect } from 'react'
import styles from './index.module.less'

const Home: FC = () => {
  const recorder = useRef()
  useEffect(() => {
    // 在组件挂载时执行的代码
    return () => {
      offRecordingEvent((res) => {
        console.log('offRecordingEvent ==>', res)
      })
    }
  }, [])
  const start = () => {
    authorize({
      scope: 'scope.record',
      success(res) {
        onRecordingEvent((res) => {
          console.log('onRecordingEvent ==>', res)
        })
        // 先做监听
        // @ts-ignore
        recorder.current = getRecorderManager({
          success(res) {
            console.log('getRecorderManager success ==>', res)
          },
          // @ts-ignore
          fail(params) {
            console.log('getRecorderManager failure ==>', params)
          },
        })
        // @ts-ignore
        recorder.current.startRecording({
          period: 100,
          success(res) {
            console.log('startRecording ==>', res)
          },
          // @ts-ignore
          fail(params) {
            console.log('startRecording fail ==>', params)
          },
          // @ts-ignore
          failure(params) {
            console.log('startRecording failure ==>', params)
          },
        })
      },
    })
  }

  const stop = () => {
    recorder.current &&
      // @ts-ignore
      recorder.current.stopRecording({
        success(res) {
          console.log('stopRecording ==>', res)
        },
        failure(params) {
          console.log('stopRecording failure ==>', params)
        },
      })
  }

  return (
    <View className={styles['container']}>
      <Button className={styles['btn']} onClick={start}>
        点击触发持续录音
      </Button>
      <Button className={styles['btn']} onClick={stop}>
        点击关闭持续录音
      </Button>
    </View>
  )
}

export default Home
