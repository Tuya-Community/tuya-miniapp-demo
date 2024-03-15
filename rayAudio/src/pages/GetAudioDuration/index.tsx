import {
  Button,
  View,
  getAudioFileDuration,
  getCurrentVolume,
  getCurrentVolumeByMode,
  downloadFile,
} from '@ray-js/ray'
import React, { FC } from 'react'

import styles from './index.module.less'
const AUDIO_PATH =
  'https://images.tuyacn.com/rms-static/cf60cb10-9f19-11ee-8cd8-b117287658f4-1703064369729.mp3?tyName=1.mp3'

const GetAudioDuration: FC = () => {
  const getDuration = () => {
    downloadFile({
      url: AUDIO_PATH,
      success: (res) => {
        const { tempFilePath } = res
        getAudioFileDuration({
          path: tempFilePath,
          success: (res) => {
            // 下载文件需要等待一段时间
            console.log('getAudioFileDuration success', res)
          },
          fail: (err) => {
            console.log('getAudioFileDuration fail', err)
          },
        })
      },
      failure: (err) => {
        console.log('downloadFile fail', err)
      },
    })
  }

  const getValume = () => {
    getCurrentVolume({
      success: (res) => {
        console.log('getCurrentVolume success ', res)
      },
      fail: (err) => {
        console.log('getCurrentVolume fail', err)
      },
    })
  }

  function randomSoundUtil(): { mode: number; name: string } {
    const soundMap: Record<number, string> = {
      0: '语音电话的声音',
      2: '响铃，通知，系统默认音等',
      3: '手机音乐的声音',
      4: '手机闹铃的声音',
      6: '蓝牙音量',
    }

    const numbers = [0, 2, 3, 4, 6]
    const randomIndex = Math.floor(Math.random() * numbers.length)
    const randomValue = numbers[randomIndex]
    return { mode: randomValue, name: soundMap[randomValue] }
  }

  const getValumeByMode = () => {
    const { mode, name } = randomSoundUtil()
    getCurrentVolumeByMode({
      volumeMode: mode,
      success: (res) => {
        console.log('getCurrentVolumeByMode success ' + name + ':', res)
      },
      fail: (err) => {
        console.log('getCurrentVolumeByMode fail', err)
      },
      complete: () => {
        console.log('getCurrentVolumeByMode complete')
      },
    })
  }

  return (
    <View className={styles['container']}>
      <Button type="primary" className={styles.btn} onClick={getDuration}>
        获取音频文件时长信息
      </Button>
      <Button type="primary" className={styles.btn} onClick={getValume}>
        获取当前系统音量
      </Button>
      <Button type="primary" className={styles.btn} onClick={getValumeByMode}>
        随机获取不同模式的系统音量（仅安卓）
      </Button>
    </View>
  )
}

export default GetAudioDuration
