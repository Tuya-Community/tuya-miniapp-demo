import Strings from '@/i18n'
import { trans } from '@/utils'
import {
  getDpDataByMesh,
  getDpsInfos,
  getLaunchOptionsSync,
  offDpDataChange,
  onDpDataChange,
  publishCommands,
  publishDpsWithPipeType,
  publishSigMeshMultiDps,
  queryDps,
  registerDeviceListListener,
  updateDpName,
} from 'ray'
const {
  query: { deviceId, groupId },
} = getLaunchOptionsSync()

const _onDpDataChange = (event) => {
  console.log('DpOperation.onDpDataChange', event)
}

export default [
  {
    title: 'updateDpName',
    functionName: 'updateDpName',
    input: true,
    keys: ['devId', 'dpId', 'name'],
    placeholder: [
      Strings.getLang('please_input_dev_id'),
      Strings.getLang('please_input_dp_id'),
      Strings.getLang('please_input_sub_function_ids'),
    ],
    func: (inputValue) => {
      return new Promise((resolve, reject) => {
        if (!inputValue) {
          reject('ids is required')
          return
        }
        if (!inputValue.devId) {
          ty.showToast({ title: Strings.getLang('please_input_group_or_dev_id'), icon: 'none' })
          reject(Strings.getLang('please_input_group_or_dev_id'))
          return
        }
        const param = {
          devId: inputValue.devId || getApp().deviceId || deviceId,
          dpId: inputValue.dpId,
          name: inputValue.name,
        }

        updateDpName({
          ...param,
        })
          .then(resolve)
          .catch(reject)
      })
    },
  },
  {
    title: 'getDpsInfos',
    functionName: 'getDpsInfos',
    input: true,

    keys: ['devId', 'gwId'],
    placeholder: [
      Strings.getLang('please_input_dev_id'),
      Strings.getLang('please_input_gateway_id'),
    ],

    func: (inputValue) => {
      return new Promise((resolve, reject) => {
        if (!inputValue) {
          reject('ids is required')
          return
        }
        const param = {
          devId: inputValue.devId || getApp().deviceId || deviceId,
          gwId: inputValue.gwId || getApp().deviceId || deviceId,
        }

        getDpsInfos({
          ...param,
        })
          .then(resolve)
          .catch(reject)
      })
    },
  },
  {
    title: 'publishDps',
    functionName: 'publishDps',
    input: true,
    keys: ['deviceId', 'dps', 'mode', 'pipelines'],
    placeholder: [
      Strings.getLang('please_input_dev_id'),
      Strings.getLang('please_input_publish_dps'),
      Strings.getLang('please_input_publish_mode'),
      Strings.getLang('please_input_publish_pipelines'),
    ],
    func: (inputValue) => {
      return new Promise((resolve, reject) => {
        if (typeof inputValue.dps === 'undefined') {
          ty.showToast({ title: Strings.getLang('please_input_publish_dps'), icon: 'none' })
          reject(Strings.getLang('please_input_publish_dps'))
          return
        }
        const dps = trans(inputValue.dps)
        console.log('-----dps', dps)
        ty.device.publishDps({
          deviceId: inputValue.deviceId || getApp().deviceId || deviceId,
          dps: dps,
          mode: inputValue.mode || 2,
          pipelines: inputValue.pipelines?.split(',').map(Number) || [],
          options: {},
          success: resolve,
          fail: reject,
        })
      })
    },
  },
  {
    title: 'publishDpsWithPipeType',
    functionName: 'publishDpsWithPipeType',
    input: true,
    keys: ['deviceId', 'dps', 'mode', 'pipelines'],
    placeholder: [
      Strings.getLang('please_input_dev_id'),
      Strings.getLang('please_input_publish_dps'),
      Strings.getLang('please_input_publish_mode'),
      Strings.getLang('please_input_publish_pipelines'),
    ],
    func: (inputValue) => {
      return new Promise((resolve, reject) => {
        if (typeof inputValue.dps === 'undefined') {
          ty.showToast({ title: Strings.getLang('please_input_publish_dps'), icon: 'none' })
          reject(Strings.getLang('please_input_publish_dps'))
          return
        }
        const dps = trans(inputValue.dps)
        console.log('dps', dps)
        publishDpsWithPipeType({
          deviceId: inputValue.deviceId || getApp().deviceId || deviceId,
          dps: dps,
          mode: inputValue.mode || 2,
          pipelines: inputValue.pipelines?.split(',').map(Number) || [],
          options: {},
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
    title: 'publishCommands',
    functionName: 'publishCommands',
    input: true,
    keys: ['deviceId', 'dps', 'mode', 'pipelines'],
    placeholder: [
      Strings.getLang('please_input_dev_id'),
      Strings.getLang('please_input_publish_dps_c'),
      Strings.getLang('please_input_publish_mode'),
      Strings.getLang('please_input_publish_pipelines'),
    ],
    func: (inputValue) => {
      return new Promise((resolve, reject) => {
        if (typeof inputValue.dps === 'undefined') {
          ty.showToast({ title: Strings.getLang('please_input_publish_dps_c'), icon: 'none' })
          reject(Strings.getLang('please_input_publish_dps_c'))
          return
        }
        const dps = trans(inputValue.dps)
        console.log('dps', dps)
        publishCommands({
          deviceId: inputValue.deviceId || getApp().deviceId || deviceId,
          dps: dps,
          mode: inputValue.mode || 2,
          pipelines: inputValue.pipelines?.split(',').map(Number) || [],
          options: {},
          success: resolve,
          fail: reject,
        })
      })
    },
  },
  {
    title: 'queryDps',
    functionName: 'queryDps',
    input: true,
    keys: ['deviceId', 'dpids'],

    placeholder: [Strings.getLang('please_input_dev_id'), Strings.getLang('please_input_dp_ids')],
    func: (inputValue) => {
      return new Promise((resolve, reject) => {
        if (!inputValue.dpids) {
          ty.showToast({ title: Strings.getLang('please_input_dp_ids'), icon: 'none' })
          reject(Strings.getLang('please_input_dp_ids'))
          return
        }
        const _onDpDataChange = (event) => {
          console.log(event)
          offDpDataChange(_onDpDataChange)
        }
        registerDeviceListListener({
          deviceIdList: [inputValue.deviceId || getApp().deviceId || deviceId],
        })
        onDpDataChange(_onDpDataChange)
        queryDps({
          deviceId: inputValue.deviceId || getApp().deviceId || deviceId,
          dpIds: inputValue.dpids.split(','),
          success: (e) => {
            resolve(e)
          },
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
          deviceId: inputValue.deviceId || getApp().deviceId || deviceId,
          success: resolve,
          fail: reject,
        })
      })
    },
  },

  {
    title: 'onDpDataChange',
    functionName: 'onDpDataChange',
    func: () => {
      return new Promise((resolve, reject) => {
        onDpDataChange(_onDpDataChange)
        resolve(true)
      })
    },
  },
  {
    title: 'offDpDataChange',
    functionName: 'offDpDataChange',
    func: () => {
      return new Promise((resolve, reject) => {
        offDpDataChange(_onDpDataChange)
        resolve(true)
      })
    },
  },
]
