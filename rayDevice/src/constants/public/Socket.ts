import Strings from '@/i18n'
import { trans } from '@/utils'
import {
  getLaunchOptionsSync,
  offSocketMessageReceived,
  onSocketMessageReceived,
  publishSocketMessage
} from 'ray'
const {
  query: { deviceId, groupId },
} = getLaunchOptionsSync()

const _onSocketMessageReceived = (event) => {
  console.log('Socket.onSocketMessageReceived', event)
}

export default [
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
          deviceId: inputValue.deviceId || getApp().deviceId || deviceId,
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
]
