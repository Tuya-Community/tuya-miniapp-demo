import {
  Button,
  View,
  getVideoInfo,
  saveVideoToPhotosAlbum,
  downloadFile,
  chooseMedia,
} from '@ray-js/ray'

import React, { Component } from 'react'

import styles from './index.module.less'
// 视频地址
const VIDEO_SRC =
  'https://images.tuyacn.com/rms-static/784fddc0-95fc-11ec-9792-55a737b91552-1645767212444.mp4?tyName=%E4%B8%AD%E6%96%87-2022%E6%B6%82%E9%B8%A6%E5%93%81%E7%89%8C%E5%AE%A3%E4%BC%A0%E7%89%87-01.04.mp4'

type State = {
  progress: number
}

class Index extends Component {
  state: State = {
    progress: 0,
  }
  downloadVideo = async (
    src: string
  ): Promise<{
    tempFilePath: string
    filePath: string
    statusCode: number
    profile: any
  }> => {
    return new Promise((resolve) => {
      const DownloadFileTask = downloadFile({
        url: src,
        success(res) {
          console.log('downloadFile success', res)
          resolve(res)
        },
        failure(e) {
          console.log('downloadFile fail', e)
        },
        complete() {
          this.setState({
            progress: 0,
          })
        },
      })
      
      // 监听下载进度变化
      DownloadFileTask.onProgressUpdate((res) => {
        this.setState({
          progress: res.progress.toFixed(2),
        })
      })
      console.log('DownloadFileTask', DownloadFileTask)
    })
  }

  getNetworkVideoInfo = async () => {
    let { tempFilePath } = await this.downloadVideo(VIDEO_SRC)
    console.log('tempFilePath', tempFilePath)
    getVideoInfo({
      src: tempFilePath,
      success: (res) => {
        console.log('视频信息:', res)
      },
      fail: (e) => {
        console.log('getVideoInfo fail', e)
      },
      complete: () => {
        console.log(console.log('getVideoInfo complete'))
      },
    })
  }
  getLocalVideoInfo = () => {}
  saveNetworkVideo = () => {
    saveVideoToPhotosAlbum({
      filePath: VIDEO_SRC,
      success: () => {
        console.log('saveVideoToPhotosAlbum success')
      },
      fail: (e) => {
        console.log('saveVideoToPhotosAlbum fail', e)
      },
      complete: () => {
        console.log(console.log('saveVideoToPhotosAlbum complete'))
      },
    })
  }
  saveLocalVideo = () => {}
  render() {
    return (
      <View className={styles['container']}>
        {this.state.progress !== 0 && <View>下载进度： {this.state.progress}</View>}
        <Button type="primary" className={styles['btn']} onClick={this.getNetworkVideoInfo}>
          获取网络视频信息
        </Button>
        <Button type="primary" className={styles['btn']} onClick={this.getLocalVideoInfo}>
          获取本地视频信息
        </Button>
        <Button type="primary" className={styles['btn']} onClick={this.saveNetworkVideo}>
          保存网络视频到相册
        </Button>
        <Button type="primary" className={styles['btn']} onClick={this.saveLocalVideo}>
          保存本地视频到相册
        </Button>
      </View>
    )
  }
}

export default Index
