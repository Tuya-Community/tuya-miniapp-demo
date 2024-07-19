import Strings from '@/i18n'
import {
  deviceIsSupportThingModel,
  getDeviceInfo,
  getDeviceThingModelInfo,
  getLaunchOptionsSync,
  offReceivedThingModelMessage,
  onReceivedThingModelMessage,
  publishThingModelMessage,
  subscribeReceivedThingModelMessage,
  unSubscribeReceivedThingModelMessage,
  updateDeviceThingModelInfo
} from '@ray-js/ray'

const {
  query: { deviceId, groupId },
} = getLaunchOptionsSync()
const _onReceivedThingModelMessage = (res) => {
  console.log('onReceivedThingModelMessage', res)
}
export const deviceInfoApiList = [
  {
    title: Strings.getLang('getDeviceInfo'),
    functionName: 'getDeviceInfo',
    func: () => {
      return new Promise((resolve, reject) => {
        getDeviceInfo({
          deviceId,
          success: resolve,
          fail: reject,
        })
      })
    },
  },
  {
    title: Strings.getLang('deviceIsSupportThingModel'),
    functionName: 'deviceIsSupportThingModel',
    input: true,
    placeholder: Strings.getLang('please_input_dev_id'),
    func: (inputValue?) => {
      return new Promise((resolve, reject) => {
        deviceIsSupportThingModel({
          devId: inputValue || deviceId,
          success: resolve,
          fail: reject,
        })
      })
    },
  },
  {
    title: Strings.getLang('getDeviceThingModelInfo'),
    functionName: 'getDeviceThingModelInfo',
    input: true,
    placeholder: Strings.getLang('please_input_dev_id'),
    func: (inputValue?) => {
      return new Promise((resolve, reject) => {
        getDeviceThingModelInfo({
          devId: inputValue || deviceId,
          success: resolve,
          fail: reject,
        })
      })
    },
  },


  {
    title: Strings.getLang('publishThingModelMessage'),
    functionName: 'publishThingModelMessage',
    input: true,
    keys: ['deviceId','type', 'payload'],
    placeholder: [Strings.getLang('please_input_dev_id'), Strings.getLang('please_input_type'), Strings.getLang('please_input_payload')],
    func: async (inputValue?) => {
      return new Promise((resolve, reject) => {
        console.log('-----dpTranslateAdvancedCapability', inputValue)
        if (!inputValue || !inputValue.type || !inputValue.payload) {
          reject('pid, productVersion is required')
          return
        }
        publishThingModelMessage({
          devId: inputValue.deviceId || deviceId,
          type: inputValue.type,
          payload: inputValue.payload,
          success: resolve,
          fail: reject,
        })
      })
    },
  },

  {
    title: Strings.getLang('updateDeviceThingModelInfo'),
    functionName: 'updateDeviceThingModelInfo',
    input: true,
    keys: ['pid', 'productVersion'],
    placeholder: [Strings.getLang('please_input_pid'), Strings.getLang('please_input_pv')],
    func: async (inputValue?) => {
      return new Promise((resolve, reject) => {
        console.log('-----dpTranslateAdvancedCapability', inputValue)
        if (!inputValue || !inputValue.pid || !inputValue.productVersion) {
          reject('pid, productVersion is required')
          return
        }
        updateDeviceThingModelInfo({
          pid: inputValue.pid,
          productVersion: inputValue.productVersion,
          success: resolve,
          fail: reject,
        })
      })
    },
  },

  {
    title: Strings.getLang('subscribeReceivedThingModelMessage'),
    functionName: 'subscribeReceivedThingModelMessage',
    input: true,
    placeholder: Strings.getLang('please_input_dev_id'),
    func: (inputValue?) => {
      return new Promise((resolve, reject) => {
        subscribeReceivedThingModelMessage({
          devId: inputValue || deviceId,
          success: resolve,
          fail: reject,
        })
      })
    },
  },

  {
    title: Strings.getLang('unSubscribeReceivedThingModelMessage'),
    functionName: 'unSubscribeReceivedThingModelMessage',
    input: true,
    placeholder: Strings.getLang('please_input_dev_id'),
    func: (inputValue?) => {
      return new Promise((resolve, reject) => {
        unSubscribeReceivedThingModelMessage({
          devId: inputValue || deviceId,
          success: resolve,
          fail: reject,
        })
      })
    },
  },
  {
    title: Strings.getLang('onReceivedThingModelMessage'),
    functionName: 'onReceivedThingModelMessage',
    func: (inputValue?) => {
      return new Promise((resolve, reject) => {
        onReceivedThingModelMessage(_onReceivedThingModelMessage)
        resolve(true)
      })
    },
  },
  {
    title: Strings.getLang('offReceivedThingModelMessage'),
    functionName: 'offReceivedThingModelMessage',
    func: (inputValue?) => {
      return new Promise((resolve, reject) => {
        offReceivedThingModelMessage(_onReceivedThingModelMessage)
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
