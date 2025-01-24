import Strings from '@/i18n'
import { trans } from '@/utils'
import {
  deviceIsSupportThingModel,
  getDeviceThingModelInfo,
  getLaunchOptionsSync,
  offReceivedThingModelMessage,
  onReceivedThingModelMessage,
  publishThingModelMessage,
  subscribeReceivedThingModelMessage,
  unSubscribeReceivedThingModelMessage,
  validDeviceOnlineType,
} from 'ray'
const {
  query: { deviceId, groupId },
} = getLaunchOptionsSync()

const _onReceivedThingModelMessage = (res) => {
  console.log('ThingModel.onReceivedThingModelMessage', res)
}

export default [
  {
    title: 'deviceIsSupportThingModel',
    functionName: 'deviceIsSupportThingModel',
    input: true,
    placeholder: Strings.getLang('please_input_dev_id'),
    key: 'deviceId',
    func: (inputValue?) => {
      return new Promise((resolve, reject) => {
        deviceIsSupportThingModel({
          devId: inputValue || getApp().deviceId || deviceId,
          success: resolve,
          fail: reject,
        })
      })
    },
  },
  {
    title: 'getDeviceThingModelInfo',
    functionName: 'getDeviceThingModelInfo',
    input: true,
    placeholder: Strings.getLang('please_input_dev_id'),
    key: 'deviceId',
    func: (inputValue?) => {
      return new Promise((resolve, reject) => {
        getDeviceThingModelInfo({
          devId: inputValue || getApp().deviceId || deviceId,
          success: resolve,
          fail: reject,
        })
      })
    },
  },
  {
    title: 'offReceivedThingModelMessage',
    functionName: 'offReceivedThingModelMessage',
    func: (inputValue?) => {
      return new Promise((resolve, reject) => {
        offReceivedThingModelMessage(_onReceivedThingModelMessage)
        resolve(true)
      })
    },
  },
  {
    title: 'onReceivedThingModelMessage',
    functionName: 'onReceivedThingModelMessage',
    func: (inputValue?) => {
      return new Promise((resolve, reject) => {
        onReceivedThingModelMessage(_onReceivedThingModelMessage)
        resolve(true)
      })
    },
  },
  {
    title: 'publishThingModelMessage',
    functionName: 'publishThingModelMessage',
    input: true,
    keys: ['deviceId', 'type', 'payload'],
    placeholder: [
      Strings.getLang('please_input_dev_id'),
      Strings.getLang('please_input_type'),
      Strings.getLang('please_input_payload'),
    ],
    func: async (inputValue?) => {
      return new Promise((resolve, reject) => {
        if (!inputValue || !inputValue.type || !inputValue.payload) {
          reject('pid, productVersion is required')
          return
        }
        publishThingModelMessage({
          devId: inputValue.deviceId || getApp().deviceId || deviceId,
          type: inputValue.type,
          payload: trans(inputValue.payload),
          success: resolve,
          fail: reject,
        })
      })
    },
  },

  {
    title: 'subscribeReceivedThingModelMessage',
    functionName: 'subscribeReceivedThingModelMessage',
    input: true,
    placeholder: Strings.getLang('please_input_dev_id'),
    key: 'deviceId',
    func: (inputValue?) => {
      return new Promise((resolve, reject) => {
        subscribeReceivedThingModelMessage({
          devId: inputValue || getApp().deviceId || deviceId,
          success: resolve,
          fail: reject,
        })
      })
    },
  },
  {
    title: 'unSubscribeReceivedThingModelMessage',
    functionName: 'unSubscribeReceivedThingModelMessage',
    input: true,
    placeholder: Strings.getLang('please_input_dev_id'),
    key: 'deviceId',
    func: (inputValue?) => {
      return new Promise((resolve, reject) => {
        unSubscribeReceivedThingModelMessage({
          devId: inputValue || getApp().deviceId || deviceId,
          success: resolve,
          fail: reject,
        })
      })
    },
  },
  {
    title: 'deviceIsSupportThingModel',
    functionName: 'deviceIsSupportThingModel',
    input: true,
    placeholder: Strings.getLang('please_input_dev_id'),
    key: 'deviceId',
    func: (inputValue?) => {
      return new Promise((resolve, reject) => {
        deviceIsSupportThingModel({
          devId: inputValue || getApp().deviceId || deviceId,
          success: resolve,
          fail: reject,
        })
      })
    },
  },
  {
    title: 'validDeviceOnlineType',
    functionName: 'validDeviceOnlineType',
    input: true,
    keys: ['deviceId', 'onlineType'],
    placeholder: [
      Strings.getLang('please_input_dev_id'),
      Strings.getLang('please_input_online_type'),
    ],
    func: (inputValue) => {
      return new Promise((resolve, reject) => {
        if (typeof inputValue.onlineType === 'undefined') {
          ty.showToast({ title: Strings.getLang('please_input_online_type'), icon: 'none' })
          reject(Strings.getLang('please_input_online_type'))
          return
        }
        validDeviceOnlineType({
          deviceId: inputValue.deviceId || getApp().deviceId || deviceId,
          onlineType: +inputValue.onlineType,
          success: resolve,
          fail: reject,
        })
      })
    },
  },
]
