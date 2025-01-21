import Strings from '@/i18n'
import { Button, Input, Text, View, useQuery } from '@ray-js/ray'
import React, { useCallback } from 'react'
import styles from './steps.module.less'

const functionNameStyle = `color: blue; font-size: 18px`
const resultStyle = `color: green; font-size: 16px`
function Step(props: {
  series: string
  steps: any
  deviceId: string
  setShow: (s: boolean) => void
}) {
  const { series, steps, deviceId, setShow } = props
  const { desc, functionList = [], title } = steps[series]
  const inputValue = {}
  const query = useQuery()

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
      <View className={styles.title}>{title}</View>
      <View className={styles.desc}>{desc}</View>
      {functionList.map((item) => {
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
                        {['deviceId', 'devId'].includes(key) ? (
                          <Button
                            type="default"
                            className={styles.inputBtn}
                            onClick={() => {
                              setShow(true)
                            }}
                          >
                            {deviceId || Strings.getLang(item.placeholder)}
                          </Button>
                        ) : (
                          <Input
                            className={styles.input}
                            onInput={_onInput}
                            placeholder={item.placeholder[index]}
                            data-key={`${item.functionName}_${key}`}
                          />
                        )}
                      </View>
                    )
                  })
                ) : ['deviceId', 'devId'].includes(item.key) ? (
                  <Button
                    type="default"
                    className={styles.inputBtn}
                    onClick={() => {
                      setShow(true)
                    }}
                  >
                    {deviceId || Strings.getLang(item.placeholder)}
                  </Button>
                ) : (
                  <Input
                    className={styles.input}
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
                  let values = item.keys ? {} : inputValue[item.functionName]
                  item.keys?.map((key) => {
                    // values[key] = inputValue[`${item.functionName}_${key}`]
                    if (['deviceId', 'devId'].includes(key)) {
                      values[key] = inputValue[`${item.functionName}_${key}`] || deviceId
                    } else {
                      values[key] = inputValue[`${item.functionName}_${key}`]
                    }
                  })
                  if (item.key === 'deviceId') {
                    values = inputValue[item.functionName] || deviceId
                  }
                  console.log('----------inputValue', inputValue, values)
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
              {Strings.getLang('click_to_trigger')}
            </Button>
          </View>
        )
      })}
    </View>
  )
}

export default Step
