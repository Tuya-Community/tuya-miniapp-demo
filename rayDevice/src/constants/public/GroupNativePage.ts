import Strings from '@/i18n'
import { trans } from '@/utils'
import { getLaunchOptionsSync, onOpenGroupCreate, openGroupCreate, openGroupDetailPage, openGroupEdit, openGroupTimerPage } from 'ray'
const {
  query: { deviceId, groupId },
} = getLaunchOptionsSync()

export default [
  {
    title: 'openGroupCreate',
    functionName: 'openGroupCreate',
    input: true,
    placeholder: Strings.getLang('please_input_dev_id'),
    func: (inputValue) => {
      return new Promise((resolve, reject) => {
        openGroupCreate({
          deviceId: inputValue || groupId,
        })
          .then(resolve)
          .catch(reject)
      })
    },
  },
  {
    title: 'onOpenGroupCreate',
    functionName: 'onOpenGroupCreate',
    func: (inputValue) => {
      return new Promise((resolve, reject) => {
        onOpenGroupCreate(() =>{
          console.log('创建群组保存完成')
        })
        resolve(true)
      })
    },
  },
  {
    title: 'openGroupDetailPage',
    functionName: 'openGroupDetailPage',
    input: true,
    placeholder: Strings.getLang('please_input_group_id'),
    func: (input) => {
      return new Promise((resolve, reject) => {
        if (!input) {
          ty.showToast({ title: Strings.getLang('please_input_group_id'), icon: 'none' })
          reject(Strings.getLang('please_input_group_id'))
          return
        }
        openGroupDetailPage({
          groupId: input,
          success: resolve,
          fail: reject,
        })
      })
    },
  },
  {
    title: 'openGroupEdit',
    functionName: 'openGroupEdit',
    input: true,
    placeholder: Strings.getLang('please_input_group_id'),
    func: (inputValue?) => {
      return new Promise((resolve, reject) => {
        openGroupEdit({
          groupId: inputValue || getApp().deviceId || groupId,
          success: resolve,
          fail: reject,
        })
      })
    },
  },
  {
    title: 'openGroupTimerPage',
    functionName: 'openGroupTimerPage',
    input: true,
    keys: ['groupId', 'category', 'repeat', 'data'],
    placeholder: [
      Strings.getLang('please_input_group_id'),
      Strings.getLang('please_input_category'),
      Strings.getLang('please_input_repeat'),
      Strings.getLang('please_input_timer_data'),
    ],
    func: (inputValue) => {
      return new Promise((resolve, reject) => {
        if (!inputValue.data) {
          ty.showToast({ title: Strings.getLang('please_input_timer_data'), icon: 'none' })
          reject(Strings.getLang('please_input_timer_data'))
          return
        }
        if (!inputValue.groupId && !groupId) {
          ty.showToast({ title: Strings.getLang('please_input_group_id'), icon: 'none' })
          reject(Strings.getLang('please_input_group_id'))
          return
        }
        let repeat = +inputValue.repeat
        openGroupTimerPage({
          groupId: groupId || inputValue.groupId,
          category: inputValue.category || 'schedule',
          repeat: isNaN(repeat) ? 0 : repeat,
          data: trans(inputValue.data),
          success: resolve,
          fail: reject,
        })
      })
    },
  },
]
