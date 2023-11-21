Page({
  data: {
    navTop: 0,
  },
  onLoad: function () {
    ty.getSystemInfo({
      success: (result) => {
        console.log(result.safeArea)
        this.setData({
          navTop: result.safeArea.top,
        })
      },
      fail: (res) => {},
      complete: (res) => {},
    })
  },
})
