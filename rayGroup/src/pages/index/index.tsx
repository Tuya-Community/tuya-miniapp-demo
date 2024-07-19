import { Button, View, Text, Input, changeDebugMode, getLaunchOptionsSync, openDeviceInfo, openDeviceDetailPage } from '@ray-js/ray'
import React, { useCallback, useState } from 'react'
import { groupInfoApiList } from '@/constants'

import styles from './index.module.less'
import Strings from '@/i18n'

const functionNameStyle = `color: blue; font-size: 18px`
const resultStyle = `color: green; font-size: 16px`

const {
  query: { deviceId, groupId },
} = getLaunchOptionsSync()
function GroupInfo() {
  const [isGroup] = useState(!!groupId)
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

  if (!isGroup) {
    return (
      <View className={styles['container']}>
        <Button
          type="primary"
          onClick={() => {
            openDeviceDetailPage({
              deviceId,
            });
          }}
        >
          {Strings.getLang('to_create_group')}
        </Button>
      </View>
    )
  }

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
      {groupInfoApiList.map((item) => {
        return (
          <View className={styles.item} key={item.title}>
            <Text className={styles.title}> {item.title}</Text>
            <View className={styles.form}>
              {item.input && <Text className={styles.title}>参数：</Text>}
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
                  // const data = await item.func(inputValue[item.functionName])
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

export default GroupInfo
