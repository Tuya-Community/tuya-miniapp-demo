import { View, Map } from '@ray-js/ray'
import React, { Component } from 'react'
import imageMarker from '../../assets/marker.png'
import styles from './index.module.less'

class Index extends Component {
  state = {
    latitude: 39.908775,
    longitude: 116.406315,
    scale: 14,
    markers: [
      {
        id: 1,
        latitude: 39.908775,
        longitude: 116.406315,
        name: '王府井',
        iconPath: imageMarker,
        callout: {
          content: '王府井',
          color: '#ffffff',
          fontSize: 12,
          bgColor: '#5C91F6',
          padding: 4,
          borderRadius: 35,
          anchorY: -8,
        },
      },
      {
        id: 2,
        latitude: 39.927761,
        longitude: 116.391467,
        name: '北海公园',
        iconPath: imageMarker,
        callout: {
          content: '北海公园北海公园北海公园北海公园北海公园北海公园北海公园北海公园北海公园',
          color: '#ff0000',
          fontSize: 12,
          bgColor: '#fff',
          padding: 4,
          borderRadius: 35,
          anchorY: -8,
        },
      },
      {
        id: 3,
        latitude: 39.918203,
        longitude: 116.396923,
        name: '故宫',
        iconPath: imageMarker,
        callout: {
          content: '故宫',
          color: '#ffffff',
          fontSize: 12,
          bgColor: '#5C91F6',
          padding: 4,
          borderRadius: 35,
          anchorY: -8,
        },
      },
    ],
  }

  renderScrollView = Array.from({ length: 10 }, (_, index) => (
    <View key={index}>
      <View style={{ height: '100px', background: '#f4bfbf', width: '100%' }}></View>
      <View style={{ height: '100px', background: '#ffd9c0', width: '100%' }}></View>
      <View style={{ height: '100px', background: '#faf0d7', width: '100%' }}></View>
      <View style={{ height: '100px', background: '#8cc0de', width: '100%' }}></View>
    </View>
  ))

  render() {
    const { latitude, longitude, scale, markers } = this.state
    return (
      <>
        <View className={styles['tips']}>
          ❌不能将原生组件放在局部滚动区域中，外层不能嵌套如 scroll-view、swiper等可滚动的组件。
        </View>
        {this.renderScrollView}
        <View className={styles['container']}>
          <Map
            id="myMap"
            className={styles['myMap']}
            latitude={latitude}
            longitude={longitude}
            scale={scale}
            markers={markers}
          />
        </View>
      </>
    )
  }
}

export default Index
