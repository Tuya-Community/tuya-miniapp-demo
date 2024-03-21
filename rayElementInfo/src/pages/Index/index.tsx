import {
  Button,
  View,
  createSelectorQuery,
  getElementById,
  getBoundingClientRect,
  showToast,
} from '@ray-js/ray'
import React, { FC } from 'react'
import styles from './index.module.less'

const Home: FC = () => {
  const getViewInfo = async () => {
    try {
      const element = await getElementById('box')
      if (element) {
        const rect = await getBoundingClientRect(element)
        console.log('Rect:', rect)
        showToast({
          title: '请在console查看调用结果',
        })
      }
    } catch (error) {
      console.error('Error getting size:', error)
    }
  }

  const getViewInfo2 = () => {
    try {
      const query = createSelectorQuery()
      query.select('#box').boundingClientRect()
      query.selectViewport().scrollOffset()
      query.exec(function (res) {
        console.log('res', res)
        showToast({
          title: '请在console查看调用结果',
        })
      })
    } catch (error) {
      console.error('Error getting size:', error)
    }
  }

  return (
    <View className={styles['container']}>
      <View style={{ height: '150px', background: '#06113c', width: '100%' }}></View>
      <View style={{ height: '150px', background: '#ff8c32', width: '100%' }}></View>
      <View style={{ height: '150px', background: '#dddddd', width: '100%' }}></View>
      <View style={{ height: '150px', background: '#eeeeee', width: '100%' }}></View>
      <View style={{ height: '150px', background: '#06113c', width: '100%' }}></View>
      <View style={{ height: '150px', background: '#ff8c32', width: '100%' }}></View>
      <View style={{ height: '150px', background: '#dddddd', width: '100%' }}></View>
      <View style={{ height: '150px', background: '#eeeeee', width: '100%' }}></View>
      <View className={styles['box']} id="box">
        box
      </View>
      <Button type="primary" className={styles.btn1} onClick={getViewInfo} size="mini">
        getBoundingClientRect
      </Button>
      <Button type="primary" className={styles.btn2} onClick={getViewInfo2} size="mini">
        createSelectorQuery
      </Button>
    </View>
  )
}

export default Home
