import Strings from '@/i18n'
import { trans } from '@/utils'
import {
  bluetoothCapabilityIsSupport,
  bluetoothIsPowerOn,
  cancelBLEFileTransfer,
  connectBLEDevice,
  connectBluetoothDevice,
  directConnectBLEDevice,
  disconnectBLEDevice,
  disconnectBluetoothDevice,
  getBLEDeviceRSSI,
  getBLEOnlineState,
  getLaunchOptionsSync,
  offBLEBigDataChannelDeviceToAppSuccess,
  offBLEBigDataChannelProgressEvent,
  offBLEBigDataChannelUploadCloudProgress,
  offBLEConnectStatusChange,
  offBLEScanBindDevice,
  offBLETransparentDataReport,
  offFileTransferProgress,
  onBLEBigDataChannelDeviceToAppSuccess,
  onBLEBigDataChannelProgressEvent,
  onBLEBigDataChannelUploadCloudProgress,
  onBLEConnectStatusChange,
  onBLEScanBindDevice,
  onBLETransparentDataReport,
  onFileTransferProgress,
  postBLEBigDataChannelWithProgress,
  postBLEFileTransfer,
  publishBLETransparentData,
  startBLEScan,
  startBLEScanBindDevice,
  startBLEScanSync,
  stopBLEScan,
  stopBLEScanSync,
  subscribeBLEConnectStatus,
  subscribeBLETransparentDataReport,
  unsubscribeBLEConnectStatus,
  unsubscribeBLETransparentDataReport,
} from 'ray'
const {
  query: { deviceId, groupId },
} = getLaunchOptionsSync()

const _onBLEBigDataChannelDeviceToAppSuccess = (res) => {
  console.log('SingleBle.onBLEBigDataChannelDeviceToAppSuccess', res)
}

const _onBLEBigDataChannelUploadCloudProgress = (res) => {
  console.log('SingleBle.onBLEBigDataChannelUploadCloudProgress', res)
}

const _onBLEBigDataChannelProgressEvent = (res) => {
  console.log('SingleBle.onBLEBigDataChannelProgressEvent', res)
}

const _onBLEConnectStatusChange = (res) => {
  console.log('SingleBle.onBLEConnectStatusChange', res)
}

const _onBLEScanBindDevice = (res) => {
  console.log('SingleBle.onBLEScanBindDevice', res)
}

const _onBLETransparentDataReport = (res) => {
  console.log('SingleBle.onBLETransparentDataReport', res)
}

const _onFileTransferProgress = (res) => {
  console.log('SingleBle.onFileTransferProgress', res)
}

export default [
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
          complete: reject,
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
    title: 'offBLEBigDataChannelDeviceToAppSuccess',
    functionName: 'offBLEBigDataChannelDeviceToAppSuccess',
    func: (inputValue) => {
      return new Promise((resolve, reject) => {
        offBLEBigDataChannelDeviceToAppSuccess(_onBLEBigDataChannelDeviceToAppSuccess)
        resolve(true)
      })
    },
  },

  {
    title: 'offBLEBigDataChannelProgressEvent',
    functionName: 'offBLEBigDataChannelProgressEvent',
    func: (inputValue) => {
      return new Promise((resolve, reject) => {
        offBLEBigDataChannelProgressEvent(_onBLEBigDataChannelProgressEvent)
        resolve(true)
      })
    },
  },

  {
    title: 'offBLEBigDataChannelUploadCloudProgress',
    functionName: 'offBLEBigDataChannelUploadCloudProgress',
    func: (inputValue) => {
      return new Promise((resolve, reject) => {
        offBLEBigDataChannelUploadCloudProgress(_onBLEBigDataChannelUploadCloudProgress)
        resolve(true)
      })
    },
  },

  {
    title: 'offBLEConnectStatusChange',
    functionName: 'offBLEConnectStatusChange',
    func: (inputValue) => {
      return new Promise((resolve, reject) => {
        offBLEConnectStatusChange(_onBLEConnectStatusChange)
        resolve(true)
      })
    },
  },

  {
    title: 'offBLEScanBindDevice',
    functionName: 'offBLEScanBindDevice',
    func: (inputValue) => {
      return new Promise((resolve, reject) => {
        offBLEScanBindDevice(_onBLEScanBindDevice)
        resolve(true)
      })
    },
  },

  {
    title: 'offBLETransparentDataReport',
    functionName: 'offBLETransparentDataReport',
    func: (inputValue) => {
      return new Promise((resolve, reject) => {
        offBLETransparentDataReport(_onBLETransparentDataReport)
        resolve(true)
      })
    },
  },

  {
    title: 'onBLEBigDataChannelDeviceToAppSuccess',
    functionName: 'onBLEBigDataChannelDeviceToAppSuccess',
    func: (inputValue) => {
      return new Promise((resolve, reject) => {
        onBLEBigDataChannelDeviceToAppSuccess(_onBLEBigDataChannelDeviceToAppSuccess)
        resolve(true)
      })
    },
  },

  {
    title: 'onBLEBigDataChannelProgressEvent',
    functionName: 'onBLEBigDataChannelProgressEvent',
    func: (inputValue) => {
      return new Promise((resolve, reject) => {
        onBLEBigDataChannelProgressEvent(_onBLEBigDataChannelProgressEvent)
        resolve(true)
      })
    },
  },

  {
    title: 'onBLEBigDataChannelUploadCloudProgress',
    functionName: 'onBLEBigDataChannelUploadCloudProgress',
    func: (inputValue) => {
      return new Promise((resolve, reject) => {
        onBLEBigDataChannelUploadCloudProgress(_onBLEBigDataChannelUploadCloudProgress)
        resolve(true)
      })
    },
  },

  {
    title: 'onBLEConnectStatusChange',
    functionName: 'onBLEConnectStatusChange',
    func: (inputValue) => {
      return new Promise((resolve, reject) => {
        onBLEConnectStatusChange(_onBLEConnectStatusChange)
        resolve(true)
      })
    },
  },
  {
    title: 'onBLEScanBindDevice',
    functionName: 'onBLEScanBindDevice',
    func: (inputValue) => {
      return new Promise((resolve, reject) => {
        onBLEScanBindDevice(_onBLEScanBindDevice)
        resolve(true)
      })
    },
  },

  {
    title: 'onBLETransparentDataReport',
    functionName: 'onBLETransparentDataReport',
    func: (inputValue) => {
      return new Promise((resolve, reject) => {
        onBLETransparentDataReport(_onBLETransparentDataReport)
        resolve(true)
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
    title: 'offFileTransferProgress',
    functionName: 'offFileTransferProgress',
    func: (inputValue) => {
      return new Promise((resolve, reject) => {
        offFileTransferProgress(_onFileTransferProgress)
        resolve(true)
      })
    },
  },

  {
    title: 'onFileTransferProgress',
    functionName: 'onFileTransferProgress',
    func: (inputValue) => {
      return new Promise((resolve, reject) => {
        onFileTransferProgress(_onFileTransferProgress)
        resolve(true)
      })
    },
  },
]
