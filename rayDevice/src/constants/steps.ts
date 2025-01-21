import {
  getLaunchOptionsSync,
  offDpDataChange,
  onDpDataChange,
  registerDeviceListListener,
  registerLeaveBeaconFenceEvent,
  registerMQTTDeviceListener,
  registerMQTTProtocolListener,
  registerTopicListListener,
  subscribeBLEConnectStatus,
  subscribeBLETransparentDataReport,
  unregisterDeviceListListener,
  unregisterLeaveBeaconFenceEvent,
  unsubscribeBLEConnectStatus,
  unsubscribeBLETransparentDataReport,
} from '@ray-js/ray'
import Strings from '@/i18n'

const { deviceId = '' } = getLaunchOptionsSync()?.query || {}

const _onBLEConnectStatusChange = (res) => {
  console.log('Step.onBLEConnectStatusChange', res)
}

const _onLeaveBeaconFence = (res) => {
  console.log('Step.onLeaveBeaconFence', res)
}

const _onBLETransparentDataReport = (res) => {
  console.log('Step.onBLETransparentDataReport', res)
}

const _onDpDataChange = (event) => {
  console.log('Step.onDpDataChange', event)
}

const _onDeviceRemoved = (event) => {
  console.log('Step.onDeviceRemoved', event)
}

const _onDeviceOnlineStatusUpdate = (event) => {
  console.log('Step.onDeviceOnlineStatusUpdate', event)
}
const _onDeviceInfoUpdated = (event) => {
  console.log('Step.onDeviceInfoUpdated', event)
}

const _onMqttMessageReceived = (event) => {
  console.log('Step.onMqttMessageReceived', event)
}

