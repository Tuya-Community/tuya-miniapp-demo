import Strings from '@/i18n'
import { trans } from '@/utils'
import {
  createAction,
  createCondition,
  editAction,
  editCondition,
  getLaunchOptionsSync,
  openDeviceExecutionAndAnutomation,
  openPreConditionPage,
  openRecommendSceneDetail,
  saveSceneAction,
  showSceneDialog,
} from '@ray-js/ray'
const {
  query: { deviceId, groupId },
} = getLaunchOptionsSync()

export default [
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
          deviceId: input.deviceId || deviceId,
          title: input.title,
          success: resolve,
          fail: reject,
        })
      })
    },
  },
  {
    title: 'saveSceneAction',
    functionName: 'saveSceneAction',
    input: true,
    keys: [
      'deviceId',
      'taskPosition',
      'actionExecutor',
      'executorProperty',
      'extraProperty',
      'actionDisplayNew',
    ],
    placeholder: [
      'deviceId',
      'taskPosition',
      'actionExecutor',
      'executorProperty',
      'extraProperty',
      'actionDisplayNew',
    ],
    func: (input) => {
      return new Promise((resolve, reject) => {
        if (typeof input.taskPosition === 'undefined') {
          reject('taskPosition is required')
          return
        }
        if (typeof input.executorProperty === 'undefined') {
          reject('executorProperty is required')
          return
        }
        if (typeof input.actionDisplayNew === 'undefined') {
          reject('actionDisplayNew is required')
          return
        }
        saveSceneAction({
          deviceId: input.deviceId || deviceId,
          taskPosition: input.taskPosition,
          actionExecutor: input.actionExecutor,
          executorProperty: input.executorProperty,
          extraProperty: input.extraProperty || {},
          actionDisplayNew: input.actionDisplayNew,
          success: resolve,
          fail: reject,
        })
      })
    },
  },
  {
    title: 'createAction',
    functionName: 'createAction',
    input: true,
    keys: ['createType', 'smartType', 'actionArray'],
    placeholder: ['createType', 'smartType', 'actionArray'],
    func: (input) => {
      return new Promise((resolve, reject) => {
        if (typeof input.createType === 'undefined') {
          reject('createType is required')
          return
        }
        if (typeof input.smartType === 'undefined') {
          reject('smartType is required')
          return
        }
        createAction({
          createType: input.createType,
          smartType: input.smartType,
          actionArray: input.actionArray ? trans(input.actionArray) : [],
          success: resolve,
          fail: reject,
        })
      })
    },
  },
  {
    title: 'editAction',
    functionName: 'editAction',
    input: true,
    keys: ['editIndex', 'smartType', 'actionArray'],
    placeholder: ['editIndex', 'smartType', 'actionArray'],
    func: (input) => {
      return new Promise((resolve, reject) => {
        if (typeof input.editIndex === 'undefined') {
          reject('editIndex is required')
          return
        }
        if (typeof input.createType === 'undefined') {
          reject('createType is required')
          return
        }
        if (typeof input.smartType === 'undefined') {
          reject('smartType is required')
          return
        }
        editAction({
          editIndex: input.editIndex,
          smartType: input.smartType,
          actionArray: input.actionArray ? trans(input.actionArray) : [],
          success: resolve,
          fail: reject,
        })
      })
    },
  },
  {
    title: 'showSceneDialog',
    functionName: 'showSceneDialog',
    input: true,
    keys: ['smartType', 'color', 'icon', 'image'],
    placeholder: ['smartType', 'color', 'icon', 'image'],
    func: (input) => {
      return new Promise((resolve, reject) => {
        if (typeof input.smartType === 'undefined') {
          reject('smartType is required')
          return
        }
        showSceneDialog({
          smartType: input.smartType,
          color: input.color,
          icon: input.icon,
          image: input.image,
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
    title: 'createCondition',
    functionName: 'createCondition',
    input: true,
    keys: ['type', 'condition', 'index'],
    placeholder: ['type', 'condition', 'index'],
    func: (input) => {
      return new Promise((resolve, reject) => {
        if(typeof input.type === 'undefined'){
          reject('type is required')
          return;
        }
        createCondition({
          type: input.type,
          condition: input.condition,
          index: input.index || 0,
          success: resolve,
          fail: reject,
        })
      })
    },
  },
  {
    title: 'editCondition',
    functionName: 'editCondition',
    input: true,
    keys: ['type', 'condition', 'index'],
    placeholder: ['type', 'condition', 'index'],
    func: (input) => {
      return new Promise((resolve, reject) => {
        if(typeof input.type === 'undefined'){
          reject('type is required')
          return;
        }
        editCondition({
          type: input.type,
          condition: input.condition,
          index: input.index || 0,
          success: resolve,
          fail: reject,
        })
      })
    },
  },
]
