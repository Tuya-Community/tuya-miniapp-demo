import {
  Button,
  View,
  Video,
  Switch,
  createVideoContext,
  RadioGroup,
  Radio,
  Label,
  Input,
  Slider,
  getVideoInfo,
  saveVideoToPhotosAlbum,
} from '@ray-js/ray'
import {
  getRandomBoolean,
  getRandomNumber,
  getRandomNumberMin,
  getRandomColor,
} from '../../utils/index'
import React, { Component } from 'react'

import styles from './index.module.less'
// 视频地址
const VIDEO_SRC =
  'https://images.tuyacn.com/rms-static/784fddc0-95fc-11ec-9792-55a737b91552-1645767212444.mp4?tyName=%E4%B8%AD%E6%96%87-2022%E6%B6%82%E9%B8%A6%E5%93%81%E7%89%8C%E5%AE%A3%E4%BC%A0%E7%89%87-01.04.mp4'
// 封面地址
const VIDEO_POSTER = 'https://promotion-static.tuyacn.com/static/206715357975789568.jpg'
class Index extends Component {
  state = {
    danmuList: [
      {
        text: '第 1s 出现的弹幕',
        color: '#ff0000',
        time: 1,
      },
      {
        text: '第 3s 出现的弹幕',
        color: '#ff00ff',
        time: 3,
      },
    ],
    controls: true,
    showMuteBtn: true,
    duration: getRandomNumber(),
    autoplay: getRandomBoolean(),
    loop: true,
    muted: getRandomBoolean(),
    initialTime: getRandomNumberMin(),
    objectFit: 'contain',
    showFullscreenBtn: false,
    showPlayBtn: true,
    inputValue: '',
  }
  videoContext: any

  componentDidMount(): void {
    this.videoContext = createVideoContext('myVideo')
  }

  toggleLoop = () => {
    this.setState({
      loop: !this.state.loop,
    })
  }
  videoErrorCallback = (e) => {
    console.log('video 视频错误信息:', e.detail.errMsg)
  }
  event = (type) => (e) => {
    console.log(`${type} video event`, e)
  }

  changeRadio = (e) => {
    this.setState({
      objectFit: e.detail.value,
    })
  }

  toggleFullScreen = () => {
    this.setState({
      showFullscreenBtn: !this.state.showFullscreenBtn,
    })
  }

  videoOperation = (type) => () => {
    this.videoContext[type]()
  }

  sendDanmu = () => {
    this.videoContext.sendDanmu({
      text: this.state.inputValue || '哈哈哈哈',
      color: getRandomColor(),
    })
    this.setState({
      inputValue: '',
    })
  }

  handleInput = (e) => {
    this.setState({
      inputValue: e.detail.value,
    })
  }
  setRate = (e) => {
    this.videoContext.playbackRate(e.value)
  }
  seek = () => {
    this.videoContext.seek(getRandomNumberMin())
  }

  render() {
    const {
      duration,
      danmuList,
      controls,
      showMuteBtn,
      autoplay,
      muted,
      initialTime,
      loop,
      objectFit,
      showFullscreenBtn,
      showPlayBtn,
      inputValue,
    } = this.state
    return (
      <>
        <View className={styles['container']}>
          <Video
            id="myVideo"
            duration={duration}
            controls={controls}
            danmuList={danmuList}
            danmuBtn
            muted={muted}
            loop={loop}
            initialTime={initialTime}
            showFullscreenBtn={showFullscreenBtn}
            enableDanmu
            autoplay={autoplay}
            borderRadius={10}
            poster={VIDEO_POSTER}
            src={VIDEO_SRC}
            onError={this.videoErrorCallback}
            onPlay={this.event('onPlay')}
            onPause={this.event('onPause')}
            onTimeupdate={this.event('onTimeupdate')}
            onWaiting={this.event('onWaiting')}
            // onProgress={this.event("onProgress")}
            onLoadedmetadata={this.event('onLoadedmetadata')}
            onSeekcomplete={this.event('onSeekcomplete')}
            showMuteBtn={showMuteBtn}
            objectFit={objectFit}
            showPlayBtn={showPlayBtn}
          ></Video>
        </View>
        <View className={styles['item']}>controls: {'' + controls}</View>
        <View className={styles['item']}>showMuteBtn: {'' + showMuteBtn}</View>
        <View className={styles['item']}>duration: {duration}</View>
        <View className={styles['item']}>autoplay: {'' + autoplay}</View>
        <View className={styles['item']}>muted: {'' + muted}</View>
        <View className={styles['item']}>loop: {'' + loop}</View>
        <View className={styles['item']}>initialTime: {'' + initialTime}</View>
        <View className={styles['item']}>
          showFullscreenBtn: <Switch onClick={this.toggleFullScreen}></Switch>
        </View>
        <View className={styles['item-flex']}>
          设置倍速:
          <Slider onChange={this.setRate} min={1} max={3} showValue></Slider>
        </View>
        <View className={styles['item-flex']}>
          <Input
            style={{ border: '1px solid #999' }}
            value={inputValue}
            onInput={this.handleInput}
          ></Input>
          <Button size="mini" type="primary" onClick={this.sendDanmu}>
            发送弹幕
          </Button>
        </View>
        <View className={styles['item']}>
          <RadioGroup onChange={this.changeRadio}>
            <Label>
              <Radio value="contain	" checked={objectFit === 'contain'} />
              contain:包含
            </Label>
            <Label>
              <Radio value="fill" checked={objectFit === 'fill'} />
              fill:填充
            </Label>
            <Label>
              <Radio value="cover" checked={objectFit === 'cover'} />
              cover:覆盖
            </Label>
          </RadioGroup>
        </View>
        <View className={styles['item']}>
          <Button onClick={this.seek} type="primary">
            随机跳转一个位置
          </Button>
        </View>
        <View className={styles['item']}>
          <Button onClick={this.videoOperation('play')} type="primary">
            开始
          </Button>
        </View>
        <View className={styles['item']}>
          <Button onClick={this.videoOperation('pause')} type="primary">
            暂停
          </Button>
        </View>
        <View className={styles['item']}>
          <Button onClick={this.videoOperation('stop')} type="primary">
            结束
          </Button>
        </View>
      </>
    )
  }
}

export default Index
