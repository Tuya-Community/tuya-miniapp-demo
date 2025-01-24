import Strings from '@/i18n'
import { trans } from '@/utils'
import {
  bluetoothCapabilityIsSupport,
  bluetoothCapabilityOfBLEBeacon,
  bluetoothIsPowerOn,
  cancelBLEFileTransfer,
  connectBLEDevice,
  connectBluetoothDevice,
  connectBTBond,
  directConnectBLEDevice,
  disconnectBLEDevice,
  disconnectBluetoothDevice,
  disconnectBTBond,
  getBLEDeviceRSSI,
  getBLEOnlineState,
  getBTDeviceInfo,
  getEncryptLocalKeyWithData,
  getLaunchOptionsSync,
  postBLEBigDataChannelWithProgress,
  postBLEFileTransfer,
  publishBLETransparentData,
  readBeaconFenceConfig,
  registerLeaveBeaconFenceEvent,
  startBLEMeshLowPowerConnection,
  startBLEScan,
  startBLEScanBeacon,
  startBLEScanBindDevice,
  startBLEScanSync,
  stopBLEMeshLowPowerConnection,
  stopBLEScan,
  stopBLEScanBeacon,
  stopBLEScanSync,
  subscribeBLEConnectStatus,
  subscribeBLETransparentDataReport,
  unregisterLeaveBeaconFenceEvent,
  unsubscribeBLEConnectStatus,
  unsubscribeBLETransparentDataReport,
  writeBeaconFenceConfig,
  getApp,
} from '@ray-js/ray'

const {
  query: { deviceId, groupId },
} = getLaunchOptionsSync()

const _onLeaveBeaconFence = (res) => {
  console.log('onLeaveBeaconFence', res)
}

const _onFileTransferProgress = (res) => {
  console.log('onFileTransferProgress', res)
}

const _onBLEConnectStatusChange = (res) => {
  console.log('onBLEConnectStatusChange', res)
}

const _onBLETransparentDataReport = (res) => {
  console.log('onBLETransparentDataReport', res)
}

const _onBLEBigDataChannelProgressEvent = (res) => {
  console.log('onBLEBigDataChannelProgressEvent', res)
}

const _onBLEScanBindDevice = (res) => {
  console.log('onBLEScanBindDevice', res)
}

const _onBLEBigDataChannelDeviceToAppSuccess = (res) => {
  console.log('onBLEBigDataChannelDeviceToAppSuccess', res)
}

const _onBLEBigDataChannelUploadCloudProgress = (res) => {
  console.log('onBLEBigDataChannelUploadCloudProgress', res)
}

