import Render from './index.rjs'
import chartData from './chartData'

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
    this.render.drawCart1(chartData)
  },
  tap(e){
    this.render.touchLegend(e)
  }
})
