import Strings from '@/i18n'
import {
  addDeviceToDesk,
  getDeviceInfo,
  getDeviceListByDevIds,
  getDeviceNumWithDpCode,
  getDeviceOfflineReminderState,
  getDeviceOfflineReminderWarningText,
  getDeviceOnlineType,
  getEncryptLocalKeyWithData,
  getLaunchOptionsSync,
  getMeshDeviceId,
  getProductInfo,
  getShareDeviceInfo,
  getSupportedThirdPartyServices,
  isDeviceSupportOfflineReminder,
  offDeviceInfoUpdated,
  offDeviceOnlineStatusUpdate,
  onDeviceInfoUpdated,
  onDeviceOnlineStatusUpdate,
  registerDeviceListListener,
  renameDeviceName,
  syncDeviceInfo,
  toggleDeviceOfflineReminder,
  unregisterDeviceListListener,
} from 'ray'
const {
  query: { deviceId, groupId },
} = getLaunchOptionsSync()

const _onDeviceOnlineStatusUpdate = (event) => {
  console.log('DeviceInformation.onDeviceOnlineStatusUpdate', event)
}
const _onDeviceInfoUpdated = (event) => {
  console.log('DeviceInformation.onDeviceInfoUpdated', event)
}

export default [
  {
    title: 'getDeviceInfo',
    functionName: 'getDeviceInfo',
    input: true,
    placeholder: Strings.getLang('please_input_dev_id'),
    key: 'deviceId',
    func: (inputValue) => {
      return new Promise((resolve, reject) => {
        getDeviceInfo({
          deviceId: inputValue || getApp().deviceId || deviceId,
          success: resolve,
          fail: reject,
        })
      })
    },
  },
  {
    title: 'getDeviceListByDevIds',
    functionName: 'getDeviceListByDevIds',
    input: true,
    placeholder: Strings.getLang('please_input_dev_ids'),
    func: (inputValue) => {
      return new Promise((resolve, reject) => {
        if (!inputValue) {
          ty.showToast({ title: Strings.getLang('please_input_dev_ids'), icon: 'none' })
          reject(Strings.getLang('please_input_dev_ids'))
          return
        }
        getDeviceListByDevIds({
          deviceIds: inputValue.split(','),
          success: resolve,
          fail: reject,
        })
      })
    },
  },
  {
    title: 'getDeviceNumWithDpCode',
    functionName: 'getDeviceNumWithDpCode',
    input: true,
    keys: ['groupId', 'dpCode'],
    placeholder: [
      Strings.getLang('please_input_group_id'),
      Strings.getLang('please_input_dp_code'),
    ],
    func: (inputValue) => {
      return new Promise((resolve, reject) => {
        if (typeof inputValue?.dpCode === 'undefined') {
          reject('dpCode is required')
          return
        }

        if (typeof inputValue?.groupId === 'undefined' && !groupId) {
          reject('groupId is required')
          return
        }

        getDeviceNumWithDpCode({
          groupId: inputValue.groupId || getApp().deviceId || groupId,
          dpCode: inputValue.dpCode,
          success: resolve,
          fail: reject,
        })
      })
    },
  },
  {
    title: 'getDeviceOfflineReminderState',
    functionName: 'getDeviceOfflineReminderState',
    input: true,
    placeholder: Strings.getLang('please_input_dev_id'),
    key: 'deviceId',
    func: (inputValue) => {
      return new Promise((resolve, reject) => {
        getDeviceOfflineReminderState({
          deviceId: inputValue || getApp().deviceId || deviceId,
          success: resolve,
          fail: reject,
        })
      })
    },
  },
  {
    title: 'getDeviceOfflineReminderWarningText',
    functionName: 'getDeviceOfflineReminderWarningText',
    func: (inputValue) => {
      return new Promise((resolve, reject) => {
        getDeviceOfflineReminderWarningText({
          success: resolve,
          fail: reject,
        })
      })
    },
  },
  {
    title: Strings.getLang('getDeviceOnlineType'),
    functionName: 'getDeviceOnlineType',
    input: true,
    placeholder: Strings.getLang('please_input_dev_id'),
    key: 'deviceId',
    func: (inputValue) => {
      return new Promise((resolve, reject) => {
        getDeviceOnlineType({
          deviceId: inputValue || getApp().deviceId || deviceId,
          success: resolve,
          fail: reject,
        })
      })
    },
  },
  {
    title: 'getMeshDeviceId',
    functionName: 'getMeshDeviceId',
    input: true,
    keys: ['nodeId', 'deviceId'],
    placeholder: ['nodeId', 'deviceId'],
    func: (inputValue) => {
      return new Promise((resolve, reject) => {
        if (typeof inputValue?.nodeId === 'undefined') {
          reject('nodeId is required')
          return
        }

        if (typeof inputValue?.deviceId === 'undefined') {
          reject('deviceId is required')
          return
        }

        getMeshDeviceId({
          nodeId: inputValue.nodeId,
          deviceId: inputValue.deviceId || getApp().deviceId || deviceId,
          success: resolve,
          fail: reject,
        })
      })
    },
  },
  {
    title: 'getProductInfo',
    functionName: 'getProductInfo',
    input: true,
    placeholder: Strings.getLang('please_input_product_id'),
    func: (inputValue) => {
      return new Promise((resolve, reject) => {
        if (!inputValue) {
          ty.showToast({ title: Strings.getLang('please_input_product_id'), icon: 'none' })
          reject(Strings.getLang('please_input_product_id'))
          return
        }
        getProductInfo({
          productId: inputValue,
          success: resolve,
          fail: reject,
        })
      })
    },
  },
  {
    title: 'getShareDeviceInfo',
    functionName: 'getShareDeviceInfo',
    input: true,
    placeholder: Strings.getLang('please_input_shared_dev_id'),
    // key: 'deviceId',
    func: (inputValue?) => {
      return new Promise((resolve, reject) => {
        getShareDeviceInfo({
          deviceId: inputValue || getApp().deviceId || deviceId,
          success: resolve,
          fail: reject,
        })
      })
    },
  },
  {
    title: 'getSupportedThirdPartyServices',
    functionName: 'getSupportedThirdPartyServices',
    input: true,
    placeholder: Strings.getLang('please_input_dev_id'),
    key: 'deviceId',
    func: (inputValue) => {
      return new Promise((resolve, reject) => {
        getSupportedThirdPartyServices({
          deviceId: inputValue || getApp().deviceId || deviceId,
          success: resolve,
          fail: reject,
        })
      })
    },
  },
  {
    title: 'isDeviceSupportOfflineReminder',
    functionName: 'isDeviceSupportOfflineReminder',
    input: true,
    placeholder: Strings.getLang('please_input_dev_id'),
    key: 'deviceId',
    func: (inputValue?) => {
      return new Promise((resolve, reject) => {
        isDeviceSupportOfflineReminder({
          deviceId: inputValue || getApp().deviceId || deviceId,
          success: resolve,
          fail: reject,
        })
      })
    },
  },
  {
    title: 'syncDeviceInfo',
    functionName: 'syncDeviceInfo',
    input: true,
    placeholder: Strings.getLang('please_input_dev_id'),
    key: 'deviceId',
    func: (inputValue) => {
      return new Promise((resolve, reject) => {
        syncDeviceInfo({
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
    title: Strings.getLang('renameDeviceName'),
    functionName: 'renameDeviceName',
    input: true,
    keys: ['deviceId', 'name'],
    placeholder: [
      Strings.getLang('please_input_dev_id'),
      Strings.getLang('please_input_device_name'),
    ],
    func: (inputValue?) => {
      return new Promise((resolve, reject) => {
        console.log('-----toRenameDeviceName', inputValue, deviceId)
        // if (!inputValue.name) {
        //   ty.showToast({ title: Strings.getLang('please_input_device_name'), icon: 'none' })
        //   reject(Strings.getLang('please_input_device_name'))
        //   return
        // }
        renameDeviceName({
          deviceId: inputValue?.deviceId || getApp().deviceId || deviceId,
          name: inputValue?.name,
          success: resolve,
          fail: reject,
        })
      })
    },
  },
  {
    title: 'toggleDeviceOfflineReminder',
    functionName: 'toggleDeviceOfflineReminder',
    input: true,
    keys: ['deviceId', 'state'],
    placeholder: [Strings.getLang('please_input_dev_id'), Strings.getLang('please_input_state')],
    func: (inputValue?) => {
      return new Promise((resolve, reject) => {
        toggleDeviceOfflineReminder({
          deviceId: inputValue.deviceId || getApp().deviceId || deviceId,
          state: +inputValue.state,
          success: resolve,
          fail: reject,
        })
      })
    },
  },
  {
    title: 'addDeviceToDesk',
    functionName: 'addDeviceToDesk',
    input: true,
    placeholder: Strings.getLang('please_input_dev_id'),
    key: 'deviceId',
    func: (inputValue) => {
      return new Promise((resolve, reject) => {
        addDeviceToDesk({
          deviceId: inputValue || getApp().deviceId || deviceId,
          success: resolve,
          fail: reject,
        })
      })
    },
  },
  {
    title: 'getEncryptLocalKeyWithData',
    functionName: 'getEncryptLocalKeyWithData',
    input: true,
    keys: ['deviceId', 'keyDeviceId'],
    placeholder: ['deviceId', 'keyDeviceId'],
    func: (inputValue) => {
      return new Promise((resolve, reject) => {
        getEncryptLocalKeyWithData({
          deviceId: inputValue.deviceId || getApp().deviceId || deviceId,
          keyDeviceId: inputValue.keyDeviceId,
          success: resolve,
          fail: reject,
        })
      })
    },
  },

  {
    title: 'registerDeviceListListener',
    functionName: 'registerDeviceListListener',
    input: true,
    placeholder: Strings.getLang('please_input_dev_ids'),
    func: (inputValue) => {
      return new Promise((resolve, reject) => {
        if (!inputValue) {
          ty.showToast({ title: Strings.getLang('please_input_dev_ids'), icon: 'none' })
          reject(Strings.getLang('please_input_dev_ids'))
          return
        }
        registerDeviceListListener({
          deviceIdList: inputValue.split(','),
          success: (e) => {
            resolve(e)
          },
          fail: reject,
        })
      })
    },
  },
  {
    title: 'unregisterDeviceListListener',
    functionName: 'unregisterDeviceListListener',
    func: () => {
      return new Promise((resolve, reject) => {
        unregisterDeviceListListener({
          success: (e) => {
            resolve(e)
          },
          fail: reject,
        })
      })
    },
  },

  {
    title: 'onDeviceOnlineStatusUpdate',
    functionName: 'onDeviceOnlineStatusUpdate',
    func: (inputValue) => {
      return new Promise((resolve, reject) => {
        onDeviceOnlineStatusUpdate(_onDeviceOnlineStatusUpdate)
        resolve(true)
      })
    },
  },
  {
    title: 'offDeviceOnlineStatusUpdate',
    functionName: 'offDeviceOnlineStatusUpdate',
    func: (inputValue) => {
      return new Promise((resolve, reject) => {
        offDeviceOnlineStatusUpdate(_onDeviceOnlineStatusUpdate)
        resolve(true)
      })
    },
  },
  {
    title: 'onDeviceInfoUpdated',
    functionName: 'onDeviceInfoUpdated',
    func: (inputValue) => {
      return new Promise((resolve, reject) => {
        onDeviceInfoUpdated(_onDeviceInfoUpdated)
        resolve(true)
      })
    },
  },
  {
    title: 'offDeviceInfoUpdated',
    functionName: 'offDeviceInfoUpdated',
    func: (inputValue) => {
      return new Promise((resolve, reject) => {
        offDeviceInfoUpdated(_onDeviceInfoUpdated)
        resolve(true)
      })
    },
  },
]
