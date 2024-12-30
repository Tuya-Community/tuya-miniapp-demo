import { Button, View, Text, Input, changeDebugMode, onDpDataChange, navigateTo } from '@ray-js/ray'
import React, { useCallback, useDebugValue, useEffect } from 'react'
import Strings from '@/i18n'
import { routes } from '@/constants'
import styles from './index.module.less'

function Index() {
  const inputValue = {}
  const _onInput = useCallback((event) => {
    const {
      target: {
        dataset: { key },
      },
      detail: { value },
    } = event
    inputValue[key] = value
  }, [])

  useEffect(() => {
    onDpDataChange((data) => {
      console.log('onDpDataChange', data)
    })
  }, [])

  return (
    <View className={styles['container']}>
      <View>
        <Button
          type="default"
          onClick={() => {
            changeDebugMode({ isEnable: true })
          }}
        >
          {Strings.getLang('openVConsole')}
        </Button>
      </View>
      {routes.map((item) => {
        return (
          <View className={styles.item} key={item.title}>
            <Button
              type="primary"
              className={styles.btn}
              onClick={() => {
                navigateTo({ url: item.url })
              }}
            >
              {item.title}
            </Button>
          </View>
        )
      })}
    </View>
  )
}

export default Index
