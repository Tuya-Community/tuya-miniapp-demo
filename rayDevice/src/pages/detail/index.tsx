import { config, steps } from '@/constants'
import Strings from '@/i18n'
import {
  Button,
  View,
  changeDebugMode,
  onDpDataChange,
  setNavigationBarTitle,
  useQuery
} from '@ray-js/ray'
import { Tabbar, TabbarItem } from '@ray-js/smart-ui'
import BubbleDouble from '@tuya-miniapp/icons/dist/svg/BubbleDouble'
import Home from '@tuya-miniapp/icons/dist/svg/Home'
import React, { useCallback, useEffect } from 'react'
import styles from './index.module.less'
import { DetailList, inputValue } from './list'
import Steps from './steps'

function DeviceInfo() {
  const query = useQuery()
  const type = query?.type || 'deviceInfo'
  const list = config[type] || []
  const stepList = Object.keys(steps[type] || {}) || []
  const hasSteps = stepList.length > 0
  const [active, setActive] = React.useState(0)
  useEffect(() => {
    setNavigationBarTitle({ title: type })
  }, [type])
  const _onInput = useCallback((event) => {
    const {
      target: {
        dataset: { key },
      },
      detail: { value },
    } = event
    inputValue[key] = value
  }, [])
  const _onSwitch = useCallback((event) => {
    const {
      origin: {
        target: {
          dataset: { key },
        },
      },
      value,
    } = event
    inputValue[key] = value
  }, [])

  useEffect(() => {
    onDpDataChange((data) => {
      console.log('Detail.onDpDataChange', data)
    })
  }, [])
  const onChange = useCallback((e) => {
    setActive(e.detail)
  }, [])

  return (
    <View className={styles.container}>
      <View className="item">
        <Button
          type="default"
          onClick={() => {
            changeDebugMode({ isEnable: true })
          }}
        >
          {Strings.getLang('openVConsole')}
        </Button>
      </View>
      <View className={styles.content}>
        {active === 0 && (
          <DetailList type={type} list={list} onSwitch={_onSwitch} onInput={_onInput} />
        )}
        {active === 1 && <Steps type={type} />}
      </View>

      {hasSteps && (
        <Tabbar
          active={active}
          activeColor={'var(--app-M4)'}
          safeAreaInsetBottom={false}
          onChange={onChange}
        >
          <TabbarItem icon={Home}>列表</TabbarItem>
          <TabbarItem icon={BubbleDouble}>流程</TabbarItem>
        </Tabbar>
      )}
    </View>
  )
}

export default DeviceInfo
