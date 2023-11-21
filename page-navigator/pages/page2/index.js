Page({
  data: {
    t: Date.now(),
  },
  onLoad(params) {
    console.log('page2 url params:', params)
    ty.setNavigationBarBack({ type: 'custom' })
    ty.onNavigationBarBack(this.hackHandle)
  },
  onUnload() {
    console.log('unload setsystem')
    ty.setNavigationBarBack({ type: 'system' })
    ty.offNavigationBarBack(this.hackHandle)
  },
  hackHandle() {
    ty.showModal({
      title: '确认要返回吗？?',
      success: function (param) {
        console.log('param.confirm', param.confirm)
        if (param.confirm) {
          ty.setNavigationBarBack({ type: 'system' })
          ty.navigateBack()
        }
      },
    })
  },
  tyBack() {
    ty.navigateBack()
  },
  tyredirect() {
    ty.redirectTo({
      url: `/pages/page3/index?t=${this.data.t}`,
      success: (result) => {},
      fail: (result) => {},
      complete: () => {},
    })
  },
  tynavigate() {
    ty.navigateTo({
      url: `/pages/page4/index?t=${this.data.t}`,
      success: (result) => {},
      fail: (result) => {},
      complete: () => {},
    })
  },
})
