import { useQuery, View } from '@ray-js/ray'
import React, { useEffect } from 'react'
import styles from './steps.module.less'
import { steps } from '@/constants'
import Step from './step'
import { useDeviceList } from '@/hooks'
import Strings from '@/i18n'
import { ActionSheet } from '@ray-js/smart-ui'

// const LIST = Object.keys(steps) //.map((key) => steps[key])

export default function Steps(props: { type: string }) {
  const { type } = props
  const query = useQuery()

  const LIST = Object.keys(steps[type] || {}) || []

  const devIdList = useDeviceList()
  const [deviceId, setDeviceId] = React.useState(query.deviceId || Strings.getLang('selectDevice'))

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

  return (
    <View className={styles['step-container']}>
      {LIST.map((item) => {
        console.log('Steps', item)
        return (
          <Step
            key={item}
            series={item}
            steps={steps[type]}
            deviceId={deviceId}
            setShow={setShow}
          />
        )
      })}
      {LIST.length === 0 && <View className={styles.empty}>暂无数据</View>}

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
