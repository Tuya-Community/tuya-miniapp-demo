import { View, Map, CoverView, nativeDisabled, showModal, Slider } from '@ray-js/ray'
import React, { Component } from 'react'
import imageMarker from '../../assets/marker.png'
import styles from './index.module.less'

class Index extends Component {
  state = {
    latitude: 39.908775,
    longitude: 116.406315,
    scale: 16,
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

  render() {
    const { latitude, longitude, scale, markers } = this.state
    return (
      <>
        <View className={styles['container']}>
          <View className={styles['cover-map']}>
            覆盖在map上我的手势会被原生劫持
            <Slider></Slider>
          </View>
          <CoverView className={styles['cover-view']}>
            覆盖在map上我的手势不会被劫持<Slider></Slider>
          </CoverView>
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
