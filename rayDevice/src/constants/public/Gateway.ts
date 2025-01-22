import Strings from '@/i18n'
import {
  getLaunchOptionsSync,
  openDeviceGWSubHelpList,
  openDeviceGWSubSearchConfigure
} from 'ray'
const {
  query: { deviceId, groupId },
} = getLaunchOptionsSync()

export default [
  {
    title: 'openDeviceGWSubHelpList',
    functionName: 'openDeviceGWSubHelpList',
    input: true,
    placeholder: Strings.getLang('please_input_gateway_id'),
    func: (inputValue) => {
      return new Promise((resolve, reject) => {
        openDeviceGWSubHelpList({
          gwId: inputValue || deviceId
        }).then(resolve).catch(reject)
      })
    },
  },
  {
    title: 'openDeviceGWSubSearchConfigure',
    functionName: 'openDeviceGWSubSearchConfigure',
    input: true,
    placeholder: Strings.getLang('please_input_gateway_id'),
    func: (inputValue) => {
      return new Promise((resolve, reject) => {
        openDeviceGWSubSearchConfigure({
          gwId: inputValue || deviceId
        }).then(resolve).catch(reject)
      })
    },
  }
]
