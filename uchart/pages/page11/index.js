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

  tap(e) {
    this.render.tap(e)
  },
})
