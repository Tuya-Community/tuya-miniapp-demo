import Strings from '@/i18n'
import {
  getLaunchOptionsSync,
  registerMQTTDeviceListener,
  onMqttMessageReceived,
  registerMQTTProtocolListener,
  registerTopicListListener,
  unregisterMQTTDeviceListener,
  unregisterMQTTProtocolListener,
  unregisterTopicListListener,
  sendMqttMessage,
  getMqttConnectState,
  onMqttConnectState,
  offMqttConnectState,
} from '@ray-js/ray'

const {
  query: { deviceId },
} = getLaunchOptionsSync()

const queryToJSON = (query) => {
  return query.split('&').reduce((acc, cur) => {
    const [key, value] = cur.split('=')
    acc[key] = value
    return acc
  }, {})
}

export const deviceInfoApiList = [
  {
    title: Strings.getLang('registerMQTTDeviceListener'),
    functionName: 'registerMQTTDeviceListener',
    input: true,
    placeholder: Strings.getLang('please_input_shared_dev_id'),
    func: (inputValue) => {
      return new Promise((resolve, reject) => {
        if (!inputValue) reject(Strings.getLang('please_input_shared_dev_id'))
        registerMQTTDeviceListener({
          deviceId: inputValue,
          success: resolve,
          fail: reject,
        })
      })
    },
  },
  {
    title: Strings.getLang('unregisterMQTTDeviceListener'),
    functionName: 'unregisterMQTTDeviceListener',
    input: true,
    placeholder: Strings.getLang('please_input_shared_dev_id'),
    func: (inputValue) => {
      return new Promise((resolve, reject) => {
        if (!inputValue) reject(Strings.getLang('please_input_shared_dev_id'))
        unregisterMQTTDeviceListener({
          deviceId: inputValue,
          success: resolve,
          fail: reject,
        })
      })
    },
  },
  {
    title: Strings.getLang('registerMQTTProtocolListener'),
    functionName: 'registerMQTTProtocolListener',
    input: true,
    placeholder: Strings.getLang('please_input_shared_dev_id'),
    func: (inputValue) => {
      return new Promise((resolve, reject) => {
        if (!inputValue) reject(Strings.getLang('please_input_shared_dev_id'))
        registerMQTTProtocolListener({
          protocol: inputValue,
          success: resolve,
          fail: reject,
        })
      })
    },
  },
  {
    title: Strings.getLang('unregisterMQTTProtocolListener'),
    functionName: 'unregisterMQTTProtocolListener',
    input: true,
    placeholder: Strings.getLang('please_input_shared_dev_id'),
    func: (inputValue) => {
      return new Promise((resolve, reject) => {
        if (!inputValue) reject(Strings.getLang('please_input_shared_dev_id'))
        unregisterMQTTProtocolListener({
          protocol: inputValue,
          success: resolve,
          fail: reject,
        })
      })
    },
  },
  {
    title: Strings.getLang('registerTopicListListener'),
    functionName: 'registerTopicListListener',
    input: true,
    placeholder: Strings.getLang('please_input_shared_dev_id'),
    func: (inputValue) => {
      return new Promise((resolve, reject) => {
        if (!inputValue) reject(Strings.getLang('please_input_shared_dev_id'))
        registerTopicListListener({
          topicList: inputValue?.split(','),
          success: resolve,
          fail: reject,
        })
      })
    },
  },
  {
    title: Strings.getLang('unregisterTopicListListener'),
    functionName: 'unregisterTopicListListener',
    func: () => {
      return new Promise((resolve, reject) => {
        unregisterTopicListListener({
          success: resolve,
          fail: reject,
        })
      })
    },
  },

  {
    title: Strings.getLang('onMqttMessageReceived'),
    functionName: 'onMqttMessageReceived',
    func: () => {
      return new Promise((resolve, reject) => {
        onMqttMessageReceived((event) => {
          console.log('onMqttMessageReceived', event)
        })
      })
    },
  },
  {
    title: Strings.getLang('sendMqttMessage'),
    functionName: 'sendMqttMessage',
    input: true,
    keys: ['deviceId', 'message', 'protocol'],
    placeholder: [
      Strings.getLang('please_input_device_id'),
      Strings.getLang('please_input_message'),
      Strings.getLang('please_input_protocol'),
      // Strings.getLang('please_input_options'),
    ],
    func: (inputValue) => {
      return new Promise((resolve, reject) => {
        if (!inputValue || !inputValue.deviceId || !inputValue.message || !inputValue.protocol)
          return reject('Please input deviceId, message, protocol')
        const { deviceId, message, protocol } = inputValue
        console.log('------------->>>>>>inputValue', inputValue, queryToJSON(message))
        sendMqttMessage({
          deviceId,
          message: queryToJSON(message),
          protocol,
          options: {},
          success: resolve,
          fail: reject,
        })
      })
    },
  },
  {
    title: Strings.getLang('getMqttConnectState'),
    functionName: 'getMqttConnectState',
    func: () => {
      return new Promise((resolve, reject) => {
        getMqttConnectState({
          success: resolve,
          fail: reject,
        })
      })
    },
  },
  {
    title: Strings.getLang('onMqttConnectState'),
    functionName: 'onMqttConnectState',
    func: () => {
      return new Promise((resolve, reject) => {
        onMqttConnectState(event => {
          console.log('onMqttConnectState', event)
        })
        resolve(true)
      })
    },
  },
  {
    title: Strings.getLang('offMqttConnectState'),
    functionName: 'offMqttConnectState',
    func: () => {
      return new Promise((resolve, reject) => {
        offMqttConnectState(event => {
          console.log('offMqttConnectState', event)
        })
        resolve(true)
      })
    },
  },
]

export const getConfigWithFunc = (functionName) => {
  const allList = [...deviceInfoApiList]

  const menu = allList.find((item) => item.functionName === functionName)

  return menu.func
}
