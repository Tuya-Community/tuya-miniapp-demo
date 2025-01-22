import Strings from '@/i18n'
import { trans } from '@/utils'
import {
  getLaunchOptionsSync,
  publishLanMessage
} from 'ray'
const {
  query: { deviceId, groupId },
} = getLaunchOptionsSync()

export default [
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
          deviceId: inputValue.deviceId || getApp().deviceId || deviceId,
          protocol: inputValue.protocol,
          message: JSON.stringify(message),
          options: {},
          success: (e) => {
            resolve(e)
          },
          fail: reject,
        })
      })
    },
  },
]
