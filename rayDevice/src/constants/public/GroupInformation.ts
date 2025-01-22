import Strings from '@/i18n'
import {
  getGroupDeviceList,
  getGroupDeviceNum,
  getGroupDpsInfos,
  getGroupInfo,
  getLaunchOptionsSync,
  offGroupInfoChange,
  offGroupRemovedEvent,
  onGroupInfoChange,
  onGroupRemovedEvent,
} from 'ray'
const {
  query: { deviceId, groupId },
} = getLaunchOptionsSync()

const _onGroupInfoChange = (data) => {
  console.log('GroupInformation.onGroupInfoChange', data)
}

const _onGroupRemovedEvent = (data) => {
  console.log('GroupInformation.onGroupRemovedEvent', data)
}

export default [
  {
    title: 'getGroupDpsInfos',
    functionName: 'getGroupDpsInfos',
    input: true,

    placeholder: Strings.getLang('please_input_group_id'),

    func: (inputValue) => {
      return new Promise((resolve, reject) => {
        if (!inputValue) {
          reject('groupId is required')
          return
        }
        const gid = inputValue.groupId || getApp().groupId || groupId

        getGroupDpsInfos(gid).then(resolve).catch(reject)
      })
    },
  },

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
]
