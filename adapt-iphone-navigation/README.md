# adapt-iphone-navigation

## 描述

- 本示例描述解决自定义导航栏时 在 iphone 下刘海屏适配的问题。

- 当使用自定义导航栏时需要在`app.json`或者 page 的`index.json`中添加`"navigationStyle": "custom"`配置自定义导航，仅保留右上角胶囊按钮

## 页面：

### setCss

- 通过设置 css[safe-area-inset-top](https://developer.mozilla.org/en-US/docs/Web/CSS/env#safe-area-inset-top)避开顶部导航刘海区域。

### setStyle

- 通过`ty.getSystemInfo`获取`safeArea.top`设置顶部导航刘海区域。

### 相关文档

[ty.getSystemInfo](https://developer.tuya.com/cn/miniapp/api/base/system/getSystemInfo#tygetsysteminfo)
