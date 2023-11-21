import Render from './index.rjs'
import chartData from './chartData'

Page({
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad() {
    this.render =  new Render(this)
  },

  onReady() {
    this.draw()
  },

  draw() {
    this.render.drawCart1(chartData)
  },

  touchstart(e){
    this.render.touchstart(e)
  },
  touchmove(e){
    this.render.touchmove(e)
  },
  touchend(e){
    this.render.touchend(e)
  }
})
