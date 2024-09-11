import Strings from '@/i18n'
import { trans } from '@/utils'
import {
  getDeviceNumWithDpCode,
  getGroupDeviceList,
  getGroupDeviceNum,
  getGroupInfo,
  getGroupProperty,
  getLaunchOptionsSync,
  openMeshLocalGroup,
  publishGroupDpCodes,
  publishGroupDps,
  publishSigMeshMultiDps,
  setGroupProperty,
} from '@ray-js/ray'

const {
  query: { deviceId, groupId },
} = getLaunchOptionsSync()

export default [
  {
    title: 'getGroupDeviceList',
    functionName: 'getGroupDeviceList',
    input: true,
    placeholder: Strings.getLang('please_input_group_id'),
    func: (inputValue) => {
      return new Promise((resolve, reject) => {
        getGroupDeviceList({
          groupId: inputValue || groupId,
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
          groupId: inputValue || groupId,
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
    placeholder: Strings.getLang('please_input_group_id'),
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
          groupId: inputValue.groupId || groupId,
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
          groupId: inputValue.groupId || groupId,
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
          groupId: inputValue.groupId || groupId,
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
          deviceId: inputValue.deviceId || groupId,
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
          groupId: inputValue || groupId,
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
          groupId: inputValue.groupId || groupId,
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
          groupId: inputValue.groupId || groupId,
          code: inputValue.code,
          value: inputValue.value,
          success: resolve,
          fail: reject,
        })
      })
    },
  },
]
