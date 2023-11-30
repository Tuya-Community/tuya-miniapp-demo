import Render from './index.rjs'
import getChartData from './chartData'

Page({
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad() {
    this.render = new Render(this)
  },

  onReady() {
    this.draw()
  },

  draw() {
    this.render.drawCart1(getChartData())
  },
  touchstart(e) {
    this.render.touchstart(e)
  },
  touchmove(e) {
    this.render.touchmove(e)
  },
  touchend(e) {
    this.render.touchend(e)
  },
  updateData() {
    this.render.updateData(getChartData())
  },
})
