# Ray 中兼容微信生态

## 使用步骤

### 1.项目配置

- 参考[智能小程序生态兼容](https://developer.tuya.com/cn/miniapp/develop/miniapp/guide/compatible)在`project.tuya.json`文件中配置`compilerOptions.compatible`。

### 2.组件引入

- 方法一：在页面`index.config.ts`的`usingComponents`引入 vant 组件使用。
- 方法二：在 js 文件中 import vant 组件后使用。

### 3.事件绑定

- 请参考原生小程序混合开发模式。

## 注意事项

- Vant 组件没有 ts 类型定义，为避免干扰，可在代码中 ignore。
- 在使用 Vant 组件之前，请先阅读[原生小程序混合开发](https://developer.tuya.com/cn/miniapp/develop/ray/framework/mixed-development)和[智能小程序社区生态兼容]([https://developer.tuya.com/cn/miniapp/guide/compatible](https://developer.tuya.com/cn/miniapp/develop/miniapp/guide/compatible))。
- Vant 组件的 iconfont 地址为阿里 cdn，使用时请在 IoT 平台添加`https://at.alicdn.com` 静态资源白名单。
