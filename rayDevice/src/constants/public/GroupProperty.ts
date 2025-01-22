import Strings from '@/i18n'
import {
  getGroupProperty,
  getLaunchOptionsSync,
  setGroupProperty
} from 'ray'
const {
  query: { deviceId, groupId },
} = getLaunchOptionsSync()

export default [
  {
    title: 'getGroupProperty',
    functionName: 'getGroupProperty',
    input: true,
    placeholder: Strings.getLang('please_input_group_id'),
    func: (inputValue) => {
      return new Promise((resolve, reject) => {
        getGroupProperty({
          groupId: inputValue || groupId,
          success: resolve,
          fail: reject,
        })
      })
    },
  },
  {
    title: 'setGroupProperty',
    functionName: 'setGroupProperty',
    input: true,
    keys: ['groupId', 'code', 'value'],
    placeholder: [
      Strings.getLang('please_input_group_id'),
      Strings.getLang('please_input_code'),
      Strings.getLang('please_input_value'),
    ],
    func: (inputValue) => {
      return new Promise((resolve, reject) => {
        setGroupProperty({
          groupId: inputValue.groupId || getApp().deviceId || groupId,
          code: inputValue.code,
          value: inputValue.value,
          success: resolve,
          fail: reject,
        })
      })
    },
  },
]
