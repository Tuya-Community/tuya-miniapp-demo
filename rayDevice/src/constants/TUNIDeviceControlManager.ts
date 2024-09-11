import Strings from '@/i18n'
import { isNumerical } from '@ray-js/panel-sdk/lib/utils'
import {
  getDeviceInfo,
  getDeviceListByDevIds,
  getDeviceOnlineType,
  getDeviceProperty,
  getLaunchOptionsSync,
  getMqttConnectState,
  getProductInfo,
  getSubDeviceInfoList,
  home,
  offDeviceOnlineStatusUpdate,
  offDeviceRemoved,
  offDpDataChange,
  offMqttConnectState,
  offMqttMessageReceived,
  offSocketMessageReceived,
  offSubDeviceAdded,
  offSubDeviceDpUpdate,
  offSubDeviceInfoUpdate,
  offSubDeviceRemoved,
  onDeviceOnlineStatusUpdate,
  onDeviceRemoved,
  onDpDataChange,
  onMqttConnectState,
  onMqttMessageReceived,
  onSocketMessageReceived,
  onSubDeviceAdded,
  onSubDeviceDpUpdate,
  onSubDeviceInfoUpdate,
  onSubDeviceRemoved,
  publishCommands,
  publishDps,
  publishDpsWithPipeType,
  publishLanMessage,
  publishMqttMessage,
  publishSocketMessage,
  queryDps,
  registerDeviceListListener,
  registerGateWaySubDeviceListener,
  registerMQTTDeviceListener,
  registerMQTTProtocolListener,
  registerTopicListListener,
  registerZigbeeGateWaySubDeviceListener,
  removeDevice,
  renameDeviceName,
  resetFactory,
  sendMqttMessage,
  setDeviceProperty,
  subscribeDeviceRemoved,
  syncDeviceInfo,
  unregisterDeviceListListener,
  unregisterGateWaySubDeviceListener,
  unregisterMQTTDeviceListener,
  unregisterMQTTProtocolListener,
  unregisterTopicListListener,
  unregisterZigbeeGateWaySubDeviceListener,
  unSubscribeDeviceRemoved,
  validDeviceOnlineType,
} from '@ray-js/ray'
import { trans } from '../utils'

const {
  query: { deviceId, groupId },
} = getLaunchOptionsSync()

const _onMqttMessageReceived = (event) => {
  console.log('onMqttMessageReceived', event)
}
const _onDpDataChange = (event) => {
  console.log('onDpDataChange', event)
}

const _onSocketMessageReceived = (event) => {
  console.log('onSocketMessageReceived', event)
}
const _onDeviceOnlineStatusUpdate = (event) => {
  console.log('onDeviceOnlineStatusUpdate', event)
}
const _onDeviceInfoUpdated = (event) => {
  console.log('onDeviceInfoUpdated', event)
}
const _onDeviceRemoved = (event) => {
  console.log('onDeviceRemoved', event)
}
const _onMqttConnectState = (event) => {
  console.log('onMqttConnectState', event)
}
const _onSubDeviceDpUpdate = (event) => {
  console.log('onSubDeviceDpUpdate', event)
}
const _onSubDeviceRemoved = (event) => {
  console.log('onSubDeviceRemoved', event)
}

const _onSubDeviceAdded = (event) => {
  console.log('onSubDeviceAdded', event)
}

const _onSubDeviceInfoUpdate = (event) => {
  console.log('onSubDeviceInfoUpdate', event)
}



