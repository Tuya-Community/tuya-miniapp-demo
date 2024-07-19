import { Button, View, Text, Input, changeDebugMode } from '@ray-js/ray'
import React, { useCallback, useDebugValue } from 'react'
import Strings from '@/i18n'
import { deviceInfoApiList } from '@/constants'
import styles from './index.module.less'

const functionNameStyle = `color: blue; font-size: 18px`
const resultStyle = `color: green; font-size: 16px`
function DeviceInfo() {
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
      {deviceInfoApiList.map((item) => {
        return (
          <View className={styles.item} key={item.title}>
            <Text className={styles.title}> {item.title}</Text>
            <View className={styles.form}>
              {item.input && <Text className={styles.title}>{Strings.getLang('params')}</Text>}
              {item.input &&
                (item.keys ? (
                  item.keys.map((key, index) => {
                    return (
                      <View className={styles.mulInput} key={`${item.functionName}_${key}`}>
                        <Text className={styles.title}>{key}</Text>
                        <Input
                          onInput={_onInput}
                          placeholder={item.placeholder[index]}
                          data-key={`${item.functionName}_${key}`}
                        />
                      </View>
                    )
                  })
                ) : (
                  <Input
                    onInput={_onInput}
                    placeholder={item.placeholder}
                    data-key={item.functionName}
                  />
                ))}
            </View>
            <Button
              type="primary"
              className={styles.btn}
              onClick={async () => {
                try {
                  const values = item.keys ? {} : inputValue[item.functionName]
                  item.keys?.map((key) => {
                    values[key] = inputValue[`${item.functionName}_${key}`]
                  })
                  console.group(item.functionName)
                  console.log(`%c 调用方法: ${item.functionName}`, functionNameStyle)
                  
                  const data = await item.func(values)

                  console.log(`%c 得到结果: `, resultStyle)
                  console.log(data)
                  console.groupEnd()
                } catch (error) {
                  console.log('操作失败', error)
                }
              }}
            >
              {Strings.getLang('click_to_trigger')}
            </Button>
          </View>
        )
      })}
    </View>
  )
}

export default DeviceInfo
