import Strings from '@/i18n'
import { trans } from '@/utils'
import {
  getDeviceNumWithDpCode,
  getGroupDeviceList,
  getGroupDeviceNum,
  getGroupInfo,
  getGroupProperty,
  getLaunchOptionsSync,
  offGroupDpCodeChange,
  offGroupDpDataChangeEvent,
  offGroupInfoChange,
  offGroupRemovedEvent,
  onGroupDpCodeChange,
  onGroupDpDataChangeEvent,
  onGroupInfoChange,
  onGroupRemovedEvent,
  openMeshLocalGroup,
  publishGroupDpCodes,
  publishGroupDps,
  publishSigMeshMultiDps,
  registerGroupChange,
  setGroupProperty,
  unRegisterGroupChange,
  getApp
} from '@ray-js/ray'

const {
  query: { deviceId, groupId },
} = getLaunchOptionsSync()

const _onGroupInfoChange = (data) => {
  console.log('TUNIGroupControlManager.onGroupInfoChange', data)
}

const _onGroupDpCodeChange = (data) => {
  console.log('TUNIGroupControlManager.onGroupDpCodeChange', data)
}

const _onGroupRemovedEvent = (data) => {
  console.log('TUNIGroupControlManager.onGroupRemovedEvent', data)
}

const _onGroupDpDataChangeEvent = (data) => {
  console.log('TUNIGroupControlManager.onGroupDpDataChangeEvent', data)
}

