import { Button, View, Text, Input, changeDebugMode } from '@ray-js/ray'
import React, { useCallback, useDebugValue } from 'react'
import Strings from '@/i18n';
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
    console.log(event)
    inputValue[key] = value
  }, [])

  return (
    <View className={styles['container']}>
      <View>
        <Button type='default' onClick={() =>{
          
          changeDebugMode({isEnable: true});
        }}>{Strings.getLang('openVConsole')}</Button>
      </View>
      {deviceInfoApiList.map((item) => {
        return (
          <View className={styles.item} key={item.title}>
            {/* <Text>{Strings.getLang(item.functionName)}</Text> */}
            {item.input && <Input onInput={_onInput} placeholder={item.placeholder} data-key={item.functionName} />}
            <Button
              type="primary"
              className={styles.btn}
              onClick={async () => {
                try {
                  const data = await item.func(inputValue[item.functionName])
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

export default DeviceInfo
