import Strings from '@/i18n'
import {
  getDeviceNumWithDpCode,
  getGroupDeviceList,
  getGroupDeviceNum,
  getGroupInfo,
  getGroupProperty,
  getLaunchOptionsSync,
  publishGroupDpCodes,
  setGroupProperty,
} from '@ray-js/ray'

const {
  query: { deviceId, groupId },
} = getLaunchOptionsSync()

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
    input: true,
    keys: ['code', 'value'],
    placeholder: [Strings.getLang('please_input_dp_code'), Strings.getLang('please_input_dp_value')],
    func: (inputValue) => {
      return new Promise((resolve, reject) => {
        console.log('---------inputValue', inputValue)
        if(!inputValue || !inputValue.code || !inputValue.value) return reject(Strings.getLang('please_input_correct_code_and_value'))
        publishGroupDpCodes({
          groupId,
          dpCodes: { [inputValue.code]: inputValue.value },
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
    keys: ['code', 'value'],
    placeholder: [Strings.getLang('please_input_code'), Strings.getLang('please_input_value')],
    func: (inputValue) => {
      return new Promise((resolve, reject) => {
        if(!inputValue || !inputValue.code || !inputValue.value) return reject(Strings.getLang('please_input_correct_cv'))
        setGroupProperty({
          groupId,
          code: inputValue.code,
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
  {
    title: Strings.getLang('getDeviceNumWithDpCode'),
    functionName: 'getDeviceNumWithDpCode',
    input: true,
    placeholder: Strings.getLang('please_input_dp_code'),
    func: (inputValue?) => {
      return new Promise((resolve, reject) => {
        getDeviceNumWithDpCode({
          groupId,
          dpCode: inputValue,
          success: resolve,
          fail: reject,
        })
      })
    },
  },
]
