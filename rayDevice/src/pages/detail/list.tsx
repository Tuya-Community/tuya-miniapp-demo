import React, { useEffect } from 'react'

import { useDeviceList } from '@/hooks'
import Strings from '@/i18n'
import { Button, Input, Switch, Text, useQuery, View } from '@ray-js/ray'
import { ActionSheet } from '@ray-js/smart-ui'
import styles from './list.module.less'

const functionNameStyle = `color: blue; font-size: 18px`
const resultStyle = `color: green; font-size: 16px`
const errorStyle = `color: red; font-size: 16px`
export const inputValue = {}
export function DetailList(props) {
  const { type, list, onSwitch, onInput } = props
  const query = useQuery()

  console.log('-------query', query)
  const [deviceId, setDeviceId] = React.useState(query.deviceId || Strings.getLang('selectDevice'))
  const devIdList = useDeviceList()

  const [show, setShow] = React.useState(false)
  const [actions, setActions] = React.useState([])
  useEffect(() => {
    const options = devIdList.map((item) => {
      return {
        id: item.devId,
        name: item.name,
        checked: false,
      }
    })
    if (devIdList.length > 1 && !deviceId) {
      setDeviceId(devIdList[0].devId)
    }
    setActions(options)
  }, [devIdList])

  const onClose = () => setShow(false)
  const onSelect = (evt) => {
    const { id } = evt.detail
    const newActions = actions.map((item) => {
      if (item.id === id) return { ...item, checked: true }
      return { ...item, checked: false }
    })
    setActions(newActions)
    setDeviceId(id)
  }

  console.log('DetailList', devIdList)
  return (
    <View className={styles.content}>
      {list.map((item) => {
        return (
          <View className={styles.item} key={item.title}>
            <Text className={styles.title}> {item.title}</Text>
            <View className={styles.form}>
              {item.input && <Text className={styles.title}>{Strings.getLang('params')}</Text>}
              {item.input &&
                (item.keys ? (
                  item.keys.map((key, index) => {
                    return (
                      <View
                        className={styles.mulInput}
                        style={
                          item.dataType && item.dataType[key] === 'boolean'
                            ? {
                                flexDirection: 'row',
                                justifyContent: 'space-between',
                                alignItems: 'center',
                                height: '112rpx',
                              }
                            : {}
                        }
                        key={`${item.functionName}_${key}`}
                      >
                        <Text className={styles.title}>{key}</Text>
                        {item.dataType && item.dataType[key] === 'boolean' ? (
                          <Switch data-key={`${item.functionName}_${key}`} onChange={onSwitch} />
                        ) : ['deviceId', 'devId'].includes(key) ? (
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
                            onInput={onInput}
                            placeholder={item.placeholder[index]}
                            data-key={`${item.functionName}_${key}`}
                            maxLength={100000}
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
                    onInput={onInput}
                    placeholder={item.placeholder}
                    data-key={item.functionName}
                    maxLength={100000}
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
                    if (['deviceId', 'devId'].includes(key)) {
                      values[key] = inputValue[`${item.functionName}_${key}`] || deviceId
                    } else {
                      values[key] = inputValue[`${item.functionName}_${key}`]
                    }
                  })

                  if (item.key === 'deviceId') {
                    values = inputValue[item.functionName] || deviceId
                  }
                  console.group(item.functionName)
                  console.log(`%c 调用方法: ${item.functionName}`, functionNameStyle)
                  console.log(`%c 参数: `, functionNameStyle, values)
                  const data = await item.func(values)

                  console.log(`%c 得到结果: `, resultStyle)
                  console.log(data)
                  console.groupEnd()
                } catch (error) {
                  console.log('%c 操作失败:', errorStyle)
                  console.log(error)
                  console.groupEnd()
                }
              }}
            >
              {Strings.getLang('click_to_trigger')}
            </Button>
          </View>
        )
      })}
      <ActionSheet
        title={Strings.getLang('selectDevice')}
        cancelText={Strings.getLang('cancel')}
        show={show}
        actions={actions}
        onClose={onClose}
        onSelect={onSelect}
        onCancel={onClose}
      />
    </View>
  )
}
