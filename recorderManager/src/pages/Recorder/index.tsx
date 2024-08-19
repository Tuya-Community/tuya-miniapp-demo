import { Button, View, getRecorderManager, authorize, createInnerAudioContext } from '@ray-js/ray'
import React, { FC, useRef, useEffect, useState } from 'react'
import styles from './index.module.less'

const Home: FC = () => {
  const recorder = useRef()
  const audioContext = useRef(null)
  const [recordPath, setRecordPath] = useState('')

  useEffect(() => {
    audioContext.current = createInnerAudioContext({
      success: function (res) {
        console.log('createInnerAudioContext success', res)

        audioContext.current.onTimeUpdate((res) => {
          // console.log("onTimeUpdate callback", res);
        })
      },
      fail: function (res) {
        console.log('createInnerAudioContext fail', res)
      },
      complete: function () {
        console.log('createInnerAudioContext complete')
      },
    })
  }, [])

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
          sampleRate: 16000, //采样率
          numberOfChannels: 1, //单声道
          frameSize: 1024 * 1024, //帧大小
          format: 'pcm',
          success(res) {
            console.log('start ==>', res)
            if (res && res.tempFilePath) {
              setRecordPath(res.tempFilePath)
            }
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
          if (res && res.tempFilePath) {
            setRecordPath(res.tempFilePath)
          }
        },
        fail(params) {
          console.log('stop fail ==>', params)
        },
      })
  }

  const playAudio = () => {
    console.log('playAudio recordPath', recordPath)
    audioContext.current.play({
      // src: 'https://images.tuyacn.com/rms-static/4681f900-9fa4-11ee-af19-cfa45f6de59e-1703123840144.mp3?tyName=2.mp3',
      src: recordPath,
      startTime: 0,
      loop: true,
      playbackRate: 1,
      volume: 1,
      success: function (res) {
        console.log(`audio play success`, res)
      },
      fail: function (res) {
        console.log(`audio play fail`, res)
      },
      complete: function (res) {
        console.log(`audio play complete`, res)
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

      <Button className={styles['btn']} onClick={playAudio}>
        播放保存的录音
      </Button>
    </View>
  )
}

export default Home
