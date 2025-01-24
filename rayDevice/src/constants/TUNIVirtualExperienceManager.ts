import Strings from '@/i18n'

export default [
  {
    title: 'initVirtualDevice',
    functionName: 'initVirtualDevice',
    input: true,
    placeholder: Strings.getLang('please_input_product_id'),
    func: (inputValue) => {
      return new Promise((resolve, reject) => {
        if (typeof inputValue === 'undefined') {
          reject('pid is required')
          return
        }

        ty.device.initVirtualDevice({
          pid: inputValue,
          success: resolve,
          fail: reject,
        })
      })
    },
  },
]
