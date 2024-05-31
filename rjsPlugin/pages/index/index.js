import Render from './index.rjs'

Page({
  data: {
    message: '',
  },
  onReady() {
    this.render = new Render(this);
    const systemInfo = ty.getSystemInfoSync();
    this.render.init('f1', systemInfo.pixelRatio);
  },


  up() {
    this.render.updateEcharts(/* newData */);
  }
});
