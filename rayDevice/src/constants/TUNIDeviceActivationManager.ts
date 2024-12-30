import Strings from '@/i18n'
import {
  getDeviceWifiActivatorStatus,
  getLaunchOptionsSync,
  offDirectlyConnectedSearchDeviceEvent,
  offSubDeviceInfoUpdateEvent,
  onDirectlyConnectedSearchDeviceEvent,
  onSubDeviceInfoUpdateEvent,
  openCategoryActivatorPage,
  openReconnectPage,
  startDeviceWifiActivator,
  startDirectlyConnectedDeviceActivator,
  startDirectlyConnectedSearchDevice,
  startGWActivation,
  stopDirectlyConnectedDeviceActivator,
  stopDirectlyConnectedSearchDevice,
  stopGWActivation,
} from '@ray-js/ray'

const {
  query: { deviceId, groupId },
} = getLaunchOptionsSync()


const _onSubDeviceInfoUpdateEvent = event => {
  console.log('onSubDeviceInfoUpdateEvent', event)
}


const _onDirectlyConnectedSearchDeviceEvent = event => {
  console.log('onDirectlyConnectedSearchDeviceEvent', event)
}

export default [
  {
    title: 'startGWActivation',
    functionName: 'startGWActivation',
    input: true,
    placeholder: Strings.getLang('please_input_gateway_id'),
    func: (inputValue?) => {
      return new Promise((resolve, reject) => {
        startGWActivation({
          gateway: { gwId: inputValue || deviceId },
          timeout: 10000,
          success: resolve,
          fail: reject,
        })
      })
    },
  },
  {
    title: 'stopGWActivation',
    functionName: 'stopGWActivation',
    input: true,
    placeholder: Strings.getLang('please_input_gateway_id'),
    func: (inputValue?: string) => {
      return new Promise((resolve, reject) => {
        stopGWActivation({
          gwId: inputValue || deviceId,
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
    func: (inputValue?: string) => {
      return new Promise((resolve, reject) => {
        openReconnectPage({
          deviceId: inputValue || deviceId,
          success: resolve,
          fail: reject,
        })
      })
    },
  },
  {
    title: 'startDirectlyConnectedDeviceActivator',
    functionName: 'startDirectlyConnectedDeviceActivator',
    input: true,
    placeholder: Strings.getLang('please_input_gateway_id'),
    func: (inputValue?: string) => {
      return new Promise((resolve, reject) => {
        startDirectlyConnectedDeviceActivator({
          device: { deviceId: inputValue || deviceId },
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
    func: (inputValue?: string) => {
      return new Promise((resolve, reject) => {
        stopDirectlyConnectedDeviceActivator({
          device: { deviceId: inputValue || deviceId },
          timeout: 10000,
          success: resolve,
          fail: reject,
        })
      })
    },
  },
  {
    title: 'openCategoryActivatorPage',
    functionName: 'openCategoryActivatorPage',
    input: true,
    placeholder: Strings.getLang('please_input_gateway_id'),
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
    title: 'startDirectlyConnectedSearchDevice',
    functionName: 'startDirectlyConnectedSearchDevice',
    input: true,
    placeholder: Strings.getLang('please_input_gateway_id'),
    func: (inputValue?: string) => {
      return new Promise((resolve, reject) => {
        startDirectlyConnectedSearchDevice({
          device: { deviceId: inputValue || deviceId },
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
    func: (inputValue?: string) => {
      return new Promise((resolve, reject) => {
        stopDirectlyConnectedSearchDevice({
          device: { deviceId: inputValue || deviceId },
          timeout: 10000,
          success: resolve,
          fail: reject,
        })
      })
    },
  },
  {
    title: 'getDeviceWifiActivatorStatus',
    functionName: 'getDeviceWifiActivatorStatus',
    input: true,
    placeholder: Strings.getLang('please_input_gateway_id'),
    func: (inputValue?: string) => {
      return new Promise((resolve, reject) => {
        getDeviceWifiActivatorStatus({
          deviceId: inputValue || deviceId,
          success: resolve,
          fail: reject,
        })
      })
    },
  },
  {
    title: 'startDeviceWifiActivator',
    functionName: 'startDeviceWifiActivator',
    input: true,
    placeholder: Strings.getLang('please_input_gateway_id'),
    func: (inputValue?: string) => {
      return new Promise((resolve, reject) => {
        startDeviceWifiActivator({
          deviceId: inputValue || deviceId,
          success: resolve,
          fail: reject,
        })
      })
    },
  },
  {
    title: 'onSubDeviceInfoUpdateEvent',
    functionName: 'onSubDeviceInfoUpdateEvent',
    input: true,
    placeholder: Strings.getLang('please_input_gateway_id'),
    func: () => {
      return new Promise((resolve, reject) => {
        onSubDeviceInfoUpdateEvent(_onSubDeviceInfoUpdateEvent)
        resolve(true);
      })
    },
  },
  {
    title: 'offSubDeviceInfoUpdateEvent',
    functionName: 'offSubDeviceInfoUpdateEvent',
    input: true,
    placeholder: Strings.getLang('please_input_gateway_id'),
    func: () => {
      return new Promise((resolve, reject) => {
        offSubDeviceInfoUpdateEvent(_onSubDeviceInfoUpdateEvent)
        resolve(true);
      })
    },
  },
  {
    title: 'onDirectlyConnectedSearchDeviceEvent',
    functionName: 'onDirectlyConnectedSearchDeviceEvent',
    input: true,
    placeholder: Strings.getLang('please_input_gateway_id'),
    func: () => {
      return new Promise((resolve, reject) => {
        onDirectlyConnectedSearchDeviceEvent(_onDirectlyConnectedSearchDeviceEvent)
        resolve(true);
      })
    },
  },
  {
    title: 'offDirectlyConnectedSearchDeviceEvent',
    functionName: 'offDirectlyConnectedSearchDeviceEvent',
    input: true,
    placeholder: Strings.getLang('please_input_gateway_id'),
    func: () => {
      return new Promise((resolve, reject) => {
        offDirectlyConnectedSearchDeviceEvent(_onDirectlyConnectedSearchDeviceEvent)
        resolve(true);
      })
    },
  },
]
