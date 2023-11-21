import Render from './index.rjs'
Component({
  data: {
    absoluteScale: 1,
  },
  properties: {
    width: {
      type: Number,
      value: 300, // 画布宽度
    },
    height: {
      type: Number,
      value: 300, // 画布高度
    },
    pixelSize: {
      type: Number,
      value: 20, // 点阵大小
    },
    pixelShape: {
      type: String,
      value: 'circle', // 点阵形状circle, rect
    },
    pixelColor: {
      type: String,
      value: '#eee', // 默认点阵颜色
    },
    pixelGap: {
      type: Number,
      value: 0, // 点阵间距
    },
    pixelData: {
      type: Array,
      value: [],
    },
  },
  lifetimes: {
    created: function () {
      this.render = new Render(this)
    },
    ready: function (e) {
      this.render.initPanel({
        width: this.data.width,
        height: this.data.height,
        pixelSize: this.data.pixelSize,
        pixelShape: this.data.pixelShape,
        pixelColor: this.data.pixelColor,
        pixelGap: this.data.pixelGap,
        pixelData: this.data.pixelData,
      })
    },
  },
  methods: {
    // 彩色 slider颜色变化
    handleSliderChange: function (e) {
      let rgb = e.detail
      this.render.updateColor(`rgb(${rgb.r},${rgb.g},${rgb.b})`)
    },
    // 缩小画布
    shrinkCanvas: function () {
      if (this.data.absoluteScale > 1) {
        this.setData({
          absoluteScale: this.data.absoluteScale - 1,
        })
        this.render.shrink()
      } else {
        ty.showToast({
          title: '已缩小至最小倍数',
        })
      }
    },
    // 放大画布
    magnifyCanvas: function () {
      if (this.data.absoluteScale < 3) {
        this.setData({
          absoluteScale: this.data.absoluteScale + 1,
        })
        this.render.magnify()
      } else {
        ty.showToast({
          title: '已放大至最大倍数',
        })
      }
    },
    // 清除画布
    clearCanvas: function () {
      this.render.clear()
    },
    // 橡皮擦
    eraserCanvas: function () {
      this.render.eraser()
    },
    getBoxData(box) {
      this.triggerEvent('smearChanged', box)
    },
    toggleDragCanvas(e) {
      this.render.updateIsDrag(e.detail.value)
    },
    catchEvent() {
      // console.log('事件捕捉')
    },
  },
})
