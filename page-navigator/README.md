# page-navigator

## 描述

- 本示例描述了小程序不同方式的路由跳转，路由传参，页面间通信，返回劫持。
  - 通过 `navigator` 组件跳转
  - 通过 `ty.navigator`等 api 调用方式跳转
  - 通过 `ty.setNavigationBarBack({type: 'system' | 'custom'})` 设置导航后退类型。
  - 通过 `ty.onNavigationBarBack` 设置后退监听事件。

## 注意事项

- 小程序中的页面路由是一个栈结构，只能通过 `ty.navigateTo` 和 `ty.redirectTo` 等方式操作。且页面路由栈最多十层。路由操作则不再生效。
- ty.setNavigationBarBack 仅对当前页面有效，切换页面后，如需自定义，请重新设置。
- 自定义行为操作完成后，应重置回系统默认行为，避免无法退出当前页面。

## 相关文档

- [api 跳转路由](https://developer.tuya.com/cn/miniapp/framework/page/router#%E8%B7%AF%E7%94%B1%E6%96%B9%E5%BC%8F)
- [navigator 组件](https://developer.tuya.com/cn/miniapp/component/navigation/navigator#navigator)
- [如何拦截后退事件](https://www.tuyaos.com/viewtopic.php?t=171)
- [小程序间通信](https://developer.tuya.com/cn/miniapp/develop/miniapp/framework/event/app)