export default [
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
    title: 'disconnectBTBond',
    functionName: 'disconnectBTBond',
    input: true,
    placeholder: Strings.getLang('please_input_mac'),
    func: (inputValue) => {
      return new Promise((resolve, reject) => {
        disconnectBTBond({
          mac: inputValue,
          success: resolve,
          fail: reject,
        })
      })
    },
  },
  {
    title: 'connectBTBond',
    functionName: 'connectBTBond',
    input: true,
    placeholder: Strings.getLang('please_input_mac'),
    func: (inputValue) => {
      return new Promise((resolve, reject) => {
        connectBTBond({
          mac: inputValue,
          success: resolve,
          fail: reject,
        })
      })
    },
  },
  {
    title: 'cancelBLEFileTransfer',
    functionName: 'cancelBLEFileTransfer',
    input: true,
    keys: ['deviceId', 'fileId', 'fileIdentifier', 'fileVersion', 'filePath'],
    placeholder: ['deviceId', 'fileId', 'fileIdentifier', 'fileVersion', 'filePath'],
    func: (inputValue) => {
      return new Promise((resolve, reject) => {
        cancelBLEFileTransfer({
          deviceId: inputValue.deviceId || getApp().deviceId || deviceId,
          fileId: inputValue.fileId,
          fileIdentifier: inputValue.fileIdentifier,
          fileVersion: +inputValue.fileVersion,
          filePath: inputValue.filePath,

          success: resolve,
          fail: reject,
        })
      })
    },
  },
  {
    title: 'postBLEFileTransfer',
    functionName: 'postBLEFileTransfer',
    input: true,
    keys: ['deviceId', 'fileId', 'fileIdentifier', 'fileVersion', 'filePath'],
    placeholder: ['deviceId', 'fileId', 'fileIdentifier', 'fileVersion', 'filePath'],
    func: (inputValue) => {
      return new Promise((resolve, reject) => {
        postBLEFileTransfer({
          deviceId: inputValue.deviceId || getApp().deviceId || deviceId,
          fileId: inputValue.fileId,
          fileIdentifier: inputValue.fileIdentifier,
          fileVersion: +inputValue.fileVersion,
          filePath: inputValue.filePath,
          success: resolve,
          fail: reject,
        })
      })
    },
  },
  {
    title: 'getBLEDeviceRSSI',
    functionName: 'getBLEDeviceRSSI',
    input: true,
    placeholder: Strings.getLang('please_input_dev_id'),
    key: 'deviceId',
    func: (inputValue) => {
      return new Promise((resolve, reject) => {
        getBLEDeviceRSSI({
          deviceId: inputValue || getApp().deviceId || deviceId,
          success: resolve,
          fail: reject,
        })
      })
    },
  },
  {
    title: 'subscribeBLEConnectStatus',
    functionName: 'subscribeBLEConnectStatus',
    input: true,
    placeholder: Strings.getLang('please_input_dev_id'),
    key: 'deviceId',
    func: (inputValue) => {
      return new Promise((resolve, reject) => {
        subscribeBLEConnectStatus({
          deviceId: inputValue || getApp().deviceId || deviceId,
          success: resolve,
          fail: reject,
        })
      })
    },
  },
  {
    title: 'unsubscribeBLEConnectStatus',
    functionName: 'unsubscribeBLEConnectStatus',
    input: true,
    placeholder: Strings.getLang('please_input_dev_id'),
    key: 'deviceId',
    func: (inputValue) => {
      return new Promise((resolve, reject) => {
        unsubscribeBLEConnectStatus({
          deviceId: inputValue || getApp().deviceId || deviceId,
          success: resolve,
          fail: reject,
        })
      })
    },
  },
  {
    title: 'connectBLEDevice',
    functionName: 'connectBLEDevice',
    input: true,
    placeholder: Strings.getLang('please_input_dev_id'),
    key: 'deviceId',
    func: (inputValue) => {
      return new Promise((resolve, reject) => {
        connectBLEDevice({
          deviceId: inputValue || getApp().deviceId || deviceId,
          success: resolve,
          fail: reject,
        })
      })
    },
  },
  {
    title: 'directConnectBLEDevice',
    functionName: 'directConnectBLEDevice',
    input: true,
    placeholder: Strings.getLang('please_input_dev_id'),
    key: 'deviceId',
    func: (inputValue) => {
      return new Promise((resolve, reject) => {
        directConnectBLEDevice({
          deviceId: inputValue || getApp().deviceId || deviceId,
          success: resolve,
          fail: reject,
        })
      })
    },
  },
  {
    title: 'disconnectBLEDevice',
    functionName: 'disconnectBLEDevice',
    input: true,
    placeholder: Strings.getLang('please_input_dev_id'),
    key: 'deviceId',
    func: (inputValue) => {
      return new Promise((resolve, reject) => {
        disconnectBLEDevice({
          deviceId: inputValue || getApp().deviceId || deviceId,
          success: resolve,
          fail: reject,
        })
      })
    },
  },
  {
    title: 'getBLEOnlineState',
    functionName: 'getBLEOnlineState',
    input: true,
    placeholder: Strings.getLang('please_input_dev_id'),
    key: 'deviceId',
    func: (inputValue) => {
      return new Promise((resolve, reject) => {
        getBLEOnlineState({
          deviceId: inputValue || getApp().deviceId || deviceId,
          success: resolve,
          fail: reject,
        })
      })
    },
  },
  {
    title: 'subscribeBLETransparentDataReport',
    functionName: 'subscribeBLETransparentDataReport',
    input: true,
    placeholder: Strings.getLang('please_input_dev_id'),
    key: 'deviceId',
    func: (inputValue) => {
      return new Promise((resolve, reject) => {
        subscribeBLETransparentDataReport({
          deviceId: inputValue || getApp().deviceId || deviceId,
          success: resolve,
          fail: reject,
        })
      })
    },
  },
  {
    title: 'unsubscribeBLETransparentDataReport',
    functionName: 'unsubscribeBLETransparentDataReport',
    input: true,
    placeholder: Strings.getLang('please_input_dev_id'),
    key: 'deviceId',
    func: (inputValue) => {
      return new Promise((resolve, reject) => {
        unsubscribeBLETransparentDataReport({
          deviceId: inputValue || getApp().deviceId || deviceId,
          success: resolve,
          fail: reject,
        })
      })
    },
  },

  {
    title: 'publishBLETransparentData',
    functionName: 'publishBLETransparentData',
    input: true,
    keys: ['deviceId', 'data'],
    placeholder: ['deviceId', 'data'],
    func: (inputValue) => {
      return new Promise((resolve, reject) => {
        publishBLETransparentData({
          deviceId: inputValue.deviceId || getApp().deviceId || deviceId,
          data: inputValue.data,
          success: resolve,
          fail: reject,
        })
      })
    },
  },
  {
    title: 'getEncryptLocalKeyWithData',
    functionName: 'getEncryptLocalKeyWithData',
    input: true,
    keys: ['deviceId', 'keyDeviceId'],
    placeholder: ['deviceId', 'keyDeviceId'],
    func: (inputValue) => {
      return new Promise((resolve, reject) => {
        getEncryptLocalKeyWithData({
          deviceId: inputValue.deviceId || getApp().deviceId || deviceId,
          keyDeviceId: inputValue.keyDeviceId,
          success: resolve,
          fail: reject,
        })
      })
    },
  },
  {
    title: 'postBLEBigDataChannelWithProgress',
    functionName: 'postBLEBigDataChannelWithProgress',
    input: true,
    keys: ['deviceId', 'requestParams'],
    placeholder: ['deviceId', 'requestParams'],
    func: (inputValue) => {
      return new Promise((resolve, reject) => {
        postBLEBigDataChannelWithProgress({
          deviceId: inputValue.deviceId || getApp().deviceId || deviceId,
          requestParams: trans(inputValue.requestParams),
          success: resolve,
          fail: reject,
        })
      })
    },
  },
  {
    title: 'startBLEMeshLowPowerConnection',
    functionName: 'startBLEMeshLowPowerConnection',
    input: true,
    placeholder: Strings.getLang('please_input_dev_id'),
    key: 'deviceId',
    func: (inputValue) => {
      return new Promise((resolve, reject) => {
        startBLEMeshLowPowerConnection({
          deviceId: inputValue || getApp().deviceId || deviceId,
          success: resolve,
          fail: reject,
        })
      })
    },
  },
  {
    title: 'stopBLEMeshLowPowerConnection',
    functionName: 'stopBLEMeshLowPowerConnection',
    input: true,
    placeholder: Strings.getLang('please_input_dev_id'),
    key: 'deviceId',
    func: (inputValue) => {
      return new Promise((resolve, reject) => {
        stopBLEMeshLowPowerConnection({
          deviceId: inputValue || getApp().deviceId || deviceId,
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
    title: 'bluetoothIsPowerOn',
    functionName: 'bluetoothIsPowerOn',
    func: (inputValue) => {
      return new Promise((resolve, reject) => {
        bluetoothIsPowerOn({
          success: resolve,
          fail: reject,
        })
      })
    },
  },
  {
    title: 'startBLEScanBindDevice',
    functionName: 'startBLEScanBindDevice',
    input: true,
    keys: ['interval', 'scanType'],
    placeholder: ['interval', 'scanType'],
    func: (inputValue) => {
      return new Promise((resolve, reject) => {
        startBLEScanBindDevice({
          interval: +inputValue.interval,
          scanType: inputValue.scanType,
          success: resolve,
          fail: reject,
        })
      })
    },
  },
  {
    title: 'startBLEScan',
    functionName: 'startBLEScan',
    func: (inputValue) => {
      return new Promise((resolve, reject) => {
        startBLEScan({
          success: resolve,
          fail: reject,
        })
      })
    },
  },
  {
    title: 'startBLEScanSync',
    functionName: 'startBLEScanSync',
    func: (inputValue) => {
      return new Promise((resolve, reject) => {
        try {
          startBLEScanSync()
          resolve(undefined)
        } catch (error) {
          reject(error)
        }
      })
    },
  },

  {
    title: 'stopBLEScan',
    functionName: 'stopBLEScan',
    func: (inputValue) => {
      return new Promise((resolve, reject) => {
        stopBLEScan({
          success: resolve,
          fail: reject,
        })
      })
    },
  },
  {
    title: 'stopBLEScanSync',
    functionName: 'stopBLEScanSync',
    func: (inputValue) => {
      return new Promise((resolve, reject) => {
        try {
          stopBLEScanSync()
          resolve(undefined)
        } catch (error) {
          reject(error)
        }
      })
    },
  },
  {
    title: 'bluetoothCapabilityIsSupport',
    functionName: 'bluetoothCapabilityIsSupport',
    input: true,
    keys: ['deviceId', 'capability'],
    placeholder: ['deviceId', 'capability'],
    func: (inputValue) => {
      return new Promise((resolve, reject) => {
        bluetoothCapabilityIsSupport({
          deviceId: inputValue.deviceId || getApp().deviceId || deviceId,
          capability: +inputValue.capability,
          success: resolve,
          fail: reject,
        })
      })
    },
  },

  {
    title: 'getBTDeviceInfo',
    functionName: 'getBTDeviceInfo',
    input: true,
    placeholder: Strings.getLang('please_input_dev_id'),
    key: 'deviceId',
    func: (inputValue) => {
      return new Promise((resolve, reject) => {
        getBTDeviceInfo({
          deviceId: inputValue || getApp().deviceId || deviceId,
          success: resolve,
          fail: reject,
        })
      })
    },
  },
  {
    title: 'connectBluetoothDevice',
    functionName: 'connectBluetoothDevice',
    input: true,
    keys: ['deviceId', 'timeoutMillis', 'souceType', 'connectType'],
    placeholder: ['deviceId', 'timeoutMillis', 'souceType', 'connectType'],
    func: (inputValue) => {
      return new Promise((resolve, reject) => {
        connectBluetoothDevice({
          devId: inputValue.deviceId || getApp().deviceId || deviceId,
          timeoutMillis: inputValue.timeoutMillis || 15000,
          souceType: +inputValue.souceType || 0,
          connectType: +inputValue.connectType || 0,
          success: resolve,
          fail: reject,
          complete: reject
        })
      })
    },
  },
  {
    title: 'disconnectBluetoothDevice',
    functionName: 'disconnectBluetoothDevice',
    input: true,
    placeholder: Strings.getLang('please_input_dev_id'),
    key: 'deviceId',
    func: (inputValue) => {
      return new Promise((resolve, reject) => {
        disconnectBluetoothDevice({
          devId: inputValue || getApp().deviceId || deviceId,
          success: resolve,
          fail: reject,
        })
      })
    },
  },
  {
    title: 'activeDeviceExtendModule',
    functionName: 'activeDeviceExtendModule',
    input: true,
    keys: ['deviceId', 'ssid', 'password', 'activeType'],
    placeholder: ['deviceId', 'ssid', 'password', 'activeType'],
    func: (inputValue) => {
      return new Promise((resolve, reject) => {
        ty.device.activeDeviceExtendModule({
          deviceId: inputValue.deviceId || getApp().deviceId || deviceId,
          ssid: inputValue.ssid,
          password: inputValue.password,
          activeType: +inputValue.activeType,
          success: resolve,
          fail: reject,
        })
      })
    },
  },
  {
    title: 'updateMeshProxyState',
    functionName: 'updateMeshProxyState',
    input: true,
    keys: ['deviceId', 'isOpen'],
    placeholder: ['deviceId', 'isOpen'],
    dataType: {
      isOpen: 'boolean',
    },
    func: (inputValue) => {
      return new Promise((resolve, reject) => {
        ty.device.updateMeshProxyState({
          deviceId: inputValue.deviceId || getApp().deviceId || deviceId,
          isOpen: inputValue.isOpen,
          success: resolve,
          fail: reject,
        })
      })
    },
  },
  {
    title: 'updateMeshRelayState',
    functionName: 'updateMeshRelayState',
    input: true,
    keys: ['deviceId', 'isOpen'],
    placeholder: ['deviceId', 'isOpen'],
    dataType: {
      isOpen: 'boolean',
    },
    func: (inputValue) => {
      return new Promise((resolve, reject) => {
        ty.device.updateMeshProxyState({
          deviceId: inputValue.deviceId || getApp().deviceId || deviceId,
          isOpen: inputValue.isOpen,
          success: resolve,
          fail: reject,
        })
      })
    },
  },
  {
    title: 'recordBleConnectEvent',
    functionName: 'recordBleConnectEvent',
    input: true,
    keys: ['deviceId', 'src', 'actId'],
    placeholder: ['deviceId', 'src', 'actId'],
    func: (inputValue) => {
      return new Promise((resolve, reject) => {
        ty.device.recordBleConnectEvent({
          deviceId: inputValue.deviceId || getApp().deviceId || deviceId,
          src: inputValue.src,
          actId: inputValue.actId,
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
        ty.device.onLeaveBeaconFence(_onLeaveBeaconFence)
        resolve(true)
      })
    },
  },
  {
    title: 'offLeaveBeaconFence',
    functionName: 'offLeaveBeaconFence',
    func: (inputValue) => {
      return new Promise((resolve, reject) => {
        ty.device.offLeaveBeaconFence(_onLeaveBeaconFence)
        resolve(true)
      })
    },
  },
  {
    title: 'onFileTransferProgress',
    functionName: 'onFileTransferProgress',
    func: (inputValue) => {
      return new Promise((resolve, reject) => {
        ty.device.onFileTransferProgress(_onFileTransferProgress)
        resolve(true)
      })
    },
  },
  {
    title: 'offFileTransferProgress',
    functionName: 'offFileTransferProgress',
    func: (inputValue) => {
      return new Promise((resolve, reject) => {
        ty.device.offFileTransferProgress(_onFileTransferProgress)
        resolve(true)
      })
    },
  },
  {
    title: 'onBLEConnectStatusChange',
    functionName: 'onBLEConnectStatusChange',
    func: (inputValue) => {
      return new Promise((resolve, reject) => {
        ty.device.onBLEConnectStatusChange(_onBLEConnectStatusChange)
        resolve(true)
      })
    },
  },
  {
    title: 'offBLEConnectStatusChange',
    functionName: 'offBLEConnectStatusChange',
    func: (inputValue) => {
      return new Promise((resolve, reject) => {
        ty.device.offBLEConnectStatusChange(_onBLEConnectStatusChange)
        resolve(true)
      })
    },
  },
  {
    title: 'onBLETransparentDataReport',
    functionName: 'onBLETransparentDataReport',
    func: (inputValue) => {
      return new Promise((resolve, reject) => {
        ty.device.onBLETransparentDataReport(_onBLETransparentDataReport)
        resolve(true)
      })
    },
  },
  {
    title: 'offBLETransparentDataReport',
    functionName: 'offBLETransparentDataReport',
    func: (inputValue) => {
      return new Promise((resolve, reject) => {
        ty.device.offBLETransparentDataReport(_onBLETransparentDataReport)
        resolve(true)
      })
    },
  },
  {
    title: 'onBLEBigDataChannelProgressEvent',
    functionName: 'onBLEBigDataChannelProgressEvent',
    func: (inputValue) => {
      return new Promise((resolve, reject) => {
        ty.device.onBLEBigDataChannelProgressEvent(_onBLEBigDataChannelProgressEvent)
        resolve(true)
      })
    },
  },
  {
    title: 'offBLEBigDataChannelProgressEvent',
    functionName: 'offBLEBigDataChannelProgressEvent',
    func: (inputValue) => {
      return new Promise((resolve, reject) => {
        ty.device.offBLEBigDataChannelProgressEvent(_onBLEBigDataChannelProgressEvent)
        resolve(true)
      })
    },
  },
  {
    title: 'onBLEScanBindDevice',
    functionName: 'onBLEScanBindDevice',
    func: (inputValue) => {
      return new Promise((resolve, reject) => {
        ty.device.onBLEScanBindDevice(_onBLEScanBindDevice)
        resolve(true)
      })
    },
  },
  {
    title: 'offBLEScanBindDevice',
    functionName: 'offBLEScanBindDevice',
    func: (inputValue) => {
      return new Promise((resolve, reject) => {
        ty.device.offBLEScanBindDevice(_onBLEScanBindDevice)
        resolve(true)
      })
    },
  },
  {
    title: 'onBLEBigDataChannelDeviceToAppSuccess',
    functionName: 'onBLEBigDataChannelDeviceToAppSuccess',
    func: (inputValue) => {
      return new Promise((resolve, reject) => {
        ty.device.onBLEBigDataChannelDeviceToAppSuccess(_onBLEBigDataChannelDeviceToAppSuccess)
        resolve(true)
      })
    },
  },
  {
    title: 'offBLEBigDataChannelDeviceToAppSuccess',
    functionName: 'offBLEBigDataChannelDeviceToAppSuccess',
    func: (inputValue) => {
      return new Promise((resolve, reject) => {
        ty.device.offBLEBigDataChannelDeviceToAppSuccess(_onBLEBigDataChannelDeviceToAppSuccess)
        resolve(true)
      })
    },
  },
  {
    title: 'onBLEBigDataChannelUploadCloudProgress',
    functionName: 'onBLEBigDataChannelUploadCloudProgress',
    func: (inputValue) => {
      return new Promise((resolve, reject) => {
        ty.device.onBLEBigDataChannelUploadCloudProgress(_onBLEBigDataChannelUploadCloudProgress)
        resolve(true)
      })
    },
  },
  {
    title: 'offBLEBigDataChannelUploadCloudProgress',
    functionName: 'offBLEBigDataChannelUploadCloudProgress',
    func: (inputValue) => {
      return new Promise((resolve, reject) => {
        ty.device.offBLEBigDataChannelUploadCloudProgress(_onBLEBigDataChannelUploadCloudProgress)
        resolve(true)
      })
    },
  },
]
