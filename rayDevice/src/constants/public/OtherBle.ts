import Strings from '@/i18n'
import {
  getLaunchOptionsSync,
  startBLEMeshLowPowerConnection,
  stopBLEMeshLowPowerConnection,
} from 'ray'
const {
  query: { deviceId, groupId },
} = getLaunchOptionsSync()

export default [
  {
    title: 'startBLEMeshLowPowerConnection',
    functionName: 'startBLEMeshLowPowerConnection',
    input: true,
    placeholder: Strings.getLang('please_input_dev_id'),
    key: 'deviceId',
    func: (inputValue) => {
      return new Promise((resolve, reject) => {
        startBLEMeshLowPowerConnection({
          deviceId: inputValue || getApp().deviceId || deviceId,
          success: resolve,
          fail: reject,
        })
      })
    },
  },
  {
    title: 'stopBLEMeshLowPowerConnection',
    functionName: 'stopBLEMeshLowPowerConnection',
    input: true,
    placeholder: Strings.getLang('please_input_dev_id'),
    key: 'deviceId',
    func: (inputValue) => {
      return new Promise((resolve, reject) => {
        stopBLEMeshLowPowerConnection({
          deviceId: inputValue || getApp().deviceId || deviceId,
          success: resolve,
          fail: reject,
        })
      })
    },
  },
]
