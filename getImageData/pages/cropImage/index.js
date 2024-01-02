import Render from './index.rjs'

Page({
  data: {
    isAnonymous: true,
  },
  onLoad: function () {
    this.render = new Render(this)
  },
  toggle() {
    this.setData({
      isAnonymous: !this.data.isAnonymous,
    })
  },
  returnImageData(imageData) {
    console.log('ImageData from rjs', imageData)
  },
  getData() {
    let self = this
    // 安卓兼容性问题，需要先请求获取相册权限
    ty.authorize({
      scope: 'scope.writePhotosAlbum',
      success(e) {
        console.log('authorize success', e)
        ty.chooseCropImage({
          success(res) {
            const p = res.path
            self.render.draw(p)
          },
        })
      },
      fail(e) {
        console.log('authorize fail', e)
      },
      complete(e) {
        console.log('authorize complete', e)
      },
    })
  },
})
