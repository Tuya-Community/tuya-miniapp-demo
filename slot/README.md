# slot

## 描述

- 本示例带你了解插槽`slot`的使用。
- slot 的使用场景包括但不限于布局组件、表单列、tab、弹框显示内容等。
- 自定义组件通过`triggerEvent`向页面发起通信。

## 注意事项

- slot 不支持放在 block 标签上

```xml
// 错误写法❌
<block slot="main">
  <view></view>
  <view></view>
</block>
```

## 相关文档

- [组件的 slot](https://developer.tuya.com/cn/miniapp/framework/custom-component/tyml-tyss#%E7%BB%84%E4%BB%B6-tyml-%E7%9A%84-slot)
- [triggerEvent](https://developer.tuya.com/cn/miniapp/framework/api/component#%E8%A7%A6%E5%8F%91%E4%BA%8B%E4%BB%B6)
