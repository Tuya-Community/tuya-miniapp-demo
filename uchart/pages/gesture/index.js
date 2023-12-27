import Render from './index.rjs'
import chartData from './chartData'

let minOffset = 30 //最小偏移量，低于这个值不响应滑动处理
let minTime = 60 // 最小时间，单位：毫秒，低于这个值不响应滑动处理
let startX = 0 //开始时的X坐标
let startY = 0 //开始时的Y坐标
let startTime = 0 //开始时的毫秒数
let gestureDirection = ''
Page({
  data: {
    disableScroll: false,
    isMoving: false,
  },
  /**
   * 触摸开始事件，初始化startX、startY和startTime
   */
  touchStart: function (e) {
    console.log('touchStart', e)
    startX = e.touches[0].pageX || e.touches[0].x // 获取触摸时的x坐标
    startY = e.touches[0].pageY || e.touches[0].y // 获取触摸时的x坐标
    startTime = new Date().getTime() //获取毫秒数
    this.setData({ isMoving: true })
  },

  /**
   * 触摸取消事件 （手指触摸动作被打断，如来电提醒，弹窗），要将startX、startY和startTime重置
   */
  touchCancel: function (e) {
    startX = 0 //开始时的X坐标
    startY = 0 //开始时的Y坐标
    startTime = 0 //开始时的毫秒数
    this.setData({ isMoving: false })
  },

  /**
   * 触摸结束事件，主要的判断在这里
   */
  touchMove: function (e) {
    if (gestureDirection) {
      return
    }
    var endX = e.changedTouches[0].pageX || e.changedTouches[0].x
    var endY = e.changedTouches[0].pageY || e.changedTouches[0].y
    var touchTime = new Date().getTime() - startTime //计算滑动时间
    var xOffset = endX - startX
    var yOffset = endY - startY
    console.log('touchMove', xOffset, yOffset)

    if (Math.abs(xOffset) >= Math.abs(yOffset)) {
      console.log('水平')
      gestureDirection = 'horizontal'
      this.setData({
        disableScroll: true,
      })
    } else {
      console.log('垂直')
      gestureDirection = 'vertical'
      this.setData({
        disableScroll: false,
      })
    }
  },

  touchEnd() {
    gestureDirection = ''
    this.setData({ disableScroll: false, isMoving: false })
  },

  catchMove() {
    console.log('catchMove')
  },

  itemstart() {
    console.log('22222222222222222222item start')
  },
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

  touchstart(e) {
    console.log('canvas touchstart', this.data.disableScroll)
    this.render.touchstart(e)
  },
  touchmove(e) {
    this.render.touchmove(e)
  },
  touchend(e) {
    this.render.touchend(e)
    this.setData({ disableScroll: false })
  },
})
