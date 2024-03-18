# WebView

## 本示例描述了 WebView 组件的使用

## 注意事项

- 在使用 WebView 组件的时候请务必先阅读[原生组件说明](https://developer.tuya.com/cn/miniapp/component/native-component/native-component)，了解异层渲染的原生组件使用限制。
- 因为 WebView 组件是覆盖于整个小程序页面，因此客户端会接管小程序手势，这会导致在调试模式下 vconsole 无法唤起。调试模式下可以使用`nativeDisabled`禁止原生组件区域原生手势管理。
- openInnerH5 不支持在安卓上预览PDF等文件。

## 相关链接

- [WebView](https://developer.tuya.com/cn/miniapp/panels/component/open/web-view)
- 网页向小程序 postMessage 时，请使用 `@tuya-miniapp/jssdk` 进行操作, [文档](https://www.npmjs.com/package/@tuya-miniapp/jssdk)