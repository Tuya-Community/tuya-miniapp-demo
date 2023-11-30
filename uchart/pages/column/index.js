import Render from './index.rjs'
let chartData = {
  categories: ['2016', '2017', '2018', '2019', '2020', '2021'],
  series: [
    {
      name: '目标值',
      data: [35, 36, 31, 33, 13, 34],
    },
    {
      name: '完成量',
      data: [18, 27, 21, 24, 6, 28],
    },
  ],
}
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

    this.render.drawCart2(chartData)

    this.render.drawCart3(chartData)
  },
})
