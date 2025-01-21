import Strings from '@/i18n'
import {
  getLaunchOptionsSync,
  getSubDeviceInfoList,
  offSubDeviceAdded,
  offSubDeviceDpUpdate,
  offSubDeviceInfoUpdate,
  offSubDeviceInfoUpdateEvent,
  offSubDeviceRemoved,
  onSubDeviceAdded,
  onSubDeviceDpUpdate,
  onSubDeviceInfoUpdate,
  onSubDeviceInfoUpdateEvent,
  onSubDeviceRemoved,
  registerGateWaySubDeviceListener,
  registerZigbeeGateWaySubDeviceListener,
  unregisterGateWaySubDeviceListener,
  unregisterZigbeeGateWaySubDeviceListener
} from 'ray'
const {
  query: { deviceId, groupId },
} = getLaunchOptionsSync()

const _onSubDeviceInfoUpdateEvent = (event) => {
  console.log('SubDevice.onSubDeviceInfoUpdateEvent', event)
}

const _onSubDeviceDpUpdate = (event) => {
  console.log('SubDevice.onSubDeviceDpUpdate', event)
}
const _onSubDeviceRemoved = (event) => {
  console.log('SubDevice.onSubDeviceRemoved', event)
}

const _onSubDeviceAdded = (event) => {
  console.log('SubDevice.onSubDeviceAdded', event)
}

const _onSubDeviceInfoUpdate = (event) => {
  console.log('SubDevice.onSubDeviceInfoUpdate', event)
}

export default [
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
    title: 'onSubDeviceInfoUpdateEvent',
    functionName: 'onSubDeviceInfoUpdateEvent',
    // input: true,
    // placeholder: Strings.getLang('please_input_gateway_id'),
    func: () => {
      return new Promise((resolve, reject) => {
        onSubDeviceInfoUpdateEvent(_onSubDeviceInfoUpdateEvent)
        resolve(true)
      })
    },
  },
  {
    title: 'offSubDeviceInfoUpdateEvent',
    functionName: 'offSubDeviceInfoUpdateEvent',
    // input: true,
    // placeholder: Strings.getLang('please_input_gateway_id'),
    func: () => {
      return new Promise((resolve, reject) => {
        offSubDeviceInfoUpdateEvent(_onSubDeviceInfoUpdateEvent)
        resolve(true)
      })
    },
  },
  {
    title: 'registerZigbeeGateWaySubDeviceListener',
    functionName: 'registerZigbeeGateWaySubDeviceListener',
    input: true,
    placeholder: Strings.getLang('please_input_dev_id'),
    key: 'deviceId',
    func: (inputValue) => {
      return new Promise((resolve, reject) => {
        registerZigbeeGateWaySubDeviceListener({
          deviceId: inputValue || getApp().deviceId || deviceId,
          success: resolve,
          fail: reject,
        })
      })
    },
  },

  {
    title: 'unregisterZigbeeGateWaySubDeviceListener',
    functionName: 'unregisterZigbeeGateWaySubDeviceListener',
    input: true,
    placeholder: Strings.getLang('please_input_dev_id'),
    key: 'deviceId',
    func: (inputValue) => {
      return new Promise((resolve, reject) => {
        unregisterZigbeeGateWaySubDeviceListener({
          deviceId: inputValue || getApp().deviceId || deviceId,
          success: resolve,
          fail: reject,
        })
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

  {
    title: 'registerGateWaySubDeviceListener',
    functionName: 'registerGateWaySubDeviceListener',
    input: true,
    placeholder: Strings.getLang('please_input_dev_id'),
    key: 'deviceId',
    func: (inputValue) => {
      return new Promise((resolve, reject) => {
        registerGateWaySubDeviceListener({
          deviceId: inputValue || getApp().deviceId || deviceId,
          success: resolve,
          fail: reject,
        })
      })
    },
  },

  {
    title: 'unregisterGateWaySubDeviceListener',
    functionName: 'unregisterGateWaySubDeviceListener',
    input: true,
    placeholder: Strings.getLang('please_input_dev_id'),
    key: 'deviceId',
    func: (inputValue) => {
      return new Promise((resolve, reject) => {
        unregisterGateWaySubDeviceListener({
          deviceId: inputValue || getApp().deviceId || deviceId,
          success: resolve,
          fail: reject,
        })
      })
    },
  },
]
