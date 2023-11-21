import MyRender from './index.rjs'

Page({
  /**
   * 页面的初始数据
   */
  onLoad() {
    this.render = new MyRender(this)
  },
  onReady() {
    this.render.initCanvas()
  },
  // 彩色 slider颜色变化
  handleSliderChange: function (e) {
    let rgb = e.detail
    this.render.changeStrokeStyle(`rgb(${rgb.r},${rgb.g},${rgb.b})`)
  },

  /**
   * 改变笔的粗细
   */
  handleLinewidth(e) {
    console.log(e.detail.value)
    this.render.changeLineWidth(e.detail.value)
  },
  /**
   * 触摸开始事件
   */
  touchstart(e) {
    this.render.touchstart(e.changedTouches[0].x, e.changedTouches[0].y)
  },
  /**
   * 触摸移动事件
   */
  touchmove(e) {
    this.render.touchmove(e.changedTouches[0].x, e.changedTouches[0].y)
    this.setData({
      text: Math.random(),
    })
  },
})
