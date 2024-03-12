import {
  Button,
  View,
  chooseImage,
  Slider,
  RadioGroup,
  Radio,
  Label,
  Image,
  previewImage,
} from '@ray-js/ray'
import React, { FC, useState } from 'react'

import styles from './index.module.less'

const Home: FC = () => {
  const [count, setCount] = useState<number>(1)
  const [sourceType, setSourceType] = useState<string[]>(['album', 'camera'])
  const [imageSrc, setImageSrc] = useState<string[]>([])

  const handleChooseImage = () => {
    console.log({ count, sizeType: ['original', 'compressed'], sourceType })
    chooseImage({
      count,
      sizeType: ['original', 'compressed'],
      sourceType,
      success: (res) => {
        console.log('chooseImage success', res)
        setImageSrc(res.tempFilePaths)
      },
      fail: (res) => {
        console.log('chooseImage fail', res)
      },
      complete: () => {
        console.log('chooseImage complete')
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
  const previewChooseImage = (urls, current) => () => {
    previewImage({
      urls,
      current,
      success: (res) => {
        console.log('previewImage success', res)
      },
      fail: (res) => {
        console.log('previewImage fail', res)
      },
      complete: () => {
        console.log('previewImage complete')
      },
    })
  }
  return (
    <>
      <View className={styles['container']}>
        <Button type="primary" className={styles.btn} onClick={handleChooseImage}>
          chooseImage
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
      <View className={styles['container']}>
        预览:
        {imageSrc.map((item, index) => {
          return (
            <Image src={item} key={index} onClick={previewChooseImage(imageSrc, index)}></Image>
          )
        })}
      </View>
    </>
  )
}

export default Home
