import Strings from '@/i18n'
import {
  getLaunchOptionsSync,
  offDeviceRemoved,
  onDeviceRemoved,
  removeDevice,
  removeShareDevice,
  resetFactory,
  subscribeDeviceRemoved,
  unSubscribeDeviceRemoved
} from 'ray'
const {
  query: { deviceId, groupId },
} = getLaunchOptionsSync()

const _onDeviceRemoved = (event) => {
  console.log('DeviceRemove.onDeviceRemoved', event)
}

export default [
  {
    title: Strings.getLang('removeDevice'),
    functionName: 'removeDevice',
    input: true,
    placeholder: Strings.getLang('please_input_dev_id'),
    key: 'deviceId',
    func: (inputValue) => {
      return new Promise((resolve, reject) => {
        removeDevice({
          deviceId: inputValue || getApp().deviceId || deviceId,
          success: resolve,
          fail: reject,
        })
      })
    },
  },
  {
    title: Strings.getLang('resetFactory'),
    functionName: 'resetFactory',
    input: true,
    placeholder: Strings.getLang('please_input_dev_id'),
    key: 'deviceId',
    func: (inputValue?) => {
      return new Promise((resolve, reject) => {
        resetFactory({
          deviceId: inputValue || getApp().deviceId || deviceId,
          success: resolve,
          fail: reject,
        })
      })
    },
  },
  {
    title: 'removeShareDevice',
    functionName: 'removeShareDevice',
    input: true,
    placeholder: Strings.getLang('please_input_shared_dev_id'),
    key: 'deviceId',
    func: (inputValue) => {
      return new Promise((resolve, reject) => {
        removeShareDevice({
          deviceId: inputValue || getApp().deviceId || deviceId,
          success: resolve,
          fail: reject,
        })
      })
    },
  },

  {
    title: 'subscribeDeviceRemoved',
    functionName: 'subscribeDeviceRemoved',
    input: true,
    placeholder: Strings.getLang('please_input_dev_id'),
    key: 'deviceId',
    func: (inputValue) => {
      return new Promise((resolve, reject) => {
        subscribeDeviceRemoved({
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
    title: 'unSubscribeDeviceRemoved',
    functionName: 'unSubscribeDeviceRemoved',
    input: true,
    placeholder: Strings.getLang('please_input_dev_id'),
    key: 'deviceId',
    func: (inputValue) => {
      return new Promise((resolve, reject) => {
        unSubscribeDeviceRemoved({
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
    title: 'onDeviceRemoved',
    functionName: 'onDeviceRemoved',
    func: (inputValue) => {
      return new Promise((resolve, reject) => {
        onDeviceRemoved(_onDeviceRemoved)
        resolve(true)
      })
    },
  },
  {
    title: 'offDeviceRemoved',
    functionName: 'offDeviceRemoved',
    func: (inputValue) => {
      return new Promise((resolve, reject) => {
        offDeviceRemoved(_onDeviceRemoved)
        resolve(true)
      })
    },
  },
]
