// @/components/chart/index.js
import Render from './index.rjs';
Component({
  lifetimes: {
    attached() {
      this.rjs = new Render(this);
    },
    ready: function () {
      this.rjs.getDOMByRJS();
    },
  },
  methods: {
    myFn: function (args) {
      console.log('this my function', args);
    },
  },
});