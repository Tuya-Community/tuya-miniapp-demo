import {
  addTimer,
  getLaunchOptionsSync,
  openTimerPage,
  removeTimer,
  syncTimerTask,
  updateTimer,
  updateTimerStatus,
  onTimerUpdate,
  offTimerUpdate,
} from '@ray-js/ray'
import Strings from '@/i18n'
const {
  query: { deviceId, groupId },
} = getLaunchOptionsSync()

export const timerApiList = [
  {
    title: Strings.getLang('syncTimerTask'),
    functionName: 'syncTimerTask',
    input: true,
    placeholder: Strings.getLang('please_input_category'),
    func: (inputValue) => {
      return new Promise((resolve, reject) => {
        syncTimerTask({
          groupId,
          deviceId,
          category: inputValue || "",
          success: resolve,
          fail: reject,
        })
      })
    },
  },
  {
    title: Strings.getLang('addTimer'),
    functionName: 'addTimer',
    func: () => {
      return new Promise((resolve, reject) => {
        addTimer({
          deviceId,
          groupId,
          category: 'schedule',
          timer: {
            time: '10:03',
            loops: '1111111',
            dps: {
              20: false,
            },
            aliasName: '',
            isAppPush: false,
          },
          success: resolve,
          fail: reject,
        })
      })
    },
  },
  {
    title: Strings.getLang('updateTimer'),
    functionName: 'updateTimer',
    input: true,
    placeholder: Strings.getLang('please_input_a_timer_id'),
    func: (inputValue) => {
      return new Promise((resolve, reject) => {
        if(!inputValue) return reject('timerId is required')
        updateTimer({
          deviceId,
          groupId,
          timer: {
            timerId: inputValue,
            time: '20:03',
            loops: '0110101',
            dps: {
              20: true,
            },
            aliasName: '',
            isAppPush: false,
          },
          success: resolve,
          fail: reject,
        })
      })
    },
  },
  {
    title: Strings.getLang('updateTimerStatus'),
    functionName: 'updateTimerStatus',
    input: true,
    keys: ['timerId', 'status'],
    placeholder: [Strings.getLang('please_input_a_timer_id'), Strings.getLang('please_input_status')],
    func: (inputValue) => {
      return new Promise((resolve, reject) => {
        if(!inputValue || !inputValue.timerId) return reject('timerId is required')
        updateTimerStatus({
          deviceId,
          groupId,
          timerId: inputValue.timerId,
          status: !(inputValue.status === 'false' || inputValue.status == 0),
          success: resolve,
          fail: reject,
        })
      })
    },
  },
  {
    title: Strings.getLang('removeTimer'),
    functionName: 'removeTimer',
    input: true,
    placeholder: Strings.getLang('please_input_a_timer_id'),
    func: (inputValue) => {
      return new Promise((resolve, reject) => {
        if(!inputValue) return reject('timerId is required')
        removeTimer({
          deviceId,
          groupId,
          timerId: inputValue,
          success: resolve,
          fail: reject,
        })
      })
    },
  },

  {
    title: Strings.getLang('openTimerPage'),
    functionName: 'openTimerPage',
    func: () => {
      return new Promise((resolve, reject) => {
        openTimerPage({
          deviceId,
          category: 'schedule',
          repeat: 0,
          data: [
            {
              dpName: Strings.getLang(`dp_switch_led`),
              dpId: 20,
              selected: 1,
              rangeKeys: [true, false],
              rangeValues: ['开启', '关闭'],
            },
          ],
          success: resolve,
          fail: reject,
        })
      })
    },
  },
]
