import Strings from '@/i18n'
import {
  getLaunchOptionsSync,
  getSubDeviceInfoList,
  onSubDeviceAdded,
  onSubDeviceDpUpdate,
  onSubDeviceInfoUpdate,
  onSubDeviceRemoved,
  registerGateWaySubDeviceListener,
  startGWActivation
} from '@ray-js/ray'

const {
  query: { deviceId, groupId },
} = getLaunchOptionsSync()
export const deviceInfoApiList = [
  {
    title: Strings.getLang('getSubDeviceInfoList'),
    functionName: 'getSubDeviceInfoList',
    func: () => {
      return new Promise((resolve, reject) => {
        getSubDeviceInfoList({
          meshId: deviceId,
          success: resolve,
          fail: reject,
        })
      })
    },
  },
  {
    title: Strings.getLang('startGWActivation'),
    functionName: 'startGWActivation',
    func: () => {
      return new Promise((resolve, reject) => {
        startGWActivation({
          gateway: {
            gwId: deviceId,
          },
          timeout: 120,
          success: resolve,
          fail: reject,
        })
      })
    },
  },
  {
    title: Strings.getLang('onSubDeviceAdded'),
    functionName: 'onSubDeviceAdded',
    func: () => {
      return new Promise((resolve, reject) => {
        registerGateWaySubDeviceListener({ deviceId })
        onSubDeviceAdded((event) => {
          console.log('============onSubDeviceAdded', event)
        })
      })
    },
  },
  {
    title: Strings.getLang('onSubDeviceInfoUpdate'),
    functionName: 'onSubDeviceInfoUpdate',
    func: () => {
      return new Promise((resolve, reject) => {
        registerGateWaySubDeviceListener({ deviceId })
        onSubDeviceInfoUpdate((event) => {
          console.log('============onSubDeviceInfoUpdate', event)
        })
      })
    },
  },
  {
    title: Strings.getLang('onSubDeviceRemoved'),
    functionName: 'onSubDeviceRemoved',
    func: () => {
      return new Promise((resolve, reject) => {
        registerGateWaySubDeviceListener({ deviceId })
        onSubDeviceRemoved((event) => {
          console.log('============onSubDeviceRemoved', event)
        })
      })
    },
  },

  {
    title: Strings.getLang('onSubDeviceDpUpdate'),
    functionName: 'onSubDeviceDpUpdate',
    func: () => {
      return new Promise((resolve, reject) => {
        registerGateWaySubDeviceListener({ deviceId })
        onSubDeviceDpUpdate((event) => {
          console.log('============onSubDeviceDpUpdate', event)
        })
      })
    },
  },
]

export const getConfigWithFunc = (functionName) => {
  const allList = [...deviceInfoApiList]

  const menu = allList.find((item) => item.functionName === functionName)

  return menu.func
}
