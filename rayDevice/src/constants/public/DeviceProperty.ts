import Strings from '@/i18n'
import {
  getDeviceProperty,
  getDevProperty,
  getLaunchOptionsSync,
  saveDevProperty,
  setDeviceProperty
} from 'ray'
const {
  query: { deviceId, groupId },
} = getLaunchOptionsSync()

export default [
  {
    title: 'saveDevProperty',
    functionName: 'saveDevProperty',
    input: true,
    keys: ['deviceId', 'bizType', 'propertyList', 'type'],
    placeholder: [
      Strings.getLang('please_input_dev_id'),
      Strings.getLang('please_input_biz_type'),
      Strings.getLang('please_input_property_list'),
      Strings.getLang('please_input_type'),
    ],
    func: (inputValue) => {
      return new Promise((resolve, reject) => {
        if (!inputValue || !inputValue.code) {
          ty.showToast({ title: Strings.getLang('please_input_code'), icon: 'none' })
          reject(Strings.getLang('please_input_code'))
          return
        }
        if (typeof inputValue.value === 'undefined') {
          ty.showToast({ title: Strings.getLang('please_input_value'), icon: 'none' })
          reject(Strings.getLang('please_input_value'))
          return
        }
        saveDevProperty({
          devId: inputValue.deviceId || getApp().deviceId || deviceId,
          bizType: +inputValue.bizType,
          propertyList: inputValue.propertyList,
          type: inputValue.type,
        })
          .then(resolve)
          .catch(reject)
      })
    },
  },
  {
    title: 'getDevProperty',
    functionName: 'getDevProperty',
    input: true,
    keys: ['deviceId', 'bizType', 'code'],
    placeholder: [
      Strings.getLang('please_input_dev_id'),
      Strings.getLang('please_input_biz_type'),
      Strings.getLang('please_input_code'),
    ],
    func: (inputValue) => {
      return new Promise((resolve, reject) => {
        getDevProperty({
          devId: inputValue.deviceId || getApp().deviceId || deviceId,
          bizType: +inputValue.bizType,
          code: inputValue.code,
        })
          .then(resolve)
          .catch(reject)
      })
    },
  },
  {
    title: 'getDeviceProperty',
    functionName: 'getDeviceProperty',
    input: true,
    placeholder: Strings.getLang('please_input_dev_id'),
    key: 'deviceId',
    func: (inputValue) => {
      return new Promise((resolve, reject) => {
        getDeviceProperty({
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
    title: 'setDeviceProperty',
    functionName: 'setDeviceProperty',
    input: true,
    keys: ['deviceId', 'code', 'value'],
    placeholder: [
      Strings.getLang('please_input_dev_id'),
      Strings.getLang('please_input_code'),
      Strings.getLang('please_input_value'),
    ],
    func: (inputValue) => {
      return new Promise((resolve, reject) => {
        if (!inputValue || !inputValue.code) {
          ty.showToast({ title: Strings.getLang('please_input_code'), icon: 'none' })
          reject(Strings.getLang('please_input_code'))
          return
        }
        if (typeof inputValue.value === 'undefined') {
          ty.showToast({ title: Strings.getLang('please_input_value'), icon: 'none' })
          reject(Strings.getLang('please_input_value'))
          return
        }
        setDeviceProperty({
          deviceId: inputValue.deviceId || getApp().deviceId || deviceId,
          code: inputValue.code,
          value: inputValue.value,
          success: (e) => {
            resolve(e)
          },
          fail: reject,
        })
      })
    },
  },
]