export default [
  {
    title: 'requestWifiSignal',
    functionName: 'requestWifiSignal',
    input: true,
    placeholder: Strings.getLang('please_input_dev_id'),
    func: () => {
      return new Promise((resolve, reject) => {
        ty.device.requestWifiSignal({
          deviceId,
          success: resolve,
          fail: reject,
        })
      })
    },
  },
  {
    title: 'yuChannelSync',
    functionName: 'yuChannelSync',
    func: () => {
      return new Promise((resolve, reject) => {
        ty.device.yuChannelSync({
          success: resolve,
          fail: reject,
        })
      })
    },
  },
  {
    title: 'yuChannelSyncSync',
    functionName: 'yuChannelSyncSync',
    func: () => {
      return new Promise((resolve, reject) => {
        try {
          ty.device.yuChannelSyncSync()
          resolve(true)
        } catch (error) {
          reject(error)
        }
      })
    },
  },
  {
    title: 'isYuDeviceOnline',
    functionName: 'isYuDeviceOnline',
    input: true,
    placeholder: Strings.getLang('please_input_dev_id'),
    func: () => {
      return new Promise((resolve, reject) => {
        ty.device.isYuDeviceOnline({
          deviceId,
          dps: {},
          success: resolve,
          fail: reject,
        })
      })
    },
  },
  {
    title: 'isYuDeviceOnlineSync',
    functionName: 'isYuDeviceOnlineSync',
    input: true,
    placeholder: Strings.getLang('please_input_dev_id'),
    func: () => {
      return new Promise((resolve, reject) => {
        try {
          const result = ty.device.isYuDeviceOnlineSync({
            deviceId,
            dps: {},
          })
          result(result)
        } catch (error) {
          reject(error)
        }
      })
    },
  },
  {
    title: 'syncDeviceMeshDps',
    functionName: 'syncDeviceMeshDps',
    input: true,
    keys: ['deviceId', 'dps'],
    placeholder: [Strings.getLang('please_input_dev_id'), Strings.getLang('please_input_dps')],
    func: () => {
      return new Promise((resolve, reject) => {
        ty.device.syncDeviceMeshDps({
          deviceId,
          dps: {},
          success: resolve,
          fail: reject,
        })
      })
    },
  },

  {
    title: Strings.getLang('renameDeviceName'),
    functionName: 'renameDeviceName',
    input: true,
    keys: ['deviceId', 'name'],
    placeholder: [
      Strings.getLang('please_input_dev_id'),
      Strings.getLang('please_input_device_name'),
    ],
    func: (inputValue?) => {
      return new Promise((resolve, reject) => {
        console.log('-----toRenameDeviceName', inputValue, deviceId)
        if (!inputValue.name) {
          ty.showToast({ title: Strings.getLang('please_input_device_name'), icon: 'none' })
          reject(Strings.getLang('please_input_device_name'))
          return
        }
        renameDeviceName({
          deviceId: inputValue?.deviceId || deviceId,
          name: inputValue?.name,
          success: resolve,
          fail: reject,
        })
      })
    },
  },
  {
    title: Strings.getLang('resetFactory'),
    functionName: 'resetFactory',
    input: true,
    placeholder: Strings.getLang('please_input_dev_id'),
    func: (inputValue?) => {
      return new Promise((resolve, reject) => {
        resetFactory({
          deviceId: inputValue || deviceId,
          success: resolve,
          fail: reject,
        })
      })
    },
  },
  {
    title: Strings.getLang('removeDevice'),
    functionName: 'removeDevice',
    input: true,
    placeholder: Strings.getLang('please_input_dev_id'),
    func: (inputValue) => {
      return new Promise((resolve, reject) => {
        removeDevice({
          deviceId: inputValue || deviceId,
          success: resolve,
          fail: reject,
        })
      })
    },
  },

  {
    title: Strings.getLang('registerGateWaySubDeviceListener'),
    functionName: 'registerGateWaySubDeviceListener',
    input: true,
    placeholder: Strings.getLang('please_input_dev_id'),
    func: (inputValue) => {
      return new Promise((resolve, reject) => {
        registerGateWaySubDeviceListener({
          deviceId: inputValue || deviceId,
          success: resolve,
          fail: reject,
        })
      })
    },
  },

  {
    title: Strings.getLang('unregisterGateWaySubDeviceListener'),
    functionName: 'unregisterGateWaySubDeviceListener',
    input: true,
    placeholder: Strings.getLang('please_input_dev_id'),
    func: (inputValue) => {
      return new Promise((resolve, reject) => {
        unregisterGateWaySubDeviceListener({
          deviceId: inputValue || deviceId,
          success: resolve,
          fail: reject,
        })
      })
    },
  },
  {
    title: Strings.getLang('registerZigbeeGateWaySubDeviceListener'),
    functionName: 'registerZigbeeGateWaySubDeviceListener',
    input: true,
    placeholder: Strings.getLang('please_input_dev_id'),
    func: (inputValue) => {
      return new Promise((resolve, reject) => {
        registerZigbeeGateWaySubDeviceListener({
          deviceId: inputValue || deviceId,
          success: resolve,
          fail: reject,
        })
      })
    },
  },

  {
    title: Strings.getLang('unregisterZigbeeGateWaySubDeviceListener'),
    functionName: 'unregisterZigbeeGateWaySubDeviceListener',
    input: true,
    placeholder: Strings.getLang('please_input_dev_id'),
    func: (inputValue) => {
      return new Promise((resolve, reject) => {
        unregisterZigbeeGateWaySubDeviceListener({
          deviceId: inputValue || deviceId,
          success: resolve,
          fail: reject,
        })
      })
    },
  },
  {
    title: Strings.getLang('getDeviceOnlineType'),
    functionName: 'getDeviceOnlineType',
    input: true,
    placeholder: Strings.getLang('please_input_dev_id'),
    func: (inputValue) => {
      return new Promise((resolve, reject) => {
        getDeviceOnlineType({
          deviceId: inputValue || deviceId,
          success: resolve,
          fail: reject,
        })
      })
    },
  },

  {
    title: 'getDeviceInfo',
    functionName: 'getDeviceInfo',
    input: true,
    placeholder: Strings.getLang('please_input_dev_id'),
    func: () => {
      return new Promise((resolve, reject) => {
        getDeviceInfo({
          deviceId,
          success: resolve,
          fail: reject,
        })
      })
    },
  },
  {
    title: 'getDeviceListByDevIds',
    functionName: 'getDeviceListByDevIds',
    input: true,
    placeholder: Strings.getLang('please_input_dev_ids'),
    func: (inputValue) => {
      return new Promise((resolve, reject) => {
        if (!inputValue) {
          ty.showToast({ title: Strings.getLang('please_input_dev_ids'), icon: 'none' })
          reject(Strings.getLang('please_input_dev_ids'))
          return
        }
        getDeviceListByDevIds({
          deviceIds: inputValue,
          success: resolve,
          fail: reject,
        })
      })
    },
  },
  {
    title: 'getProductInfo',
    functionName: 'getProductInfo',
    input: true,
    placeholder: Strings.getLang('please_input_product_id'),
    func: (inputValue) => {
      return new Promise((resolve, reject) => {
        if (!inputValue) {
          ty.showToast({ title: Strings.getLang('please_input_product_id'), icon: 'none' })
          reject(Strings.getLang('please_input_product_id'))
          return
        }
        getProductInfo({
          productId: inputValue,
          success: resolve,
          fail: reject,
        })
      })
    },
  },
  {
    title: 'getSubDeviceInfoList',
    functionName: 'getSubDeviceInfoList',
    input: true,
    placeholder: Strings.getLang('please_input_mesh_id'),
    func: (inputValue) => {
      return new Promise((resolve, reject) => {
        if (!inputValue) {
          ty.showToast({ title: Strings.getLang('please_input_mesh_id'), icon: 'none' })
          reject(Strings.getLang('please_input_mesh_id'))
          return
        }
        getSubDeviceInfoList({
          meshId: inputValue,
          success: resolve,
          fail: reject,
        })
      })
    },
  },
  {
    title: 'validDeviceOnlineType',
    functionName: 'validDeviceOnlineType',
    input: true,
    keys: ['deviceId', 'onlineType'],
    placeholder: [
      Strings.getLang('please_input_dev_id'),
      Strings.getLang('please_input_online_type'),
    ],
    func: (inputValue) => {
      return new Promise((resolve, reject) => {
        if (typeof inputValue.onlineType === 'undefined') {
          ty.showToast({ title: Strings.getLang('please_input_online_type'), icon: 'none' })
          reject(Strings.getLang('please_input_online_type'))
          return
        }
        validDeviceOnlineType({
          deviceId: inputValue.deviceId || deviceId,
          onlineType: inputValue.onlineType,
          success: resolve,
          fail: reject,
        })
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
        publishDps({
          deviceId: inputValue.deviceId || deviceId,
          dps: dps,
          mode: inputValue.mode || 2,
          pipelines: inputValue.pipelines || [],
          options: {},
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
          deviceId: inputValue.deviceId || deviceId,
          dps: dps,
          mode: inputValue.mode || 2,
          pipelines: inputValue.pipelines || [],
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
          deviceId: inputValue.deviceId || deviceId,
          dps: dps,
          mode: inputValue.mode || 2,
          pipelines: inputValue.pipelines || [],
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
          deviceIdList: [inputValue.deviceId || deviceId],
        })
        onDpDataChange(_onDpDataChange)
        queryDps({
          deviceId: inputValue.deviceId || deviceId,
          dpIds: inputValue.dpids,
          success: (e) => {
            resolve(e)
          },
          fail: reject,
        })
      })
    },
  },
  {
    title: 'publishMqttMessage',
    functionName: 'publishMqttMessage',
    input: true,
    keys: ['deviceId', 'protocol', 'message'],

    placeholder: [
      Strings.getLang('please_input_dev_id'),
      Strings.getLang('please_input_protocol'),
      Strings.getLang('please_input_message'),
    ],
    func: (inputValue) => {
      return new Promise((resolve, reject) => {
        if (!inputValue.protocol) {
          ty.showToast({ title: Strings.getLang('please_input_protocol'), icon: 'none' })
          reject(Strings.getLang('please_input_protocol'))
          return
        }
        if (!inputValue.message) {
          ty.showToast({ title: Strings.getLang('please_input_message'), icon: 'none' })
          reject(Strings.getLang('please_input_message'))
          return
        }

        const message = trans(inputValue.message)
        console.log(message)

        publishMqttMessage({
          deviceId: inputValue.deviceId || deviceId,
          protocol: inputValue.protocol,
          message: message,
          options: {},
          success: (e) => {
            resolve(e)
          },
          fail: reject,
        })
      })
    },
  },
  {
    title: 'sendMqttMessage',
    functionName: 'sendMqttMessage',
    input: true,
    keys: ['deviceId', 'protocol', 'message'],

    placeholder: [
      Strings.getLang('please_input_dev_id'),
      Strings.getLang('please_input_protocol'),
      Strings.getLang('please_input_message'),
    ],
    func: (inputValue) => {
      return new Promise((resolve, reject) => {
        if (!inputValue.protocol) {
          ty.showToast({ title: Strings.getLang('please_input_protocol'), icon: 'none' })
          reject(Strings.getLang('please_input_protocol'))
          return
        }
        if (!inputValue.message) {
          ty.showToast({ title: Strings.getLang('please_input_message'), icon: 'none' })
          reject(Strings.getLang('please_input_message'))
          return
        }

        const message = trans(inputValue.message)
        console.log(message)

        sendMqttMessage({
          deviceId: inputValue.deviceId || deviceId,
          protocol: inputValue.protocol,
          message: message,
          options: {},
          success: (e) => {
            resolve(e)
          },
          fail: reject,
        })
      })
    },
  },
  {
    title: 'publishLanMessage',
    functionName: 'publishLanMessage',
    input: true,
    keys: ['deviceId', 'protocol', 'message'],

    placeholder: [
      Strings.getLang('please_input_dev_id'),
      Strings.getLang('please_input_protocol'),
      Strings.getLang('please_input_message'),
    ],
    func: (inputValue) => {
      return new Promise((resolve, reject) => {
        if (!inputValue.protocol) {
          ty.showToast({ title: Strings.getLang('please_input_protocol'), icon: 'none' })
          reject(Strings.getLang('please_input_protocol'))
          return
        }
        if (!inputValue.message) {
          ty.showToast({ title: Strings.getLang('please_input_message'), icon: 'none' })
          reject(Strings.getLang('please_input_message'))
          return
        }

        const message = trans(inputValue.message)
        console.log(message)

        publishLanMessage({
          deviceId: inputValue.deviceId || deviceId,
          protocol: inputValue.protocol,
          message: message,
          options: {},
          success: (e) => {
            resolve(e)
          },
          fail: reject,
        })
      })
    },
  },
  {
    title: 'publishSocketMessage',
    functionName: 'publishSocketMessage',
    input: true,
    keys: ['deviceId', 'type', 'message'],

    placeholder: [
      Strings.getLang('please_input_dev_id'),
      Strings.getLang('please_input_socket_type'),
      Strings.getLang('please_input_message'),
    ],
    func: (inputValue) => {
      return new Promise((resolve, reject) => {
        if (!inputValue.protocol) {
          ty.showToast({ title: Strings.getLang('please_input_socket_type'), icon: 'none' })
          reject(Strings.getLang('please_input_socket_type'))
          return
        }
        if (!inputValue.message) {
          ty.showToast({ title: Strings.getLang('please_input_message'), icon: 'none' })
          reject(Strings.getLang('please_input_message'))
          return
        }

        const message = trans(inputValue.message)
        console.log(message)

        publishSocketMessage({
          deviceId: inputValue.deviceId || deviceId,
          type: +inputValue.type,
          message: message,
          options: {},
          success: (e) => {
            resolve(e)
          },
          fail: reject,
        })
      })
    },
  },
  {
    title: 'getDeviceProperty',
    functionName: 'getDeviceProperty',
    input: true,
    placeholder: Strings.getLang('please_input_dev_id'),
    func: (inputValue) => {
      return new Promise((resolve, reject) => {
        getDeviceProperty({
          deviceId: inputValue.deviceId || deviceId,
          success: (e) => {
            resolve(e)
          },
          fail: reject,
        })
      })
    },
  },
  {
    title: 'setDeviceProperty',
    functionName: 'setDeviceProperty',
    input: true,
    keys: ['deviceId', 'code', 'value'],
    placeholder: [
      Strings.getLang('please_input_dev_id'),
      Strings.getLang('please_input_code'),
      Strings.getLang('please_input_value'),
    ],
    func: (inputValue) => {
      return new Promise((resolve, reject) => {
        if (!inputValue || !inputValue.code) {
          ty.showToast({ title: Strings.getLang('please_input_code'), icon: 'none' })
          reject(Strings.getLang('please_input_code'))
          return
        }
        if (!isNumerical(inputValue.value)) {
          ty.showToast({ title: Strings.getLang('please_input_value'), icon: 'none' })
          reject(Strings.getLang('please_input_value'))
          return
        }
        setDeviceProperty({
          deviceId: inputValue.deviceId || deviceId,
          code: inputValue.code,
          value: inputValue.value,
          success: (e) => {
            resolve(e)
          },
          fail: reject,
        })
      })
    },
  },
  {
    title: 'syncDeviceInfo',
    functionName: 'syncDeviceInfo',
    input: true,
    placeholder: Strings.getLang('please_input_dev_id'),
    func: (inputValue) => {
      return new Promise((resolve, reject) => {
        syncDeviceInfo({
          deviceId: inputValue.deviceId || deviceId,
          success: (e) => {
            resolve(e)
          },
          fail: reject,
        })
      })
    },
  },

  {
    title: 'subscribeDeviceRemoved',
    functionName: 'subscribeDeviceRemoved',
    input: true,
    placeholder: Strings.getLang('please_input_dev_id'),
    func: (inputValue) => {
      return new Promise((resolve, reject) => {
        subscribeDeviceRemoved({
          deviceId: inputValue || deviceId,
          success: (e) => {
            resolve(e)
          },
          fail: reject,
        })
      })
    },
  },

  {
    title: 'unSubscribeDeviceRemoved',
    functionName: 'unSubscribeDeviceRemoved',
    input: true,
    placeholder: Strings.getLang('please_input_dev_id'),
    func: (inputValue) => {
      return new Promise((resolve, reject) => {
        unSubscribeDeviceRemoved({
          deviceId: inputValue || deviceId,
          success: (e) => {
            resolve(e)
          },
          fail: reject,
        })
      })
    },
  },

  {
    title: 'registerMQTTDeviceListener',
    functionName: 'registerMQTTDeviceListener',
    input: true,
    placeholder: Strings.getLang('please_input_dev_id'),
    func: (inputValue) => {
      return new Promise((resolve, reject) => {
        registerMQTTDeviceListener({
          deviceId: inputValue || deviceId,
          success: (e) => {
            resolve(e)
          },
          fail: reject,
        })
      })
    },
  },
  {
    title: 'unregisterMQTTDeviceListener',
    functionName: 'unregisterMQTTDeviceListener',
    input: true,
    placeholder: Strings.getLang('please_input_dev_id'),
    func: (inputValue) => {
      return new Promise((resolve, reject) => {
        unregisterMQTTDeviceListener({
          deviceId: inputValue || deviceId,
          success: (e) => {
            resolve(e)
          },
          fail: reject,
        })
      })
    },
  },
  {
    title: 'registerMQTTProtocolListener',
    functionName: 'registerMQTTProtocolListener',
    input: true,
    placeholder: Strings.getLang('please_input_protocol'),
    func: (inputValue) => {
      return new Promise((resolve, reject) => {
        if (!inputValue) {
          ty.showToast({ title: Strings.getLang('please_input_protocol'), icon: 'none' })
          reject(Strings.getLang('please_input_protocol'))
          return
        }
        registerMQTTProtocolListener({
          protocol: inputValue,
          success: (e) => {
            resolve(e)
          },
          fail: reject,
        })
      })
    },
  },
  {
    title: 'unregisterMQTTProtocolListener',
    functionName: 'unregisterMQTTProtocolListener',
    input: true,
    placeholder: Strings.getLang('please_input_protocol'),
    func: (inputValue) => {
      return new Promise((resolve, reject) => {
        if (!inputValue) {
          ty.showToast({ title: Strings.getLang('please_input_protocol'), icon: 'none' })
          reject(Strings.getLang('please_input_protocol'))
          return
        }
        unregisterMQTTProtocolListener({
          protocol: inputValue,
          success: (e) => {
            resolve(e)
          },
          fail: reject,
        })
      })
    },
  },
  {
    title: 'registerDeviceListListener',
    functionName: 'registerDeviceListListener',
    input: true,
    placeholder: Strings.getLang('please_input_dev_ids'),
    func: (inputValue) => {
      return new Promise((resolve, reject) => {
        if (!inputValue) {
          ty.showToast({ title: Strings.getLang('please_input_dev_ids'), icon: 'none' })
          reject(Strings.getLang('please_input_dev_ids'))
          return
        }
        registerDeviceListListener({
          deviceIdList: inputValue.split(','),
          success: (e) => {
            resolve(e)
          },
          fail: reject,
        })
      })
    },
  },
  {
    title: 'unregisterDeviceListListener',
    functionName: 'unregisterDeviceListListener',
    func: () => {
      return new Promise((resolve, reject) => {
        unregisterDeviceListListener({
          success: (e) => {
            resolve(e)
          },
          fail: reject,
        })
      })
    },
  },
  {
    title: 'registerTopicListListener',
    functionName: 'registerTopicListListener',
    input: true,
    placeholder: Strings.getLang('please_input_topics'),
    func: (inputValue) => {
      return new Promise((resolve, reject) => {
        if (!inputValue) {
          ty.showToast({ title: Strings.getLang('please_input_topics'), icon: 'none' })
          reject(Strings.getLang('please_input_topics'))
          return
        }
        registerTopicListListener({
          topicList: inputValue.split(','),
          success: (e) => {
            resolve(e)
          },
          fail: reject,
        })
      })
    },
  },
  {
    title: 'unregisterTopicListListener',
    functionName: 'unregisterTopicListListener',
    func: (inputValue) => {
      return new Promise((resolve, reject) => {
        unregisterTopicListListener({
          success: (e) => {
            resolve(e)
          },
          fail: reject,
        })
      })
    },
  },
  
  {
    title: 'getMqttConnectState',
    functionName: 'getMqttConnectState',
    func: (inputValue) => {
      return new Promise((resolve, reject) => {
        getMqttConnectState({
          success: (e) => {
            resolve(e)
          },
          fail: reject,
        })
      })
    },
  },
  {
    title: Strings.getLang('requestAdvancedCapability'),
    functionName: 'requestAdvancedCapability',
    input: true,
    placeholder: Strings.getLang('please_input_dp_code'),
    func: async (inputValue?) => {
      const { homeId } = await home.getCurrentHomeInfo()
      return new Promise((resolve, reject) => {
        if (!inputValue) {
          reject('dpCodes is required')
          return
        }
        ty.device.requestAdvancedCapability({
          resId: deviceId,
          type: '6',
          spaceId: homeId,
          dpCodes: inputValue.split(','),
          success: resolve,
          fail: reject,
        })
      })
    },
  },
  {
    title: Strings.getLang('dpTranslateAdvancedCapability'),
    functionName: 'dpTranslateAdvancedCapability',
    input: true,
    keys: ['dpCode', 'dpId', 'dpValue'],
    placeholder: [
      Strings.getLang('please_input_dp_code'),
      Strings.getLang('please_input_dp_id'),
      Strings.getLang('please_input_dp_value'),
    ],
    func: async (inputValue?) => {
      return new Promise((resolve, reject) => {
        console.log('-----dpTranslateAdvancedCapability', inputValue)
        if (!inputValue || !inputValue.dpCode || !inputValue.dpId || !inputValue.dpValue) {
          reject('dpCode, dpValue, dpId is required')
          return
        }
        ty.device.dpTranslateAdvancedCapability({
          resId: deviceId,
          type: '6',
          dps: [
            {
              dpCode: inputValue.dpCode,
              dpValue: inputValue.dpValue,
              dpId: inputValue.dpId,
            },
          ],
          success: resolve,
          fail: reject,
        })
      })
    },
  },
  {
    title: 'onDpDataChange',
    functionName: 'onDpDataChange',
    func: (inputValue) => {
      return new Promise((resolve, reject) => {
        onDpDataChange(_onDpDataChange)
        resolve(true)
      })
    },
  },
  {
    title: 'offDpDataChange',
    functionName: 'offDpDataChange',
    func: (inputValue) => {
      return new Promise((resolve, reject) => {
        offDpDataChange(_onDpDataChange)
        resolve(true)
      })
    },
  },
  {
    title: 'onMqttMessageReceived',
    functionName: 'onMqttMessageReceived',
    func: (inputValue) => {
      return new Promise((resolve, reject) => {
        onMqttMessageReceived(_onMqttMessageReceived)
        resolve(true)
      })
    },
  },
  {
    title: 'offMqttMessageReceived',
    functionName: 'offMqttMessageReceived',
    func: (inputValue) => {
      return new Promise((resolve, reject) => {
        offMqttMessageReceived(_onMqttMessageReceived)
        resolve(true)
      })
    },
  },
  {
    title: 'onSocketMessageReceived',
    functionName: 'onSocketMessageReceived',
    func: (inputValue) => {
      return new Promise((resolve, reject) => {
        onSocketMessageReceived(_onSocketMessageReceived)
        resolve(true)
      })
    },
  },
  {
    title: 'offSocketMessageReceived',
    functionName: 'offSocketMessageReceived',
    func: (inputValue) => {
      return new Promise((resolve, reject) => {
        offSocketMessageReceived(_onSocketMessageReceived)
        resolve(true)
      })
    },
  },
  {
    title: 'onDeviceOnlineStatusUpdate',
    functionName: 'onDeviceOnlineStatusUpdate',
    func: (inputValue) => {
      return new Promise((resolve, reject) => {
        onDeviceOnlineStatusUpdate(_onDeviceOnlineStatusUpdate)
        resolve(true)
      })
    },
  },
  {
    title: 'offDeviceOnlineStatusUpdate',
    functionName: 'offDeviceOnlineStatusUpdate',
    func: (inputValue) => {
      return new Promise((resolve, reject) => {
        offDeviceOnlineStatusUpdate(_onDeviceOnlineStatusUpdate)
        resolve(true)
      })
    },
  },
  {
    title: 'onDeviceRemoved',
    functionName: 'onDeviceRemoved',
    func: (inputValue) => {
      return new Promise((resolve, reject) => {
        onDeviceRemoved(_onDeviceRemoved)
        resolve(true)
      })
    },
  },
  {
    title: 'offDeviceRemoved',
    functionName: 'offDeviceRemoved',
    func: (inputValue) => {
      return new Promise((resolve, reject) => {
        offDeviceRemoved(_onDeviceRemoved)
        resolve(true)
      })
    },
  },
  {
    title: 'onMqttConnectState',
    functionName: 'onMqttConnectState',
    func: (inputValue) => {
      return new Promise((resolve, reject) => {
        onMqttConnectState(_onMqttConnectState)
        resolve(true)
      })
    },
  },
  {
    title: 'offMqttConnectState',
    functionName: 'offMqttConnectState',
    func: (inputValue) => {
      return new Promise((resolve, reject) => {
        offMqttConnectState(_onMqttConnectState)
        resolve(true)
      })
    },
  },
  {
    title: 'onSubDeviceDpUpdate',
    functionName: 'onSubDeviceDpUpdate',
    func: (inputValue) => {
      return new Promise((resolve, reject) => {
        onSubDeviceDpUpdate(_onSubDeviceDpUpdate)
        resolve(true)
      })
    },
  },
  {
    title: 'offSubDeviceDpUpdate',
    functionName: 'offSubDeviceDpUpdate',
    func: (inputValue) => {
      return new Promise((resolve, reject) => {
        offSubDeviceDpUpdate(_onSubDeviceDpUpdate)
        resolve(true)
      })
    },
  },
  {
    title: 'onSubDeviceRemoved',
    functionName: 'onSubDeviceRemoved',
    func: (inputValue) => {
      return new Promise((resolve, reject) => {
        onSubDeviceRemoved(_onSubDeviceRemoved)
        resolve(true)
      })
    },
  },
  {
    title: 'offSubDeviceRemoved',
    functionName: 'offSubDeviceRemoved',
    func: (inputValue) => {
      return new Promise((resolve, reject) => {
        offSubDeviceRemoved(_onSubDeviceRemoved)
        resolve(true)
      })
    },
  },
  {
    title: 'onSubDeviceAdded',
    functionName: 'onSubDeviceAdded',
    func: (inputValue) => {
      return new Promise((resolve, reject) => {
        onSubDeviceAdded(_onSubDeviceAdded)
        resolve(true)
      })
    },
  },
  {
    title: 'offSubDeviceAdded',
    functionName: 'offSubDeviceAdded',
    func: (inputValue) => {
      return new Promise((resolve, reject) => {
        offSubDeviceAdded(_onSubDeviceAdded)
        resolve(true)
      })
    },
  },
  {
    title: 'onSubDeviceInfoUpdate',
    functionName: 'onSubDeviceInfoUpdate',
    func: (inputValue) => {
      return new Promise((resolve, reject) => {
        onSubDeviceInfoUpdate(_onSubDeviceInfoUpdate)
        resolve(true)
      })
    },
  },
  {
    title: 'offSubDeviceInfoUpdate',
    functionName: 'offSubDeviceInfoUpdate',
    func: (inputValue) => {
      return new Promise((resolve, reject) => {
        offSubDeviceInfoUpdate(_onSubDeviceInfoUpdate)
        resolve(true)
      })
    },
  },
]
