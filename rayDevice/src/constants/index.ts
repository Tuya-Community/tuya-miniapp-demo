import {
  addTimer,
  getDeviceInfo,
  getDeviceListByDevIds,
  getDeviceNumWithDpCode,
  getDeviceOnlineType,
  getDeviceWifiActivatorStatus,
  getGroupDeviceList,
  getGroupDeviceNum,
  getGroupInfo,
  getGroupProperty,
  getLaunchOptionsSync,
  getShareDeviceInfo,
  home,
  publishCommands,
  publishDpsWithPipeType,
  publishGroupDpCodes,
  setGroupProperty,
} from '@ray-js/ray'
import Strings from '@/i18n'

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
          pipelines: [1,2,3,4,5,6],
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
    func: () => {
      return new Promise((resolve, reject) => {
        home.getCurrentHomeInfo({
          success: ({ homeId }) => {
            home.getDeviceIdList({
              ownerId: Number(homeId),
              success: ({ devIds }) => {
                getDeviceListByDevIds({
                  deviceIds: devIds,
                  success: resolve,
                  fail: reject,
                })
              },
              fail: reject,
            })
          },
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

export const groupInfoApiList = [
  {
    title: Strings.getLang('getGroupInfo'),
    functionName: 'getGroupInfo',
    func: () => {
      return new Promise((resolve, reject) => {
        getGroupInfo({
          groupId,
          success: resolve,
          fail: reject,
        })
      })
    },
  },
  {
    title: Strings.getLang('publishGroupDpCodes'),
    functionName: 'publishGroupDpCodes',
    func: () => {
      return new Promise((resolve, reject) => {
        publishGroupDpCodes({
          groupId,
          dpCodes: { switch_led: true },
          success: resolve,
          fail: reject,
        })
      })
    },
  },
  {
    title: Strings.getLang('getGroupProperty'),
    functionName: 'getGroupProperty',
    func: () => {
      return new Promise((resolve, reject) => {
        getGroupProperty({
          groupId,
          success: resolve,
          fail: reject,
        })
      })
    },
  },
  {
    title: Strings.getLang('setGroupProperty'),
    functionName: 'setGroupProperty',
    input: true,
    keys:['code', 'value'],
    placeholder: [Strings.getLang('please_input_code'), Strings.getLang('please_input_value')],
    func: (inputValue) => {
      return new Promise((resolve, reject) => {
        setGroupProperty({
          groupId,
          code:inputValue.code,
          value: inputValue.value,
          success: resolve,
          fail: reject,
        })
      })
    },
  },

  {
    title: Strings.getLang('getGroupDeviceList'),
    functionName: 'getGroupDeviceList',
    func: () => {
      return new Promise((resolve, reject) => {
        getGroupDeviceList({
          groupId,
          success: resolve,
          fail: reject,
        })
      })
    },
  },
  {
    title: Strings.getLang('getGroupDeviceNum'),
    functionName: 'getGroupDeviceNum',
    func: () => {
      return new Promise((resolve, reject) => {
        getGroupDeviceNum({
          groupId,
          success: resolve,
          fail: reject,
        })
      })
    },
  },
]


export const timerApiList = [
  {
    title: Strings.getLang('addTimer'),
    functionName: 'addTimer',
    func: () => {
      return new Promise((resolve, reject) => {
        addTimer({
          deviceId,
          groupId,
          category: 'schedule',
          timer: {
            time: '',
            loops: '',
            dps: {},
            aliasName: '',
            isAppPush: false,
          },
          success: resolve,
          fail: reject,
        })
      })
    },
  },
]