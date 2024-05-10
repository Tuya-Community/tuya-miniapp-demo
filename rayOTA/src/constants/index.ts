import Strings from '@/i18n'
import { checkOTAUpdateInfo, checkOTAUpgradeStatus, getLaunchOptionsSync } from '@ray-js/ray'

const {
  query: { deviceId, groupId },
} = getLaunchOptionsSync()
export const deviceInfoApiList = [
  {
    title: Strings.getLang('checkOTAUpdateInfo'),
    functionName: 'checkOTAUpdateInfo',
    func: () => {
      return new Promise((resolve, reject) => {
        checkOTAUpdateInfo({
          deviceId,
          success: resolve,
          fail: reject,
        })
      })
    },
  },
  {
    title: Strings.getLang('checkOTAUpgradeStatus'),
    functionName: 'checkOTAUpgradeStatus',
    func: () => {
      return new Promise((resolve, reject) => {
        checkOTAUpgradeStatus({
          deviceId,
          success: resolve,
          fail: reject,
        })
      })
    },
  },
  {
    title: Strings.getLang('openOTAUpgrade'),
    functionName: 'openOTAUpgrade',
    func: () => {
      return new Promise((resolve, reject) => {
        ty.device.openOTAUpgrade({
          deviceId,
          success: resolve,
          fail: reject,
        })
      })
    },
  },
  {
    title: Strings.getLang('registerOTACompleted'),
    functionName: 'registerOTACompleted',
    func: () => {
      return new Promise((resolve, reject) => {
        ty.device.registerOTACompleted({
          success: resolve,
          fail: reject,
        })
      })
    },
  },
  {
    title: Strings.getLang('onOtaCompleted'),
    functionName: 'onOtaCompleted',
    func: () => {
      return new Promise((resolve, reject) => {
        ty.device.onOtaCompleted((res) => {
          console.log('onOtaCompleted', res)
          resolve(res)
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
