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
  'https://images.tuyacn.com/rms-static/a4264da0-df77-11ee-8f06-49ae7b2fadcf-1710141544314.mp4?tyName=video.mp4'
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
    let self = this
    return new Promise((resolve) => {
      const DownloadFileTask = downloadFile({
        url: src,
        success: (res) => {
          console.log('downloadFile success', res)
          resolve(res)
        },
        failure: (e) => {
          console.log('downloadFile fail', e)
        },
        complete: () => {
          console.log('downloadFile complete')
          self.setState({
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
      // console.log('DownloadFileTask', DownloadFileTask)
    })
  }

  getNetworkVideoInfo = async () => {
    let { tempFilePath } = await this.downloadVideo(VIDEO_SRC)
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
  getLocalVideoInfo = () => {
    chooseMedia({
      count: 1,
      mediaType: 'video',
      success: (res) => {
        console.log('chooseMedia success', res, res.tempFiles[0])
        getVideoInfo({
          src: res.tempFiles[0].tempFilePath,
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
      },
      fail: (err) => {
        console.log('chooseMedia fail', err)
      },
      complete: () => {
        console.log('chooseMedia complete')
      },
    })
  }
  saveNetworkVideo = async () => {
    let { tempFilePath } = await this.downloadVideo(VIDEO_SRC)
    console.log('tempFilePath', tempFilePath)
    saveVideoToPhotosAlbum({
      filePath: tempFilePath,
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
      </View>
    )
  }
}

export default Index
