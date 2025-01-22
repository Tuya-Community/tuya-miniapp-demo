import Strings from '@/i18n'
import {
  checkOTAUpgradeStatus,
  getApp,
  getLaunchOptionsSync,
  openOTAUpgrade
} from '@ray-js/ray'

const {
  query: { deviceId, groupId },
} = getLaunchOptionsSync()

const _onOtaCompleted = (event) => {
  console.log('TUNIOTAManager.onOtaCompleted', event)
}

export default [
  {
    title: 'checkOTAUpgradeStatus',
    functionName: 'checkOTAUpgradeStatus',
    input: true,
    placeholder: Strings.getLang('please_input_dev_id'),
    key: 'deviceId',
    func: (inputValue) => {
      return new Promise((resolve, reject) => {
        if (typeof inputValue === 'undefined' && !getApp().deviceId  && !deviceId) {
          reject('deviceId is required')
          return
        }

        checkOTAUpgradeStatus({
          deviceId: inputValue || getApp().deviceId || deviceId,
          success: resolve,
          fail: reject,
        })
      })
    },
  },
  {
    title: 'otaStatus',
    functionName: 'otaStatus',
    input: true,
    placeholder: Strings.getLang('please_input_dev_id'),
    key: 'deviceId',
    func: (inputValue) => {
      return new Promise((resolve, reject) => {
        if (typeof inputValue === 'undefined'&& !getApp().deviceId   && !deviceId) {
          reject('deviceId is required')
          return
        }

        ty.device.otaStatus({
          deviceId: inputValue || getApp().deviceId || deviceId,
          success: resolve,
          fail: reject,
        })
      })
    },
  },
  {
    title: 'openOTAUpgrade',
    functionName: 'openOTAUpgrade',
    input: true,
    placeholder: Strings.getLang('please_input_dev_id'),
    key: 'deviceId',
    func: (inputValue) => {
      return new Promise((resolve, reject) => {
        if (typeof inputValue === 'undefined'&& !getApp().deviceId   && !deviceId) {
          reject('deviceId is required')
          return
        }

        openOTAUpgrade({
          deviceId: inputValue || getApp().deviceId || deviceId,
          success: resolve,
          fail: reject,
        })
      })
    },
  },
  {
    title: 'registerOTACompleted',
    functionName: 'registerOTACompleted',
    func: (inputValue) => {
      return new Promise((resolve, reject) => {
        ty.device.registerOTACompleted({
          success: resolve,
          fail: reject,
        })
      })
    },
  },
  {
    title: 'onOtaCompleted',
    functionName: 'onOtaCompleted',
    func: (inputValue) => {
      return new Promise((resolve, reject) => {
        ty.device.onOtaCompleted(_onOtaCompleted)
        resolve(undefined)
      })
    },
  },
  {
    title: 'offOtaCompleted',
    functionName: 'offOtaCompleted',
    func: (inputValue) => {
      return new Promise((resolve, reject) => {
        ty.device.offOtaCompleted(_onOtaCompleted)
        resolve(undefined)
      })
    },
  },
]
