# 地图组件

## 描述

- 本示例描述了地图组件的相关使用，具体属性请查看官方文档。

## 注意事项

- 在使用地图组件的时候请务必先阅读[原生组件说明](https://developer.tuya.com/cn/miniapp/component/native-component/native-component)，了解异层渲染的原生组件使用限制。
- 在 map 组件上弹窗等覆盖操作时，需要调用`ty.nativeDisabled`禁止原生组件区域原生手势管理。
- 为了解决覆盖在原生组件之上的其它组件手势被原生拦截的限制。小程序专门提供了 [CoverView](https://developer.tuya.com/cn/miniapp/panels/component/view-container/cover-view) 组件，可以覆盖在部分原生组件上面。使用的注意事项请[阅读](https://developer.tuya.com/cn/miniapp/component/view-container/cover-view#bug--tip)。

## 相关链接

- [文档地址](https://developer.tuya.com/cn/miniapp/panels/component/map/map)
- 如果你需要更多 map 相关 api 请查看[地址](https://developer.tuya.com/cn/miniapp/api/location/getLocation)。
