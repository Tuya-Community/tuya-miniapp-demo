import { routes } from '@/constants/public'
import { useDeviceList } from '@/hooks'
import Strings from '@/i18n'
import { Button, View, changeDebugMode, navigateTo } from '@ray-js/ray'
import { ActionSheet } from '@ray-js/smart-ui'
import React, { useEffect } from 'react'
import './index.less'

function Index(props) {
  const devId = props?.location?.query?.deviceId || ''


  const devIdList = useDeviceList()
  const [deviceId, setDeviceId] = React.useState(devId)
  const [show, setShow] = React.useState(false)
  const [actions, setActions] = React.useState([])
  console.log('--------props', props, devId, devIdList)

  useEffect(() => {
    const options = devIdList.map((item) => {
      return {
        id: item.devId,
        name: item.name,
        checked: false,
      }
    })
    if (devIdList.length > 1 && !devId) {
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


  console.log('Index.render', devIdList, actions, deviceId)

  return (
    <View className={'container'}>
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

      <Button
        type="default"
        className={'inputBtn'}
        onClick={() => {
          setShow(true)
        }}
      >
        {Strings.getLang('selectDevice')}: {deviceId}
      </Button>
      {routes.map((item) => {
        return (
          <View className="item" key={item.title}>
            <Button
              type="primary"
              className={'btn'}
              onClick={() => {
                navigateTo({ url: `${item.url}&deviceId=${deviceId}` })
              }}
            >
              {item.title}
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

export default Index
