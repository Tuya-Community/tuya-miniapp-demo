import Strings from '@/i18n'
import {
  getLaunchOptionsSync,
  offDirectlyConnectedSearchDeviceEvent,
  onDirectlyConnectedSearchDeviceEvent,
  startDirectlyConnectedDeviceActivator,
  startDirectlyConnectedSearchDevice,
  stopDirectlyConnectedDeviceActivator,
  stopDirectlyConnectedSearchDevice
} from 'ray'
const {
  query: { deviceId, groupId },
} = getLaunchOptionsSync()

const _onDirectlyConnectedSearchDeviceEvent = (event) => {
  console.log('FreePairing.onDirectlyConnectedSearchDeviceEvent', event)
}

export default [
  {
    title: 'startDirectlyConnectedDeviceActivator',
    functionName: 'startDirectlyConnectedDeviceActivator',
    input: true,
    placeholder: Strings.getLang('please_input_gateway_id'),
    key: 'deviceId',
    func: (inputValue?: string) => {
      return new Promise((resolve, reject) => {
        startDirectlyConnectedDeviceActivator({
          device: { deviceId: inputValue || getApp().deviceId || deviceId },
          timeout: 10000,
          success: resolve,
          fail: reject,
        })
      })
    },
  },
  {
    title: 'startDirectlyConnectedSearchDevice',
    functionName: 'startDirectlyConnectedSearchDevice',
    input: true,
    placeholder: Strings.getLang('please_input_gateway_id'),
    key: 'deviceId',
    func: (inputValue?: string) => {
      return new Promise((resolve, reject) => {
        startDirectlyConnectedSearchDevice({
          device: { deviceId: inputValue || getApp().deviceId || deviceId },
          timeout: 10000,
          success: resolve,
          fail: reject,
        })
      })
    },
  },

  {
    title: 'stopDirectlyConnectedDeviceActivator',
    functionName: 'stopDirectlyConnectedDeviceActivator',
    input: true,
    placeholder: Strings.getLang('please_input_gateway_id'),
    key: 'deviceId',
    func: (inputValue?: string) => {
      return new Promise((resolve, reject) => {
        stopDirectlyConnectedDeviceActivator({
          device: { deviceId: inputValue || getApp().deviceId || deviceId },
          timeout: 10000,
          success: resolve,
          fail: reject,
        })
      })
    },
  },
  {
    title: 'stopDirectlyConnectedSearchDevice',
    functionName: 'stopDirectlyConnectedSearchDevice',
    input: true,
    placeholder: Strings.getLang('please_input_gateway_id'),
    key: 'deviceId',
    func: (inputValue?: string) => {
      return new Promise((resolve, reject) => {
        stopDirectlyConnectedSearchDevice({
          device: { deviceId: inputValue || getApp().deviceId || deviceId },
          timeout: 10000,
          success: resolve,
          fail: reject,
        })
      })
    },
  },

  {
    title: 'onDirectlyConnectedSearchDeviceEvent',
    functionName: 'onDirectlyConnectedSearchDeviceEvent',
    // input: true,
    // placeholder: Strings.getLang('please_input_gateway_id'),
    func: () => {
      return new Promise((resolve, reject) => {
        onDirectlyConnectedSearchDeviceEvent(_onDirectlyConnectedSearchDeviceEvent)
        resolve(true)
      })
    },
  },
  {
    title: 'offDirectlyConnectedSearchDeviceEvent',
    functionName: 'offDirectlyConnectedSearchDeviceEvent',
    // input: true,
    // placeholder: Strings.getLang('please_input_gateway_id'),
    func: () => {
      return new Promise((resolve, reject) => {
        offDirectlyConnectedSearchDeviceEvent(_onDirectlyConnectedSearchDeviceEvent)
        resolve(true)
      })
    },
  },
]
