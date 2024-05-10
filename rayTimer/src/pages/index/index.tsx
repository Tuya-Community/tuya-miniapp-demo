import {
  Button,
  View,
  Text,
  Input,
  changeDebugMode,
  onTimerUpdate,
  offTimerUpdate,
  env,
} from '@ray-js/ray'
import React, { useCallback, useEffect } from 'react'
import { timerApiList } from '@/constants'
import Strings from '@/i18n'
import styles from './index.module.less'

const functionNameStyle = `color: blue; font-size: 18px`
const resultStyle = `color: green; font-size: 16px`
function GroupInfo() {
  const inputValue = {}
  const _onInput = useCallback((event) => {
    const {
      target: {
        dataset: { key },
      },
      detail: { value },
    } = event
    console.log(event)
    inputValue[key] = value
  }, [])

  useEffect(() => {
    onTimerUpdate((event) => {
      console.log('onTimerUpdate', event)
    })
    return () => {
      offTimerUpdate((event) => {
        console.log('offTimerUpdate', event)
      })
    }
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
      {timerApiList.map((item) => {
        return (
          <View className={styles.item} key={item.title}>
            {/* <Text>{Strings.getLang(item.functionName)}</Text> */}
            {item.input &&
              (item.keys ? (
                item.keys.map((key, index) => {
                  return (
                    <Input
                      key={`${item.functionName}_${key}`}
                      onInput={_onInput}
                      placeholder={item.placeholder[index]}
                      data-key={`${item.functionName}_${key}`}
                    />
                  )
                })
              ) : (
                <Input
                  onInput={_onInput}
                  placeholder={item.placeholder}
                  data-key={item.functionName}
                />
              ))}
            <Button
              type="primary"
              className={styles.btn}
              onClick={async () => {
                try {
                  const values = item.keys ? {} : inputValue[item.functionName]
                  item.keys?.map((key) => {
                    values[key] = inputValue[`${item.functionName}_${key}`]
                  })
                  const data = await item.func(values)
                  console.group(item.functionName)
                  console.log(`%c 调用方法: ${item.functionName}`, functionNameStyle)
                  console.log(`%c 得到结果: `, resultStyle)
                  console.log(data)
                  console.groupEnd()
                } catch (error) {
                  console.log('操作失败', error)
                }
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

export default GroupInfo
