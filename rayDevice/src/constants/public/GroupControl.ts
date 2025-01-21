import Strings from '@/i18n'
import { trans } from '@/utils'
import {
  getLaunchOptionsSync,
  offGroupDpCodeChange,
  offGroupDpDataChangeEvent,
  onGroupDpCodeChange,
  onGroupDpDataChangeEvent,
  publishGroupDpCodes,
  publishGroupDps,
  registerGroupChange,
  unRegisterGroupChange,
  updateGroupDpName
} from 'ray'
const {
  query: { deviceId, groupId },
} = getLaunchOptionsSync()

const _onGroupDpDataChangeEvent = (data) => {
  console.log('GroupControl.onGroupDpDataChangeEvent', data)
}

const _onGroupDpCodeChange = (data) => {
  console.log('GroupControl.onGroupDpCodeChange', data)
}

export default [
  {
    title: 'updateGroupDpName',
    functionName: 'updateGroupDpName',
    input: true,
    keys: ['groupId', 'dpId', 'name'],
    placeholder: [
      Strings.getLang('please_input_group_id'),
      Strings.getLang('please_input_dp_id'),
      Strings.getLang('please_input_name'),
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
          groupId: inputValue.groupId || getApp().groupId || groupId,
          dpId: inputValue.dpId,
          name: inputValue.name,
        }

        updateGroupDpName({
          ...param,
        })
          .then(resolve)
          .catch(reject)
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
]
