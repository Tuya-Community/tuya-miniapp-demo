import Strings from '@/i18n'
import { trans } from '@/utils'
import {
  getLaunchOptionsSync,
  getMqttConnectState,
  offMqttConnectState,
  offMqttMessageReceived,
  onMqttConnectState,
  onMqttMessageReceived,
  publishMqttMessage,
  registerMQTTDeviceListener,
  registerTopicListListener,
  sendMqttMessage,
  unregisterMQTTDeviceListener,
  unregisterMQTTProtocolListener,
  unregisterTopicListListener,
} from 'ray'
const {
  query: { deviceId, groupId },
} = getLaunchOptionsSync()

const _onMqttConnectState = (event) => {
  console.log('MQTT.onMqttConnectState', event)
}

const _onMqttMessageReceived = (event) => {
  console.log('MQTT.onMqttMessageReceived', event)
}

export default [
  {
    title: 'getMqttConnectState',
    functionName: 'getMqttConnectState',
    func: (inputValue) => {
      return new Promise((resolve, reject) => {
        getMqttConnectState({
          success: (e) => {
            resolve(e)
          },
          fail: reject,
        })
      })
    },
  },
  {
    title: 'onMqttConnectState',
    functionName: 'onMqttConnectState',
    func: (inputValue) => {
      return new Promise((resolve, reject) => {
        onMqttConnectState(_onMqttConnectState)
        resolve(true)
      })
    },
  },
  {
    title: 'offMqttConnectState',
    functionName: 'offMqttConnectState',
    func: (inputValue) => {
      return new Promise((resolve, reject) => {
        offMqttConnectState(_onMqttConnectState)
        resolve(true)
      })
    },
  },
  {
    title: 'onMqttMessageReceived',
    functionName: 'onMqttMessageReceived',
    func: (inputValue) => {
      return new Promise((resolve, reject) => {
        onMqttMessageReceived(_onMqttMessageReceived)
        resolve(true)
      })
    },
  },
  {
    title: 'offMqttMessageReceived',
    functionName: 'offMqttMessageReceived',
    func: (inputValue) => {
      return new Promise((resolve, reject) => {
        offMqttMessageReceived(_onMqttMessageReceived)
        resolve(true)
      })
    },
  },

  {
    title: 'publishMqttMessage',
    functionName: 'publishMqttMessage',
    input: true,
    keys: ['deviceId', 'protocol', 'message'],

    placeholder: [
      Strings.getLang('please_input_dev_id'),
      Strings.getLang('please_input_protocol'),
      Strings.getLang('please_input_message'),
    ],
    func: (inputValue) => {
      return new Promise((resolve, reject) => {
        if (!inputValue.protocol) {
          ty.showToast({ title: Strings.getLang('please_input_protocol'), icon: 'none' })
          reject(Strings.getLang('please_input_protocol'))
          return
        }
        if (!inputValue.message) {
          ty.showToast({ title: Strings.getLang('please_input_message'), icon: 'none' })
          reject(Strings.getLang('please_input_message'))
          return
        }

        const message = trans(inputValue.message)
        console.log(message)

        publishMqttMessage({
          deviceId: inputValue.deviceId || getApp().deviceId || deviceId,
          protocol: inputValue.protocol,
          message: message,
          options: {},
          success: (e) => {
            resolve(e)
          },
          fail: reject,
        })
      })
    },
  },

  {
    title: 'sendMqttMessage',
    functionName: 'sendMqttMessage',
    input: true,
    keys: ['deviceId', 'protocol', 'message'],

    placeholder: [
      Strings.getLang('please_input_dev_id'),
      Strings.getLang('please_input_protocol'),
      Strings.getLang('please_input_message'),
    ],
    func: (inputValue) => {
      return new Promise((resolve, reject) => {
        if (!inputValue.protocol) {
          ty.showToast({ title: Strings.getLang('please_input_protocol'), icon: 'none' })
          reject(Strings.getLang('please_input_protocol'))
          return
        }
        if (!inputValue.message) {
          ty.showToast({ title: Strings.getLang('please_input_message'), icon: 'none' })
          reject(Strings.getLang('please_input_message'))
          return
        }

        const message = trans(inputValue.message)
        console.log(message)

        sendMqttMessage({
          deviceId: inputValue.deviceId || getApp().deviceId || deviceId,
          protocol: inputValue.protocol,
          message: message,
          options: {},
          success: (e) => {
            resolve(e)
          },
          fail: reject,
        })
      })
    },
  },

  {
    title: 'registerMQTTDeviceListener',
    functionName: 'registerMQTTDeviceListener',
    input: true,
    placeholder: Strings.getLang('please_input_dev_id'),
    key: 'deviceId',
    func: (inputValue) => {
      return new Promise((resolve, reject) => {
        registerMQTTDeviceListener({
          deviceId: inputValue || getApp().deviceId || deviceId,
          success: (e) => {
            resolve(e)
          },
          fail: reject,
        })
      })
    },
  },
  {
    title: 'unregisterMQTTDeviceListener',
    functionName: 'unregisterMQTTDeviceListener',
    input: true,
    placeholder: Strings.getLang('please_input_dev_id'),
    key: 'deviceId',
    func: (inputValue) => {
      return new Promise((resolve, reject) => {
        unregisterMQTTDeviceListener({
          deviceId: inputValue || getApp().deviceId || deviceId,
          success: (e) => {
            resolve(e)
          },
          fail: reject,
        })
      })
    },
  },

  {
    title: 'registerTopicListListener',
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
          success: (e) => {
            resolve(e)
          },
          fail: reject,
        })
      })
    },
  },
  {
    title: 'unregisterTopicListListener',
    functionName: 'unregisterTopicListListener',
    func: (inputValue) => {
      return new Promise((resolve, reject) => {
        unregisterTopicListListener({
          success: (e) => {
            resolve(e)
          },
          fail: reject,
        })
      })
    },
  },

  {
    title: 'unregisterMQTTProtocolListener',
    functionName: 'unregisterMQTTProtocolListener',
    input: true,
    placeholder: Strings.getLang('please_input_protocol'),
    func: (inputValue) => {
      return new Promise((resolve, reject) => {
        if (!inputValue) {
          ty.showToast({ title: Strings.getLang('please_input_protocol'), icon: 'none' })
          reject(Strings.getLang('please_input_protocol'))
          return
        }
        unregisterMQTTProtocolListener({
          protocol: inputValue,
          success: (e) => {
            resolve(e)
          },
          fail: reject,
        })
      })
    },
  },
]
