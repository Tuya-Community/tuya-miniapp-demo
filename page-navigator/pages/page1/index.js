Page({
  data: {
    t: Date.now(),
  },
  onLoad(params) {
    console.log('page1 url params:', params)
  },
  tynavigateTo: function () {
    ty.navigateTo({
      url: `/pages/page2/index?t=${this.data.t}`,
      success: (result) => {},
      fail: (result) => {},
      complete: () => {},
    })
  },
})
