import Strings from '@/i18n'
import {
  getDeviceWifiActivatorStatus,
  getLaunchOptionsSync,
  startDeviceWifiActivator
} from 'ray'
const {
  query: { deviceId, groupId },
} = getLaunchOptionsSync()

export default [
  {
    title: 'getDeviceWifiActivatorStatus',
    functionName: 'getDeviceWifiActivatorStatus',
    input: true,
    placeholder: Strings.getLang('please_input_gateway_id'),
    key: 'deviceId',
    func: (inputValue?: string) => {
      return new Promise((resolve, reject) => {
        getDeviceWifiActivatorStatus({
          deviceId: inputValue || getApp().deviceId || deviceId,
          success: resolve,
          fail: reject,
        })
      })
    },
  },
  {
    title: 'startDeviceWifiActivator',
    functionName: 'startDeviceWifiActivator',
    input: true,
    placeholder: Strings.getLang('please_input_gateway_id'),
    key: 'deviceId',
    func: (inputValue?: string) => {
      return new Promise((resolve, reject) => {
        startDeviceWifiActivator({
          deviceId: inputValue || getApp().deviceId || deviceId,
          success: resolve,
          fail: reject,
        })
      })
    },
  },
]
