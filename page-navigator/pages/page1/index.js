Page({
  data: {
    t: Date.now(),
    message: '',
  },

  // onLoad(params) {
  //   // console.log('page1 url params:', params)
  // },

  tynavigateTo: function () {
    ty.navigateTo({
      url: `/pages/page2/index?t=${this.data.t}`,
    })
  },

  // 跳转去小程序
  tynavigateToMiniApp: function () {
    let self = this
    ty.navigateToMiniProgram({
      appId: 'tyzgdqm3vbn6zsbjek',
      envVersion: 'release', // release trial develop
      extraData: {
        name: 'bob',
        age: 18,
      },
      events: {
        // 提供目标小程序可调用的事件
        acceptDataByChild: (res) => {
          console.log('acceptDataByChild', res.data)
          self.setData({
            message: res.data,
          })
        },
      },
      success(res) {
        if (res.appChannel) {
          // 直接在success里发送事件可能会出现子小程序还未加载完成导致的事件接收不到。
          // 建议隔一段事件后再重新发送一次事件
          res.appChannel.emit('emitDataToChild', { data: 'hello1' })
          setTimeout(() => {
            res.appChannel.emit('emitDataToChild', { data: 'hello2' })
          }, 1000)
        } else {
          ty.showToast({ title: '不存在 res.appChannel' })
        }
      },
    })
  },
})
