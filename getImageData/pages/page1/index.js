import Render from './index.rjs'

Page({
  onLoad: function () {
    this.render = new Render(this)
  },

  returnImageData(imageData) {
    console.log('ImageData from rjs', imageData)
  },
  getData() {
    this.render.draw()
  },
})
