import { Button, View, getRecorderManager, authorize } from '@ray-js/ray'
import React, { FC, useRef } from 'react'
import styles from './index.module.less'

const Home: FC = () => {
  const recorder = useRef()

  const start = () => {
    authorize({
      scope: 'scope.record',
      success(res) {
        // 先做监听
        // @ts-ignore
        recorder.current = getRecorderManager({
          success(res) {
            console.log('getRecorderManager success ==>', res)
          },
          // @ts-ignore
          fail(params) {
            console.log('getRecorderManager fail ==>', params)
          },
        })
        // @ts-ignore
        recorder.current.start({
          period: 100,
          success(res) {
            console.log('start ==>', res)
          },
          fail(params) {
            console.log('start fail ==>', params)
          },
        })
      },
    })
  }

  const pause = () => {
    // @ts-ignore
    recorder.current.pause({
      period: 100,
      success(res) {
        console.log('pause ==>', res)
      },
      fail(params) {
        console.log('pause fail ==>', params)
      },
    })
  }

  const resume = () => {
    // @ts-ignore
    recorder.current.resume({
      period: 100,
      success(res) {
        console.log('resume ==>', res)
      },
      fail(params) {
        console.log('resume fail ==>', params)
      },
    })
  }

  const stop = () => {
    recorder.current &&
      // @ts-ignore
      recorder.current.stop({
        success(res) {
          console.log('stop ==>', res)
        },
        fail(params) {
          console.log('stop fail ==>', params)
        },
      })
  }

  return (
    <View className={styles['container']}>
      <Button className={styles['btn']} onClick={start}>
        点击开始录音
      </Button>
      <Button className={styles['btn']} onClick={pause}>
        点击暂停录音
      </Button>
      <Button className={styles['btn']} onClick={resume}>
        点击继续录音
      </Button>
      <Button className={styles['btn']} onClick={stop}>
        点击关闭录音
      </Button>
    </View>
  )
}

export default Home
