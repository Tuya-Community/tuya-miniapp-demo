import { View, Text } from '@ray-js/ray'
import React, { FC, useState } from 'react'
import VanButton from '@vant/weapp/lib/button/index'
import VanToast from '@vant/weapp/lib/toast/toast'
import VanToastView from '@vant/weapp/lib/toast/index'
import VanRate from '@vant/weapp/lib/rate/index'
import VanCalendar from '@vant/weapp/lib/calendar/index'
import VanCell from '@vant/weapp/lib/cell/index'
import VanCellGroup from '@vant/weapp/lib/cell-group/index'
import styles from './index.module.less'

const Home: FC = () => {
  const [date, setDate] = useState<string>('')
  const [show, setShow] = useState<boolean>(false)
  const renderToast = () => {
    return (
      <View className={styles['container']}>
        <Text>点击事件</Text>
        {/* @ts-ignore */}
        <VanButton
          style={{ marginRight: '16px' }}
          type="info"
          bindclick={() => {
            VanToast('我来自vant组件')
          }}
        >
          showToast
        </VanButton>
        {/* @ts-ignore */}
        <van-button
          bindclick={() => {
            VanToast('我来自vant组件另一种写法')
          }}
        >
          showToast
          {/* @ts-ignore */}
        </van-button>
        {/* @ts-ignore */}
        <VanToastView id="van-toast"></VanToastView>
      </View>
    )
  }

  const renderRate = () => {
    return (
      <View className={styles['container']}>
        <Text>自定义事件</Text>
        {/* @ts-ignore */}
        <VanRate
          value={3}
          bindchange={(res) => {
            console.log(res)
          }}
        />
      </View>
    )
  }

  const renderCanendar = () => {
    const formatDate = (date: Date) => {
      date = new Date(date)
      return `${date.getFullYear()}/${date.getMonth() + 1}/${date.getDate()}`
    }
    return (
      <View className={styles['container']}>
        <Text>日历</Text>
        {/* @ts-ignore */}
        <VanCellGroup inset>
          {/* @ts-ignore */}
          <VanCell
            title="选择单个日期"
            value={date}
            bindclick={() => {
              setShow(true)
            }}
          />
        </VanCellGroup>
        {/* @ts-ignore */}
        <VanCalendar
          show={show}
          bindclose={() => {
            setShow(false)
          }}
          bindconfirm={(event) => {
            setShow(false)
            setDate(formatDate(event.detail))
          }}
        />
      </View>
    )
  }
  return (
    <>
      {renderToast()}
      {renderRate()}
      {renderCanendar()}
    </>
  )
}

export default Home
