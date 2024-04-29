Page({
  data: {
    message: '',
  },
  onLoad() {
    let self = this
    const appChannel = self.getOpenerAppChannel()
    // 监听小程序 A 的事件调用
    appChannel.on('emitDataToChild', (res) => {
      console.log('小程序 A 发来的数据：', res.data)
      self.setData({
        message: res.data,
      })
    })

    // 调用小程序 A 调用 navigateToMiniProgram 时 events 中声明的事件
    appChannel.emit('acceptDataByChild', { data: '数据：从小程序B发来' })
  },
  close() {
    ty.exitMiniProgram()
  },
  back() {
    ty.navigateBackMiniProgram({})
  },
})
