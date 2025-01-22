import Strings from '@/i18n'
import { trans } from '@/utils'
import {
  addDeviceToDesk,
  addTimer,
  checkOTAUpdateInfo,
  getDeviceOfflineReminderState,
  getDeviceOfflineReminderWarningText,
  getLaunchOptionsSync,
  getShareDeviceInfo,
  getSupportedThirdPartyServices,
  isDeviceSupportOfflineReminder,
  offTimerUpdate,
  onTimerUpdate,
  openDeviceDetailPage,
  openDeviceEdit,
  openDeviceInfo,
  openDeviceQuestionsAndFeedback,
  openDeviceWifiNetworkMonitorPage,
  openGroupDetailPage,
  openGroupEdit,
  openGroupTimerPage,
  openShareDevice,
  openTimerPage,
  removeShareDevice,
  removeTimer,
  syncTimerTask,
  toggleDeviceOfflineReminder,
  updateTimer,
  updateTimerStatus,
  getApp,
  updateDpName,
  getDpsInfos,
} from '@ray-js/ray'
const {
  query: { deviceId, groupId },
} = getLaunchOptionsSync()

const _onTimerUpdate = (event) => {
  console.log('TUNIDeviceDetailManager.onTimerUpdate', event)
}

const _onSubFunctionDataChange = (event) => {
  console.log('TUNIDeviceDetailManager.onSubFunctionDataChange', event)
}

const _onDispatchEvent = (event) => {
  console.log('TUNIDeviceDetailManager.onDispatchEvent', event)
}

