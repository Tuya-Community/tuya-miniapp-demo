import {
  Button,
  View,
  Camera,
  Slider,
  createCameraContext,
  Image,
  Switch,
  RadioGroup,
  Radio,
  Label,
} from '@ray-js/ray'
import React, { Component } from 'react'

import styles from './index.module.less'

class Index extends Component {
  state = {
    resolution: 'high',
    devicePosition: 'back',
    flash: 'auto',
    src: '',
  }
  cameraCtx: any
  componentDidMount(): void {
    this.cameraCtx = createCameraContext()
  }

  bindstop = (e) => {
    console.log('onBindstop: 摄像头非正常终止', e)
  }
  handleError = (e) => {
    console.log('onError: 用户不允许使用摄像头', e)
  }
  initdone = (e) => {
    console.log('onInitdone: 	相机初始化完成', e)
  }

  handleScale = (e) => {
    this.cameraCtx.setZoom({
      zoom: e.value,
      success: (res) => {
        console.log('setZoom success', res)
      },
      fail: (res) => {
        console.log('setZoom fail', res)
      },
    })
  }

  takePhoto = () => {
    this.cameraCtx.takePhoto({
      quality: 'high',
      success: (res) => {
        this.setState({
          src: res.tempImagePath,
        })
      },
      fail: (res) => {
        console.log('demo takePhoto fail', res)
      },
    })
  }

  toggleDevicePosition = () => {
    this.setState({
      devicePosition: this.state.devicePosition === 'back' ? 'front' : 'back',
    })
  }

  changeRadio = (e) => {
    this.setState({
      flash: e.detail.value,
    })
  }
  render() {
    const { resolution, devicePosition, flash, src } = this.state
    return (
      <View className={styles['container']}>
        <View className={styles['tips']}>⚠️ Camera的尺寸即拍照的图片尺寸</View>
        <Camera
          style={{ width: '100%', height: '300px' }}
          resolution={resolution}
          devicePosition={devicePosition}
          flash={flash}
          onBindstop={this.bindstop}
          onError={this.handleError}
          onInitdone={this.initdone}
        ></Camera>

        <Button type="primary" onClick={this.takePhoto}>
          拍照
        </Button>
        <View>
          设置缩放级别
          <Slider min={1} max={20} step={0.5} showValue={true} onChange={this.handleScale}></Slider>
        </View>

        <View style={{ margin: '16px 0' }}>
          开启前置摄像头 <Switch onChange={this.toggleDevicePosition}></Switch>
        </View>
        <View style={{ margin: '16px 0' }}>
          <RadioGroup onChange={this.changeRadio}>
            <Label>
              <Radio value="auto" checked={flash === 'auto'} />
              auto:自动
            </Label>
            <Label>
              <Radio value="on" checked={flash === 'on'} />
              on:打开
            </Label>
            <Label>
              <Radio value="off" checked={flash === 'off'} />
              off: 关闭
            </Label>
            <Label>
              <Radio value="torch" checked={flash === 'torch'} />
              torch:常亮
            </Label>
          </RadioGroup>
        </View>

        <View>
          预览：
          <Image style={{ width: '100%', height: '500px' }} src={src}></Image>
        </View>
      </View>
    )
  }
}

export default Index
