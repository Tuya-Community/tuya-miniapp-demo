import Strings from '@/i18n'
import { trans } from '@/utils'
import {
  addTimer,
  getLaunchOptionsSync,
  offTimerUpdate,
  onTimerUpdate,
  openTimerPage,
  removeTimer,
  syncTimerTask,
  updateTimer,
  updateTimerStatus
} from 'ray'
const {
  query: { deviceId, groupId },
} = getLaunchOptionsSync()

const _onTimerUpdate = (event) => {
  console.log('DeviceTimer.onTimerUpdate', event)
}

export default [
  {
    title: 'addTimer',
    functionName: 'addTimer',
    input: true,
    keys: ['deviceId', 'groupId', 'category', 'data'],
    placeholder: [
      Strings.getLang('please_input_dev_id'),
      Strings.getLang('please_input_group_id'),
      Strings.getLang('please_input_category'),
      // Strings.getLang('please_input_repeat'),
      Strings.getLang('please_input_timer_data'),
    ],
    func: (inputValue) => {
      return new Promise((resolve, reject) => {
        if (!inputValue.groupId && !inputValue.deviceId) {
          ty.showToast({ title: Strings.getLang('please_input_group_or_dev_id'), icon: 'none' })
          reject(Strings.getLang('please_input_group_or_dev_id'))
          return
        }

        if (!inputValue.data) {
          ty.showToast({ title: Strings.getLang('please_input_timer_data'), icon: 'none' })
          reject(Strings.getLang('please_input_timer_data'))
          return
        }

        const param = {
          deviceId: inputValue.deviceId || getApp().deviceId || deviceId,
          groupId: inputValue.groupId,
          category: inputValue.category || 'schedule',
          timer: trans(inputValue.data),
        }

        if (!param.groupId) delete param.groupId
        if (!param.deviceId) delete param.deviceId
        if (param.groupId) delete param.deviceId
        console.log('addTimer', param)
        addTimer({
          ...param,
          success: resolve,
          fail: reject,
        })
      })
    },
  },
  {
    title: 'updateTimer',
    functionName: 'updateTimer',
    input: true,
    keys: ['deviceId', 'groupId', 'data'],
    placeholder: [
      Strings.getLang('please_input_dev_id'),
      Strings.getLang('please_input_group_id'),
      Strings.getLang('please_input_timer_data'),
    ],
    func: (inputValue) => {
      return new Promise((resolve, reject) => {
        if (!inputValue.groupId && !inputValue.deviceId) {
          ty.showToast({ title: Strings.getLang('please_input_group_or_dev_id'), icon: 'none' })
          reject(Strings.getLang('please_input_group_or_dev_id'))
          return
        }

        if (!inputValue.data) {
          ty.showToast({ title: Strings.getLang('please_input_timer_data'), icon: 'none' })
          reject(Strings.getLang('please_input_timer_data'))
          return
        }
        const param = {
          deviceId: inputValue.deviceId || getApp().deviceId || deviceId,
          groupId: inputValue.groupId,
          timer: trans(inputValue.data),
        }

        if (!param.groupId) delete param.groupId
        if (!param.deviceId) delete param.deviceId
        if (param.groupId) delete param.deviceId
        console.log('updateTimer', param)
        updateTimer({
          ...param,
          success: resolve,
          fail: reject,
        })
      })
    },
  },
  {
    title: 'removeTimer',
    functionName: 'removeTimer',
    input: true,
    keys: ['deviceId', 'groupId', 'timerId'],
    placeholder: [
      Strings.getLang('please_input_dev_id'),
      Strings.getLang('please_input_group_id'),
      Strings.getLang('please_input_a_timer_id'),
    ],
    func: (inputValue) => {
      return new Promise((resolve, reject) => {
        if (!inputValue.groupId && !inputValue.deviceId) {
          ty.showToast({ title: Strings.getLang('please_input_group_or_dev_id'), icon: 'none' })
          reject(Strings.getLang('please_input_group_or_dev_id'))
          return
        }

        if (!inputValue.timerId) {
          ty.showToast({ title: Strings.getLang('please_input_a_timer_id'), icon: 'none' })
          reject(Strings.getLang('please_input_a_timer_id'))
          return
        }
        const param = {
          deviceId: inputValue.deviceId || getApp().deviceId || deviceId,
          groupId: inputValue.groupId,
          timerId: inputValue.timerId,
        }

        if (!param.groupId) delete param.groupId
        if (!param.deviceId) delete param.deviceId
        if (param.groupId) delete param.deviceId
        console.log('removeTimer', param)
        removeTimer({
          ...param,
          success: resolve,
          fail: reject,
        })
      })
    },
  },
  {
    title: 'syncTimerTask',
    functionName: 'syncTimerTask',
    input: true,
    keys: ['deviceId', 'groupId', 'category'],
    placeholder: [
      Strings.getLang('please_input_dev_id'),
      Strings.getLang('please_input_group_id'),
      Strings.getLang('please_input_category'),
    ],
    func: (inputValue) => {
      return new Promise((resolve, reject) => {
        if (!inputValue.groupId && !inputValue.deviceId) {
          ty.showToast({ title: Strings.getLang('please_input_group_or_dev_id'), icon: 'none' })
          reject(Strings.getLang('please_input_group_or_dev_id'))
          return
        }

        const param = {
          deviceId: inputValue.deviceId || getApp().deviceId || deviceId,
          groupId: inputValue.groupId,
          category: inputValue.category,
        }
        if (!param.groupId) delete param.groupId
        if (!param.deviceId) delete param.deviceId
        if (param.groupId) delete param.deviceId
        console.log('syncTimerTask', param)
        syncTimerTask({
          ...param,
          success: resolve,
          fail: reject,
        })
      })
    },
  },

  {
    title: 'updateTimerStatus',
    functionName: 'updateTimerStatus',
    input: true,
    keys: ['deviceId', 'groupId', 'timerId', 'status'],
    placeholder: [
      Strings.getLang('please_input_dev_id'),
      Strings.getLang('please_input_group_id'),
      Strings.getLang('please_input_timer_id'),
      Strings.getLang('please_input_status'),
    ],
    dataType: { status: 'boolean' },
    func: (inputValue) => {
      return new Promise((resolve, reject) => {
        if (!inputValue.groupId && !inputValue.deviceId) {
          ty.showToast({ title: Strings.getLang('please_input_group_or_dev_id'), icon: 'none' })
          reject(Strings.getLang('please_input_group_or_dev_id'))
          return
        }
        const param = {
          deviceId: inputValue.deviceId || getApp().deviceId || deviceId,
          groupId: inputValue.groupId,
          timerId: inputValue.timerId,
          status: inputValue.status,
        }

        if (!param.groupId) delete param.groupId
        if (!param.deviceId) delete param.deviceId
        if (param.groupId) delete param.deviceId
        console.log('updateTimerStatus', param)
        updateTimerStatus({
          ...param,
          success: resolve,
          fail: reject,
        })
      })
    },
  },

  {
    title: 'onTimerUpdate',
    functionName: 'onTimerUpdate',
    func: () => {
      return new Promise((resolve, reject) => {
        onTimerUpdate(_onTimerUpdate)
        resolve(true)
      })
    },
  },
  {
    title: 'offTimerUpdate',
    functionName: 'offTimerUpdate',
    func: () => {
      return new Promise((resolve, reject) => {
        offTimerUpdate(_onTimerUpdate)
        resolve(true)
      })
    },
  },

  {
    title: 'openTimerPage',
    functionName: 'openTimerPage',
    input: true,
    keys: ['deviceId', 'category', 'repeat', 'data'],
    placeholder: [
      Strings.getLang('please_input_dev_id'),
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
        let repeat = +inputValue.repeat
        openTimerPage({
          deviceId: inputValue.deviceId || getApp().deviceId || deviceId,
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
