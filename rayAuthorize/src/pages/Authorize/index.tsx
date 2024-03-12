import { Button, View, authorize, authorizeStatus } from '@ray-js/ray'
import React, { FC } from 'react'
import styles from './index.module.less'

const Home: FC = () => {
  const getAuthorize = (type: string) => () => {
    authorizeStatus({
      scope: type,
      success: (e) => {
        // success 表示权限状态开启
        console.log(`authorizeStatus ${type} success`, e)
      },
      fail: (err) => {
        // fail 权限状态关闭
        console.log(`authorizeStatus ${type} fail`, err)
        // 检测权限状态关闭 申请权限
        authorize({
          scope: type,
          success: (e) => {
            console.log(`authorize ${type} success`, e)
          },
          fail: (err) => {
            console.log(`authorize ${type} fail`, err)
          },
          complete: () => {
            console.log(`authorize ${type} complete`)
          },
        })
      },
      complete: () => {
        console.log(`authorizeStatus ${type} complete`)
      },
    })
  }

  return (
    <View className={styles['container']}>
      <Button type="primary" className={styles.btn} onClick={getAuthorize('scope.bluetooth')}>
        蓝牙权限
      </Button>
      <Button
        type="primary"
        className={styles.btn}
        onClick={getAuthorize('scope.writePhotosAlbum')}
      >
        写入相册权限
      </Button>
      <Button
        type="primary"
        className={styles.btn}
        onClick={getAuthorize('scope.userLocationBackground')}
      >
        后台定位权限
      </Button>
      <Button type="primary" className={styles.btn} onClick={getAuthorize('scope.record')}>
        麦克风权限
      </Button>
      <Button type="primary" className={styles.btn} onClick={getAuthorize('scope.camera')}>
        摄像头权限
      </Button>
      <Button type="primary" className={styles.btn} onClick={getAuthorize('scope.userLocation')}>
        低精度定位权限
      </Button>
      <Button
        type="primary"
        className={styles.btn}
        onClick={getAuthorize('scope.userPreciseLocation')}
      >
        高精度定位权限
      </Button>
    </View>
  )
}

export default Home
