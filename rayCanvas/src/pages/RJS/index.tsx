// page/index.tsx
import React from 'react';
import Chart from '@/components/chart';
import {usePageEvent, usePageInstance} from '@ray-js/ray'
 
import Render from './index.rjs';
 
export default () => {
  const ctx = usePageInstance();
  usePageEvent('onShow', function () {
    /**
     * 一. 页面中使用 rjs
     * ray中使用的组件是 react 组件，即使是混合开发的原生组件，也被看成 react 组件，
     * 因微信小程序本身限制，页面无法直接获取到小程序原生组件的节点，
     * 所以页面中使用rjs，需要先获取原生组件的实例。
     */
    const compInst = ctx.selectComponent('#xx'); // 通过页面实例的 `selectComponent` 获取原生组件实例
    const render = new Render(compInst);
    setTimeout(() => {
      render.getDOMByRJS().then(() => {
        render.getDocument();
      });
    }, 500);
  });
 
  return <Chart title="rjs demo from rjs" id="xx" type="2d" />;
};