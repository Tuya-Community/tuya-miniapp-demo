Page({
  data: {
    isShow: false,
  },
  toggleModal() {
    this.setData({
      isShow: !this.data.isShow,
    })
  },
  catchTouchmove() {
    // console.log('catch touchmove')
  },
})
