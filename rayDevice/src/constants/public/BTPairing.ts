import Strings from '@/i18n'
import {
  connectBTBond,
  disconnectBTBond,
  getBTDeviceInfo,
  getLaunchOptionsSync
} from 'ray'
const {
  query: { deviceId, groupId },
} = getLaunchOptionsSync()

export default [
  {
    title: 'disconnectBTBond',
    functionName: 'disconnectBTBond',
    input: true,
    placeholder: Strings.getLang('please_input_mac'),
    func: (inputValue) => {
      return new Promise((resolve, reject) => {
        disconnectBTBond({
          mac: inputValue,
          success: resolve,
          fail: reject,
        })
      })
    },
  },
  {
    title: 'connectBTBond',
    functionName: 'connectBTBond',
    input: true,
    placeholder: Strings.getLang('please_input_mac'),
    func: (inputValue) => {
      return new Promise((resolve, reject) => {
        connectBTBond({
          mac: inputValue,
          success: resolve,
          fail: reject,
        })
      })
    },
  },
  {
    title: 'getBTDeviceInfo',
    functionName: 'getBTDeviceInfo',
    input: true,
    placeholder: Strings.getLang('please_input_dev_id'),
    key: 'deviceId',
    func: (inputValue) => {
      return new Promise((resolve, reject) => {
        getBTDeviceInfo({
          deviceId: inputValue || getApp().deviceId || deviceId,
          success: resolve,
          fail: reject,
        })
      })
    },
  },
]
