import {
  Button,
  View,
  Slider,
  RadioGroup,
  Radio,
  Label,
  chooseMedia,
  Image,
  getImageInfo,
} from '@ray-js/ray'
import React, { FC, useState } from 'react'

import styles from './index.module.less'

const Home: FC = () => {
  const [count, setCount] = useState<number>(1)
  const [maxDuration, setMaxDuration] = useState<number>(3)
  const [sourceType, setSourceType] = useState<string[]>(['album', 'camera'])
  const [mediaType, setMediaType] = useState<string>('image')
  const [imageSrc, setImageSrc] = useState<any>([])

  const handleChooseMedia = () => {
    console.log({ count, mediaType: mediaType, sourceType, maxDuration })
    chooseMedia({
      count,
      mediaType: mediaType,
      sourceType,
      maxDuration,
      success: (res) => {
        console.log('chooseMedia success', res)
        setImageSrc(res.tempFiles)
      },
      fail: (res) => {
        console.log('chooseMedia fail', res)
      },
      complete: () => {
        console.log('chooseMedia complete')
      },
    })
  }
  const changeSourceType = (e) => {
    switch (e.detail.value) {
      case 'album':
        setSourceType(['album'])
        break
      case 'camera':
        setSourceType(['camera'])
        break
      default:
        setSourceType(['album', 'camera'])
    }
  }
  const changeMediaType = (e) => {
    setMediaType(e.detail.value)
  }
  const getMediaImageInfo = (src: string) => () => {
    // 不支持video
    getImageInfo({
      src,
      success: (res) => {
        console.log('getImageInfo success', res)
      },
      fail: (res) => {
        console.log('getImageInfo fail', res)
      },
      complete: () => {
        console.log('getImageInfo complete')
      },
    })
  }
  return (
    <>
      <View className={styles['container']}>
        <Button type="primary" className={styles.btn} onClick={handleChooseMedia}>
          chooseMedia
        </Button>
      </View>
      <View className={styles['wrp']}>
        最多选择图片张数
        <Slider
          showValue
          max={5}
          min={1}
          onChange={(e) => {
            setCount(e.value)
          }}
        ></Slider>
      </View>
      <View className={styles['wrp']}>
        选择图片来源：
        <RadioGroup onChange={changeSourceType}>
          <Label>
            <Radio value="all" checked={sourceType.length === 2} />
            相册和相机
          </Label>
          <Label>
            <Radio value="album" />
            仅相册
          </Label>
          <Label>
            <Radio value="camera" />
            仅相机
          </Label>
        </RadioGroup>
      </View>
      <View className={styles['wrp']}>
        选择类型
        <RadioGroup onChange={changeMediaType}>
          <Label>
            <Radio value="image" checked={mediaType === 'image'} />
            图片
          </Label>
          <Label>
            <Radio value="video" checked={mediaType === 'video'} />
            视频
          </Label>
        </RadioGroup>
      </View>
      <View className={styles['wrp']}>
        拍摄视频最长拍摄时间（chooseMedia）
        <Slider
          showValue
          max={60}
          min={3}
          onChange={(e) => {
            setMaxDuration(e.value)
          }}
        ></Slider>
      </View>
      <View className={styles['container']}>
        预览Image:
        {imageSrc.map((item, index) => {
          return (
            <Image
              src={item.tempFilePath}
              key={index}
              onClick={getMediaImageInfo(item.tempFilePath)}
            ></Image>
          )
        })}
      </View>
    </>
  )
}

export default Home
