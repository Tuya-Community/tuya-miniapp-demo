import Strings from '@/i18n'
import { getDpDataByMesh, getLaunchOptionsSync, getMeshDeviceId, getApp } from '@ray-js/ray'

const {
  query: { deviceId, groupId },
} = getLaunchOptionsSync()

export default [
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
    title: 'getDpDataByMesh',
    functionName: 'getDpDataByMesh',
    input: true,
    keys: ['deviceId', 'dpIds'],
    placeholder: ['deviceId', Strings.getLang('please_input_dp_ids')],
    func: (inputValue) => {
      return new Promise((resolve, reject) => {
        if (typeof inputValue?.deviceId === 'undefined') {
          reject('deviceId is required')
          return
        }
        if (typeof inputValue?.dpIds === 'undefined') {
          reject('dpIds is required')
          return
        }
        getDpDataByMesh({
          dpIds: inputValue.dpIds?.split(',') || [],
          deviceId: inputValue.deviceId  || getApp().deviceId || deviceId,
          success: resolve,
          fail: reject,
        })
      })
    },
  },
]