export default [
  {
    title: 'getGroupDeviceList',
    functionName: 'getGroupDeviceList',
    input: true,
    placeholder: Strings.getLang('please_input_group_id'),
    func: (inputValue) => {
      return new Promise((resolve, reject) => {
        getGroupDeviceList({
          groupId: inputValue || getApp().deviceId || groupId,
          success: resolve,
          fail: reject,
        })
      })
    },
  },
  {
    title: 'getGroupDeviceNum',
    functionName: 'getGroupDeviceNum',
    input: true,
    placeholder: Strings.getLang('please_input_group_id'),
    func: (inputValue) => {
      return new Promise((resolve, reject) => {
        getGroupDeviceNum({
          groupId: inputValue || getApp().deviceId || groupId,
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
    placeholder: [Strings.getLang('please_input_group_id'), Strings.getLang('please_input_dp_code')],
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
    title: 'publishGroupDpCodes',
    functionName: 'publishGroupDpCodes',
    input: true,
    keys: ['groupId', 'dpCodes'],
    placeholder: [
      Strings.getLang('please_input_group_id'),
      Strings.getLang('please_input_publish_dps_c'),
    ],
    func: (inputValue) => {
      return new Promise((resolve, reject) => {
        console.log('---------inputValue', inputValue)
        publishGroupDpCodes({
          groupId: inputValue.groupId || getApp().deviceId || groupId,
          dpCodes: trans(inputValue.dpCodes),
          success: resolve,
          fail: reject,
        })
      })
    },
  },
  {
    title: 'publishSigMeshMultiDps',
    functionName: 'publishSigMeshMultiDps',
    input: true,
    keys: ['groupId', 'localId', 'dps', 'pcc'],
    placeholder: ['groupId', 'localId', 'dps', 'pcc'],
    func: (inputValue) => {
      return new Promise((resolve, reject) => {
        console.log('---------inputValue', inputValue)
        if (typeof inputValue.groupId === undefined && !groupId) {
          reject('groupId is required')
          return
        }
        if (typeof inputValue.localId === 'undefined') {
          reject('localId is required')
          return
        }
        if (typeof inputValue.dps === 'undefined') {
          reject('dps is required')
          return
        }
        if (typeof inputValue.pcc === 'undefined') {
          reject('pcc is undefined')
          return
        }
        publishSigMeshMultiDps({
          groupId: inputValue.groupId || getApp().deviceId || groupId,
          localId: inputValue.localId,
          dps: trans(inputValue.dps),
          pcc: inputValue.pcc,
          success: resolve,
          fail: reject,
        })
      })
    },
  },
  {
    title: 'openMeshLocalGroup',
    functionName: 'openMeshLocalGroup',
    input: true,
    keys: [
      'deviceId',
      'localId',
      'vendorIds',
      'type',
      'pccs',
      'codes',
      'categoryCode',
      'isSupportLowPower',
    ],
    placeholder: ['deviceId', 'localId', 'vendorIds', 'type'],
    func: (inputValue) => {
      return new Promise((resolve, reject) => {
        console.log('---------inputValue', inputValue)
        if (typeof inputValue.deviceId === undefined && !groupId) {
          reject('deviceId is required')
          return
        }
        if (typeof inputValue.localId === 'undefined') {
          reject('localId is required')
          return
        }
        if (typeof inputValue.vendorIds === 'undefined') {
          reject('vendorIds is required')
          return
        }

        openMeshLocalGroup({
          deviceId: inputValue.deviceId || getApp().deviceId || groupId,
          localId: inputValue.localId,
          vendorIds: inputValue.vendorIds,
          type: inputValue.type,
          pccs: inputValue.pccs,
          codes: inputValue.codes,
          categoryCode: inputValue.categoryCode,
          isSupportLowPower: inputValue.isSupportLowPower,
          success: resolve,
          fail: reject,
        })
      })
    },
  },

  {
    title: 'getGroupInfo',
    functionName: 'getGroupInfo',
    input: true,
    placeholder: Strings.getLang('please_input_group_id'),
    func: (inputValue) => {
      return new Promise((resolve, reject) => {
        getGroupInfo({
          groupId: inputValue || getApp().deviceId || groupId,
          success: resolve,
          fail: reject,
        })
      })
    },
  },

  {
    title: 'publishGroupDps',
    functionName: 'publishGroupDps',
    input: true,
    keys: ['groupId', 'dps'],
    placeholder: [
      Strings.getLang('please_input_group_id'),
      Strings.getLang('please_input_publish_dps'),
    ],
    func: (inputValue) => {
      return new Promise((resolve, reject) => {
        console.log('---------inputValue', inputValue)
        publishGroupDps({
          groupId: inputValue.groupId || getApp().deviceId || groupId,
          dps: trans(inputValue.dps),
          success: resolve,
          fail: reject,
        })
      })
    },
  },
  {
    title: 'getGroupProperty',
    functionName: 'getGroupProperty',
    input: true,
    placeholder: Strings.getLang('please_input_group_id'),
    func: (inputValue) => {
      return new Promise((resolve, reject) => {
        getGroupProperty({
          groupId: inputValue || groupId,
          success: resolve,
          fail: reject,
        })
      })
    },
  },
  {
    title: 'setGroupProperty',
    functionName: 'setGroupProperty',
    input: true,
    keys: ['groupId', 'code', 'value'],
    placeholder: [
      Strings.getLang('please_input_group_id'),
      Strings.getLang('please_input_code'),
      Strings.getLang('please_input_value'),
    ],
    func: (inputValue) => {
      return new Promise((resolve, reject) => {
        setGroupProperty({
          groupId: inputValue.groupId || getApp().deviceId || groupId,
          code: inputValue.code,
          value: inputValue.value,
          success: resolve,
          fail: reject,
        })
      })
    },
  },
  {
    title: 'registerGroupChange',
    functionName: 'registerGroupChange',
    input: true,
    placeholder: Strings.getLang('please_input_group_ids'),
    func: (inputValue) => {
      return new Promise((resolve, reject) => {
        registerGroupChange({
          groupIdList: inputValue?.split(',') || [getApp().deviceId || groupId],
          success: resolve,
          fail: reject,
        })
      })
    },
  },
  {
    title: 'unRegisterGroupChange',
    functionName: 'unRegisterGroupChange',
    func: (inputValue) => {
      return new Promise((resolve, reject) => {
        unRegisterGroupChange({
          success: resolve,
          fail: reject,
        })
      })
    },
  },
  {
    title: 'onGroupInfoChange',
    functionName: 'onGroupInfoChange',
    func: (inputValue) => {
      return new Promise((resolve, reject) => {
        onGroupInfoChange(_onGroupInfoChange)
        resolve(true)
      })
    },
  },
  {
    title: 'offGroupInfoChange',
    functionName: 'offGroupInfoChange',
    func: (inputValue) => {
      return new Promise((resolve, reject) => {
        offGroupInfoChange(_onGroupInfoChange)
        resolve(true)

      })
    },
  },
  {
    title: 'onGroupDpCodeChange',
    functionName: 'onGroupDpCodeChange',
    func: (inputValue) => {
      return new Promise((resolve, reject) => {
        onGroupDpCodeChange(_onGroupDpCodeChange)
        resolve(true)

      })
    },
  },
  {
    title: 'offGroupDpCodeChange',
    functionName: 'offGroupDpCodeChange',
    func: (inputValue) => {
      return new Promise((resolve, reject) => {
        offGroupDpCodeChange(_onGroupDpCodeChange)
        resolve(true)

      })
    },
  },
  {
    title: 'onGroupRemovedEvent',
    functionName: 'onGroupRemovedEvent',
    func: (inputValue) => {
      return new Promise((resolve, reject) => {
        onGroupRemovedEvent(_onGroupRemovedEvent)
        resolve(true)

      })
    },
  },
  {
    title: 'offGroupRemovedEvent',
    functionName: 'offGroupRemovedEvent',
    func: (inputValue) => {
      return new Promise((resolve, reject) => {
        offGroupRemovedEvent(_onGroupRemovedEvent)
        resolve(true)

      })
    },
  },
  {
    title: 'onGroupDpDataChangeEvent',
    functionName: 'onGroupDpDataChangeEvent',
    func: (inputValue) => {
      return new Promise((resolve, reject) => {
        onGroupDpDataChangeEvent(_onGroupDpDataChangeEvent)
        resolve(true)

      })
    },
  },
  {
    title: 'offGroupDpDataChangeEvent',
    functionName: 'offGroupDpDataChangeEvent',
    func: (inputValue) => {
      return new Promise((resolve, reject) => {
        offGroupDpDataChangeEvent(_onGroupDpDataChangeEvent)
        resolve(true)

      })
    },
  },
]