export const steps = {
  TUNIBluetoothManager: {
    onBLEConnectStatusChange: {
      title: '监听蓝牙连接状态变化',
      desc: '监听蓝牙连接状态变化，需要先调用 subscribeBLEConnectStatus，再通过 onBLEConnectStatusChange 监听，具体流程如下：',
      functionList: [
        {
          title: '1. 先调用 subscribeBLEConnectStatus 订阅蓝牙连接状态变化',
          functionName: 'subscribeBLEConnectStatus',
          input: true,
          placeholder: Strings.getLang('please_input_dev_id'),
          key: 'deviceId',
          func: (inputValue) => {
            return new Promise((resolve, reject) => {
              subscribeBLEConnectStatus({
                deviceId: inputValue || getApp().deviceId || deviceId,
                success: resolve,
                fail: reject,
              })
            })
          },
        },
        {
          title: '2. 注册监听 onBLEConnectStatusChange',
          functionName: 'onBLEConnectStatusChange',
          func: (inputValue) => {
            return new Promise((resolve, reject) => {
              ty.device.onBLEConnectStatusChange(_onBLEConnectStatusChange)
              resolve(true)
            })
          },
        },

        {
          title: '3. 关闭监听 offBLEConnectStatusChange',
          functionName: 'offBLEConnectStatusChange',
          func: (inputValue) => {
            return new Promise((resolve, reject) => {
              ty.device.offBLEConnectStatusChange(_onBLEConnectStatusChange)
              resolve(true)
            })
          },
        },
        {
          title: '4. 注销订阅 unsubscribeBLEConnectStatus',
          functionName: 'unsubscribeBLEConnectStatus',
          input: true,
          placeholder: Strings.getLang('please_input_dev_id'),
          key: 'deviceId',
          func: (inputValue) => {
            return new Promise((resolve, reject) => {
              unsubscribeBLEConnectStatus({
                deviceId: inputValue || getApp().deviceId || deviceId,
                success: resolve,
                fail: reject,
              })
            })
          },
        },
      ],
    },

    onLeaveBeaconFence: {
      title: '监听蓝牙 Beacon 设备离开围栏',
      desc: '监听蓝牙 Beacon 设备离开围栏，需要先调用 registerLeaveBeaconFenceEvent，再通过 onLeaveBeaconFence 监听，具体流程如下：',
      functionList: [
        {
          title: '1. 先调用 registerLeaveBeaconFenceEvent 订阅蓝牙连接状态变化',
          functionName: 'registerLeaveBeaconFenceEvent',
          input: true,
          placeholder: Strings.getLang('please_input_dev_id'),
          key: 'deviceId',
          func: (inputValue) => {
            return new Promise((resolve, reject) => {
              registerLeaveBeaconFenceEvent({
                deviceId: inputValue || getApp().deviceId || deviceId,
                success: resolve,
                fail: reject,
              })
            })
          },
        },

        {
          title: '2. 注册监听 onLeaveBeaconFence',
          functionName: 'onLeaveBeaconFence',
          func: (inputValue) => {
            return new Promise((resolve, reject) => {
              ty.device.onLeaveBeaconFence(_onLeaveBeaconFence)
              resolve(true)
            })
          },
        },
        {
          title: '3. 关闭监听 offLeaveBeaconFence',
          functionName: 'offLeaveBeaconFence',
          func: (inputValue) => {
            return new Promise((resolve, reject) => {
              ty.device.offLeaveBeaconFence(_onLeaveBeaconFence)
              resolve(true)
            })
          },
        },

        {
          title: '4. 调用 unregisterLeaveBeaconFenceEvent 注销订阅',
          functionName: 'unregisterLeaveBeaconFenceEvent',
          input: true,
          placeholder: Strings.getLang('please_input_dev_id'),
          key: 'deviceId',
          func: (inputValue) => {
            return new Promise((resolve, reject) => {
              unregisterLeaveBeaconFenceEvent({
                deviceId: inputValue || getApp().deviceId || deviceId,
                success: resolve,
                fail: reject,
              })
            })
          },
        },
      ],
    },
    onBLETransparentDataReport: {
      title: '监听蓝牙大数据传输',
      desc: '监听蓝牙大数据传输，需要先调用 subscribeBLETransparentDataReport，再通过 onBLETransparentDataReport 监听，具体流程如下：',
      functionList: [
        {
          title: '1. 先调用 subscribeBLETransparentDataReport 订阅蓝牙大数据传输',
          functionName: 'subscribeBLETransparentDataReport',
          input: true,
          placeholder: Strings.getLang('please_input_dev_id'),
          key: 'deviceId',
          func: (inputValue) => {
            return new Promise((resolve, reject) => {
              subscribeBLETransparentDataReport({
                deviceId: inputValue || getApp().deviceId || deviceId,
                success: resolve,
                fail: reject,
              })
            })
          },
        },
        {
          title: '2. 注册监听 onBLETransparentDataReport',
          functionName: 'onBLETransparentDataReport',
          func: (inputValue) => {
            return new Promise((resolve, reject) => {
              ty.device.onBLETransparentDataReport(_onBLETransparentDataReport)
              resolve(true)
            })
          },
        },
        {
          title: '3. 关闭监听 offBLETransparentDataReport',
          functionName: 'offBLETransparentDataReport',
          func: (inputValue) => {
            return new Promise((resolve, reject) => {
              ty.device.offBLETransparentDataReport(_onBLETransparentDataReport)
              resolve(true)
            })
          },
        },
        {
          title: '4. 注销订阅 unsubscribeBLETransparentDataReport',
          functionName: 'unsubscribeBLETransparentDataReport',
          input: true,
          placeholder: Strings.getLang('please_input_dev_id'),
          key: 'deviceId',
          func: (inputValue) => {
            return new Promise((resolve, reject) => {
              unsubscribeBLETransparentDataReport({
                deviceId: inputValue || getApp().deviceId || deviceId,
                success: resolve,
                fail: reject,
              })
            })
          },
        }
      ]
    }
  },
  TUNIDeviceControlManager: {
    onDpDataChange: {
      title: '监听设备数据变化',
      desc: '监听设备数据变化，需要先调用 registerDeviceListListener，再通过 onDpDataChange 监听，具体流程如下：',
      functionList: [
        {
          title: '1. 先调用 registerDeviceListListener 订阅设备数据变化',
          functionName: 'registerDeviceListListener',
          input: true,
          placeholder: Strings.getLang('please_input_dev_id'),
          key: 'deviceId',
          func: (inputValue) => {
            return new Promise((resolve, reject) => {
              registerDeviceListListener({
                deviceIdList: [inputValue || getApp().deviceId || deviceId],
                success: resolve,
                fail: reject,
              })
            })
          },
        },
        {
          title: '2. 注册监听 onDpDataChange',
          functionName: 'onDpDataChange',
          func: (inputValue) => {
            return new Promise((resolve, reject) => {
              onDpDataChange(_onDpDataChange)
              resolve(true)
            })
          },
        },
        {
          title: '3. 关闭监听 offDpDataChange',
          functionName: 'offDpDataChange',
          func: (inputValue) => {
            return new Promise((resolve, reject) => {
              offDpDataChange(_onDpDataChange)
              resolve(true)
            })
          },
        },
        {
          title: '4. 注销订阅 unregisterDeviceListListener',
          functionName: 'unregisterDeviceListListener',
          func: (inputValue) => {
            return new Promise((resolve, reject) => {
              unregisterDeviceListListener()
              resolve(true)
            })
          },
        }
      ],
    },
    onDeviceRemoved: {
      title: '监听设备移除事件',
      desc: '监听设备移除事件，需要先调用 registerDeviceListListener，再通过 onDeviceRemoved 监听，具体流程如下：',
      functionList: [
        {
          title: '1. 先调用 registerDeviceListListener 订阅设备数据变化',
          functionName: 'registerDeviceListListener',
          input: true,
          placeholder: Strings.getLang('please_input_dev_id'),
          key: 'deviceId',
          func: (inputValue) => {
            return new Promise((resolve, reject) => {
              registerDeviceListListener({
                deviceIdList: [inputValue || getApp().deviceId || deviceId],
                success: resolve,
                fail: reject,
              })
            })
          },
        },
        {
          title: '2. 注册监听 onDeviceRemoved',
          functionName: 'onDeviceRemoved',
          func: (inputValue) => {
            return new Promise((resolve, reject) => {
              ty.device.onDeviceRemoved(_onDeviceRemoved)
              resolve(true)
            })
          },
        },
        {
          title: '3. 关闭监听 offDeviceRemoved',
          functionName: 'offDeviceRemoved',
          func: (inputValue) => {
            return new Promise((resolve, reject) => {
              ty.device.offDeviceRemoved(_onDeviceRemoved)
              resolve(true)
            })
          },
        },
        {
          title: '4. 注销订阅 unregisterDeviceListListener',
          functionName: 'unregisterDeviceListListener',
          func: (inputValue) => {
            return new Promise((resolve, reject) => {
              unregisterDeviceListListener()
              resolve(true)
            })
          },
        }
      ],
    },
    onDeviceOnlineStatusUpdate: {
      title: '监听设备在线状态变化',
      desc: '监听设备在线状态变化，需要先调用 registerDeviceListListener，再通过 onDeviceOnlineStatusUpdate 监听，具体流程如下：',
      functionList: [
        {
          title: '1. 先调用 registerDeviceListListener 订阅设备数据变化',
          functionName: 'registerDeviceListListener',
          input: true,
          placeholder: Strings.getLang('please_input_dev_id'),
          key: 'deviceId',
          func: (inputValue) => {
            return new Promise((resolve, reject) => {
              registerDeviceListListener({
                deviceIdList: [inputValue || getApp().deviceId || deviceId],
                success: resolve,
                fail: reject,
              })
            })
          },
        },
        {
          title: '2. 注册监听 onDeviceOnlineStatusUpdate',
          functionName: 'onDeviceOnlineStatusUpdate',
          func: (inputValue) => {
            return new Promise((resolve, reject) => {
              ty.device.onDeviceOnlineStatusUpdate(_onDeviceOnlineStatusUpdate)
              resolve(true)
            })
          },
        },
        {
          title: '3. 关闭监听 offDeviceOnlineStatusUpdate',
          functionName: 'offDeviceOnlineStatusUpdate',
          func: (inputValue) => {
            return new Promise((resolve, reject) => {
              ty.device.offDeviceOnlineStatusUpdate(_onDeviceOnlineStatusUpdate)
              resolve(true)
            })
          },
        },
        {
          title: '4. 注销订阅 unregisterDeviceListListener',
          functionName: 'unregisterDeviceListListener',
          func: (inputValue) => {
            return new Promise((resolve, reject) => {
              unregisterDeviceListListener()
              resolve(true)
            })
          },
        }
      ],
    },
    onDeviceInfoUpdated: {
      title: '监听设备信息更新',
      desc: '监听设备信息更新，需要先调用 registerDeviceListListener，再通过 onDeviceInfoUpdated 监听，具体流程如下：',
      functionList: [
        {
          title: '1. 先调用 registerDeviceListListener 订阅设备数据变化',
          functionName: 'registerDeviceListListener',
          input: true,
          placeholder: Strings.getLang('please_input_dev_id'),
          key: 'deviceId',
          func: (inputValue) => {
            return new Promise((resolve, reject) => {
              registerDeviceListListener({
                deviceIdList: [inputValue || getApp().deviceId || deviceId],
                success: resolve,
                fail: reject,
              })
            })
          },
        },
        {
          title: '2. 注册监听 onDeviceInfoUpdated',
          functionName: 'onDeviceInfoUpdated',
          func: (inputValue) => {
            return new Promise((resolve, reject) => {
              ty.device.onDeviceInfoUpdated(_onDeviceInfoUpdated)
              resolve(true)
            })
          },
        },
        {
          title: '3. 关闭监听 offDeviceInfoUpdated',
          functionName: 'offDeviceInfoUpdated',
          func: (inputValue) => {
            return new Promise((resolve, reject) => {
              ty.device.offDeviceInfoUpdated(_onDeviceInfoUpdated)
              resolve(true)
            })
          },
        },
        {
          title: '4. 注销订阅 unregisterDeviceListListener',
          functionName: 'unregisterDeviceListListener',
          func: (inputValue) => {
            return new Promise((resolve, reject) => {
              unregisterDeviceListListener()
              resolve(true)
            })
          },
        }
      ],
    },
    onMqttMessageReceived: {
      title: '监听设备 MQTT 消息',
      desc: '监听设备 MQTT 消息，需要先调用 registerMQTTDeviceListener / registerMQTTProtocolListener / registerTopicListListener，再通过 onMqttMessageReceived 监听，具体流程如下：',
      functionList: [
        {
          title: '1. 先调用 registerMQTTDeviceListener 订阅设备数据变化',
          functionName: 'registerMQTTDeviceListener',
          input: true,
          placeholder: Strings.getLang('please_input_dev_id'),
          key: 'deviceId',
          func: (inputValue) => {
            return new Promise((resolve, reject) => {
              registerMQTTDeviceListener({
                deviceId: inputValue || getApp().deviceId || deviceId,
                success: resolve,
                fail: reject,
              })
            })
          },
        },
        {
          title: '或先调用 registerMQTTProtocolListener 订阅设备数据变化',
          functionName: 'registerMQTTProtocolListener',
          input: true,
          placeholder: Strings.getLang('please_input_protocol'),
          func: (inputValue) => {
            return new Promise((resolve, reject) => {
              if (!inputValue) {
                ty.showToast({ title: Strings.getLang('please_input_protocol'), icon: 'none' })
                reject(Strings.getLang('please_input_protocol'))
                return
              }

              registerMQTTProtocolListener({
                protocol: inputValue,
                success: resolve,
                fail: reject,
              })
            })
          },
        },
        {
          title: '或先调用 registerTopicListListener 订阅设备数据变化',
          functionName: 'registerTopicListListener',
          input: true,
          placeholder: Strings.getLang('please_input_topics'),
          func: (inputValue) => {
            return new Promise((resolve, reject) => {
              if (!inputValue) {
                ty.showToast({ title: Strings.getLang('please_input_topics'), icon: 'none' })
                reject(Strings.getLang('please_input_topics'))
                return
              }
              registerTopicListListener({
                topicList: inputValue.split(','),
                success: resolve,
                fail: reject,
              })
            })
          },
        },
        {
          title: '2. 注册监听 onMqttMessageReceived',
          functionName: 'onMqttMessageReceived',
          func: (inputValue) => {
            return new Promise((resolve, reject) => {
              ty.device.onMqttMessageReceived(_onMqttMessageReceived)
              resolve(true)
            })
          },
        },
        {
          title: '3. 关闭监听 offMqttMessageReceived',
          functionName: 'offMqttMessageReceived',
          func: (inputValue) => {
            return new Promise((resolve, reject) => {
              ty.device.offMqttMessageReceived(_onMqttMessageReceived)
              resolve(true)
            })
          },
        },
        {
          title: '4. 注销订阅 unregisterDeviceListListener',
          functionName: 'unregisterDeviceListListener',
          func: (inputValue) => {
            return new Promise((resolve, reject) => {
              unregisterDeviceListListener()
              resolve(true)
            })
          },
        }
      ],
    }
  }
}
