import {
  bluetoothCapabilityIsSupport,
  bluetoothCapabilityOfBLEBeacon,
  getDeviceInfo,
  getDeviceListByDevIds,
  getDeviceOfflineReminderState,
  getDeviceOfflineReminderWarningText,
  getDeviceOnlineType,
  getDeviceWifiActivatorStatus,
  getLaunchOptionsSync,
  getShareDeviceInfo,
  getSupportedThirdPartyServices,
  home,
  isDeviceSupportOfflineReminder,
  publishCommands,
  publishDpsWithPipeType,
  removeDevice,
  removeShareDevice,
  renameDeviceName,
  resetFactory,
  subscribeDeviceRemoved,
  syncDeviceInfo,
  toggleDeviceOfflineReminder,
  unSubscribeDeviceRemoved,
  validDeviceOnlineType,
  queryDps
} from '@ray-js/ray'
import Strings from '@/i18n'
import TUNIDeviceActivationManager from './TUNIDeviceActivationManager'
import TUNIDeviceControlManager from './TUNIDeviceControlManager'
import TUNIDeviceDetailManager from './TUNIDeviceDetailManager'

const {
  query: { deviceId, groupId },
} = getLaunchOptionsSync()
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
    title: Strings.getLang('queryDps'),
    functionName: 'queryDps',
    input: true,
    placeholder: Strings.getLang('please_input_dpids'),
    func: (inputValue?) => {
      return new Promise((resolve, reject) => {
        queryDps({
          deviceId,
          dpIds: inputValue.split(','),
          queryType: 2,
          success: resolve,
          fail: reject,
        })
      })
    },
  },
  {
    title: Strings.getLang('publishCommands'),
    functionName: 'publishCommands',
    func: () => {
      return new Promise((resolve, reject) => {
        publishCommands({
          deviceId,
          dps: {
            switch_led: false,
          },
          mode: 2,
          pipelines: [],
          options: {},
          success: resolve,
          fail: reject,
        })
      })
    },
  },
  {
    title: Strings.getLang('publishDpsWithPipeType'),
    functionName: 'publishDpsWithPipeType',
    func: () => {
      return new Promise((resolve, reject) => {
        publishDpsWithPipeType({
          deviceId,
          dps: {
            '20': false,
          },
          mode: 2,
          pipelines: [1, 2, 3, 4, 5, 6],
          options: {},
          success: resolve,
          fail: reject,
        })
      })
    },
  },
  {
    title: Strings.getLang('getDeviceWifiActivatorStatus'),
    functionName: 'getDeviceWifiActivatorStatus',
    func: () => {
      return new Promise((resolve, reject) => {
        getDeviceWifiActivatorStatus({
          deviceId,
          success: resolve,
          fail: reject,
        })
      })
    },
  },
  {
    title: Strings.getLang('getDeviceOnlineType'),
    functionName: 'getDeviceOnlineType',
    func: () => {
      return new Promise((resolve, reject) => {
        getDeviceOnlineType({
          deviceId,
          success: resolve,
          fail: reject,
        })
      })
    },
  },
  {
    title: Strings.getLang('renameDeviceName'),
    functionName: 'renameDeviceName',
    input: true,
    placeholder: Strings.getLang('please_input_device_name'),
    func: (inputValue?) => {
      return new Promise((resolve, reject) => {
        console.log('-----toRenameDeviceName', inputValue, deviceId)
        renameDeviceName({
          deviceId,
          name: inputValue,
          success: resolve,
          fail: reject,
        })
      })
    },
  },
  {
    title: Strings.getLang('getShareDeviceInfo'),
    functionName: 'getShareDeviceInfo',
    input: true,
    placeholder: Strings.getLang('please_input_shared_dev_id'),
    func: (inputValue?) => {
      return new Promise((resolve, reject) => {
        getShareDeviceInfo({
          deviceId: inputValue,
          success: resolve,
          fail: reject,
        })
      })
    },
  },
  // {
  //   title: Strings.getLang('getDeviceNumWithDpCode'),
  //   functionName: 'getDeviceNumWithDpCode',
  //   input: true,
  //   placeholder: Strings.getLang('please_input_dp_code'),
  //   func: (inputValue?) => {
  //     return new Promise((resolve, reject) => {
  //       getDeviceNumWithDpCode({
  //         groupId,
  //         dpCode: 'switch_led',
  //         success: resolve,
  //         fail: reject,
  //       })
  //     })
  //   },
  // },
  {
    title: Strings.getLang('getDeviceListByDevIds'),
    functionName: 'getDeviceListByDevIds',
    input: true,
    placeholder: Strings.getLang('please_input_dev_ids'),
    func: (devIds) => {
      return new Promise((resolve, reject) => {
        getDeviceListByDevIds({
          deviceIds: devIds.split(','),
          success: resolve,
          fail: reject,
        })
      })
    },
  },

  {
    title: Strings.getLang('getDeviceOfflineReminderState'),
    functionName: 'getDeviceOfflineReminderState',
    func: () => {
      return new Promise((resolve, reject) => {
        getDeviceOfflineReminderState({
          deviceId,
          success: resolve,
          fail: reject,
        })
      })
    },
  },
  {
    title: Strings.getLang('getDeviceOfflineReminderWarningText'),
    functionName: 'getDeviceOfflineReminderWarningText',
    func: () => {
      return new Promise((resolve, reject) => {
        getDeviceOfflineReminderWarningText({
          success: resolve,
          fail: reject,
        })
      })
    },
  },

  {
    title: Strings.getLang('removeDevice'),
    functionName: 'removeDevice',
    func: () => {
      return new Promise((resolve, reject) => {
        removeDevice({
          deviceId,
          success: resolve,
          fail: reject,
        })
      })
    },
  },
  {
    title: Strings.getLang('removeShareDevice'),
    functionName: 'removeShareDevice',
    func: () => {
      return new Promise((resolve, reject) => {
        removeShareDevice({
          deviceId,
          success: resolve,
          fail: reject,
        })
      })
    },
  },
  {
    title: Strings.getLang('subscribeDeviceRemoved'),
    functionName: 'subscribeDeviceRemoved',
    input: true,
    placeholder: Strings.getLang('please_input_dev_id'),
    func: (inputValue?) => {
      return new Promise((resolve, reject) => {
        subscribeDeviceRemoved({
          deviceId: inputValue || deviceId,
          success: resolve,
          fail: reject,
        })
      })
    },
  },

  {
    title: Strings.getLang('unSubscribeDeviceRemoved'),
    functionName: 'unSubscribeDeviceRemoved',
    input: true,
    placeholder: Strings.getLang('please_input_dev_id'),
    func: (inputValue?) => {
      return new Promise((resolve, reject) => {
        unSubscribeDeviceRemoved({
          deviceId: inputValue || deviceId,
          success: resolve,
          fail: reject,
        })
      })
    },
  },
  {
    title: Strings.getLang('isDeviceSupportOfflineReminder'),
    functionName: 'isDeviceSupportOfflineReminder',
    input: true,
    placeholder: Strings.getLang('please_input_dev_id'),
    func: (inputValue?) => {
      return new Promise((resolve, reject) => {
        isDeviceSupportOfflineReminder({
          deviceId: inputValue || deviceId,
          success: resolve,
          fail: reject,
        })
      })
    },
  },
  {
    title: Strings.getLang('toggleDeviceOfflineReminder'),
    functionName: 'toggleDeviceOfflineReminder',
    input: true,
    placeholder: Strings.getLang('please_input_state'),
    func: (inputValue?) => {
      return new Promise((resolve, reject) => {
        toggleDeviceOfflineReminder({
          deviceId: deviceId,
          state: inputValue || false,
          success: resolve,
          fail: reject,
        })
      })
    },
  },

  {
    title: Strings.getLang('getSupportedThirdPartyServices'),
    functionName: 'getSupportedThirdPartyServices',
    func: () => {
      return new Promise((resolve, reject) => {
        getSupportedThirdPartyServices({
          deviceId,
          success: resolve,
          fail: reject,
        })
      })
    },
  },
  {
    title: Strings.getLang('requestAdvancedCapability'),
    functionName: 'requestAdvancedCapability',
    input: true,
    placeholder: Strings.getLang('please_input_dp_code'),
    func: async (inputValue?) => {
      const { homeId } = await home.getCurrentHomeInfo()
      return new Promise((resolve, reject) => {
        if (!inputValue) {
          reject('dpCodes is required')
          return
        }
        ty.device.requestAdvancedCapability({
          resId: deviceId,
          type: '6',
          spaceId: homeId,
          dpCodes: inputValue.split(','),
          success: resolve,
          fail: reject,
        })
      })
    },
  },
  {
    title: Strings.getLang('dpTranslateAdvancedCapability'),
    functionName: 'dpTranslateAdvancedCapability',
    input: true,
    keys: ['dpCode', 'dpId', 'dpValue'],
    placeholder: [
      Strings.getLang('please_input_dp_code'),
      Strings.getLang('please_input_dp_id'),
      Strings.getLang('please_input_dp_value'),
    ],
    func: async (inputValue?) => {
      return new Promise((resolve, reject) => {
        console.log('-----dpTranslateAdvancedCapability', inputValue)
        if (!inputValue || !inputValue.dpCode || !inputValue.dpId || !inputValue.dpValue) {
          reject('dpCode, dpValue, dpId is required')
          return
        }
        ty.device.dpTranslateAdvancedCapability({
          resId: deviceId,
          type: '6',
          dps: [
            {
              dpCode: inputValue.dpCode,
              dpValue: inputValue.dpValue,
              dpId: inputValue.dpId,
            },
          ],
          success: resolve,
          fail: reject,
        })
      })
    },
  },
  {
    title: Strings.getLang('bluetoothCapabilityIsSupport'),
    functionName: 'bluetoothCapabilityIsSupport',
    input: true,
    placeholder: Strings.getLang('please_input_capability_code'),
    func: (inputValue?) => {
      return new Promise((resolve, reject) => {
        bluetoothCapabilityIsSupport({
          deviceId,
          capability: inputValue,
          success: resolve,
          fail: reject,
        })
      })
    },
  },
  {
    title: Strings.getLang('bluetoothCapabilityOfBLEBeacon'),
    functionName: 'bluetoothCapabilityOfBLEBeacon',
    func: () => {
      return new Promise((resolve, reject) => {
        bluetoothCapabilityOfBLEBeacon({
          deviceId,
          success: resolve,
          fail: reject,
        })
      })
    },
  },
  {
    title: Strings.getLang('syncDeviceInfo'),
    functionName: 'syncDeviceInfo',
    input: true,
    placeholder: Strings.getLang('please_input_dev_id'),
    func: (inputValue?) => {
      return new Promise((resolve, reject) => {
        syncDeviceInfo({
          deviceId: inputValue || deviceId,
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
    func: (inputValue?) => {
      return new Promise((resolve, reject) => {
        resetFactory({
          deviceId: inputValue || deviceId,
          success: resolve,
          fail: reject,
        })
      })
    },
  },

  {
    title: Strings.getLang('setDeviceProperty'),
    functionName: 'setDeviceProperty',
    input: true,
    keys: ['code', 'value'],
    placeholder: [Strings.getLang('please_input_code'), Strings.getLang('please_input_value')],
    func: async (inputValue?) => {
      return new Promise((resolve, reject) => {
        console.log('-----dpTranslateAdvancedCapability', inputValue)
        if (!inputValue || !inputValue.code || !inputValue.value) {
          reject('code, value is required')
          return
        }
        ty.device.setDeviceProperty({
          deviceId,
          code: inputValue.code,
          value: inputValue.value,
          success: resolve,
          fail: reject,
        })
      })
    },
  },

  {
    title: Strings.getLang('getDeviceProperty'),
    functionName: 'getDeviceProperty',
    func: async () => {
      return new Promise((resolve, reject) => {
        ty.device.getDeviceProperty({
          deviceId,
          success: resolve,
          fail: reject,
        })
      })
    },
  },
  {
    title: Strings.getLang('getRemoteRebootTimers'),
    functionName: 'getRemoteRebootTimers',
    func: async () => {
      return new Promise((resolve, reject) => {
        ty.device.getRemoteRebootTimers({
          deviceId,
          success: resolve,
          fail: reject,
        })
      })
    },
  },

  {
    title: Strings.getLang('validDeviceOnlineType'),
    functionName: 'validDeviceOnlineType',
    input: true,
    keys: ['deviceId', 'onlineType'],
    placeholder: [Strings.getLang('please_input_dev_id'), Strings.getLang('please_input_online_type')],
    func: (inputValue?) => {
      return new Promise((resolve, reject) => {
        validDeviceOnlineType({
          deviceId: inputValue.deviceId || deviceId,
          onlineType: inputValue.onlineType,
          success: resolve,
          fail: reject,
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


export const routes = [
  {
    title: I18n.t('TUNIDeviceActivationManager'),
    url: '/pages/detail/index?type=TUNIDeviceActivationManager',
  },
  {
    title: I18n.t('TUNIDeviceControlManager'),
    url: '/pages/detail/index?type=TUNIDeviceControlManager',
  },
  {
    title: I18n.t('TUNIDeviceDetailManager'),
    url: '/pages/detail/index?type=TUNIDeviceDetailManager',
  }
]

export const config = {
  TUNIDeviceActivationManager,
  TUNIDeviceControlManager,
  TUNIDeviceDetailManager
}

