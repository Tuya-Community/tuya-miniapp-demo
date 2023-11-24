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
    ty.chooseImage({
      count: 1,
      success(imageData) {
        const p = imageData.tempFilePaths[0]
        self.render.draw(p)
      },
    })
  },
})
