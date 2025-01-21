import Strings from '@/i18n'
import {
  bluetoothCapabilityOfBLEBeacon,
  getLaunchOptionsSync,
  offLeaveBeaconFence,
  onLeaveBeaconFence,
  readBeaconFenceConfig,
  registerLeaveBeaconFenceEvent,
  startBLEScanBeacon,
  stopBLEScanBeacon,
  unregisterLeaveBeaconFenceEvent,
  writeBeaconFenceConfig,
} from 'ray'
const {
  query: { deviceId, groupId },
} = getLaunchOptionsSync()

const _onLeaveBeaconFence = (res) => {
  console.log('Beacon.onLeaveBeaconFence', res)
}

export default [
  {
    title: 'bluetoothCapabilityOfBLEBeacon',
    functionName: 'bluetoothCapabilityOfBLEBeacon',
    input: true,
    placeholder: Strings.getLang('please_input_dev_id'),
    key: 'deviceId',
    func: (inputValue) => {
      return new Promise((resolve, reject) => {
        bluetoothCapabilityOfBLEBeacon({
          deviceId: inputValue || getApp().deviceId || deviceId,
          success: resolve,
          fail: reject,
        })
      })
    },
  },
  {
    title: 'readBeaconFenceConfig',
    functionName: 'readBeaconFenceConfig',
    input: true,
    placeholder: Strings.getLang('please_input_dev_id'),
    key: 'deviceId',
    func: (inputValue) => {
      return new Promise((resolve, reject) => {
        readBeaconFenceConfig({
          deviceId: inputValue || getApp().deviceId || deviceId,
          success: resolve,
          fail: reject,
        })
      })
    },
  },
  {
    title: 'writeBeaconFenceConfig',
    functionName: 'writeBeaconFenceConfig',
    input: true,
    keys: [
      'deviceId',
      'beaconFenceRssi',
      'isOpenEventWhenApproachingBeaconFence',
      'isOpenEventWhenLeaveBeaconFence',
      'isOpenNotifyWhenLeaveBeaconFence',
    ],
    placeholder: [
      'deviceId',
      'beaconFenceRssi',
      'isOpenEventWhenApproachingBeaconFence',
      'isOpenEventWhenLeaveBeaconFence',
      'isOpenNotifyWhenLeaveBeaconFence',
    ],
    dataType: {
      deviceId: 'string',
      beaconFenceRssi: 'number',
      isOpenEventWhenApproachingBeaconFence: 'boolean',
      isOpenEventWhenLeaveBeaconFence: 'boolean',
      isOpenNotifyWhenLeaveBeaconFence: 'boolean',
    },
    func: (inputValue) => {
      return new Promise((resolve, reject) => {
        writeBeaconFenceConfig({
          deviceId: inputValue.deviceId || getApp().deviceId || deviceId,
          beaconFenceRssi: +inputValue.beaconFenceRssi,
          isOpenEventWhenApproachingBeaconFence: inputValue.isOpenEventWhenApproachingBeaconFence,
          isOpenEventWhenLeaveBeaconFence: inputValue.isOpenEventWhenLeaveBeaconFence,
          isOpenNotifyWhenLeaveBeaconFence: inputValue.isOpenNotifyWhenLeaveBeaconFence,
          success: resolve,
          fail: reject,
        })
      })
    },
  },
  {
    title: 'startBLEScanBeacon',
    functionName: 'startBLEScanBeacon',
    input: true,
    placeholder: Strings.getLang('please_input_dev_id'),
    key: 'deviceId',
    func: (inputValue) => {
      return new Promise((resolve, reject) => {
        startBLEScanBeacon({
          deviceId: inputValue || getApp().deviceId || deviceId,
          success: resolve,
          fail: reject,
        })
      })
    },
  },
  {
    title: 'stopBLEScanBeacon',
    functionName: 'stopBLEScanBeacon',
    input: true,
    placeholder: Strings.getLang('please_input_dev_id'),
    key: 'deviceId',
    func: (inputValue) => {
      return new Promise((resolve, reject) => {
        stopBLEScanBeacon({
          deviceId: inputValue || getApp().deviceId || deviceId,
          success: resolve,
          fail: reject,
        })
      })
    },
  },
  {
    title: 'registerLeaveBeaconFenceEvent',
    functionName: 'registerLeaveBeaconFenceEvent',
    input: true,
    placeholder: Strings.getLang('please_input_dev_id'),
    key: 'deviceId',
    func: (inputValue) => {
      return new Promise((resolve, reject) => {
        registerLeaveBeaconFenceEvent({
          deviceId: inputValue || getApp().deviceId || deviceId,
          success: resolve,
          fail: reject,
        })
      })
    },
  },
  {
    title: 'unregisterLeaveBeaconFenceEvent',
    functionName: 'unregisterLeaveBeaconFenceEvent',
    input: true,
    placeholder: Strings.getLang('please_input_dev_id'),
    key: 'deviceId',
    func: (inputValue) => {
      return new Promise((resolve, reject) => {
        unregisterLeaveBeaconFenceEvent({
          deviceId: inputValue || getApp().deviceId || deviceId,
          success: resolve,
          fail: reject,
        })
      })
    },
  },
  {
    title: 'onLeaveBeaconFence',
    functionName: 'onLeaveBeaconFence',
    func: (inputValue) => {
      return new Promise((resolve, reject) => {
        onLeaveBeaconFence(_onLeaveBeaconFence)
        resolve(true)
      })
    },
  },
  {
    title: 'offLeaveBeaconFence',
    functionName: 'offLeaveBeaconFence',
    func: (inputValue) => {
      return new Promise((resolve, reject) => {
        offLeaveBeaconFence(_onLeaveBeaconFence)
        resolve(true)
      })
    },
  },
]
