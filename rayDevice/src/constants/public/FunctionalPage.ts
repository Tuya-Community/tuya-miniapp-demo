import Strings from '@/i18n'
import { trans } from '@/utils'
import {
  getLaunchOptionsSync,
  openCategoryActivatorPage,
  openDeviceDetailPage,
  openDeviceEdit,
  openDeviceExecutionAndAnutomation,
  openDeviceInfo,
  openDeviceQuestionsAndFeedback,
  openDeviceWifiNetworkMonitorPage,
  openPreConditionPage,
  openRecommendSceneDetail,
  openReconnectPage,
  openShareDevice,
} from 'ray'
const {
  query: { deviceId, groupId },
} = getLaunchOptionsSync()

export default [
  {
    title: 'openCategoryActivatorPage',
    functionName: 'openCategoryActivatorPage',
    // input: true,
    // placeholder: Strings.getLang('please_input_gateway_id'),
    func: (inputValue?: string) => {
      return new Promise((resolve, reject) => {
        openCategoryActivatorPage({
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
    title: 'openDeviceExecutionAndAnutomation',
    functionName: 'openDeviceExecutionAndAnutomation',
    input: true,
    keys: ['deviceId', 'title'],
    placeholder: [
      Strings.getLang('please_input_dev_id'),
      Strings.getLang('please_input_scene_title'),
    ],
    func: (input) => {
      return new Promise((resolve, reject) => {
        openDeviceExecutionAndAnutomation({
          deviceId: input.deviceId || getApp().deviceId || deviceId,
          title: input.title,
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
    title: 'openPreConditionPage',
    functionName: 'openPreConditionPage',
    input: true,
    keys: ['id', 'condType', 'expr'],
    placeholder: ['id', 'condType', 'expr'],
    func: (input) => {
      return new Promise((resolve, reject) => {
        openPreConditionPage({
          id: input.id,
          condType: input.condType,
          expr: input.expr ? trans(input.expr) : undefined,
          success: resolve,
          fail: reject,
        })
      })
    },
  },
  {
    title: 'openReconnectPage',
    functionName: 'openReconnectPage',
    input: true,
    placeholder: Strings.getLang('please_input_gateway_id'),
    key: 'deviceId',
    func: (inputValue?: string) => {
      return new Promise((resolve, reject) => {
        openReconnectPage({
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
    title: 'openRecommendSceneDetail',
    functionName: 'openRecommendSceneDetail',
    input: true,
    keys: ['source', 'sceneModel'],
    placeholder: [
      Strings.getLang('please_input_source'),
      Strings.getLang('please_input_scene_model'),
    ],
    func: (input) => {
      return new Promise((resolve, reject) => {
        openRecommendSceneDetail({
          source: input.source,
          sceneModel: trans(input.sceneModel),
          success: resolve,
          fail: reject,
        })
      })
    },
  },
]