export default [
  {
    title: 'checkOTAUpdateInfo',
    functionName: 'checkOTAUpdateInfo',
    input: true,
    placeholder: Strings.getLang('please_input_dev_id'),
    key: 'deviceId',
    func: (inputValue) => {
      return new Promise((resolve, reject) => {
        checkOTAUpdateInfo({
          deviceId: inputValue || getApp().deviceId || deviceId,
          success: resolve,
          fail: reject,
        })
      })
    },
  },
  {
    title: 'getOTAUpdateInfo',
    functionName: 'getOTAUpdateInfo',
    input: true,
    placeholder: Strings.getLang('please_input_dev_id'),
    key: 'deviceId',
    func: (inputValue) => {
      return new Promise((resolve, reject) => {
        ty.device.getOTAUpdateInfo({
          deviceId: inputValue || getApp().deviceId || deviceId,
          success: resolve,
          fail: reject,
        })
      })
    },
  },
  {
    title: 'openDeviceDetailPage',
    functionName: 'openDeviceDetailPage',
    input: true,
    placeholder: Strings.getLang('please_input_dev_id'),
    key: 'deviceId',
    func: (inputValue) => {
      return new Promise((resolve, reject) => {
        openDeviceDetailPage({
          deviceId: inputValue || getApp().deviceId || deviceId,
          success: resolve,
          fail: reject,
        })
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
  {
    title: 'openDeviceWifiNetworkMonitorPage',
    functionName: 'openDeviceWifiNetworkMonitorPage',
    input: true,
    placeholder: Strings.getLang('please_input_dev_id'),
    key: 'deviceId',
    func: (inputValue) => {
      return new Promise((resolve, reject) => {
        openDeviceWifiNetworkMonitorPage({
          deviceId: inputValue || getApp().deviceId || deviceId,
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
        if(!param.groupId) delete param.groupId
        if(!param.deviceId) delete param.deviceId
        if(param.groupId) delete param.deviceId
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

        if(!param.groupId) delete param.groupId
        if(!param.deviceId) delete param.deviceId
        if(param.groupId) delete param.deviceId
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

        if(!param.groupId) delete param.groupId
        if(!param.deviceId) delete param.deviceId
        if(param.groupId) delete param.deviceId
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

        if(!param.groupId) delete param.groupId
        if(!param.deviceId) delete param.deviceId
        if(param.groupId) delete param.deviceId
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

        if(!param.groupId) delete param.groupId
        if(!param.deviceId) delete param.deviceId
        if(param.groupId) delete param.deviceId
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
    title: 'getShareDeviceInfo',
    functionName: 'getShareDeviceInfo',
    input: true,
    placeholder: Strings.getLang('please_input_shared_dev_id'),
    // key: 'deviceId',
    func: (inputValue?) => {
      return new Promise((resolve, reject) => {
        getShareDeviceInfo({
          deviceId: inputValue || getApp().deviceId || deviceId,
          success: resolve,
          fail: reject,
        })
      })
    },
  },
  {
    title: 'openDeviceEdit',
    functionName: 'openDeviceEdit',
    input: true,
    placeholder: Strings.getLang('please_input_dev_id'),
    key: 'deviceId',
    func: (inputValue?) => {
      return new Promise((resolve, reject) => {
        openDeviceEdit({
          deviceId: inputValue || getApp().deviceId || deviceId,
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
    title: 'openDeviceInfo',
    functionName: 'openDeviceInfo',
    input: true,
    placeholder: Strings.getLang('please_input_dev_id'),
    key: 'deviceId',
    func: (inputValue?) => {
      return new Promise((resolve, reject) => {
        openDeviceInfo({
          deviceId: inputValue || getApp().deviceId || deviceId,
          success: resolve,
          fail: reject,
        })
      })
    },
  },

  {
    title: 'isDeviceSupportOfflineReminder',
    functionName: 'isDeviceSupportOfflineReminder',
    input: true,
    placeholder: Strings.getLang('please_input_dev_id'),
    key: 'deviceId',
    func: (inputValue?) => {
      return new Promise((resolve, reject) => {
        isDeviceSupportOfflineReminder({
          deviceId: inputValue || getApp().deviceId || deviceId,
          success: resolve,
          fail: reject,
        })
      })
    },
  },

  {
    title: 'getDeviceOfflineReminderState',
    functionName: 'getDeviceOfflineReminderState',
    input: true,
    placeholder: Strings.getLang('please_input_dev_id'),
    key: 'deviceId',
    func: (inputValue) => {
      return new Promise((resolve, reject) => {
        getDeviceOfflineReminderState({
          deviceId: inputValue || getApp().deviceId || deviceId,
          success: resolve,
          fail: reject,
        })
      })
    },
  },
  {
    title: 'toggleDeviceOfflineReminder',
    functionName: 'toggleDeviceOfflineReminder',
    input: true,
    keys: ['deviceId', 'state'],
    placeholder: [Strings.getLang('please_input_dev_id'), Strings.getLang('please_input_state')],
    func: (inputValue?) => {
      return new Promise((resolve, reject) => {
        toggleDeviceOfflineReminder({
          deviceId: inputValue.deviceId || getApp().deviceId || deviceId,
          state: +inputValue.state,
          success: resolve,
          fail: reject,
        })
      })
    },
  },

  {
    title: 'getDeviceOfflineReminderWarningText',
    functionName: 'getDeviceOfflineReminderWarningText',
    func: (inputValue) => {
      return new Promise((resolve, reject) => {
        getDeviceOfflineReminderWarningText({
          success: resolve,
          fail: reject,
        })
      })
    },
  },

  {
    title: 'openDeviceQuestionsAndFeedback',
    functionName: 'openDeviceQuestionsAndFeedback',
    input: true,
    placeholder: Strings.getLang('please_input_dev_id'),
    key: 'deviceId',
    func: (inputValue) => {
      return new Promise((resolve, reject) => {
        openDeviceQuestionsAndFeedback({
          deviceId: inputValue || getApp().deviceId || deviceId,
          success: resolve,
          fail: reject,
        })
      })
    },
  },

  {
    title: 'openShareDevice',
    functionName: 'openShareDevice',
    input: true,
    placeholder: Strings.getLang('please_input_shared_dev_id'),
    key: 'deviceId',
    func: (inputValue) => {
      return new Promise((resolve, reject) => {
        openShareDevice({
          deviceId: inputValue || getApp().deviceId || deviceId,
          success: resolve,
          fail: reject,
        })
      })
    },
  },
  {
    title: 'addDeviceToDesk',
    functionName: 'addDeviceToDesk',
    input: true,
    placeholder: Strings.getLang('please_input_dev_id'),
    key: 'deviceId',
    func: (inputValue) => {
      return new Promise((resolve, reject) => {
        addDeviceToDesk({
          deviceId: inputValue || getApp().deviceId || deviceId,
          success: resolve,
          fail: reject,
        })
      })
    },
  },
  {
    title: 'removeShareDevice',
    functionName: 'removeShareDevice',
    input: true,
    placeholder: Strings.getLang('please_input_shared_dev_id'),
    key: 'deviceId',
    func: (inputValue) => {
      return new Promise((resolve, reject) => {
        removeShareDevice({
          deviceId: inputValue || getApp().deviceId || deviceId,
          success: resolve,
          fail: reject,
        })
      })
    },
  },
  {
    title: 'getSupportedThirdPartyServices',
    functionName: 'getSupportedThirdPartyServices',
    input: true,
    placeholder: Strings.getLang('please_input_dev_id'),
    key: 'deviceId',
    func: (inputValue) => {
      return new Promise((resolve, reject) => {
        getSupportedThirdPartyServices({
          deviceId: inputValue || getApp().deviceId || deviceId,
          success: resolve,
          fail: reject,
        })
      })
    },
  },
  {
    title: 'getDeviceDetailConfiguration',
    functionName: 'getDeviceDetailConfiguration',
    func: (inputValue) => {
      return new Promise((resolve, reject) => {
        ty.device.getDeviceDetailConfiguration({
          success: resolve,
          fail: reject,
        })
      })
    },
  },
  {
    title: 'dispatchSubFunctionTouchEvent',
    functionName: 'dispatchSubFunctionTouchEvent',
    keys: ['id', 'name', 'type', 'optionType', 'from', 'order', 'isHide', 'data'],
    placeholder: ['id', 'name', 'type', 'optionType', 'from', 'order', 'isHide', 'data'],
    func: (inputValue) => {
      return new Promise((resolve, reject) => {
        if (!inputValue.id) {
          reject('id is required')
          return
        }

        ty.device.dispatchSubFunctionTouchEvent({
          id: inputValue.id,
          name: inputValue.name,
          type: inputValue.type,
          optionType: inputValue.optionType,
          from: inputValue.from,
          order: inputValue.order,
          isHide: inputValue.isHide,
          data: trans(inputValue.data),
          success: resolve,
          fail: reject,
        })
      })
    },
  },
  {
    title: 'dispatchDataResult',
    functionName: 'dispatchDataResult',
    keys: ['id', 'name', 'type', 'optionType', 'from', 'order', 'isHide', 'data'],
    placeholder: ['id', 'name', 'type', 'optionType', 'from', 'order', 'isHide', 'data'],
    func: (inputValue) => {
      return new Promise((resolve, reject) => {
        if (!inputValue.id) {
          reject('id is required')
          return
        }

        ty.device.dispatchDataResult({
          id: inputValue.id,
          name: inputValue.name,
          type: inputValue.type,
          optionType: inputValue.optionType,
          from: inputValue.from,
          order: inputValue.order,
          isHide: inputValue.isHide,
          data: trans(inputValue.data),
          success: resolve,
          fail: reject,
        })
      })
    },
  },
  {
    title: 'getSubFunctionShowState',
    functionName: 'getSubFunctionShowState',
    input: true,
    keys: ['deviceId', 'groupId', 'ids'],
    placeholder: [
      Strings.getLang('please_input_dev_id'),
      Strings.getLang('please_input_group_id'),
      Strings.getLang('please_input_sub_function_ids'),
    ],
    func: (inputValue) => {
      return new Promise((resolve, reject) => {
        if (!inputValue) {
          reject('ids is required')
          return
        }
        if (!inputValue.deviceId && !inputValue.groupId) {
          ty.showToast({ title: Strings.getLang('please_input_group_or_dev_id'), icon: 'none' })
          reject(Strings.getLang('please_input_group_or_dev_id'))
          return
        }
        const param = {
          deviceId: inputValue.deviceId || getApp().deviceId || deviceId,
          groupId: inputValue.groupId,
          ids: inputValue.ids.split(','),
        }

        if(!param.groupId) delete param.groupId
        if(!param.deviceId) delete param.deviceId
        if(param.groupId) delete param.deviceId
        ty.device.getSubFunctionShowState({
          ...param,
          success: resolve,
          fail: reject,
        })
      })
    },
  },
  {
    title: 'getSubFunctionExtShowData',
    functionName: 'getSubFunctionExtShowData',
    input: true,
    placeholder: Strings.getLang('please_input_sub_function_ids'),
    func: (inputValue) => {
      return new Promise((resolve, reject) => {
        if (!inputValue) {
          reject('ids is required')
          return
        }

        ty.device.getSubFunctionExtShowData({
          id: inputValue,
          success: resolve,
          fail: reject,
        })
      })
    },
  },

  {
    title: 'getRemoteRebootTimers',
    functionName: 'getRemoteRebootTimers',
    input: true,
    placeholder: Strings.getLang('please_input_dev_id'),
    key: 'deviceId',
    func: (input) => {
      return new Promise((resolve, reject) => {
        ty.device.getRemoteRebootTimers({
          deviceId: input || getApp().deviceId || deviceId,
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
    title: 'onSubFunctionDataChange',
    functionName: 'onSubFunctionDataChange',
    func: () => {
      return new Promise((resolve, reject) => {
        ty.device.onSubFunctionDataChange(_onSubFunctionDataChange)
        resolve(true)
      })
    },
  },
  {
    title: 'offSubFunctionDataChange',
    functionName: 'offSubFunctionDataChange',
    func: () => {
      return new Promise((resolve, reject) => {
        ty.device.offSubFunctionDataChange(_onSubFunctionDataChange)
        resolve(true)
      })
    },
  },
  {
    title: 'onDispatchEvent',
    functionName: 'onDispatchEvent',
    func: () => {
      return new Promise((resolve, reject) => {
        ty.device.onDispatchEvent(_onDispatchEvent)
        resolve(true)
      })
    },
  },
  {
    title: 'offDispatchEvent',
    functionName: 'offDispatchEvent',
    func: () => {
      return new Promise((resolve, reject) => {
        ty.device.offDispatchEvent(_onDispatchEvent)
        resolve(true)
      })
    },
  },

  {
    title: 'updateDpName',
    functionName: 'updateDpName',
    input: true,
    keys: ['devId', 'dpId', 'name'],
    placeholder: [
      Strings.getLang('please_input_dev_id'),
      Strings.getLang('please_input_group_id'),
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
          ...param
        }).then(resolve).catch(reject)
      })
    },
  },
  {
    title: 'getDpsInfos',
    functionName: 'getDpsInfos',
    input: true,
    func: (inputValue) => {
      return new Promise((resolve, reject) => {
        if (!inputValue) {
          reject('ids is required')
          return
        }
        const param = {
          devId: inputValue.devId || getApp().deviceId || deviceId,
          gwId: inputValue.devId || getApp().deviceId || deviceId,
        }

        getDpsInfos({
          ...param
        }).then(resolve).catch(reject)
      })
    },
  },
]
